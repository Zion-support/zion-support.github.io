import fs from 'fs';

const filesToFix = [
  'app/robotics/page.tsx',
  'app/micro-saas/page.tsx',
  'app/sitemap-page.tsx',
  'app/cybersecurity/page.tsx',
  'app/it-services/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blockchain/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/case-studies/page.tsx'
];

function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX syntax issues
    content = content.replace(/\s*\);\s*$/gm, '    );');
    content = content.replace(/\s*}\s*$/gm, '  }');
    
    // Ensure proper indentation for closing tags
    content = content.replace(/(\s*)<\/div>\s*\);\s*$/gm, '$1  </div>\n  );');
    content = content.replace(/(\s*)<\/div>\s*}\s*$/gm, '$1  </div>\n}');
    
    // Fix missing semicolons
    content = content.replace(/export default \w+Page\s*$/gm, 'export default AIPage;');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX syntax: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixJSXSyntax);
console.log('All JSX syntax issues fixed!');