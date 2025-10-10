import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    const fixes = [
      // Fix malformed closing tags like </</div>
      [/<\/<([^>]+)>/g, '</$1>'],
      
      // Fix malformed opening tags like <</div>
      [/<<([^>]+)>/g, '<$1>'],
      
      // Fix malformed self-closing tags like <div/>
      [/<([a-zA-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />'],
      
      // Fix missing closing tags for common elements
      [/<h1([^>]*)>([^<]*)<\/h1>/g, '<h1$1>$2</h1>'],
      [/<h2([^>]*)>([^<]*)<\/h2>/g, '<h2$1>$2</h2>'],
      [/<h3([^>]*)>([^<]*)<\/h3>/g, '<h3$1>$2</h3>'],
      [/<p([^>]*)>([^<]*)<\/p>/g, '<p$1>$2</p>'],
      [/<div([^>]*)>([^<]*)<\/div>/g, '<div$1>$2</div>'],
      [/<span([^>]*)>([^<]*)<\/span>/g, '<span$1>$2</span>'],
      
      // Fix malformed JSX expressions
      [/{\s*([^}]*)\s*}/g, '{$1}'],
      
      // Fix missing commas in object literals
      [/(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:'],
      
      // Fix malformed component names
      [/<([A-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />'],
      
      // Fix missing closing tags for JSX fragments
      [/<>([^<]*)<\/>/g, '<>{$1}</>'],
      
      // Fix malformed attribute syntax
      [/className\s*=\s*"([^"]*)"\s*([^>]*)/g, 'className="$1" $2'],
      
      // Fix missing closing tags for main elements
      [/<main([^>]*)>([^<]*)<\/main>/g, '<main$1>$2</main>'],
      [/<section([^>]*)>([^<]*)<\/section>/g, '<section$1>$2</section>'],
      [/<article([^>]*)>([^<]*)<\/article>/g, '<article$1>$2</article>'],
      
      // Fix malformed button elements
      [/<button([^>]*)>([^<]*)<\/button>/g, '<button$1>$2</button>'],
      
      // Fix malformed link elements
      [/<Link([^>]*)>([^<]*)<\/Link>/g, '<Link$1>$2</Link>'],
      
      // Fix malformed icon elements
      [/<([A-Z][a-zA-Z0-9]*)\s*className/g, '<$1 className'],
      
      // Fix missing closing tags for lists
      [/<ul([^>]*)>([^<]*)<\/ul>/g, '<ul$1>$2</ul>'],
      [/<ol([^>]*)>([^<]*)<\/ol>/g, '<ol$1>$2</ol>'],
      [/<li([^>]*)>([^<]*)<\/li>/g, '<li$1>$2</li>'],
      
      // Fix malformed return statements
      [/return\s*\(\s*<([^>]+)>/g, 'return (\n    <$1>'],
      
      // Fix missing closing parentheses
      [/<([^>]+)>\s*\)\s*;?\s*$/g, '<$1>\n  );\n}'],
      
      // Fix malformed JSX in arrays
      [/\[\s*<([^>]+)>/g, '[\n    <$1>'],
      
      // Fix missing closing brackets
      [/<([^>]+)>\s*\]\s*;?\s*$/g, '<$1>\n  ];\n}'],
      
      // Fix malformed function declarations
      [/export\s+default\s+function\s+([^(]+)\s*\(\s*\)\s*{\s*return\s*<([^>]+)>/g, 'export default function $1() {\n  return (\n    <$2>'],
      
      // Fix missing semicolons
      [/}\s*$/g, '};\n'],
      
      // Fix malformed imports
      [/import\s+([^;]+);?\s*$/g, 'import $1;\n'],
      
      // Fix missing closing braces
      [/}\s*\)\s*;?\s*$/g, '}\n  );\n}'],
      
      // Fix malformed component exports
      [/export\s+default\s+([^;]+);?\s*$/g, 'export default $1;\n']
    ];
    
    // Apply fixes
    for (const [pattern, replacement] of fixes) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common issues
    content = content
      // Fix malformed JSX expressions
      .replace(/\{\s*([^}]*)\s*\}/g, '{$1}')
      // Fix missing closing tags
      .replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>([^<]*)<\/\1>/g, '<$1$2>$3</$1>')
      // Fix malformed closing tags
      .replace(/<\/<([^>]+)>/g, '</$1>')
      // Fix malformed opening tags
      .replace(/<<([^>]+)>/g, '<$1>')
      // Fix missing commas in object literals
      .replace(/(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:')
      // Fix malformed return statements
      .replace(/return\s*\(\s*<([^>]+)>/g, 'return (\n    <$1>')
      // Fix missing closing parentheses
      .replace(/<([^>]+)>\s*\)\s*;?\s*$/g, '<$1>\n  );\n}')
      // Fix malformed JSX in arrays
      .replace(/\[\s*<([^>]+)>/g, '[\n    <$1>')
      // Fix missing closing brackets
      .replace(/<([^>]+)>\s*\]\s*;?\s*$/g, '<$1>\n  ];\n}')
      // Fix malformed function declarations
      .replace(/export\s+default\s+function\s+([^(]+)\s*\(\s*\)\s*{\s*return\s*<([^>]+)>/g, 'export default function $1() {\n  return (\n    <$2>')
      // Fix missing semicolons
      .replace(/}\s*$/g, '};\n')
      // Fix malformed imports
      .replace(/import\s+([^;]+);?\s*$/g, 'import $1;\n')
      // Fix missing closing braces
      .replace(/}\s*\)\s*;?\s*$/g, '}\n  );\n}')
      // Fix malformed component exports
      .replace(/export\s+default\s+([^;]+);?\s*$/g, 'export default $1;\n');
    
    // Only write if content changed
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixJsxSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX syntax in ${fixedCount} files.`);