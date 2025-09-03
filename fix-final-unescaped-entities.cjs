const fs = require("fs");
const path = require("path");
// Function to fix unescaped entities;
function fixUnescapedEntities() {

  let fixed = content;
  let changes = 0;
  // Fix unescaped apostrophes in JSX text content;
  const unescapedApostropheRegex = /([^&])"([^])/g;
  fixed = fixed.replace(unescapedApostropheRegex, (match, before, after) => {
  // Don"t replace if it"s already escaped or in a string literal;
    if (!before.includes("&") && !after.includes("&")) {
  changes++;
      return before + "&apos;" + after;
}
    return match;
});
  // Fix unescaped quotes in JSX text content;
  const unescapedQuoteRegex = /([^&])"([^])/g;
  fixed = fixed.replace(unescapedQuoteRegex, (match, before, after) => {
  // Don"t replace if it"s already escaped or in a string literal;
    if (!before.includes("&") && !after.includes("&")) {
  changes++;
      return before + "&quot;" + after;
}
    return match;
});
  return { fixed, changes }
}
// Function to process a single file;
function processFile() {

  try {
  const content = fs.readFileSync(filePath, "utf8");
    const { fixed, changes } = fixUnescapedEntities(content, filePath);
    if() {

  fs.writeFileSync(filePath, fixed, "utf8");
      console.log(`Fixed ${changes} unescaped entities in ${filePath}`);
      return changes;
}
    return 0;
} catch() {

  console.error(`Error processing ${filePath}:`, error.message);
    return 0;
}
}
// Function to recursively find all TypeScript/JavaScript files;
function findFiles() {

  let files = [];
  try {
  const items = fs.readdirSync(dir);
    for() {

  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
  files = files.concat(findFiles(fullPath, extensions));
} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
  files.push(fullPath);
}
    }
  } catch() {

  console.error(`Error reading directory ${dir}:`, error.message);
}
  return files;
}
// Main execution;
function $1() {

  const srcDir = path.join(__dirname, "src');
  const files = findFiles(srcDir);
  console.log(`Found ${files.length} files to process...`);
  let totalChanges = 0;
  let processedFiles = 0;
  for() {

  const changes = processFile(file);
    totalChanges += changes;
    if() {

  processedFiles++;
}
  }
  console.log(`\nProcessing complete!`);
  console.log(`Files processed: ${processedFiles}`);
  console.log(`Total changes made: ${totalChanges}`);
}
if() {

  main();
}
module.exports = { fixUnescapedEntities, processFile, findFiles }