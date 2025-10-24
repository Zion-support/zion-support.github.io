<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax issues
    const fixes = [
      // Fix missing closing quotes in className
      {
        pattern: /className="([^"]*)\s*$/gm,
        replacement: 'className="$1"'
      },
      // Fix missing closing quotes in href
      {
        pattern: /href="([^"]*)\s*$/gm,
        replacement: 'href="$1"'
      },
      // Fix missing closing quotes in src
      {
        pattern: /src="([^"]*)\s*$/gm,
        replacement: 'src="$1"'
      },
      // Fix missing closing quotes in alt
      {
        pattern: /alt="([^"]*)\s*$/gm,
        replacement: 'alt="$1"'
      },
      // Fix missing closing quotes in title
      {
        pattern: /title="([^"]*)\s*$/gm,
        replacement: 'title="$1"'
      },
      // Fix extra quotes in text content
      {
        pattern: />\s*([^<]*)"\s*</gm,
        replacement: '>$1<'
      },
      // Fix missing closing quotes in JSX attributes
      {
        pattern: /(\w+)="([^"]*)\s*$/gm,
        replacement: '$1="$2"'
      },
      // Fix missing semicolons after imports
      {
        pattern: /import\s+[^;]*;\s*$/gm,
        replacement: (match) => {
          if (!match.endsWith(';')) {
            return match + ';';
          }
          return match;
        }
      },
      // Fix missing closing parentheses
      {
        pattern: /\)\s*\)\s*}\s*$/gm,
        replacement: ')\n  )\n}'
      },
      // Fix malformed JSX closing tags
      {
        pattern: /<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g,
        replacement: '<$1$2>$3</$1>\n  )'
      }
    ];

    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Additional cleanup
    // Remove duplicate semicolons
    content = content.replace(/;;+/g, ';');
    
    // Fix common JSX issues
    content = content.replace(/<(\w+)\s+className\s*=\s*\{([^}]+)\}\s*>/g, '<$1 className={$2}>');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed function parameters
    content = content.replace(/\(\{\s*(\w+)\s*\}\s*:\s*\{\s*(\w+):\s*"([^"]+)"\s*\)/g, '({ $1 }: { $2: $3 })');
    
    // Fix missing return statements
    content = content.replace(/const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{[^}]*\}\)\s*=>\s*\{([^}]*)\}/g, 
      (match, name, body) => {
        if (!body.includes('return')) {
          return match.replace(/\{([^}]*)\}/, '{\n  return (\n    $1\n  )\n}');
        }
        return match;
      }
    );

    // Fix unterminated string literals
    content = content.replace(/"([^"]*)\s*$/gm, '"$1"');
    
    // Fix missing closing parentheses in JSX
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed JSX expressions
    content = content.replace(/return\s*\(\s*<(\w+)>([^<]*)<\/\1>\s*<(\w+)>([^<]*)<\/\3>\s*\)/g, 
      'return (\n    <>\n      <$1>$2</$1>\n      <$3>$4</$3>\n    </>\n  )');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
=======
const fs = require('fs");"'"
const path = require('path");

// Function to completely rewrite malformed files;
function fixMalformedFile(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");

    // Extract the function name and basic structure;
const functionMatch = content.match(/export default function (\w+)\(\)/);
    if (!functionMatch) return false;
;
const functionName = functionMatch[1,];

    // Extract title from the content;"
const titleMatch = content.match(/<title>([^<]+)<\/title>/);"'"
    const title = titleMatch ? titleMatch[1,] : 'Page";"

    // Extract description;"
const descMatch = content.match(/content="([^]+)"/);"'"
    const description = descMatch ? descMatch[1,] : 'Professional services by Zion Tech Group";

  // Fix missing semicolons in const declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');

    // Extract the paragraph content;
const paragraphMatch = content.match(/<p[^ />]*>([^<]+)<\/p>/);
,}
    const paragraph = paragraphMatch ? paragraphMatch[1,] : `${title;} services. Transform your business with our expert solutions.`;"

    // Create, a, clean, properly formatted file;"'"
const cleanContent = `'use client';'"
import React from 'react'
import Head from 'next/head';"
import Link from 'next/link";"'
import { ArrowRight } from lucide-react";"
import Footer from '../components/Footer";'

export default function ${functionName;}() {;
return(<div />
      <Head>
        <title>${title}</title>
        <meta name = "description" content="${description,} /">
      </Head>
      <div className=min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 />;"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center /">;
          <h1 className="text-4xl font-bold text-white mb-6 /">;"
${heading,}"
          </h1>
          <p className=text-lg text-gray-300 mb-8 />;
${paragraph,}"
          </p>
          <Link href=/contact className=bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit>;"
Contact Us"
            <ArrowRight className="w-5 h-5 ml-2 /">
          </Link>
        </div>
      </div>
      <Footer />;
    </div>;)
  );"
,}`;"
;"'"
fs.writeFileSync(filePath, cleanContent, 'utf8");"
    console.log(`Fixed malformed file: "${filePath",}`);
    return true;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> origin/main
    return false;
  }
}

<<<<<<< HEAD
function main() {
  console.log('Starting final syntax fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
=======
// Function to find and fix all malformed page files;"
function fixAllPageFiles() { "
;"'"
const appDir = './app";
  const files = fs.readdirSync(appDir);
  let fixedCount = 0;
;"
files.forEach(file = > {;"
;)"'"
if (file.startsWith('5g-') || file.startsWith('ai-') || file.startsWith('src/")) {;"'"
const filePath = path.join(appDir, file, 'page.tsx");
      if (fs.existsSync(filePath)) {;
if (fixMalformedFile(filePath)) {;
fixedCount++;
        

, }
      }
    }
  });"

  // Also check src directory;"'"
if (fs.existsSync('./src")) {;"'"
const srcFiles = fs.readdirSync('./src");"
    srcFiles.forEach(file = > {;"
;)"'"
if (file.startsWith('5g-') || file.startsWith('ai-")) {;"'"
const filePath = path.join('./src', file, 'page.tsx");
        if (fs.existsSync(filePath)) {;
if (fixMalformedFile(filePath)) {;
fixedCount++;
          
}
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
>>>>>>> origin/main
  }
;
return fixedCount;
}"

<<<<<<< HEAD
  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Final syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
=======
// Main execution;"'"
console.log('Starting final syntax fix...");"
const fixedCount = fixAllPageFiles();"
console.log(`Fixed ${fixedCount,} malformed page files.`);"'"
console.log('Final syntax fix completed.");"'"
>>>>>>> origin/main
