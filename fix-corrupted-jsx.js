const fs = require('fs');
const path = require('path');

// Function to fix corrupted JSX in a file
function fixCorruptedJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix LinkContact Us pattern
    if (content.includes('LinkContact Us')) {
      content = content.replace(
        /<LinkContact Us\s*>\s*\$\d+\s*<ArrowRight\$\d+ \/>\s*<\/Link>/g,
        `<Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>`
      );
      modified = true;
    }

    // Fix extra closing div
    if (content.includes('    </div>\n    </div>')) {
      content = content.replace(/    <\/div>\n    <\/div>/g, '    </div>');
      modified = true;
    }

    // Fix incorrect Footer import paths
    if (content.includes("import Footer from '/components/Footer'")) {
      content = content.replace(
        "import Footer from '/components/Footer'",
        "import Footer from '../components/Footer'"
      );
      modified = true;
    }

    // Fix incorrect ArrowRight import
    if (content.includes("import  ArrowRight  from 'lucide-react'")) {
      content = content.replace(
        "import  ArrowRight  from 'lucide-react'",
        "import { ArrowRight } from 'lucide-react'"
      );
      modified = true;
    }

    // Fix missing semicolons
    if (content.includes("'use client'\nimport React")) {
      content = content.replace("'use client'\nimport React", "'use client';\nimport React");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
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
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixCorruptedJSX(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);