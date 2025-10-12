const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by choosing HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let inHead = false;
  let inSeparator = false;
  let inTheirs = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      inHead = true;
      inSeparator = false;
      inTheirs = false;
      continue;
    }
    
    if (line.startsWith('=======')) {
      inSeparator = true;
      inHead = false;
      inTheirs = true;
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      inHead = false;
      inSeparator = false;
      inTheirs = false;
      continue;
    }
    
    if (inConflict) {
      if (inHead) {
        resolvedLines.push(line);
      }
      // Skip lines in the "theirs" section
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to clean up common syntax issues
function cleanSyntax(content) {
  // Fix malformed JSX closing tags
  content = content.replace(/\/&gt;/g, '/>');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
  
  // Fix malformed div tags
  content = content.replace(/<div className="([^"]*)\s+([^"]*)"><\/div>/g, '<div className="$1 $2"></div>');
  
  // Fix malformed closing tags
  content = content.replace(/<\/[^>]*\s+>/g, (match) => {
    const tag = match.match(/<\/([^>\s]+)/);
    if (tag) {
      return `</${tag[1]}>`;
    }
    return match;
  });
  
  // Fix malformed opening tags
  content = content.replace(/<([^>\s]+)\s+([^>]*)\s+>/g, (match, tag, attrs) => {
    const cleanAttrs = attrs.replace(/\s+/g, ' ').trim();
    return `<${tag} ${cleanAttrs}>`;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<<')) {
      console.log(`Processing: ${filePath}`);
      
      // Resolve merge conflicts
      let resolvedContent = resolveMergeConflicts(content);
      
      // Clean up syntax issues
      resolvedContent = cleanSyntax(resolvedContent);
      
      // Write back to file
      fs.writeFileSync(filePath, resolvedContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find and process all files with merge conflicts
function processAllFiles() {
  const files = [];
  
  // Find all TypeScript and JavaScript files
  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        findFiles(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
        files.push(fullPath);
      }
    }
  }
  
  findFiles('/workspace');
  
  console.log(`Found ${files.length} files to process`);
  
  let processedCount = 0;
  for (const file of files) {
    processFile(file);
    processedCount++;
    
    if (processedCount % 50 === 0) {
      console.log(`Processed ${processedCount} files...`);
    }
  }
  
  console.log(`Completed processing ${processedCount} files`);
}

// Run the script
processAllFiles();