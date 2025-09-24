import fs from 'fs';

const INPUT_PATH = 'open_prs_full.json';
const OUTPUT_PATH = 'open_prs.txt';

if (!fs.existsSync(INPUT_PATH)) {
  process.exit(0);
}

const raw = fs.readFileSync(INPUT_PATH, 'utf8');
let data = [];
try {
  data = JSON.parse(raw);
} catch (err) {
  console.error('Failed to parse open_prs_full.json');
  process.exit(1);
}

const numbers = [];
for (const pr of Array.isArray(data) ? data : []) {
  if (!pr || !pr.number) continue;
  numbers.push(pr.number);
}

const content = numbers.map(String).join('\n') + (numbers.length ? '\n' : '');
fs.writeFileSync(OUTPUT_PATH, content, 'utf8');
