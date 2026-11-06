"""CI-only runtime comparison. Not a required compiler/lint validation gate."""
from __future__ import annotations
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import resource
import signal
import subprocess
import sys
from urllib.parse import urlsplit

from observe_aggregate import observe

SOURCE = '338624d0d9f95488afafc4dcf0a730aa5bbb2fa5'
TREE = '41af3370283d048f2f3cf75648ac8cddc51b3651'
BLOBS = {
    'package.json': '264496d8c3c7eda756d19e901a0cc70508b8123b',
    'package-lock.json': '80801b6c2fca3f2610f28993fcc2a8fe25e6fd47',
    'tsconfig.json': 'c128011dc8f2ddb69da4f11dd57b09abe501dacb',
}
ENV = {'PATH': os.defpath, 'LANG': 'C.UTF-8', 'TZ': 'UTC',
       'GIT_CONFIG_NOSYSTEM': '1', 'GIT_CONFIG_SYSTEM': '/dev/null',
       'GIT_CONFIG_GLOBAL': '/dev/null'}

class ProbeFailure(Exception):
    """Only fixed codes, never source strings, are reported."""


class ControllerCancelled(BaseException):
    def __init__(self, signum):
        self.signum = signum


def cancel_controller(signum, _frame):
    raise ControllerCancelled(signum)


def verify_core_policy(pattern):
    # A pipe/collector may ignore RLIMIT_CORE=0. Do not change host security settings.
    if not pattern.strip() or pattern.lstrip().startswith('|'):
        raise ProbeFailure('host_core_collector_not_approved')


def sha256(filename):
    result = hashlib.sha256()
    with open(filename, 'rb') as source:
        for chunk in iter(lambda: source.read(1024 * 1024), b''):
            result.update(chunk)
    return result.hexdigest()


def bounded_capture(command, cwd, env, timeout):
    child = None
    survivors = False
    try:
        previous = signal.pthread_sigmask(signal.SIG_BLOCK, {signal.SIGINT, signal.SIGTERM})
        try:
            child = subprocess.Popen(command, cwd=cwd, env=env,
                                     stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
                                     start_new_session=True,
                                     preexec_fn=lambda: signal.pthread_sigmask(signal.SIG_SETMASK, previous))
        finally:
            signal.pthread_sigmask(signal.SIG_SETMASK, previous)
        output, _ = child.communicate(timeout=timeout)
    finally:
        if child is not None:
            try:
                os.killpg(child.pid, signal.SIGKILL)
                survivors = child.returncode is not None
            except ProcessLookupError:
                pass
            if child.returncode is None:
                child.wait(timeout=5)
            if child.stdout:
                child.stdout.close()
    if survivors or child.returncode:
        raise ProbeFailure('preflight_command_failed')
    return output


def quiet(command, cwd, *, timeout=120):
    return bounded_capture(command, cwd, ENV, timeout)


def verify_source(source):
    if quiet(['git', 'rev-parse', 'HEAD'], source).decode().strip() != SOURCE:
        raise ProbeFailure('source_head_mismatch')
    if quiet(['git', 'rev-parse', 'HEAD^{tree}'], source).decode().strip() != TREE:
        raise ProbeFailure('source_tree_mismatch')
    for name, expected in BLOBS.items():
        body = (source / name).read_bytes()
        actual = hashlib.sha1(b'blob ' + str(len(body)).encode() + b'\0' + body).hexdigest()
        if actual != expected:
            raise ProbeFailure('source_input_mismatch')
    quiet(['git', '-c', 'diff.external=', '-c', 'core.hooksPath=/dev/null',
           'diff-index', '--no-ext-diff', '--quiet', 'HEAD', '--'], source)
    if quiet(['git', 'ls-files', '--others', '--exclude-standard', '-z'], source):
        raise ProbeFailure('untracked_source_inputs')
    if (source / '.npmrc').exists():
        raise ProbeFailure('unreviewed_project_npmrc')
    p = json.loads((source / 'package.json').read_text())
    if p.get('scripts', {}).get('type-check') != 'tsc --noEmit':
        raise ProbeFailure('compiler_command_mismatch')


def validate_lock(lock):
    packages = lock.get('packages', {})
    if lock.get('lockfileVersion') != 3 or not packages:
        raise ProbeFailure('lock_format_mismatch')
    for name, package in packages.items():
        if not name:
            continue
        if package.get('link'):
            raise ProbeFailure('linked_dependency')
        resolved = package.get('resolved')
        if not resolved:
            if package.get('inBundle') is not True:
                raise ProbeFailure('dependency_resolution_missing')
            continue
        url = urlsplit(resolved)
        if (url.scheme != 'https' or url.hostname != 'registry.npmjs.org'
                or url.username or url.password or url.port not in (None, 443)
                or url.query or url.fragment):
            raise ProbeFailure('nonpublic_dependency_resolution')
        if not re.fullmatch(r'sha512-[A-Za-z0-9+/]+={0,2}', package.get('integrity', '')):
            raise ProbeFailure('dependency_integrity_missing')
    return len(packages)


def dependency_identity(directory):
    root = directory.resolve()
    digest = hashlib.sha256()
    count = total_bytes = 0
    for current, dirs, files in os.walk(root, followlinks=False):
        dirs.sort(); files.sort()
        for name in dirs + files:
            item = Path(current) / name
            if item.is_symlink():
                if not item.resolve().is_relative_to(root):
                    raise ProbeFailure('external_dependency_symlink')
                digest.update(str(item.relative_to(root)).encode() + b'\0link\0')
                digest.update(os.readlink(item).encode() + b'\0')
        for name in files:
            item = Path(current) / name
            digest.update(str(item.relative_to(root)).encode() + b'\0')
            with item.open('rb') as f:
                for chunk in iter(lambda: f.read(1024*1024), b''):
                    digest.update(chunk); total_bytes += len(chunk)
            digest.update(b'\0'); count += 1
    return {'files': count, 'bytes': total_bytes, 'sha256': digest.hexdigest()}


