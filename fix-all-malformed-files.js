#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
// Function to fix malformed files,
function fixMalformedFiles(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Check if file has malformed structure,
if (content.includes("const ComponentName = () => {") && content.includes("const data = [")) {;
      // This is a malformed file that needs to be rewritten;
      const fileName = path.basename(filePath, '.tsx');
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Page';
      // Extract the title from the file name or content,
let title = componentName.replace('Page', '');
      if (title.includes('AI')) {
        title = 'AI Services';
      } else if (title.includes('IT')) {
        title = 'IT Services';
      } else if (title.includes('Cloud')) {
        title = 'Cloud Infrastructure';
      } else if (title.includes('Digital')) {
        title = 'Digital Transformation';
      } else if (title.includes('Cyber')) {
        title = 'Cybersecurity';
      } else if (title.includes('Case')) {
        title = 'Case Studies';
      } else if (title.includes('Contact')) {
        title = 'Contact Us';
      } else if (title.includes('About')) {
        title = 'About Us';
      } else if (title.includes('Pricing')) {
        title = 'Pricing';
      } else if (title.includes('Services')) {
        title = 'Services';
      } else if (title.includes('Solutions')) {
        title = 'Solutions';
      } else if (title.includes('Support')) {
        title = 'Support';
      } else if (title.includes('Terms')) {
        title = 'Terms of Service';
      } else if (title.includes('Privacy')) {
        title = 'Privacy Policy';
      } else if (title.includes('Tutorials')) {
        title = 'Tutorials';
      } else if (title.includes('Demo')) {
        title = 'Demo';
      } else if (title.includes('Blog')) {
        title = 'Blog';
      } else {
        title = componentName.replace('Page', '');
      }
      const newContent = "";
export default ${componentName};""
    console.error(`Error fixing ${filePath}:""
console.log(`Found ${sourceFiles.length} source files""
      console.log(`✅ Fixed: ${file}""
    console.error(`❌ Error fixing ${file}:""
console.log(`\n📊 Summary: "",
console.log(`✅ Fixed: ${fixedCount} files""
console.log(`❌ Errors: ${errorCount} files"")