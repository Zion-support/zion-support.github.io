import fs from 'fs';
import path from 'path';

// Function to get all page.tsx files
function getAllPageFiles() {
  const pageFiles = [];
  
  function findPageFiles(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findPageFiles(fullPath);
      } else if (item === 'page.tsx') {
        pageFiles.push(fullPath);
      }
    }
  }
  
  findPageFiles('app');
  return pageFiles;
}

// Function to check if a file is corrupted
function isCorrupted(content) {
  return content.includes('>>') || 
         content.includes('React.Fragment<') ||
         content.includes('</Helmet>>>>>') ||
         content.includes('};>>>>') ||
         content.includes('};};') ||
         content.includes(');};') ||
         content.includes('</div') ||
         content.includes('</a') ||
         content.includes('</p') ||
         content.includes('</h1') ||
         content.includes('</title') ||
         content.includes('</meta') ||
         content.includes('className="text-4xl font-bold text-white mb-8"') ||
         content.includes('className="text-gray-300 text-lg">>>') ||
         content.includes('const PagePage = () = {') ||
         content.includes('const Page = () = {') ||
         content.includes('export default function Page() {') && content.includes('};};') ||
         content.includes('export default function Page() {') && content.includes('};>>>>');
}

// Function to fix a corrupted page
function fixPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!isCorrupted(content)) {
      return; // Skip if not corrupted
    }
    
    // Extract page name from path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2]; // Get directory name
    const title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Create proper page content
    const fixedContent = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
        </div>
      </div>
    </React.Fragment>
  );
}`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files and fix corrupted ones
const allPageFiles = getAllPageFiles();
let fixedCount = 0;

allPageFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (isCorrupted(content)) {
      fixPage(filePath);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} corrupted pages out of ${allPageFiles.length} total pages.`);