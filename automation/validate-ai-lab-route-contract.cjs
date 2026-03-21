#!/usr/bin/env node
/**
 * Ensures AI Lab catalog hrefs, pages-to-visit aiLab paths, and smoke routes stay aligned.
 * Exits 1 on mismatch with actionable stderr.
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TOOLS_TS = path.join(ROOT, 'app', 'ai-lab', 'ai-lab-tools.ts');
const PAGES = path.join(ROOT, 'automation', 'data', 'pages-to-visit.json');
const SMOKE = path.join(ROOT, 'config', 'smoke-routes.txt');

function extractToolHrefs() {
  const text = fs.readFileSync(TOOLS_TS, 'utf8');
  const hrefs = new Set();
  const re = /href:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(text))) {
    const h = m[1];
    if (h.startsWith('/ai-lab/')) hrefs.add(h);
  }
  return hrefs;
}

function loadPagesVisit() {
  const j = JSON.parse(fs.readFileSync(PAGES, 'utf8'));
  const ai = Array.isArray(j.aiLab) ? j.aiLab : [];
  return new Set(ai.map((x) => x.path).filter(Boolean));
}

function loadSmokeRoutes() {
  const raw = fs.readFileSync(SMOKE, 'utf8');
  return new Set(
    raw
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#')),
  );
}

function diffSet(a, labelA, b, labelB) {
  const onlyA = [...a].filter((x) => !b.has(x)).sort();
  const onlyB = [...b].filter((x) => !a.has(x)).sort();
  if (onlyA.length || onlyB.length) {
    console.error(`[ai-lab-route-contract] mismatch ${labelA} vs ${labelB}`);
    if (onlyA.length) console.error(`  only in ${labelA}:`, onlyA.join(', '));
    if (onlyB.length) console.error(`  only in ${labelB}:`, onlyB.join(', '));
    return false;
  }
  return true;
}

function main() {
  if (!fs.existsSync(TOOLS_TS) || !fs.existsSync(PAGES) || !fs.existsSync(SMOKE)) {
    console.error('[ai-lab-route-contract] missing input file(s)');
    process.exit(1);
  }

  const tools = extractToolHrefs();
  const pages = loadPagesVisit();
  const smoke = loadSmokeRoutes();

  let ok = true;
  ok = diffSet(tools, 'ai-lab-tools hrefs', pages, 'pages-to-visit aiLab') && ok;

  const missingSmoke = [...tools].filter((h) => !smoke.has(h)).sort();
  if (missingSmoke.length) {
    ok = false;
    console.error('[ai-lab-route-contract] tool routes missing from config/smoke-routes.txt:', missingSmoke.join(', '));
    console.error('  Fix: npm run smoke:routes:generate (and commit config/smoke-routes.txt)');
  }

  if (ok) {
    console.log(
      `[ai-lab-route-contract] ok (${tools.size} tools, smoke covers catalog)`
    );
  } else {
    process.exit(1);
  }
}

main();
