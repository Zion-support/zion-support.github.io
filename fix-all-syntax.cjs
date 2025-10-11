const fs = require('fs');
const path = require('path');

function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing opening div tags before Helmet
    if (content.includes('return (\n    \n      <Helmet>') || content.includes('return (\n  \n    <Helmet>')) {
      content = content.replace(/return \(\s*\n\s*\n\s*<Helmet>/g, 'return (\n    <div>\n      <Helmet>');
      modified = true;
    }
    
    // Fix missing closing div tags
    if (content.includes('</div>\n  \n)') || content.includes('</div>\n    \n)')) {
      content = content.replace(/<\/div>\s*\n\s*\n\)/g, '</div>\n    </div>\n  )');
      modified = true;
    }
    
    // Fix incomplete object properties in arrays
    content = content.replace(/{\s*icon:\s*Brain,\s*}\s*]/g, '{\n      icon: Brain,\n      title: "AI Service",\n      description: "AI-powered solution"\n    }');
    
    // Fix empty arrays
    content = content.replace(/const \w+ = \[\s*\]/g, (match) => {
      const varName = match.match(/const (\w+) =/)[1];
      return `const ${varName} = [\n    // Add items here\n  ]`;
    });
    
    // Fix missing return statements
    if (content.includes('const ') && content.includes('= () => {') && !content.includes('return (')) {
      content = content.replace(/(const \w+ = \(\) => \{\s*)$/m, '$1\n  return (\n    <div>\n      {/* Content */}\n    </div>\n  );');
      modified = true;
    }
    
    // Fix broken JSX fragments
    if (content.includes('<>') && content.includes('</>') && content.includes('<div')) {
      content = content.replace(/<>/g, '').replace(/<\/>/g, '');
      modified = true;
    }
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        fixedCount += processDirectory(fullPath);
      }
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
      if (fixAllSyntaxErrors(fullPath)) {
        fixedCount++;
        console.log(`Fixed syntax errors in: ${fullPath}`);
      }
    }
  }
  
  return fixedCount;
}

// Process the app directory
const appDir = './app';
console.log('Starting comprehensive syntax error cleanup...');
const fixedCount = processDirectory(appDir);
console.log(`Fixed syntax errors in ${fixedCount} files.`);