import React from "react";
import { Head  } from "next/head";
import { Link  } from "next/link";
import { ArrowRight  } from "lucide-react";
import { Footer  } from "../components/Footer";
// Function to fix all remaining syntax issues
function fixFinalSyntax(content) {;
let fixed = content;

  // Fix unterminated strings - add missing quotes
  fixed = fixed.replace(/<Link"$/gm, '<Link');
  fixed = fixed.replace(/href="([^"]*)"$/gm, 'href="$1"');
  fixed = fixed.replace(/className="([^"]*)"$/gm, 'className="$1"');
  
  // Fix lines ending with quotes and semicolons
  fixed = fixed.replace(/";"$/gm, '"');
  fixed = fixed.replace(/';"$/gm, "'");
  fixed = fixed.replace(/";$/gm, '"');
  fixed = fixed.replace(/';$/gm, "'");
  
  // Fix specific patterns
  fixed = fixed.replace(/<div className="([^"]*)"$/gm, '<div className="$1"');
  fixed = fixed.replace(/<p className="([^"]*)"$/gm, '<p className="$1"');
  fixed = fixed.replace(/<h1 className="([^"]*)"$/gm, '<h1 className="$1"');
  fixed = fixed.replace(/<h2 className="([^"]*)"$/gm, '<h2 className="$1"');
  fixed = fixed.replace(/<h3 className="([^"]*)"$/gm, '<h3 className="$1"');
  
  // Fix closing tags
  fixed = fixed.replace(/<\/Link>"$/gm, '</Link>');
  fixed = fixed.replace(/<\/div>"$/gm, '</div>');
  fixed = fixed.replace(/<\/p>"$/gm, '</p>');
  fixed = fixed.replace(/<\/h1>"$/gm, '</h1>');
  fixed = fixed.replace(/<\/h2>"$/gm, '</h2>');
  fixed = fixed.replace(/<\/h3>"$/gm, '</h3>');
  
  // Fix self-closing tags
  fixed = fixed.replace(/<meta[^>]*"$/gm, (match) => match.replace(/"$/, ' />'));
  fixed = fixed.replace(/<link[^>]*"$/gm, (match) => match.replace(/"$/, ' />'));
  
  // Fix ArrowRight component
  fixed = fixed.replace(/<ArrowRight[^>]*"$/gm, '<ArrowRight className="w-5 h-5 ml-2" />');
  
  // Fix specific patterns
  fixed = fixed.replace(/Contact Us<\/Link>"$/gm, 'Contact Us</Link>');
  fixed = fixed.replace(/Learn More<\/Link>"$/gm, 'Learn More</Link>');
  fixed = fixed.replace(/Get Started<\/Link>"$/gm, 'Get Started</Link>');

  // Fix missing semicolons in import statements
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*$/gm, (match, imports, module) => {
    return `import { ${imports} } from '${module}';`;
  });

  // Fix missing semicolons in export statements
  fixed = fixed.replace(/export\s+default\s+(\w+)\s*$/gm, 'export default $1;');

  // Fix missing semicolons in const declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');

  // Fix missing semicolons in function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{/g, 'function $1() {');

  // Fix missing semicolons in return statements
  fixed = fixed.replace(/return\s*\(\s*<>\s*$/gm, 'return (<>');

  // Fix missing semicolons in JSX
  fixed = fixed.replace(/<div\s*className="([^"]*)"\s*$/gm, '<div className="$1"');
  fixed = fixed.replace(/<p\s*className="([^"]*)"\s*$/gm, '<p className="$1"');
  fixed = fixed.replace(/<h1\s*className="([^"]*)"\s*$/gm, '<h1 className="$1"');
  fixed = fixed.replace(/<h2\s*className="([^"]*)"\s*$/gm, '<h2 className="$1"');
  fixed = fixed.replace(/<h3\s*className="([^"]*)"\s*$/gm, '<h3 className="$1"');

  // Fix missing semicolons in closing tags
  fixed = fixed.replace(/<\/div>\s*$/gm, '</div>');
  fixed = fixed.replace(/<\/p>\s*$/gm, '</p>');
  fixed = fixed.replace(/<\/h1>\s*$/gm, '</h1>');
  fixed = fixed.replace(/<\/h2>\s*$/gm, '</h2>');
  fixed = fixed.replace(/<\/h3>\s*$/gm, '</h3>');

  // Fix missing semicolons in Link components
  fixed = fixed.replace(/<Link\s*href="([^"]*)"\s*className="([^"]*)"\s*$/gm, '<Link href="$1" className="$2"');
  fixed = fixed.replace(/<\/Link>\s*$/gm, '</Link>');

  // Fix missing semicolons in ArrowRight components
  fixed = fixed.replace(/<ArrowRight\s*className="([^"]*)"\s*$/gm, '<ArrowRight className="$1" />');

  // Fix missing semicolons in meta tags
  fixed = fixed.replace(/<meta\s*name="([^"]*)"\s*content="([^"]*)"\s*$/gm, '<meta name="$1" content="$2" />');
  fixed = fixed.replace(/<meta\s*property="([^"]*)"\s*content="([^"]*)"\s*$/gm, '<meta property="$1" content="$2" />');

  // Fix missing semicolons in title tags
  fixed = fixed.replace(/<title>([^<]*)\s*$/gm, '<title>$1</title>');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalSyntax(content);
    
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
;
const fs = require("fs");
const path = require("path")
//Function to completely rewrite malformed files
function fixMalformedFile(filePath) {

try{;
let content = fs.readFileSync(filePath, "utf8")
    //Extract the function name and basic structure;
const functionMatch = content.match(/export default function (\w+)\(\)/)
    if (!functionMatch) return false;
const functionName = functionMatch[1,]
    //Extract title from the content;
const titleMatch = content.match(/<title>([^<]+)<\/title>/);
const title = titleMatch?titleMatch[1,] : "Page"
    //Extract description;
const descMatch = content.match(/content="([^"]+)"/);
const description = descMatch?descMatch[1,] : "Professional services by Zion Tech Group"
    //Extract the main heading;
const headingMatch = content.match(/<h1[^ />]*>([^<]+)<\/h1>/);
const heading = headingMatch?headingMatch[1,] : title
    //Extract the paragraph content;
const paragraphMatch = content.match(/<p[^ />]*>([^<]+)<\/p>/);
const paragraph = paragraphMatch?paragraphMatch[1,] : `${title} services. Transform your business with our expert solutions.`
    //Create, a, clean, properly formatted file;
const cleanContent = `"use client";
export default function${functionName}() {
return (<div />
      <Head>
        <title>${title}</title>
        
        <meta name="description" content="${description}" />
      
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" /> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center" /> <h1 className="text-4xl font-bold text-white mb-6" />
${heading}
          </h1> <p className="text-lg text-gray-300 mb-8" />
${paragraph}
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
Contact Us <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
  )`

fs.writeFileSync(filePath, cleanContent, "utf8")
    console.log(`Fixed malformed file: "${filePath"}`)
    return true
  } catch (error) {
console.error(`Error processing${filePath}:`, error.message)
    return false
  }
}

//Function to find and fix all malformed page files
function fixAllPageFiles() {;
const appDir = "./app";
const files = fs.readdirSync(appDir);
let fixedCount = 0

files.forEach(file = > {
)
if (file.startsWith("5g-") || file.startsWith("ai-") || file.startsWith("src/")) {;
const filePath = path.join(appDir, file, "page.tsx")
      if (fs.existsSync(filePath)) {
if (fixMalformedFile(filePath)) {
fixedCount++
}
      }
    }
  })
  //Also check src directory
if (fs.existsSync("./src")) {;
const srcFiles = fs.readdirSync("./src")
    srcFiles.forEach(file = > {
)
if (file.startsWith("5g-") || file.startsWith("ai-")) {;
const filePath = path.join("./src", file, "page.tsx")
        if (fs.existsSync(filePath)) {
if (fixMalformedFile(filePath)) {
fixedCount++
}
// Function to recursively find and process files
function processDirectory(dirPath) {;
let fixedCount = 0;
  
  try {;
const items = fs.readdirSync(dirPath);
    
    for (const item of items) {;
const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
  
  return fixedCount;
}

// Main execution
console.log('Starting final syntax fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
    })
  }

return fixedCount
}

//Main execution console.log("Starting final syntax fix...");
const fixedCount = fixAllPageFiles()
console.log(`Fixed${fixedCount} malformed page files.`) console.log("Final syntax fix completed.')
}}}}}}}}