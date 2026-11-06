"""Offline tests execute the actual YAML gate shell with a rejecting Git mock."""
from pathlib import Path
import os
import subprocess
import tempfile
import unittest

WORKFLOW = Path(__file__).resolve().parents[1] / '.github/workflows/deploy-on-push.yml'
SOURCE = WORKFLOW.read_text()
A = 'a' * 40
B = 'b' * 40


def shell(name):
    block = SOURCE.split('    - name: ' + name + '\n', 1)[1]
    block = block.split('      run: |\n', 1)[1]
    lines = []
    for line in block.splitlines():
        if not line.startswith('        '):
            break
        lines.append(line[8:])
    return '\n'.join(lines)


BUILD = shell('Guard candidate main before artifact upload')
DEPLOY = shell('Guard candidate main immediately before deployment')


class PublicationHeadTests(unittest.TestCase):
    def run_gate(self, script, candidate=A, remote=None, checkout=A, error='0'):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            git = root / 'git'
            git.write_text('''#!/bin/sh
case "$1" in
ls-remote)
  [ "$2" = --exit-code ] || exit 90
  [ "$3" = https://github.com/Zion-support/zion-support.github.io.git ] || exit 91
  [ "$4" = refs/heads/main ] || exit 92
  [ "$MOCK_ERROR" = 0 ] || exit "$MOCK_ERROR"
  printf '%s\\n' "$MOCK_REMOTE";;
rev-parse)
  [ "$2" = HEAD ] || exit 93
  printf '%s\\n' "$MOCK_CHECKOUT";;
*) exit 94;;
esac
''')
            git.chmod(0o755)
            env = dict(os.environ, PATH=str(root)+os.pathsep+os.environ['PATH'],
                       CANDIDATE_SHA=candidate, MOCK_REMOTE=remote if remote is not None else A+'\trefs/heads/main',
                       MOCK_CHECKOUT=checkout, MOCK_ERROR=error)
            result = subprocess.run(['bash', '-c', script], env=env, cwd=root,
                                    capture_output=True, text=True, timeout=5)
            self.assertFalse((root/'injected').exists())
            return result.returncode

    def test_matching_head_passes_both_gates(self):
        for script in (BUILD, DEPLOY): self.assertEqual(0,self.run_gate(script))

    def test_main_advance_between_build_and_deploy_blocks(self):
        self.assertEqual(0,self.run_gate(BUILD))
        self.assertNotEqual(0,self.run_gate(DEPLOY, remote=B+'\trefs/heads/main'))

    def test_old_candidate_blocks_build(self):
        self.assertNotEqual(0,self.run_gate(BUILD, remote=B+'\trefs/heads/main'))

    def test_checkout_mismatch_blocks(self):
        self.assertNotEqual(0,self.run_gate(BUILD, checkout=B))

    def test_invalid_candidate_blocks_both(self):
        for candidate in ('', 'main', A+'\n', '$(touch injected)', 'a'*39, 'a'*41):
            for script in (BUILD, DEPLOY):
                with self.subTest(candidate=candidate): self.assertNotEqual(0,self.run_gate(script,candidate=candidate))

    def test_remote_failures_and_ambiguous_refs_block(self):
        for script in (BUILD, DEPLOY):
            self.assertNotEqual(0,self.run_gate(script,error='128'))
            for remote in ('', A+'\trefs/heads/other', A+'\trefs/heads/main\n'+B+'\trefs/heads/main'):
                self.assertNotEqual(0,self.run_gate(script,remote=remote))

    def test_guards_are_before_upload_and_immediately_before_deploy(self):
        self.assertLess(SOURCE.index('Guard candidate main before artifact upload'), SOURCE.index('uses: actions/upload-pages-artifact'))
        self.assertLess(SOURCE.index('python3 scripts/assert-no-private-ops.py out'), SOURCE.index('uses: actions/upload-pages-artifact'))
        deploy=SOURCE.split('    - name: Guard candidate main immediately before deployment\n',1)[1]
        self.assertEqual('Deploy to GitHub Pages',deploy.split('    - name: ',1)[1].split('\n',1)[0])
        self.assertIn('CANDIDATE_SHA: ${{ needs.build.outputs.sha }}',deploy)
        self.assertNotIn('continue-on-error', SOURCE.split('    - name: Guard candidate main before artifact upload',1)[1].split('    - name: Upload Pages artifact',1)[0])

    def test_old_checkout_missing_privacy_guard_fails_closed(self):
        with tempfile.TemporaryDirectory() as td:
            self.assertNotEqual(0,subprocess.run(['python3','scripts/assert-no-private-ops.py','out'],cwd=td,capture_output=True).returncode)


    def test_shared_helper_uses_tested_build_gate(self):
        root = Path(__file__).resolve().parents[1]
        helper = (root / 'scripts/assert-publication-main.sh').read_text().split('\n', 1)[1].strip()
        self.assertEqual(helper, BUILD.strip())

    def test_publishers_share_non_cancelling_lock_and_two_gates(self):
        root = Path(__file__).resolve().parents[1]
        for name in ('deploy-on-push.yml', 'static-deploy.yml', 'gh-pages.yml'):
            source = (root / '.github/workflows' / name).read_text()
            self.assertIn('concurrency:\n  group: pages-deploy\n  cancel-in-progress: false', source)
            if name != 'deploy-on-push.yml':
                self.assertEqual(source.count('run: bash scripts/assert-publication-main.sh'), 2)
                first = source.index('run: bash scripts/assert-publication-main.sh')
                second = source.rindex('run: bash scripts/assert-publication-main.sh')
                upload = source.index('uses: actions/upload-pages-artifact')
                deploy = source.index('uses: actions/deploy-pages')
                self.assertLess(first, upload)
                self.assertLess(upload, second)
                self.assertLess(second, deploy)

if __name__ == '__main__': unittest.main()
