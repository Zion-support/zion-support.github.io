#!/usr/bin/env node
/*
  Syntax cleanup script
  - Removes stray commas after semicolons and block openings
  - Fixes malformed switch case labels with trailing commas
  - Normalizes ") {," and "{," to ") {" and "{"
  - Repairs broken multi-line import for getPerformanceOptimizer
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '..', 'src');

/**
 * Recursively collect .ts and .tsx files under src
 */
function collectSourceFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'build') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectSourceFiles(full));
    } else if (entry.isFile() && (full.endsWith('.ts') || full.endsWith('.tsx'))) {
      files.push(full);
    }
  }
  return files;
}

function applyFixes(content, filePath) {
  let updated = content;

  // 1) Remove trailing comma immediately after semicolon at end of line
  updated = updated.replace(/;\s*,\s*$/gm, ';');

  // 2) Fix malformed case labels like: case 'x':,
  updated = updated.replace(/^(\s*case\s+[^:]+:)\s*,\s*$/gm, '$1');

  // 3) Normalize ") {," -> ") {"
  updated = updated.replace(/\)\s*\{\s*,\s*$/gm, ') {');

  // 4) Normalize "{," at end of line -> "{"
  updated = updated.replace(/\{\s*,\s*$/gm, '{');

  // 5) Normalize lines that start a function or block and accidentally end with a comma
  updated = updated.replace(/^(\s*(?:export\s+)?(?:async\s+)?(?:function|class)\b[^\n]*\{)\s*,\s*$/gm, '$1');

  // 6) Remove trailing comma after class field or interface property that ends with semicolon
  //    e.g., private session: SessionData;,
  updated = updated.replace(/(;\s*),\s*$/gm, '$1');

  // 6b) Remove trailing comma on default labels: default:,
  updated = updated.replace(/^(\s*default:)\s*,\s*$/gm, '$1');

  // 6c) Fix ternary branches split across lines with a trailing comma after the first branch
  //     "'... ',\n    : '...'") -> remove the comma after the first branch
  updated = updated.replace(/(['"])\s*,\s*\n(\s*):\s*/g, '$1\n$2: ');

  // 6d) Remove stray comma after logical operators at end of line: "||," or "&&,"
  updated = updated.replace(/\|\|\s*,\s*$/gm, '||');
  updated = updated.replace(/&&\s*,\s*$/gm, '&&');

  // 7) Remove trailing commas at line end after common closing tokens or quotes
  //    e.g., className="...",
  updated = updated.replace(/([\)\]\}'"\w>])\s*,\s*$/gm, '$1');

  // 8) Normalize JSX attribute trailing commas specifically (more targeted)
  updated = updated.replace(/(\b[a-zA-Z_:][-a-zA-Z0-9_:.]*=\s*"[^"]*)",\s*$/gm, '$1"');

  // 9) Flatten and comma-separate named imports: import { A\nB\nC } from 'x'
  updated = updated.replace(/import\s*\{([\s\S]*?)\}\s*from\s*(["'][^"']+["'])/g, (match, inner, from) => {
    const names = inner
      .split(/[\s,]+/)
      .map(s => s.trim())
      .filter(Boolean);
    if (names.length === 0) return match;
    return `import { ${names.join(', ')} } from ${from}`;
  });

  // 10) Remove comma right after end of block comment at line end: */,
  updated = updated.replace(/\*\/\s*,\s*$/gm, '*/');

  // 10b) Remove stray comma immediately after opening brace anywhere: "{,"
  updated = updated.replace(/\{\s*,/g, '{');

  // 10c) Remove stray comma immediately before a closing brace: ", }" or ",}"
  updated = updated.replace(/,\s*\}/g, '}');

  // 10d) Remove stray comma immediately before a closing paren: ", )" or ",)"
  updated = updated.replace(/,\s*\)/g, ')');

  // 11) Insert missing commas between object properties when next line is another property
  //     Example:
  //       title: 'Hello'\n
  //       description: 'World'  -> add comma after 'Hello'
  const lines = updated.split(/\n/);
  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i];
    const next = lines[i + 1];
    // Skip if current line already ends with comma, semicolon, or is empty
    if (/[,;]\s*$/.test(line) || /^\s*$/.test(line)) continue;
    // If next non-empty line starts with a closing brace or paren/bracket, do not add comma
    const nextTrim = next.trim();
    if (nextTrim.startsWith('}') || nextTrim.startsWith('});') || nextTrim.startsWith('],') || nextTrim.startsWith(')')) continue;
    // Detect property: value pattern (basic)
    const propertyPattern = /^\s*[A-Za-z_$][\w$-]*\s*:\s*.+$/;
    if (propertyPattern.test(line)) {
      lines[i] = line + ',';
      continue;
    }
    // Detect quoted property keys: 'og:title': value or "og:title": value
    const quotedPropertyPattern = /^\s*['"][^'"]+['"]\s*:\s*.+$/;
    if (quotedPropertyPattern.test(line)) {
      lines[i] = line + ',';
      continue;
    }
    // Insert comma after shorthand property in object literal when followed by another property line
    const shorthandPropPattern = /^\s*[A-Za-z_$][\w$]*\s*$/;
    const nextLooksLikeProp = /^(\s*[A-Za-z_$][\w$-]*\s*:|\s*['"][^'"]+['"]\s*:|\s*[A-Za-z_$][\w$]*\s*$)/.test(nextTrim);
    if (shorthandPropPattern.test(line) && nextLooksLikeProp) {
      lines[i] = line + ',';
      continue;
    }
    // Insert commas between adjacent string literals inside arrays
    const stringLiteralLine = /^\s*['"][\s\S]*['"]\s*$/;
    if (stringLiteralLine.test(line) && (nextTrim.startsWith("'") || nextTrim.startsWith('"'))) {
      lines[i] = line + ',';
      continue;
    }
    // Insert comma after closing brace of an object in an array when next line starts another object
    if (/^\s*\}\s*$/.test(line) && nextTrim.startsWith('{')) {
      lines[i] = line + ',';
      continue;
    }
  }
  updated = lines.join('\n');

  // 7) Fix broken multi-line import for getPerformanceOptimizer in enhancedAnalytics
  //    from:
  //      // import {
  //      getPerformanceOptimizer
  //      } from './performanceOptimizer';
  //    to:
  //      import { getPerformanceOptimizer } from './performanceOptimizer';
  updated = updated.replace(
    /\/\/\s*import\s*\{\s*\n\s*getPerformanceOptimizer\s*\n\s*\}\s*from\s*'\.\/performanceOptimizer';/g,
    "import { getPerformanceOptimizer } from './performanceOptimizer';"
  );

  return updated;
}

function main() {
  const files = collectSourceFiles(SRC_DIR);
  let changed = 0;
  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    const fixed = applyFixes(original, file);
    if (fixed !== original) {
      fs.writeFileSync(file, fixed, 'utf8');
      changed++;
      console.log(`Fixed: ${path.relative(process.cwd(), file)}`);
    }
  }
  console.log(`Syntax cleanup complete. Files modified: ${changed}`);
}

await (async () => { main(); })();

