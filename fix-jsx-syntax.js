#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
// Function to recursively find all files with JSX syntax errors
function findFilesWithJSXErrors(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {)
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && !file.includes('app-broken') && !file.includes('app-disabled')) {
      findFilesWithJSXErrors(filePath, fileList);
}
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.jsx'))) {
  const content = fs.readFileSync(filePath, 'utf8');
      // Check for common JSX syntax errors
}
      if (content.includes(');') || content.includes('};') || content.includes('>;')) {
  fileList.push(filePath);
}
      }
    }
  });
  return fileList;
}
// Function to fix JSX syntax errors
function fixJSXSyntax(filePath) {
}
  console.log(`Fixing JSX syntax in: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  // Fix semicolons after JSX elements
  content = content.replace(/>\s*;\s*\n/g, '>\n');
  content = content.replace(/>\s*;\s*$/gm, '>');
  // Fix semicolons after closing JSX tags
  content = content.replace(/<\/[^>]+>\s*;\s*\n/g, '</$1>\n');
  content = content.replace(/<\/[^>]+>\s*;\s*$/gm, '</$1>');
  // Fix semicolons after JSX expressions
  content = content.replace(/\}\s*;\s*\n/g, '}\n');
  content = content.replace(/\}\s*;\s*$/gm, '}');
  // Fix semicolons after JSX attributes
  content = content.replace(/="[^"]*"\s*;\s*\n/g, '="$1"\n');
  content = content.replace(/="[^"]*"\s*;\s*$/gm, '="$1"');
  // Clean up any double newlines
  content = content.replace(/\n\n\n+/g, '\n\n');
  fs.writeFileSync(filePath, content);
}
// Main execution
try {
  console.log('Searching for files with JSX syntax errors...');
  const errorFiles = findFilesWithJSXErrors('.');
}
  console.log(`Found ${errorFiles.length} files with JSX syntax errors:`);
  errorFiles.forEach(file => console.log(`  - ${file}`));
  if (errorFiles.length === 0) {
  console.log('No JSX syntax errors found!');
    process.exit(0);
}
  }
  console.log('\nFixing JSX syntax errors...');
  errorFiles.forEach(fixJSXSyntax);
  console.log('\nJSX syntax errors have been fixed!');
} catch (error) {
  console.error('Error fixing JSX syntax errors:', error.message);
  process.exit(1);
}
}