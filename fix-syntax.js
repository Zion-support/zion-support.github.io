const fs = require('fs');
const path = require('path');

// Find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          files.push(fullPath);
        }
      }
    } catch (e) {
      // Skip directories we can't read
    }
  }
  traverse(dir);
  return files;
}

// Fix common patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix HTML entities
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&amp;/g, '&');
    
    // Fix malformed JSX
    content = content.replace(/className=&quot;([^&]+)&quot;/g, 'className="$1"');
    content = content.replace(/href=&quot;([^&]+)&quot;/g, 'href="$1"');
    content = content.replace(/src=&quot;([^&]+)&quot;/g, 'src="$1"');
    content = content.replace(/alt=&quot;([^&]+)&quot;/g, 'alt="$1"');
    content = content.replace(/title=&quot;([^&]+)&quot;/g, 'title="$1"');
    content = content.replace(/description=&quot;([^&]+)&quot;/g, 'description="$1"');
    content = content.replace(/canonicalUrl=&quot;([^&]+)&quot;/g, 'canonicalUrl="$1"');
    
    // Fix malformed expressions
    content = content.replace(/\{([^}]+)\};/g, '{$1}');
    content = content.replace(/keywords = \{/g, 'keywords={');
    
    // Fix malformed useEffect
    content = content.replace(/useEffect\(\(\) => \{\}/g, 'useEffect(() => {');
    content = content.replace(/setIsLoaded\(true\)\n {2}\}, \[\]\)/g, 'setIsLoaded(true);\n  }, []);');
    
    // Fix malformed return statements
    content = content.replace(/return \(<\/section>/g, 'return (\n        <section>');
    content = content.replace(/return \(<\/div>/g, 'return (\n          <div>');
    
    // Fix malformed array mappings
    content = content.replace(/\{([a-zA-Z]+)\.map\(\(([^,]+), ([^)]+)\) => \(\)/g, '{$1.map(($2, $3) => (');
    
    // Fix malformed closing tags
    content = content.replace(/\)\}\);<\/div>/g, '))}\n            </div>');
    content = content.replace(/\)\}\);<\/section>/g, '))}\n          </section>');
    
    // Fix malformed CSS classes
    content = content.replace(/className=&quot;text-xl m,\n {6}d:text-2xl/g, 'className="text-xl md:text-2xl"');
    content = content.replace(/className=&quot;grid grid-cols-1 m,\n {6}d:grid-cols-2 l,\n {6}g:grid-cols-4/g, 'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"');
    content = content.replace(/className=&quot;flex flex-col sm: flex-row/g, 'className="flex flex-col sm:flex-row"');
    content = content.replace(/className=&quot;text-5xl md: text-7xl/g, 'className="text-5xl md:text-7xl"');
    content = content.replace(/className=&quot;text-4xl md: text-5xl/g, 'className="text-4xl md:text-5xl"');
    
    // Fix malformed hover states
    content = content.replace(/hove,\n {6}r:bg-blue-400 hove,\n {6}r:text-slate-900/g, 'hover:bg-blue-400 hover:text-slate-900');
    content = content.replace(/hove,\n {6}r:bg-white hove,\n {6}r:text-gray-900/g, 'hover:bg-white hover:text-gray-900');
    
    // Fix malformed export statements
    content = content.replace(/export default Page;\n\}\}\}\}\}\}\}\}/g, 'export default Page;');
    
    // Fix malformed string literals
    content = content.replace(/'([^']+)',,,,/g, "'$1',");
    content = content.replace(/'([^']+)',,,/g, "'$1',");
    content = content.replace(/'([^']+)',,/g, "'$1',");
    
    // Fix malformed object properties
    content = content.replace(/'icon: ([^,]+),'/g, 'icon: $1,');
    content = content.replace(/'title: '([^']+)',/g, "title: '$1',");
    content = content.replace(/'description: '([^']+)',/g, "description: '$1',");
    
    // Fix malformed array syntax
    content = content.replace(/const feature,\n {6}s = \[/g, 'const features = [');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed:', filePath);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error fixing', filePath, ':', error.message);
    return false;
  }
}

// Find and fix files
const srcFiles = findTsxFiles('./src');
const appFiles = findTsxFiles('./app');
const allFiles = [...srcFiles, ...appFiles];

let totalFixed = 0;
allFiles.forEach(file => {
  if (fixFile(file)) {
    totalFixed++;
  }
});

console.log('Fixed', totalFixed, 'files');
