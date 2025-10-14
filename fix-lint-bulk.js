#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all page.tsx files
function getAllPageFiles() {
  try {
    const output = execSync('find app -name "page.tsx"', { encoding: 'utf8' });
    return output.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('Error finding page files:', error.message);
    return [];
  }
}

// Fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Get component name from directory path
    const dirName = path.basename(path.dirname(filePath));
    const componentName = dirName
      .split('-')
      .map(word => {
        // Handle numeric prefixes by converting to words
        if (word.match(/^\d/)) {
          const numMap = { '5': 'Five', '4': 'Four', '3': 'Three', '2': 'Two', '1': 'One' };
          return numMap[word[0]] + word.slice(1).charAt(0).toUpperCase() + word.slice(2);
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('') + 'Page';

    // Fix unused Page variables
    if (content.includes('const Page: React.FC = () => {')) {
      content = content.replace(/const Page: React\.FC = \(\) => \{/, `const ${componentName}: React.FC = () => {`);
      modified = true;
    }

    if (content.includes('const PageComponent: React.FC = () => {')) {
      content = content.replace(/const PageComponent: React\.FC = \(\) => \{/, `const ${componentName}: React.FC = () => {`);
      modified = true;
    }

    // Fix any types
    if (content.includes('React.ComponentType<any>')) {
      content = content.replace(/React\.ComponentType<any>/g, 'React.ComponentType<{}>');
      modified = true;
    }

    // Fix lazy loading patterns
    if (content.includes('const LazyPage:') || content.includes('const page = React.lazy')) {
      content = content.replace(/const LazyPage: React\.LazyExoticComponent<React\.ComponentType<{}>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\nexport default LazyPage;/, `export default ${componentName};`);
      content = content.replace(/const page = React\.lazy\(\(\) => import\('\.\/page'\)\);\nexport default page;/, `export default ${componentName};`);
      modified = true;
    }

    // Fix files that only have unused imports from lucide-react
    const lines = content.trim().split('\n');
    if (lines.length <= 5 && content.includes("from 'lucide-react'")) {
      content = `import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            ${componentName.replace('Page', ' Services')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional services and solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ${componentName};
`;
      modified = true;
    }

    // Remove unused lucide-react imports
    const lucideImportMatch = content.match(/import \{ [^}]+ \} from 'lucide-react';/);
    if (lucideImportMatch) {
      const importLine = lucideImportMatch[0];
      const imports = importLine.match(/\{ ([^}]+) \}/)[1].split(',').map(s => s.trim());
      
      // Check which imports are actually used
      const usedImports = imports.filter(imp => {
        // Check if the import is used in the component (not just in the import line)
        const componentContent = content.replace(importLine, '');
        return componentContent.includes(imp) && !componentContent.includes(`'${imp}'`);
      });

      if (usedImports.length === 0) {
        // Remove entire import if no icons are used
        content = content.replace(importLine + '\n', '');
        modified = true;
      } else if (usedImports.length < imports.length) {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importLine, newImport);
        modified = true;
      }
    }

    if (modified) {
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

// Main execution
console.log('Starting bulk lint fixes...');
const files = getAllPageFiles();
console.log(`Found ${files.length} page files`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Running lint check...');

try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('Lint check passed!');
} catch (error) {
  console.log('Some issues remain, but progress has been made.');
}