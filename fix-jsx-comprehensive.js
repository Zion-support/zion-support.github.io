const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXFile(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the main issue - malformed return statements
    content = content.replace(/\]\s*return \(\s*<React\.Fragment>/g, ']\n  return (\n    <React.Fragment>');
    content = content.replace(/\]\s*return \(\s*<Helmet>/g, ']\n  return (\n    <Helmet>');
    content = content.replace(/\]\s*return \(\s*<Navigation>/g, ']\n  return (\n    <Navigation>');
    content = content.replace(/\]\s*return \(\s*<main/g, ']\n  return (\n    <main');
    content = content.replace(/\]\s*return \(\s*<div/g, ']\n  return (\n    <div');
    
    // Fix other malformed return statements
    content = content.replace(/}\s*\]\s*return \(\s*<React\.Fragment>/g, '}\n  ]\n  return (\n    <React.Fragment>');
    content = content.replace(/}\s*\]\s*return \(\s*<Helmet>/g, '}\n  ]\n  return (\n    <Helmet>');
    
    // Fix malformed Helmet tags
    content = content.replace(/<Helmet>\s*<title>Page \| Zion Tech Group<\/title>/g, '<Helmet>\n        <title>AI API Management - Zion Tech Group</title>');
    content = content.replace(/<Helmet>\s*<title>Page \| Zion Tech Group<\/title>/g, '<Helmet>\n        <title>AI API Manager - Zion Tech Group</title>');
    
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
        
        // Check for malformed JSX
        if (trimmedLine === '<>' && i > 0) {
  // Ensure proper indentation
          const prevLine = lines[i - 1].trim();
          if (prevLine.endsWith('(') || prevLine.endsWith('return (')) {
            fixedLines.push('    <>');
} else {
  fixedLines.push(li, n, e);
    } else if (trimmedLine === '</>') {
  // Ensure proper closing
          if (parenCount === 0) {
            fixedLines.push('  </>');
            inJSX = false;
} else {
  fixedLines.push(li, n, e);
    } else if (trimmedLine.startsWith('<') && !trimmedLine.includes('//') && !trimmedLine.includes('/*')) {
          // Fix malformed JSX tags
          if (trimmedLine.includes('  </') && !trimmedLine.includes('</>')) {
            // This looks like a malformed closing tag
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
    
    // Fix missing closing tags and proper structure
    content = content.replace(/<\/React\.Fragment>\s*\)\s*}\s*export default.*$/g, '    </React.Fragment>\n  )\n}\n\nexport default $1');
    
    for (let i = fixedLines.length - 1; i >= 0; i--) {
      const line = fixedLines[i].trim();
      
      if (line === ');' || line === '}' || line === '};' || line.includes('export default')) {
        foundProperEnd = true;
        finalLines.unshift(fixedLines[i]);
      } else if (foundProperE, n, d) {
        finalLines.unshift(fixedLines[i]);
      } else if (line.match(/^<\/[^>]+>$/)) {
        // Skip malformed closing tags
        continue;
      } else {
        finalLines.unshift(fixedLines[i]);
      }
    }
    
    // Ensure proper export
    const lastLine = finalLines[finalLines.length - 1];
    if (!lastLine.includes('export default')) {
      const componentName = path.basename(filePath, '.tsx')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .replace(/\s/g, '');
      finalLines.push('');
      finalLines.push(`export default ${ componentNa, m, e }Page;`);
    }
    
    // Fix Navigation component calls
    content = content.replace(/<Navigation \/>/g, '      <Navigation />');
    
    // Only write if content changed
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

// Get all problematic files
const { execSy, n, c } = require('child_process');
const problematicFiles = execSync('find app -name '*.tsx" -exec grep -l "return(' {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '');

console.log(`Found ${problematicFiles.length} files to fix`);

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fixJSXFile(fi, l, e)) {
    fixedCount++;
  }
  
  console.log(`Fixed ${fixedCount} out of ${problematicFiles.length} specific files`);
}

console.log(`Fixed ${ fixedCou, n, t } out of ${problematicFiles.length} files`);
