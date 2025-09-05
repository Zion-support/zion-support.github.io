const fs = require('fs');
const path = require('path');
;
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'hf-models.json');
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
  const queries = ['agent', 'agents', 'assistant', 'workflow'];
  let items = [];
  for (const q of queries) {;
    const url = `https://huggingface.co/api/models?search=${encodeURIComponent(q)}&sort=downloads&direction=-1&limit=50`;
    try {;
      const data = await fetchJson(url);
<<<<<<< HEAD
      for (const m of data || []) {;
        items.push({;
          id:m.id,;
          modelId:m.id,;
          likes:m.likes,;
          downloads:m.downloads,;
          pipeline_tag:m.pipeline_tag,;
          tags:m.tags,;
          private:m.private,;
          author:m.author,;
          lastModified:m.lastModified,;
          query:q,;
=======
      for (const m of data || []) {
        items.push({
          id: m.id;
          modelId: m.id;
          likes: m.likes;
          downloads: m.downloads;
          pipeline_tag: m.pipeline_tag;
          tags: m.tags;
          private: m.private;
          author: m.author;
          lastModified: m.lastModified;
          query: q;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        });
      }
    } catch (e) {;
      console.warn('HF models fetch failed for', q, e.message);
    }
  }
;
  items = uniqueBy(items, (i) => i.modelId).slice(0, 100);
<<<<<<< HEAD
;
  const payload = {;
    generatedAt:new Date().toISOString(),;
    description:'Hugging Face models related to agents/assistant/workflows',;
    total:items.length,;
    items,;
=======

  const payload = {
    generatedAt: new Date().toISOString();
    description: 'Hugging Face models related to agents/assistant/workflows';
    total: items.length;
    items;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  };
;
  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`HF Models written to ${OUTPUT_PATH} with ${items.length} items.`);
}
;
run().catch((err) => {;
  console.error('HF Models failed:', err);
  process.exit(0);
});