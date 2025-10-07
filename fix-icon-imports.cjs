const fs = require('fs');
const path = require('path');

// Common icon mappings based on the errors
const iconMappings = {
  'ArrowLeft': ['ArrowLeft'],
  'ArrowRight': ['ArrowRight'],
  'Calendar': ['Calendar'],
  'Clock': ['Clock'],
  'User': ['User'],
  'Users': ['Users'],
  'DollarSign': ['DollarSign'],
  'TrendingUp': ['TrendingUp'],
  'Target': ['Target'],
  'CheckCircle': ['CheckCircle'],
  'Share2': ['Share2'],
  'Bookmark': ['Bookmark'],
  'Tag': ['Tag'],
  'Brain': ['Brain'],
  'Rocket': ['Rocket'],
  'Satellite': ['Satellite'],
  'Zap': ['Zap'],
  'Globe': ['Globe'],
  'Award': ['Award'],
  'BookOpen': ['BookOpen'],
  'BarChart3': ['BarChart3']
};

// Files to fix (based on the TypeScript errors)
const filesToFix = [
  'app/case-studies/ai-cognitive-computing-success-2026/page.tsx',
  'app/case-studies/ai-cognitive-superintelligence-mega-success-2026/page.tsx',
  'app/case-studies/ai-enterprise-automation-success-2026/page.tsx',
  'app/case-studies/ai-space-tech-revolution-success-2026/page.tsx',
  'app/case-studies/fortune-500-ai-transformation-12b-roi/page.tsx',
  'app/case-studies/fortune-500-ai-transformation-success/page.tsx',
  'app/case-studies/fortune-500-quantum-ai-transformation-2026/page.tsx',
  'app/case-studies/global-manufacturing-autonomous-transformation/page.tsx',
  'app/guides/ai-2026-implementation-roadmap/page.tsx',
  'app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract all icon names used in the file
    const iconNames = new Set();
    Object.keys(iconMappings).forEach(iconName => {
      const regex = new RegExp(`<${iconName}\\s`, 'g');
      if (regex.test(content)) {
        iconNames.add(iconName);
      }
    });

    if (iconNames.size === 0) {
      console.log(`No icons found in ${filePath}`);
      return;
    }

    // Check if lucide-react import already exists
    const hasLucideImport = content.includes("from 'lucide-react'");
    
    if (hasLucideImport) {
      // Update existing import
      const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;
      const match = content.match(importRegex);
      
      if (match) {
        const existingIcons = match[1].split(',').map(icon => icon.trim());
        const allIcons = [...new Set([...existingIcons, ...Array.from(iconNames)])];
        const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(importRegex, newImport);
      }
    } else {
      // Add new import after the first import
      const firstImportMatch = content.match(/^import\s+[^;]+;?\s*$/m);
      if (firstImportMatch) {
        const newImport = `import { ${Array.from(iconNames).join(', ')} } from 'lucide-react';\n`;
        content = content.replace(firstImportMatch[0], firstImportMatch[0] + newImport);
      } else {
        // Add at the beginning
        content = `import { ${Array.from(iconNames).join(', ')} } from 'lucide-react';\n` + content;
      }
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath} with icons: ${Array.from(iconNames).join(', ')}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Icon import fixes completed!');