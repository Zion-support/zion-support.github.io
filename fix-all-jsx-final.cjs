const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all tsx files in src directory
const files = execSync('find src -name "*.tsx" -type f', { encoding: 'utf8' }).trim().split('\n');

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix all JSX structure issues
      
      // 1. Fix missing closing fragments - look for return ( with <> but no </>
      if (content.includes('return (\n    <>') && !content.includes('</>')) {
        content = content.replace(
          /(\s*\);\s*};?\s*$)/,
          '\n    </>\n  );'
        );
      }
      
      // 2. Fix missing closing braces
      if (content.includes('  );') && !content.includes('};')) {
        content = content.replace(/(\s*\);\s*$)/, '\n};');
      }
      
      // 3. Fix any remaining syntax issues
      if (content.includes('  );') && !content.includes('};')) {
        content = content.replace(/(\s*\);\s*$)/, '\n};');
      }
      
      // 4. Fix missing closing fragments for cases where there's a fragment opening
      if (content.includes('return (\n    <>') && !content.includes('</>')) {
        content = content.replace(
          /(\s*\);\s*};?\s*$)/,
          '\n    </>\n  );'
        );
      }
      
      // 5. Fix any remaining fragment issues
      if (content.includes('return (\n    <>') && !content.includes('</>')) {
        content = content.replace(
          /(\s*\);\s*};?\s*$)/,
          '\n    </>\n  );'
        );
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All JSX issues fixed!');