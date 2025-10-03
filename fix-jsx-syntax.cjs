const fs = require('fs');
const path = require('path');

function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix className: to className=
    content = content.replace(/className:\s*"/g, 'className="');
    
    // Fix href: to href=
    content = content.replace(/href:\s*"/g, 'href="');
    
    // Fix key: to key=
    content = content.replace(/key:\s*{/g, 'key={');
    
    // Remove malformed quotes and commas
    content = content.replace(/";,/g, '"');
    content = content.replace(/";/g, '"');
    content = content.replace(/>";,/g, '>');
    content = content.replace(/>";/g, '>');
    content = content.replace(/\/>";,/g, '/>');
    content = content.replace(/\/>";/g, '/>');
    
    // Fix malformed spaces in class names
    content = content.replace(/sm:\s*px-6/g, 'sm:px-6');
    content = content.replace(/md:\s*text-7xl/g, 'md:text-7xl');
    content = content.replace(/md:\s*text-2xl/g, 'md:text-2xl');
    content = content.replace(/md:\s*grid-cols-4/g, 'md:grid-cols-4');
    content = content.replace(/md:\s*grid-cols-2/g, 'md:grid-cols-2');
    content = content.replace(/lg:\s*grid-cols-4/g, 'lg:grid-cols-4');
    content = content.replace(/lg:\s*grid-cols-3/g, 'lg:grid-cols-3');
    content = content.replace(/hover:\s*bg-red-700/g, 'hover:bg-red-700');
    content = content.replace(/hover:\s*bg-white/g, 'hover:bg-white');
    content = content.replace(/hover:\s*text-red-900/g, 'hover:text-red-900');
    content = content.replace(/hover:\s*shadow-xl/g, 'hover:shadow-xl');
    content = content.replace(/flex-shrink-0/g, 'flex-shrink-0');
    
    // Fix malformed closing tags
    content = content.replace(/>",/g, '>');
    content = content.replace(/",/g, '"');
    
    // Remove duplicate lines and fix structure
    const lines = content.split('\n');
    const fixedLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Skip duplicate lines
      if (i > 0 && line.trim() === lines[i-1].trim()) {
        i++;
        continue;
      }
      
      // Fix malformed JSX attributes
      let fixedLine = line
        .replace(/className:\s*"/g, 'className="')
        .replace(/href:\s*"/g, 'href="')
        .replace(/key:\s*{/g, 'key={');
      
      fixedLines.push(fixedLine);
      i++;
    }
    
    content = fixedLines.join('\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed JSX syntax in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix the SmartContractAudit.tsx file
fixJsxSyntax('/workspace/src/pages/services/SmartContractAudit.tsx');

console.log('JSX syntax fixes completed');