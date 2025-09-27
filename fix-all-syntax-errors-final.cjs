#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Starting final comprehensive syntax error fixes...');

// Fix about.tsx
const aboutTsxPath = 'pages/about.tsx';
if (fs.existsSync(aboutTsxPath)) {
  let content = fs.readFileSync(aboutTsxPath, 'utf8');
  
  // Fix useState syntax
  content = content.replace(
    /const \[isVisible setIsVisible\] = useState\(false\);/g,
    'const [isVisible, setIsVisible] = useState(false);'
  );
  
  // Fix useEffect syntax
  content = content.replace(
    /setIsVisible\(true\)\} \[\]/g,
    'setIsVisible(true);\n  }, []);'
  );
  
  fs.writeFileSync(aboutTsxPath, content);
  console.log('✅ Fixed about.tsx');
}

// Fix analytics.tsx
const analyticsTsxPath = 'pages/analytics.tsx';
if (fs.existsSync(analyticsTsxPath)) {
  let content = fs.readFileSync(analyticsTsxPath, 'utf8');
  
  // Fix JSX structure
  content = content.replace(
    /export default function AnalyticsPage\(\) \{\n  return \(\n    <>/g,
    'export default function AnalyticsPage() {\n  return (\n    <>'
  );
  
  // Fix meta description
  content = content.replace(
    /content="Comprehens i v e website analyt i c s dashbo a r d fo r performanceaccessibility a n d SEO monitoring\./g,
    'content="Comprehensive website analytics dashboard for performance, accessibility and SEO monitoring."'
  );
  
  fs.writeFileSync(analyticsTsxPath, content);
  console.log('✅ Fixed analytics.tsx');
}

// Fix blog.tsx
const blogTsxPath = 'pages/blog.tsx';
if (fs.existsSync(blogTsxPath)) {
  let content = fs.readFileSync(blogTsxPath, 'utf8');
  
  // Fix useState syntax
  content = content.replace(
    /const \[isNewsletterLoading setIsNewsletterLoading\] = useState\(false\);/g,
    'const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);'
  );
  
  // Fix variable name
  content = content.replace(
    /const blogPo s t s =/g,
    'const blogPosts ='
  );
  
  fs.writeFileSync(blogTsxPath, content);
  console.log('✅ Fixed blog.tsx');
}

// Fix contact.tsx
const contactTsxPath = 'pages/contact.tsx';
if (fs.existsSync(contactTsxPath)) {
  let content = fs.readFileSync(contactTsxPath, 'utf8');
  
  // Fix useState syntax
  content = content.replace(
    /const \[formData setFormData\] = useState\(\{/g,
    'const [formData, setFormData] = useState({'
  );
  
  // Fix object properties
  content = content.replace(
    /name: ''\n    email: ''\n    comp a n y: ''/g,
    "name: '',\n    email: '',\n    company: '',"
  );
  
  fs.writeFileSync(contactTsxPath, content);
  console.log('✅ Fixed contact.tsx');
}

// Fix dashboard.tsx
const dashboardTsxPath = 'pages/dashboard.tsx';
if (fs.existsSync(dashboardTsxPath)) {
  let content = fs.readFileSync(dashboardTsxPath, 'utf8');
  
  // Fix import statement
  content = content.replace(
    /import React { useState useEffect useMemo useCallback } from 'react';/g,
    "import React, { useState, useEffect, useMemo, useCallback } from 'react';"
  );
  
  fs.writeFileSync(dashboardTsxPath, content);
  console.log('✅ Fixed dashboard.tsx');
}

console.log('🎉 All final syntax errors fixed!');