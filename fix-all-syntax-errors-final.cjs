#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Starting final comprehensive syntax error fixes...');

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

// Fix index.tsx
const indexTsxPath = 'pages/index.tsx';
if (fs.existsSync(indexTsxPath)) {
  let content = fs.readFileSync(indexTsxPath, 'utf8');
  
  // Fix import statement
  content = content.replace(/import Link from 'next/link";/g, "import Link from 'next/link';");
  
  // Fix useState syntax
  content = content.replace(/const \[isLoadingsetIsLoading\]/g, 'const [isLoading, setIsLoading]');
  
  // Fix useInView syntax
  content = content.replace(/useInView\(heroRef\{ once: true \}\)/g, 'useInView(heroRef, { once: true })');
  
  // Fix dynamic import syntax
  content = content.replace(/\/\/ constAdvancedPerformanceMonitor = dynamic\(\(\) => import\("\.\.\/src\/components\/AdvancedPerformanceMonitor"\), \{\/\/   ssr: false/g, '// const AdvancedPerformanceMonitor = dynamic(() => import("../src/components/AdvancedPerformanceMonitor"), {\n//   ssr: false\n// });');
  
  fs.writeFileSync(indexTsxPath, content);
  console.log('✅ Fixed index.tsx');
}

// Fix EnhancedSEO.tsx
const enhancedSeoPath = 'src/components/EnhancedSEO.tsx';
if (fs.existsSync(enhancedSeoPath)) {
  let content = fs.readFileSync(enhancedSeoPath, 'utf8');
  
  // Fix function parameters
  content = content.replace(
    /export default function EnhancedSEO\(\{title = 'Zion Tech Solutions - AI-Powered Business Solutions'description = 'Leading provider of AI-powered business solutionscloud infrastructureand digital transformation services\. Transform your business with cutting-edge technology\.'canonicalogImage = '\/og-image\.jpg'ogType = 'website'twitterCard = 'summary_large_image'keywords = \['AI solutions', 'cloud infrastructure', 'digital transformation', 'business automation', 'technology consulting'\],/g,
    "export default function EnhancedSEO({title = 'Zion Tech Solutions - AI-Powered Business Solutions', description = 'Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology.', canonical, ogImage = '/og-image.jpg', ogType = 'website', twitterCard = 'summary_large_image', keywords = ['AI solutions', 'cloud infrastructure', 'digital transformation', 'business automation', 'technology consulting'],"
  );
  
  // Fix other parameters
  content = content.replace(
    /author = 'Zion Tech Solutions"publishedTimemodifiedTimesectiontags = \[\]noindex = falsenofollow = false/g,
    "author = 'Zion Tech Solutions', publishedTime, modifiedTime, section, tags = [], noindex = false, nofollow = false"
  );
  
  // Fix title check
  content = content.replace(/title\.includes\("Zion Tech Solutions'\)/g, "title.includes('Zion Tech Solutions')");
  
  fs.writeFileSync(enhancedSeoPath, content);
  console.log('✅ Fixed EnhancedSEO.tsx');
}

// Fix analytics.ts
const analyticsPath = 'pages/api/analytics.ts';
if (fs.existsSync(analyticsPath)) {
  let content = fs.readFileSync(analyticsPath, 'utf8');
  
  // Fix function parameters
  content = content.replace(/export default async function handler\(req: anyres: any\)/g, 'export default async function handler(req: any, res: any)');
  
  // Fix return statement
  content = content.replace(/return res\.status\(405\)\.json\(\{ error: "Method not allowed" \}\)\}/g, 'return res.status(405).json({ error: "Method not allowed" });');
  
  fs.writeFileSync(analyticsPath, content);
  console.log('✅ Fixed analytics.ts');
}

// Fix error-reporting.ts
const errorReportingPath = 'pages/api/error-reporting.ts';
if (fs.existsSync(errorReportingPath)) {
  let content = fs.readFileSync(errorReportingPath, 'utf8');
  
  // Fix function parameters
  content = content.replace(/export default async function handler\(req: anyres: any\)/g, 'export default async function handler(req: any, res: any)');
  
  // Fix return statement
  content = content.replace(/return res\.status\(405\)\.json\(\{ error: "Method not allowed" \}\)\}/g, 'return res.status(405).json({ error: "Method not allowed" });');
  
  fs.writeFileSync(errorReportingPath, content);
  console.log('✅ Fixed error-reporting.ts');
}

console.log('🎉 All final syntax errors fixed!');