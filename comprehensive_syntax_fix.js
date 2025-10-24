<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Function to fix comprehensive syntax issues
function fixSyntaxIssues(content) {
  // Fix function declarations
  content = content.replace(/constAI3DGenerationPage:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const Page: React.FC = () => {');
  content = content.replace(/constAIMegaTrends20252026:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const Page: React.FC = () => {');
  content = content.replace(/constAIMegaTrends20252026:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const Page: React.FC = () => {');
  
  // Fix array declarations
  content = content.replace(/constfeatures=\s*\[\s*$/gm, 'const features = [');
  content = content.replace(/constbenefits=\s*\[\s*$/gm, 'const benefits = [');
  content = content.replace(/constpricingPlans=\s*\[\s*$/gm, 'const pricingPlans = [');
  content = content.replace(/constcapabilities=\s*\[\s*$/gm, 'const capabilities = [');
  content = content.replace(/consttestimonials=\s*\[\s*$/gm, 'const testimonials = [');
  content = content.replace(/conststats=\s*\[\s*$/gm, 'const stats = [');
  content = content.replace(/constthreats=\s*\[\s*$/gm, 'const threats = [');
  content = content.replace(/constpricing=\s*\[\s*$/gm, 'const pricing = [');
  content = content.replace(/constservices=\s*\[\s*$/gm, 'const services = [');
  content = content.replace(/constsolutions=\s*\[\s*$/gm, 'const solutions = [');
  content = content.replace(/consttools=\s*\[\s*$/gm, 'const tools = [');
  content = content.replace(/consttechnologies=\s*\[\s*$/gm, 'const technologies = [');
  content = content.replace(/constmodules=\s*\[\s*$/gm, 'const modules = [');
  content = content.replace(/constfeatures=\s*\[\s*$/gm, 'const features = [');
  
  // Fix string array items
  content = content.replace(/^\s*'([^']+)'\s*$/gm, '    "$1",');
  content = content.replace(/^\s*"([^"]+)"\s*$/gm, '    "$1",');
  
  // Fix object syntax
  content = content.replace(/\{\s*name:\s*'([^']+)'\s*price:\s*'([^']+)'/g, '{\n      name: "$1",\n      price: "$2"');
  content = content.replace(/\{\s*name:\s*"([^"]+)"\s*price:\s*"([^"]+)"/g, '{\n      name: "$1",\n      price: "$2"');
  content = content.replace(/\{\s*title:\s*'([^']+)'\s*description:\s*'([^']+)'/g, '{\n      title: "$1",\n      description: "$2"');
  content = content.replace(/\{\s*title:\s*"([^"]+)"\s*description:\s*"([^"]+)"/g, '{\n      title: "$1",\n      description: "$2"');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*'([^']+)'\s*(\w+):/g, '$1: "$2",\n      $3:');
  content = content.replace(/(\w+):\s*"([^"]+)"\s*(\w+):/g, '$1: "$2",\n      $3:');
  content = content.replace(/(\w+):\s*(\d+)\s*(\w+):/g, '$1: $2,\n      $3:');
  content = content.replace(/(\w+):\s*(\w+)\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix array closing
  content = content.replace(/^\s*\]\s*$/gm, '  ]');
  
  // Fix function calls and returns
  content = content.replace(/useEffect\(\(\)\s*=>\s*\{\s*$/gm, 'useEffect(() => {');
  content = content.replace(/setIsLoaded\(true\)\s*$/gm, '    setIsLoaded(true);');
  content = content.replace(/\}, \[\]\)\s*$/gm, '  }, []);');
  
  // Fix duplicate function declarations
  content = content.replace(/const Page = \(\) => \{\s*\}\s*return \(\);\s*<><SEOOptimizer/g, 'const Page = () => {\n  return (\n    <>\n      <SEOOptimizer');
  content = content.replace(/const Page = \(\) => \{\s*\}\s*return \(\);\s*<><SEOOptimizer/g, 'const Page = () => {\n  return (\n    <>\n      <SEOOptimizer');
  
  // Fix JSX syntax
  content = content.replace(/<><SEOOptimizertitle=&quot;([^&]+)&quot;/g, '<>\n      <SEOOptimizer\n        title="$1"');
  content = content.replace(/<><SEOOptimizertitle\s*=\s*&quot;([^&]+)&quot;/g, '<>\n      <SEOOptimizer\n        title="$1"');
  
  // Fix attribute syntax
  content = content.replace(/title=&quot;([^&]+)&quot;/g, 'title="$1"');
  content = content.replace(/description=&quot;([^&]+)&quot;/g, 'description="$1"');
  content = content.replace(/keywords\s*=\s*\{/g, 'keywords={');
  content = content.replace(/canonicalUrl=&quot;([^&]+)&quot;/g, 'canonicalUrl="$1"');
  
  // Fix className attributes
  content = content.replace(/className=&quot;([^&]+)&quot;/g, 'className="$1"');
  content = content.replace(/href=&quot;([^&]+)&quot;/g, 'href="$1"');
  content = content.replace(/src=&quot;([^&]+)&quot;/g, 'src="$1"');
  
  // Fix closing tags
  content = content.replace(/\/><\/div>/g, '/>\n      </div>');
  content = content.replace(/\/><\/section>/g, '/>\n      </section>');
  content = content.replace(/\/><\/main>/g, '/>\n      </main>');
  content = content.replace(/\/><\/ul>/g, '/>\n      </ul>');
  content = content.replace(/\/><\/button>/g, '/>\n      </button>');
  content = content.replace(/\/><\/a>/g, '/>\n      </a>');
  
  // Fix missing semicolons
  content = content.replace(/^\s*(\w+)\s*$/gm, '    $1;');
  content = content.replace(/^\s*(\w+)\s*$/gm, '    $1;');
  
  // Fix export statements
  content = content.replace(/export\s+default\s+AI3DGenerationPage;/g, 'export default Page;');
  content = content.replace(/export\s+default\s+AIMegaTrends20252026;/g, 'export default Page;');
  
  // Fix return statements
  content = content.replace(/return\s*\(\s*;\s*$/gm, 'return (');
  content = content.replace(/return\s*\(\s*\)\s*$/gm, 'return (');
  
  // Fix missing closing braces
  content = content.replace(/^\s*\}\s*$/gm, '  }');
  
  // Clean up extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/^\s+$/gm, '');
  
  return content;
}

// Function to process all TypeScript/TSX files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file needs fixing
        if (content.includes('constAI3DGenerationPage:') ||
            content.includes('constAIMegaTrends20252026:') ||
            content.includes('constfeatures=') ||
            content.includes('constbenefits=') ||
            content.includes('constpricingPlans=') ||
            content.includes('title=&quot;') ||
            content.includes('description=&quot;') ||
            content.includes('className=&quot;')) {
          
          console.log(`Fixing syntax in: ${filePath}`);
          const fixedContent = fixSyntaxIssues(content);
          fs.writeFileSync(filePath, fixedContent, 'utf8');
        }
      } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
      }
    }
  });
}

// Process the src directory
console.log('Starting comprehensive syntax fix...');
processFiles('./src');
console.log('Finished comprehensive syntax fix.');
=======
const fs = require('fs''
const path = require('path''
  content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const "Page": React.FC = () => {'',
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const Page = () => {''
    if (arrayContent.trim() === '''}
    const items = arrayContent.split('\n''
      if (item && !item.startsWith("'") && !item.startsWith(''
      if (item && !item.startsWith("'") && !item.startsWith(''
>>>>>>> origin/main
