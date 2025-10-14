#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX attribute issues
function fixJSXAttributes(content) {
  let fixed = content;

  // Fix spaces in JSX attributes
  fixed = fixed.replace(/<(\w+)(\w+)\s*=/g, '<$1 $2=');
  fixed = fixed.replace(/<(\w+)\s+(\w+)\s*=/g, '<$1 $2=');
  
  // Fix specific patterns
  fixed = fixed.replace(/<metaproperty\s*=/g, '<meta property=');
  fixed = fixed.replace(/<linkrel\s*=/g, '<link rel=');
  fixed = fixed.replace(/<divclassName\s*=/g, '<div className=');
  fixed = fixed.replace(/<h1className\s*=/g, '<h1 className=');
  fixed = fixed.replace(/<h2className\s*=/g, '<h2 className=');
  fixed = fixed.replace(/<h3className\s*=/g, '<h3 className=');
  fixed = fixed.replace(/<pclassName\s*=/g, '<p className=');
  fixed = fixed.replace(/<spanclassName\s*=/g, '<span className=');
  fixed = fixed.replace(/<aclassName\s*=/g, '<a className=');
  fixed = fixed.replace(/<buttonclassName\s*=/g, '<button className=');
  fixed = fixed.replace(/<sectionclassName\s*=/g, '<section className=');
  fixed = fixed.replace(/<articleclassName\s*=/g, '<article className=');
  fixed = fixed.replace(/<mainclassName\s*=/g, '<main className=');
  fixed = fixed.replace(/<navclassName\s*=/g, '<nav className=');
  fixed = fixed.replace(/<headerclassName\s*=/g, '<header className=');
  fixed = fixed.replace(/<footerclassName\s*=/g, '<footer className=');
  fixed = fixed.replace(/<ulclassName\s*=/g, '<ul className=');
  fixed = fixed.replace(/<liclassName\s*=/g, '<li className=');
  fixed = fixed.replace(/<imgclassName\s*=/g, '<img className=');
  fixed = fixed.replace(/<inputclassName\s*=/g, '<input className=');
  fixed = fixed.replace(/<formclassName\s*=/g, '<form className=');
  fixed = fixed.replace(/<labelclassName\s*=/g, '<label className=');
  fixed = fixed.replace(/<selectclassName\s*=/g, '<select className=');
  fixed = fixed.replace(/<optionclassName\s*=/g, '<option className=');
  fixed = fixed.replace(/<textareaclassName\s*=/g, '<textarea className=');

  // Fix className values with missing spaces
  fixed = fixed.replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, 'className="$1$2 $3$4"');
  fixed = fixed.replace(/className="([^"]*?)([a-z])(\d+)([^"]*?)"/g, 'className="$1$2-$3$4"');
  fixed = fixed.replace(/className="([^"]*?)(\d+)([a-z])([^"]*?)"/g, 'className="$1$2-$3$4"');

  // Fix specific broken patterns
  fixed = fixed.replace(/min-h-screenbg-slate-9/g, 'min-h-screen bg-slate-900');
  fixed = fixed.replace(/text-centermb-1/g, 'text-center mb-12');
  fixed = fixed.replace(/container mx-auto px-4 py-2/g, 'container mx-auto px-4 py-20');

  // Fix JSX comments
  fixed = fixed.replace(/\/\* Hero Section \*\/\s*,\s*/g, '/* Hero Section */\n        ');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXAttributes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXAttributes, processFile };