import fs from 'fs';
import { execSync } from 'child_process';
#!/usr/bin/env node




// Get all files with remaining metadata issues
const files = execSync("find /workspace/app -name '*.tsx' -o -name '*.ts' | xargs grep -l 'export const metadata'", { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

// // Function to process a single file
function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    // Extract metadata information
    const _metadataMatch = content.match(/export const metadata = \{([\s\S]*?)\};/);
    let _metadata = {};
    
    if (metadataMatch) {
      try {
        // Parse the metadata object (this is a simple parser)
        const _metadataStr = metadataMatch[1];
        const _titleMatch = metadataStr.match(/title:\s*['"`]([^'"`]+)['"`]/);
        const _descMatch = metadataStr.match(/description:\s*['"`]([^'"`]+)['"`]/);
        const _typeMatch = metadataStr.match(/type:\s*['"`]([^'"`]+)['"`]/);
        const _urlMatch = metadataStr.match(/url:\s*['"`]([^'"`]+)['"`]/);
        
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
    const _returnMatch = content.match(/(\s+)return \(\s*<([^>]+)>/);
    if (returnMatch) {
      const _indent = returnMatch[1];
      const _firstTag = returnMatch[2];
      
      const _helmetComponent = `${indent}return (\n${indent}  <>\n${indent}    <Helmet>\n${indent}      <title>${metadata.title || 'Zion Tech Group'}</title>\n${indent}      <meta name="description" content="${metadata.description || 'Advanced AI and IT Solutions'}" />\n${indent}      ${metadata.type ? `<meta property="og:type" content="${metadata.type}" />` : ''}\n${indent}      ${metadata.url ? `<meta property="og:url" content="${metadata.url}" />` : ''}\n${indent}    </Helmet>\n${indent}    <${firstTag}>`;
      
      content = content.replace(/(\s+)return \(\s*<([^>]+)>/, helmetComponent);
    }
    
    // Close the component properly
    content = content.replace(/^\s*}\s*$/, '  );\n};\n\nexport default Page;');
    
    // Fix any remaining syntax issues
    content = content.replace(/\n\nexport default function/g, '\n\nconst Page: React.FC = () => {');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
//       return true;
    }
    
    return false;
  } catch (error) {
//     return false;
  }
}

// Process all files
let _fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// 