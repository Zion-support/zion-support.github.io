import fs from 'fs';
import path from 'path';
// Get list of files with linting errors;
function getFilesWithErrors() {
  try {
&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
      if (line.includes('error') && line.includes('is defined but never used')) {
        const match = line.match(/^\/workspace\/([^:]+):/);
        if (match) {
          files.add(match[1]);
    });
    
    return Array.from(files);
  } catch (error) {
    console.log('Error getting files with errors:', error.message);
    return [];

// Fix unused imports in a file;
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    const usedImports = new Set();
    
    // First pass: collect all used imports by scanning the file;
    const fileContent = content.toLowerCase();
    
    // Check for common icon usage patterns;
    const iconPatterns = [
      'w-6 h-6', 'w-5 h-5', 'w-4 h-4', 'w-8 h-8', 'w-10 h-10',
      'className="', 'text-', 'bg-', 'hover:', 'focus:'
    ];
    
    // Check for JSX usage patterns;
    const jsxPatterns = [
      '
      '
      '
      '
      '
    ];
    
      // Skip import lines for now;
      if (line.trim().startsWith('import ')) {
        newLines.push(line);
        return;
      
      // Check if this line uses any imports;
      const lineLower = line.toLowerCase();
      let hasUsedImport = false;
      
      // Check for icon usage;
        if (lineLower.includes(pattern)) {
          hasUsedImport = true;
      });
      
      // Check for JSX usage;
        if (line.includes(pattern)) {
          hasUsedImport = true;
      });
      
      // Check for direct variable usage;
      if (line.includes('Helmet') || line.includes('Link') || line.includes('ArrowRight')) {
        hasUsedImport = true;
      
      if (hasUsedImport) {
        newLines.push(line);
      } else {
        newLines.push(line);
    });
    
    // Now process import lines and remove unused ones;
    const finalLines = [];
    let inImportBlock = false;
    let importLines = [];
    
      if (line.trim().startsWith('import ')) {
        if (!inImportBlock) {
          inImportBlock = true;
          importLines = [];
        importLines.push(line);
      } else {
        if (inImportBlock) {
          // Process accumulated import lines;
          const processedImports = processImportLines(importLines, newLines.join('\n'));
          finalLines.push(...processedImports);
          inImportBlock = false;
          importLines = [];
        finalLines.push(line);
    });
    
    // Handle any remaining import lines;
    if (inImportBlock) {
      const processedImports = processImportLines(importLines, newLines.join('\n'));
      finalLines.push(...processedImports);
    
    const newContent = finalLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in ${filePath}`);
    
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);

function processImportLines(importLines, fullContent) {
  const result = [];
  
    // Extract imported names;
    const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
    if (!importMatch) {
      result.push(line);
      return;
    
    const moduleName = importMatch[1];
    const isDefaultImport = line.includes('import React') || line.includes('import { Helmet }') || line.includes('import { Link }');
    
    if (isDefaultImport) {
      // For default imports, check if they're used;
      const isUsed = fullContent.includes('React') || fullContent.includes('Helmet') || fullContent.includes('Link');
      if (isUsed) {
        result.push(line);
    } else {
      // For named imports, extract the names and check usage;
      const namedImportsMatch = line.match(/import\s*{\s*([^}]+)\s*}/);
      if (namedImportsMatch) {
 imp.trim());
          const cleanName = imp.replace(/\s+as\s+\w+/, '').trim();
          return fullContent.includes(cleanName);
        });
        
 0) {
          if (usedImports.length === imports.length) {
            result.push(line);
          } else {
            const newLine = line.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`);
            result.push(newLine);
      } else {
        result.push(line);
  });
  
  return result;

// Main execution;
const files = getFilesWithErrors();
console.log(`Found ${files.length} files with unused import errors`);

  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    fixUnusedImports(fullPath);
});

console.log('Finished fixing unused imports');