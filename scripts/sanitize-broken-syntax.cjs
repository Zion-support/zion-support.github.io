#!/usr/bin/env node

/*
  Sanitizes common corruption patterns introduced in many .ts/.tsx files:
  - Trailing ";'" or ";''" after statements/imports
  - Stray "'" before commas in object/props default values (e.g., "',")
  - Broken self-closing tags like '"/>' -> '/>'
  - Space in URL protocols: 'https: //' -> 'https://'
  - Fix meta property names with spaces after colon (e.g., 'og: site_name')
  - Remove leading ', in destructuring '({,' -> '({'
*/

const fs = require('fs');
const path = require('path');

/**
 * Recursively find files by extensions under a directory
 */
function findFiles(dir, extensions) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.git')) continue;
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (extensions.some(ext => entry.name.endsWith(ext))) {
        results.push(full);
      }
    }
  }
  return results;
}

function sanitizeContent(content) {
  let updated = content;

  // 1) Remove trailing ;' at line ends (one or more stray quotes after semicolon)
  updated = updated.replace(/;'+\s*$/gm, ';');

  // 2) Remove a stray quote before semicolon at line end: "';" -> ';'
  updated = updated.replace(/'\s*;\s*$/gm, ';');

  // 3) Remove stray quote before comma in prop defaults and objects: "'," -> ","
  updated = updated.replace(/',\s*(,|\)|\]|\})/g, '$1');

  // 3b) Replace broken comma/semicolon combos
  updated = updated.replace(/;\s*,/g, ',');
  updated = updated.replace(/,\s*;\s*,/g, ', ');
  updated = updated.replace(/,\s*;\s*$/gm, ',');

  // 4) Fix destructuring with leading comma: '({,' -> '({' and '[,x' cases
  updated = updated.replace(/\(\{,\s*/g, '({ ');

  // 5) Fix broken self-closing tags that look like '"/>' -> '/>'
  updated = updated.replace(/"\s*\/>/g, '/>');

  // 6) Normalize protocol with spaces: 'https: //' -> 'https://'
  updated = updated.replace(/https:\s*\/\//g, 'https://');

  // 7) Fix OpenGraph/Twitter property names with space after colon: 'og: site_name' -> 'og:site_name'
  updated = updated.replace(/(og|twitter):\s+([a-zA-Z_:-]+)/g, (m, p1, p2) => `${p1}:${p2}`);

  // 8) Remove accidental quotes before closing meta/script/link tags like content=... " />
  updated = updated.replace(/\s"\s*\/>/g, ' />');

  // 9) Remove stray quotes immediately after import lines: `import ...;';` -> `import ...;`
  updated = updated.replace(/^(\s*import\b[^\n;]*;)'\s*$/gm, '$1');

  // 10) Remove stray quotes immediately after export lines: `export ...;';` -> `export ...;`
  updated = updated.replace(/^(\s*export\b[^\n;]*;)'\s*$/gm, '$1');

  // 11) Clean JSX closing lines polluted by quotes/semicolons
  updated = updated.replace(/>("|')\s*;\s*$/gm, '>');
  updated = updated.replace(/(<\/[^>]+>)("|')\s*;\s*$/gm, '$1');

  // 12) Fix meta content lines where closing '/>' moved into the value
  updated = updated.replace(/content="([^"\n]*?)\/>\s*"?\s*>?/g, (m, val) => `content="${val}" />`);

  // 13) Collapse double semicolons
  updated = updated.replace(/;;+/g, ';');

  // 14) In default params or objects, change '= value;,' to '= value,'
  updated = updated.replace(/=\s*([^,}]+);\s*,/g, '= $1,');

  return updated;
}

function processFiles(files) {
  let changed = 0;
  for (const file of files) {
    try {
      const original = fs.readFileSync(file, 'utf8');
      const sanitized = sanitizeContent(original);
      if (sanitized !== original) {
        fs.writeFileSync(file, sanitized, 'utf8');
        changed++;
        console.log(`Sanitized: ${file}`);
      }
    } catch (err) {
      console.warn(`Skip (error): ${file} -> ${err.message}`);
    }
  }
  console.log(`Done. Modified ${changed} file(s).`);
}

const roots = [path.join(process.cwd(), 'src'), path.join(process.cwd(), 'pages')];
const files = roots.flatMap(dir => findFiles(dir, ['.ts', '.tsx']));
processFiles(files);

