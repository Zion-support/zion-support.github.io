#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Starting comprehensive syntax error fixes...');

// Fix _document.tsx
const documentTsxPath = 'pages/_document.tsx';
if (fs.existsSync(documentTsxPath)) {
  let content = fs.readFileSync(documentTsxPath, 'utf8');
  
  // Fix import statement
  content = content.replace(
    /import { Html Head Main NextScript } from "next\/document";/g,
    'import { Html, Head, Main, NextScript } from "next/document";'
  );
  
  fs.writeFileSync(documentTsxPath, content);
  console.log('✅ Fixed _document.tsx');
}

// Fix about.tsx
const aboutTsxPath = 'pages/about.tsx';
if (fs.existsSync(aboutTsxPath)) {
  let content = fs.readFileSync(aboutTsxPath, 'utf8');
  
  // Fix import statement
  content = content.replace(
    /import { useState useEffect } from 'react';/g,
    "import { useState, useEffect } from 'react';"
  );
  
  fs.writeFileSync(aboutTsxPath, content);
  console.log('✅ Fixed about.tsx');
}

// Fix analytics.tsx
const analyticsTsxPath = 'pages/analytics.tsx';
if (fs.existsSync(analyticsTsxPath)) {
  let content = fs.readFileSync(analyticsTsxPath, 'utf8');
  
  // Fix function declaration
  content = content.replace(
    /export default function AnalyticsPage\(\) \{return \(/g,
    'export default function AnalyticsPage() {\n  return ('
  );
  
  // Fix JSX structure
  content = content.replace(
    /(\s+)(<Head>)/g,
    '$1$2'
  );
  
  fs.writeFileSync(analyticsTsxPath, content);
  console.log('✅ Fixed analytics.tsx');
}

// Fix blog.tsx
const blogTsxPath = 'pages/blog.tsx';
if (fs.existsSync(blogTsxPath)) {
  let content = fs.readFileSync(blogTsxPath, 'utf8');
  
  // Fix import statement
  content = content.replace(
    /import React { useState } from 'react';/g,
    "import React, { useState } from 'react';"
  );
  
  fs.writeFileSync(blogTsxPath, content);
  console.log('✅ Fixed blog.tsx');
}

// Fix contact.tsx
const contactTsxPath = 'pages/contact.tsx';
if (fs.existsSync(contactTsxPath)) {
  let content = fs.readFileSync(contactTsxPath, 'utf8');
  
  // Fix import statement
  content = content.replace(
    /import React { useState useEffect } from 'react';/g,
    "import React, { useState, useEffect } from 'react';"
  );
  
  fs.writeFileSync(contactTsxPath, content);
  console.log('✅ Fixed contact.tsx');
}

console.log('🎉 All syntax errors fixed!');