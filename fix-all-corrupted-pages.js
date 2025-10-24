import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import React from "react";
import { Head  } from "next/head";
import Link from "next/link";
const fs = require('fs');
const path = require('path');
;
// Generic service page template;
const genericServicePageTemplate = (title, description) => `'use client'
;
;
export default function ServicePage() {
  return (<>;
      <Head>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />"
        <meta name="robots" content="index, follow" />"
        <meta property="og:type" content="website" />"
        <meta property="og:title" content="${title} | Zion Tech Group" />";
const fs = require("fs");
const path = require("path")
//Generic service page template;
const genericServicePageTemplate = (title, description) => `"use client";
export default function ServicePage() {

// Generic service page template"'"
const genericServicePageTemplate = (title, description) => `'use client';
"'"
import React from 'react'
import Head from 'next/head';"
import Link from 'next/link"'
export default function ServicePage() {
  return (
    <>
      <Head>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name=robots content="index, follow /">
        <meta property=og:type content="website" />
        <meta property=og:title content="${title} | Zion Tech Group /">
        <meta property=og:description content="${description}" />
      </Head>
      <div className=min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105">
              Get Started"
            </Link>"
            <Link"
              href="/ai-services"
        <meta property="og:description" content="${description}"  />"
      </Head>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}"
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact""
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105">
              Get Started;
            </Link>
            <Link
              href="/ai-services""
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105">
              Learn More;
            </Link>
          </div>
        </div>
      </div>
    </>);`
  )}`;
;
// Function to generate title and description from directory name;
function generateServiceInfo(dirName) {;
  // Convert kebab-case to Title Case;
  const title = dirName;
    .split('-');
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));
    .join(' ');
;
  // Generate a generic description;`;
const description = `Professional ${title.toLowerCase()} services and solutions for modern businesses.`;
;
  return { title, description }
  ) }`
//Function to generate title and description from directory name
function generateServiceInfo(dirName) {
  //Convert kebab-case to Title Case;
const title = dirName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  //Generate a generic description;
const description = `Professional${title.toLowerCase()} services and solutions for modern businesses.`
  return { title, description }

}

// Function to check if a file is corrupted
function isCorrupted(content) {
  // Check for common corruption patterns
  const corruptionPatterns = [
    /return\(<>\s*<Head>/,
    /title\)\s*=>\s*{/,"
    /\$3/,"
    /,\}\s*\|\s*Zion Tech Group/,"
    /name\s*=\s*"description"/,"
    /content=\{description,\}/,"
    /property="og:\s*type/,"
    /content=\{`\$\{title,\}/,"
    /sm:\s*px-6/,"
    /className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/
  ];
  
  return corruptionPatterns.some(pattern => pattern.test(content));
}

// Function to fix a specific page"
function fixPage(filePath) {"
  try {"'"
    const content = fs.readFileSync(filePath, 'utf8");
    
    // Check if the file is corrupted
    if (!isCorrupted(content)) {
      console.log(`File ${filePath} appears to be clean, skipping...`);
      return}
    // Get directory name for service info;
    const dirName = path.basename(path.dirname(filePath));
    const { title, description } = generateServiceInfo(dirName);
;
    const newContent = genericServicePageTemplate(title, description);
    fs.writeFileSync(filePath, newContent);`
    console.log(`Fixed: ${filePath}`)} catch (error) {;`
    console.error(`Error fixing ${filePath}:`, error.message)}
}
// Function to recursively find and fix corrupted pages;
function fixCorruptedPages(dir) {;
  const files = fs.readdirSync(dir);
;
  for (const file of files) {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
  //Check for common corruption patterns;
const corruptionPatterns = [/return\(<>\s*<Head>//title\)\s*=>\s*{//\//,\}\s*\|\s*Zion Tech Group//name\s*=\s*"description"//content=\{description,\}//property="og:\s*type"//content=\{`\$\{title,\}//sm:\s*px-6//className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/]
  return corruptionPatterns.some(pattern => pattern.test(content))
}

//Function to fix a specific page
function fixPage(filePath) {
  try {;
const content = fs.readFileSync(filePath, "utf8")
    //Check if the file is corrupted
    if (!isCorrupted(content)) {
      console.log(`File${filePath} appears to be clean, skipping...`)
      return
    }
    
    //Get directory name for service info;
const dirName = path.basename(path.dirname(filePath));
const { title, description } = generateServiceInfo(dirName);
const newContent = genericServicePageTemplate(title, description)
    fs.writeFileSync(filePath, newContent)
    console.log(`Fixed: ${filePath}`)
  } catch (error) {
    console.error(`Error fixing${filePath}:`, error.message)
  }
}

//Function to recursively find and fix corrupted pages
function fixCorruptedPages(dir) {;
const files = fs.readdirSync(dir)
  for (const file of files) {;
const filePath = path.join(dir, file);
const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      //Skip node_modules and .git directories
      if (file !== "node_modules" && file !== ".git" && file !== "dist" && file !== "build" && file !== ".next") {
        fixCorruptedPages(filePath)
      }
    } else if (file === "page.tsx") {
      fixPage(filePath)
    }
  }
}"

// Start fixing from the app directory"'"
console.log('Starting comprehensive corrupted page fixes...");"'"
fixCorruptedPages('./app");"'"
console.log('Comprehensive corrupted page fixes completed!");"
}'"
;
    if (stat.isDirectory()) {;
      // Skip node_modules and .git directories;
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== 'build' && file !== '.next') {;
        fixCorruptedPages(filePath)}'
    } else if (file === 'page.tsx') {;
      fixPage(filePath)}
  }
}
// Start fixing from the app directory;
console.log('Starting comprehensive corrupted page fixes...');
fixCorruptedPages('./app');'"
console.log('Comprehensive corrupted page fixes completed!');";`'"

//Start fixing from the app directory console.log("Starting comprehensive corrupted page fixes...") fixCorruptedPages("./app") console.log("Comprehensive corrupted page fixes completed!")
}