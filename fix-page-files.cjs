#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files that need fixing based on the error output
const filesToFix = [
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx', 
  'app/5g-iot-solutions/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/page.tsx'
];

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path for better metadata
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2] || 'Page';
    const titleName = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Remove duplicate metadata exports and fix structure
    const lines = content.split('\n');
    let newLines = [];
    let inMetadata = false;
    let metadataCount = 0;
    let foundFunction = false;
    let foundExport = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip duplicate metadata blocks
      if (line.includes('export const metadata')) {
        if (metadataCount === 0) {
          newLines.push("'use client';");
          newLines.push("");
          newLines.push("import { ErrorBoundary } from '@/components/ErrorBoundary'");
          newLines.push("import Head from 'next/head'");
          newLines.push("import Footer from '../components/Footer'");
          newLines.push("");
          newLines.push(`export const metadata = {`);
          newLines.push(`  title: '${titleName} | Zion Tech Group',`);
          newLines.push(`  description: 'Professional ${titleName.toLowerCase()} services and solutions by Zion Tech Group.',`);
          newLines.push(`  keywords: '${pageName}, technology, services',`);
          newLines.push(`  openGraph: {`);
          newLines.push(`    title: '${titleName} | Zion Tech Group',`);
          newLines.push(`    description: 'Professional ${titleName.toLowerCase()} services and solutions by Zion Tech Group.',`);
          newLines.push(`    type: 'website',`);
          newLines.push(`  },`);
          newLines.push(`};`);
          newLines.push("");
          metadataCount++;
        }
        // Skip the rest of this metadata block
        while (i < lines.length && !lines[i].includes('};')) {
          i++;
        }
        continue;
      }
      
      // Skip lines with just semicolons
      if (line.trim() === ';') {
        continue;
      }
      
      // Skip 'use client' if it appears after imports
      if (line.includes("'use client'") && newLines.length > 5) {
        continue;
      }
      
      // Skip duplicate imports
      if (line.includes('import ') && newLines.some(l => l.includes('import ') && l.includes(line.split(' ')[1]))) {
        continue;
      }
      
      // Find the main function
      if (line.includes('function Page()') || line.includes('function ' + pageName + 'Page()')) {
        foundFunction = true;
        newLines.push(`function Page() {`);
        continue;
      }
      
      // Skip the broken export default function
      if (line.includes('export default function Wrapped') && !foundExport) {
        foundExport = true;
        // Add the proper export at the end
        continue;
      }
      
      // Skip the broken JSX in the middle
      if (line.includes('{...props} />') && line.includes('<')) {
        continue;
      }
      
      newLines.push(line);
    }
    
    // Add proper export at the end
    if (foundFunction && foundExport) {
      newLines.push("");
      newLines.push("export default function Wrapped(props: any) {");
      newLines.push("  return (");
      newLines.push("    <ErrorBoundary>");
      newLines.push("      <Page {...props} />");
      newLines.push("    </ErrorBoundary>");
      newLines.push("  );");
      newLines.push("}");
    }
    
    const newContent = newLines.join('\n');
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    fixPageFile(fullPath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Done fixing page files!');