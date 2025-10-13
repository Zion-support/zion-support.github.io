import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/JavaScript files in the app directory
const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: new URL('..', import.meta.url).pathname });

const consolePatterns = [
  { pattern: /console\.log\(/g, replacement: 'logger.log(' },
  { pattern: /console\.warn\(/g, replacement: 'logger.warn(' },
  { pattern: /console\.error\(/g, replacement: 'logger.error(' },
  { pattern: /console\.info\(/g, replacement: 'logger.info(' },
  { pattern: /console\.debug\(/g, replacement: 'logger.debug(' },
];

let totalReplacements = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let hasReplacements = false;
  let fileReplacements = 0;

  // Check if file already imports logger
  const hasLoggerImport = content.includes("import logger from '../../utils/logger'"import logger from '../../../utils/logger'") ||
                         content.includes(");

  // Apply replacements
  consolePatterns.forEach(({ pattern, replacement }) => {
    const matches = content.match(pattern);
    if (matches) {
      content = content.replace(pattern, replacement);
      fileReplacements += matches.length;
      hasReplacements = true;
    }
  });

  // Add logger import if needed and replacements were made
  if (hasReplacements && !hasLoggerImport) {
    // Determine the correct import path based on file depth
    const depth = file.split('/').length - 2; // -2 for app/ and filename
    const importPath = '../'.repeat(depth) + 'utils/logger';
    
    // Add import after the first import statement
    const firstImportMatch = content.match(/^import\s+.*?from\s+['"][^'"];?\s*$/m);
    if (firstImportMatch) {
      const insertIndex = firstImportMatch.index + firstImportMatch[0].length;
      content = content.slice(0, insertIndex) + 
                `\nimport logger from '${importPath}';` + 
                content.slice(insertIndex);
    }
  if (hasReplacements) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}: ${fileReplacements} replacements`);
    totalReplacements += fileReplacements;
  }
});

console.log(`\nTotal replacements made: ${totalReplacements}`);