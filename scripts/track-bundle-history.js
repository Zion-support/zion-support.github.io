// scripts/track-bundle-history.js
// Appends current bundle size to .hermes/memory/bundle-history.json
// Keeps last 10 entries for trend analysis

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HISTORY_PATH = path.join(ROOT, '.hermes', 'memory', 'bundle-history.json');

function readHistory() {
  try {
    if (fs.existsSync(HISTORY_PATH)) {
      return JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8'));
    }
  } catch (e) {
    console.error('Error reading history:', e.message);
  }
  return { history: [] };
}

function writeHistory(data) {
  fs.mkdirSync(path.dirname(HISTORY_PATH), { recursive: true });
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(data, null, 2));
}

function main() {
  const size = process.env.BUNDLE_SIZE;
  if (!size) {
    console.error('BUNDLE_SIZE env var required');
    process.exit(1);
  }

  const data = readHistory();
  data.history.unshift({
    size: parseInt(size, 10),
    ts: new Date().toISOString(),
    hash: process.env.GITHUB_SHA || 'local',
  });

  // Keep last 10 entries
  if (data.history.length > 10) {
    data.history = data.history.slice(0, 10);
  }

  writeHistory(data);
  console.log(`✅ Bundle history updated: ${HISTORY_PATH} (${data.history.length} entries)`);
}

main();