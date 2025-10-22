import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common JSX syntax errors
function fixJsxErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix malformed closing tags like <</a></a> or <</div></div>
  content = content.replace(/<<\/[a-z]+><\/[a-z]+>/g, (match) => {
    modified = true;
    const tag = match.match(/<(\/)([a-z]+)>/)[2];
    return `</${tag}>`;
  });

  // Fix malformed closing tags like <</a> or <</div>
  content = content.replace(/<(\/)([a-z]+)>/g, (match, slash, tag) => {
    modified = true;
    return `</${tag}>`;
  });

  // Fix missing closing tags for <a> elements
  const aTagRegex = /<a\s+[^>]*href="[^"]*"[^>]*>([^<]*)</g;
  content = content.replace(aTagRegex, (match, text) => {
    if (!match.includes('</a>')) {
      modified = true;
      return match + '</a>';
    }
    return match;
  });

  // Fix missing closing tags for <div> elements
  const divOpenCount = (content.match(/<div/g) || []).length;
  const divCloseCount = (content.match(/<\/div>/g) || []).length;
  if (divOpenCount > divCloseCount) {
    const missingDivs = divOpenCount - divCloseCount;
    for (let i = 0; i < missingDivs; i++) {
      content = content.replace(/(\s*<\/React\.Fragment>)/, '</div>$1');
    }
    modified = true;
  }

  // Fix missing closing tags for <section> elements
  const sectionOpenCount = (content.match(/<section/g) || []).length;
  const sectionCloseCount = (content.match(/<\/section>/g) || []).length;
  if (sectionOpenCount > sectionCloseCount) {
    const missingSections = sectionOpenCount - sectionCloseCount;
    for (let i = 0; i < missingSections; i++) {
      content = content.replace(/(\s*<\/div>\s*<\/React\.Fragment>)/, '</section>$1');
    }
    modified = true;
  }

  // Fix missing closing tags for <React.Fragment>
  if (content.includes('<React.Fragment>') && !content.includes('</React.Fragment>')) {
    content = content.replace(/(\s*<\/div>\s*)$/, '</React.Fragment>$1');
    modified = true;
  }

  // Fix malformed object syntax in arrays
  content = content.replace(/\s*description:\s*'[^']*'\s*}\s*}/g, (match) => {
    modified = true;
    return match.replace(/\s*}\s*}/, '}');
  });

  // Fix specific patterns that are causing issues
  content = content.replace(/(\s*<a[^>]*>[^<]*)(\s*<\/div>)/g, '$1</a>$2');
  content = content.replace(/(\s*<a[^>]*>[^<]*)(\s*<\/section>)/g, '$1</a>$2');
  content = content.replace(/(\s*<a[^>]*>[^<]*)(\s*<\/React\.Fragment>)/g, '$1</a>$2');

  // Fix malformed array syntax
  content = content.replace(/\s*description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix missing closing tags in specific patterns
  content = content.replace(/(\s*<a[^>]*>[^<]*)(\s*<\/div>\s*<\/section>)/g, '$1</a>$2');
  content = content.replace(/(\s*<a[^>]*>[^<]*)(\s*<\/div>\s*<\/React\.Fragment>)/g, '$1</a>$2');

  // Fix specific malformed patterns
  content = content.replace(/<(\/)([a-z]+)><\/([a-z]+)>/g, '</$2>');
  content = content.replace(/<(\/)([a-z]+)><\/([a-z]+)><\/([a-z]+)>/g, '</$2>');

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed JSX errors in: ${filePath}`);
    return true;
  }
  return false;
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  try {
    if (fixJsxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);