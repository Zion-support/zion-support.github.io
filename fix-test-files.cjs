const fs = require('fs');
<<<<<<< HEAD
<<<<<<< HEAD
const path = require(path');


=======
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD



main

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Function to fix malformed test files;
  try {}
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors in test files
    content = content.replace(/render\(<[^>]+>\)""/g, render(<$1>);');
    content = content.replace(/render\(<[^>]+>\)\n\s*expect/g, 'render(<$1>);\n    expect);
    content = content.replace(/it\(displays expected content', \(\) => \{\s*render\(<[^>]+>\)\s*\}/g, 'it(\displays expected content\, () => {\n    render(<$1>);\n  });');
    
    // Fix missing semicolons after render calls
    content = content.replace(/(render\(<[^>]+>\))(?!;)/g, '$1;);
    
    // Fix missing closing braces and semicolons
    content = content.replace(/(\s+it\(displays expected content', \(\) => \{\s*render\(<[^>]+>\);\s*)(?!\})/g, '$1  }););
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixTestFiles(dir) {
  const files = fs.readdirSync(dir);
=======
const path = require('path');

const testDir = path.join(__dirname, '__tests__');

function fixTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the corrupted pattern
    if (content.includes('const React from "react"') || content.includes('import _React from \'react\'')) {
      console.log(`Fixing ${filePath}`);
      
      // Extract the component name from the file path
      const fileName = path.basename(filePath, '.test.js');
      const componentName = fileName.replace('.dynamic', '');
      
      // Create clean test file content
      const cleanContent = `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${componentName} from '../components/${componentName}';

describe('${componentName}', () => {
  test('renders without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByTestId('${componentName.toLowerCase()}')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<${componentName} />);
    // Add specific content tests based on component
  });
  test('handles user interactions', () => {
    render(<${componentName} />);
    // Add interaction tests based on component functionality
  });
  test('applies correct styling', () => {
    render(<${componentName} />);
    // Add styling tests if needed
  });
});
`;
      
      fs.writeFileSync(filePath, cleanContent);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
>>>>>>> origin/main
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
<<<<<<< HEAD
      findAndFixTestFiles(filePath);
    } else if (file.endsWith(.test.tsx') || file.endsWith('.test.ts)) {
      fixTestFile(filePath);
    }
  }
}

console.log(Fixing test files...');
findAndFixTestFiles('./src);
console.log(Done fixing test files.');
=======

    // Add styling tests here;
});`;
`;`
      fs.writeFileSync(filePath, fixedContent);
      return true;
    };
    return false;
  } catch (error) {}`;
    console.error(`Error fixing file ${filePath}:`, error.message);
// Function to remove unused fireEvent imports;
function removeUnusedFireEvent(filePath) {}

      // Remove fireEvent from import statement;
      content = content.replace(/, fireEvent/g, );
      content = content.replace(/fireEvent, /g, );
      content = content.replace(/fireEvent/g, );
      fs.writeFileSync(filePath, content);
    console.error(`Error processing file ${filePath}:`, error.message);

const files = fs.readdirSync(testDir);

let fixedCount = 0;
let fireEventCount = 0;

files.forEach(file => {})
  if (file.endsWith('.test.js')) {}
    const filePath = path.join(testDir, file);
    // Fix malformed files;
    if (fixTestFile(filePath)) {}
      fixedCount++;
    // Remove unused fireEvent;
    if (removeUnusedFireEvent(filePath)) {}
      fireEventCount++;
`;
console.log(`Fixed ${fixedCount} malformed test files`);`;
console.log(`Removed unused fireEvent from ${fireEventCount} files`);
>>>>>>> origin/chore/fix-lint-and-merge
=======
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.test.js') || file.endsWith('.test.tsx')) {
      if (fixTestFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting to fix test files...');
const fixedCount = walkDir(testDir);
console.log(`Fixed ${fixedCount} test files.`);
>>>>>>> origin/main
