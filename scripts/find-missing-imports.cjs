const fs = require('fs');
const path = require('path');

const appPath = path.resolve(process.cwd(), 'App.tsx');
const src = fs.readFileSync(appPath, 'utf8');
const lines = src.split(/\r?\n/);
const imports = [];
for (const line of lines) {
  const m = line.match(/from\s+'(\.\/src\/[^']+)'/);
  if (m) imports.push(m[1]);
}

function existsAny(p) {
  const exts = ['.tsx', '.ts', '.jsx', '.js'];
  for (const ext of exts) {
    const full = path.resolve(process.cwd(), p + ext);
    if (fs.existsSync(full)) return true;
    // try index file in folder
    const idx = path.resolve(process.cwd(), p, 'index' + ext);
    if (fs.existsSync(idx)) return true;
  }
  return false;
}

const missing = imports.filter(p => !existsAny(p));
console.log(JSON.stringify(missing, null, 2));

