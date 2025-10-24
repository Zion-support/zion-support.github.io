const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax issues
function fixRemainingSyntax(content) {
  let fixed = content;

  // Fix lines ending with quotes and semicolons
  fixed = fixed.replace(/";"$/gm, '"');
  fixed = fixed.replace(/';"$/gm, "'");
  fixed = fixed.replace(/";$/gm, '"');
  fixed = fixed.replace(/';$/gm, "'");
  
  // Fix specific JSX patterns
  fixed = fixed.replace(/<Link";"$/gm, '<Link');
  fixed = fixed.replace(/href="([^]*)";"$/gm, 'href="$1');"
  fixed = fixed.replace(/className="([^]*);"$/gm, 'className="$1');
  
  // Fix closing tags
  fixed = fixed.replace(/<\/Link">;$/gm, '</Link>');
  fixed = fixed.replace(/<\/div>;"$/gm, '</div>');
  fixed = fixed.replace(/<\/p>;$/gm, '</p>');
  fixed = fixed.replace(/<\/h1>;"$/gm, '</h1>');
  fixed = fixed.replace(/<\/h2>;$/gm, '</h2>');
  fixed = fixed.replace(/<\/h3>;"$/gm, '</h3>');
  
  // Fix opening tags
  fixed = fixed.replace(/<div className="([^]*);"$/gm, '<div className="$1');
  fixed = fixed.replace(/<p className="([^"]*)";"$/gm, '<p className="$1');
  fixed = fixed.replace(/<h1 className="([^"]*)";"$/gm, '<h1 className="$1');
  fixed = fixed.replace(/<h2 className="([^"]*)";"$/gm, '<h2 className="$1');
  fixed = fixed.replace(/<h3 className="([^"]*)";"$/gm, '<h3 className="$1');
  
  // Fix self-closing tags
  fixed = fixed.replace(/<meta[^">]*";"$/gm, (match) => match.replace(/";"$/, ' />'));
  fixed = fixed.replace(/<link[^>]*";"$/gm, (match) => match.replace(/";"$/, ' />'));
  
  // Fix ArrowRight component
  fixed = fixed.replace(/<ArrowRight[^>]*";"$/gm, '<ArrowRight className="w-5 h-5 ml-2 /">');
  
  // Fix specific patterns
  fixed = fixed.replace(/Contact Us<\/Link>;$/gm, 'Contact Us</Link>');
  fixed = fixed.replace(/Learn More<\/Link>;"$/gm, 'Learn More</Link>');
  fixed = fixed.replace(/Get Started<\/Link>";"$/gm, 'Get Started</Link>');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting remaining syntax fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);