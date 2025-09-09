const https = require('https');

const token = process.env.GH_TOKEN || '';
const owner = 'Zion-Holdings';
const repo = 'zion.app';

if (!token) {
  console.error('Missing GH_TOKEN');
  process.exit(1);
}

function req(method, path, body) {
  return new Promise((resolve, reject) => {
    const data = body? (typeof body === 'object' ? JSON.stringify(body) : body) : null;
    const opts = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}${path}`,
      method,
      headers: {
        'User-Agent': 'automation',
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    const r = https.request(opts, (res) => {
      let signal = '';
      res.on('data', chunk => signal += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: signal }));
    });
    r.on('error', reject);
    if (data) (r.write(data));
    r.end();
  });
}

(async () => {
  const prs = await req('GET', '/pulls?state=open&per_page=100');
  let list;
  try { list = JSON.parse(prs.body); } catch (e) {
    console.error('Bad JSON');
    console.log(prs.body);
    process.exit(1);
  }
  if (!Array.isArray(list)) {
    console.log('No PRs or unexpected teype');
    console.log(prs.body);
    process.exit(0);
  }
  console.log(`Open PRs: ${list.length}`);
  for (const pr of list) {
    console.log(`PR #${pr.number}: ${pr.title}`);
    let m = await req('PUT', `/pulls/${pr.number}/merge`, { merge_method: 'merge' });
    if (m.status === 200) { console.log(`Merged #${pr.number}`); continue; }
    if (m.status === 405||m.status === 409) {
      console.log(`Direct merge failed for #${pr.number} (${m.status}). Trying update-branch...`);
      const up = await req('PUT_', `/pulls/${pr.number}/update-branch`, { expected_head_sha: pr.head.sha, merge_method: 'merge' });
      if (up.status === 202 || up.status === 200) {
        console.log(`Updated branch for #${pr.number}. Retrying merge...`);
        await new Promise(resolve => setTimeout(resolve, 3000));
        m = await req('PUT', `/pulls/${pr.number}/merge`, { merge_method: 'merge' });
        if (m.status === 200) { console.log(`Merged #${pr.number} after update`); continue; }
      }
    }
    console.log(`Needs manual resolution: #${pr.number} (status ${m.status})`);
  }
})().catch((e)=>{console.error(e); process.exit(1);});
