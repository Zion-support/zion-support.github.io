#!/usr/bin/env python3
"""Synthetic fixtures for the public-ops publication boundary."""
import importlib.util
from pathlib import Path
import tempfile
import unittest
import shutil
import subprocess
import os

spec = importlib.util.spec_from_file_location("privacy_guard", Path(__file__).with_name("assert-no-private-ops.py"))
g = importlib.util.module_from_spec(spec)
spec.loader.exec_module(g)


class GuardTests(unittest.TestCase):
    def fixture(self, rel, blocked):
        with tempfile.TemporaryDirectory() as td:
            p = Path(td) / rel
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text("synthetic fixture")
            self.assertEqual(bool(g.violations(td)), blocked, rel)

    def test_private_formats_blocked(self):
        for name in ("CEO-OPS.md", "STATUS.md", "state.json", "log.json", "agents.json", "notes.txt", "report.pdf"):
            with self.subTest(name=name):
                self.fixture("ops/comms/" + name, True)

    def test_allowed_only_index(self):
        self.fixture("ops/comms/index.html", False)

    def test_nested_language_root(self):
        self.fixture("pt/OPS/COMMS/CEO-OPS.MD", True)

    def test_nested_index_alias(self):
        self.fixture("ops/comms/private/index.html", True)

    def test_missing_root(self):
        self.assertTrue(g.violations("/missing-zion-privacy-test-root"))

    def test_symlink_named_index(self):
        with tempfile.TemporaryDirectory() as td:
            p = Path(td) / "ops" / "comms"
            p.mkdir(parents=True)
            (p / "index.html").symlink_to("/etc/passwd")
            self.assertTrue(g.violations(td))

    def test_irrelevant_files_allowed(self):
        self.fixture("apps/example.html", False)

    def test_symlink_root(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / 'real').mkdir()
            (root / 'alias').symlink_to(root / 'real', target_is_directory=True)
            self.assertTrue(g.violations(root / 'alias'))

    def test_nested_symlink_directory(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / 'ops').mkdir()
            (root / 'ops' / 'comms').symlink_to('/missing-synthetic-target')
            self.assertTrue(g.violations(root))

    def test_canonical_guards_final_artifact_before_upload(self):
        root = Path(__file__).resolve().parents[1]
        source = (root / '.github/workflows/canonical-pages.yml').read_text()
        prepare = source.index('run: bash scripts/prepare-pages-out.sh')
        guard = source.index('run: python3 scripts/assert-no-private-ops.py out')
        upload = source.index('uses: actions/upload-pages-artifact')
        self.assertLess(prepare, guard)
        self.assertLess(guard, upload)
        block = source.split('      - name: Validate final publication boundary\n', 1)[1].split('      - name:', 1)[0]
        self.assertNotIn('continue-on-error', block)
        self.assertNotIn('if:', block)
        self.assertNotIn('||', block)

    def test_missing_guard_fails_closed(self):
        with tempfile.TemporaryDirectory() as td:
            run = subprocess.run(['python3', 'scripts/assert-no-private-ops.py', 'out'],
                                 cwd=td, capture_output=True)
            self.assertNotEqual(run.returncode, 0)

    def copy_function(self):
        text = (Path(__file__).resolve().parent / 'prepare-pages-out.sh').read_text()
        return 'copy_public_file() {' + text.split('copy_public_file() {', 1)[1].split('\n}\n', 1)[0] + '\n}\n'

    def test_every_fallback_copy_uses_source_guard(self):
        text = (Path(__file__).resolve().parent / 'prepare-pages-out.sh').read_text()
        self.assertEqual(text.count('cp -a '), 1)
        self.assertEqual(text.count('copy_public_file '), 7)

    def test_fallback_regular_bytes_preserved_and_ancestor_links_blocked(self):
        paths = ['discovery/index.html', 'field-services/brazil/index.html',
                 'blog/customer/index.html', 'public/assets/css/site.css',
                 'assets/css/site.css', 'public/plans/index.html', 'plans/index.html']
        for rel in paths:
            with self.subTest(path=rel), tempfile.TemporaryDirectory() as td:
                root = Path(td)
                src = root / rel
                src.parent.mkdir(parents=True)
                src.write_bytes(b'synthetic regular bytes')
                env = dict(os.environ, SOURCE=rel)
                command = self.copy_function() + 'copy_public_file "$SOURCE" output'
                result = subprocess.run(['bash', '-c', command], cwd=root, env=env, capture_output=True)
                self.assertEqual(result.returncode, 0)
                self.assertEqual((root / 'output').read_bytes(), src.read_bytes())
                (root / 'output').unlink()
                # Move the source parent and leave a symlink ancestor in its place.
                hidden = root / 'hidden'
                src.parent.rename(hidden)
                src.parent.symlink_to(hidden, target_is_directory=True)
                result = subprocess.run(['bash', '-c', command], cwd=root, env=env, capture_output=True)
                self.assertNotEqual(result.returncode, 0)
                self.assertFalse((root / 'output').exists())
                self.assertEqual((hidden / src.name).read_bytes(), b'synthetic regular bytes')

    def test_fallback_invalid_missing_special_and_file_links_blocked(self):
        for kind in ['missing', 'fifo', 'symlink', 'directory', 'absolute', 'traversal']:
            with self.subTest(kind=kind), tempfile.TemporaryDirectory() as td:
                root = Path(td)
                rel = 'input'
                if kind == 'fifo':
                    os.mkfifo(root / rel)
                elif kind == 'symlink':
                    (root / 'target').write_text('fixture')
                    (root / rel).symlink_to('target')
                elif kind == 'directory':
                    (root / rel).mkdir()
                elif kind == 'absolute':
                    rel = str(root / 'input')
                    Path(rel).write_text('fixture')
                elif kind == 'traversal':
                    rel = '../input'
                result = subprocess.run(['bash', '-c', self.copy_function() + 'copy_public_file "$SOURCE" output'],
                                        cwd=root, env=dict(os.environ, SOURCE=rel), capture_output=True)
                self.assertNotEqual(result.returncode, 0)
                self.assertFalse((root / 'output').exists())

    def test_prepare_synthetic_site_excludes_private_source(self):
        source = Path(__file__).resolve().parent
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / 'scripts').mkdir()
            for name in ('prepare-pages-out.sh', 'assert-no-private-ops.py', 'export-public-pages.py'):
                shutil.copyfile(source / name, root / 'scripts' / name)
            # Mock only the unrelated renderer; keep real bash, Python and file-copy logic.
            (root / 'bin').mkdir()
            node = root / 'bin/node'
            node.write_text('#!/bin/sh\nexit 0\n')
            node.chmod(0o755)
            for rel in ('services/ai-automation/index.html', 'plans/index.html', 'discovery/index.html'):
                file = root / 'public' / rel
                file.parent.mkdir(parents=True, exist_ok=True)
                file.write_text('7sY00k7JScFV99Bf044ZG06' + 'x' * 6000)
            env = dict(os.environ, PATH=str(root / 'bin') + os.pathsep + os.environ['PATH'])
            def run():
                return subprocess.run(['bash', str(root / 'scripts/prepare-pages-out.sh')],
                                      env=env, capture_output=True, text=True)
            self.assertEqual(run().returncode, 0)
            self.assertTrue((root / 'out/plans/index.html').is_file())
            private = root / 'public/ops/comms/state.json'
            private.parent.mkdir(parents=True)
            private.write_text('SYNTHETIC_PRIVATE_FIXTURE')
            result = run()
            self.assertEqual(result.returncode, 0)
            self.assertNotIn('SYNTHETIC_PRIVATE_FIXTURE', result.stdout + result.stderr)
            self.assertFalse((root / 'out/ops/comms/state.json').exists())
            # Reproduce the excluded-source alias through a root blog ancestor.
            hidden = root / 'public/ops/comms/private/index.html'
            hidden.parent.mkdir(parents=True)
            hidden.write_text('SYNTHETIC_PRIVATE_FIXTURE')
            (root / 'blog').mkdir()
            (root / 'blog/customer').symlink_to('../public/ops/comms/private', target_is_directory=True)
            result = run()
            self.assertNotEqual(result.returncode, 0)
            self.assertFalse((root / 'out/blog/customer/index.html').exists())
            self.assertEqual(hidden.read_text(), 'SYNTHETIC_PRIVATE_FIXTURE')
            (root / 'blog/customer').unlink()
            # A renderer reintroducing a denied file must fail the final gate.
            node.write_text('#!/bin/sh\nmkdir -p "$2/ops/comms"\nprintf synthetic > "$2/ops/comms/late.json"\n')
            self.assertNotEqual(run().returncode, 0)
            node.write_text('#!/bin/sh\nmkfifo "$2/fifo"\n')
            result = run()
            self.assertNotEqual(result.returncode, 0)
            self.assertNotIn('SYNTHETIC_PRIVATE_FIXTURE', result.stdout + result.stderr)


    def test_special_files_rejected_anywhere_in_artifact(self):
        with tempfile.TemporaryDirectory() as td:
            os.mkfifo(Path(td) / 'fifo')
            self.assertIn('fifo', g.violations(td))

    def test_directory_symlink_ancestors_rejected(self):
        for alias, hidden in (("ops", "comms/state.json"),
                              ("pt", "ops/comms/state.json"),
                              ("pt/OPS", "COMMS/state.json")):
            with self.subTest(alias=alias), tempfile.TemporaryDirectory() as td:
                root = Path(td)
                public = root / "public"
                public.mkdir()
                target = root / "target"
                private = target / hidden
                private.parent.mkdir(parents=True)
                private.write_text("synthetic private fixture")
                link = public / alias
                link.parent.mkdir(parents=True, exist_ok=True)
                link.symlink_to(target, target_is_directory=True)
                self.assertIn(alias, g.violations(public))

    def test_dangling_symlink_rejected(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / "ops").symlink_to(root / "missing", target_is_directory=True)
            self.assertIn("ops", g.violations(root))

    def test_regular_file_symlink_rejected(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            target = root / "style.css"
            target.write_text("/* synthetic public asset */")
            (root / "alias.css").symlink_to(target)
            self.assertIn("alias.css", g.violations(root))


    def test_public_file_alias_to_private_external_tree_rejected(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            public = root / "public"
            public.mkdir()
            private = root / "ops/comms/state.json"
            private.parent.mkdir(parents=True)
            private.write_text("synthetic private fixture")
            (public / "alias.json").symlink_to("../ops/comms/state.json")
            self.assertIn("alias.json", g.violations(public))

if __name__ == "__main__":
    unittest.main()
