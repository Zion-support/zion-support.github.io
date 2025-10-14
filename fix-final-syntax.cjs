const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix final syntax issues
function fixFinalSyntax(content) {
  // Fix malformed component names
  content = content.replace(/constNotfoundpagePage:/g, 'const NotFoundPage:');
  content = content.replace(/constFivegconsultingpagePage:/g, 'const FiveGConsultingPage:');
  content = content.replace(/constFivegdataanalyticspagePage:/g, 'const FiveGDataAnalyticsPage:');
  content = content.replace(/constFivegdeploymentpagePage:/g, 'const FiveGDeploymentPage:');
  content = content.replace(/constNavigationpagePage:/g, 'const NavigationPage:');
  
  // Fix malformed interface names
  content = content.replace(/interface Navigationprops/g, 'interface NavigationProps');
  content = content.replace(/interface Accessibilityenhancerprops/g, 'interface AccessibilityEnhancerProps');
  
  // Fix malformed variable names
  content = content.replace(/const\[isopen,Setisopen\]/g, 'const [isOpen, setIsOpen]');
  content = content.replace(/const\[isservicesopen,Setisservicesopen\]/g, 'const [isServicesOpen, setIsServicesOpen]');
  content = content.replace(/constTogglemenu/g, 'const toggleMenu');
  content = content.replace(/constNavigation/g, 'const navigation');
  
  // Fix malformed JSX attributes
  content = content.replace(/Classname=/g, 'className=');
  content = content.replace(/Key=/g, 'key=');
  content = content.replace(/onMouse Enter=/g, 'onMouseEnter=');
  content = content.replace(/onMouse Leave=/g, 'onMouseLeave=');
  content = content.replace(/on Click=/g, 'onClick=');
  content = content.replace(/Classname=/g, 'className=');
  
  // Fix malformed JSX tags
  content = content.replace(/<chevrondown/g, '<ChevronDown');
  content = content.replace(/<\/chevrondown>/g, '</ChevronDown>');
  content = content.replace(/<link/g, '<Link');
  content = content.replace(/<\/link>/g, '</Link>');
  
  // Fix malformed className values
  content = content.replace(/className="([^"]*)\s+([^"]*)"/g, (match, first, second) => {
    return `className="${first} ${second}"`;
  });
  
  // Fix malformed function calls
  content = content.replace(/setIsOpen\(!isOpen\)/g, 'setIsOpen(!isOpen)');
  content = content.replace(/setIsServicesOpen\(true\)/g, 'setIsServicesOpen(true)');
  content = content.replace(/setIsServicesOpen\(false\)/g, 'setIsServicesOpen(false)');
  
  // Fix malformed object properties
  content = content.replace(/text-gray-300Hover:/g, 'text-gray-300 hover:');
  content = content.replace(/text-whiteHover:/g, 'text-white hover:');
  content = content.replace(/bg-slate-700Hover:/g, 'bg-slate-700 hover:');
  
  // Fix malformed className concatenations
  content = content.replace(/px-4Sm:/g, 'px-4 sm:');
  content = content.replace(/px-6Lg:/g, 'px-6 lg:');
  content = content.replace(/hiddenMd:/g, 'hidden md:');
  
  // Fix malformed variable references
  content = content.replace(/isServicesOpen/g, 'isServicesOpen');
  content = content.replace(/isOpen/g, 'isOpen');
  content = content.replace(/navigation/g, 'navigation');
  content = content.replace(/toggleMenu/g, 'toggleMenu');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFinalSyntax(content);
    
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
console.log('Starting final syntax fixes...');

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
console.log('Final syntax fixes completed!');