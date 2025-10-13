const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Files to fix (most problematic ones)
const filesToFix = [
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx',
  'app/ai-voice-cloning-studio/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/consultation/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/partners/page.tsx',
  'app/quantum-computing-solutions/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/smart-inventory-optimizer/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-cybersecurity-suite-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx',
  'app/components/Footer.tsx',
  'app/components/Navigation.tsx'
];

console.log('Fixing unused imports...');

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused imports by running ESLint with --fix
      try {
        execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
        console.log(`Fixed: ${filePath}`);
      } catch (error) {
        // If ESLint can't auto-fix, try manual cleanup
        console.log(`Manual fix needed for: ${filePath}`);
      }
    } catch (error) {
      console.log(`Error processing ${filePath}:`, error.message);
    }
  }
});

console.log('Done fixing unused imports!');
