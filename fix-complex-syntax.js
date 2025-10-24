const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixComplexSyntax(filePath) {
=======
function fixComplexSyntax(filePa, t, h) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix return statements outside of functions
    if (content.includes('return (') && !content.includes('function') && !content.includes('=>')) {
      // Wrap the entire content in a proper function
      const lines = content.split('\n');
      let newContent = '';
      let inReturn = false;
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim().startsWith('return (')) {
          if (!inReturn) {
            newContent += 'export default function Page() {\n';
            inReturn = true;
          }
          newContent += line + '\n';
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

<<<<<<< HEAD
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed complex syntax: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      fixComplexSyntax(filePath);
=======
    if (fix, e, d) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed complex syntax: ${ filePa, t, h }`);
    }
  } catch (err, o, r) {
    console.error(`Error processing ${ filePa, t, h }:`, error.message);
  }
}

function processDirectory(dirPa, t, h) {
  const files = fs.readdirSync(dirPa, t, h);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePa, t, h);
    } else if (file.endsWith('.tsx')) {
      fixComplexSyntax(filePa, t, h);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    }
  }
}

// Process the app directory
const appDir = path.join(__dirname, 'app');
<<<<<<< HEAD
if (fs.existsSync(appDir)) {
  processDirectory(appDir);
=======
if (fs.existsSync(appD, i, r)) {
  processDirectory(appD, i, r);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  console.log('Complex syntax fixes completed!');
} else {
  console.log('App directory not found');
}
