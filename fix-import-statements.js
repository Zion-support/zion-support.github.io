#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix import statements
function fixImportStatements(content) {
  let fixed = content;
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+([^'";\n]+);?/g, (match, name, importPath) => {
    if (!importPath.startsWith("'") && !importPath.startsWith('"')) {
      return `import ${name} from '${importPath}';`;
    }
    return match;
  });
  
  // Fix other common syntax issues
  fixed = fixed.replace(/className=([^"'\s>]+)/g, 'className="$1"');
  fixed = fixed.replace(/title="([^"]*?)(?=\s*[>}])/g, 'title="$1"');
  fixed = fixed.replace(/description="([^"]*?)(?=\s*[>}])/g, 'description="$1"');
  fixed = fixed.replace(/keywords="([^"]*?)(?=\s*[>}])/g, 'keywords="$1"');
  fixed = fixed.replace(/features\.map\(\(feature", index\)/g, 'features.map((feature, index)');
  fixed = fixed.replace(/icon: "<\w+ className="[^"]*" \/>"/g, 'icon: <CheckCircle className="w-8 h-8" />');
  fixed = fixed.replace(/hover:\s*"bg-\w+/g, 'hover:bg-blue-700');
  fixed = fixed.replace(/grid md:\s*"grid-cols/g, 'grid md:grid-cols');
  fixed = fixed.replace(/<EnhancedSEO\s*;\s*>/g, '<EnhancedSEO');
  fixed = fixed.replace(/<\/\w+>\s*;\s*$/gm, '');
  fixed = fixed.replace(/;\s*$/gm, '');
  
  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImportStatements(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing import statements...');

async function main() {
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });
  let fixedCount = 0;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);