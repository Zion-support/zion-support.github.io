#!/usr/bin/env node

const fs = require('fs');

// Function to fix all Navigation component issues
function fixNavigationAll() {
  const filePath = 'app/components/Navigation.tsx';
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix all semicolon issues in onClick handlers
    content = content.replace(/onClick={(\w+)};/g, 'onClick={$1}');
    
    // Fix malformed JSX structure
    content = content.replace(
      /<div className="relative group">              <button/g,
      '<div className="relative group">\n              <button'
    );
    
    // Fix malformed className attributes
    content = content.replace(
      /className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medi.../g,
      'className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"'
    );
    
    // Fix malformed button structure
    content = content.replace(
      /className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medi.../g,
      'className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"'
    );
    
    // Fix malformed closing tags
    content = content.replace(
      /className={`w-4 h-4 transition-transform duration-300 \${(\w+)Open \? 'rotate-180' : ''}`}}}} \/>/g,
      'className={`w-4 h-4 transition-transform duration-300 ${$1Open ? \'rotate-180\' : \'\'}`} />'
    );
    
    // Fix malformed Link structure
    content = content.replace(
      /key={service\.name};\n    to={service\.href}/g,
      'key={service.name}\n                        to={service.href}'
    );
    
    // Write the fixed content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Navigation component fixed successfully');
    
  } catch (error) {
    console.error('Error fixing Navigation component:', error.message);
  }
}

// Run the fix
fixNavigationAll();