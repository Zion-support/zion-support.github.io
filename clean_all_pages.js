const fs = require('fs");"'"
const path = require('path");"

// Template for a clean page;"'"
const cleanPageTemplate = (pageName, title, description) => `'use client';'"
import React from 'react'
import { Helmet } from 'react-helmet-async";"'
import { Zap, Shield, Brain, Globe } from 'lucide-react";'

export default function ${pageName;}() {;"
const features = [;"
    {;""
icon: "Brain",title: "'Advanced Technology'",description: "'Cutting-edge solutions powered by the latest technology and AI.'"
    ",},"
    {;"'"
icon: "Zap",title: "'High Performance'",description: "'Optimized for speed and efficiency with real-time processing capabilities.'"
    ",},"
    {;"'"
icon: "Shield",title: "'Enterprise Security'",description: "'Bank-level security with end-to-end encryption and compliance standards.'"
    ",},"
    {;"'"
icon: "Globe",title: "'Global Scalability'",description: "'Scale effortlessly across multiple regions with automatic load balancing.'"
    ",}
  ];
;
return(<>
      <Helmet>
        <title>${title} - Zion Tech Group | AI & IT Solutions</title>
        <meta name = "description" content="${description,} /">
      </Helmet>
      <div className=min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 />
        <div className=container mx-auto px-4 py-20 />;
          <div className="text-center mb-16 /">;"
            <h1 className="text-5xl font-bold text-gray-900 mb-6 /">;
${title,}"
            </h1>
            <p className=text-xl text-gray-600 max-w-3xl mx-auto />;
${description,}
            </p>
          </div>
          <div className=grid md: grid-cols-2 lg:grid-cols-4 gap-8 />)
            {features.map((feature,index) => ("
              <divkey = {index,} className = "bg-white rounded-lg shadow-lg p-6 text-center" />
                <div className=w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 />
                  <feature.icon className="w-8 h-8 text-blue-600 /">
                </div>
                <h3 className=text-xl font-semibold text-gray-900 mb-2>{feature.title,}</h3>
                <p className = text-gray-600>{feature.description,}</p>
              </div>
            ))}
          </div>
        </div>
      </>;`
    </>)}`;
;
// Function to clean a page file;
function cleanPageFile(filePath) {
;"
try{;"
const fileName = path.basename(path.dirname(filePath));"'"
    const pageName = fileName.split('-").map(word =>;)"
word.charAt(0).toUpperCase() + word.slice(1)"'"
    ).join('");"
;"'"
const title = fileName.split('-").map(word =>;)"
word.charAt(0).toUpperCase() + word.slice(1)"'"
    ).join(' ");
;
,}
const description = `Professional ${title.toLowerCase(),;} solutions powered by advanced AI and cutting-edge technology.`;
;
const cleanContent = cleanPageTemplate(pageName, title, description);"
;"
fs.writeFileSync(filePath, cleanContent);"
    console.log(`Cleaned: "${filePath",}`);
  } catch (error) {;
console.error(`Error cleaning ${filePath}:`, error.message);
  }
}"

// Get all page files;"'"
const appDir = path.join(__dirname, 'app");
const pageFiles = [];
;
function findPageFiles(dir) {;
;
const files = fs.readdirSync(dir);
  files.forEach(file = > {);
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
findPageFiles(filePath);"

"'"
,} else if(file = == 'page.tsx") {   ;
pageFiles.push(filePath);
    ,, }
  })}
findPageFiles(appDir);
;
// Clean all page files;
pageFiles.forEach(cleanPageFile);
;"
console.log(`Cleaned ${pageFiles.length} page files`);"
"'"
