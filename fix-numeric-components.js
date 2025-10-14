#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with numeric component names
function getFilesWithNumericComponents() {
  try {
    const output = execSync('grep -r "const [0-9]" app --include="*.tsx" | cut -d: -f1', { encoding: 'utf8' });
    return output.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('Error finding files with numeric components:', error.message);
    return [];
  }
}

// Fix numeric component names
function fixNumericComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix component names starting with 5g
    if (content.includes('const 5g')) {
      content = content.replace(/const 5g([A-Za-z]+): React\.FC = \(\) => \{/, 'const FiveG$1: React.FC = () => {');
      content = content.replace(/export default 5g([A-Za-z]+);/, 'export default FiveG$1;');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed numeric component: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing numeric component names...');
const files = getFilesWithNumericComponents();
console.log(`Found ${files.length} files with numeric components`);

let fixedCount = 0;
for (const file of files) {
  if (fixNumericComponent(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);