import fs from 'fs';
import path from 'path';

// Files with unused imports/variables
const filesToFix = [
  'app/ai-cybersecurity-platform/page.tsx',
  'app/ai-ecommerce-platform/page.tsx',
  'app/ai-education-platform/page.tsx',
  'app/ai-financial-platform/page.tsx',
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'utils/componentLoader.tsx',
  'utils/performanceUtils.ts',
  'utils/seoMonitoring.ts',
  'utils/accessibilityTesting.ts'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused imports and variables
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines with unused variables that should be removed
      if (line.includes('activeTab') && line.includes('setActiveTab') && line.includes('useState')) {
        // Remove the entire line
        modified = true;
        continue;
      }
      
      // Skip lines with unused imports
      if (line.includes('// Unused imports') || 
          (line.includes('import') && line.includes('Zap') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Globe') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('MapPin') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Download') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Pause') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('RefreshCw') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Settings') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Eye') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Filter') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Calendar') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Target') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Award') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('TrendingUp') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Cpu') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Database') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Activity') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('AlertTriangle') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('FileText') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Server') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Smartphone') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Cloud') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Key') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Search') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Clock') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('Lock') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('ShoppingCart') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('BookOpen') && !line.includes('// Used')) ||
          (line.includes('import') && line.includes('errorFallback') && !line.includes('// Used'))) {
        modified = true;
        continue;
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Fixed unused imports in ${filePath}`);
    } else {
      console.log(`ℹ️  No unused imports found in ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('🔧 Fixing unused imports and variables...\n');
filesToFix.forEach(fixUnusedImports);
console.log('\n✅ Unused imports fixes completed!');