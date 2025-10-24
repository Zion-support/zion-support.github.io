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
    
    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*'([^']+)';\s*'use client'/g, "'use client'\nimport { $1 } from '$2';");
    content = content.replace(/import\s+([^;]+);\s*'use client'/g, "'use client'\nimport $1;");
    
    // Fix malformed component declarations
    content = content.replace(/const\s+([A-Z][a-zA-Z0-9]*)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+\[isLoaded,\s*setIsLoaded\]\s*=\s*useState\(false\);\s*useEffect\(\(\)\s*=>\s*{\s*setIsLoaded\(true\);\s*},\s*\[\]\);\s*const\s+features\s*=\s*\[\s*{\s*icon:\s*([^,]+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[([^\]]+)\]\s*}\s*\];/g, 
      'const $1: React.FC = () => {\n  const [isLoaded, setIsLoaded] = useState(false);\n  useEffect(() => {\n    setIsLoaded(true);\n  }, []);\n  const features = [\n    {\n      icon: $2,\n      title: \'$3\',\n      description: \'$4\',\n      benefits: [$5]\n    }\n  ];');
    
    // Fix malformed JSX return statements
    content = content.replace(/return\s*\(\s*<>\s*<SEOOptimizer\s*title="([^"]+)"\s*description="([^"]+)"\s*keywords=\{\[([^\]]+)\]\}\s*canonicalUrl="([^"]+)"\s*\/>\s*<div\s*className="([^"]+)">\s*<Navigation\s*\/>\s*\{\s*\/\* Hero Section \*\/\s*\}\s*<section\s*className="([^"]+)">/g, 
      'return (\n    <>\n      <SEOOptimizer\n        title="$1"\n        description="$2"\n        keywords={[$3]}\n        canonicalUrl="$4"\n      />\n      <div className="$5">\n        <Navigation />\n        {/* Hero Section */}\n        <section className="$6">');
    
    // Fix malformed JSX elements
    content = content.replace(/<div\s*className="([^"]+)"><\/div>/g, '<div className="$1"></div>');
    content = content.replace(/<h1\s*className="([^"]+)">([^<]+)<\/h1>/g, '<h1 className="$1">$2</h1>');
    content = content.replace(/<h2\s*className="([^"]+)">([^<]+)<\/h2>/g, '<h2 className="$1">$2</h2>');
    content = content.replace(/<h3\s*className="([^"]+)">([^<]+)<\/h3>/g, '<h3 className="$1">$2</h3>');
    content = content.replace(/<p\s*className="([^"]+)">([^<]+)<\/p>/g, '<p className="$1">$2</p>');
    
    // Fix malformed array mappings
    content = content.replace(/\{([a-zA-Z]+)\.map\(\(([^,]+),\s*([^)]+)\)\s*=>\s*\(\)/g, '{$1.map(($2, $3) => (');
    
    // Fix malformed closing tags
    content = content.replace(/\)\}\);<\/div>/g, '))}\n            </div>');
    content = content.replace(/\)\}\);<\/section>/g, '))}\n          </section>');
    
    // Fix malformed CSS classes
    content = content.replace(/className="text-xl\s+m,\s*d:text-2xl/g, 'className="text-xl md:text-2xl"');
    content = content.replace(/className="grid\s+grid-cols-1\s+m,\s*d:grid-cols-2\s+l,\s*g:grid-cols-4/g, 'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"');
    content = content.replace(/className="flex\s+flex-col\s+sm:\s+flex-row/g, 'className="flex flex-col sm:flex-row"');
    content = content.replace(/className="text-5xl\s+md:\s+text-7xl/g, 'className="text-5xl md:text-7xl"');
    content = content.replace(/className="text-4xl\s+md:\s+text-5xl/g, 'className="text-4xl md:text-5xl"');
    
    // Fix malformed hover states
    content = content.replace(/hove,\s*r:bg-blue-400\s+hove,\s*r:text-slate-900/g, 'hover:bg-blue-400 hover:text-slate-900');
    content = content.replace(/hove,\s*r:bg-white\s+hove,\s*r:text-gray-900/g, 'hover:bg-white hover:text-gray-900');
    
    // Fix malformed export statements
    content = content.replace(/export\s+default\s+Page;\s*\n\}\}\}\}\}\}\}\}/g, 'export default Page;');
    
    // Fix malformed string literals
    content = content.replace(/'([^']+)',,,,/g, "'$1',");
    content = content.replace(/'([^']+)',,,/g, "'$1',");
    content = content.replace(/'([^']+)',,/g, "'$1',");
    
    // Fix malformed object properties
    content = content.replace(/'icon:\s+([^,]+),'/g, 'icon: $1,');
    content = content.replace(/'title:\s+'([^']+)',/g, "title: '$1',");
    content = content.replace(/'description:\s+'([^']+)',/g, "description: '$1',");
    
    // Fix malformed array syntax
    content = content.replace(/const\s+feature,\s*s\s*=\s*\[/g, 'const features = [');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{([^}]+)\};/g, '{$1}');
    
    // Fix malformed useEffect
    content = content.replace(/useEffect\(\(\)\s*=>\s*\{\}/g, 'useEffect(() => {');
    content = content.replace(/setIsLoaded\(true\)\s*\n\s*\},\s*\[\]\)/g, 'setIsLoaded(true);\n  }, []);');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(<\/section>/g, 'return (\n        <section>');
    content = content.replace(/return\s*\(<\/div>/g, 'return (\n          <div>');
    
    // Fix malformed conditional rendering
    content = content.replace(/\{([^}]+)\s*&&\s*\(\);/g, '{$1 && (');
    
    // Fix malformed template literals
    content = content.replace(/href=\{`mailto:([^`]+)`\}>className=/g, 'href={`mailto:$1`} className=');
    
    // Fix malformed JSX comments
    content = content.replace(/\{\s*\/\*\s*([^*]+)\s*\*\/\s*return\s*\(<\/section>/g, '        {/* $1 */}\n        <section>');
    content = content.replace(/\{\s*\/\*\s*([^*]+)\s*\*\/\s*return\s*\(<\/div>/g, '          {/* $1 */}\n          <div>');
    
    // Fix malformed closing brackets
    content = content.replace(/\)\}\);<\/div>\n/g, '))}\n          </div>\n');
    content = content.replace(/\)\}\);<\/section>\n/g, '))}\n        </section>\n');
    
    // Fix malformed JSX expressions in attributes
    content = content.replace(/className=\{`([^`]+)`\}/g, 'className={`$1`}');
    content = content.replace(/href=\{`([^`]+)`\}/g, 'href={`$1`}');
    
    // Fix malformed array destructuring
    content = content.replace(/const\s+\[([^,]+),\s*([^)]+)\]\s*=\s*useState\(([^)]+)\);\s*useEffect\(\(\)\s*=>\s*\{\s*([^}]+);\s*\},\s*\[\]\);/g, 
      'const [$1, $2] = useState($3);\n  useEffect(() => {\n    $4;\n  }, []);');
    
    // Fix malformed component props
    content = content.replace(/const\s+([A-Z][a-zA-Z0-9]*)\s*:\s*React\.FC\s*=\s*\(\s*\{\s*([^}]+)\s*\}\s*\)\s*=>\s*\{/g, 
      'const $1: React.FC<{$2}> = ({ $2 }) => {');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<SEOOptimizer\s*([^>]+)\s*\/>\s*<div\s*([^>]+)>\s*<Navigation\s*\/>/g, 
      '<>\n      <SEOOptimizer $1 />\n      <div $2>\n        <Navigation />');
    
    // Fix malformed closing tags
    content = content.replace(/<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/g, '        </div>\n      </div>\n    </>\n  );\n};');
    
    // Fix malformed export statements
    content = content.replace(/export\s+default\s+([A-Z][a-zA-Z0-9]*);\s*\n\}\}\}\}\}\}\}\}/g, 'export default $1;');
    
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
