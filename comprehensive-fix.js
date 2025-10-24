const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1></main>');
    content = content.replace(/<article([^>]*)>\s*$/gm, '<article$1></article>');
    content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1></header>');
    content = content.replace(/<footer([^>]*)>\s*$/gm, '<footer$1></footer>');
    content = content.replace(/<nav([^>]*)>\s*$/gm, '<nav$1></nav>');
    content = content.replace(/<aside([^>]*)>\s*$/gm, '<aside$1></aside>');
    
    // Fix JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix missing commas in arrays and objects
    content = content.replace(/(\w+)\s*$/gm, (match, p1) => {
      if (match.includes('=') || match.includes(':') || match.includes('{') || match.includes('(')) {
        return match;
      }
      return match;
    });
    
    // Fix import statements
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s+['"]([^'"]+)['"];?/g, (match, imports, module) => {
      const cleanImports = imports.replace(/\s+/g, ' ').trim();
      return `import { ${cleanImports} } from '${module}';`;
    });
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
    
    // Fix JSX syntax issues
    content = content.replace(/<(\w+)\s*\/>\s*<\/\1>/g, '<$1 />');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, (match) => {
      if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix object property syntax
    content = content.replace(/(\w+)\s*:\s*(\w+)\s*$/gm, '$1: $2,');
    
    // Fix array syntax
    content = content.replace(/(\w+)\s*$/gm, (match) => {
      if (match.trim() && !match.includes(',') && !match.includes(';') && !match.includes('{') && !match.includes('}')) {
        return match + ',';
      }
      return match;
    });
    
    // Fix JSX expressions
    content = content.replace(/\{\s*(\w+)\s*\}\s*$/gm, '{$1}');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces) + '}';
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
    }
    
    // Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      content += ']'.repeat(openBrackets - closeBrackets);
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
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
      fixSyntaxErrors(filePath);
    }
  }
}

// Start fixing from the app directory
findAndFixFiles('./app');
findAndFixFiles('./components');
findAndFixFiles('./src');

console.log('Syntax error fixing completed!');
