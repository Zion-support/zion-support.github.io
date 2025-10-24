function fixJSXComprehensive(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix missing closing JSX fragments - more comprehensive approach;
    // Look for return statements with opening fragments but no closing;
const lines = content.split('\n');
    let newLines = [];
    let inFragment = false;
    let fragmentDepth = 0;
    let returnIndex = -1;
;
for (let i = 0; i < lines.length; i++) { ;
const line = lines[i];
;
      // Check for return statement with opening fragment;
if (line.includes('return (') && line.includes('<>')) {;
inFragment = true;
        fragmentDepth = 1;
        returnIndex = i;
        newLines.push(line);
        continue;
,, }
      }
      // Check for opening fragments;
if (inFragment && line.includes('<>')) {;
fragmentDepth++;
        newLines.push(line);
        continue}
      // Check for closing fragments;
if (inFragment && line.includes('</>')) {;
fragmentDepth--;
        newLines.push(line);
        if (fragmentDepth = == 0) {;
inFragment = false}
        continue}
      // Check for end of return statement;
if (inFragment && (line.includes(')') || line.includes('}')) && fragmentDepth > 0) {;
        // Add missing closing fragments;
for (let j = 0; j < fragmentDepth; j++) {;
newLines.push('    </>')}
        inFragment = false;
        fragmentDepth = 0;
        newLines.push(line);
        modified = true;
        continue}
newLines.push(line)}
if (modified) {;
content = newLines.join('\n')}
    // Additional fixes for common patterns;
    // Fix missing closing Suspense tags;
if (content.includes('<Suspense') && !content.includes('</Suspense>')) {;
content = content.replace(/(<Suspense[^>]*>[\s\S]*?)(\s*\)\s*;?\s*$)/gm, '$1\n        </Suspense>\n      </ErrorBoundary>\n    </HelmetProvider>\n  )');
      modified = true}
    // Fix missing closing tags for specific elements;
const missingClosingTags = ['Suspense', 'ErrorBoundary', 'HelmetProvider', 'BrowserRouter'
    ];
;
missingClosingTags.forEach(tag = > {);
const openPattern = new RegExp(`<${tag}[^>]*>`, 'g');`'
      const closePattern = new RegExp(`</${tag}>`, 'g');
;
const openMatches = content.match(openPattern);
      const closeMatches = content.match(closePattern);
;
if (openMatches && closeMatches && openMatches.length > closeMatches.length) {;
        // Add missing closing tag;`
content = content.replace(/(\s*\)\s*;?\s*$)/gm, `\n        </${tag}>\n      );`);
        modified = true}
    });
const fs = require("fs")
const path = require("path")

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

      //Check for end of return statement
if (inFragment && (line.includes(");") || line.includes("}")) && fragmentDepth > 0) {
        //Add missing closing fragments
for (let j = 0; j < fragmentDepth; j++) { newLines.push("    </>")
        inFragment = false
        fragmentDepth = 0
        newLines.push(line)
        modified = true
        continue
      }

newLines.push(line)
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
;
if (modified) {;
fs.writeFileSync(filePath, content);`
      console.log(`Fixed comprehensive JSX in: "${filePath"}`)}
  } catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message)}
}
function walkDir(dir) {;
;
const files = fs.readdirSync(dir);
;
files.forEach(file = > {);
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
walkDir(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
fixJSXComprehensive(filePath)}
  })}
// Start fixing from the app directory;
console.log('Starting comprehensive JSX fixes...');
walkDir('./app');
walkDir('./src');'"
console.log('Comprehensive JSX fixes completed!');";`'"
}

// Get all problematic files
const { execSy, n, c } = require('child_process');
const problematicFiles = execSync('find app -name '*.tsx" -exec grep -l "return(' {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '');

const files = fs.readdirSync(dir)

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fixJSXFile(fi, l, e)) {
    fixedCount++;
  }
  
  console.log(`Fixed ${fixedCount} out of ${problematicFiles.length} specific files`);
}

console.log(`Fixed ${ fixedCou, n, t } out of ${problematicFiles.length} files`);
