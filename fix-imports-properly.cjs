const fs = require('fs');
const path = require('path');

// Common icons used across the project
const commonIcons = [
  'CheckCircle', 'Phone', 'Mail', 'Star', 'Camera', 'Zap', 'Brain', 'Eye', 
  'BarChart', 'Database', 'Target', 'Users', 'Shield', 'TrendingUp', 
  'DollarSign', 'Heart', 'Palette', 'Music', 'Code', 'Cloud', 'Calendar', 
  'ArrowRight', 'PhoneIcon', 'MailIcon', 'Video', 'Helmet', 'BarChart3',
  'Globe', 'Award', 'Sparkles', 'Smartphone', 'DollarSign', 'TrendingUp',
  'Database', 'Target', 'Users', 'Shield', 'Zap', 'Brain', 'Eye', 'BarChart',
  'Phone', 'Mail', 'Star', 'Camera', 'CheckCircle', 'Heart', 'Palette',
  'Music', 'Code', 'Cloud', 'Calendar', 'ArrowRight', 'PhoneIcon', 'MailIcon',
  'Video', 'Helmet', 'BarChart3', 'Globe', 'Award', 'Sparkles', 'Smartphone'
];

// Function to check if an icon is used in the file
function hasIconUsage(content, icon) {
  return new RegExp(`<${icon}[\\s>]`).test(content);
}

// Function to get existing lucide-react imports
function getExistingImports(content) {
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
  if (importMatch) {
    return importMatch[1].split(',').map(imp => imp.trim());
  }
  return [];
}

// Function to fix HTML entities back to normal quotes
function fixHTMLEntities(content) {
  return content
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

// Function to add missing imports
function addMissingImports(content) {
  const existingImports = getExistingImports(content);
  const usedIcons = commonIcons.filter(icon => hasIconUsage(content, icon));
  const missingIcons = usedIcons.filter(icon => !existingImports.includes(icon));
  
  if (missingIcons.length === 0) {
    return content;
  }
  
  // Add missing icons to existing import or create new import
  if (existingImports.length > 0) {
    const allImports = [...existingImports, ...missingIcons];
    const newImport = `import { ${allImports.join(', ')} } from 'lucide-react';`;
    return content.replace(
      /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/,
      newImport
    );
  } else {
    // Find the first import statement and add lucide-react import before it
    const firstImportMatch = content.match(/^import\s+.*$/m);
    if (firstImportMatch) {
      const newImport = `import { ${missingIcons.join(', ')} } from 'lucide-react';\n`;
      return content.replace(firstImportMatch[0], newImport + firstImportMatch[0]);
    } else {
      // Add at the beginning of the file
      return `import { ${missingIcons.join(', ')} } from 'lucide-react';\n` + content;
    }
  }
}

// Function to remove console statements
function removeConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info)\([^)]*\);?\s*/g, '');
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {