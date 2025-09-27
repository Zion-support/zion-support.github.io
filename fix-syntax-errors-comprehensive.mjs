import fs from 'fs';
import path from 'path';

const files = [
  'src/components/AdvancedAccessibilityAuditor.tsx',
  'src/components/AdvancedAnalyticsDashboard.tsx',
  'src/components/AdvancedErrorHandler.tsx',
  'src/components/AdvancedErrorMonitoring.tsx',
  'src/components/AdvancedPerformanceMonitor.tsx'
];

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing closing braces
    content = content.replace(/(\w+)\s*=\s*\{([^}]*)\s*$/gm, '$1 = {$2}');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*\{([^}]*)\s*$/gm, '$1 = {$2};');
    
    // Fix JSX syntax issues
    content = content.replace(/className=\{`([^`]+)`\}/g, 'className={`$1`}');
    
    // Fix missing imports
    if (content.includes('motion.') && !content.includes('import { motion')) {
      content = content.replace(/import React/, 'import React, { motion } from "framer-motion"');
    }
    
    // Fix typos
    content = content.replace(/defaul,\s*t:/g, 'default:');
    content = content.replace(/justify-betweenmb-/g, 'justify-between mb-');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

files.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixSyntaxErrors(fullPath);
  }
});

console.log('Syntax error fixing completed!');