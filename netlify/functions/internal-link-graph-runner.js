exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  function walkFiles(dir, patterns, acc = []) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walkFiles(full, patterns, acc);
      } else {
        if (patterns.some(p => p.test(e.name))) acc.push(full);
      }
    }
    return acc;
  }
