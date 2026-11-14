const {test}=require('node:test'),assert=require('node:assert/strict');
const {sourceChanges}=require('./content-change-gate.cjs');
test('report-only and caches do not trigger application builds',()=>{
  assert.deepEqual(sourceChanges('?? automation/reports/result.json\0 M .eslintcache\0'),[]);
});
test('tracked, new, removed and renamed content all retain quality gates',()=>{
  assert.deepEqual(sourceChanges(' M app/page.tsx\0?? public/new/index.html\0 D content/old.json\0R  public/new.html\0public/old.html\0'),['app/page.tsx','public/new/index.html','content/old.json','public/new.html','public/old.html']);
});
