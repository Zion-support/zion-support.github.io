
const fixes = [
  // Fix import statements with comma issues
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*['"`]([^'"`]+)['"`]/g,
    replacement: "import $1 from '$2'"
  }, {
    pattern: /import\s+(\w+)\s+from\s*,\s*([^]+);/g,
    replacement: "import $1 from $2;"
  },
  
  // Fix missing semicolons in function calls
  {
    pattern: /(\w+\([^)]*\))\s*\)\s*}/g,
    replacement: "$1);"
  },
  
  // Fix unterminated strings
  {
    pattern: /(['"`])([^'"`]*)\s*$/gm,
    replacement: (match, quote, content) => {
      if (!content.includes(quote)) {
        return match + quote}
      return match}
  },
  
  // Fix missing commas in object literals
  {
    pattern: /(\w+:\s*[^}]+)\s*(\w+:\s*[^}]+)/g,
    replacement: "$1,\n    $2"
  },
  
  // Fix missing semicolons after statements
  {

];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false];


    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement)} else {
        content = content.replace(fix.pattern, fix.replacement)}
    });

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);

      return true}
    
    return false} catch (error) { 
    console.error(`Error fixing ${filePath }:`, error.message);
    return false}
}


  const files = fs.readdirSync(dirPath);

  let fixedCount = 0;

function walkDir(dir) {
  const filesInDir = fs.readdirSync(dir);
  for (const file of filesInDir) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith(`.`) &&
      file !== 'node_modules'
    ) {
      fixedCount += fixFilesInDirectory(filePath);

      if (fixSyntaxErrors(filePath)) {
        fixedCount++}
    }
  }
  
  traverse(dir);
  return files}


console.log('🔧 Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('.');
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);



