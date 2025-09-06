<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
function fixAllSyntaxErrors(content) {}
	let next = content;
	next = next.replace(/\)\s*;\s*\)/g, '))');
	next = next.replace(/\[\s*;\s*/g, '[');]
	next = next.replace(/;\s*\]/g, ']');
	next = next.replace(/;\s*\}/g, '}');
	next = next.replace(/,\s*;/g, ',');
	next = next.replace(/;\s*,/g, ',');
	next = next.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)\s*;\s*/g, '.$1');
	return next;
};
function processFile(filePath) {}
	try {}
		const content = fs.readFileSync(filePath, 'utf8');
		const fixedContent = fixAllSyntaxErrors(content);
		if (fixedContent !== content) {}
			fs.writeFileSync(filePath, fixedContent, 'utf8');
			console.log(`Fixed syntax errors "in": ${filePath}`);
			return true;
		};
		return false;
	} catch (error) {}
		console.error(`Error processing ${filePath}:`, error.message);
		return false;
	};
};
function findFiles(dir, extensions) {}
	const files = [];
	function traverse(currentDir) {}
		const items = fs.readdirSync(currentDir);
		for (const item of items) {}
			const fullPath = path.join(currentDir, item);
			const stat = fs.statSync(fullPath);
			if (stat.isDirectory()) {}
				if (item === 'node_modules' || item.startsWith('.')) continue;
				traverse(fullPath);
			} else if (extensions.some(ext => fullPath.endsWith(ext))) {}
				files.push(fullPath);
			};
		};
	};
	traverse(dir);
	return files;
};
const extensions = ['.js', '.ts', '.cjs', '.mjs'];
const files = findFiles('.', extensions);
let fixedCount = 0;
for (const file of files) {}
	if (processFile(file)) fixedCount++
};
console.log(`Fixed syntax errors in ${fixedCount} files.`);
=======
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Final comprehensive syntax fix...');

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  let fixed = content;
  
  // Remove extra empty lines at the end
  fixed = fixed.replace(/\n+$/, '\n');
  
  // Fix missing closing braces for functions
  if (fixed.includes('export default function') && !fixed.includes('}\n')) {
    // Add missing closing brace if function is not properly closed
    const lines = fixed.split('\n');
    let braceCount = 0;
    let inFunction = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('export default function')) {
        inFunction = true;
      }
      if (inFunction) {
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
      }
    }
    
    if (inFunction && braceCount > 0) {
      fixed += '\n}';
    }
  }
  
  // Fix missing closing braces for try-catch blocks
  if (fixed.includes('} catch (') && !fixed.includes('}\n')) {
    const lines = fixed.split('\n');
    let braceCount = 0;
    let inTryCatch = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('try {') || line.includes('} catch (')) {
        inTryCatch = true;
      }
      if (inTryCatch) {
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
      }
    }
    
    if (inTryCatch && braceCount > 0) {
      fixed += '\n}';
    }
  }
  
  return fixed;
}

// Function to find and fix all TypeScript/JavaScript files
function fixAllFiles() {
  const filePatterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  let fixedCount = 0;
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const fixed = fixSyntaxIssues(content);
            
            if (fixed !== content) {
              fs.writeFileSync(fullPath, fixed);
              console.log(`✅ Fixed: ${fullPath}`);
              fixedCount++;
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory('/workspace');
  return fixedCount;
}

// Main execution
const fixedCount = fixAllFiles();
console.log(`🎉 Fixed syntax issues in ${fixedCount} files`);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
