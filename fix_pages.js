const fs = require('fs');
const path = require('path');

// List of pages that need fixing
const pagesToFix = [
  'app/ai-audio-processor-improved/page.tsx',
  'app/ai-audio-processor/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-automation/page.tsx'
];

// Function to fix a page
function fixPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content.replace(/return \(\s*<>\s*<Head>/g, 'return (\n    <>\n      <Head>');
    content = content.replace(/<Head>\s*<title>([^<]+)<\/title>\s*<meta name="description" content="([^"]+)" \/>\s*<\/Head>\s*<div className="min-h-screen/g, '<Head>\n        <title>$1</title>\n        <meta name="description" content="$2" />\n      </Head>\n\n      <div className="min-h-screen');
    content = content.replace(/<feature>\s*<\/feature>/g, '<feature.icon className="w-8 h-8 text-white" />');
    content = content.replace(/<feature>\s*<\/feature>\s*<h3>/g, '<feature.icon className="w-8 h-8 text-white" />\n                  </div>\n                  <h3>');
    content = content.replace(/<Footer>\s*<\/Footer>>/g, '<Footer />');
    content = content.replace(/<Navigation \/>\s*<div className="min-h-screen/g, '<Navigation />\n      <div className="min-h-screen');
    
    // Fix missing closing tags
    content = content.replace(/<div className="min-h-screen[^>]*>\s*<section[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*<h1>([^<]+)<\/h1>\s*<p>([^<]+)<\/p>/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">$1</h1>\n            <p className="text-xl text-gray-300 mb-8">$2</p>');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all pages
pagesToFix.forEach(fixPage);

console.log('All pages fixed!');