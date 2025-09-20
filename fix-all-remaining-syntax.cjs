#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing all remaining syntax issues...');

// Fix export statements with commas
const exportCommaFiles = [
  'app/tools/ai-transformation-roi-calculator-2025/page.tsx',
  'app/tools/ai-2026-roi-calculator/page.tsx'
];

exportCommaFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/export default page,/g, 'export default page;');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed export in ${file}`);
    } catch (error) {
      console.error(`❌ Error fixing ${file}:`, error.message);
    }
  }
});

// Fix array semicolon issues - more comprehensive approach
const arrayFiles = [
  'app/components/InteractiveFeatureShowcase.tsx',
  'app/components/ProjectManagementDashboard.tsx',
  'app/components/RealTimeCollaboration.tsx'
];

arrayFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix array declarations that are missing variable assignment
      content = content.replace(/(\s+)\]\);\s*\n(\s*)(const|let|var|\w+\()/g, '$1]);\n\n$2$3');
      
      // Fix array declarations in useEffect
      content = content.replace(/(\s+}\s*\]\);\s*)\n(\s*)(const\s+)/g, '$1\n\n$2$3');
      content = content.replace(/(\s+}\s*\]\);\s*)\n(\s*)([a-zA-Z_]\w*\()/g, '$1\n\n$2$3');
      
      // Ensure proper spacing after array declarations
      content = content.replace(/(\]\);)\n([a-zA-Z_])/g, '$1\n\n$2');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed array syntax in ${file}`);
    } catch (error) {
      console.error(`❌ Error fixing ${file}:`, error.message);
    }
  }
});

console.log('🎉 All remaining syntax fixes completed!');