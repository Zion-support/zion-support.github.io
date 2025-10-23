const fs = require('fs');
const path = require('path');

// Function to fix a page
function fixPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already properly formatted
    if (content.includes('return (\n    <>') && content.includes('</Head>\n\n      <div')) {
      return;
    }
    
    // Fix common syntax errors
    content = content.replace(/return \(\s*<>\s*<Head>/g, 'return (\n    <>\n      <Head>');
    content = content.replace(/<Head>\s*<title>([^<]+)<\/title>\s*<meta name="description" content="([^"]+)" \/>\s*<\/Head>\s*<div className="min-h-screen/g, '<Head>\n        <title>$1</title>\n        <meta name="description" content="$2" />\n      </Head>\n\n      <div className="min-h-screen');
    content = content.replace(/<feature>\s*<\/feature>/g, '<feature.icon className="w-8 h-8 text-white" />');
    content = content.replace(/<feature>\s*<\/feature>\s*<h3>/g, '<feature.icon className="w-8 h-8 text-white" />\n                  </div>\n                  <h3>');
    content = content.replace(/<Footer>\s*<\/Footer>>/g, '<Footer />');
    content = content.replace(/<Navigation \/>\s*<div className="min-h-screen/g, '<Navigation />\n      <div className="min-h-screen');
    content = content.replace(/<Navigation \/>\s*<main className="min-h-screen/g, '<Navigation />\n      <main className="min-h-screen');
    
    // Fix missing closing tags and JSX structure
    content = content.replace(/<div className="min-h-screen[^>]*>\s*<section[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*<h1>([^<]+)<\/h1>\s*<p>([^<]+)<\/p>/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">$1</h1>\n            <p className="text-xl text-gray-300 mb-8">$2</p>');
    
    // Fix missing closing div tags
    content = content.replace(/<h3>\{feature\.title\}<\/h3>\s*<p>\{feature\.description\}<\/p>/g, '<h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>\n                  <p className="text-gray-300 mb-4">{feature.description}</p>');
    
    // Fix missing closing tags for feature benefits
    content = content.replace(/<feature\.icon className="w-8 h-8 text-white" \/>\s*<h3>\{feature\.title\}<\/h3>\s*<p>\{feature\.description\}<\/p>/g, '<feature.icon className="w-8 h-8 text-white" />\n                  </div>\n                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>\n                  <p className="text-gray-300 mb-4">{feature.description}</p>');
    
    // Fix missing closing tags for benefits
    content = content.replace(/<CheckCircle>\s*<\/CheckCircle>div>/g, '<CheckCircle className="w-8 h-8 text-white" />\n                  </div>');
    content = content.replace(/<CheckCircle>\s*<\/CheckCircle>li>/g, '<CheckCircle className="w-4 h-4 text-green-400 mr-2" />\n                        {benefit}\n                      </li>');
    
    // Fix missing closing tags for Footer
    content = content.replace(/<Footer>\s*<\/Footer>>/g, '<Footer />');
    
    // Fix missing closing tags for Navigation
    content = content.replace(/<Navigation \/>\s*<div className="min-h-screen/g, '<Navigation />\n      <div className="min-h-screen');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page.tsx files
const getAllPages = (dir) => {
  let pages = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      pages = pages.concat(getAllPages(filePath));
    } else if (file === 'page.tsx') {
      pages.push(filePath);
    }
  }
  
  return pages;
};

// Fix all pages
const allPages = getAllPages('app');
console.log(`Found ${allPages.length} pages to fix`);

allPages.forEach(fixPage);

console.log('All pages fixed!');