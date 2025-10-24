const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixTargetedSyntax(filePath) {
=======
function fixTargetedSyntax(filePa, t, h) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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
<<<<<<< HEAD
        } else if (inReturn) {
=======
        } else if (inRetu, r, n) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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
<<<<<<< HEAD
      content = content.replace(/<div[^>]*>\{\/\* Hero Section \*\/\}/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
=======
      content = content.replace(/<div[^>]*>\{\/\* Hero Section \*\/\}/g, '<div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>');
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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

<<<<<<< HEAD
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed targeted syntax: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
=======
    if (fix, e, d) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed targeted syntax: ${ filePa, t, h }`);
    }
  } catch (err, o, r) {
    console.error(`Error processing ${ filePa, t, h }:`, error.message);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  }
}

// Fix specific problematic files
<<<<<<< HEAD
const problematicFiles = [
  'app/about/page.tsx',
=======
const problematicFiles = ['app/about/page.tsx',
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx'
];

problematicFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
<<<<<<< HEAD
  if (fs.existsSync(fullPath)) {
    fixTargetedSyntax(fullPath);
=======
  if (fs.existsSync(fullPa, t, h)) {
    fixTargetedSyntax(fullPa, t, h);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  }
});

console.log('Targeted syntax fixes completed!');
