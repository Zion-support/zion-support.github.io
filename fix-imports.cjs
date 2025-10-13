const fs = require('fs');
const path = require('path');

// Files that need import fixes
const filesToFix = [
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx',
  'app/ai-voice-cloning-studio/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/components/Footer.tsx',
  'app/components/ImprovedFooter.tsx',
  'app/components/Navigation.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/consultation/page.tsx',
  'app/custom-development/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/devops-services/page.tsx',
  'app/layout.tsx',
  'app/micro-saas-services/page.tsx',
  'app/page.tsx',
  'app/partners/page.tsx',
  'app/quantum-computing-solutions/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/smart-inventory-optimizer/page.tsx',
  'app/software-development/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-cybersecurity-suite-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx'
];

function fixImports() {
  filesToFix.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix broken import statements
      content = content.replace(/importfrom\s+['"][^'"]*['"];?\s*\n?/g, '');
      content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?\s*\n?/g, '');
      content = content.replace(/import\s*{\s*,?\s*}\s*from\s*['"][^'"]*['"];?\s*\n?/g, '');
      
      // Fix malformed import statements
      content = content.replace(/import\s*{\s*([^}]*),\s*}\s*from\s*['"]([^'"]*)['"];?\s*\n?/g, (match, imports, source) => {
        const cleanImports = imports.replace(/,\s*$/, '').trim();
        return cleanImports ? `import { ${cleanImports} } from '${source}';\n` : '';
      });
      
      // Fix broken JSX
      content = content.replace(/<className="[^"]*"\/>/g, '<div className="w-8 h-8" />');
      content = content.replace(/<className="[^"]*">/g, '<div className="w-8 h-8">');
      
      // Fix broken function declarations
      content = content.replace(/const\s+([A-Z][a-zA-Z]*)\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
      
      // Clean up empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed imports in: ${filePath}`);
    }
  });
}

fixImports();
console.log('Import fixes completed!');