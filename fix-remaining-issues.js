const fs = require('fs');
const path = require('path');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix missing semicolons in all import statements
    content = content.replace(/import\s+([^;]+)\n/g, (match, importStatement) => {
      if (!importStatement.includes(';')) {
        return `import ${importStatement};\n`;
      }
      return match;
    });

    // Fix specific patterns that might be causing issues
    content = content.replace(/import\s+Head\s+from\s+'next\/head'\n/g, "import Head from 'next/head';\n");
    content = content.replace(/import\s+Link\s+from\s+'next\/link'\n/g, "import Link from 'next/link';\n");
    content = content.replace(/import\s+\{\s*ArrowRight\s*\}\s+from\s+'lucide-react'\n/g, "import { ArrowRight } from 'lucide-react';\n");
    content = content.replace(/import\s+Footer\s+from\s+'\.\.\/components\/Footer'\n/g, "import Footer from '../components/Footer';\n");

    // Fix any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');

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

    if (content !== originalContent) {
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
console.log('Starting comprehensive fix for remaining issues...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);