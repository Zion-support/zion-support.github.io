import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common Lucide React icons used in the project
const commonIcons = [
  'Wifi', 'Cloud', 'Smartphone', 'Shield', 'BarChart3', 'Settings', 'Cpu', 'Globe', 'Activity', 
  'CheckCircle', 'Star', 'Brain', 'Users', 'Award', 'Zap', 'Target', 'FileText', 'Clock', 
  'Sparkles', 'ArrowRight', 'Box', 'TrendingUp', 'Database', 'Eye', 'Bot', 'Workflow', 
  'Code', 'Bug', 'Terminal', 'GitBranch', 'Headphones', 'MessageSquare', 'Mail', 'Phone', 
  'MessageCircle', 'BookOpen', 'Heart', 'ShoppingCart', 'Play', 'Leaf', 'Settings'
];

// Function to extract icon names from JSX
function extractIconNames(content) {
  const iconRegex = /<(\w+)\s+className="[^"]*"/g;
  const icons = new Set();
  let match;
  
  while ((match = iconRegex.exec(content)) !== null) {
    const iconName = match[1];
    if (commonIcons.includes(iconName)) {
      icons.add(iconName);
    }
  }
  
  return Array.from(icons);
}

// Function to add icon imports to a file
function addIconImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if lucide-react is already imported
    if (content.includes("from 'lucide-react'")) {
      return; // Skip if already has lucide-react import
    }
    
    const iconNames = extractIconNames(content);
    
    if (iconNames.length === 0) {
      return; // No icons found
    }
    
    // Find the last import statement
    const importRegex = /^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
    const imports = content.match(importRegex) || [];
    const lastImport = imports[imports.length - 1];
    
    if (!lastImport) {
      return; // No imports found
    }
    
    const lastImportIndex = content.lastIndexOf(lastImport);
    const insertIndex = lastImportIndex + lastImport.length;
    
    // Create the new import statement
    const iconImport = `\nimport { ${iconNames.join(', ')} } from 'lucide-react';`;
    
    // Insert the import after the last import
    const newContent = content.slice(0, insertIndex) + iconImport + content.slice(insertIndex);
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed imports in ${filePath}: ${iconNames.join(', ')}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main function
async function main() {
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(process.cwd(), file);
    const originalContent = fs.readFileSync(fullPath, 'utf8');
    
    addIconImports(fullPath);
    
    // Check if file was modified
    const newContent = fs.readFileSync(fullPath, 'utf8');
    if (originalContent !== newContent) {
      fixedCount++;
    }
  }

  console.log(`Fixed imports in ${fixedCount} files`);
}

main().catch(console.error);