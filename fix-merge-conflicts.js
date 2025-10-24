const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax issues
    content = content.replace(/,\s*$/gm, ''); // Remove trailing commas
    content = content.replace(/,\s*}/g, '}'); // Remove commas before closing braces
    content = content.replace(/,\s*]/g, ']'); // Remove commas before closing brackets
    content = content.replace(/,\s*\)/g, ')'); // Remove commas before closing parentheses
    
    // Fix JSX syntax issues
    content = content.replace(/<(\w+)\s*\/>\s*<\/\1>/g, '<$1 />'); // Fix self-closing tags
    content = content.replace(/(\w+)\s*=\s*{([^}]+)}\s*\/>/g, '$1={$2} />'); // Fix props syntax
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    
    // Fix import statements
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s+['"]([^'"]+)['"];?/g, (match, imports, module) => {
      const cleanImports = imports.replace(/\s+/g, ' ').trim();
      return `import { ${cleanImports} } from '${module}';`;
    });
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
    
    // Fix JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      fixMergeConflicts(filePath);
    }
  }
}

// Start fixing from the app directory
findAndFixFiles('./app');
findAndFixFiles('./components');
findAndFixFiles('./src');

console.log('Merge conflict fixing completed!');
