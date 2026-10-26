#!/usr/bin/env python3
"""Additional synthetic filesystem regression tests; not deployment proof."""
import importlib.util
from pathlib import Path
import tempfile
import unittest

spec=importlib.util.spec_from_file_location('fixtures',Path(__file__).with_name('test-use-case-map-artifact.py'))
fixtures=importlib.util.module_from_spec(spec);spec.loader.exec_module(fixtures)
mod=fixtures.mod

class PathTests(unittest.TestCase):
    def test_internal_map_symlink_rejected_without_writes(self):
        fixture=fixtures.Tests()
        with tempfile.TemporaryDirectory() as td:
            source,out=fixture.fixture(Path(td))
            alias=out/'apps/app-network-use-case-map.html'
            alias.symlink_to(out/'index.html')
            before=fixture.snapshot(out)
            with self.assertRaisesRegex(ValueError,'symlink alias'):mod.finalize(source,out)
            self.assertEqual(before,fixture.snapshot(out))
    def test_manifest_symlink_and_directory_rejected_without_writes(self):
        fixture=fixtures.Tests()
        for kind in ['symlink','directory']:
            with self.subTest(kind=kind),tempfile.TemporaryDirectory() as td:
                source,out=fixture.fixture(Path(td))
                target=out/'apps/use-case-map-locales.json'
                if kind=='symlink':target.symlink_to(out/'index.html')
                else:target.mkdir()
                before=fixture.snapshot(out)
                with self.assertRaises(ValueError):mod.finalize(source,out)
                self.assertEqual(before,fixture.snapshot(out))

if __name__=='__main__':unittest.main()
