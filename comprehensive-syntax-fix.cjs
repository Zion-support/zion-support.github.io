#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Starting comprehensive syntax fix...');

// Fix _app.tsx
const appTsxPath = 'pages/_app.tsx';
if (fs.existsSync(appTsxPath)) {
  let content = fs.readFileSync(appTsxPath, 'utf8');
  
  // Add return statement before JSX
  content = content.replace(
    /(\s+)(<style jsx global>)/,
    '$1return (\n$1<HelmetProvider>\n$1$2'
  );
  
  // Close the HelmetProvider properly
  content = content.replace(
    /(\s+)(<\/HelmetProvider>)/,
    '$1$2\n$1);'
  );
  
  fs.writeFileSync(appTsxPath, content);
  console.log('✅ Fixed _app.tsx');
}

// Fix _document.tsx
const documentTsxPath = 'pages/_document.tsx';
if (fs.existsSync(documentTsxPath)) {
  let content = fs.readFileSync(documentTsxPath, 'utf8');
  
  // Ensure proper JSX structure
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
  
  // Fix the return statement placement
  content = content.replace(
    /(\s+)(return \(\)/,
    '$1$2'
  );
  
  // Fix JSX structure
  content = content.replace(/<Head>/g, '<Head>');
  
  fs.writeFileSync(aboutTsxPath, content);
  console.log('✅ Fixed about.tsx');
}

// Fix blog.tsx
const blogTsxPath = 'pages/blog.tsx';
if (fs.existsSync(blogTsxPath)) {
  let content = fs.readFileSync(blogTsxPath, 'utf8');
  
  // Fix remaining object syntax issues
  content = content.replace(/}{id: /g, '},\n\t\t{id: ');
  content = content.replace(/title: "/g, 'title: "');
  
  // Fix JSX structure
  content = content.replace(
    /(\s+)(<EnhancedSEO)/,
    '$1return (\n$1$2'
  );
  
  fs.writeFileSync(blogTsxPath, content);
  console.log('✅ Fixed blog.tsx');
}

// Fix contact.tsx
const contactTsxPath = 'pages/contact.tsx';
if (fs.existsSync(contactTsxPath)) {
  let content = fs.readFileSync(contactTsxPath, 'utf8');
  
  // Fix JSX structure
  content = content.replace(
    /(\s+)(return \()/,
    '$1$2'
  );
  
  content = content.replace(/<Head>/g, '<Head>');
  
  fs.writeFileSync(contactTsxPath, content);
  console.log('✅ Fixed contact.tsx');
}

console.log('🎉 Comprehensive syntax fix completed!');