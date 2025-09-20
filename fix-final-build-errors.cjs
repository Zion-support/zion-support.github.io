#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to fix with specific patterns
const fixes = [
  {
    file: 'app/components/InteractiveFeatureShowcase.tsx',
    pattern: /(\s+}\s*\]\);)\s*$/gm,
    replacement: '$1'
  },
  {
    file: 'app/components/ProjectManagementDashboard.tsx',
    pattern: /(\s+}\s*\]\);)\s*$/gm,
    replacement: '$1'
  },
  {
    file: 'app/components/RealTimeCollaboration.tsx',
    pattern: /(\s+}\s*\]\);)\s*$/gm,
    replacement: '$1'
  },
  {
    file: 'app/tools/ai-readiness-assessment/page.tsx',
    pattern: /export default page,/g,
    replacement: 'export default page;'
  },
  {
    file: 'app/tools/ai-roi-calculator-2025/page.tsx',
    pattern: /export default page,/g,
    replacement: 'export default page;'
  }
];

console.log('🔧 Fixing final build errors...');

fixes.forEach(({ file, pattern, replacement }) => {
  const filePath = path.join(process.cwd(), file);
  
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      content = content.replace(pattern, replacement);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${file}`);
      } else {
        console.log(`⚠️  No changes needed in ${file}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

console.log('🎉 Final build error fixes completed!');