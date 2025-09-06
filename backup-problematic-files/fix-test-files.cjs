const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
// Function to fix common syntax errors in test files
function fixTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Fix unterminated strings and syntax errors
    content = content
      // Fix unterminated import strings
      .replace(/from 'react"$/gm, "from 'react';")
      .replace(/from '@testing-library\/react"$/gm, "from '@testing-library/react';")
      .replace(/from '@testing-library\/jest-dom$/gm, "from '@testing-library/jest-dom';")
      .replace(/from '\.\.\/components\/[^"]*"$/gm, (match) => match.replace('"', "';"))
      // Fix unterminated describe and test strings
      .replace(/describe\('([^']*)"$/gm, "describe('$1', () => {")
      .replace(/test\('([^']*)"$/gm, "test('$1', () => {")
      // Fix JSX syntax errors
      .replace(/<([A-Za-z]+)\s+\/\s+\/>/g, '<$1 />')
      .replace(/<([A-Za-z]+)\s+\/\s+\/>/g, '<$1 />')
      // Fix unterminated expect statements
      .replace(/expect\([^)]*\)\.toBeInTheDocument\(\);'$/gm, 'expect($1).toBeInTheDocument();')
      // Fix missing semicolons and closing braces
      .replace(/}\)$/gm, '});')
      .replace(/}\)$/gm, '});')
      // Fix missing closing braces for describe blocks
      .replace(/}\)$/gm, '});')
      .replace(/}\)$/gm, '});');
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
// Get all test files in __tests__ directory
const testDir = path.join(__dirname, '__tests__');
const files = fs.readdirSync(testDir).filter(file => file.endsWith('.test.js'));
console.log(`Found ${files.length} test files to fix`);
let fixedCount = 0;
files.forEach(file => {
  const filePath = path.join(testDir, file);
  if (fixTestFile(filePath)) {
    fixedCount++;
  }
});
console.log(`Fixed ${fixedCount} out of ${files.length} test files`);
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Function to fix malformed test files;
function fixTestFile(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if the file has malformed syntax (all on one line with missing quotes);
    if (content.includes('import React from \'react" import { render,screen,fireEvent }')) {}
      console.log(`Fixing malformed test file: ${filePath}`);
      // Extract component name from file path;
      const fileName = path.basename(filePath, '.test.js');
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
      // Create a proper test file structure;
      const fixedContent = `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${componentName} from '../components/${componentName}';
describe('${componentName}', () => {}
  test('renders without crashing', () => {}
    render(<${componentName} />);
    expect(screen.getByTestId('${componentName.toLowerCase()}')).toBeInTheDocument();
  }
});
  test('displays correct content', () => {}
    render(<${componentName} />);
    // Add specific content tests here;
  }
});
  test('handles user interactions', () => {}
    render(<${componentName} />);
    // Add interaction tests here;
  }
});
  test('applies correct styling', () => {}
    render(<${componentName} />);
    // Add styling tests here;
  }
});
}
});
`;`
      fs.writeFileSync(filePath, fixedContent);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  };
};
// Function to remove unused fireEvent imports;
function removeUnusedFireEvent(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if fireEvent is imported but not used;
    if (content.includes('fireEvent') && !content.includes('fireEvent(')) {}
      console.log(`Removing unused fireEvent from: ${filePath}`);
      // Remove fireEvent from import statement;
      content = content.replace(/, fireEvent/g, '');
      content = content.replace(/fireEvent, /g, '');
      content = content.replace(/fireEvent/g, '');
      fs.writeFileSync(filePath, content);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error processing file ${filePath}:`, error.message);
    return false;
  };
};
// Get all test files;
const testDir = path.join(__dirname, '__tests__');
const files = fs.readdirSync(testDir);
let fixedCount = 0;
let fireEventCount = 0;
files.forEach(file => {})
  if (file.endsWith('.test.js')) {}
    const filePath = path.join(testDir, file);
    // Fix malformed files;
    if (fixTestFile(filePath)) {}
      fixedCount++;
    };
    // Remove unused fireEvent;
    if (removeUnusedFireEvent(filePath)) {}
      fireEventCount++;
    };
  };
}
});
console.log(`Fixed ${fixedCount} malformed test files`);
console.log(`Removed unused fireEvent from ${fireEventCount} files`);
<<<<<<< HEAD
=======
=======
}
});
`;`
      fs.writeFileSync(filePath, fixedContent);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  };
};
// Function to remove unused fireEvent imports;
function removeUnusedFireEvent(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if fireEvent is imported but not used;
    if (content.includes('fireEvent') && !content.includes('fireEvent(')) {}
      console.log(`Removing unused fireEvent from: ${filePath}`);
      // Remove fireEvent from import statement;
      content = content.replace(/, fireEvent/g, '');
      content = content.replace(/fireEvent, /g, '');
      content = content.replace(/fireEvent/g, '');
      fs.writeFileSync(filePath, content);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error processing file ${filePath}:`, error.message);
    return false;
  };
};
// Get all test files;
const testDir = path.join(__dirname, '__tests__');
const files = fs.readdirSync(testDir);
let fixedCount = 0;
let fireEventCount = 0;
files.forEach(file => {})
  if (file.endsWith('.test.js')) {}
    const filePath = path.join(testDir, file);
    // Fix malformed files;
    if (fixTestFile(filePath)) {}
      fixedCount++;
    };
    // Remove unused fireEvent;
    if (removeUnusedFireEvent(filePath)) {}
      fireEventCount++;
    };
  };
}
});
console.log(`Fixed ${fixedCount} malformed test files`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
console.log(`Removed unused fireEvent from ${fireEventCount} files`);
<<<<<<< HEAD
=======
console.log(`Removed unused fireEvent from ${fireEventCount} files`);
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/main
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const { execSync } = require('child_process');
class TestFileFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
  fixMergeConflicts(content) {
    // Remove merge conflict markers and keep the main branch content
    return content
      .replace(/[\s\S]*?
      .replace(/
      .replace(/') && !content.includes('>>>>>>>')) {
        // Check for other syntax issues
        if (!content.includes('.test') && !content.includes('interface') || content.includes('export default')) {
          return;
        }
      }
      this.log(`Processing: ${filePath}`);
      let fixed = this.fixMergeConflicts(content);
      fixed = this.fixTestFileSyntax(fixed, filePath);
      // Clean up extra whitespace and empty lines
      fixed = fixed
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/^\s+$/gm, '')
        .trim();
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
      }
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error processing ${filePath}: ${error.message}`);
    }
  }
  async fixAllTestFiles() {
    this.log('Starting test file cleanup...');
    // Find all test files
    const testFiles = [];
    try {
      const result = execSync('find . -name "*.test.*" -o -name "*.spec.*" | grep -v node_modules', { encoding: 'utf8' });
      testFiles.push(...result.trim().split('\n').filter(f => f));
    } catch (error) {
      this.log('Error finding test files: ' + error.message);
    }
    // Process each file
    for (const file of testFiles) {
      this.processFile(file);
    }
    // Summary
    this.log(`\n=== SUMMARY ===`);
    this.log(`Files processed: ${testFiles.length}`);
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    if (this.fixedFiles.length > 0) {
      this.log('\nFixed files:');
      this.fixedFiles.forEach(f => this.log(`  - ${f}`));
    }
    if (this.errors.length > 0) {
      this.log('\nErrors:');
      this.errors.forEach(e => this.log(`  - ${e.file}: ${e.error}`));
    }
    return this.fixedFiles.length;
  }
}
if (require.main === module) {
  const fixer = new TestFileFixer();
  fixer.fixAllTestFiles().then(fixedCount => {
    console.log(`\nCompleted. Fixed ${fixedCount} files.`);
    process.exit(fixedCount > 0 ? 0 : 1);
  });
}
<<<<<<< HEAD
module.exports = TestFileFixer;
=======

module.exports = TestFileFixer;
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
