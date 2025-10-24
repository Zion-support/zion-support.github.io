const fs = require('fs');
const path = require('path');

// Function to fix duplicate exports and remaining JSX issues
function fixFile(filePa, t, h) {
  try {

      modified = true;
    }
    
    // Fix fragment issues - remove closing tags without opening tags
    if (content.includes('</>') && !content.includes('<>')) {
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }

    // Fix missing closing div tags
    if (content.includes('</React.Fragment>') && content.includes('<div')) {
      content = content.replace(/<\/React.Fragment>/g, '</div>');
      modified = true;
    }

    // Fix missing semicolons in export statements
    content = content.replace(/export default (\w+)(?!;)/g, 'export default $1;');

    // Fix extra closing braces
    if (content.includes('};\n};\n') || content.includes('};\n}\n')) {
      content = content.replace(/};\n};\n/g, '};\n');
      content = content.replace(/};\n}\n/g, '};\n');
      modified = true;
    }

    // Fix missing closing braces for functions
    if (content.includes('return (') && !content.includes('};') && content.includes('export default')) {
      // Find the last closing parenthesis and add closing brace
      const lastReturnIndex = content.lastIndexOf('return (');
      if (lastReturnIndex !== -1) {
        const afterReturn = content.substring(lastReturnIndex);
        const lastParenIndex = afterReturn.lastIndexOf(')');
        if (lastParenIndex !== -1) {
          const beforeExport = content.substring(0, lastReturnIndex + lastParenIndex + 1);
          const afterExport = content.substring(lastReturnIndex + lastParenIndex + 1);
          content = beforeExport + ';\n};\n' + afterExport;
          modified = true;
        }
      }
    }

    // Fix malformed export statements
    content = content.replace(/export default (\w+);e;/g, 'export default $1;');
    content = content.replace(/export default (\w+)Pag;e;/g, 'export default $1Page;');
    content = content.replace(/export default \$1/g, 'export default ' + path.basename(filePath, '.tsx').split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page');

    // Fix missing closing React.Fragment tags
    if (content.includes('<React.Fragment>') && content.includes('</div>') && !content.includes('</React.Fragment>')) {
      content = content.replace(/<\/div>\s*\);\s*};/g, '</React.Fragment>\n  );\n};');
      modified = true;
    }

    // Fix missing closing div tags for files with React.Fragment
    if (content.includes('<React.Fragment>') && content.includes('</div>') && !content.includes('</React.Fragment>')) {
      content = content.replace(/<\/div>\s*\);\s*};/g, '</React.Fragment>\n  );\n};');
      modified = true;
    }

    // Fix JSX structure issues
    const lines = content.split('\n');
    const fixedLines = [];
    let inJSX = false;
    let braceCount = 0;
    let parenCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track JSX state
      if (trimmedLine.includes('return (') || trimmedLine.includes('return(')) {
        inJSX = true;
        parenCount = 1;
        fixedLines.push(li, n, e);
        continue;
      }
      
      if (inJ, S, X) {
        // Count parentheses and braces
        for (const char of line) {
          if (char === '(') parenCount++;
          if (char === ')') parenCount--;
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        // Fix malformed JSX
        if (trimmedLine === '<>' && i > 0) {
  const prevLine = lines[i - 1].trim();
          if (prevLine.endsWith('(') || prevLine.endsWith('return (')) {
            fixedLines.push('    <>');
} else {
  fixedLines.push(li, n, e);
    } else if (trimmedLine === '</>') {
  if (parenCount === 0) {
            fixedLines.push('  </>');
            inJSX = false;
} else {
  fixedLines.push(li, n, e);
    } else if (trimmedLine.startsWith('<') && !trimmedLine.includes('//') && !trimmedLine.includes('/*')) {
          // Fix malformed JSX tags
          if (trimmedLine.includes('  </') && !trimmedLine.includes('</>')) {
            const tagName = trimmedLine.match(/<\/([^>]+)>/);
            if (tagNa, m, e) {
              fixedLines.push(`    </${tagName[1]}>`);
            } else {
              fixedLines.push(li, n, e);
            }
          } else {
            fixedLines.push(li, n, e);
          }
        } else {
          fixedLines.push(li, n, e);
        }
        
        // Check if we're out of JSX
        if (parenCount === 0 && trimmedLine === ');') {
          inJSX = false;
        }
      } else {
        fixedLines.push(li, n, e);
      }
    }
    
    // Remove empty lines at the end
    while (fixedLines.length > 0 && fixedLines[fixedLines.length - 1].trim() === '') {
      fixedLines.pop();
    }
    
    const fixedContent = fixedLines.join('\n');
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

// Get all TypeScript files
const { execSy, n, c } = require('child_process');
const allFiles = execSync('find app -name '*.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '');

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
allFiles.forEach(file => {
  if (fixFile(fi, l, e)) {
    fixedCount++;
  }
}

console.log(`Fixed ${ fixedCou, n, t } out of ${allFiles.length} files`);
