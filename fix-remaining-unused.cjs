const fs = require('fs');
const path = require('path');

// Function to fix specific files with remaining unused imports
const fixFile = (filePath, unusedImports) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove specific unused imports
    for (const unused of unusedImports) {
      const regex = new RegExp(`\\b${unused}\\b`, 'g');
      const matches = content.match(regex);
      if (matches && matches.length === 1) {
        // This import is only used once (in the import statement), so remove it
        content = content.replace(regex, '');
        modified = true;
      }
    }
    
    // Clean up empty import statements
    content = content.replace(/import\s*{\s*,\s*}\s*from[^;]+;?\s*/g, '');
    content = content.replace(/import\s*{\s*}\s*from[^;]+;?\s*/g, '');
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/{\s*,/g, '{');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Files and their unused imports
const filesToFix = [
  {
    path: 'app/ai-quantum-financial-oracle/page.tsx',
    unused: ['ArrowRight', 'Users', 'Award', 'Star']
  },
  {
    path: 'app/ai-space-mission-optimizer/page.tsx',
    unused: ['ArrowRight', 'Cpu', 'Clock', 'Users', 'Star', 'PieChart', 'MapPin']
  },
  {
    path: 'app/ai-voice-cloning-studio/page.tsx',
    unused: ['Pause', 'Download', 'Upload', 'Star', 'Shield', 'ArrowRight', 'Clock']
  },
  {
    path: 'app/devops-services/page.tsx',
    unused: ['Zap', 'CheckCircle', 'TrendingUp', 'Globe', 'Lock']
  },
  {
    path: 'app/micro-saas-services/page.tsx',
    unused: ['Shield', 'Cloud', 'Calendar', 'Code', 'WebIcon']
  },
  {
    path: 'app/partners/page.tsx',
    unused: ['Link', 'Users', 'Globe', 'Shield', 'Zap']
  },
  {
    path: 'app/quantum-computing-solutions/page.tsx',
    unused: ['ArrowRight', 'Clock', 'Users', 'Award', 'Star', 'PieChart', 'Database']
  },
  {
    path: 'app/quantum-data-encryption-vault/page.tsx',
    unused: ['Users']
  },
  {
    path: 'app/software-development/page.tsx',
    unused: ['Shield', 'Zap', 'CheckCircle', 'BarChart3', 'TrendingUp', 'Globe', 'Lock']
  },
  {
    path: 'app/zion-ai-meeting-transcriber/page.tsx',
    unused: ['StarIcon']
  },
  {
    path: 'app/zion-ai-sales-predictor/page.tsx',
    unused: ['StarIcon']
  },
  {
    path: 'app/zion-analytics-pro/page.tsx',
    unused: ['StarIcon']
  }
];

// Process all files
let fixedCount = 0;
for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file.path);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath, file.unused)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files.`);