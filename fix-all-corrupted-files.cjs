const fs = require('fs');
const path = require('path');

function fixCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix all corrupted patterns systematically
    content = content.replace(/\s+/g, ' '); // Normalize whitespace
    content = content.replace(/\s*,\s*/g, ' '); // Remove commas with spaces
    content = content.replace(/\s*{\s*/g, ' { '); // Fix braces
    content = content.replace(/\s*}\s*/g, ' } '); // Fix braces
    content = content.replace(/\s*\(\s*/g, ' ( '); // Fix parentheses
    content = content.replace(/\s*\)\s*/g, ' ) '); // Fix parentheses
    content = content.replace(/\s*\[\s*/g, ' [ '); // Fix brackets
    content = content.replace(/\s*\]\s*/g, ' ] '); // Fix brackets
    content = content.replace(/\s*;\s*/g, '; '); // Fix semicolons
    content = content.replace(/\s*:\s*/g, ': '); // Fix colons
    content = content.replace(/\s*=\s*/g, ' = '); // Fix equals
    content = content.replace(/\s*<\s*/g, ' < '); // Fix less than
    content = content.replace(/\s*>\s*/g, ' > '); // Fix greater than
    content = content.replace(/\s*!\s*/g, ' ! '); // Fix exclamation
    content = content.replace(/\s*\?\s*/g, ' ? '); // Fix question mark
    content = content.replace(/\s*&\s*/g, ' & '); // Fix ampersand
    content = content.replace(/\s*\|\s*/g, ' | '); // Fix pipe
    content = content.replace(/\s*\+\s*/g, ' + '); // Fix plus
    content = content.replace(/\s*-\s*/g, ' - '); // Fix minus
    content = content.replace(/\s*\*\s*/g, ' * '); // Fix asterisk
    content = content.replace(/\s*\/\s*/g, ' / '); // Fix slash
    content = content.replace(/\s*%\s*/g, ' % '); // Fix percent
    content = content.replace(/\s*@\s*/g, ' @ '); // Fix at
    content = content.replace(/\s*#\s*/g, ' # '); // Fix hash
    content = content.replace(/\s*$\s*/g, ' $ '); // Fix dollar
    content = content.replace(/\s*~\s*/g, ' ~ '); // Fix tilde
    content = content.replace(/\s*`\s*/g, ' ` '); // Fix backtick
    content = content.replace(/\s*'\s*/g, " ' "); // Fix single quote
    content = content.replace(/\s*"\s*/g, ' " '); // Fix double quote
    
    // Fix specific corrupted patterns
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, (match, imports, module) => {
      const cleanImports = imports.replace(/\s+/g, ' ').trim();
      return `import { ${cleanImports} } from '${module}'`;
    });
    
    content = content.replace(/import\s+([^{}\s]+)\s+from\s+['"]([^'"]+)['"]/g, (match, name, module) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `import ${cleanName} from '${module}'`;
    });
    
    // Fix interface declarations
    content = content.replace(/interface\s+([^{]+)\s*{/g, (match, name) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `interface ${cleanName} {`;
    });
    
    // Fix type declarations
    content = content.replace(/type\s+([^{=]+)\s*=/g, (match, name) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `type ${cleanName} =`;
    });
    
    // Fix function declarations
    content = content.replace(/function\s+([^{]+)\s*\(/g, (match, name) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `function ${cleanName}(`;
    });
    
    // Fix const declarations
    content = content.replace(/const\s+([^{=]+)\s*=/g, (match, name) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `const ${cleanName} =`;
    });
    
    // Fix let declarations
    content = content.replace(/let\s+([^{=]+)\s*=/g, (match, name) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `let ${cleanName} =`;
    });
    
    // Fix var declarations
    content = content.replace(/var\s+([^{=]+)\s*=/g, (match, name) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `var ${cleanName} =`;
    });
    
    // Fix React component declarations
    content = content.replace(/React\.FC<([^>]+)>/g, (match, props) => {
      const cleanProps = props.replace(/\s+/g, '').trim();
      return `React.FC<${cleanProps}>`;
    });
    
    // Fix JSX element names
    content = content.replace(/<([A-Z][A-Za-z0-9]*)\s/g, (match, name) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `<${cleanName} `;
    });
    
    // Fix closing JSX tags
    content = content.replace(/<\/([A-Z][A-Za-z0-9]*)\s*>/g, (match, name) => {
      const cleanName = name.replace(/\s+/g, '').trim();
      return `</${cleanName}>`;
    });
    
    // Fix property names in objects
    content = content.replace(/(\w+)\s*:\s*/g, (match, prop) => {
      const cleanProp = prop.replace(/\s+/g, '').trim();
      return `${cleanProp}: `;
    });
    
    // Fix method calls
    content = content.replace(/(\w+)\.(\w+)\s*\(/g, (match, obj, method) => {
      const cleanObj = obj.replace(/\s+/g, '').trim();
      const cleanMethod = method.replace(/\s+/g, '').trim();
      return `${cleanObj}.${cleanMethod}(`;
    });
    
    // Fix string literals
    content = content.replace(/['"]([^'"]*)\s+([^'"]*)['"]/g, (match, part1, part2) => {
      if (part1 && part2) {
        return `"${part1}${part2}"`;
      }
      return match;
    });
    
    // Clean up multiple spaces
    content = content.replace(/\s{2,}/g, ' ');
    
    // Fix specific common patterns
    content = content.replace(/from\s+['"]react['"]/g, "from 'react'");
    content = content.replace(/from\s+['"]react-dom['"]/g, "from 'react-dom'");
    content = content.replace(/from\s+['"]react-router-dom['"]/g, "from 'react-router-dom'");
    content = content.replace(/from\s+['"]lucide-react['"]/g, "from 'lucide-react'");
    content = content.replace(/from\s+['"]react-helmet-async['"]/g, "from 'react-helmet-async'");
    content = content.replace(/from\s+['"]web-vitals['"]/g, "from 'web-vitals'");
    
    // Fix arrow functions
    content = content.replace(/\(\s*([^)]+)\s*\)\s*=>/g, (match, params) => {
      const cleanParams = params.replace(/\s+/g, ' ').trim();
      return `(${cleanParams}) =>`;
    });
    
    // Fix destructuring
    content = content.replace(/{\s*([^}]+)\s*}/g, (match, props) => {
      const cleanProps = props.replace(/\s+/g, ' ').trim();
      return `{ ${cleanProps} }`;
    });
    
    // Fix array destructuring
    content = content.replace(/\[\s*([^\]]+)\s*\]/g, (match, items) => {
      const cleanItems = items.replace(/\s+/g, ' ').trim();
      return `[ ${cleanItems} ]`;
    });
    
    // Fix template literals
    content = content.replace(/`([^`]*)\s+([^`]*)`/g, (match, part1, part2) => {
      if (part1 && part2) {
        return `\`${part1}${part2}\``;
      }
      return match;
    });
    
    // Final cleanup
    content = content.replace(/\s{2,}/g, ' ');
    content = content.replace(/\n\s*\n/g, '\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const srcDir = './src';
const files = [];

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath);
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findFiles(srcDir);

console.log(`Found ${files.length} TypeScript files to fix...`);

let fixedCount = 0;
for (const file of files) {
  if (fixCorruptedFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);