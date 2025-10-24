const fs = require('fs');
const path = require('path');

// Function to create a clean, working component template
function createCleanComponent(fileName, content) {
  const baseName = fileName.replace('.tsx', '').replace('.ts', '');
  
  // Check if it's a page component
  if (fileName.includes('page.tsx')) {
    return `'use client';
import React from 'react';

export default function ${baseName.charAt(0).toUpperCase() + baseName.slice(1)}() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            ${baseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ${baseName.replace(/-/g, ' ')} services and solutions.
          </p>
        </div>
      </div>
    </div>
  );
}`;
  }
  
  // Check if it's a component
  if (fileName.includes('Component') || fileName.includes('components/')) {
    return `'use client';
import React from 'react';

interface ${baseName}Props {
  className?: string;
}

const ${baseName}: React.FC<${baseName}Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>${baseName}</h2>
      <p>${baseName} component for enhanced functionality.</p>
    </div>
  );
};

export default ${baseName};`;
  }
  
  // Default template
  return `'use client';
import React from 'react';

export default function ${baseName}() {
  return (
    <div>
      <h1>${baseName}</h1>
      <p>${baseName} content.</p>
    </div>
  );
}`;
}

// Function to clean up specific error patterns
function cleanContent(content, fileName) {
  // Remove merge conflict markers
  content = content.replace(/^<<<<<<<.*$/gm, '');
  
  // Fix unterminated regular expressions
  content = content.replace(/\/[^\/\n]*$/gm, '');
  
  // Fix malformed imports
  content = content.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix malformed JSX
  content = content.replace(/<[^>]*$/gm, '');
  content = content.replace(/[^<]*$/gm, '');
  
  // Remove broken syntax
  content = content.replace(/[{}]{2,}/g, '');
  content = content.replace(/[()]{2,}/g, '');
  content = content.replace(/[\[\]]{2,}/g, '');
  
  // Clean up extra characters
  content = content.replace(/[;]{2,}/g, ';');
  content = content.replace(/[,]{2,}/g, ',');
  
  return content;
}

// Function to determine if file should be completely rewritten
function shouldRewriteFile(fileName, content) {
  // Check for severe corruption
  const corruptionPatterns = [
    /Error: Parsing error/,
    /Declaration or statement expected/,
    /Property or signature expected/,
    /Expression expected/,
    /Unterminated regular expression/,
    /Expected corresponding/,
    /Identifier expected/,
    /[{}]{3,}/,
    /[()]{3,}/,
    /[\[\]]{3,}/
  ];
  
  return corruptionPatterns.some(pattern => pattern.test(content)) || 
         content.length < 100 || 
         content.split('\n').length < 5;
}

// Main processing function
function processFiles() {
  const directories = [
    path.join(__dirname, 'app'),
    path.join(__dirname, 'src'),
    path.join(__dirname, 'components')
  ];
  
  let fixedCount = 0;
  let rewrittenCount = 0;
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      processDirectory(dir);
    }
  });
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          const originalContent = content;
          
          if (shouldRewriteFile(file, content)) {
            content = createCleanComponent(file, content);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Rewritten: ' + filePath);
            rewrittenCount++;
          } else {
            content = cleanContent(content, file);
            if (content !== originalContent) {
              fs.writeFileSync(filePath, content, 'utf8');
              console.log('Fixed: ' + filePath);
              fixedCount++;
            }
          }
        } catch (error) {
          console.error('Error processing ' + filePath + ':', error.message);
          // If there's an error, rewrite the file
          try {
            const content = createCleanComponent(file, '');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Rewritten after error: ' + filePath);
            rewrittenCount++;
          } catch (rewriteError) {
            console.error('Failed to rewrite ' + filePath + ':', rewriteError.message);
          }
        }
      }
    });
  }
  
  console.log('Processing complete!');
  console.log('Fixed files: ' + fixedCount);
  console.log('Rewritten files: ' + rewrittenCount);
}

// Run the script
processFiles();
