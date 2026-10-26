#!/usr/bin/env python3
"""Read-only CI diagnostics; capability assertions remain in the workflows."""
import argparse
import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile

NAMES = ("commit-and-push-main.sh", "push-main-with-retry.sh")

def expected_stub(name):
    return f'#!/usr/bin/env bash\necho "stub: scripts/automation/{name} executed (no-op)"\nexit 0\n'

def require_known_stub(name, source):
    if name not in NAMES or source != expected_stub(name):
        raise ValueError("Helper changed or is not a known no-op; refusing to execute it. Review the new implementation separately.")

def reusable_contract(source):
    if not re.search(r"(?m)^  workflow_call:\s*$", source):
        raise ValueError("Missing workflow_call contract")
    steps = re.split(r"(?m)^      - name:", source)[1:]
    for command in ("automation:preflight", "workflows:validate:light"):
        matches = [s for s in steps if re.search(r"(?m)^        run: npm run " + re.escape(command) + r"\s*$", s)]
        if not matches or not any(not re.search(r"(?m)^        if:", s) for s in matches):
            raise ValueError("Missing unconditional npm run " + command + "; preflight is not a replacement for workflow validation. See existing PR #71560.")
    if not any("run: npm run workflows:contracts:node" in s and "inputs.run_contracts" in s for s in steps):
        raise ValueError("Missing optional contracts step")

def probe_stub(name, source):
    require_known_stub(name, source)
    bash = shutil.which("bash")
    if not bash:
        raise ValueError("bash is required for the isolated no-op probe")
    with tempfile.TemporaryDirectory(prefix="zion-helper-probe-") as tmp:
        root = Path(tmp)
        (root / ".git").mkdir()
        sentinels = {".git/HEAD": b"ref: refs/heads/safety-probe\n", ".git/index": b"sentinel-index", "tracked.txt": b"must remain unchanged"}
        for filename, content in sentinels.items():
            (root / filename).write_bytes(content)
        (root / "bin").mkdir()
        git = root / "bin/git"
        git.write_text('#!/bin/sh\necho forbidden > "$HOME/git.called"\nexit 97\n')
        git.chmod(0o700)
        helper = root / name
        helper.write_text(source)
        env = {"PATH": str(root / "bin") + os.pathsep + os.defpath, "HOME": str(root), "LANG": "C", "GIT_CONFIG_NOSYSTEM": "1", "GIT_CONFIG_GLOBAL": os.devnull}
        result = subprocess.run([bash, str(helper)], cwd=root, env=env, capture_output=True, text=True, timeout=5)
        if result.returncode or result.stderr or result.stdout.strip() != f"stub: scripts/automation/{name} executed (no-op)":
            raise ValueError("No-op output/status contract failed")
        if (root / "git.called").exists() or helper.read_text() != source or any((root / f).read_bytes() != b for f, b in sentinels.items()):
            raise ValueError("Mutation detected in isolated helper probe")

def self_test():
    for name in NAMES:
        source = expected_stub(name)
        probe_stub(name, source)
        for bad in ("", source + "git status\n", source.replace("exit 0", "exit 1")):
            try:
                require_known_stub(name, bad)
            except ValueError:
                pass
            else:
                raise ValueError("Unsafe/changed helper negative fixture was accepted")
    print("PASS: two isolated no-op probes and six rejected helper fixtures; no capability restoration claimed.")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=("self-test", "helpers", "reusable"))
    parser.add_argument("--root", type=Path, default=Path.cwd())
    args = parser.parse_args()
    self_test()
    if args.mode == "helpers":
        for name in NAMES:
            f = args.root / "scripts/automation" / name
            if f.is_symlink():
                raise ValueError("Refusing symlink helper")
            probe_stub(name, f.read_text())
        print("::warning::Current helpers are verified no-op stubs, NOT working rebase/push helpers. Original behavior assertions remain and must fail until an owner-approved implementation exists.")
    elif args.mode == "reusable":
        reusable_contract((args.root / ".github/workflows/reusable-workflow-ci.yml").read_text())
        print("PASS: separate unconditional preflight and workflow validator; optional contracts retained.")

if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError, subprocess.SubprocessError) as exc:
        raise SystemExit("CI contract diagnostic FAILED: " + str(exc))
