import React from "react";
import { Head  } from "next/head";
import { Link  } from "next/link";
import { ArrowRight  } from "lucide-react";
import { Footer  } from "../components/Footer";
// Function to fix all remaining syntax issues
function fixFinalSyntax(content) {;
let fixed = content;

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
    return false;
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
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
;
return fixedCount;
}"

return fixedCount
}

//Main execution console.log("Starting final syntax fix...");
const fixedCount = fixAllPageFiles()
console.log(`Fixed${fixedCount} malformed page files.`) console.log("Final syntax fix completed.')
}}}}}}}}