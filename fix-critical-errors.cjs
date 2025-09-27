const fs = require('fs');
const path = require('path');

// List of critical files that need fixing
const criticalFiles = [
  'src/components/EnhancedErrorBoundary.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/Navigation.tsx',
  'src/components/PerformanceMetrics.tsx'
];

function fixCriticalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content.replace(/onClick=\{\(\)\s*=\s*aria-label="([^"]+)"\}/g, 'onClick={() => $1}');
    content = content.replace(/onClick=\{\(\)\s*=\s*aria-label="([^"]+)"\}/g, 'onClick={() => $1}');
    
    // Fix aria-label placement
    content = content.replace(/onClick=\{\(\)\s*=>\s*([^}]+)\}\s*aria-label="([^"]+)"/g, 'onClick={() => $1}\n                aria-label="$2"');
    
    // Fix missing closing braces in objects
    content = content.replace(/(\w+):\s*([^,}]+),\s*}/g, '$1: $2\n    }');
    
    // Fix extra commas
    content = content.replace(/,\s*}/g, '\n    }');
    content = content.replace(/,\s*\)/g, '\n  )');
    
    // Fix JSX syntax issues
    content = content.replace(/className\s*=\s*\{`([^`]+)`\}/g, 'className={`$1`}');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*\{([^}]*)\s*$/gm, '$1 = {$2};');
    
    // Fix duplicate content patterns
    content = content.replace(/(\s+>\s*{[^}]+}\s*>\s*{[^}]+}\s*<\/[^>]+>)/g, (match) => {
      const parts = match.split('>');
      if (parts.length > 3) {
        return parts[0] + '>' + parts[1] + '>' + parts[2] + '>';
      }
      return match;
    });
    
    // Fix specific patterns
    content = content.replace(/onClick=\{\(\)\s*=\s*aria-label="([^"]+)"\}/g, 'onClick={() => $1}');
    content = content.replace(/onClick=\{\(\)\s*=\s*aria-label="([^"]+)"\}/g, 'onClick={() => $1}');
    
    // Fix missing closing tags
    content = content.replace(/<motion\.button([^>]*)>\s*<\/motion\.button>/g, '<motion.button$1></motion.button>');
    
    // Fix empty parentheses
    content = content.replace(/\(\s*\)\s*=\s*aria-label="([^"]+)"/g, '() => $1');
    
    // Fix missing closing braces in function parameters
    content = content.replace(/\(([^)]*)\s*=\s*aria-label="([^"]+)"\s*\)/g, '($1) => $2');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed critical errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process critical files
criticalFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixCriticalErrors(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Critical error fixing completed!');