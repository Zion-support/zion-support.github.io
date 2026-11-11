"""Exercise the actual coverage workflow checkout using local Git fixtures."""
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[2]
SOURCE = (ROOT / '.github/workflows/test-coverage.yml').read_text()
STEP = SOURCE.split('      - name: Checkout public merge snapshot without stored credentials\n', 1)[1].split('      - name:', 1)[0]
CODE = '\n'.join(line[10:] for line in STEP.split('        run: |\n', 1)[1].splitlines() if line.startswith('          '))
URL = 'https://github.com/Zion-support/zion-support.github.io.git'

class CheckoutTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        self.repo = self.root / 'repo'
        self.work = self.root / 'work'
        self.repo.mkdir()
        self.work.mkdir()
        self.env = dict(os.environ, GIT_CONFIG_NOSYSTEM='1', GIT_CONFIG_GLOBAL=os.devnull,
                        GIT_TERMINAL_PROMPT='0')
        self.git('init', '-q')
        self.git('config', 'user.name', 'Checkout fixture')
        self.git('config', 'user.email', 'fixture@example.invalid')
        (self.repo / 'file').write_text('fixture')
        self.git('add', '.')
        self.git('commit', '-qm', 'initial')
        self.initial = self.git('rev-parse', 'HEAD')
        self.git('update-index', '--add', '--cacheinfo', '160000,' + self.initial + ',.pageploy')
        self.git('commit', '-qm', 'gitlink without gitmodules')
        self.tip = self.git('rev-parse', 'HEAD')
        # Synthetic PR merge object: exact identity must survive shallow fetch.
        self.merge = self.git('commit-tree', 'HEAD^{tree}', '-p', self.tip, '-p', self.initial, '-m', 'fixture merge snapshot')

    def tearDown(self):
        self.tmp.cleanup()

    def git(self, *args, cwd=None):
        return subprocess.check_output(['git', *args], cwd=cwd or self.repo,
                                       env=self.env, stderr=subprocess.DEVNULL, text=True).strip()

    def checkout(self, sha=None, code=None, **env):
        return subprocess.run(['bash', '-c', code or CODE.replace(URL, str(self.repo))],
                              cwd=self.work, env=dict(self.env, CANDIDATE_SHA=sha or self.merge, **env),
                              capture_output=True, text=True)

    def test_workflow_uses_event_merge_sha_without_auth_or_submodule_action(self):
        self.assertIn('CANDIDATE_SHA: ${{ github.sha }}', STEP)
        self.assertNotIn('pull_request.head.sha', STEP)
        self.assertNotIn('actions/checkout@', SOURCE)
        self.assertNotIn('github.token', STEP)
        self.assertIn('credential.helper=', CODE)
        self.assertIn('submodule.recurse=false', CODE)

    def test_exact_merge_snapshot_shallow_gitlink_preserved_no_credentials(self):
        result = self.checkout()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.git('rev-parse', 'HEAD', cwd=self.work), self.merge)
        self.assertEqual(self.git('rev-list', '--count', 'HEAD', cwd=self.work), '1')
        self.assertIn('160000 commit ' + self.initial, self.git('ls-tree', 'HEAD', '.pageploy', cwd=self.work))
        self.assertFalse((self.work / '.gitmodules').exists())
        config = self.git('config', '--local', '--list', cwd=self.work).lower()
        self.assertNotIn('extraheader', config)
        self.assertNotIn('credential.helper', config)
        self.assertNotIn('sshcommand', config)
        # Reproduce the command family that breaks actions/checkout cleanup.
        old = subprocess.run(['git', 'submodule', 'foreach', '--recursive', 'true'],
                             cwd=self.work, env=self.env, capture_output=True, text=True)
        self.assertNotEqual(old.returncode, 0)
        self.assertIn('No url found', old.stderr)

    def test_nonempty_workspace_preserved(self):
        (self.work / '.keep').write_text('retain')
        self.assertNotEqual(self.checkout().returncode, 0)
        self.assertEqual((self.work / '.keep').read_text(), 'retain')
        self.assertFalse((self.work / '.git').exists())

    def test_invalid_sha_rejected_before_mutation(self):
        self.assertNotEqual(self.checkout(sha='not-a-sha').returncode, 0)
        self.assertEqual(list(self.work.iterdir()), [])

    def test_unavailable_sha_fails(self):
        self.assertNotEqual(self.checkout(sha='0' * 40).returncode, 0)
        result = subprocess.run(['git', 'rev-parse', '--verify', 'HEAD'],
                                cwd=self.work, capture_output=True)
        self.assertNotEqual(result.returncode, 0)

    def test_head_mismatch_fails(self):
        binary = self.root / 'bin'
        binary.mkdir()
        real_git = shutil.which('git')
        (binary / 'git').write_text('#!/bin/bash\nif [[ "$1" == rev-parse && "$2" == HEAD ]]; then\nprintf "%040d\\n" 0\nelse\nexec "' + real_git + '" "$@"\nfi\n')
        (binary / 'git').chmod(0o755)
        result = self.checkout(PATH=str(binary) + os.pathsep + os.environ['PATH'])
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('differs from workflow candidate', result.stdout)

if __name__ == '__main__':
    unittest.main()
