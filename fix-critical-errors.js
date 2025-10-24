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

// Fix critical patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix malformed component names
    content = content.replace(/constAIContentGenerationPage:/g, 'const AIContentGenerationPage:');
    content = content.replace(/constAICRMPage:/g, 'const AICRMPage:');
    content = content.replace(/constAI([A-Z][a-zA-Z0-9]*)Page:/g, 'const AI$1Page:');
    
    // Fix malformed variable declarations
    content = content.replace(/constcontentService,\s*s\s*=\s*\[/g, 'const contentServices = [');
    content = content.replace(/constfeature,\s*s\s*=\s*\[/g, 'const features = [');
    content = content.replace(/constbenefit,\s*s\s*=\s*\[/g, 'const benefits = [');
    content = content.replace(/constpricing,\s*s\s*=\s*\[/g, 'const pricingPlans = [');
    content = content.replace(/consttestimonial,\s*s\s*=\s*\[/g, 'const testimonials = [');
    
    // Fix malformed object properties
    content = content.replace(/descriptio,\s*n:\s*'([^']+)'/g, "description: '$1'");
    content = content.replace(/pric,\s*e:\s*'([^']+)'/g, "price: '$1'");
    content = content.replace(/feature,\s*s:\s*\[([^\]]+)\]/g, 'features: [$1]');
    content = content.replace(/benefit,\s*s:\s*\[([^\]]+)\]/g, 'benefits: [$1]');
    content = content.replace(/ico,\s*n:\s*([^,]+)/g, 'icon: $1');
    
    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*'([^']+)';\s*'use client'/g, "'use client'\nimport { $1 } from '$2';");
    content = content.replace(/import\s+([^;]+);\s*'use client'/g, "'use client'\nimport $1;");
    
    // Fix malformed JSX
    content = content.replace(/className="([^"]+)"\s*><\/div>/g, 'className="$1"></div>');
    content = content.replace(/className="([^"]+)"\s*><\/h1>/g, 'className="$1"></h1>');
    content = content.replace(/className="([^"]+)"\s*><\/h2>/g, 'className="$1"></h2>');
    content = content.replace(/className="([^"]+)"\s*><\/h3>/g, 'className="$1"></h3>');
    content = content.replace(/className="([^"]+)"\s*><\/p>/g, 'className="$1"></p>');
    
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
    content = content.replace(/<>\\s*<SEOOptimizer\\s*([^>]+)\\s*\\/>\\s*<div\\s*([^>]+)>\\s*<Navigation\\s*\\/>/g, 
      '<>\\n      <SEOOptimizer $1 />\\n      <div $2>\\n        <Navigation />');
    
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
