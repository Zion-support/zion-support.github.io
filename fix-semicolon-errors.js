import fs from 'fs';
import path from 'path';

function fixSemicolonErrors(content) {
  // Fix semicolons after JSX fragments
  content = content.replace(/<Footer \/>;\s*<\/>;/g, '<Footer />\n    </>');
  content = content.replace(/<\/>;\s*\);/g, '</>\n  );');
  
  // Fix extra semicolons after function declarations
  content = content.replace(/};\s*$/gm, '}');
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSemicolonErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

// Process the app directory
processDirectory('./app');
console.log('Semicolon error fixes completed');