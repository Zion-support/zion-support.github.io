import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the components directory
const files = await glob('app/components/**/*.{ts,tsx}');

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the main issue: incorrect destructuring syntax
    // Pattern: const Component: React.FC<Props> = (_{ prop1, prop2 }) => {
    // Should be: const Component: React.FC<Props> = ({ prop1, prop2 }) => {
    const destructuringFix = content.replace(
      /const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\s*_\s*\{\s*([^}]+)\s*\}\s*\)\s*=>/g,
      'const $1: React.FC<$1Props> = ({ $2 }) =>'
    );
    
    if (destructuringFix !== content) {
      content = destructuringFix;
      modified = true;
    }

    // Fix interface naming issues - ensure interface names match component names
    const componentNameMatch = content.match(/const\s+(\w+):\s*React\.FC/);
    if (componentNameMatch) {
      const componentName = componentNameMatch[1];
      const interfaceName = componentName + 'Props';
      
      // Fix interface references in the component definition
      content = content.replace(
        new RegExp(`React\\.FC<[^>]*>`, 'g'),
        `React.FC<${interfaceName}>`
      );
      
      modified = true;
    }

    // Fix any remaining syntax issues with destructuring
    // Fix cases where there are missing commas or incorrect syntax
    content = content.replace(
      /\(\s*_\s*\{\s*([^}]+)\s*\}\s*\)/g,
      '({ $1 })'
    );

    // Fix any remaining underscore destructuring patterns
    content = content.replace(
      /\(\s*_\s*\)/g,
      '()'
    );

    // Fix any malformed destructuring with missing commas
    content = content.replace(
      /\(\s*\{\s*([^,}]+)\s*([^,}]+)\s*\}\s*\)/g,
      '({ $1, $2 })'
    );

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files`);