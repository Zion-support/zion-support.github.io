const fs = require('fs');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing braces before displayName
    if (content.includes('displayName') && !content.includes('};')) {
      const displayNameMatch = content.match(/(\s+)(\w+\.displayName)/);
      if (displayNameMatch) {
        const beforeDisplayName = content.substring(0, content.indexOf(displayNameMatch[0]));
        const afterDisplayName = content.substring(content.indexOf(displayNameMatch[0]));
        
        // Check if there's a missing closing brace
        if (!beforeDisplayName.trim().endsWith('}') && !beforeDisplayName.trim().endsWith('};')) {
          content = beforeDisplayName + '};\n\n' + afterDisplayName;
          modified = true;
        }
      }
    }

    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(\w+)/g, '$1: $2,\n    $3: $4');
    
    // Fix missing closing braces in object literals
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*\)/g, '$1: $2\n  )');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get list of files with errors
const files = [
  'app/ai-code-assistant/page.tsx',
  'app/ai-cybersecurity-monitor/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-expense-tracker/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-sentiment-analyzer/page.tsx'
];

files.forEach(fixFile);
console.log('Remaining fixes completed!');
