const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing test files syntax errors - v2...');

// Find all test files with syntax errors
const testDirs = ['__tests__'];
const fixedFiles = [];

function fixTestFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix unterminated strings in describe and test blocks
  content = content.replace(/describe\('([^']*)', \(\) => \{';/g, "describe('$1', () => {");
  content = content.replace(/test\('([^']*)', \(\) => \{';/g, "test('$1', () => {");
  content = content.replace(/expect\(([^)]*)\)\.([^]*);
;/g, "expect($1).$2;");
  
  // Fix malformed JSX render statements
  content = content.replace(/render\(<([^>]+) \/>\);;/g, "render(<$1 />);");
  
  // Fix malformed closing braces and parentheses
  content = content.replace(/\}\)\);';$/gm, "});");
  content = content.replace(/\}\}';$/gm, "});");
  
  // Fix describe blocks with extra quotes
  content = content.replace(/describe\('([^']*)', \(\) => \{';/g, "describe('$1', () => {");
  
  return { content, changed: content !== originalContent }}

testDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir { recursive: true });
    
    files.forEach(file => {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        const filePath = path.join(dir, file);
        
        if (fs.existsSync(filePath)) {
          const { content, changed } = fixTestFile(filePath);
          
          if (changed) {
            fs.writeFileSync(filePath, content, 'utf8');
            fixedFiles.push(filePath);
            console.log(`✅ Fixed ${filePath}`)}
        }
      }
    })}
});

console.log(`✅ Fixed ${fixedFiles.length} test files`);

if (fixedFiles.length > 0) {
  console.log('Fixed files:');
  fixedFiles.forEach(file => console.log(`  - ${file}`))}

console.log('🎉 Test file fixing v2 completed!');