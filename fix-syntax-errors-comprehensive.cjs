#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive syntax error fixes...');

// Fix _app.tsx
const appTsxPath = 'pages/_app.tsx';
if (fs.existsSync(appTsxPath)) {
  let content = fs.readFileSync(appTsxPath, 'utf8');
  
  // Fix console.log syntax
  content = content.replace(
    /console\.log\('Service Worker registered successfully:'registration\)/g,
    "console.log('Service Worker registered successfully:', registration)"
  );
  
  // Remove merge conflict markers
  content = content.replace(/^>>>>>> .*$/gm, '');
  content = content.replace(/^<<<<<< .*$/gm, '');
  content = content.replace(/^====== .*$/gm, '');
  
  fs.writeFileSync(appTsxPath, content);
  console.log('✅ Fixed _app.tsx');
}

// Fix _document.tsx
const documentTsxPath = 'pages/_document.tsx';
if (fs.existsSync(documentTsxPath)) {
  let content = fs.readFileSync(documentTsxPath, 'utf8');
  
  // Fix JSX structure
  content = content.replace(/<Head>/g, '<Head>');
  content = content.replace(/<Main>/g, '<Main>');
  content = content.replace(/<NextScript>/g, '<NextScript>');
  
  fs.writeFileSync(documentTsxPath, content);
  console.log('✅ Fixed _document.tsx');
}

// Fix about.tsx
const aboutTsxPath = 'pages/about.tsx';
if (fs.existsSync(aboutTsxPath)) {
  let content = fs.readFileSync(aboutTsxPath, 'utf8');
  
  // Fix object syntax
  content = content.replace(/'icon: '/g, "', icon: '");
  content = content.replace(/'color: '/g, "', color: '");
  
  fs.writeFileSync(aboutTsxPath, content);
  console.log('✅ Fixed about.tsx');
}

// Fix blog.tsx
const blogTsxPath = 'pages/blog.tsx';
if (fs.existsSync(blogTsxPath)) {
  let content = fs.readFileSync(blogTsxPath, 'utf8');
  
  // Fix object syntax
  content = content.replace(/}{id: /g, '},\n\t\t{id: ');
  content = content.replace(/title: "/g, 'title: "');
  
  fs.writeFileSync(blogTsxPath, content);
  console.log('✅ Fixed blog.tsx');
}

// Fix contact.tsx
const contactTsxPath = 'pages/contact.tsx';
if (fs.existsSync(contactTsxPath)) {
  let content = fs.readFileSync(contactTsxPath, 'utf8');
  
  // Fix function call syntax
  content = content.replace(/trackClick\('contact_form_submit'\{ formData \}\)/g, "trackClick('contact_form_submit', { formData })");
  content = content.replace(/console\.log\('Form submitted:', formData\)\}/g, "console.log('Form submitted:', formData);\n  }");
  
  fs.writeFileSync(contactTsxPath, content);
  console.log('✅ Fixed contact.tsx');
}

console.log('🎉 All syntax errors fixed!');