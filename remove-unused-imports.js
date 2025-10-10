#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Files to process (based on the lint output)
const filesToProcess = [
  'App.tsx',
  'app/about/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'src/ai-content-writer/page.tsx',
  'src/ai-fraud-detection/page.tsx',
  'src/it-services/page.tsx',
  'src/page.tsx',
  'src/services/page.tsx',
  'src/web-development/page.tsx'
];

// Unused imports to remove for each file
const unusedImports = {
  'App.tsx': ['Helmet'],
  'app/about/page.tsx': ['Lightning', 'Crosshair', 'Security', 'People', 'Check', 'PhoneIcon'],
  'app/ai-automation/page.tsx': ['Mail'],
  'app/ai-autonomous-systems/page.tsx': ['Star', 'Award', 'Lock', 'BarChart', 'Cpu', 'Eye', 'MessageSquare', 'FileText', 'Search', 'Bot', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'GraduationCap', 'Briefcase', 'Wrench', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Compass', 'PieChart', 'Activity', 'Lightning', 'Crosshair', 'Security', 'People', 'StarIcon', 'Check', 'Arrow', 'PhoneIcon', 'MailIcon', 'Location', 'Truck', 'Smartphone'],
  'app/ai-blockchain-solutions/page.tsx': ['Star', 'Award', 'BarChart', 'Cpu', 'Eye', 'MessageSquare', 'FileText', 'Search', 'Bot', 'Camera', 'Music', 'Video', 'Gamepad2', 'ShoppingCart', 'Building', 'Factory', 'Car', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'GraduationCap', 'Briefcase', 'Wrench', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Compass', 'PieChart', 'Activity', 'Lightning', 'Crosshair', 'Security', 'People', 'StarIcon', 'Check', 'Arrow', 'PhoneIcon', 'MailIcon', 'Location', 'Smartphone', 'TrendingUp'],
  'app/ai-business-intelligence/page.tsx': ['Star', 'Zap', 'Shield', 'Clock', 'Users', 'Globe', 'Brain', 'Cpu', 'Target', 'MessageSquare', 'Eye', 'Sparkles', 'ArrowRight', 'DollarSign', 'Award', 'Lock', 'Database', 'Cloud', 'Code', 'Smartphone', 'Settings', 'BarChart3', 'FileText', 'Search', 'Bot', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Building', 'Factory', 'Car', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap', 'Briefcase', 'Wrench', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Clock3', 'Compass', 'Globe2', 'Map', 'NavIcon', 'PieChart', 'TrendingDown', 'Activity'],
  'app/ai-chatbot-builder/page.tsx': ['Star', 'Zap', 'Shield', 'Clock', 'Users', 'Globe', 'Brain', 'Cpu', 'Target', 'BarChart', 'MessageSquare', 'Eye', 'Sparkles', 'ArrowRight', 'DollarSign', 'Award', 'Lock', 'Database', 'Cloud', 'Code', 'Smartphone', 'Settings', 'BarChart3', 'FileText', 'Search', 'Bot', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Building', 'Factory', 'Car', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap', 'Briefcase', 'Wrench', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Clock3', 'Compass', 'Globe2', 'Map', 'NavIcon', 'PieChart', 'TrendingDown', 'Activity'],
  'src/ai-content-writer/page.tsx': ['Zap', 'ArrowRight', 'Mail'],
  'src/ai-fraud-detection/page.tsx': ['Shield', 'AlertTriangle', 'Eye', 'Zap', 'ArrowRight', 'Mail'],
  'src/it-services/page.tsx': ['Smartphone', 'Zap', 'Clock', 'Lock'],
  'src/page.tsx': ['Target', 'Sparkles', 'TrendingUp', 'Users', 'Award', 'Lock', 'FileText', 'Search', 'Bot', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2', 'Building', 'Factory', 'Car', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'GraduationCap', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Clock3', 'Compass', 'PieChart', 'TrendingDown', 'Activity', 'Lightning', 'Crosshair', 'Security', 'People', 'StarIcon', 'Check', 'Arrow', 'PhoneIcon', 'MailIcon', 'Location', 'Rocket', 'Microscope', 'DbIcon', 'Processor', 'HardDrive', 'Wifi', 'Monitor', 'Keyboard', 'Mouse', 'Headphones', 'Printer', 'Router', 'RotateCcw', 'RefreshCw', 'Move', 'Link', 'HelpCircle', 'ShieldCheck', 'FileCheck', 'TestTube', 'BarChart3', 'Bell', 'FileBarChart', 'LayoutDashboard'],
  'src/services/page.tsx': ['Star', 'Globe', 'Cpu', 'Target', 'Sparkles', 'ArrowRight', 'Mail', 'MapPin', 'DollarSign', 'Award', 'Smartphone', 'FileText', 'Search', 'Bot', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2', 'CreditCard', 'Building', 'Factory', 'Car', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap', 'Briefcase', 'Wrench', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Clock3', 'Compass', 'PieChart', 'TrendingDown', 'Activity'],
  'src/web-development/page.tsx': ['Zap', 'Phone', 'Mail']
};

function removeUnusedImports(filePath, unusedVars) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.includes('import') && line.includes('from')) {
        // Parse the import statement
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/);
        if (importMatch) {
          const [, imports, source] = importMatch;
          const importList = imports.split(',').map(imp => imp.trim());
          
          // Remove unused imports
          const usedImports = importList.filter(imp => !unusedVars.includes(imp));
          
          if (usedImports.length === 0) {
            // Remove the entire import line
            lines[i] = '';
            modified = true;
          } else if (usedImports.length !== importList.length) {
            // Reconstruct the import line
            lines[i] = `import { ${usedImports.join(', ')} } from '${source}'`;
            modified = true;
          }
        }
      }
    }
    
    // Write back the modified content
    if (modified) {
      const newContent = lines.join('\n');
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process each file
for (const file of filesToProcess) {
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath) && unusedImports[file]) {
    removeUnusedImports(fullPath, unusedImports[file]);
  }
}

console.log('Done removing unused imports');