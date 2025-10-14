import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix concatenated import statements - more comprehensive
  content = content.replace(/import\s+[^;]+;"import\s+/g, (match) => {
    const parts = match.split('"import');
    const firstImport = parts[0].trim();
    const otherImports = parts.slice(1).map(imp => 'import ' + imp.trim()).join('\n');
    return firstImport + '\n' + otherImports;
  });

  // Fix missing quotes in import statements
  content = content.replace(/import\s+([^;]+);"([^"]+)"/g, 'import $1;\nimport $2');
  content = content.replace(/import\s+([^;]+);"([^"]+)"/g, 'import $1;\nimport $2');

  // Fix missing quotes around module names in imports
  content = content.replace(/from\s+([a-zA-Z0-9-]+);/g, 'from "$1";');
  content = content.replace(/from\s+([a-zA-Z0-9-]+)";/g, 'from "$1";');

  // Fix object property syntax (name= to name:)
  content = content.replace(/name=/g, 'name:');
  content = content.replace(/href=/g, 'href:');
  content = content.replace(/className=/g, 'className:');
  content = content.replace(/key=/g, 'key:');
  content = content.replace(/to=/g, 'to:');
  content = content.replace(/size=/g, 'size:');

  // Fix missing quotes around string values in objects
  content = content.replace(/:\s*([a-zA-Z][a-zA-Z0-9-]*)\s*([,}])/g, ': "$1"$2');
  content = content.replace(/:\s*"([^"]*)"\s*([,}])/g, ': "$1"$2');

  // Fix malformed JSX attributes
  content = content.replace(/className:\s*"([^"]*)"\s*([^>]*>)/g, 'className="$1"$2');
  content = content.replace(/name:\s*"([^"]*)"\s*([^>]*>)/g, 'name="$1"$2');
  content = content.replace(/content:\s*"([^"]*)"\s*([^>]*>)/g, 'content="$1"$2');

  // Fix missing quotes in JSX attributes
  content = content.replace(/className=\s*([a-zA-Z][a-zA-Z0-9-]*)\s*([^>]*>)/g, 'className="$1"$2');
  content = content.replace(/name=\s*([a-zA-Z][a-zA-Z0-9-]*)\s*([^>]*>)/g, 'name="$1"$2');
  content = content.replace(/content=\s*([a-zA-Z][a-zA-Z0-9-]*)\s*([^>]*>)/g, 'content="$1"$2');

  // Fix malformed function declarations
  content = content.replace(/const\s+([a-zA-Z0-9]+)\s*:\s*\(\)\s*=>\s*{/g, 'const $1 = () => {');
  content = content.replace(/const\s+([a-zA-Z0-9]+)\s*:\s*useState/g, 'const $1 = useState');

  // Fix missing semicolons in variable declarations
  content = content.replace(/const\s+([a-zA-Z0-9]+)\s*:\s*([^;]+)([^;])$/gm, 'const $1 = $2$3;');

  // Fix malformed array syntax
  content = content.replace(/\[\s*{([^}]+)}\s*,\s*{([^}]+)}\s*\]/g, '[\n    {$1},\n    {$2}\n  ]');

  // Fix missing closing braces and parentheses
  content = content.replace(/return\s*\(\s*<([^>]+)>([^<]*)<\/([^>]+)>\s*\)\s*;\s*}/g, 'return (\n    <$1>\n      $2\n    </$3>\n  );\n}');

  // Fix missing export statements
  if (!content.includes('export default')) {
    const componentName = content.match(/const\s+([a-zA-Z0-9]+)\s*=/)?.[1];
    if (componentName) {
      content += `\n\nexport default ${componentName};`;
    }
  }

  // Fix unterminated string literals
  content = content.replace(/"([^"]*)$/gm, '"$1"');

  // Fix missing closing tags
  content = content.replace(/<([a-zA-Z][a-zA-Z0-9-]*)\s*([^>]*>)\s*([^<]*)$/gm, '<$1$2$3</$1>');

  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process all TypeScript/React files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        fixedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);