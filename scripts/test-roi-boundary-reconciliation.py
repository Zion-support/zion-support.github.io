"""Keep the restored content pipeline behind the publication boundary."""
from pathlib import Path
import hashlib
import os
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
WORKFLOW = ROOT / '.github/workflows/private-ops-boundary-test.yml'
REVIEWED_BLOB = '48f2a657a8c963ccd5911e1c8795b964ce4b360f'


def preflight():
    block = WORKFLOW.read_text().split('- name: Prepare actual Pages site\n', 1)[1]
    return block.split("          python3 - <<'PY'\n", 1)[1].split('          PY\n', 1)[0]


class Tests(unittest.TestCase):
    def run_preflight(self, content):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            script = root / 'scripts/test-finops-scenario.cjs'
            script.parent.mkdir()
            script.write_bytes(content)
            sentinel = root / 'keep-existing-fixture.html'
            sentinel.write_bytes(b'preserve existing bytes')
            before = {p.relative_to(root): p.read_bytes() for p in root.rglob('*') if p.is_file()}
            source = '\n'.join(line[10:] for line in preflight().splitlines())
            result = subprocess.run(['python3', '-c', source], cwd=root, capture_output=True, text=True)
            self.assertEqual(before, {p.relative_to(root): p.read_bytes() for p in root.rglob('*') if p.is_file()})
            return result

    def test_reviewed_restoration_blob_is_exact(self):
        data = (ROOT / 'scripts/test-finops-scenario.cjs').read_bytes()
        actual = hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()
        self.assertEqual(actual, REVIEWED_BLOB)
        self.assertIn(REVIEWED_BLOB, preflight())
        self.assertEqual(self.run_preflight(data).returncode, 0)

    def test_changed_test_fails_closed_without_writes(self):
        data = (ROOT / 'scripts/test-finops-scenario.cjs').read_bytes() + b'\n// changed\n'
        result = self.run_preflight(data)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('Fixture test changed; review required before build.', result.stderr)

    def test_fixed_temporary_fixtures_are_not_used(self):
        source = (ROOT / 'scripts/test-finops-scenario.cjs').read_text()
        self.assertNotIn('/tmp/neg-', source)
        self.assertNotIn('writeFile', source)
        self.assertNotIn('/tmp/neg-', preflight())
        self.assertNotIn('os.open', preflight())

    def test_export_precedes_render_and_guard_is_last(self):
        source = (ROOT / 'scripts/prepare-pages-out.sh').read_text()
        commands = [
            'python3 scripts/export-public-pages.py public out',
            'node scripts/restore-reviewed-guide-dependencies.cjs out',
            'node scripts/render-operational-tools.cjs out/',
            'node scripts/render-finops-scenario.cjs out/',
            'node scripts/test-finops-validation-gate.cjs out',
            'node scripts/test-operational-tools.cjs out --artifact-only',
            'node scripts/test-pages-repair-links.cjs out',
            'assert_money_path services/ai-automation/index.html',
            'assert_money_path plans/index.html',
            'assert_money_path discovery/index.html',
            'python3 scripts/assert-no-private-ops.py out',
        ]
        positions = [source.index(command) for command in commands]
        self.assertEqual(positions, sorted(positions))
        self.assertNotIn('cp -a public/.', source)

    def test_current_candidate_build_stays_read_only(self):
        source = WORKFLOW.read_text()
        self.assertIn('CANDIDATE_SHA: ${{ github.event.pull_request.head.sha }}', source)
        self.assertIn('permissions:\n  contents: read\n', source)
        for forbidden in ('upload-artifact', 'upload-pages-artifact', 'deploy-pages', 'pages: write', 'id-token: write'):
            self.assertNotIn(forbidden, source)
        self.assertIn('node scripts/test-operational-tools.cjs', source)
        self.assertIn('node scripts/test-roi-baseline.cjs', source)
        self.assertIn('node-version: ${{ steps.candidate-node.outputs.version }}', source)
        self.assertIn('package-manager-cache: false', source)
        self.assertNotIn('node-version-file:', source)

    def test_candidate_node_version_is_read_and_validated(self):
        block = WORKFLOW.read_text().split('- name: Read candidate Node version\n', 1)[1]
        block = block.split('run: |\n', 1)[1].split('      - name: Use repository Node version\n', 1)[0]
        script = '\n'.join(line[10:] for line in block.splitlines())
        for value, valid in [('22\n', True), ('22.12.0\n', True), ('22\nevil=1\n', False), ('lts/*', False), ('$(touch unsafe)', False)]:
            with self.subTest(value=value), tempfile.TemporaryDirectory() as td:
                root = Path(td)
                (root / 'source').mkdir()
                (root / 'source/.nvmrc').write_text(value)
                output = root / 'output'
                result = subprocess.run(['bash', '-c', script], cwd=root, env=dict(os.environ, BUILD_ROOT=str(root), GITHUB_OUTPUT=str(output)), capture_output=True, text=True)
                self.assertEqual(result.returncode == 0, valid)
                if valid:
                    self.assertEqual(output.read_text(), 'version=' + value.strip() + '\n')
                else:
                    self.assertFalse(output.exists())
                self.assertFalse((root / 'unsafe').exists())

    def test_content_changes_trigger_current_head_validation(self):
        source = WORKFLOW.read_text()
        for pattern in ('scripts/**', 'content/**', 'public/**'):
            self.assertIn("- '" + pattern + "'", source)


if __name__ == '__main__':
    unittest.main()
