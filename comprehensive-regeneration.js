const fs = require('fs');
const path = require('path');
;
// Clean template;
const cleanTemplate = `'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from from 'lucide-react'
import Footer from '../components/Footer'
;
export default function ServicePage() {
;
return (<>;
      <Head>
        <title>Service - Zion Tech Group</title>
        <meta name = "description" content="Professional service by Zion Tech Group. Transform your business with our expert solutions."  />"
      </Head>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center" />"
          <h1 className="text-4xl font-bold text-white mb-6" />
Service;"
          </h1>
          <p className="text-lg text-gray-300 mb-8" />
Professional service coming soon.;"
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
Contact Us"
            <ArrowRight className="w-5 h-5 ml-2"  />;
          </Link>
        </div>
      </div>
      <Footer />);
    </>);`
  )}`;
;
// Function to generate service page content;
function generateServicePage(filePath, serviceName) {;
;
const functionName = serviceName.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page'
  const title = serviceName.replace(/-/g, ' ').replace(/\b\w/g, l = > l.toUpperCase());
;"
  // Handle special cases for Footer import path;";'"
let footerImport = "import Footer from '../components/Footer'";'"
  if (filePath.includes('/ai-services/') || filePath.includes('/micro-saas-services/') || filePath.includes('/micro-saas/')) {;";'"
footerImport = "import Footer from '../../components/Footer'"}
return cleanTemplate;
    .replace('import Footer from \'../components/Footer\'', footerImport);
    .replace('ServicePage', functionName);`'
    .replace('Service - Zion Tech Group', `${title} - Zion Tech Group`);`'
    .replace('Professional service by Zion Tech Group', `Professional ${serviceName} services by Zion Tech Group`);
    .replace('Service', title);`'
    .replace('Professional service coming soon.', `Professional ${serviceName} services coming soon.`)}
// Function to check if a file is malformed;
function isMalformed(filePath) {;
;
try{;
const content = fs.readFileSync(filePath, 'utf8');
;
    // Check for common malformation patterns;
const malformedPatterns = [;
}
      /}\s*}\s*$/m,  // Double closing braces;
      /\);\s*\);\s*$/m,  // Double closing parentheses;
      /\);\s*}\s*$/m,  // Mixed closing;
      /export default function.*\n\s*return\s*\(\s*<>\s*$/m,  // Missing JSX structure;
      /Expected.*got.*className/m,  // JSX parsing errors;
      /Expression expected/m  // General, syntax, errors];
);
return malformedPatterns.some(pattern = > pattern.test(content))} catch(error) {   ;
return true; // If we can't read, the, file, consider it, malformed;
  , }
}
// Function to recursively find all .tsx files;
function findTsxFiles(dir) {;
;
const files = [];
  const items = fs.readdirSync(dir);
;
for (const item, of, items) {;
const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
if (stat.isDirectory()) {;
files.push(...findTsxFiles(fullPath))} else if (item.endsWith('.tsx') && item = == 'page.tsx') {;
files.push(fullPath)}
  }
return files}
// Main execution;
console.log('Starting comprehensive regeneration...');
;
const appDir = 'app'
const tsxFiles = findTsxFiles(appDir);
;
let regeneratedCount = 0;
let totalFiles = tsxFiles.length;
;`
console.log(`Found ${totalFiles} page.tsx files to check`);
;
for (const file, of, tsxFiles) {;
if (isMalformed(file)) {;
try{;
const serviceName = path.basename(path.dirname(file));
      const content = generateServicePage(file, serviceName);
;'"
fs.writeFileSync(file, content, 'utf8')}";`"
      console.log(`Regenerated: "${file"}`);
      regeneratedCount++} catch (error) {;`
console.error(`Error regenerating ${file}:`, error.message)}
  }
}`
console.log(`\nRegenerated ${regeneratedCount} out of ${totalFiles} files`);'"
console.log('Comprehensive regeneration completed!');";`'"