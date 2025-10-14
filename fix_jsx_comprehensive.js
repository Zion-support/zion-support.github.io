import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;
// Function to fix comprehensive JSX issues;
function fixComprehensiveJSX(content) {
  // Fix the specific pattern where we have duplicate className on inner div;
  content = content.replace(
    /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<Helmet>[\s\S]*?<\/Helmet>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/g,
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n      <Helmet>\n        <title>5G Data Analytics - Zion Tech Group</title>\n        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />\n      </Helmet>\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">';
  );
  // Fix self-closing Link elements that should contain text;
  content = content.replace(
    /<Link\s+to="[^"]*"\s+className="[^"]*"\s*\/>\s*([^<]+)\s*<ArrowRight[^>]*\/>/g,
    '<Link\n          to="$1"\n          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"\n        >\n          $2\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>';
  );
  // Fix the specific Link pattern more precisely;
  content = content.replace(
    /<Link\s+to="\/contact"\s+className="[^"]*"\s*\/>\s*Contact Us\s*<ArrowRight[^>]*\/>/g,
    '<Link\n          to="/contact"\n          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"\n        >\n          Contact Us\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>';
  );
  // Fix any remaining self-closing Link elements;
  content = content.replace(
    /<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*\/>\s*([^<]+)\s*<ArrowRight[^>]*\/>/g,
    '<Link\n          to="$1"\n          className="$2"\n        >\n          $3\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>';
  );
  return content;
// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
const fixedContent = fixComprehensiveJSX(content);
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      // return true;
    return false;
  } catch (error) {
    // return false;
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
// const processedCount = processDirectory('./app');
// 