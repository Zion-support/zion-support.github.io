import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Files with unused imports that need to be fixed
const filesToFix = [
  '/workspace/app/404/page.tsx',
  '/workspace/app/App.tsx',
  '/workspace/app/ai-cloud-infrastructure/page.tsx',
  '/workspace/app/ai-customer-support-chatbot/page.tsx',
  '/workspace/app/ai-cybersecurity-monitor-pro/page.tsx',
  '/workspace/app/ai-cybersecurity-monitor/page.tsx',
  '/workspace/app/ai-data-analytics-pro/page.tsx',
  '/workspace/app/ai-ecommerce-optimizer-pro/page.tsx',
  '/workspace/app/ai-email-assistant/page.tsx',
  '/workspace/app/ai-email-marketing-automation/page.tsx',
  '/workspace/app/ai-expense-tracker/page.tsx',
  '/workspace/app/ai-financial-analysis/page.tsx',
  '/workspace/app/ai-financial-analytics-pro/page.tsx',
  '/workspace/app/ai-image-recognition-pro/page.tsx',
  '/workspace/app/ai-infrastructure-monitoring/page.tsx',
  '/workspace/app/ai-invoice-generator/page.tsx',
  '/workspace/app/ai-powered-devops/page.tsx',
  '/workspace/app/ai-powered-email-analyzer/page.tsx',
  '/workspace/app/ai-project-management-pro/page.tsx',
  '/workspace/app/ai-quantum-financial-oracle/page.tsx',
  '/workspace/app/ai-security-monitor/page.tsx',
  '/workspace/app/ai-sentiment-analysis-pro/page.tsx',
  '/workspace/app/ai-smart-home-controller/page.tsx',
  '/workspace/app/ai-smart-scheduler/page.tsx',
  '/workspace/app/ai-social-media-manager/page.tsx',
  '/workspace/app/ai-space-mission-optimizer/page.tsx',
  '/workspace/app/ai-video-editor/page.tsx',
  '/workspace/app/ai-voice-cloning-studio/page.tsx',
  '/workspace/app/cloud-cost-optimization/page.tsx',
  '/workspace/app/cloud-infrastructure-manager/page.tsx',
  '/workspace/app/cloud-infrastructure/page.tsx',
  '/workspace/app/cloud-migration-advanced/page.tsx',
  '/workspace/app/cloud-migration-services/page.tsx',
  '/workspace/app/cloud-migration/page.tsx',
  '/workspace/app/cloud-native-development/page.tsx',
  '/workspace/app/cloud-native-security/page.tsx',
  '/workspace/app/cloud-security/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'Mic', 'Helmet', 'Home', 'Network', 'Monitor', 'Cloud', 'Star', 'Database',
  'Search', 'Hand', 'Users', 'ArrowRight', 'Award', 'Plus', 'Edit', 'Pause',
  'Download', 'Upload', 'Shield', 'Clock', 'Cpu', 'PieChart', 'MapPin', 'Code',
  'Box', 'Phone', 'Activity'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused imports
    const lines = content.split('\n');
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this line imports unused variables
      if (line.includes('import') && line.includes('from')) {
        // Extract the import part
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            return !unusedImports.includes(importName);
          });
          
          if (usedImports.length === 0) {
            // Remove the entire import line
            modified = true;
            continue;
          } else if (usedImports.length !== imports.length) {
            // Update the import line
            const newImport = line.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`);
            newLines.push(newImport);
            modified = true;
            continue;
          }
        }
      }
      
      // Remove standalone unused expressions
      if (line.trim() && !line.includes('import') && !line.includes('export') && 
          !line.includes('function') && !line.includes('const') && 
          !line.includes('return') && !line.includes('if') && 
          !line.includes('for') && !line.includes('while') &&
          line.trim().endsWith(';') && line.trim().length < 50) {
        // Skip this line as it might be an unused expression
        modified = true;
        continue;
      }
      
      newLines.push(line);
    }

    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Unused imports cleanup completed!');