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
<<<<<<< HEAD
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
=======
    // Remove any broken metadata lines
    for (let i = 0; i < lines.length; i++) {

      // Skip lines that look like broken metadata
      if (
        line.includes('const metadata: Metadata = {') ||
        line.includes('const metadata = {') ||
        (line.includes('title:') && !line.includes('<title>') && !line.includes('//')) ||
        (line.includes('description:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.includes('type:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.includes('url:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.includes('keywords:') && !line.includes('<meta') && !line.includes('//')) ||,
        (line.includes('openGraph:') && !line.includes('//')) ||,
        (line.includes('twitter:') && !line.includes('<meta') && !line.includes('//')) ||,
        (line.includes('images:') && !line.includes('<meta') && !line.includes('//')) ||,
        (line.trim() === '{' && i > 0 && lines[i - 1].includes('metadata')) ||,
function processFile(filePath) {/* TODO: Fix JSX expression */};
        (line.trim() === '},' && i > 0 && lines[i - 1].includes('metadata')) ||
        (line.trim() === '};' && i > 0 && lines[i - 1].includes('metadata'))
      ) {/* TODO: Fix JSX expression */}
      }

      filteredLines.push(line)
>>>>>>> cursor/delete-records-30ea
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