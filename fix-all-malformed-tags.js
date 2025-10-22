import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix malformed closing tags
function fixMalformedTags(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix malformed closing tags like <</a>/a> or <</div></div>
  const malformedTagRegex = /<<\/[a-z]+>\/[a-z]+>/g;
  content = content.replace(malformedTagRegex, (match) => {
    modified = true;
    const tag = match.match(/<(\/)([a-z]+)>/)[2];
    return `</${tag}>`;
  });

  // Fix malformed closing tags like <</a> or <</div>
  const singleMalformedRegex = /<(\/)([a-z]+)>/g;
  content = content.replace(singleMalformedRegex, (match, slash, tag) => {
    modified = true;
    return `</${tag}>`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed malformed tags in: ${filePath}`);
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
    if (fixMalformedTags(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed malformed tags in ${fixedCount} files`);