const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all remaining syntax issues
function fixAllRemaining(content) {
  // Fix malformed component names
  content = content.replace(/constAnalyticsproviderpagePage:/g, 'const AnalyticsProviderPage:');
  content = content.replace(/interface Analyticsproviderprops/g, 'interface AnalyticsProviderProps');
  
  // Fix malformed function declarations
  content = content.replace(/constTrackevent\s*=/g, 'const trackEvent =');
  content = content.replace(/const Trackpageview=/g, 'const trackPageView =');
  content = content.replace(/const Value=/g, 'const value =');
  
  // Fix malformed variable names
  content = content.replace(/trackEvent/g, 'trackEvent');
  content = content.replace(/trackPageView/g, 'trackPageView');
  content = content.replace(/value/g, 'value');
  
  // Fix malformed function calls
  content = content.replace(/trackEvent\(/g, 'trackEvent(');
  content = content.replace(/trackPageView\(/g, 'trackPageView(');
  
  // Fix malformed object properties
  content = content.replace(/trackEvent,/g, 'trackEvent,');
  content = content.replace(/trackPageView,/g, 'trackPageView,');
  
  // Fix malformed console statements
  content = content.replace(/console\.warn\('analyticsEvent: '/g, "console.warn('Analytics Event: '");
  content = content.replace(/console\.warn\('pageView: '/g, "console.warn('Page View: '");
  
  // Fix malformed JSX
  content = content.replace(/<AnalyticsContext\.Provider value={value}>/g, '<AnalyticsContext.Provider value={value}>');
  content = content.replace(/<\/AnalyticsContext\.Provider>/g, '</AnalyticsContext.Provider>');
  
  // Fix malformed return statements
  content = content.replace(/return\s*<AnalyticsContext\.Provider value={value}>/g, 'return <AnalyticsContext.Provider value={value}>');
  
  // Fix malformed export statements
  content = content.replace(/export constAnalyticsproviderpagePage/g, 'export const AnalyticsProviderPage');
  
  // Fix malformed interface properties
  content = content.replace(/children: ReactNode;/g, 'children: ReactNode;');
  
  // Fix malformed function parameters
  content = content.replace(/{\s*children\s*}/g, '{ children }');
  
  // Fix malformed type annotations
  content = content.replace(/React\.FC<Analyticsproviderprops>/g, 'React.FC<AnalyticsProviderProps>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllRemaining(content);
    
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
console.log('Starting all remaining syntax fixes...');

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
console.log('All remaining syntax fixes completed!');