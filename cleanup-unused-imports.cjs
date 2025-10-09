const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// List of files with unused imports
const filesToFix = [
  'app/ai-analytics/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-code-generation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-crm/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-document-processing/page.tsx',
  'app/ai-fashion-design/page.tsx',
  'app/ai-fitness-coach/page.tsx',
  'app/ai-lead-generation/page.tsx',
  'app/ai-music-composition/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-scheduler/page.tsx',
  'app/ai-video-generation/page.tsx',
  'app/ai-voice-cloning/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-writing-assistant/page.tsx',
  'app/analytics-tools/page.tsx',
  'app/api-docs/page.tsx',
  'app/careers/page.tsx',
  'app/cloud-migration/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'ArrowRight', 'Star', 'Award', 'Globe', 'Clock', 'Zap', 'Shield', 'Users',
  'Phone', 'MapPin', 'Database', 'Settings', 'Headphones', 'Bot', 'BarChart',
  'AlertTriangle', 'CheckCircle', 'Target', 'MessageSquare', 'Terminal', 'Bug',
  'Calendar', 'Palette', 'Scissors', 'TrendingUp', 'Cpu', 'Eye', 'Sparkles',
  'Link', 'Search', 'Play', 'Camera', 'Mic', 'Volume2', 'Languages'
];

function cleanUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;

    // Find import lines and clean them
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('import {') && line.includes('} from \'lucide-react\'')) {
        // Extract the imports
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            // Check if this import is actually used in the file
            const importName = imp.split(' as ')[0].trim();
            const isUsed = content.includes(importName) && !line.includes(importName);
            return isUsed;
          });

          if (usedImports.length !== imports.length) {
            if (usedImports.length === 0) {
              // Remove the entire import line
              lines[i] = '';
            } else {
              // Update the import line
              lines[i] = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
            }
            modified = true;
          }
        }
      }
    }

    if (modified) {
      const newContent = lines.filter(line => line !== '').join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Cleaned unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
filesToFix.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    cleanUnusedImports(fullPath);
  }
});

console.log('Unused imports cleanup completed!');