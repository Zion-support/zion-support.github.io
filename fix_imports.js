const fs = require('fs');
const path = require('path');

const files = [
  'app/ai-api-manager/page.tsx',
  'app/ai-content-writer/page.tsx', 
  'app/ai-financial-analytics-pro/page.tsx',
  'app/case-studies/page.tsx',
  'app/consultation/page.tsx',
  'app/partners/page.tsx',
  'app/test/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace react-helmet-async with next/head
    content = content.replace(/import { Helmet } from 'react-helmet-async';/g, "import Head from 'next/head';");
    content = content.replace(/import { Helmet } from "react-helmet-async";/g, 'import Head from "next/head";');
    
    // Replace Helmet with Head
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    // Replace react-router-dom with next/link
    content = content.replace(/import { Link } from 'react-router-dom';/g, "import Link from 'next/link';");
    content = content.replace(/import { Link } from "react-router-dom";/g, 'import Link from "next/link";');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('All files fixed!');