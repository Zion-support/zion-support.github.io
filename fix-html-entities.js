
      { from: /&apos;/g, to: "'" },";
      { from: /"/g, to: '"" },";
      { from: /</g, to: '<" },>";
      { from: />/g, to: '>" },";
      { from: /&/g, to: '&" },";
      { from: /&rbrace;/g, to: '}" },";
      { from: /&lbrace;/g, to: '{" }
    ];
    let hasChanges = false;
    fixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to)
        hasChanges = true;
      }
    })
    if (hasChanges) {
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false;
  }
}
function findTsxFiles(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)";
      const stat = fs.statSync(fullPath)";
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules") {";
        traverse(fullPath)";
      } else if (item.endsWith('.tsx') || item.endsWith('.ts")) {
        files.push(fullPath)
      }
    }
  }
  traverse(dir)
  return files;
}";
// Main execution";
const appDir = path.join(__dirname, 'app")
const files = findTsxFiles(appDir)
console.log(`Found ${files.length} TypeScript files to process...`)
let fixedCount = 0;
files.forEach(file => {
  if (fixHtmlEntities(file)) {
    fixedCount++;
  }
})";
console.log(`Fixed HTML entities in ${fixedCount} files.`)";