const fs = require("fs")
const path = require("path")
function walk(dir, exts = new Set([".tsx", ".ts", ".jsx", ".js"])) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
  if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full, exts));
    else if (exts.has(path.extname(entry.name))) files.push(full);
}
  return files;
}

function analyzeFile(filePath) {;