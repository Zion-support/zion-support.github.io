#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining syntax errors in TSX files
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix JSX fragments with missing closing tags
  fixed = fixed.replace(/<>\s*<SEOHead;>/g, '<>\n      <SEOHead');
  fixed = fixed.replace(/<>\s*<SEOHead>/g, '<>\n      <SEOHead');
  
  // Fix SEOHead component syntax
  fixed = fixed.replace(/<SEOHead;>/g, '<SEOHead');
  fixed = fixed.replace(/<SEOHead\s*>\s*title="([^"]*)"\s*description="([^"]*)"\s*\/>/g, '<SEOHead\n        title="$1"\n        description="$2"\n      />');
  fixed = fixed.replace(/<SEOHead\s*>\s*title="([^"]*)"\s*description="([^"]*)"\s*keywords="([^"]*)"\s*\/>/g, '<SEOHead\n        title="$1"\n        description="$2"\n        keywords="$3"\n      />');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/title="([^"]*)"\s*description="([^"]*)"\s*\/>/g, 'title="$1"\n        description="$2"\n      />');
  fixed = fixed.replace(/title="([^"]*)"\s*description="([^"]*)"\s*keywords="([^"]*)"\s*\/>/g, 'title="$1"\n        description="$2"\n        keywords="$3"\n      />');
  
  // Fix unterminated JSX elements
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g, 
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  // Fix incomplete JSX structures
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g,
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  // Fix about page specific issues
  fixed = fixed.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+"react-helmet-async";";";/g, 'import { Helmet } from "react-helmet-async";');
  fixed = fixed.replace(/import\s+\{\s*Link\s*\}\s+from\s+"react-router-dom";/g, 'import { Link } from "react-router-dom";');
  fixed = fixed.replace(/import\s+\{\s*ArrowRight,\s*Brain,\s*Shield,\s*Users,\s*Award\s*\}\s+from\s+'lucide-react',;/g, "import { ArrowRight, Brain, Shield, Users, Award } from 'lucide-react';");
  
  // Fix array syntax
  fixed = fixed.replace(/const\s+stats\s*=\s*\[\s*\{\s*number:\s*"([^"]*)",\s*label:\s*"([^"]*)"\s*\},\s*\{\s*number:\s*"([^"]*)",\s*label:\s*"([^"]*)"\s*\},\s*\{\s*number:\s*"([^"]*)",\s*label:\s*"([^"]*)"\s*\},\s*\{\s*number:\s*"([^"]*)",\s*label:\s*"([^"]*)"\s*\}\s*\],/g,
    'const stats = [\n    { number: "$1", label: "$2" },\n    { number: "$3", label: "$4" },\n    { number: "$5", label: "$6" },\n    { number: "$7", label: "$8" }\n  ];');
  
  // Fix values array
  fixed = fixed.replace(/const\s+values\s*=\s*\[:\s*value/g, 'const values = [');
  fixed = fixed.replace(/\{\s*icon:\s*<(\w+)\s+className="([^"]*)"\s*\/>,\s*title:\s*"([^"]*)",\s*description:\s*"([^"]*)"\s*\},/g,
    '{\n      icon: <$1 className="$2" />,\n      title: "$3",\n      description: "$4"\n    },');
  
  // Fix Helmet tags
  fixed = fixed.replace(/<Helmet>\s*<title>([^<]*)<\/title>"'"'/g, '<Helmet>\n        <title>$1</title>');
  fixed = fixed.replace(/<meta\s+name="description"\s+content="([^"]*)"\s*\/>\s*';: value/g, '<meta name="description" content="$1" />');
  
  // Fix JSX closing tags
  fixed = fixed.replace(/<\/div>\s*": value/g, '</div>');
  fixed = fixed.replace(/<\/div>\s*": value";/g, '</div>');
  fixed = fixed.replace(/<\/div>\s*": value';/g, '</div>');
  
  // Fix section tags
  fixed = fixed.replace(/<section\s+className="([^"]*)"\s*>\s*": value/g, '<section className="$1">');
  fixed = fixed.replace(/<section\s+className="([^"]*)"\s*>\s*": value";/g, '<section className="$1">');
  fixed = fixed.replace(/<section\s+className="([^"]*)"\s*>\s*": value';/g, '<section className="$1">');
  
  // Fix paragraph tags
  fixed = fixed.replace(/<p\s+className="([^"]*)"\s*>\s*": value/g, '<p className="$1">');
  fixed = fixed.replace(/<p\s+className="([^"]*)"\s*>\s*": value";/g, '<p className="$1">');
  fixed = fixed.replace(/<p\s+className="([^"]*)"\s*>\s*": value';/g, '<p className="$1">');
  
  // Fix heading tags
  fixed = fixed.replace(/<h1\s+className="([^"]*)"\s*>\s*": value/g, '<h1 className="$1">');
  fixed = fixed.replace(/<h1\s+className="([^"]*)"\s*>\s*": value";/g, '<h1 className="$1">');
  fixed = fixed.replace(/<h1\s+className="([^"]*)"\s*>\s*": value';/g, '<h1 className="$1">');
  
  // Fix div tags
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*": value/g, '<div className="$1">');
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*": value";/g, '<div className="$1">');
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*": value';/g, '<div className="$1">');
  
  // Fix extra quotes in text content
  fixed = fixed.replace(/([^>])\s*": value/g, '$1');
  fixed = fixed.replace(/([^>])\s*": value";/g, '$1');
  fixed = fixed.replace(/([^>])\s*": value';/g, '$1');
  
  // Fix malformed JSX fragments at the end
  fixed = fixed.replace(/<>\s*": value/g, '<>');
  fixed = fixed.replace(/<>\s*": value";/g, '<>');
  fixed = fixed.replace(/<>\s*": value';/g, '<>');
  
  // Fix extra quotes at the very end
  fixed = fixed.replace(/"'"'$/g, '');
  fixed = fixed.replace(/"'$/g, '');
  fixed = fixed.replace(/'"$/g, '');
  
  // Fix incomplete function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\(\)\s*\{\s*const\s+stats/g, 'export default function $1() {\n  const stats');
  
  // Fix incomplete component declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*return\s*\(\s*<>\s*<SEOHead/g, 'const $1: React.FC = () => {\n  return (\n    <>\n      <SEOHead');
  
  // Fix missing closing tags for common patterns
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g,
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  // Fix ad-management specific issues
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g,
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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

main();