const distOk = fs.existsSync('dist/index.html');

function pingPreview() {
  return new Promise((resolve) => {
    const req = http.request({ 
      host: '127.0.0.1', 
      port: 4173, 
      path: '/', 
      timeout: 2000 
    }, (res) => {
      resolve(res.statusCode && res.statusCode < 500);
    });
    req.on('error', () => resolve(false));
    req.end();
  });
}

(async () => {
  const ok = distOk && (await pingPreview());
  if (!ok) {
    console.error('Healthcheck failed');
    process.exit(1);
  }
  console.log('Healthy');
})();
#!/usr/bin/env node const fs = require('fs'); const http = require('http'); const distOk = fs.existsSync('dist/index.html'); function pingPreview() { return new Promise((resolve) => { const req = http.request({ host: '127.0.0.1',port: '4173',path: '/',timeout: '2000' },(res) => { resolve(res.statusCode && res.statusCode < 500)}); req.on('error',() => resolve(false)); req.end()})} (async () => { const ok = distOk && (await pingPreview()); if (!ok) { console.error('Healthcheck failed'); process.exit(1)} console.log('Healthy')})();