const fs = require('fs');
const path = require('path');

function fixNewSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix malformed JSX structure with missing closing tags
    if (content.includes('<Helmet>') && !content.includes('</Helmet>')) {
      content = content.replace(
        /<Helmet>([\s\S]*?)(<\/div>[\s\S]*?<\/div>[\s\S]*?<\/section>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/>)/g,
        '<Helmet>$1</Helmet>$2'
      );
      fixed = true;
    }

    // Fix malformed return statements
    if (content.includes('return (') && !content.includes('function') && !content.includes('=>')) {
      const lines = content.split('\n');
      let newContent = '';
      let inReturn = false;
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim().startsWith('return (') && !inReturn) {
          newContent += 'export default function Page() {\n';
          newContent += line + '\n';
          inReturn = true;
          braceCount = 1;
        } else if (inReturn) {
          newContent += line + '\n';
          if (line.includes('{')) braceCount++;
          if (line.includes('}')) braceCount--;
          if (braceCount === 0) {
            newContent += '};\n';
            inReturn = false;
          }
        } else {
          newContent += line + '\n';
        }
      }
      
      if (inReturn && braceCount > 0) {
        newContent += '};\n';
      }
      
      content = newContent;
      fixed = true;
    }

    // Fix malformed string literals in JSX
    if (content.includes("'Gain competitive advantage with advanced technology'")) {
      content = content.replace(
        /'Gain competitive advantage with advanced technology'/g,
        '"Gain competitive advantage with advanced technology"'
      );
      fixed = true;
    }

    // Fix missing semicolons
    content = content.replace(/\]\s*$/, '];');
    content = content.replace(/}\s*$/, '};');

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed new syntax errors: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Fix specific problematic files
const problematicFiles = [
  'app/ai-analytics-dashboard/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx'
];

problematicFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixNewSyntaxErrors(fullPath);
  }
});

console.log('New syntax error fixes completed!');
