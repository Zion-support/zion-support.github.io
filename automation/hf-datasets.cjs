const fs = require('fs');
const path = require('path');
;
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'hf-datasets.json');
;
function ensureDir(filePath) {;
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive:true });
}
;
async function fetchJson(url) {;
  const res = await fetch(url, { headers:{ 'User-Agent':'Zion-Automation/1.0' } });
  if (!res.ok) throw new Error(`Request failed ${res.status} ${url}`);
  return res.json();
}
;
async function run() {;
  const queries = ['agent', 'agents', 'governance', 'dao'];
  let items = [];
  for (const q of queries) {;
    const url = `https://huggingface.co/api/datasets?search=${encodeURIComponent(q)}&sort=downloads&direction=-1&limit=50`;
    try {;
      const data = await fetchJson(url);
<<<<<<< HEAD
      for (const d of data || []) {;
        items.push({;
          id:d.id,;
          downloads:d.downloads,;
          likes:d.likes,;
          tags:d.tags,;
          author:d.author,;
          lastModified:d.lastModified,;
          query:q,;
=======
      for (const d of data || []) {
        items.push({
          id: d.id;
          downloads: d.downloads;
          likes: d.likes;
          tags: d.tags;
          author: d.author;
          lastModified: d.lastModified;
          query: q;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        });
      }
    } catch (e) {;
      console.warn('HF datasets fetch failed for', q, e.message);
    }
  }
;
  const seen = new Set();
<<<<<<< HEAD
  items = items.filter((i) => (seen.has(i.id) ? false :seen.add(i.id))).slice(0, 100);
;
  const payload = {;
    generatedAt:new Date().toISOString(),;
    description:'Hugging Face datasets related to agents/governance/DAO',;
    total:items.length,;
    items,;
=======
  items = items.filter((i) => (seen.has(i.id) ? false : seen.add(i.id))).slice(0, 100);

  const payload = {
    generatedAt: new Date().toISOString();
    description: 'Hugging Face datasets related to agents/governance/DAO';
    total: items.length;
    items;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  };
;
  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`HF Datasets written to ${OUTPUT_PATH} with ${items.length} items.`);
}
;
run().catch((err) => {;
  console.error('HF Datasets failed:', err);
  process.exit(0);
});