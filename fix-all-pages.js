const fs = require('fs');
const path = require('path');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing semicolons in imports
    if (content.includes("'use client'\nimport React from 'react'\n")) {
      content = content.replace(/'use client'\nimport React from 'react'\n/g, "'use client';\nimport React from 'react';\n");
      modified = true;
    }

    // Fix missing semicolons in other imports
    content = content.replace(/import ([^;]+)\n/g, (match, importStatement) => {
      if (!importStatement.includes(';')) {
        return `import ${importStatement};\n`;
      }
      return match;
    });

    // Fix wrong ArrowRight import
    content = content.replace(/import\s+ArrowRight\s+from\s+'lucide-react'/g, "import { ArrowRight } from 'lucide-react'");

    // Fix wrong Footer import path
    content = content.replace(/import Footer from '\/components\/Footer'/g, "import Footer from '../components/Footer'");

    // Fix corrupted JSX patterns
    content = content.replace(/<LinkContact Us\s*>\s*\$2\s*<ArrowRight\$3 \/>\s*<\/Link>/g, 
      `<Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>`);

    // Fix extra closing div tags
    content = content.replace(/\s*<\/div>\s*<\/div>\s*\);\s*}\s*$/, '\n  );\n}');

    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
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

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);