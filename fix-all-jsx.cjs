#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixJSXFiles() {
  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx');
  
  console.log(`Found ${pageFiles.length} page files to check...`);
  
  let fixedCount = 0;
  
  for (const filePath of pageFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if the file has malformed JSX (all on one line)
      if (content.includes("export default function Page() {'  return ('    <React.Fragment>")) {
        console.log(`Fixing ${filePath}...`);
        
        // Extract the title and description from the malformed content
        const titleMatch = content.match(/<title>([^<]*)<\/title>/);
        const descMatch = content.match(/<meta name="description" content="([^"]*)" \/>/);
        const h1Match = content.match(/<h1 className="[^"]*">([^<]*)<\/h1>/);
        
        const title = titleMatch ? titleMatch[1] : 'Page - Zion Tech Group';
        const description = descMatch ? descMatch[1] : 'Professional services by Zion Tech Group.';
        const pageTitle = h1Match ? h1Match[1] : 'Page';
        
        // Create properly formatted JSX
        const fixedContent = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">${pageTitle}</h1>
          <p className="text-gray-300">Coming soon...</p>
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

fixJSXFiles().catch(console.error);