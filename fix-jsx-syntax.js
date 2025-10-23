const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues
function fixJSXInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed JSX tags
    content = content.replace(/<\/(\s*)$/gm, '</h1>');
    content = content.replace(/<\/(\s*)$/gm, '</p>');
    content = content.replace(/<\/(\s*)$/gm, '</div>');
    
    // Fix incomplete closing tags
    content = content.replace(/<(\w+)[^>]*>\s*([^<]+)\s*<\//gm, '<$1>$2</$1>');
    
    // Fix any remaining Helmet references
    content = content.replace(/import { Helmet } from "react-helmet-async";/g, 'import Head from "next/head";');
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    // Fix any remaining react-router-dom references
    content = content.replace(/import { Link } from "react-router-dom";/g, 'import Link from "next/link";');
    content = content.replace(/to=/g, 'href=');
    
    // Fix React.Fragment
    content = content.replace(/React\.Fragment/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    
    // Fix <<>> fragments
    content = content.replace(/<<>>/g, '<>');
    content = content.replace(/<\/<>>/g, '</>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all .tsx files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      fixJSXInFile(filePath);
    }
  });
}

// Start fixing from the app directory
fixAllFiles('./app');
console.log('JSX syntax fixes completed!');