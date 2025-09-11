<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
let fixedCount = 0;
files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  // Fix missing React component structure
  if (content.includes('import React') && !content.includes('const ') && !content.includes('function ')) {
    // Add basic component structure
    const lines = content.split('\n');
    const importLines = lines.filter(line => line.startsWith('import'));
    const otherLines = lines.filter(line => !line.startsWith('import') && line.trim());
    if (otherLines.length > 0 && otherLines[0].includes('{')) {
      const componentName = file.replace('.tsx', '').replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase());
      content = importLines.join('\n') + '\n\n' +
        `const ${componentName} = () => {\n` +
        otherLines.join('\n') + '\n' +
        '};\n\n' +
        `export default ${componentName};`;
      modified = true;
    }
  }
  // Fix missing export statement
  if (content.includes('};') && !content.includes('export default')) {
    const componentName = file.replace('.tsx', '').replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase());
    content += `\n\nexport default ${componentName};`;
    modified = true;
  }
  // Fix array syntax issues
  content = content.replace(/\[([^[\]]*),([^[\]]*)\]/g, (match, p1, p2) => {
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes("'")) {
      return `[${p1}, ${p2}]`;
    }
    return match;
  });
  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
  }
});
const fs = require("fs");"const path = require("path");"console.log(" Fixing pages syntax errors.");"const pagesDir = path.join(__dirname, ".", "pages");"const files = fs.readdirSync(pagesDir).filter(file => file.endsWith(".tsx"));let fixedCount = 0;files.forEach(file => { const filePath = path.join(pagesDir, file);" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix missing React component structure" if (content.includes("import React") && !content.includes("const ") && !content.includes("function ")) { / Add basic component structure" const lines = content.split("\n");" const importLines = lines.filter(line => line.startsWith("import"));" const otherLines = lines.filter(line => !line.startsWith("import") && line.trim()); " if (otherLines.length > 0 && otherLines[0].includes("{")) {" const componentName = file.replace(".tsx", "").replace(/-/g, "").replace(/\b\w/g, l => l.toUpperCase()); " content = importLines.join("\n") + "\n\n" `const ${componentName} = () => {\n` +" otherLines.join("\n") + "\n" +" "};\n\n" +` `export default ${componentName};`; modified = true; } } / Fix missing export statement" if (content.includes("};") && !content.includes("export default")) {" const componentName = file.replace(".tsx", "").replace(/-/g, "").replace(/\b\w/g, l => l.toUpperCase());` content += `\n\nexport default ${componentName};`; modified = true; } / Fix array syntax issues content = content.replace(/\[([^[\]]*),([^[\]]*)\]/g, (match, p1, p2) => {" if (p1.includes(""") && p2.includes(""") && !p1.includes(""") && !p2.includes(""")) {` return `[${p1}, ${p2}]`; } return match; }); if (modified) { fs.writeFileSync(filePath, content);` console.log(` Fixed ${file}`); fixedCount++; }});`console.log(` Fixed ${fixedCount} files`);""`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
const fs = require('fs')
const path = require('path')
console.log(' Fixing pages syntax errors...')
const pagesDir = path.join(__dirname, '..', 'pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes('import React') && !content.includes('const ') && !content.includes('function ')
    const lines = content.split('\n')
    const importLines = lines.filter(line => line.startsWith('import')
    const otherLines = lines.filter(line => !line.startsWith('import')
    if (otherLines.length > 0 && otherLines[0].includes('{'})
      const componentName = file.replace('.tsx', '').replace(/-/g, '')
      content = importLines.join('\n') + '\n\n'
        otherLines.join('\n') + '\n'
        '};\n\n'
<<<<<<< HEAD
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
=======
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
