const fs = require('fs');
const path = require('path');

// List of files with critical syntax errors
const criticalFiles = [
  'app/components/AccessibilityComponents.tsx',
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/Analytics.tsx',
  'app/components/ContactForm.tsx',
  'app/components/Header.tsx',
  'app/components/NewsletterSignup.tsx'
];

// Fix common syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common issues
    content = content
      // Fix missing semicolons after interface properties
      .replace(/(\w+)\s*\?\s*:\s*(\w+)(?!\s*;)/g, '$1?: $2;')
      // Fix missing semicolons after function declarations
      .replace(/(\w+)\s*=\s*\([^)]*\)\s*=>\s*{([^}]*)}/g, (match, funcName, body) => {
        if (!match.includes(';')) {
          return match.replace('}', '};');
        }
        return match;
      })
      // Fix missing semicolons after variable declarations
      .replace(/(\w+)\s*=\s*[^;]+(?!;)(?=\n)/g, (match) => {
        if (!match.includes(';') && !match.includes('{') && !match.includes('(')) {
          return match + ';';
        }
        return match;
      })
      // Fix JSX syntax issues
      .replace(/>\s*</g, '><')
      // Fix missing closing brackets
      .replace(/(\w+)\s*{\s*([^}]*?)(?=\n\s*[a-zA-Z])/g, (match, name, body) => {
        if (!body.includes('}')) {
          return match + '}';
        }
        return match;
      });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process critical files
criticalFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('Syntax fixing completed');
