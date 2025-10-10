#!/usr/bin/env node

const fs = require('fs');

// Function to fix Navigation component
function fixNavigation() {
  const filePath = 'app/components/Navigation.tsx';
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix specific syntax issues
    const fixes = [
      // Fix semicolon instead of closing brace
      {
        pattern: /onClick={toggleAiServices};/g,
        replacement: 'onClick={toggleAiServices}'
      },
      // Fix malformed JSX attributes
      {
        pattern: /key={service\.name};/g,
        replacement: 'key={service.name}'
      },
      // Fix missing closing tags
      {
        pattern: /<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="flex items-center justify-between h-20">/g,
        replacement: '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="flex items-center justify-between h-20">'
      },
      // Fix malformed className attributes
      {
        pattern: /className="flex items-center space-x-3 group">              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">                <Brain className="w-6 h-6 text-white" />              </div>/g,
        replacement: 'className="flex items-center space-x-3 group">\n              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">\n                <Brain className="w-6 h-6 text-white" />\n              </div>'
      },
      // Fix malformed text content
      {
        pattern: /<span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>/g,
        replacement: '<span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>\n                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>'
      },
      // Fix malformed Link components
      {
        pattern: /<Link to="\/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">              Home\n            <\/Link>/g,
        replacement: '<Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">\n              Home\n            </Link>'
      }
    ];
    
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    
    // Write the fixed content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Navigation component fixed successfully');
    
  } catch (error) {
    console.error('Error fixing Navigation component:', error.message);
  }
}

// Run the fix
fixNavigation();