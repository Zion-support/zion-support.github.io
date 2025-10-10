#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix structural issues in JSX
function fixPageStructure(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix malformed JSX structure patterns
  const fixes = [
    // Fix "}</div><div" patterns
    {
      pattern: /}\s*<\/div><div/g,
      replacement: '}\n    </div>\n    <div'
    },
    
    // Fix "></div><div" patterns
    {
      pattern: />\s*<\/div><div/g,
      replacement: '>\n    </div>\n    <div'
    },
    
    // Fix "></div><h3" patterns
    {
      pattern: />\s*<\/div><h3/g,
      replacement: '>\n    </div>\n    <h3'
    },
    
    // Fix "></div><section" patterns
    {
      pattern: />\s*<\/div><section/g,
      replacement: '>\n    </div>\n    <section'
    },
    
    // Fix "></div><main" patterns
    {
      pattern: />\s*<\/div><main/g,
      replacement: '>\n    </div>\n    <main'
    },
    
    // Fix malformed closing tags
    {
      pattern: /<\/div><\/div>/g,
      replacement: '</div>\n  </div>'
    },
    
    // Fix missing spaces in className attributes
    {
      pattern: /className="([^"]*?)([a-zA-Z])([a-zA-Z])/g,
      replacement: (match, prefix, char1, char2) => {
        if (char1 === char1.toUpperCase() && char2 === char2.toLowerCase()) {
          return `className="${prefix}${char1} ${char2}`;
        }
        return match;
      }
    },
    
    // Fix broken JSX expressions
    {
      pattern: /<div\s+className="([^"]*?)"\s*>\s*<\/div><div/g,
      replacement: '<div className="$1">\n    </div>\n    <div'
    }
  ];
  
  for (const fix of fixes) {
    const newContent = content.replace(fix.pattern, fix.replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed structural issues in ${filePath}`);
  }
  
  return modified;
}

// Main function
function main() {
  console.log('Fixing page structure issues...');
  
  const filesToFix = [
    'app/page.tsx',
    'app/components/Footer.tsx',
    'app/components/Navigation.tsx',
    'app/components/LoadingStates.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const file of filesToFix) {
    if (fs.existsSync(file)) {
      try {
        if (fixPageStructure(file)) {
          fixedCount++;
        }
      } catch (error) {
        console.error(`Error fixing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixPageStructure };