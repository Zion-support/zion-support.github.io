const fs = require('fs');
const path = require('path');

// Function to fix remaining errors in a file
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflicts and malformed function definitions
    if (content.includes('=======') || content.includes('<<<<<<<') || content.includes('>>>>>>>')) {
      // Extract the clean version from the merge conflict
      const lines = content.split('\n');
      let cleanContent = [];
      let inConflict = false;
      let foundCleanVersion = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('=======')) {
          inConflict = true;
          continue;
        }
        
        if (line.includes('>>>>>>>')) {
          inConflict = false;
          foundCleanVersion = true;
          continue;
        }
        
        if (line.includes('<<<<<<<')) {
          inConflict = true;
          continue;
        }
        
        if (!inConflict && (foundCleanVersion || !content.includes('======='))) {
          cleanContent.push(line);
        }
      }
      
      content = cleanContent.join('\n');
      modified = true;
    }

    // Fix duplicate function definitions
    if (content.includes('export default function Page()') && content.includes('const Page: React.FC')) {
      // Keep only the simpler version
      content = content.replace(/const Page: React\.FC = \(\) => \{[\s\S]*?\};\s*export default Page;[\s\S]*?=======[\s\S]*?export default function Page\(\) \{[\s\S]*?\}/g, 
        (match) => {
          // Extract the clean function from the second part
          const cleanMatch = match.match(/export default function Page\(\) \{[\s\S]*?\}/);
          return cleanMatch ? cleanMatch[0] : match;
        }
      );
      modified = true;
    }

    // Fix missing 'use client' directive
    if (content.includes('import React') && !content.includes("'use client'")) {
      content = "'use client';\n" + content;
      modified = true;
    }

    // Fix malformed JSX structure
    if (content.includes('return (\n    <div className="min-h-screen') && !content.includes('export default function')) {
      content = content.replace(
        /import React from 'react';\nexport default function ServicePage\(\) \{\s*return \(\s*<div className="min-h-screen[\s\S]*?\}\s*export default ServicePage;/g,
        (match) => {
          const cleanMatch = match.replace(/export default ServicePage;/, '');
          return cleanMatch;
        }
      );
      modified = true;
    }

    // Fix missing closing tags
    if (content.includes('<main') && !content.includes('</main>')) {
      content = content.replace(/<main([^>]*)>([\s\S]*?)(<\/div>\s*<\/div>\s*)$/g, '<main$1>$2</main>$3');
      modified = true;
    }

    // Remove unused imports
    if (content.includes("import Navigation from '../components/Navigation';") && !content.includes('<Navigation')) {
      content = content.replace(/import Navigation from '\.\.\/components\/Navigation';\n/g, '');
      modified = true;
    }

    if (content.includes("import Footer from '../components/Footer';") && !content.includes('<Footer')) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer';\n/g, '');
      modified = true;
    }

    if (content.includes("import Link from 'next/link';") && !content.includes('<Link')) {
      content = content.replace(/import Link from 'next\/link';\n/g, '');
      modified = true;
    }

    if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('<ArrowRight')) {
      content = content.replace(/import { ArrowRight } from 'lucide-react';\n/g, '');
      modified = true;
    }

    // Fix useEffect usage without proper import
    if (content.includes('React.useEffect') && !content.includes("import React, { useEffect }")) {
      content = content.replace(/import React from 'react';/g, "import React, { useEffect } from 'react';");
      content = content.replace(/React\.useEffect/g, 'useEffect');
      modified = true;
    }

    // Fix document.title usage
    if (content.includes('document.title =') && !content.includes('useEffect')) {
      content = content.replace(
        /React\.useEffect\(\(\) => \{\s*document\.title = '[^']*';\s*\}, \[\]\);/g,
        ''
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining errors: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting remaining error fixes...');
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixRemainingErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${pageFiles.length} total page files.`);