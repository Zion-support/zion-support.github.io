const fs = require('fs');
const path = require('path');

function fixTargetedSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix files with return statements outside of functions
    if (content.includes('return (') && !content.includes('function') && !content.includes('=>')) {
      // Find the return statement and wrap everything in a function
      const lines = content.split('\n');
      let newContent = '';
      let inReturn = false;
      let braceCount = 0;
      let foundReturn = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim().startsWith('return (') && !foundReturn) {
          newContent += 'export default function Page() {\n';
          newContent += line + '\n';
          inReturn = true;
          foundReturn = true;
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

    // Fix malformed JSX structure
    if (content.includes('>{/* Hero Section */}')) {
      content = content.replace(/<div[^>]*>\{\/\* Hero Section \*\/\}/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
      fixed = true;
    }

    // Fix malformed closing tags
    content = content.replace(/<\/h1>h1>/g, '</h1>');
    content = content.replace(/<\/h2>h2>/g, '</h2>');
    content = content.replace(/<\/p>p>/g, '</p>');
    content = content.replace(/<\/button>button>/g, '</button>');
    content = content.replace(/<\/span>span>/g, '</span>');
    content = content.replace(/<\/div>div>/g, '</div>');

    // Fix malformed JSX expressions
    content = content.replace(/\{features\.map\(\(feature, index\) => \(<\/div>/g, '{features.map((feature, index) => (');
    content = content.replace(/\{benefits\.map\(\(benefit, index\) => \(<\/div>/g, '{benefits.map((benefit, index) => (');
    content = content.replace(/\{team\.map\(\(member, index\) => \(<\/div>/g, '{team.map((member, index) => (');

    // Fix missing semicolons
    content = content.replace(/\]\s*$/, '];');
    content = content.replace(/}\s*$/, '};');

    // Fix duplicate closing braces
    content = content.replace(/}\s*;\s*}\s*;\s*$/, '};\n');

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed targeted syntax: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Fix specific problematic files
const problematicFiles = [
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx'
];

problematicFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixTargetedSyntax(fullPath);
  }
});

console.log('Targeted syntax fixes completed!');
