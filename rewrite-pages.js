<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");"
"
function createProperPage(filePath) {"'"
  const fileName = path.basename(filePath, '.tsx");"'"
  const pageName = fileName.replace(/-/g, ' ").replace(/\b\w/g, l => l.toUpperCase());"
  "'"
  const content = `'use client";"'"
import React from 'react";"
import Head from 'next/head";"
import Link from 'next/link";"
import { ArrowRight } from 'lucide-react";"
import Footer from '../components/Footer";"
"'"
export default function ${fileName.replace(/-/g, '")}Page() {
  return (
    <div>"
      <Head>"
        <title>${pageName} - Zion Tech Group</title>"
        <meta name="description" content="Professional services by Zion Tech Group." />"
      </Head>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">"
          <h1 className="text-4xl font-bold text-white mb-6">"
            ${pageName}"
          </h1>"
          <p className="text-lg text-gray-300 mb-8">
            Professional services by Zion Tech Group."
          </p>"
          <Link"
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >"
            Get Started"
            <ArrowRight className="ml-2 h-5 w-5" />
=======
const fs = require('fs');
const path = require('path');
;
function createProperPage(filePath) {;
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
;
  const content = `'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight    } from 'lucide-react'
import Footer from '../components/Footer'
;
export default function ${fileName.replace(/-/g, '')}Page() {;
  return (<div>
      <Head>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group."  />"
      </Head>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${pageName}"
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional services by Zion Tech Group.;
          </p>
          <Link
            href="/contact""
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >"
            Get Started"
            <ArrowRight className="ml-2 h-5 w-5"  />;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
          </Link>
        </div>
      </div>
      <Footer  />;
    </div>);`
  )}`;
;
  fs.writeFileSync(filePath, content);`
  console.log(`Rewrote: ${filePath}`)}
function findAndRewritePages(dir) {;
  const files = fs.readdirSync(dir);
<<<<<<< HEAD
  
  for (const file of files) {
    const filePath = path.join(dir, file);"
    const stat = fs.statSync(filePath);"
    "'"
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules") {"
      findAndRewritePages(filePath);"'"
    } else if (file.endsWith('page.tsx') && !file.includes('layout') && !file.includes('404")) {
      createProperPage(filePath);
    }
  }
}"
"
// Start rewriting from the app directory"'"
findAndRewritePages('./app");"
"'"
console.log('Page rewriting completed!");"
"'"
=======
;
  for (const file of files) {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {;
      findAndRewritePages(filePath)} else if (file.endsWith('page.tsx') && !file.includes('layout') && !file.includes('404')) {;
      createProperPage(filePath)}
  }
}
// Start rewriting from the app directory;
findAndRewritePages('./app');
;
console.log('Page rewriting completed!');"
";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
