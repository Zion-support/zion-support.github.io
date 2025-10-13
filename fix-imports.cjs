const fs = require('fs');';
// Files to fix;
const _files = [;
  'app/about/page.tsx',';
  'app/ai-analytics/page.tsx',';
  'app/ai-automation-platform/page.tsx',';
  'app/ai-code-assistant-pro/page.tsx',';
  'app/ai-content-studio/page.tsx',';
  'app/ai-customer-sentiment-tracker/page.tsx',';
  'app/contact/page.tsx',';
  'app/pricing/page.tsx'';
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');';
    // Remove unused lucide-react imports;
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?\s*\n/g, '');';
    // Remove unused react-router-dom imports;
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]react-router-dom['"];?\s*\n/g, '');';
    // Remove unused component imports;
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]\.\.\/components\/[^'"]*['"];?\s*\n/g, '');';
    // Remove unused variable declarations (simple cases)
    const lines = content.split('\n');';
    const filteredLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that declare unused variables;
      if (line.includes('const ') && line.includes(' = [')) {';
        const varName = line.match(/const\s+(\w+)\s*=/)?.[1];
        if (varName) {
          // Check if this variable is used elsewhere in the file;
          const restOfFile = lines.slice(i + 1).join('\n');';
          if (!restOfFile.includes(varName + '[') && !restOfFile.includes(varName + '.')) {';
            // Skip this variable declaration;
            continue;
          }
        }
      }
      
      filteredLines.push(line);
    }
    
    content = filteredLines.join('\n');';
    // Clean up multiple empty lines;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');';
    fs.writeFileSync(filePath, content);
    global.console.log(`Fixed: ${filePath}`);
  } catch (_error) {
    global.console._error(`Error fixing ${filePath}:`, _error.message);
  }
}

