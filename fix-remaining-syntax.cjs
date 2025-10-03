const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Additional patterns to fix
const fixes = [
  // Fix missing quotes in object properties
  {
    pattern: /link: 'https:\/\/ziontechgroup\.com\/services\/ai-services}/g,
    replacement: "link: 'https://ziontechgroup.com/services/ai-services'},"
  },
  {
    pattern: /link: 'https:\/\/ziontechgroup\.com\/services\/ai-services/g,
    replacement: "link: 'https://ziontechgroup.com/services/ai-services'},"
  },
  // Fix missing quotes in other URL patterns
  {
    pattern: /url: 'https:\/\/ziontechgroup\.com\/[^']*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + "'},"
    }
  },
  // Fix missing quotes in href attributes
  {
    pattern: /href="[^"]*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + '"'
    }
  },
  // Fix missing quotes in className attributes
  {
    pattern: /className="[^"]*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + '"'
    }
  },
  // Fix missing quotes in title attributes
  {
    pattern: /title="[^"]*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + '"'
    }
  },
  // Fix missing quotes in alt attributes
  {
    pattern: /alt="[^"]*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + '"'
    }
  },
  // Fix missing quotes in src attributes
  {
    pattern: /src="[^"]*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + '"'
    }
  },
  // Fix missing quotes in string literals within JSX
  {
    pattern: /className="[^"]*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + '"'
    }
  },
  // Fix missing quotes in template literals
  {
    pattern: /`[^`]*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + '`'
    }
  },
  // Fix missing quotes in string concatenation
  {
    pattern: /\+ '[^']*}/g,
    replacement: function(match) {
      return match.slice(0, -1) + "'"
    }
  },
  // Fix missing quotes in array elements
  {
    pattern: /'[^']*}/g,
    replacement: function(match) {
      // Only fix if it's clearly a missing quote (ends with } and has no closing quote)
      if (match.length > 2 && match.endsWith('}') && !match.includes("'", 1)) {
        return match.slice(0, -1) + "'"
      }
      return match
    }
  },
  // Fix missing quotes in object keys
  {
    pattern: /([a-zA-Z_][a-zA-Z0-9_]*): '[^']*}/g,
    replacement: function(match, key) {
      return match.slice(0, -1) + "'},"
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        if (fix.pattern.test(content)) {
          content = content.replace(fix.pattern, fix.replacement);
          modified = true;
        }
      }
    });
    
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

// Find all TypeScript and TSX files
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);