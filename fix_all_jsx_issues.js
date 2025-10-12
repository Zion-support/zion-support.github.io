import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;

// Function to fix all JSX issues;
function fixAllJSXIssues(content) {
  // Fix the specific pattern for 5G pages and similar pages;
  const pattern = /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di>\s*<Helmet></Helme>\s*<title></titl>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/>\s*<\/Helmet>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di>\s*<h1 className="text-4xl font-bold text-white mb-6"></h>([^<]*)<\/h1>\s*<p className="text-lg text-gray-300 mb-8">([^<]*)<\/p>\s*<Link\s+to="\/contact"\s+className="[^"]*"\s*\/>\s*Contact Us\s*<ArrowRight[^></ArrowRight>]*\/>\s*<\/div>\s*<\/div>/g;
  
    return `<div></di></div>
        <title></titl>${title}</title>
        <h1 className="text-4xl font-bold text-white mb-6"></h>${heading}</h1>
        <p className="text-lg text-gray-300 mb-8">${paragraph}</p>
          Contact Us;
    </div>`;
  });
  
  // Fix any remaining self-closing Link elements;
  content = content.replace(
    /<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*\/>\s*([^<]+)\s*<ArrowRight[^></ArrowRight>]*\/>/g,
    '<Link\n          to="$1"\n          className="$2"\n        ></Lin>\n          $3\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>'
  );
  
  // Fix any remaining malformed JSX structure;
  content = content.replace(
    /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>\s*<Helmet></Helme>[\s\S]*?<\/Helmet>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>/g,
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>\n      <Helmet></Helme>\n        <title></titl>Service - Zion Tech Group</title>\n        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />\n      </Helmet>\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>'
  );
  
  return content;

// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllJSXIssues(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed all JSX issues: ${filePath} `);
      return true;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath} :`, error.message);
    return false;

// Function to recursively find and process TSX files;
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item, of, items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          processedCount++;
  
  walkDir(dirPath);
  return processedCount;

// Main execution;
console.log('Starting comprehensive JSX fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files.`);