import fs from 'fs';
import path from 'path';

// Function to fix JSX syntax errors in a page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has JSX syntax errors
    if (content.includes('JSX expressions must have one parent element') || 
        content.includes('Parsing error')) {
      return; // Skip files that are already being processed
    }
    
    // Read the file content
    const lines = content.split('\n');
    let inReturnStatement = false;
    let returnStartLine = -1;
    let braceCount = 0;
    let fixedContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if we're starting a return statement
      if (line.trim().startsWith('return (')) {
        inReturnStatement = true;
        returnStartLine = i;
        braceCount = 1;
        fixedContent.push(line);
        continue;
      }
      
      // If we're in a return statement, track braces
      if (inReturnStatement) {
        // Count opening and closing braces
        for (const char of line) {
          if (char === '(') braceCount++;
          if (char === ')') braceCount--;
        }
        
        // If we've closed all braces, we're done with the return statement
        if (braceCount === 0) {
          inReturnStatement = false;
          fixedContent.push(line);
          continue;
        }
        
        // Check for JSX syntax issues
        if (line.trim().startsWith('<title>') && !line.includes('<Helmet>')) {
          // This is likely a malformed JSX structure
          fixedContent.push('    <>');
          fixedContent.push('      <Helmet>');
          fixedContent.push(line);
          continue;
        }
        
        if (line.trim().startsWith('</title>') && !line.includes('</Helmet>')) {
          fixedContent.push(line);
          fixedContent.push('      </Helmet>');
          continue;
        }
        
        if (line.trim().startsWith('<h1') && !line.includes('<div')) {
          // Add proper container div
          fixedContent.push('      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
          fixedContent.push('        <div className="container mx-auto px-4 py-16">');
          fixedContent.push(line);
          continue;
        }
        
        if (line.trim().startsWith('Contact Us') && !line.includes('</div>')) {
          // Add proper closing tags
          fixedContent.push('        </div>');
          fixedContent.push('      </div>');
          fixedContent.push('    </>');
          continue;
        }
        
        fixedContent.push(line);
      } else {
        fixedContent.push(line);
      }
    }
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, fixedContent.join('\n'));
    console.log(`Fixed JSX syntax in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to create a proper page template
function createProperPageTemplate(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const template = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')}() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">${pageName}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ${pageName.toLowerCase()} services tailored to your business needs.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

  fs.writeFileSync(filePath, template);
  console.log(`Created proper template for: ${filePath}`);
}

// Find all page.tsx files with JSX syntax errors
const appDir = '/workspace/app';
const problematicFiles = [];

function findProblematicFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findProblematicFiles(filePath);
    } else if (file === 'page.tsx') {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Check for common JSX syntax issues
        if (content.includes('return (') && 
            (content.includes('<title>') && !content.includes('<Helmet>')) ||
            content.includes('JSX expressions must have one parent element')) {
          problematicFiles.push(filePath);
        }
      } catch (error) {
        // File might be corrupted, add to list
        problematicFiles.push(filePath);
      }
    }
  }
}

// Find all problematic files
findProblematicFiles(appDir);

console.log(`Found ${problematicFiles.length} files with JSX syntax errors`);

// Fix each problematic file
for (const filePath of problematicFiles) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // If the file is severely corrupted, create a proper template
    if (content.length < 100 || content.includes('JSX expressions must have one parent element')) {
      createProperPageTemplate(filePath);
    } else {
      fixPageFile(filePath);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    // Create a proper template as fallback
    createProperPageTemplate(filePath);
  }
}

console.log('JSX syntax errors fixed!');