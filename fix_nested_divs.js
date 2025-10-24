const fs = require('fs');
const path = require('path');

function fixNestedDivs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix nested divs with same className
    content = content.replace(/<div className="([^"]*)"><div className="\1">/g, '<div className="$1">');
    
    // Fix other common nested patterns
    content = content.replace(/<div className="text-center mb-16"><div className="text-center mb-16">/g, '<div className="text-center mb-16">');
    content = content.replace(/<div className="max-w-7xl mx-auto"><div className="max-w-7xl mx-auto">/g, '<div className="max-w-7xl mx-auto">');
    content = content.replace(/<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">/g, '<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed nested divs in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx files in app/components
const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  fixNestedDivs(filePath);
});

console.log('Nested div fixes completed');
