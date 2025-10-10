#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with remaining metadata issues
const files = execSync("find /workspace/app -name '*.tsx' -o -name '*.ts' | xargs grep -l 'export const metadata'", { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

// // Function to process a single file
function processFile(filePath) {
  try {
    // Extract metadata information
    
    if (metadataMatch) {
      try {
        // Parse the metadata object (this is a simple parser)
        
        if (titleMatch) metadata.title = titleMatch[1];
        if (descMatch) metadata.description = descMatch[1];
        if (typeMatch) metadata.type = typeMatch[1];
        if (urlMatch) metadata.url = urlMatch[1];
      } catch (e) {
        // If parsing fails, use defaults
        metadata = {
          title: 'Zion Tech Group',
          description: 'Advanced AI and IT Solutions'
        };
      }
    }
    
    // Remove the metadata export
    content = content.replace(/export const metadata = \{[\s\S]*?\};/g, '');
    
    // Add React import if not present
    if (!content.includes("import React from 'react';")) {
      content = content.replace(//, "import React from 'react';\n");
    }
    
    // Add Helmet import if not present
    if (!content.includes("react-helmet-async")) {
      content = content.replace(/import React from 'react';/, "import React from 'react';\nimport { Helmet } from 'react-helmet-async';");
    }
    
    // Convert function declaration to arrow function
    content = content.replace(/export default function (\w+)\(\) \{/, 'const $1: React.FC = () => {');
    
    // Add Helmet component at the beginning of the return statement
    if (returnMatch) {
      
      
      content = content.replace(/(\s+)return \(\s*<([^>]+)>/, helmetComponent);
    }
    
    // Close the component properly
    content = content.replace(/^\s*}\s*$/, '  );\n};\n\nexport default Page;');
    
    // Fix any remaining syntax issues
}}