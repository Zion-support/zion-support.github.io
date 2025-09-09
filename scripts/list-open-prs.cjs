const https = require('https');
const token = process.env.GH_TOKEN || '';
const owner = 'Zion-Holdings';
const repo = 'zion.app';
if (!token) { console.error('Missing GH_TOKEN'); process.exit(1); }
function req(path) {
  return new Promise((resolve, reject) => {
    const opts = { hostname: 'api.github.com', path, headers: { 'User-Agent': 'automation', 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github+json' } };
    https.get(opts, res => { let s=''; res.on('data', d=> s+=d); res.on('end', ()=> resolve({ status: res.statusCode, body: s })); }).on('error', reject);
  });
}
(async () => {
  const r = await req(`/repos/${owner}/${repo}/pulls?state=open&per_page=50`);
  const arr = JSON.parse(r.body);
  for (const pr of arr) {
    const line = [pr.number, pr.head.ref, pr.head.repo.full_name, pr.head.sha, pr.maintainer_can_modify].join('\t');
    console.log(line);
  }
})();
