const fs = require('fs');
const path = require('path');

// Files with JSX syntax errors
const filesToFix = [
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-quantum-computing/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix broken JSX syntax where icon names were removed but JSX remains
    content = content.replace(/<className="w-8 h-8" \/>/g, '<div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />');
    content = content.replace(/<className="w-6 h-6" \/>/g, '<div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />');
    content = content.replace(/<className="w-5 h-5" \/>/g, '<div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />');
    content = content.replace(/<className="w-4 h-4" \/>/g, '<div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />');
    
    // Fix empty import statements
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*/g, '');
    content = content.replace(/import\s*{\s*,?\s*}\s*from\s*['"][^'"]+['"];?\s*/g, '');
    
    // Fix empty object destructuring
    content = content.replace(/{\s*,?\s*}/g, '{}');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed JSX syntax in ${filePath}`);
  }
});

console.log('JSX syntax fixes completed!');
