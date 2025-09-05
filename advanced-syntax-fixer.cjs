#!/usr/bin/env node

const fs = require('fs');
const path = require('path');



// Files that need fixing
const filesToFix = [
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/index.tsx',
  'pages/it-services.tsx',
  'pages/micro-saas.tsx',
  'pages/services.tsx',
  'pages/talent.tsx',
  'components/layout/MainLayout.tsx'
];

function fixImportStatements(content) {
  // Fix malformed import statements
  let fixed = content;
  
  // Fix import statements with extra characters
  fixed = fixed.replace(/import\s+([^;]+);';,';,/g, 'import $1;');
  fixed = fixed.replace(/import\s+([^;]+);';,;,/g, 'import $1;');
  fixed = fixed.replace(/import\s+([^;]+);';,'";,/g, 'import $1;');
  fixed = fixed.replace(/import\s+([^;]+);';,;,';,/g, 'import $1;');
  fixed = fixed.replace(/import\s+([^;]+);';,';,';,/g, 'import $1;');
  
  // Fix specific patterns
  fixed = fixed.replace(/import React from 'react';';,';,/g, "import React from 'react';");
  fixed = fixed.replace(/import Head from 'next\/head';';,';,/g, "import Head from 'next/head';");
  fixed = fixed.replace(/import Link from 'next\/link';';,;,/g, "import Link from 'next/link';");
  fixed = fixed.replace(/import { motion\s+} from "framer-motion";';,'";,/g, 'import { motion } from "framer-motion";');
  fixed = fixed.replace(/import { motion\s+} from "framer-motion";';,;,';,/g, 'import { motion } from "framer-motion";');
  
  // Fix variable declarations with quotes
  fixed = fixed.replace(/const\s+"([^"]+)":/g, 'const $1:');
  fixed = fixed.replace(/const\s+"([^"]+)":\s+/g, 'const $1: ');
  
  // Fix function declarations
  fixed = fixed.replace(/const\s+"([^"]+)":\s+React\.FC/g, 'const $1: React.FC');
  
  return fixed;
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      
      return false;
    }
    
    
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statements
    content = fixImportStatements(content);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    
    
    return true;
  } catch (error) {
    
    return false;
  }
}

// Fix all files
let fixedCount = 0;
let totalCount = filesToFix.length;

for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}


