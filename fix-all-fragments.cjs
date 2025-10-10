const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all tsx files in src directory
const files = execSync('find src -name "*.tsx" -type f', { encoding: 'utf8' }).trim().split('\n');

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if there's an opening fragment without closing
      const hasOpeningFragment = content.includes('return (\n    <>');
      const hasClosingFragment = content.includes('</>');
      
      if (hasOpeningFragment && !hasClosingFragment) {
        // Add closing fragment before the last closing parenthesis
        content = content.replace(
          /(\s*\);\s*};?\s*$)/,
          '\n    </>\n  );'
        );
        console.log(`Fixed fragment in: ${filePath}`);
      }
      
      fs.writeFileSync(filePath, content);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All fragments fixed!');