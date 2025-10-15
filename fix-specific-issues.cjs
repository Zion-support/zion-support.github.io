const fs = require('fs');
const path = require('path');

// Fix specific parsing error in 5g-solutions/page.tsx
function fixParsingError() {
  const file = '/workspace/app/5g-solutions/page.tsx';
  try {
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
    console.log('✅ Fixed parsing error in 5g-solutions/page.tsx');
  } catch (error) {
    console.error('❌ Error fixing parsing error:', error.message);
  }
}

// Fix unescaped entities in specific files
function fixUnescapedEntities() {
  const files = [
    '/workspace/app/ai-3d-generation/page.tsx',
    '/workspace/app/ai-accounting-assistant/page.tsx',
    '/workspace/app/ai-agricultural-intelligence-pro/page.tsx'
  ];
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Fix quotes in JSX text content only
      const quoteRegex = /(?<=>)([^<]*?)"([^<]*?)(?=<)/g;
      content = content.replace(quoteRegex, (match, before, after) => {
        // Only replace if it's not already escaped and not in a string literal
        if (!before.includes('&quot;') && !before.includes('&#34;') && !before.includes('&ldquo;') && !before.includes('&rdquo;') &&
            !before.includes("'") && !after.includes("'") && !before.includes('"') && !after.includes('"')) {
          return before + '&quot;' + after;
        }
        return match;
      });
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Fixed unescaped entities in ${path.relative('/workspace', file)}`);
    } catch (error) {
      console.error(`❌ Error fixing ${file}:`, error.message);
    }
  }
}

// Main function
function fixSpecificIssues() {
  console.log('🔍 Fixing specific issues...');
  fixParsingError();
  fixUnescapedEntities();
  console.log('🎉 Specific issues fixed');
}

fixSpecificIssues();