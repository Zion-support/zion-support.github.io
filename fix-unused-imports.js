import path from 'path';
// Get list of files with linting errors;
function getFilesWithErrors() {
  try {
&1', { encoding: 'utf8' });

      if (line.includes('error') && line.includes('is defined but never used')) {
        
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

    // First pass: collect all used imports by scanning the file;
    
    // Check for common icon usage patterns;
    
    // Check for JSX usage patterns;
    
      // Skip import lines for now;
      if (line.trim().startsWith('import ')) {
        newLines.push(line);
        return;
      
      // Check if this line uses any imports;
      
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
          
          finalLines.push(...processedImports);
          inImportBlock = false;
          importLines = [];
        finalLines.push(line);
    });
    
    // Handle any remaining import lines;
    if (inImportBlock) {
      
      finalLines.push(...processedImports);

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in ${filePath}`);
    
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);

function processImportLines(importLines, fullContent) {
  
    // Extract imported names;
    
    if (!importMatch) {
      result.push(line);
      return;

    if (isDefaultImport) {
      // For default imports, check if they're used;
      
      if (isUsed) {
        result.push(line);
    } else {
      // For named imports, extract the names and check usage;
      
      if (namedImportsMatch) {
 imp.trim());
          
          return fullContent.includes(cleanName);
        });
        
 0) {
          if (usedImports.length === imports.length) {
            result.push(line);
          } else {
            
            result.push(newLine);
      } else {
        result.push(line);
  });
  
  return result;

// Main execution;

console.log(`Found ${files.length} files with unused import errors`);

  if (fs.existsSync(fullPath)) {
    fixUnusedImports(fullPath);
});

console.log('Finished fixing unused imports');
}}}}}}}}}}}}}}