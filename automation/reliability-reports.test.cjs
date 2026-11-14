'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const {probe} = require('./reliability-reports.cjs');
const html = '<html><body><main>Published content</main></body></html>';
function mock(pages) { return async url => {
  const value = pages[new URL(url).pathname];
  return {url, status: value?.status || 200, text: async () => value?.html || html};
}; }
test('follows a legacy alias to the published catalog', async () => {
  const result = await probe('/old/', {request: mock({'/old/': {html: '<meta http-equiv="refresh" content="0; url=/services/">'+html}})});
  assert.equal(result.healthy, true); assert.equal(result.chain.length, 2);
  assert.equal(result.finalUrl, 'https://ziontechgroup.com/services/');
});
test('rejects self-refresh and two-page cycles', async () => {
  const self = await probe('/old/', {request: mock({'/old/': {html: '<meta http-equiv="refresh" content="0; url=/old/">'+html}})});
  assert.equal(self.healthy, false); assert.equal(self.error, 'redirect_loop');
  const cycle = await probe('/a/', {request: mock({'/a/': {html:'<meta http-equiv="refresh" content="0; url=/b/">'+html},'/b/': {html:'<meta http-equiv="refresh" content="0; url=/a/">'+html}})});
  assert.equal(cycle.error, 'redirect_loop');
});
test('reports real HTTP and network failures instead of healthy defaults', async () => {
  assert.equal((await probe('/missing/', {request: mock({'/missing/': {status:404}})})).healthy, false);
  const failed = await probe('/', {request: async () => {throw new Error('offline');}});
  assert.equal(failed.healthy, false); assert.equal(failed.status, 0);
});
test('does not mistake an HTML 404 page or external redirect for healthy content', async () => {
  assert.equal((await probe('/', {request: mock({'/':{html:'<html><title>Page not found</title></html>'}})})).healthy, false);
  const external = await probe('/', {request: mock({'/':{html:'<meta http-equiv="refresh" content="0; url=https://example.com/">'+html}})});
  assert.equal(external.error, 'unexpected_external_redirect');
});
