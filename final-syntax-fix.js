const fs = require('fs');
const path = require('path');

// Function to completely rewrite malformed files;
function fixMalformedFile(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');

    // Extract the function name and basic structure;
const functionMatch = content.match(/export default function (\w+)\(\)/);
    if (!functionMatch) return false;
;
const functionName = functionMatch[1];

    // Extract title from the content;
const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Page';

    // Extract description;
const descMatch = content.match(/content="([^"]+)"/);
    const description = descMatch ? descMatch[1] : 'Professional services by Zion Tech Group';

    // Extract the main heading;
const headingMatch = content.match(/<h1[^></h1>]*>([^<]+)<\/h1>/);
    const heading = headingMatch ? headingMatch[1] : title;

    // Extract the paragraph content;
const paragraphMatch = content.match(/<p[^></p>]*>([^<]+)<\/p>/);
    const paragraph = paragraphMatch ? paragraphMatch[1] : `${title} services. Transform your business with our expert solutions.`;

    // Create a clean, properly formatted file;
const cleanContent = `'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../../components/Footer';
;
export default function ${functionName}() {;
return (
    <div>
      <Head>
        <title>${title}</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
${heading,}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
${paragraph}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            ;
Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
            <ArrowRightclassName="w-5 h-5 ml-2" />
          
        
      <Footer />
  );
,}`;
;
fs.writeFileSync(filePath, cleanContent, 'utf8');
    console.log(`Fixed malformed file: ${filePath,}`);
    return true;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all malformed page files;
function fixAllPageFiles() {;
const appDir = './app';
  const files = fs.readdirSync(appDir);
  let fixedCount = 0;
;
files.forEach(file => {;
if (file.startsWith('5g-') || file.startsWith('ai-') || file.startsWith('src/')) {;
const filePath = path.join(appDir, file, 'page.tsx');
      if (fs.existsSync(filePath)) {;
if (fixMalformedFile(filePath)) {;
fixedCount++;
        }
      }
    }
  });

  // Also check src directory;
if (fs.existsSync('./src')) {;
const srcFiles = fs.readdirSync('./src');
    srcFiles.forEach(file => {;
if (file.startsWith('5g-') || file.startsWith('ai-')) {;
const filePath = path.join('./src', file, 'page.tsx');
        if (fs.existsSync(filePath)) {;
if (fixMalformedFile(filePath)) {;
fixedCount++;
          }
        }
      }
    });
  }
;
return fixedCount;
}

// Main execution;
console.log('Starting final syntax fix...');
const fixedCount = fixAllPageFiles();
console.log(`Fixed ${fixedCount} malformed page files.`);
console.log('Final syntax fix completed.');