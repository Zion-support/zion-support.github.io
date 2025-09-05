const fs = require('fs');
const path = require('path');
;
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'roadmap-issues.json');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const OWNER = 'Zion-Holdings';
const REPO = 'zion.app';
;
function ensureDir(filePath) {;
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive:true });
}
<<<<<<< HEAD
;
async function fetchJson(url) {;
  const res = await fetch(url, {;
    headers:{;
      'Accept':'application/vnd.github+json',;
      ...(GITHUB_TOKEN ? { Authorization:`Bearer ${GITHUB_TOKEN}` } {}),;
      'X-GitHub-Api-Version':'2022-11-28',;
      'User-Agent':'Zion-Automation/1.0',;
    },;
=======

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github+json';
      ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {});
      'X-GitHub-Api-Version': '2022-11-28';
      'User-Agent': 'Zion-Automation/1.0';
    };
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  });
  if (!res.ok) throw new Error(`GitHub API failed ${res.status} ${url}`);
  return res.json();
}
;
async function run() {;
  const labels = ['roadmap', 'feature', 'bug'];
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/issues?state=open&labels=${encodeURIComponent(labels.join(','))}&per_page=100`;
  let items = [];
  try {;
    const data = await fetchJson(url);
<<<<<<< HEAD
    items = (data || []).filter((i) => !i.pull_request).map((i) => ({;
      number:i.number,;
      title:i.title,;
      labels:i.labels?.map((l) => (typeof l === 'string' ? l :l.name)) || [],;
      url:i.html_url,;
      created_at:i.created_at,;
      comments:i.comments,;
=======
    items = (data || []).filter((i) => !i.pull_request).map((i) => ({
      number: i.number;
      title: i.title;
      labels: i.labels?.map((l) => (typeof l === 'string' ? l : l.name)) || [];
      url: i.html_url;
      created_at: i.created_at;
      comments: i.comments;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }));
  } catch (e) {;
    console.warn('Roadmap issues fetch failed:', e.message);
  }
<<<<<<< HEAD
;
  const payload = {;
    generatedAt:new Date().toISOString(),;
    description:'Open issues for roadmap/feature/bug labels',;
    total:items.length,;
    items,;
=======

  const payload = {
    generatedAt: new Date().toISOString();
    description: 'Open issues for roadmap/feature/bug labels';
    total: items.length;
    items;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  };
;
  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Roadmap Issues written to ${OUTPUT_PATH} with ${items.length} items.`);
}
;
run().catch((err) => {;
  console.error('Roadmap Issues failed:', err);
  process.exit(0);
});