def runtime(node, expected, source):
    js = "process.stdout.write(JSON.stringify({version:process.version,heap_limit:require('v8').getHeapStatistics().heap_size_limit}))"
    data = json.loads(quiet([str(node), '--max-old-space-size=4096', '-e', js], source, timeout=15))
    if data.get('version') != expected:
        raise ProbeFailure('runtime_version_mismatch')
    return {**data, 'binary_sha256': sha256(node)}


def inventory(node, source):
    script = Path(__file__).with_name('runtime_inventory.cjs')
    data = json.loads(quiet([str(node), '--max-old-space-size=4096', str(script), str(source)], source))
    if data.get('inventory_kind') != 'filesystem_initial_roots' or not data.get('root_count'):
        raise ProbeFailure('inventory_failed')
    return data


def emit(value):
    print(json.dumps(value, sort_keys=True, allow_nan=False), flush=True)


def main():
    # Inherited by every subprocess, including lightweight runtime/inventory preflight.
    resource.setrlimit(resource.RLIMIT_CORE, (0, 0))
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', required=True)
    parser.add_argument('--scratch', required=True)
    parser.add_argument('--node20', required=True)
    parser.add_argument('--node22', required=True)
    args = parser.parse_args()
    verify_core_policy(Path('/proc/sys/kernel/core_pattern').read_text())
    source, scratch = Path(args.source).resolve(), Path(args.scratch).resolve()
    nodes = [(Path(args.node20).resolve(), 'v20.20.2'), (Path(args.node22).resolve(), 'v22.23.4')]
    verify_source(source)
    lock_entries = validate_lock(json.loads((source / 'package-lock.json').read_text()))
    versions = [runtime(node, version, source) for node, version in nodes]
    npm = nodes[1][0].parent.parent / 'lib/node_modules/npm/bin/npm-cli.js'
    if not npm.is_file() or (source / 'node_modules').exists():
        raise ProbeFailure('dependency_install_precondition')
    install = observe([str(nodes[1][0]), str(npm), 'ci', '--ignore-scripts', '--no-audit',
                       '--no-fund', '--userconfig=/dev/null', '--globalconfig=/dev/null',
                       '--logs-max=0', '--loglevel=silent', '--update-notifier=false',
                       '--cache=' + str(scratch / 'npm-cache')], source,
                      completion_marker_required=False)
    emit({'phase': 'install', 'counts_as_required_gate': False,
          'success': install['complete'] and install['exit_code'] == 0,
          'exit_code': install['exit_code'], 'status': install['status'],
          'scripts_disabled': True, 'lock_entries': lock_entries})
    if not install['complete'] or install['exit_code'] != 0:
        return install['exit_code'] or 1
    verify_source(source)
    before_deps = dependency_identity(source / 'node_modules')
    inventories = [inventory(node, source) for node, _ in nodes]
    if inventories[0] != inventories[1]:
        raise ProbeFailure('runtime_initial_roots_differ')
    emit({'phase': 'preflight', 'source_commit': SOURCE, 'source_tree': TREE,
          'counts_as_required_gate': False, 'runtimes': versions,
          'installed_dependencies': before_deps, 'initial_roots': inventories[0],
          'installation_runtime': 'v22.23.4', 'cold_incremental_destination': 'discarded'})
    outcomes = []
    for i, (node, version) in enumerate(nodes):
        verify_source(source)
        if inventory(node, source) != inventories[0]:
            raise ProbeFailure('roots_changed_before_measurement')
        result = observe([str(node), '--max-old-space-size=4096', '--trace-gc-nvp',
                          str(source / 'node_modules/typescript/bin/tsc'), '--noEmit',
                          '--pretty', 'false', '--extendedDiagnostics',
                          '--tsBuildInfoFile', '/dev/null'], source)
        emit({'phase': 'measurement', 'node_version': version, 'order': i+1, **result})
        outcomes.append(result)
        if result['controller_cancel_signal'] is not None:
            return result['exit_code']
        verify_source(source)
        if inventory(node, source) != inventories[0]:
            raise ProbeFailure('roots_changed_after_measurement')
        if dependency_identity(source / 'node_modules') != before_deps:
            raise ProbeFailure('dependencies_changed_after_measurement')
    complete = all(x['complete'] and x['exit_code'] == 0 for x in outcomes)
    emit({'phase': 'comparison', 'counts_as_required_gate': False,
          'both_compilers_completed_without_diagnostics': complete,
          'inputs_unchanged': True, 'native_install_compatibility_tested': False,
          'normal_typescript_and_eslint_gates_still_required': True})
    return 0 if complete else 1


if __name__ == '__main__':
    for sig in (signal.SIGTERM, signal.SIGINT):
        signal.signal(sig, cancel_controller)
    try:
        status = main()
    except BaseException as exc:
        # No traceback: messages from filesystem, compiler or dependency tools may leak paths.
        code = str(exc) if isinstance(exc, ProbeFailure) else 'probe_controller_failure'
        if isinstance(exc, ControllerCancelled):
            code = 'controller_cancelled'
        emit({'phase': 'blocked', 'counts_as_required_gate': False, 'failure_code': code})
        status = 128 + exc.signum if isinstance(exc, ControllerCancelled) else 1
    raise SystemExit(status)
