const fs = require('fs');
const path = require('path');

// Files that need import path fixes
const filesToFix = [
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

function fixImportPaths(filePath) {
  try {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix import paths based on directory depth
    if (filePath.includes('/it-services/') || filePath.includes('/legal-document-manager/') || 
        filePath.includes('/medical-records-manager/') || filePath.includes('/online-learning-platform/') ||
        filePath.includes('/property-management-ai/') || filePath.includes('/supply-chain-optimizer/') ||
        filePath.includes('/test/') || filePath.includes('/zion-ai-')) {
      // These are in subdirectories, need ../../components
      content = content.replace(/import Navigation from '\.\.\/components\/Navigation';/g, "import Navigation from '../../components/Navigation';");
      content = content.replace(/import Footer from '\.\.\/components\/Footer';/g, "import Footer from '../../components/Footer';");
    } else if (filePath.includes('/micro-saas-services/')) {
      // These are in micro-saas-services subdirectory, need ../../components
      content = content.replace(/import Navigation from '\.\.\/components\/Navigation';/g, "import Navigation from '../../components/Navigation';");
      content = content.replace(/import Footer from '\.\.\/components\/Footer';/g, "import Footer from '../../components/Footer';");
    }
    
    // Add missing imports if they don't exist
    if (!content.includes('import Navigation from') && content.includes('<Navigation')) {
      const importMatch = content.match(/import React from 'react';\n/);
      if (importMatch) {
        const insertIndex = importMatch.index + importMatch[0].length;
        const beforeImport = content.substring(0, insertIndex);
        const afterImport = content.substring(insertIndex);
        
        let navigationImport = "import Navigation from '../../components/Navigation';\n";
        if (filePath === 'app/page.tsx') {
          navigationImport = "import Navigation from './components/Navigation';\n";
        } else if (!filePath.includes('/')) {
          navigationImport = "import Navigation from './components/Navigation';\n";
        }
        
        content = beforeImport + navigationImport + afterImport;
      }
    }
    
    if (!content.includes('import Footer from') && content.includes('<Footer')) {
      const importMatch = content.match(/import Navigation from.*;\n/);
      if (importMatch) {
        const insertIndex = importMatch.index + importMatch[0].length;
        const beforeImport = content.substring(0, insertIndex);
        const afterImport = content.substring(insertIndex);
        
        let footerImport = "import Footer from '../../components/Footer';\n";
        if (filePath === 'app/page.tsx') {
          footerImport = "import Footer from './components/Footer';\n";
        } else if (!filePath.includes('/')) {
          footerImport = "import Footer from './components/Footer';\n";
        }
        
        content = beforeImport + footerImport + afterImport;
      }
    }
    
    // Fix unused imports by removing the entire import line if all imports are unused
    content = content.replace(/import { [^}]+ } from 'lucide-react';\n/g, '');
    
    // Add back the necessary icon imports
    if (content.includes('Brain') || content.includes('BarChart') || content.includes('Target') || 
        content.includes('TrendingUp') || content.includes('ArrowRight') || content.includes('CheckCircle')) {
      const reactImportMatch = content.match(/import React from 'react';\n/);
      if (reactImportMatch) {
        const insertIndex = reactImportMatch.index + reactImportMatch[0].length;
        const beforeImport = content.substring(0, insertIndex);
        const afterImport = content.substring(insertIndex);
        
        const iconImports = "import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';\n";
        content = beforeImport + iconImports + afterImport;
      }
    }
    
    // Fix component exports
    if (content.includes('export default') === false) {
      const componentMatch = content.match(/const (\w+): React\.FC/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        const lastBraceIndex = content.lastIndexOf('}');
        if (lastBraceIndex !== -1) {
          const beforeLastBrace = content.substring(0, lastBraceIndex + 1);
          const afterLastBrace = content.substring(lastBraceIndex + 1);
          content = beforeLastBrace + '\n\nexport default ' + componentName + ';' + afterLastBrace;
        }
      }
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixImportPaths);

console.log('Import path fixing completed!');