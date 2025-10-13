const fs = require('fs');
const { execSync } = require('child_process');

// List of files with unused imports based on the lint output
const filesToFix = [
  'app/ai-analytics/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx'
];

console.log('Fixing unused imports...');

filesToFix.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Remove unused imports based on the lint errors
    const fixedLines = lines.filter(line => {
      // Skip lines that import unused variables
      if (line.includes('TrendingUp') && !line.includes('ArrowRight')) return false;
      if (line.includes('Zap') && !line.includes('ArrowRight')) return false;
      if (line.includes('Shield') && !line.includes('ArrowRight')) return false;
      if (line.includes('Code') && !line.includes('ArrowRight')) return false;
      if (line.includes('Database') && !line.includes('ArrowRight')) return false;
      if (line.includes('Star') && !line.includes('ArrowRight') && !line.includes('CheckCircle')) return false;
      if (line.includes('Bot') && !line.includes('ArrowRight')) return false;
      if (line.includes('Link') && !line.includes('react-router-dom')) return false;
      if (line.includes('Users') && !line.includes('ArrowRight')) return false;
      if (line.includes('Award') && !line.includes('ArrowRight')) return false;
      if (line.includes('Clock') && !line.includes('ArrowRight')) return false;
      if (line.includes('Smartphone') && !line.includes('ArrowRight')) return false;
      if (line.includes('Mail') && !line.includes('ArrowRight')) return false;
      if (line.includes('Globe') && !line.includes('ArrowRight')) return false;
      if (line.includes('BarChart3') && !line.includes('ArrowRight')) return false;
      if (line.includes('Target') && !line.includes('ArrowRight')) return false;
      if (line.includes('Activity') && !line.includes('ArrowRight')) return false;
      if (line.includes('LineChart') && !line.includes('ArrowRight')) return false;
      if (line.includes('DollarSign') && !line.includes('ArrowRight')) return false;
      if (line.includes('Brain') && !line.includes('ArrowRight')) return false;
      if (line.includes('UserCheck') && !line.includes('ArrowRight')) return false;
      if (line.includes('Calendar') && !line.includes('ArrowRight')) return false;
      
      return true;
    });
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    console.log(`✓ Fixed ${filePath}`);
  } catch (error) {
    console.log(`⚠ Error processing ${filePath}: ${error.message}`);
  }
});

console.log('Done fixing imports');