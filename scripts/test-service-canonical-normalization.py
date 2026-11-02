import importlib.util
from pathlib import Path
import tempfile
import unittest

def load(name):
    spec=importlib.util.spec_from_file_location(name,Path(__file__).with_name(name+'.py'))
    module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
    return module

class CanonicalTests(unittest.TestCase):
    def test_backfill_and_generator_normalize_only_local_service_routes(self):
        general=load('gen-service-html');backfill=load('backfill_new_service_html')
        with tempfile.TemporaryDirectory() as tmp:
            general.SVC_DIR=tmp
            p=Path(tmp)/'sample'/'page.tsx';p.parent.mkdir()
            for canonical,expected in [('https://ziontechgroup.com/services/sample','https://ziontechgroup.com/services/sample/'),('https://ziontechgroup.com/services/sample/','https://ziontechgroup.com/services/sample/'),('https://example.com/services/sample','https://example.com/services/sample')]:
                p.write_text('title: "Sample", description: "Sample description", canonical: `'+canonical+'`')
                self.assertEqual(general.parse_tsx('sample')['canonical'],expected)
                result=backfill.parse_page_tsx(p)
                self.assertEqual(result['canonical'],expected)
                self.assertEqual(result['slug'],'sample')

if __name__=='__main__':unittest.main()
