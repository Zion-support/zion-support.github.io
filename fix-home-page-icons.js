const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/page.tsx');

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the icon usage in the home page
  const newContent = content
    .replace(/<service\.icon className="w-8 h-8 text-white" \/>/g, '{React.createElement(service.icon, { className: "w-8 h-8 text-white" })}');
  
  fs.writeFileSync(filePath, newContent);
  console.log('Fixed home page icons!');
} catch (error) {
  console.error('Error fixing home page:', error.message);
}