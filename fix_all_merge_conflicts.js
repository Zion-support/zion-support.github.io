<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Function to fix merge conflict markers and syntax errors
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD\n/g, '');
  content = content.replace(/=======\n/g, '');
  content = content.replace(/>>>>>>> cursor\/fix-errors-and-merge-to-main-[a-f0-9]+\n/g, '');
  
  // Fix common syntax issues
  content = content.replace(/const\s*\$1:\s*React\.FC\s*=\s*\(\)\s*=>\s*{;/g, 'const Page: React.FC = () => {');
  content = content.replace(/const\s*AICRMPage:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const Page: React.FC = () => {');
  content = content.replace(/const\s*AICybersecurityPage:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const Page: React.FC = () => {');
  
  // Fix array syntax issues
  content = content.replace(/const\s*features\s*=\s*\[\s*;/g, 'const features = [');
  content = content.replace(/const\s*capabilities\s*=\s*\[\s*;/g, 'const capabilities = [');
  content = content.replace(/const\s*pricing\s*=\s*\[\s*;/g, 'const pricing = [');
  content = content.replace(/const\s*pricingPlans\s*=\s*\[\s*;/g, 'const pricingPlans = [');
  content = content.replace(/const\s*testimonials\s*=\s*\[\s*;/g, 'const testimonials = [');
  content = content.replace(/const\s*stats\s*=\s*\[\s*;/g, 'const stats = [');
  content = content.replace(/const\s*threats\s*=\s*\[\s*;/g, 'const threats = [');
  
  // Fix object syntax issues
  content = content.replace(/\{\s*icon:\s*(\w+)\s*title:/g, '{\n      icon: $1,\n      title:');
  content = content.replace(/\{\s*name:\s*(\w+)\s*price:/g, '{\n      name: $1,\n      price:');
  content = content.replace(/\{\s*title:\s*(\w+)\s*description:/g, '{\n      title: $1,\n      description:');
  
  // Fix missing commas and semicolons
  content = content.replace(/(\w+)\s*title:/g, '$1,\n      title:');
  content = content.replace(/(\w+)\s*description:/g, '$1,\n      description:');
  content = content.replace(/(\w+)\s*benefits:/g, '$1,\n      benefits:');
  content = content.replace(/(\w+)\s*features:/g, '$1,\n      features:');
  content = content.replace(/(\w+)\s*icon:/g, '$1,\n      icon:');
  content = content.replace(/(\w+)\s*stats:/g, '$1,\n      stats:');
  content = content.replace(/(\w+)\s*price:/g, '$1,\n      price:');
  content = content.replace(/(\w+)\s*period:/g, '$1,\n      period:');
  content = content.replace(/(\w+)\s*popular:/g, '$1,\n      popular:');
  content = content.replace(/(\w+)\s*number:/g, '$1,\n      number:');
  content = content.replace(/(\w+)\s*label:/g, '$1,\n      label:');
  content = content.replace(/(\w+)\s*company:/g, '$1,\n      company:');
  content = content.replace(/(\w+)\s*role:/g, '$1,\n      role:');
  content = content.replace(/(\w+)\s*content:/g, '$1,\n      content:');
  content = content.replace(/(\w+)\s*rating:/g, '$1,\n      rating:');
  
  // Fix array closing brackets
  content = content.replace(/\s*\]\s*;/g, '\n  ]');
  content = content.replace(/\s*\]\s*$/g, '\n  ]');
  
  // Fix function declarations
  content = content.replace(/const\s*Page\s*=\s*\(\)\s*=>\s*\{\s*\};\s*return\s*\(\)/g, 'const Page = () => {\n  return (');
  content = content.replace(/return\s*\(\)\s*$/g, 'return (');
  
  // Fix JSX syntax issues
  content = content.replace(/<div\s+className="([^"]*)"\s*><\/div>/g, '<div className="$1">');
  content = content.replace(/<section\s+className="([^"]*)"\s*><\/section>/g, '<section className="$1">');
  content = content.replace(/<main\s+className="([^"]*)"\s*><\/main>/g, '<main className="$1">');
  content = content.replace(/<ul\s+className="([^"]*)"\s*><\/ul>/g, '<ul className="$1">');
  content = content.replace(/<button\s+className="([^"]*)"\s*><\/button>/g, '<button className="$1">');
  content = content.replace(/<a\s+href="([^"]*)"\s*><\/a>/g, '<a href="$1">');
  
  // Fix missing closing tags
  content = content.replace(/(<[^>]+>)\s*$/gm, '$1');
  
  // Fix attribute syntax
  content = content.replace(/className="([^"]*)"\s*><\/div>/g, 'className="$1">');
  content = content.replace(/href="([^"]*)"\s*><\/a>/g, 'href="$1">');
  
  // Fix return statement issues
  content = content.replace(/return\s*\(\s*\)\s*$/g, 'return (');
  
  // Fix export statements
  content = content.replace(/export\s+default\s+Page;\s*$/g, 'export default Page;');
  content = content.replace(/export\s+default\s+AICRMPage;\s*$/g, 'export default Page;');
  content = content.replace(/export\s+default\s+AICybersecurityPage;\s*$/g, 'export default Page;');
  
  // Fix missing semicolons and commas
  content = content.replace(/(\w+)\s*\}\s*$/g, '$1\n  }');
  content = content.replace(/(\w+)\s*\]\s*$/g, '$1\n  ]');
  
  // Fix spacing issues
  content = content.replace(/\s+$/gm, '');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
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
        
        // Check if file has merge conflicts or syntax issues
        if (content.includes('<<<<<<< HEAD') || 
            content.includes('=======') || 
            content.includes('>>>>>>> cursor/') ||
            content.includes('const $1:') ||
            content.includes('constAICRMPage:') ||
            content.includes('constAICybersecurityPage:')) {
          
          console.log(`Fixing file: ${filePath}`);
          const fixedContent = fixMergeConflicts(content);
          fs.writeFileSync(filePath, fixedContent, 'utf8');
        }
      } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
      }
    }
  });
}

