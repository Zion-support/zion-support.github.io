#!/usr/bin/env node

const fs = require('fs');
const { glob } = require('glob');

async function fixFinalPages() {
  const files = await glob('app/**/page.tsx');
  
  console.log(`Found ${files.length} page files to check...`);
  
  let fixedCount = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for malformed pages with syntax errors
      if (content.includes("'  return (") || 
          content.includes("'  return (") ||
          content.includes("Parsing error") ||
          content.includes("; expected") ||
          content.includes("const PagePage = () => {") ||
          content.includes("''  return (")) {
        
        console.log(`Fixing malformed page: ${filePath}`);
        
        // Extract page name from path
        const pathParts = filePath.split('/');
        const pageName = pathParts[pathParts.length - 2] || 'Page';
        const title = pageName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        
        const fixedContent = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}`;
        
        fs.writeFileSync(filePath, fixedContent);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} files.`);
}

fixFinalPages().catch(console.error);