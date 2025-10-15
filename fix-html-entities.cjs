const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix HTML entities in TypeScript/JSX files
function fixHtmlEntities(content) {
  // Fix HTML entities in import statements
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&amp;/g, '&');
  
  // Fix HTML entities in JSX attributes (but keep them in text content)
  // This is a more complex fix that needs to distinguish between code and text
  const lines = content.split('\n');
  const fixedLines = [];
  
  for (const line of lines) {
    let fixedLine = line;
    
    // Fix import statements
    if (line.trim().startsWith('import')) {
      fixedLine = fixedLine.replace(/&apos;/g, "'");
      fixedLine = fixedLine.replace(/&quot;/g, '"');
    }
    
    // Fix JSX attributes
    if (line.includes('className=') || line.includes('href=') || line.includes('src=')) {
      fixedLine = fixedLine.replace(/&apos;/g, "'");
      fixedLine = fixedLine.replace(/&quot;/g, '"');
    }
    
    // Fix other code constructs
    if (line.includes('from ') || line.includes('export ') || line.includes('const ') || line.includes('function ')) {
      fixedLine = fixedLine.replace(/&apos;/g, "'");
      fixedLine = fixedLine.replace(/&quot;/g, '"');
    }
    
    fixedLines.push(fixedLine);
  }
  
  return fixedLines.join('\n');
}

// Function to fix malformed JSX
function fixJSX(content) {
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*<\s*\/\s*>/g, '<></>');
  
  // Fix malformed closing tags
  content = content.replace(/<\s*\/\s*([^>]+)\s*>/g, '</$1>');
  
  // Fix malformed opening tags
  content = content.replace(/<\s*([^>]+)\s*>/g, '<$1>');
  
  return content;
}

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons in import statements
  content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, 'import $1 from "$2";');
  
  // Fix missing semicolons in export statements
  content = content.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*"([^"]*)"\s*>/g, 'className="$1">');
  content = content.replace(/className\s*=\s*'([^']*)'\s*>/g, 'className="$1">');
  
  return content;
}

// Main function to process files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let processedFiles = 0;
  let errorFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const filePath = path.join(process.cwd(), file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Skip if file is empty or has no content
        if (!content.trim()) {
          return;
        }
        
        // Fix HTML entities
        content = fixHtmlEntities(content);
        
        // Fix JSX
        content = fixJSX(content);
        
        // Fix syntax errors
        content = fixSyntaxErrors(content);
        
        // Write the cleaned content back
        fs.writeFileSync(filePath, content, 'utf8');
        processedFiles++;
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
  if (errorFiles > 0) {
    console.log(`Errors in ${errorFiles} files`);
  }
}

// Run the script
processFiles();