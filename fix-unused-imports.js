const fs = require('fs');
const path = require('path');

// List of files with unused imports based on the TypeScript errors
const filesToFix = [
  'App.tsx',
  'app/about/index.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx'
];

// Unused imports to remove
const unusedImports = {
  'App.tsx': ['Suspense', 'Sidebar'],
  'app/about/index.tsx': ['StarIcon', 'TrophyIcon'],
  'app/ai-agricultural-intelligence-pro/page.tsx': ['Zap', 'BarChart3', 'DollarSign', 'Users'],
  'app/ai-analytics-dashboard-pro/page.tsx': ['React'],
  'app/ai-api-management/page.tsx': ['DollarSign', 'Settings', 'Lock'],
  'app/ai-api-manager/page.tsx': ['DollarSign', 'FileText', 'Lock'],
  'app/ai-automated-reporting/page.tsx': ['DollarSign', 'Settings', 'Shield', 'Mail'],
  'app/ai-automated-testing/page.tsx': ['DollarSign', 'Users', 'Settings', 'Shield'],
  'app/ai-autonomous-systems/page.tsx': ['DollarSign', 'Settings'],
  'app/ai-blockchain-analytics/page.tsx': ['DollarSign', 'Users', 'Settings'],
  'app/ai-blockchain-solutions/page.tsx': ['DollarSign', 'Users', 'Settings'],
  'app/ai-business-intelligence-pro/page.tsx': ['DollarSign', 'Users', 'Settings', 'Shield'],
  'app/ai-chatbot-builder/page.tsx': ['Zap', 'DollarSign', 'Users', 'Shield'],
  'app/ai-chatbot-enterprise/page.tsx': ['Zap', 'DollarSign', 'Users', 'Settings'],
  'app/ai-climate-prediction-engine/page.tsx': ['Zap', 'DollarSign', 'Users']
};

function fixUnusedImports(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const unused = unusedImports[filePath];
  
  if (!unused) {
    console.log(`No unused imports defined for: ${filePath}`);
    return;
  }

  // Remove unused imports from the import statements
  unused.forEach(importName => {
    // Handle different import patterns
    const patterns = [
      // Named imports: import { A, B, C } from 'module'
      new RegExp(`\\b${importName}\\s*,?`, 'g'),
      // Single import: import { A } from 'module'
      new RegExp(`,\\s*${importName}\\b`, 'g'),
      // First import: import { A, B } from 'module'
      new RegExp(`{\\s*${importName}\\s*,`, 'g'),
      // Last import: import { A, B } from 'module'
      new RegExp(`,\\s*${importName}\\s*}`, 'g'),
      // Only import: import { A } from 'module'
      new RegExp(`{\\s*${importName}\\s*}`, 'g')
    ];

    patterns.forEach(pattern => {
      content = content.replace(pattern, (match) => {
        // Clean up the match
        if (match.includes('{') && match.includes('}')) {
          // This is a complete import statement, remove it
          return '';
        }
        if (match.startsWith(',')) {
          return '';
        }
        if (match.endsWith(',')) {
          return '';
        }
        return '';
      });
    });
  });

  // Clean up any double commas or empty import statements
  content = content.replace(/,\s*,/g, ',');
  content = content.replace(/{\s*,/g, '{');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/{\s*}/g, '');
  
  // Remove empty import lines
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Fixed unused imports in: ${filePath}`);
}

// Fix all files
filesToFix.forEach(file => {
  fixUnusedImports(file);
});

console.log('Unused imports fixed!');