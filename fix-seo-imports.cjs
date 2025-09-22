const fs = require('fs');
const path = require('path');

const files = [
  'app/blog/ai-2026-foundation-model-ops/page.tsx',
  'app/blog/ai-2026-multimodal-agents-enterprise-blueprint/page.tsx',
  'app/blog/ai-2026-agent-observability-blueprint/page.tsx',
  'app/blog/page.jsx',
  'app/content/ai-2026-executive-guide-to-agent-adoption/page.tsx',
  'app/blog/ai-2026-secure-agent-architecture/page.tsx',
  'app/content/ai-2026-evaluation-hub/page.tsx',
  'app/content/ai-2026-evaluation-harness-blueprint/page.tsx',
  'app/content/ai-2026-go-to-market-agents-blueprint/page.tsx',
  'app/content/ai-agents-roi-playbook-2026/page.tsx'
];

files.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if SEO is already imported
    if (content.includes('import SEO')) {
      console.log(`✓ ${filePath} already has SEO import`);
      return;
    }
    
    // Add SEO import after other imports
    const lines = content.split('\n');
    let importIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ') && !lines[i].includes('SEO')) {
        importIndex = i;
      }
    }
    
    if (importIndex !== -1) {
      // Determine the correct relative path to SEO component
      const depth = filePath.split('/').length - 2; // -2 for app/ and filename
      const relativePath = '../'.repeat(depth) + 'components/SEO';
      
      lines.splice(importIndex + 1, 0, `import SEO from '${relativePath}';`);
      content = lines.join('\n');
      
      fs.writeFileSync(fullPath, content);
      console.log(`✓ Added SEO import to ${filePath}`);
    } else {
      console.log(`⚠ Could not find import section in ${filePath}`);
    }
  } catch (error) {
    console.log(`✗ Error processing ${filePath}:`, error.message);
  }
});

console.log('SEO import fixes completed!');