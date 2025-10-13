import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function fix-import-syntax.js() {
  return (
    <div className="min-h-screen bg-gray-900 text-white" content="Fix Import Syntax.js solutions by Zion Tech Group"container mx-auto px-4 py-20"text-center"text-4 xl font-bold mb-8"text-xl text-gray-300 mb-8"import { " followed by "
      if (line.trim() === 'import { ' && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
if (nextLine.trim().startsWith('import { ')) {
          // Skip the malformed line and use the next one;
newLines.push(nextLine);
          i++; // Skip the next line since we already added it;
          fixed = true;
          continue;
        }
      newLines.push(line);
    }

    if (fixed) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed import syntax in: ${filePath}`);
    }

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
// Function to recursively find all TypeScript files;
function findFiles(dir, fileList = []) {
// Function to recursively find all TypeScript files>
  function findFiles(dir, fileList = []) {>
  const files = fs.readdirSync(dir);
  >
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git')) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Main execution;
console.log('Starting to fix import syntax...');
const files = findFiles('/workspace/app');
files.forEach(file => {
  fixImportSyntax(file);
});

console.log('Finished fixing import syntax.');
