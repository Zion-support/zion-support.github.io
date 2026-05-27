const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'app');

const extensions = ['.tsx', '.jsx', '.ts', '.js'];

function walkDir(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      try {
        const stat = fs.statSync(file);
        if (stat.isDirectory()) {
          if (file.includes('node_modules') || file.includes('.git') || file.includes('.next')) return;
          results = results.concat(walkDir(file));
        } else {
          const ext = path.extname(file);
          if (extensions.includes(ext)) {
            results.push(file);
          }
        }
      } catch (e) {
        // Ignore errors (e.g., permission)
      }
    });
  } catch (e) {
    // Ignore directory read errors
  }
  return results;
}

const files = walkDir(rootDir);

function processTag(tag) {
  if (!/alt\s*=/.test(tag)) {
    if (tag.endsWith('/>')) {
      return tag.slice(0, -2) + ' alt="" />';
    } else if (tag.endsWith('>')) {
      return tag.slice(0, -1) + ' alt="" >';
    }
  }
  return tag;
}

let totalFixed = 0;
const fixedFiles = [];

files.forEach(file => {
  let content;
  try {
    content = fs.readFileSync(file, 'utf8');
  } catch (e) {
    console.error(`Failed to read ${file}: ${e.message}`);
    return;
  }

  let original = content;

  // Replace <img tags
  content = content.replace(/<img([^>]*)>/g, (match, p1) => {
    const tag = '<img' + p1 + '>';
    return processTag(tag);
  });

  // Replace <Image tags (from next/image)
  content = content.replace(/<Image([^>]*)>/g, (match, p1) => {
    const tag = '<Image' + p1 + '>';
    return processTag(tag);
  });

  if (content !== original) {
    try {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles.push(file);
      // Count how many images were fixed in this file? We'll just note the file.
      totalFixed++;
    } catch (e) {
      console.error(`Failed to write ${file}: ${e.message}`);
    }
  }
});

console.log(`Fixed ${totalFixed} files:`);
fixedFiles.forEach(f => console.log(`  ${f}`));
