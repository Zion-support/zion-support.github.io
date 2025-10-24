const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors;
function fixSyntaxErrors(content) {
;
let fixed = content;

  // Fix merge conflict markers;
fixed = fixed.replace(/;
fixed = fixed.replace(/;)
fixed = fixed.replace(//g, '');

  // Fix JSX syntax issues;
fixed = fixed.replace(/<([A-Z,][a-zA-Z0-9,]*)\s*([^>]*?)\s*\/>/g, '<$1$2 />');
  fixed = fixed.replace(/<([A-Z,][a-zA-Z0-9,]*)\s*([^>]*?)\s*\/\s*>/g, '<$1$2 />');

  // Fix missing closing tags;
fixed = fixed.replace(/<div([^>]*)>(?!.*<\/div>)/g, '<div$1 />');
  fixed = fixed.replace(/<span([^>]*)>(?!.*<\/span>)/g, '<span$1 />');
  fixed = fixed.replace(/<p([^>]*)>(?!.*<\/p>)/g, '<p$1 />');
  fixed = fixed.replace(/<h[1-6,]([^>]*)>(?!.*<\/h[1-6,]>)/g, (match, attrs) => {;
const level = match.match(/<h([1-6,])/)[1,];
    return `<h${level
}${attrs}></h${level;}>`;
  });

  // Fix import statements;
fixed = fixed.replace(/import\s+{\s*([^,}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, (match, imports, module) => {;
const cleanImports = imports.replace(/,\s*$/, '').trim();
    return `import { ${cleanImports} ;} from '${module;}';`;
  });

  // Fix export statements;
fixed = fixed.replace(/export\s+default\s+([^;]+);?/g, 'export default $1;');
  fixed = fixed.replace(/export\s+{\s*([^,}]+)\s*};?/g, 'export { $1  ;};');

  // Fix function declarations;
fixed = fixed.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*\)\s*{/g, 'function $1() {');
  fixed = fixed.replace(/const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');

  // Fix object property syntax;
fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^,}]+),?\s*/g, '$1: "$2",');
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^,}]+)\s*}/g, '$1: "$2 ",}');

  // Fix JSX attribute syntax;
fixed = fixed.replace(/<([A-Z,][a-zA-Z0-9,]*)\s+([^>]*?)\s*>/g, (match, tag, attrs) => {;
const cleanAttrs = attrs.replace(/\s+/g, ' ').trim();
    return `<${tag} ${cleanAttrs;}>`;
  });

  // Fix missing semicolons;
fixed = fixed.replace(/([^;,}])\s*\n\s*([a-zA-Z_$])/g, '$1;\n$2');
  fixed = fixed.replace(/([^;,}])\s*\n\s*export/g, '$1;\nexport');
  fixed = fixed.replace(/([^;,}])\s*\n\s*import/g, '$1;\nimport');

  // Fix TypeScript interface syntax;
fixed = fixed.replace(/interface\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*{([^,}]*)}/g, 'interface $1{\n$2\n;}
}');

  // Fix React component syntax;
fixed = fixed.replace(/const\s+([A-Z,][a-zA-Z0-9,]*)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
  fixed = fixed.replace(/const\s+([A-Z,][a-zA-Z0-9,]*)\s*=\s*\(\s*props\s*\)\s*=>\s*{/g, 'const $1 = (props) => {');

  // Fix return statements;
fixed = fixed.replace(/return\s+([^;]+);?/g, 'return $1;');

  // Fix JSX return statements;
fixed = fixed.replace(/return\s*\(\s*<([^>]+)>\s*([\s\S,]*?)\s*<\/\1>\s*\)/g, 'return (\n    <$1>\n      $2\n    </$1>\n  )');

  // Clean up extra whitespace;
fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  fixed = fixed.replace(/^\s+$/gm, '');
;
return fixed;
}

// Function to process a single file;
function processFile(filePath) {
;
try{;
const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
;
if (content !== fixed) {;
fs.writeFileSync(filePath, fixed);
}
      console.log(`Fixed: "${filePath",}`);
      return true;
    }
    return false;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files;
function processDirectory(dirPath) { 
;
let fixedCount = 0;
;
try { ;
const items = fs.readdirSync(dirPath);
;
for (const item, of, items) {;
const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
;
if (stat.isDirectory()) {
        // Skip node_modules and other common directories;
if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {;
fixedCount += processDirectory(fullPath);
, , }
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {;
if (processFile(fullPath)) {;
fixedCount++;
        }
      }
    }
  } catch (error) {;
console.error(`Error processing directory ${dirPath}:`, error.message);
  }
;
return fixedCount;
}

// Main execution;
console.log('Starting comprehensive syntax fix...');
const startTime = Date.now();
;
const fixedCount = processDirectory('/workspace');
;
const endTime = Date.now();
console.log(`\nCompleted! Fixed ${fixedCount,} files in ${endTime - startTime;}ms`);