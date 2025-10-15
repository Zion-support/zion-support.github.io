import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that need fixing based on the error pattern
const filesToFix = [
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-customer-service/page.tsx',
  'app/ai-data-analysis/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-decision-support/page.tsx',
  'app/ai-document-processing/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-enterprise-solutions/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-healthcare-solutions/page.tsx',
  'app/ai-image-generation/page.tsx',
  'app/ai-inventory-management/page.tsx',
  'app/ai-logistics-optimization/page.tsx',
  'app/ai-marketing-automation/page.tsx',
  'app/ai-natural-language-processing/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-process-automation/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-risk-assessment/page.tsx',
  'app/ai-sales-optimization/page.tsx',
  'app/ai-security-monitoring/page.tsx',
  'app/ai-supply-chain/page.tsx',
  'app/ai-text-analysis/page.tsx',
  'app/ai-video-generation/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/zion-ai-fraud-detection-pro/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has the problematic pattern
    if (content.includes('return;\n},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Fix the pattern: replace "return;\n}," with "const features = ["
      content = content.replace(/return;\n},/g, 'const features = [');
      
      // Add missing imports that are commonly needed
      const commonImports = ['Zap', 'Shield', 'FileText', 'Settings', 'Clock', 'BarChart3', 'Target', 'Users', 'Globe', 'CheckCircle'];
      const existingImports = content.match(/import.*from 'lucide-react';/);
      
      if (existingImports) {
        const importLine = existingImports[0];
        const currentImports = importLine.match(/\{([^}]+)\}/)[1].split(',').map(imp => imp.trim());
        
        // Add missing imports
        const missingImports = commonImports.filter(imp => !currentImports.includes(imp));
        if (missingImports.length > 0) {
          const newImportLine = importLine.replace(/\{([^}]+)\}/, `{$1, ${missingImports.join(', ')}}`);
          content = content.replace(importLine, newImportLine);
        }
      }
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Done fixing syntax errors!');