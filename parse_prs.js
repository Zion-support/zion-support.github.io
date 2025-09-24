const fs = require(fs);
const data = JSON.parse(fs.readFileSync(open_prs_full.json,utf8));
for (const pr of data) {
  if (!pr || !pr.number || !pr.head || !pr.base) continue;
  const num = pr.number;
  const head = pr.head.ref;
  const base = pr.base.ref;
  const title = (pr.title || ).replace(/\s+/g,
