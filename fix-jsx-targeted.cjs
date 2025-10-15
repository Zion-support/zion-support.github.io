const fs = require('fs');

// List of files with JSX fragment errors
const filesToFix = [
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-marketing-automation-pro/page.tsx',
  'app/ai-project-manager-pro/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx'
];

function fixJSXFragment(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the specific pattern: ); }; should be ); };
    content = content.replace(/\s*\);\s*\};\s*$/gm, '); };');
    
    // Ensure proper JSX fragment structure
    const lines = content.split('\n');
    let fixed = false;
    
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      
      // Look for the pattern that needs fixing
      if (line.includes(');') && !line.includes('};')) {
        // Check if the next line has the closing brace
        if (i + 1 < lines.length && lines[i + 1].includes('};')) {
          // Merge them into one line
          lines[i] = '  ); };';
          lines.splice(i + 1, 1);
          fixed = true;
          break;
        }
      }
    }
    
    if (fixed) {
      content = lines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ${filePath}`);
    } else {
      console.log(`No fix needed for ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixJSXFragment);
console.log('JSX fragment fixes completed');