const fs = require('fs');
const path = require('path');

const CACHE_DURATION = 10000; // 10 seconds
let cache = null;
let lastRead = 0;

function isEnabled(flag) {
  const now = Date.now();
  
  // Use cache if still valid
  if (cache && (now - lastRead) < CACHE_DURATION) {
    return !!cache[flag];
  }
  
  // Read from file
  const configPath = path.join(__dirname, '..', 'config', 'feature-flags.json');
  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    cache = JSON.parse(raw);
    lastRead = now;
    return !!cache[flag];
  } catch (err) {
    console.error('Error reading feature flags:', err.message);
    return false;
  }
}

module.exports = { isEnabled };