const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals with semicolons
  content = content.replace(/';"/g, "'");
  content = content.replace(/";"/g, '"');
  content = content.replace(/`;"/g, '`');
  
  // Fix variable declarations with colons
  content = content.replace(/const:/g, 'const ');
  content = content.replace(/let:/g, 'let ');
  content = content.replace(/var:/g, 'var ');
  
  // Fix function declarations with colons
  content = content.replace(/function:/g, 'function ');
  
  // Fix JSX attributes with colons
  content = content.replace(/className:/g, 'className=');
  content = content.replace(/onClick:/g, 'onClick=');
  content = content.replace(/href:/g, 'href=');
  content = content.replace(/src:/g, 'src=');
  content = content.replace(/alt:/g, 'alt=');
  content = content.replace(/fill:/g, 'fill=');
  content = content.replace(/stroke:/g, 'stroke=');
  content = content.replace(/viewBox:/g, 'viewBox=');
  content = content.replace(/strokeWidth:/g, 'strokeWidth=');
  content = content.replace(/strokeLinecap:/g, 'strokeLinecap=');
  content = content.replace(/strokeLinejoin:/g, 'strokeLinejoin=');
  content = content.replace(/d:/g, 'd=');
  content = content.replace(/path:/g, 'path=');
  content = content.replace(/element:/g, 'element=');
  content = content.replace(/fallback:/g, 'fallback=');
  
  // Fix JSX tags with colons
  content = content.replace(/<div:/g, '<div ');
  content = content.replace(/<span:/g, '<span ');
  content = content.replace(/<button:/g, '<button ');
  content = content.replace(/<a:/g, '<a ');
  content = content.replace(/<h1:/g, '<h1 ');
  content = content.replace(/<h2:/g, '<h2 ');
  content = content.replace(/<h3:/g, '<h3 ');
  content = content.replace(/<h4:/g, '<h4 ');
  content = content.replace(/<h5:/g, '<h5 ');
  content = content.replace(/<h6:/g, '<h6 ');
  content = content.replace(/<p:/g, '<p ');
  content = content.replace(/<img:/g, '<img ');
  content = content.replace(/<svg:/g, '<svg ');
  content = content.replace(/<path:/g, '<path ');
  content = content.replace(/<Route:/g, '<Route ');
  content = content.replace(/<Suspense:/g, '<Suspense ');
  content = content.replace(/<ErrorBoundary:/g, '<ErrorBoundary ');
  content = content.replace(/<GlobalErrorBoundary:/g, '<GlobalErrorBoundary ');
  content = content.replace(/<HelmetProvider:/g, '<HelmetProvider ');
  content = content.replace(/<Router:/g, '<Router ');
  content = content.replace(/<main:/g, '<main ');
  content = content.replace(/<Routes:/g, '<Routes ');
  
  // Fix object properties with colons in JSX
  content = content.replace(/gradient:/g, 'gradient:');
  content = content.replace(/glow:/g, 'glow:');
  content = content.replace(/title:/g, 'title:');
  content = content.replace(/description:/g, 'description:');
  content = content.replace(/href:/g, 'href:');
  content = content.replace(/icon:/g, 'icon:');
  
  // Fix semicolons in object properties
  content = content.replace(/icon: CpuChipIcon,;/g, 'icon: CpuChipIcon,');
  content = content.replace(/icon: ShieldCheckIcon,;/g, 'icon: ShieldCheckIcon,');
  content = content.replace(/icon: CloudIcon,;/g, 'icon: CloudIcon,');
  content = content.replace(/icon: RocketLaunchIcon,;/g, 'icon: RocketLaunchIcon,');
  
  // Fix semicolons at end of lines that shouldn't have them
  content = content.replace(/;\s*$/gm, '');
  
  // Fix specific patterns
  content = content.replace(/export const:/g, 'export const ');
  content = content.replace(/export default:/g, 'export default ');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);