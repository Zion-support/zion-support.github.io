#!/usr/bin/env node

const fs = require('fs');

// Function to fix Navigation component
function fixNavigation() {
  const filePath = 'app/components/Navigation.tsx';
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix specific syntax issues one by one
    content = content.replace(/onClick={toggleAiServices};/g, 'onClick={toggleAiServices}');
    content = content.replace(/key={service\.name};/g, 'key={service.name}');
    
    // Fix malformed JSX structure
    content = content.replace(
      /<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="flex items-center justify-between h-20">/g,
      '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="flex items-center justify-between h-20">'
    );
    
    // Fix malformed Link structure
    content = content.replace(
      /<Link to="\/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">              Home\n            <\/Link>/g,
      '<Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">\n              Home\n            </Link>'
    );
    
    // Fix malformed button structure
    content = content.replace(
      /className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">                <\/button>/g,
      'className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">\n                </button>'
    );
    
    // Write the fixed content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Navigation component fixed successfully');
    
  } catch (error) {
    console.error('Error fixing Navigation component:', error.message);
  }
}

// Run the fix
fixNavigation();