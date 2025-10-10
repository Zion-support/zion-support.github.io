const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix incomplete JSX closing tags
    const fixes = [
      // Fix incomplete closing tags
      { pattern: /  <\/$/gm, replacement: '  </button>' },
      { pattern: /<\/$/gm, replacement: '</div>' },
      
      // Fix semicolons in JSX
      { pattern: /;$/gm, replacement: '}' },
      
      // Fix specific text patterns
      { pattern: /Get Started;$/gm, replacement: 'Get Started' },
      { pattern: /Schedule Demo;$/gm, replacement: 'Schedule Demo' },
      { pattern: /Advanced 5G Features;$/gm, replacement: 'Advanced 5G Features' },
      { pattern: /Cutting-edge 5G technology for the next generation of connectivity;$/gm, replacement: 'Cutting-edge 5G technology for the next generation of connectivity' },
      
      // Fix incomplete JSX elements
      { pattern: /  <\/$/gm, replacement: '  </button>' },
      { pattern: /<\/$/gm, replacement: '</div>' },
      
      // Fix malformed JSX attributes
      { pattern: /className="[^"]*;$/gm, replacement: (match) => match.replace(';', '') },
      
      // Fix incomplete React.Fragment closing
      { pattern: /<\/React\.Fragment>$/gm, replacement: '</React.Fragment>' },
      
      // Fix incomplete closing tags with proper structure
      { pattern: /  <\/$/gm, replacement: '  </button>' },
      { pattern: /<\/$/gm, replacement: '</div>' },
    ];

    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.match(/\.(tsx?|jsx?)$/)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = fixFilesInDirectory('.');
console.log(`Fixed ${fixedCount} files.`);