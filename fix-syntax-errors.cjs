const fs = require('fs');
const path = require('path');

// List of files with syntax errors
const files = [
  'src/components/ChatSystem.tsx',
  'src/components/ContactForm.tsx',
  'src/components/EnhancedContactForm.tsx',
  'src/components/EnhancedErrorBoundary.tsx',
  'src/components/EnhancedNotificationSystem.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/FileUpload.tsx',
  'src/components/Navigation.tsx',
  'src/components/PerformanceMetrics.tsx',
  'src/components/PricingCard.tsx',
  'src/components/ProjectManagement.tsx',
  'src/components/SecurityDashboard.tsx',
  'src/components/ServiceCard.tsx',
  'src/components/SettingsPanel.tsx',
  'src/components/TaskManager.tsx',
  'src/components/TestDashboard.tsx',
  'src/components/UserManagement.tsx'
];

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the common pattern: onClick={() = aria-label="function()}
    content = content.replace(
      /onClick=\{\(\)\s*=\s*aria-label="([^"]+)"\}/g,
      'onClick={() => $1}'
    );
    
    // Fix the common pattern: onClick={() = aria-label="function()}
    content = content.replace(
      /onClick=\{\(\)\s*=\s*aria-label="([^"]+)"\}/g,
      'onClick={() => $1}'
    );
    
    // Fix aria-label placement issues
    content = content.replace(
      /onClick=\{\(\)\s*=>\s*([^}]+)\}\s*aria-label="([^"]+)"/g,
      'onClick={() => $1}\n                aria-label="$2"'
    );
    
    // Fix JSX closing tag issues
    content = content.replace(
      /<motion\.button([^>]*)>\s*<\/motion\.button>/g,
      '<motion.button$1></motion.button>'
    );
    
    // Fix missing closing braces
    content = content.replace(
      /(\w+)\s*=\s*\{([^}]*)\s*$/gm,
      '$1 = {$2}'
    );
    
    // Fix comma issues
    content = content.replace(
      /,\s*\)/g,
      ')'
    );
    
    // Remove duplicate content patterns
    content = content.replace(
      /(\s+>\s*{[^}]+}\s*>\s*{[^}]+}\s*<\/button>)/g,
      (match) => {
        const parts = match.split('>');
        if (parts.length > 3) {
          return parts[0] + '>' + parts[1] + '>' + parts[2] + '</button>';
        }
        return match;
      }
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixSyntaxErrors(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Syntax error fixing completed!');