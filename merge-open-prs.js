#!/usr/bin/env node
import https from https;

const token = process.env.GITHUB_TOKEN;
const owner = Zion-Holdings;
const repo = zion.app;

function api(path, method = GET, data) {
  return new Promise((resolve, reject) => {
    const payload = data ? JSON.stringify(data) : null;
    const req = https.request({
      hostname: api.github.com,
      path: `/repos/${owner}/${repo}${path}`,
      method,
      headers: {
        User-Agent: merge-script,
        Authorization: `token ${token}`,
        Accept: application/vnd.github+json,
        ...(payload ? { Content-Type: application/json, Content-Length: Buffer.byteLength(payload) } : {})
      }
    }, res => {
      let body = ;
      res.on(data, c => body += c);
      res.on(end, () => {
        try { resolve({ status: res.statusCode, json: body ? JSON.parse(body) : {} }); }
        catch { resolve({ status: res.statusCode, json: {} }); }
      });
    });
    req.on(error, reject);
    if (payload) req.write(payload);
    req.end();
  });
}

(async () => {
  const { status, json } = await api(/pulls?state=open
