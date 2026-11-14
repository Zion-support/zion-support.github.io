const assert = require('node:assert/strict');
const http = require('node:http');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

// Optional fixture directory permits a baseline/patched comparison without
// installing the application's full dependency tree. All traffic is loopback.
const packageRoot = process.env.FOLLOW_REDIRECTS_PACKAGE;
const followHttp = (packageRoot
  ? require(path.resolve(packageRoot))
  : require('follow-redirects')).http;

async function listen(t, handler) {
  const server = http.createServer(handler);
  t.after(async () => {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  return `http://127.0.0.1:${server.address().port}`;
}

function readHeaders(url, options) {
  return new Promise((resolve, reject) => {
    const request = followHttp.get(url, options, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('error', reject);
      response.on('end', () => {
        try {
          assert.equal(response.statusCode, 200);
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
    });
    request.on('error', reject);
    request.setTimeout(3000, () => request.destroy(new Error('Loopback request timed out')));
  });
}

async function crossOriginSource(t) {
  const destination = await listen(t, (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(request.headers));
  });
  return listen(t, (_request, response) => {
    response.writeHead(302, { Location: `${destination}/target` });
    response.end();
  });
}

for (const crossRealm of [false, true]) {
  for (const arrayHeaders of [false, true]) {
    const realm = crossRealm ? 'cross-realm' : 'same-realm';
    const shape = arrayHeaders ? 'array' : 'object';
    test(`cross-origin redirect strips ${realm} sensitiveHeaders with ${shape} headers`, { timeout: 10000 }, async (t) => {
      const source = await crossOriginSource(t);
      const sensitiveHeaders = crossRealm
        ? vm.runInNewContext("['x-TEST-credential']")
        : ['x-TEST-credential'];
      assert.equal(Array.isArray(sensitiveHeaders), true);
      assert.equal(sensitiveHeaders instanceof Array, !crossRealm);
      const headers = arrayHeaders
        ? ['X-Test-Credential', 'synthetic-test-only-value', 'X-Harmless', 'keep-me']
        : { 'X-Test-Credential': 'synthetic-test-only-value', 'X-Harmless': 'keep-me' };
      const received = await readHeaders(`${source}/redirect`, { headers, sensitiveHeaders });
      assert.equal(received['x-test-credential'], undefined);
      assert.equal(received['x-harmless'], 'keep-me');
    });
  }
}

test('same-origin redirect preserves the intended custom header', { timeout: 10000 }, async (t) => {
  const source = await listen(t, (request, response) => {
    if (request.url === '/redirect') {
      response.writeHead(302, { Location: '/target' });
      response.end();
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(request.headers));
    }
  });
  const received = await readHeaders(`${source}/redirect`, {
    headers: { 'X-Test-Credential': 'synthetic-test-only-value' },
    sensitiveHeaders: vm.runInNewContext("['X-Test-Credential']"),
  });
  assert.equal(received['x-test-credential'], 'synthetic-test-only-value');
});

test('built-in credential header protections remain intact across origins', { timeout: 10000 }, async (t) => {
  const source = await crossOriginSource(t);
  const received = await readHeaders(`${source}/redirect`, {
    headers: {
      Authorization: 'synthetic-test-only-value',
      'Proxy-Authorization': 'synthetic-test-only-value',
      Cookie: 'synthetic-test-only=value',
      'X-Harmless': 'keep-me',
    },
    sensitiveHeaders: vm.runInNewContext("['X-Test-Credential']"),
  });
  assert.equal(received.authorization, undefined);
  assert.equal(received['proxy-authorization'], undefined);
  assert.equal(received.cookie, undefined);
  assert.equal(received['x-harmless'], 'keep-me');
});
