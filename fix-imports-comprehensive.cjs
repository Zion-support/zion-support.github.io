const fs = require('fs');
const path = require('path');

// Function to check if an import is used in the file
function isImportUsed(content, importName) {
  // Check for JSX usage: <IconName
  if (content.includes(`<${importName}`)) return true;
  
  // Check for component usage: IconName
  if (content.includes(`<${importName} `)) return true;
  
  // Check for variable usage: icon: IconName
  if (content.includes(`icon: ${importName}`)) return true;
  
  // Check for className usage: className="w-5 h-5"
  if (content.includes(`className="w-5 h-5"`)) return true;
  
  // Check for direct usage in JSX
  if (content.includes(`${importName} className`)) return true;
  
  return false;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix lucide-react imports
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const currentImports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      
      currentImports.forEach(imp => {
        if (isImportUsed(content, imp)) {
          usedImports.push(imp);
        }
      });
      
      if (usedImports.length !== currentImports.length) {
        const newImportLine = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(lucideImportMatch[0], newImportLine);
        modified = true;
      }
    }
    
    // Remove unused Navigation and Footer imports
    if (content.includes('import Navigation') && !content.includes('<Navigation')) {
      content = content.replace(/import\s+Navigation\s+from\s+['"][^'"]+['"];?\s*\n?/g, '');
      modified = true;
    }
    
    if (content.includes('import Footer') && !content.includes('<Footer')) {
      content = content.replace(/import\s+Footer\s+from\s+['"][^'"]+['"];?\s*\n?/g, '');
      modified = true;
    }
    
    // Add export if missing
    if (content.includes('const ') && content.includes('Page: React.FC') && !content.includes('export default')) {
      const componentName = content.match(/const\s+(\w+Page):\s+React\.FC/)?.[1];
      if (componentName) {
        content += `\n\nexport default ${componentName};`;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files to fix
const files = [
  'src/ai-analytics-dashboard/page.tsx',
  'src/ai-analytics/page.tsx',
  'src/ai-automation/page.tsx',
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-generation/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-crm/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-cybersecurity/page.tsx',
  'src/ai-data-analytics/page.tsx',
  'src/ai-data-visualization/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processing/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/ai-edge-computing/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-fintech/page.tsx',
  'src/ai-healthcare/page.tsx'
];

files.forEach(fixFile);
console.log('Done fixing imports');