const fs = require('fs');
const path = require('path');

// List of files with JSX errors (from the type check output)
const problematicFiles = [
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-generation-pro/page.tsx',
  'app/ai-content-generator/page.tsx',
  'app/ai-content-moderation/page.tsx',
  'app/ai-content-moderation-pro/page.tsx',
  'app/ai-conversational-ai/page.tsx',
  'app/ai-conversation-analytics/page.tsx'
];

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX syntax errors
    content = content
      // Fix malformed className attributes
      .replace(/className="w-5h-5ml-2"/g, 'className="w-5 h-5 ml-2"')
      .replace(/className="w-5h-5ml-2"/g, 'className="w-5 h-5 ml-2"')
      .replace(/className="text-2 xl/g, 'className="text-2xl')
      .replace(/className="min-h-screenbg-gradient-to-br/g, 'className="min-h-screen bg-gradient-to-br')
      .replace(/className="bg-gradient-to-rfrom-/g, 'className="bg-gradient-to-r from-')
      .replace(/className="borderborder-/g, 'className="border border-')
      .replace(/className="hover:from-cyan-600 hover:to-purple-700transition-all/g, 'className="hover:from-cyan-600 hover:to-purple-700 transition-all')
      .replace(/className="hover:bg-cyan-400 hover:text-slate-900transition-all/g, 'className="hover:bg-cyan-400 hover:text-slate-900 transition-all')
      
      // Fix malformed JSX elements
      .replace(/<h1 className="w-5h-5ml-2" \/>\s*<span className="w-5h-5ml-2" \/>([^<]+)<\/span>\s*<\/h1>/g, '<h1 className="text-4xl font-bold text-white mb-4">$1</h1>')
      .replace(/<p className="w-5h-5ml-2">([^<]+)<\/p>/g, '<p className="text-xl text-gray-300 mb-6">$1</p>')
      .replace(/<button className="w-5h-5ml-2">([^<]+)<\/button>/g, '<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">$1</button>')
      
      // Fix missing imports
      .replace(/import React from 'react';\n'use client';/g, "import React from 'react';\nimport { Helmet } from 'react-helmet-async';\n'use client';")
      
      // Fix malformed div structures
      .replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">')
      .replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>')
      
      // Fix missing closing tags
      .replace(/<h2 className="text-2 xl font-bold text-white mb-4"\s*>/g, '<h2 className="text-2xl font-bold text-white mb-4">')
      
      // Clean up extra whitespace and malformed elements
      .replace(/\s+<span className="w-5h-5ml-2" \/>/g, '')
      .replace(/<span className="w-5h-5ml-2" \/>\s*/g, '')
      
      // Fix any remaining malformed JSX
      .replace(/<([^>]+) className="w-5h-5ml-2" \/>/g, '<$1 className="w-5 h-5 ml-2" />')
      .replace(/<([^>]+) className="w-5h-5ml-2">/g, '<$1 className="w-5 h-5 ml-2">')
      
      // Ensure proper JSX structure
      .replace(/(<div[^>]*>)\s*<h1[^>]*>([^<]+)<\/h1>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>\s*<div[^>]*>\s*<h2[^>]*>([^<]+)<\/h2>\s*<p[^>]*>([^<]+)<\/p>\s*<button[^>]*>([^<]+)<\/button>\s*<\/div>/g, 
        '$1\n        <div className="max-w-7xl mx-auto text-center">\n          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">$2</h1>\n          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$3</p>\n        </div>\n      </div>\n      <div className="py-20 px-4">\n        <div className="max-w-7xl mx-auto text-center">\n          <h2 className="text-4xl font-bold text-white mb-6">$4</h2>\n          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$5</p>\n          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">$6</button>\n        </div>');

    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all problematic files
problematicFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixJSXFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('JSX fixes completed!');