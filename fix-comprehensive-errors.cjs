const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common Lucide React icons used in the project
const commonIcons = [
  'Wifi', 'Cloud', 'Smartphone', 'Shield', 'BarChart3', 'Settings', 'Cpu', 'Globe', 'Activity',
  'CheckCircle', 'Star', 'Brain', 'Users', 'Award', 'Zap', 'Target', 'TrendingUp', 'Database',
  'Eye', 'Bot', 'Workflow', 'FileText', 'Wand2', 'Headphones', 'ShoppingCart', 'Phone', 'Play',
  'ArrowRight', 'Mail', 'MessageSquare', 'MessageCircle', 'Clock', 'Target', 'DollarSign', 'Send',
  'MousePointer', 'Palette', 'Camera', 'Stethoscope', 'Pill', 'Thermometer', 'Microscope', 'Syringe',
  'Calendar', 'AlertTriangle', 'Image', 'Hash', 'Video', 'RefreshCw', 'CheckCircle', 'Zap', 'Users',
  'Shield', 'BarChart3', 'Settings', 'Cpu', 'Globe', 'Activity', 'Smartphone', 'Wifi', 'Cloud',
  'Database', 'Server', 'Shield', 'Zap', 'Globe', 'RefreshCw', 'CheckCircle', 'Zap', 'Users',
  'Shield', 'BarChart3', 'Settings', 'Cpu', 'Globe', 'Activity', 'Smartphone', 'Wifi', 'Cloud'
];

// Function to fix comprehensive errors
function fixComprehensiveErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix syntax errors by removing malformed lines
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip malformed lines that start with just a number or have parsing errors
      if (line.match(/^\d+$/) || line.match(/^\s*\d+\s*$/) || line.match(/^\s*$/)) {
        continue;
      }
      
      // Fix lines that have parsing errors
      if (line.includes('error') && line.includes('Parsing error')) {
        continue;
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');

    // Add missing Lucide React imports
    if (content.includes('from "lucide-react"') || content.includes("from 'lucide-react'")) {
      // Extract existing imports
      const existingImports = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g);
      let existingIconNames = [];
      
      if (existingImports) {
        existingImports.forEach(importStatement => {
          const matches = importStatement.match(/\{([^}]+)\}/);
          if (matches) {
            const icons = matches[1].split(',').map(icon => icon.trim());
            existingIconNames = existingIconNames.concat(icons);
          }
        });
      }

      // Find all icon names used in the file
      const usedIcons = [];
      commonIcons.forEach(icon => {
        if (content.includes(`<${icon}`) || content.includes(`{${icon}`) || content.includes(`icon: ${icon}`)) {
          usedIcons.push(icon);
        }
      });

      // Add missing icons to imports
      const missingIcons = usedIcons.filter(icon => !existingIconNames.includes(icon));
      
      if (missingIcons.length > 0) {
        if (existingImports && existingImports.length > 0) {
          // Update existing import
          const newImport = `import { ${[...new Set([...existingIconNames, ...missingIcons])].join(', ')} } from 'lucide-react';`;
          content = content.replace(existingImports[0], newImport);
        } else {
          // Add new import
          const newImport = `import { ${missingIcons.join(', ')} } from 'lucide-react';\n`;
          content = newImport + content;
        }
        modified = true;
      }
    }

    // Fix HTML entities
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&amp;/g, '&');

    // Fix specific apostrophe issues
    content = content.replace(/don't/g, "don't");
    content = content.replace(/can't/g, "can't");
    content = content.replace(/won't/g, "won't");
    content = content.replace(/it's/g, "it's");
    content = content.replace(/we're/g, "we're");
    content = content.replace(/you're/g, "you're");
    content = content.replace(/they're/g, "they're");
    content = content.replace(/I'm/g, "I'm");
    content = content.replace(/I'll/g, "I'll");
    content = content.replace(/I've/g, "I've");
    content = content.replace(/I'd/g, "I'd");

    // Fix quote issues in JSX
    content = content.replace(/([^\\])"/g, '$1&quot;');
    content = content.replace(/^"/g, '&quot;');
    content = content.replace(/([^\\])'/g, '$1&apos;');
    content = content.replace(/^'/g, '&apos;');

    // Fix specific patterns
    content = content.replace(/don&apos;t/g, "don't");
    content = content.replace(/can&apos;t/g, "can't");
    content = content.replace(/won&apos;t/g, "won't");
    content = content.replace(/it&apos;s/g, "it's");
    content = content.replace(/we&apos;re/g, "we're");
    content = content.replace(/you&apos;re/g, "you're");
    content = content.replace(/they&apos;re/g, "they're");
    content = content.replace(/I&apos;m/g, "I'm");
    content = content.replace(/I&apos;ll/g, "I'll");
    content = content.replace(/I&apos;ve/g, "I've");
    content = content.replace(/I&apos;d/g, "I'd");

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed comprehensive errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript and TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fixComprehensiveErrors(fullPath);
});

console.log('Comprehensive errors cleanup completed!');