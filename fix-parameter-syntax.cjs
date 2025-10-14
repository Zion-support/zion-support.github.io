const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix parameter syntax issues
function fixParameterSyntax(content) {
  // Fix malformed component names
  content = content.replace(/constEnhancedanalyticspagePage:/g, 'const EnhancedAnalyticsPage:');
  content = content.replace(/interface Enhancedanalyticsprops/g, 'interface EnhancedAnalyticsProps');
  
  // Fix malformed parameter names
  content = content.replace(/event Name,/g, 'eventName,');
  content = content.replace(/event Properties/g, 'eventProperties');
  
  // Fix malformed function names
  content = content.replace(/const Trackevent=/g, 'const trackEvent =');
  
  // Fix malformed variable names
  content = content.replace(/eventName/g, 'eventName');
  content = content.replace(/eventProperties/g, 'eventProperties');
  content = content.replace(/trackEvent/g, 'trackEvent');
  
  // Fix malformed object properties
  content = content.replace(/event_category:/g, 'event_category:');
  content = content.replace(/event_category/g, 'event_category');
  
  // Fix malformed function calls
  content = content.replace(/trackEvent\(event,/g, 'trackEvent(event,');
  content = content.replace(/trackEvent\(eventName,/g, 'trackEvent(eventName,');
  
  // Fix malformed destructuring
  content = content.replace(/{\s*eventName,\s*eventProperties\s*}/g, '{ eventName, eventProperties }');
  
  // Fix malformed interface properties
  content = content.replace(/eventName\?:/g, 'eventName?:');
  content = content.replace(/eventProperties\?:/g, 'eventProperties?:');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixParameterSyntax(content);
    
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

// Main execution
console.log('Starting parameter syntax fixes...');

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (processFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files.`);
console.log('Parameter syntax fixes completed!');