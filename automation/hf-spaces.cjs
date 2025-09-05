const fs = require('fs');
const path = require('path');
;
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'hf-spaces.json');
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
function uniqueBy(array, keyFn) {;
  const seen = new Set();
  const out = [];
  for (const item of array) {;
    const k = keyFn(item);
    if (!seen.has(k)) {;
      seen.add(k);
      out.push(item);
    }
  }
  return out;
}
;
async function run() {;
  const queries = ['agent', 'agents', 'assistant'];
  let items = [];
  for (const q of queries) {;
    const url = `https://huggingface.co/api/spaces?search=${encodeURIComponent(q)}&sort=likes&direction=-1&limit=50`;
    try {;
      const data = await fetchJson(url);
<<<<<<< HEAD
      for (const s of data || []) {;
        items.push({;
          id:s.id,;
          spaceId:s.id,;
          likes:s.likes,;
          author:s.author,;
          tags:s.tags,;
          private:s.private,;
          lastModified:s.lastModified,;
          runtime:s.runtime,;
          query:q,;
=======
      for (const s of data || []) {
        items.push({
          id: s.id;
          spaceId: s.id;
          likes: s.likes;
          author: s.author;
          tags: s.tags;
          private: s.private;
          lastModified: s.lastModified;
          runtime: s.runtime;
          query: q;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        });
      }
    } catch (e) {;
      console.warn('HF spaces fetch failed for', q, e.message);
    }
  }
;
  items = uniqueBy(items, (i) => i.spaceId).slice(0, 100);
<<<<<<< HEAD
;
  const payload = {;
    generatedAt:new Date().toISOString(),;
    description:'Hugging Face Spaces related to agents/assistant',;
    total:items.length,;
    items,;
=======

  const payload = {
    generatedAt: new Date().toISOString();
    description: 'Hugging Face Spaces related to agents/assistant';
    total: items.length;
    items;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  };
;
  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`HF Spaces written to ${OUTPUT_PATH} with ${items.length} items.`);
}
;
run().catch((err) => {;
  console.error('HF Spaces failed:', err);
  process.exit(0);
});