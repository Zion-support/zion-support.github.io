const fs = require('fs');
const path = require('path');

// Function to fix all JSX syntax issues
function fixJSXIssues(content) {
  // Fix malformed className attributes with extra quotes
  content = content.replace(/className=\"([^"]*?)\"\">/g, 'className="$1">');
  content = content.replace(/className=\"([^"]*?)\"\">/g, 'className="$1">');
  
  // Fix malformed className attributes with extra spaces
  content = content.replace(/className=\"\s*([^"]*?)\"/g, 'className="$1"');
  content = content.replace(/className=\"\s*([^"]*?)\"/g, 'className="$1"');
  
  // Fix broken Link components
  content = content.replace(/<Link;\s*href=\"([^"]*?)\s*className=\"([^"]*?)\s*>\s*([^"]*?)\s*<ArrowRight className=\s*ml\s*-\s*2\s*h-5\s*w-5\"\s*\/\">\s*<\/Link>/g, '<Link href="$1" className="$2">$3 <ArrowRight className="ml-2 h-5 w-5" /></Link>');
  
  // Fix broken Link components with malformed attributes
  content = content.replace(/<Link;\s*href=\"([^"]*?)\s*className=\"([^"]*?)\s*>\s*([^"]*?)\s*<ArrowRight className=\s*([^"]*?)\s*\/\">\s*<\/Link>/g, '<Link href="$1" className="$2">$3 <ArrowRight className="$4" /></Link>');
  
  // Fix any remaining broken Link components
  content = content.replace(/<Link;\s*href=\"([^"]*?)\s*className=\"([^"]*?)\s*>\s*([^"]*?)\s*<ArrowRight className=\s*([^"]*?)\s*\/\">\s*<\/Link>/g, '<Link href="$1" className="$2">$3 <ArrowRight className="$4" /></Link>');
  
  // Fix any remaining broken attributes
  content = content.replace(/content=\s*([^"]*?)\s*\/>/g, 'content="$1" />');
  content = content.replace(/name=\s*([^"]*?)\s*\/>/g, 'name="$1" />');
  content = content.replace(/property=\s*([^"]*?)\s*\/>/g, 'property="$1" />');
  
  // Fix any remaining semicolons in JSX attributes
  content = content.replace(/className="([^"]*?);\s*([^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/content="([^"]*?);\s*([^"]*?)"/g, 'content="$1 $2"');
  content = content.replace(/name="([^"]*?);\s*([^"]*?)"/g, 'name="$1 $2"');
  
  // Fix any remaining broken closing tags
  content = content.replace(/<div([^>]*?)\s*>/g, '<div$1>');
  content = content.replace(/<h1([^>]*?)\s*>/g, '<h1$1>');
  content = content.replace(/<section([^>]*?)\s*>/g, '<section$1>');
  
  // Fix any remaining broken className patterns
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z][^"]*?)"/g, 'className="$1 $2"');
  
  // Fix any remaining broken attributes
  content = content.replace(/content=\s*([^"]*?)\s*\/>/g, 'content="$1" />');
  content = content.replace(/name=\s*([^"]*?)\s*\/>/g, 'name="$1" />');
  content = content.replace(/property=\s*([^"]*?)\s*\/>/g, 'property="$1" />');
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixJSXIssues(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the app directory
console.log('Starting comprehensive JSX fixes...');
fixFilesInDirectory('./app');
fixFilesInDirectory('./components');
fixFilesInDirectory('./src');
console.log('Comprehensive JSX fixes completed!');