#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const fixJsxStructure = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix the pattern where Footer is outside the main div
    const pattern1 = /(\s*<\/section>\s*<\/div>\s*<Footer \/>\s*<\/div>\s*\);\s*};)/g;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, '\n        </section>\n        \n        <Footer />\n      </div>\n  );\n};');
      modified = true;
    }
    
    // Fix the pattern where there's a missing opening tag
    const pattern2 = /(\s*<\/div>\s*<Footer \/>\s*<\/div>\s*\);\s*};)/g;
    if (pattern2.test(content)) {
      content = content.replace(pattern2, '\n      </div>\n      \n      <Footer />\n    </div>\n  );\n};');
      modified = true;
    }
    
    // Fix any remaining adjacent JSX elements
    const pattern3 = /(\s*<\/div>\s*<Footer \/>\s*<\/div>\s*\);\s*};)/g;
    if (pattern3.test(content)) {
      content = content.replace(pattern3, '\n      </div>\n      \n      <Footer />\n    </div>\n  );\n};');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed JSX structure in ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
};

const findTsxFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Find all .tsx files in the app directory
const tsxFiles = findTsxFiles('./app');

console.log(`Found ${tsxFiles.length} .tsx files`);

// Fix each file
tsxFiles.forEach(fixJsxStructure);

console.log('✅ All files processed');