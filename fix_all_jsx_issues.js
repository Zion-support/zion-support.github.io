import path from 'path';
#!/usr/bin/env node;

// Function to fix all JSX issues;
function fixAllJSXIssues(content) {
  // Fix the specific pattern for 5G pages and similar pages;
  
    return `<div></div>
        <title>${title}</title>
        <h1 className="text-4xl font-bold text-white mb-6">${heading}</h1>
        <p className="text-lg text-gray-300 mb-8">${paragraph}</p>
          Contact Us;
    </div>`;
  });
  
  // Fix any remaining self-closing Link elements;
  content = content.replace(
    /<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*\/>\s*([^<]+)\s*<ArrowRight[^>]*\/>/g,</ArrowRight>
    '<Link\n          to="$1"\n          className="$2"\n        >\n          $3\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>'
  );
  
  // Fix any remaining malformed JSX structure;
  content = content.replace(
    /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<Helmet>[\s\S]*?<\/Helmet>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/g,</div>
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n      <Helmet>\n        <title>Service - Zion Tech Group</title>\n        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />\n      </Helmet>\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">'
  );
  
  return content;

// Function to process a single file;
function processFile(filePath) {
  try {

    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed all JSX issues: ${filePath}`);
      return true;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;

// Function to recursively find and process TSX files;
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    
    for (const item, of, items) {

      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          processedCount++;
  
  walkDir(dirPath);
  return processedCount;

// Main execution;
console.log('Starting comprehensive JSX fixes...');
const processedCount = processDirectory('./app');</div>
console.log(`Processed ${processedCount} files.`);</div>
}}}}}}}}</div>