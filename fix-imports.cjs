const fs = require('fs');

// Fix import statements that were corrupted by entity replacement
function fixImports(content) {
  // Fix import statements
  content = content.replace(/import\s+([^&]+)\s+from\s+&apos;([^&]+)&apos;/g, "import $1 from '$2'");
  content = content.replace(/import\s+([^&]+)\s+from\s+&quot;([^&]+)&quot;/g, 'import $1 from "$2"');
  
  // Fix export statements
  content = content.replace(/export\s+([^&]+)\s+from\s+&apos;([^&]+)&apos;/g, "export $1 from '$2'");
  content = content.replace(/export\s+([^&]+)\s+from\s+&quot;([^&]+)&quot;/g, 'export $1 from "$2"');
  
  // Fix require statements
  content = content.replace(/require\s*\(\s*&apos;([^&]+)&apos;\s*\)/g, "require('$1')");
  content = content.replace(/require\s*\(\s*&quot;([^&]+)&quot;\s*\)/g, 'require("$1")');
  
  return content;
}

// Get all TypeScript/JavaScript files
const glob = require('glob');
const files = glob.sync('**/*.{ts,tsx,js,jsx}', { 
  cwd: '/workspace',
  ignore: ['node_modules/**', 'dist/**', '.git/**']
});

files.forEach(file => {
  const fullPath = `/workspace/${file}`;
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const original = content;
    content = fixImports(content);
    if (content !== original) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed imports in ${file}`);
    }
  }
});

console.log('Import fixes complete');