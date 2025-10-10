#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX structure issues
    const fixes = [
      // Fix missing opening tags
      {
        pattern: /return\s*\(\s*<>\s*<Helmet>/g,
        replacement: 'return (\n    <>\n      <Helmet>'
      },
      // Fix missing closing tags
      {
        pattern: /(\s*)<\/div>\s*\);\s*};/g,
        replacement: '$1</div>\n    </>\n  );\n};'
      },
      // Fix misplaced closing braces
      {
        pattern: /(\s*)}\)\s*<\/div>\s*<\/div>\s*\);\s*};/g,
        replacement: '$1})\n            </div>\n          </div>\n        </section>\n      </div>\n    </>\n  );\n};'
      },
      // Fix missing fragment closing
      {
        pattern: /(\s*)<\/div>\s*\);\s*};/g,
        replacement: '$1</div>\n    </>\n  );\n};'
      },
      // Fix duplicate div wrappers
      {
        pattern: /<div className="min-h-screen[^>]*>\s*<Helmet>/g,
        replacement: '<>\n      <Helmet>'
      },
      // Fix missing section closing
      {
        pattern: /(\s*)<\/div>\s*<\/div>\s*\);\s*};/g,
        replacement: '$1</div>\n        </section>\n      </div>\n    </>\n  );\n};'
      }
    ];
    
    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixJSXIssues(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixJSXIssues(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixJSXStructure(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting JSX structure fixes...');
const fixedCount = findAndFixJSXIssues('./app');
console.log(`Fixed JSX structure in ${fixedCount} files.`);