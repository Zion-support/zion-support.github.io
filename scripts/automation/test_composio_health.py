import importlib.util
import io
import json
import unittest
import urllib.error
from pathlib import Path

spec=importlib.util.spec_from_file_location('health',Path(__file__).with_name('check-composio-health.py'))
health=importlib.util.module_from_spec(spec)
spec.loader.exec_module(health)

class ComposioHealthTests(unittest.TestCase):
    def test_project_auth_pagination_and_no_credentials_in_report(self):
        calls=[]
        pages=[{'items':[{'toolkit':{'slug':'github'},'status':'ACTIVE','state':{'token':'must-not-leak'}}],'next_cursor':'page2'},
               {'items':[{'toolkit':{'slug':'gmail'},'status':'EXPIRED'}]}]
        def opener(request,timeout):
            calls.append(request)
            return io.BytesIO(json.dumps(pages.pop(0)).encode())
        report=health.collect('test-project-key',opener)
        self.assertEqual(report['total'],2)
        self.assertEqual(report['statuses'],{'ACTIVE':1,'EXPIRED':1})
        self.assertEqual(calls[0].get_header('X-api-key'),'test-project-key')
        self.assertIn('cursor=page2',calls[1].full_url)
        self.assertNotIn('must-not-leak',json.dumps(report))
        self.assertNotIn('test-project-key',json.dumps(report))

    def test_bad_credentials_fail_without_response_body_leak(self):
        def opener(request,timeout):
            raise urllib.error.HTTPError(request.full_url,401,'unauthorized',{},None)
        with self.assertRaisesRegex(RuntimeError,'HTTP 401'):
            health.collect('private-key',opener)

    def test_repeated_cursor_fails_instead_of_infinite_loop(self):
        def opener(request,timeout):
            return io.BytesIO(b'{"items":[],"next_cursor":"same"}')
        with self.assertRaisesRegex(ValueError,'repeated'):
            health.collect('test-key',opener)

if __name__=='__main__': unittest.main()
