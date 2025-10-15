const fs = require('fs');
const path = require('path');

// Files with parsing errors
const problematicFiles = [
  '/workspace/app/ai-education-solutions-pro/page.tsx',
  '/workspace/app/ai-healthcare-solutions-pro/page.tsx',
  '/workspace/app/ai-iot-management-pro/page.tsx',
  '/workspace/app/ai-marketing-automation-pro/page.tsx'
];

function fixParsingErrors() {
  console.log('🔍 Fixing parsing errors...');
  
  for (const file of problematicFiles) {
    try {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove any non-printable characters
        content = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
        
        // Ensure proper line endings
        content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        
        // Remove trailing whitespace
        content = content.replace(/[ \t]+$/gm, '');
        
        // Ensure file ends with newline
        if (!content.endsWith('\n')) {
          content += '\n';
        }
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✅ Fixed: ${path.relative('/workspace', file)}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log('🎉 Parsing errors fixed');
}

fixParsingErrors();