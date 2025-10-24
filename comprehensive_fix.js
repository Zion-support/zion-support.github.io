const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed className patterns
    content = content.replace(/className="\[\\^"\]\*"/g, 'className="flex flex-col sm:flex-row gap-4 justify-center"');
    content = content.replace(/className="\[\\^"\]\*"><h/g, 'className="text-center mb-16"><h');
    content = content.replace(/className="\[\\^"\]\*"><p/g, 'className="text-center mb-16"><p');
    content = content.replace(/className="\[\\^"\]\*"><div/g, 'className="text-center mb-16"><div');
    
    // Fix unclosed JSX elements
    content = content.replace(/<section className="[^"]*"><\/section>\s*<div className="[^"]*">/g, '<section className="py-20 px-4"><div className="max-w-7xl mx-auto">');
    content = content.replace(/<div className="[^"]*"><\/div>\s*<div className="[^"]*">/g, '<div className="text-center mb-16"><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">');
    
    // Fix specific patterns
    content = content.replace(/><div className="[^"]*">/g, '><div className="text-center mb-16">');
    
    // Fix unclosed divs that should contain content
    content = content.replace(/<div className="[^"]*"><\/div>\s*{/g, '<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{');
    content = content.replace(/<div className="[^"]*"><\/div>\s*<button/g, '<div className="flex flex-col sm:flex-row gap-4 justify-center"><button');
    content = content.replace(/<div className="[^"]*"><\/div>\s*<h/g, '<div className="text-center mb-16"><h');
    content = content.replace(/<div className="[^"]*"><\/div>\s*<p/g, '<div className="text-center mb-16"><p');
    
    // Fix specific malformed patterns
    content = content.replace(/<div className="[^"]*">><div className="[^"]*">/g, '<div className="text-center mb-16"><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx files in app/components
const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  fixFile(filePath);
});

console.log('Comprehensive fixes completed');