// Process the src directory
console.log('Starting to fix merge conflicts and syntax errors...');
processFiles('./src');
console.log('Finished fixing merge conflicts and syntax errors.');
=======
const fs = require('fs''
const path = require('path''
  content = content.replace(/[\s\S]*?[\s\S]*?  content = content.replace(/const\s+\$"1": \s*React\.FC\s*=\s*\(\)\s*=>\s*{;?/g, 'const "Page": React.FC = () => {'',
  content = content.replace(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{;?/g, 'const "Page": React.FC = () => {'',
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;\s*/g, 'const $1 = [''
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*/g, 'const $1 = [''
  content = content.replace(/\{\s*"icon": \s*(\w+)\s*title:/g, '{\n      "icon": $1,\n      "title": '',
  content = content.replace(/\{\s*"name": \s*(\w+)\s*price:/g, '{\n      "name": $1,\n      "price": '',
  content = content.replace(/\{\s*"title": \s*(\w+)\s*description:/g, '{\n      "title": $1,\n      "description": '',
  content = content.replace(/(\w+)\s*"title": /g, '$1,\n      "title": '',
  content = content.replace(/(\w+)\s*"description": /g, '$1,\n      "description": '',
  content = content.replace(/(\w+)\s*"benefits": /g, '$1,\n      "benefits": '',
  content = content.replace(/(\w+)\s*"features": /g, '$1,\n      "features": '',
  content = content.replace(/(\w+)\s*"price": /g, '$1,\n      "price": '',
  content = content.replace(/(\w+)\s*"period": /g, '$1,\n      "period": '',
  content = content.replace(/(\w+)\s*"popular": /g, '$1,\n      "popular": '',
  content = content.replace(/(\w+)\s*"icon": /g, '$1,\n      "icon": '',
  content = content.replace(/(\w+)\s*"stats": /g, '$1,\n      "stats": '',
  content = content.replace(/(\w+)\s*"role": /g, '$1,\n      "role": '',
  content = content.replace(/(\w+)\s*"company": /g, '$1,\n      "company": '',
  content = content.replace(/(\w+)\s*"content": /g, '$1,\n      "content": '',
  content = content.replace(/(\w+)\s*"rating": /g, '$1,\n      "rating": '',
  content = content.replace(/(\w+)\s*"number": /g, '$1,\n      "number": '',
  content = content.replace(/(\w+)\s*"label": /g, '$1,\n      "label": '',
  content = content.replace(/\[\s*(\w+)\s*\]/g, '[\n        $1\n      ]''
  content = content.replace(/\[\s*'([^']+)'\s*\]/g, '[\n        \'$1\'\n      ]''
  content = content.replace(/return\s*\(\s*\)\s*{/g, 'return (''
  content = content.replace(/return\s*\(\s*\)\s*<[^>]*>/g, 'return (''
  content = content.replace(/<(\w+)\s*className="([^"]*)"\s*>\s*<\/\1>/g, ''
  content = content.replace(/<(\w+)\s*className="([^"]*)"\s*>\s*<\/\1>/g, ''
>>>>>>> origin/main
