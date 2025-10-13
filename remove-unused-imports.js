import fs from 'fs';
import path from 'path';

// List of files with unused imports
const filesToFix = [
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/ai-automation-platform/page.tsx',
  '/workspace/app/ai-data-analytics-pro/page.tsx',
  '/workspace/app/ai-financial-analysis/page.tsx',
  '/workspace/app/ai-hr-recruitment-pro/page.tsx',
  '/workspace/app/ai-powered-email-analyzer/page.tsx',
  '/workspace/app/ai-services/page.tsx',
  '/workspace/app/ai-voice-assistant-pro/page.tsx',
  '/workspace/app/ar-vr-development/page.tsx',
  '/workspace/app/asset-management/page.tsx',
  '/workspace/app/case-studies/page.tsx',
  '/workspace/app/cloud-infrastructure/page.tsx',
  '/workspace/app/cloud-services/page.tsx',
  '/workspace/app/components/AdvancedPerformanceMonitor.tsx',
  '/workspace/app/components/Analytics.tsx',
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/FuturisticButtonEnhanced.tsx',
  '/workspace/app/components/ImprovedFooter.tsx',
  '/workspace/app/components/ImprovedImage.tsx',
  '/workspace/app/components/ImprovedNavigation.tsx',
  '/workspace/app/components/ImprovedSidebar.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/consultation/page.tsx',
  '/workspace/app/cybersecurity-audit/page.tsx',
  '/workspace/app/cybersecurity-solutions/page.tsx',
  '/workspace/app/data-center-services/page.tsx',
  '/workspace/app/demo/page.tsx',
  '/workspace/app/layout.tsx',
  '/workspace/app/micro-saas-services/page.tsx'
];

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Remove unused variable assignments
    newContent = newContent.replace(/const\s+\w+\s*=\s*\[[^\]]*\];\s*$/gm, '');
    newContent = newContent.replace(/const\s+\w+\s*=\s*\{[^}]*\};\s*$/gm, '');
    
    // Remove unused imports - more aggressive approach
    const lines = newContent.split('\n');
    const newLines = [];
    let inImportBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import')) {
        inImportBlock = true;
        
        // Check if this import line has unused imports
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*["']([^"']+)["']/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const source = importMatch[2];
          
          // Check which imports are actually used in the file
          const usedImports = [];
          for (const imp of imports) {
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            // Check if the import is used anywhere in the file (excluding the import line itself)
            const fileContent = newContent.replace(line, '');
            if (fileContent.includes(importName)) {
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
          const fileContent = newContent.replace(line, '');
          if (!fileContent.includes(importName)) {
            // Remove unused default import
            continue;
          }
        }
      } else if (inImportBlock && line.trim() === '') {
        // End of import block
        inImportBlock = false;
      }
      
      newLines.push(line);
    }
    
    newContent = newLines.join('\n');
    
    // Write the fixed content
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Fix all files
filesToFix.forEach(fixFile);
console.log('Unused imports removal completed');