const fs = require('fs');
const path = require('path');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing semicolons in imports
    if (content.includes("'use client'\nimport") && !content.includes("'use client';\nimport")) {
      content = content.replace("'use client'\nimport", "'use client';\nimport");
      modified = true;
    }

    // Fix missing semicolons in other import lines
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import') && !line.trim().endsWith(';'));
    if (importLines.length > 0) {
      importLines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('import') && !trimmedLine.endsWith(';')) {
          content = content.replace(line, line + ';');
          modified = true;
        }
      });
    }

    // Fix malformed JSX closing tags
    if (content.includes('</>')) {
      content = content.replace(/<\/>/g, '');
      modified = true;
    }

    // Fix malformed function endings
    if (content.includes(');}') && !content.includes('  );')) {
      content = content.replace(/\);}/g, '\n  );\n}');
      modified = true;
    }

    // Fix missing closing div tags
    if (content.includes('</div>);') && !content.includes('      </div>')) {
      content = content.replace('</div>);', '      </div>\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix merge conflict markers
    if (content.includes('>>>>>>> origin/main')) {
      content = content.replace(/\n>>>>>>> origin\/main.*$/g, '');
      modified = true;
    }

    if (content.includes('<<<<<<< HEAD')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> origin\/main/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
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
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting comprehensive fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Fix complete!');