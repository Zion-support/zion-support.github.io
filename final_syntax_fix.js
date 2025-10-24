<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Function to fix specific syntax issues
function fixSpecificSyntax(content) {
  // Fix function declarations with spaces
  content = content.replace(/constAI3DGenerationPage:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const Page: React.FC = () => {');
  content = content.replace(/constAIMegaTrends20252026:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const Page: React.FC = () => {');
  
  // Fix array declarations with spaces
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
  
  // Fix object property syntax
  content = content.replace(/features:\s*\[([^\]]+)\]\s*popular:/g, 'features: [$1],\n      popular:');
  content = content.replace(/description:\s*'([^']+)'\s*benefits:/g, 'description: "$1",\n      benefits:');
  content = content.replace(/description:\s*"([^"]+)"\s*benefits:/g, 'description: "$1",\n      benefits:');
  content = content.replace(/title:\s*'([^']+)'\s*description:/g, 'title: "$1",\n      description:');
  content = content.replace(/title:\s*"([^"]+)"\s*description:/g, 'title: "$1",\n      description:');
  content = content.replace(/name:\s*'([^']+)'\s*price:/g, 'name: "$1",\n      price:');
  content = content.replace(/name:\s*"([^"]+)"\s*price:/g, 'name: "$1",\n      price:');
  content = content.replace(/price:\s*'([^']+)'\s*period:/g, 'price: "$1",\n      period:');
  content = content.replace(/price:\s*"([^"]+)"\s*period:/g, 'price: "$1",\n      period:');
  content = content.replace(/period:\s*'([^']+)'\s*features:/g, 'period: "$1",\n      features:');
  content = content.replace(/period:\s*"([^"]+)"\s*features:/g, 'period: "$1",\n      features:');
  
  // Fix missing commas in arrays
  content = content.replace(/^\s*"([^"]+)"\s*$/gm, '    "$1",');
  content = content.replace(/^\s*'([^']+)'\s*$/gm, '    "$1",');
  
  // Fix array closing
  content = content.replace(/^\s*\]\s*$/gm, '  ]');
  
  // Fix duplicate function declarations
  content = content.replace(/const Page = \(\) => \{\s*\}\s*return \(\);\s*<><SEOOptimizer/g, 'const Page = () => {\n  return (\n    <>\n      <SEOOptimizer');
  
  // Fix JSX syntax
  content = content.replace(/<><SEOOptimizertitle=&quot;([^&]+)&quot;/g, '<>\n      <SEOOptimizer\n        title="$1"');
  content = content.replace(/<><SEOOptimizertitle\s*=\s*&quot;([^&]+)&quot;/g, '<>\n      <SEOOptimizer\n        title="$1"');
  
  // Fix attribute syntax
  content = content.replace(/title=&quot;([^&]+)&quot;/g, 'title="$1"');
  content = content.replace(/description=&quot;([^&]+)&quot;/g, 'description="$1"');
  content = content.replace(/keywords\s*=\s*\{/g, 'keywords={');
  content = content.replace(/canonicalUrl=&quot;([^&]+)&quot;/g, 'canonicalUrl="$1"');
  content = content.replace(/className=&quot;([^&]+)&quot;/g, 'className="$1"');
  content = content.replace(/href=&quot;([^&]+)&quot;/g, 'href="$1"');
  content = content.replace(/src=&quot;([^&]+)&quot;/g, 'src="$1"');
  
  // Fix missing semicolons
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
          
          console.log(`Fixing specific syntax in: ${filePath}`);
          const fixedContent = fixSpecificSyntax(content);
          fs.writeFileSync(filePath, fixedContent, 'utf8');
        }
      } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
      }
    }
  });
}

// Process the src directory
console.log('Starting final syntax fix...');
processFiles('./src');
console.log('Finished final syntax fix.');
=======
const fs = require('fs''
const path = require('path''
  fixed = fixed.replace(/"openGraph": \{\}\n\s*"title": /g, '"openGraph": {\n    title:'',
  fixed = fixed.replace(/const features = \[\n\s*\{\}\n\s*"icon": /g, 'const features = [\n    {\n      "icon": '',
  fixed = fixed.replace(/export default function \w+\(\{\}\n\s*children\}: \{\}\n\s*"children": React\.ReactNode;/g, 'export default function $1({\n  children\n}: {\n  "children": React.ReactNode;'',
  fixed = fixed.replace(/= \{\}\n\s*"title": /g, '= {\n  "title": '',
  fixed = fixed.replace(/= \{\}\n\s*"icon": /g, '= {\n  "icon": '',
  fixed = fixed.replace(/= \[\]\n\s*\{\}\n\s*"icon": /g, '= [\n    {\n      "icon": '',
    return match.replace('import {}', 'import {''
  fixed = fixed.replace(/"url": '[^']+'';,
    return match.replace('}}}', '\n  }\n};''
  fixed = fixed.replace(/"url": '[^']+'',
    return match.replace('}}', '\n  }''
    return match.replace('},\n    {}\n      "icon": ', '},\n    {\n      "icon": '',}
    const content = fs.readFileSync(filePath, 'utf8''
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules''
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx''
console.log('Fixing final syntax errors...''
processDirectory('/workspace/app''
processDirectory('/workspace/src''
console.log('Final syntax error fixing complete!''
>>>>>>> origin/main
