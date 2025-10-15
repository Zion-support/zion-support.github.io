const fs = require('fs');
const path = require('path');

// Function to remove unused imports
function removeUnusedImports(content, unusedImports) {
  unusedImports.forEach(importName => {
    // Remove from named imports
    const namedImportRegex = new RegExp(`\\b${importName}\\s*,?`, 'g');
    content = content.replace(namedImportRegex, '');
    
    // Clean up commas
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/{\s*,/g, '{');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/{\s*}/g, '');
  });
  
  // Remove empty import lines
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*/g, '');
  
  return content;
}

// Function to remove unused variables
function removeUnusedVariables(content, unusedVars) {
  unusedVars.forEach(varName => {
    // Remove variable declarations
    const varRegex = new RegExp(`\\b${varName}\\s*[,;]?`, 'g');
    content = content.replace(varRegex, '');
    
    // Clean up destructuring
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/{\s*,/g, '{');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/{\s*}/g, '');
  });
  
  return content;
}

// Files and their issues
const filesToFix = [
  {
    path: 'App.tsx',
    unusedImports: ['React'],
    unusedVars: []
  },
  {
    path: 'app/ai-climate-prediction-engine/page.tsx',
    unusedImports: ['Settings'],
    unusedVars: []
  },
  {
    path: 'app/ai-climate-solutions-pro/page.tsx',
    unusedImports: ['Cloud', 'DollarSign', 'Users', 'Settings'],
    unusedVars: []
  },
  {
    path: 'app/ai-code-assistant-pro/page.tsx',
    unusedImports: [],
    unusedVars: ['isVisible']
  },
  {
    path: 'app/ai-database-solutions/page.tsx',
    unusedImports: ['React'],
    unusedVars: []
  },
  {
    path: 'app/ai-education-solutions-pro/page.tsx',
    unusedImports: ['React'],
    unusedVars: ['setIsVisible']
  },
  {
    path: 'app/ai-email-marketing/page.tsx',
    unusedImports: ['Clock'],
    unusedVars: []
  },
  {
    path: 'app/ai-healthcare-platform/page.tsx',
    unusedImports: [],
    unusedVars: ['isVisible', 'specialties']
  },
  {
    path: 'app/ai-healthcare-solutions-pro/page.tsx',
    unusedImports: ['React'],
    unusedVars: ['setIsVisible']
  },
  {
    path: 'app/ai-iot-management-pro/page.tsx',
    unusedImports: ['React'],
    unusedVars: ['setIsVisible']
  },
  {
    path: 'app/ai-marketing-automation-pro/page.tsx',
    unusedImports: ['React'],
    unusedVars: []
  }
];

// Fix all files
filesToFix.forEach(file => {
  const filePath = file.path;
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove unused imports
  if (file.unusedImports && file.unusedImports.length > 0) {
    content = removeUnusedImports(content, file.unusedImports);
  }
  
  // Remove unused variables
  if (file.unusedVars && file.unusedVars.length > 0) {
    content = removeUnusedVariables(content, file.unusedVars);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('TypeScript errors fixed!');