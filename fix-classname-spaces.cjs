const fs = require('fs');

const files = [
  'src/components/PricingCalculator.tsx',
  'src/components/ComprehensiveAnalyticsDashboard.tsx',
  'src/components/ComprehensiveMonitoringDashboard.tsx',
  'src/components/EnhancedDashboard.tsx',
  'src/components/EnhancedUserExperience.tsx'
];

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix common className spacing issues
    content = content.replace(/className="([^"]*?)([a-zA-Z])([A-Z])([^"]*?)"/g, (match, p1, p2, p3, p4) => {
      return `className="${p1}${p2} ${p3}${p4}"`;
    });
    
    // Fix specific patterns
    content = content.replace(/text-gray-700mb-/g, 'text-gray-700 mb-');
    content = content.replace(/text-gray-600text-/g, 'text-gray-600 text-');
    content = content.replace(/font-semiboldtext-/g, 'font-semibold text-');
    content = content.replace(/font-mediumtext-/g, 'font-medium text-');
    content = content.replace(/justify-betweenitems-/g, 'justify-between items-');
    content = content.replace(/grid-cols-1gap-/g, 'grid-cols-1 gap-');
    content = content.replace(/shadow-xlp-/g, 'shadow-xl p-');
    content = content.replace(/text-gray-800mb-/g, 'text-gray-800 mb-');
    content = content.replace(/text-gray-600text-/g, 'text-gray-600 text-');
    
    fs.writeFileSync(file, content);
    console.log(`Fixed ${file}`);
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log('All files processed');