const fs = require('fs');
const path = require('path');

// List of pages that likely have icon serialization issues
const problematicPages = [
  'app/ai-email-automation/page.tsx',
  'app/it-services/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-services/page.tsx',
  'app/pricing/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-3d-model-generator/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/team/page.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx'
];

function fixPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has iconMap or no icon patterns
    if (content.includes('iconMap') || !content.includes('icon:')) {
      console.log(`Skipping ${filePath} - already fixed or no icons`);
      return false;
    }
    
    console.log(`Fixing ${filePath}`);
    
    // Extract all icon imports from lucide-react
    const iconMatch = content.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"];?/);
    if (!iconMatch) {
      console.log(`No lucide-react imports found in ${filePath}`);
      return false;
    }
    
    const icons = iconMatch[1]
      .split(',')
      .map(icon => icon.trim())
      .filter(icon => icon && icon.length > 0);
    
    if (icons.length === 0) {
      console.log(`No icons found in ${filePath}`);
      return false;
    }
    
    // Create icon map
    const iconMapCode = `// Icon mapping for serialization
const iconMap = {
  ${icons.map(icon => `${icon}`).join(',\n  ')}
};`;
    
    // Replace icon: ComponentName with icon: 'ComponentName'
    let modified = content.replace(/icon:\s*([A-Z][a-zA-Z0-9]+)/g, "icon: '$1'");
    
    // Add icon map after imports
    const importEnd = modified.indexOf(';', modified.indexOf("from 'lucide-react'")) + 1;
    modified = modified.slice(0, importEnd) + '\n\n' + iconMapCode + '\n' + modified.slice(importEnd);
    
    // Write the modified content
    fs.writeFileSync(filePath, modified);
    console.log(`✅ Fixed ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting to fix remaining pages...');

let fixedCount = 0;
for (const page of problematicPages) {
  if (fixPage(page)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} pages`);