import https from 'https';

const repo = process.env.GH_OWNER_REPO;
const token = process.env.GITHUB_TOKEN;
if (!repo || !token) {
  console.error('Missing GH_OWNER_REPO or GITHUB_TOKEN');
  process.exit(1);
}

const options = {
  headers: {
    'User-Agent': 'node',
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github+json'
  }
};

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ body: data, headers: res.headers });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 200)}`));
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  let url = `https://api.github.com/repos/${repo}/pulls?state=open&per_page=100`;
  const results = [];
  while (url) {
    const { body, headers } = await get(url);
    const prs = JSON.parse(body);
    for (const pr of prs) {
      const num = pr.number;
      const headRef = pr.head && pr.head.ref;
      const headRepo = pr.head && pr.head.repo && pr.head.repo.full_name;
      const title = (pr.title || '').replace(/\n/g, ' ');
      results.push({ num, headRef, headRepo, title });
    }
    // pagination
    const link = headers['link'];
    if (link && link.includes('rel="next"')) {
      const match = link.split(',').find((p) => p.includes('rel="next"'));
      url = match ? match.split(';')[0].trim().slice(1, -1) : null;
    } else {
      url = null;
    }
  }
  for (const r of results) {
    console.log(`${r.num}\t${r.headRef}\t${r.headRepo}\t${r.title}`);
  }
}

main().catch((e) => {
  console.error(e.message || String(e));
  process.exit(1);
});

