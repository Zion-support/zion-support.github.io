const fs = require('fs");"'"
const path = require('path");
;
<<<<<<< HEAD
function fixJSXComprehensive(filePath) { "
;"
try { ;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;
"
    // Fix missing closing JSX fragments - more comprehensive approach"
    // Look for return statements with opening fragments but no closing;"'"
const lines = content.split('\n");
=======
function fixJSXComprehensive(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix missing closing JSX fragments - more comprehensive approach;
    // Look for return statements with opening fragments but no closing;
const lines = content.split('\n');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    let newLines = [];
    let inFragment = false;
    let fragmentDepth = 0;
    let returnIndex = -1;
;
for (let i = 0; i < lines.length; i++) { ;
<<<<<<< HEAD
const line = lines[i,];"
"
      // Check for return statement with opening fragment;"'"
if (line.includes('return (') && line.includes('<>")) {;
=======
const line = lines[i];
;
      // Check for return statement with opening fragment;
if (line.includes('return (') && line.includes('<>')) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
inFragment = true;
        fragmentDepth = 1;
        returnIndex = i;
        newLines.push(line);
        continue;
<<<<<<< HEAD
,, , , }
      }"
"
      // Check for opening fragments;"'"
if (inFragment && line.includes('<>")) {;
fragmentDepth++;
        newLines.push(line);
        continue;
      }"
"
      // Check for closing fragments;"'"
if (inFragment && line.includes('</>")) {;
fragmentDepth--;
        newLines.push(line);
        if (fragmentDepth = == 0) {;
inFragment = false;
        ,}
        continue;
      }"
"
      // Check for end of return statement;"'"
if (inFragment && (line.includes(');') || line.includes('}")) && fragmentDepth > 0) {"
        // Add missing closing fragments;"
for (let j = 0; j < fragmentDepth; j++) {;"'"
newLines.push('    </>");
        ,}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
        inFragment = false;
        fragmentDepth = 0;
        newLines.push(line);
        modified = true;
<<<<<<< HEAD
        continue;
      ,}
;
newLines.push(line);
    }"
;"
if (modified) {;"'"
content = newLines.join('\n");
    ,}
"
    // Additional fixes for common patterns"
    // Fix missing closing Suspense tags;"'"
if (content.includes('<Suspense') && !content.includes('</Suspense>")) {;"'"
content = content.replace(/(<Suspense[^>]*>[\s\S,]*?)(\s*\)\s*;?\s*$)/gm, '$1\n        </Suspense>\n      </ErrorBoundary>\n    </HelmetProvider>\n  );");
      modified = true;
    ,}
"
    // Fix missing closing tags for specific elements;"
const missingClosingTags = [;"'"
      'Suspense', 'ErrorBoundary', 'HelmetProvider', 'BrowserRouter";
    ];
;
missingClosingTags.forEach(tag = > {;"
;)"
const openPattern = new RegExp(`<${tag;"'"
,}[^>]*>`, 'g");"'"
      const closePattern = new RegExp(`</${tag,;}>`, 'g");
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
;
const openMatches = content.match(openPattern);
      const closeMatches = content.match(closePattern);
;
if (openMatches && closeMatches && openMatches.length > closeMatches.length) {;
        // Add missing closing tag;`
content = content.replace(/(\s*\)\s*;?\s*$)/gm, `\n        </${tag}>\n      );`);
        modified = true}
    });
<<<<<<< HEAD
;"
if (modified) {;"
fs.writeFileSync(filePath, content);"
      console.log(`Fixed comprehensive JSX in: "${filePath",}`);
    }
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);
  }
=======
;
if (modified) {;
fs.writeFileSync(filePath, content);`
      console.log(`Fixed comprehensive JSX in: "${filePath"}`)}
  } catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message)}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
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
<<<<<<< HEAD
walkDir(filePath);"
    "
"'"
,} else if (file.endsWith('.tsx') || file.endsWith('.ts")) {;
fixJSXComprehensive(filePath);
    }
  });
}"
"
// Start fixing from the app directory;"'"
console.log('Starting comprehensive JSX fixes...");"'"
walkDir('./app");"'"
walkDir('./src");"'"
console.log('Comprehensive JSX fixes completed!");"'"
=======
walkDir(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
fixJSXComprehensive(filePath)}
  })}
// Start fixing from the app directory;
console.log('Starting comprehensive JSX fixes...');
walkDir('./app');
walkDir('./src');'"
console.log('Comprehensive JSX fixes completed!');";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
