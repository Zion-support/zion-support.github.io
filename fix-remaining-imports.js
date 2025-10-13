import fs from 'fs';
import path from 'path';

// List of files that need manual fixing
const filesToFix = [
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/ai-automation-platform/page.tsx',
  '/workspace/app/ai-code-assistant-pro/page.tsx',
  '/workspace/app/ai-content-studio/page.tsx',
  '/workspace/app/ai-data-analytics-pro/page.tsx',
  '/workspace/app/ai-financial-analysis/page.tsx',
  '/workspace/app/ai-hr-recruitment-pro/page.tsx',
  '/workspace/app/ai-powered-devops/page.tsx',
  '/workspace/app/ai-powered-email-analyzer/page.tsx',
  '/workspace/app/ai-quantum-computing/page.tsx'
];

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports by analyzing the content
    const lines = content.split('\n');
    const newLines = [];
    let inImportBlock = false;
    let importStartLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import')) {
        if (!inImportBlock) {
          inImportBlock = true;
          importStartLine = i;
        }
        
        // Check if this import line has unused imports
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*["']([^"']+)["']/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const source = importMatch[2];
          
          // Check which imports are actually used in the file
          const usedImports = [];
          for (const imp of imports) {
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            if (content.includes(importName) && !line.includes(importName)) {
              usedImports.push(imp);
            }
          }
          
          if (usedImports.length === 0) {
            // Remove the entire import line
            continue;
          } else if (usedImports.length < imports.length) {
            // Keep only used imports
            newLines.push(`import { ${usedImports.join(', ')} } from "${source}";`);
            continue;
          }
        }
        
        // Check for default imports
        const defaultImportMatch = line.match(/import\s+(\w+)\s+from\s*["']([^"']+)["']/);
        if (defaultImportMatch) {
          const importName = defaultImportMatch[1];
          if (!content.includes(importName) || line.includes(importName)) {
            // Remove unused default import
            continue;
          }
        }
      } else if (inImportBlock && line.trim() === '') {
        // End of import block
        inImportBlock = false;
        importStartLine = -1;
      }
      
      newLines.push(line);
    }
    
    // Write the fixed content
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Fix all files
filesToFix.forEach(fixFile);
console.log('Remaining imports fix completed');