const fs = require('fs');
const path = require('path');

// Function to find all page files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx' && fullPath.includes('/app/')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has iconMap or no icon patterns
    if (content.includes('iconMap') || !content.includes('icon:')) {
      return false;
    }
    
    console.log(`Fixing ${filePath}`);
    
    // Extract all icon imports from lucide-react
    const iconMatch = content.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"];?/);
    if (!iconMatch) return false;
    
    const icons = iconMatch[1]
      .split(',')
      .map(icon => icon.trim())
      .filter(icon => icon && icon.length > 0);
    
    if (icons.length === 0) return false;
    
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
    
    // Replace icon usage in JSX - more comprehensive approach
    // Look for patterns like <ComponentName className="..." />
    modified = modified.replace(/<(\w+)\s+className="[^"]*"\s*\/>/g, (match, componentName) => {
      if (icons.includes(componentName)) {
        return `{iconMap['${componentName}'] && React.createElement(iconMap['${componentName}'], { className: "w-5 h-5" })}`;
      }
      return match;
    });
    
    // Also handle cases where icons are used in arrays or objects
    modified = modified.replace(/(\w+)\s*className="[^"]*"/g, (match, componentName) => {
      if (icons.includes(componentName)) {
        return `{iconMap['${componentName}'] && React.createElement(iconMap['${componentName}'], { className: "w-5 h-5" })}`;
      }
      return match;
    });
    
    // Write the modified content
    fs.writeFileSync(filePath, modified);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive icon serialization fix...');

const pageFiles = findPageFiles('./app');
let fixedCount = 0;

for (const file of pageFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);