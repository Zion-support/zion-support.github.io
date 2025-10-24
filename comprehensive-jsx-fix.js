const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;

  // Remove extra semicolons and fix basic syntax
  fixed = fixed.replace(/;\s*;/g, ';');
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/,\s*;/g, ',');
  fixed = fixed.replace(/,\s*$/gm, '');

  // Fix JSX attribute syntax
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*{([^}]+)}/g, '$1={$2}');
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*"([^"]*)"/g, '$1="$2"');

  // Fix className syntax
  fixed = fixed.replace(/className\s*=\s*"([^"]*)"\s*>/g, 'className="$1">');
  fixed = fixed.replace(/className\s*=\s*{([^}]+)}\s*>/g, 'className={$1}>');

  // Fix JSX element spacing
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s+([^>]*?)\s*>/g, (match, tag, attrs) => {
    const cleanAttrs = attrs.replace(/\s+/g, ' ').trim();
    return `<${tag} ${cleanAttrs}>`;
  });

  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>(?!.*<\/div>)([\s\S]*?)<\/div>/g, '<div$1>$2</div>');
  fixed = fixed.replace(/<span([^>]*)>(?!.*<\/span>)([\s\S]*?)<\/span>/g, '<span$1>$2</span>');
  fixed = fixed.replace(/<p([^>]*)>(?!.*<\/p>)([\s\S]*?)<\/p>/g, '<p$1>$2</p>');
  fixed = fixed.replace(/<h[1-6]([^>]*)>(?!.*<\/h[1-6]>)([\s\S]*?)<\/h[1-6]>/g, (match, attrs, content) => {
    const level = match.match(/<h([1-6])/)[1];
    return `<h${level}${attrs}>${content}</h${level}>`;
  });

  // Fix React component structure
  fixed = fixed.replace(/const\s+([A-Z][a-zA-Z0-9]*)\s*=\s*\(\s*\)\s*=>\s*{([\s\S]*?)return\s*\(([\s\S]*?)\);?\s*}/g, (match, componentName, body, returnContent) => {
    return `const ${componentName} = () => {\n${body}\n  return (\n    ${returnContent.trim()}\n  );\n}`;
  });

  // Fix export default statements
  fixed = fixed.replace(/export\s+default\s+([A-Z][a-zA-Z0-9]*);?/g, 'export default $1;');

  // Fix import statements
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, 'import { $1 } from \'$2\';');

  // Fix JSX fragment syntax
  fixed = fixed.replace(/<>\s*<([A-Z][a-zA-Z0-9]*)[^>]*>[\s\S]*?<\/\1>\s*<([A-Z][a-zA-Z0-9]*)[^>]*>[\s\S]*?<\/\2>\s*<\/>/g, (match) => {
    return match.replace(/<>\s*/, '<>\n      ').replace(/\s*<\/>/, '\n    </>');
  });

  // Fix missing semicolons in JSX
  fixed = fixed.replace(/([^;}])\s*\n\s*export/g, '$1;\nexport');
  fixed = fixed.replace(/([^;}])\s*\n\s*import/g, '$1;\nimport');

  // Fix object property syntax in JSX props
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^,}]+),?\s*/g, '$1: $2,');

  // Fix JSX element structure - ensure proper nesting
  fixed = fixed.replace(/<div([^>]*)>([\s\S]*?)<\/div>\s*<([A-Z][a-zA-Z0-9]*)([^>]*)>([\s\S]*?)<\/\3>/g, (match, divAttrs, divContent, nextTag, nextAttrs, nextContent) => {
    return `<div${divAttrs}>\n      ${divContent}\n      <${nextTag}${nextAttrs}>\n        ${nextContent}\n      </${nextTag}>\n    </div>`;
  });

  // Fix JSX element structure - wrap multiple elements in fragments
  fixed = fixed.replace(/return\s*\(\s*<([A-Z][a-zA-Z0-9]*)[^>]*>[\s\S]*?<\/\1>\s*<([A-Z][a-zA-Z0-9]*)[^>]*>[\s\S]*?<\/\2>\s*\)/g, (match) => {
    return match.replace(/return\s*\(\s*/, 'return (\n    <>\n      ').replace(/\s*\)$/, '\n    </>\n  )');
  });

  // Clean up extra whitespace
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  fixed = fixed.replace(/^\s+$/gm, '');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
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
console.log('Starting comprehensive JSX structure fix...');
const startTime = Date.now();

const fixedCount = processDirectory('/workspace');

const endTime = Date.now();
console.log(`\nCompleted! Fixed ${fixedCount} files in ${endTime - startTime}ms`);