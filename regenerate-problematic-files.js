import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from from 'lucide-react';
import Footer from '../components/Footer'
import React from "react";
import { Head  } from "next/head";
import { Link  } from "next/link";
import { ArrowRight  } from "lucide-react";
import Footer from "../components/Footer";
const fs = require('fs');
const path = require('path');
;
// Clean template;
const cleanTemplate = `'use client';
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
// List of most problematic files to regenerate;
const problematicFiles = [;
  'app/ai-automation/page.tsx',;
  'app/ai-chatbot-builder/page.tsx',;
  'app/ai-content-generator/page.tsx',;
  'app/ai-automation-platform/page.tsx','app/ad-management/page.tsx'
];
;
// Function to generate service page content;
function generateServicePage(filePath, serviceName) {;
;
const functionName = serviceName.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
const title = serviceName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
;
return cleanTemplate;
    .replace('ServicePage', functionName);`'
    .replace('Service - Zion Tech Group', `${title);`
} - Zion Tech Group`);`'
    .replace('Professional service by Zion Tech Group', `Professional ${serviceName} services by Zion Tech Group`);
    .replace('Service', title);`'
    .replace('Professional service coming soon.', `Professional ${serviceName} services coming soon.`)}
// Main execution;
console.log('Regenerating problematic files...');
;
let regeneratedCount = 0;
;
for (const filePath, of, problematicFiles) {;
try{;
const serviceName = path.basename(path.dirname(filePath));
    const content = generateServicePage(filePath, serviceName);
;'"
fs.writeFileSync(filePath, content, 'utf8')}";`"
    console.log(`Regenerated: "${filePath"}`);
    regeneratedCount++} catch (error) {;`
console.error(`Error regenerating ${filePath}:`, error.message)}
}`
console.log(`\nRegenerated ${regeneratedCount} out of ${problematicFiles.length} files`);'"
console.log('Problematic files regeneration completed!');";`'";
const fs = require("fs");
const path = require("path")
//Clean template;
const cleanTemplate = `"use client";
export default function ServicePage() {

return (<>
      <Head>
        <title>Service - Zion Tech Group</title>
        
        <meta name="description" content="Professional service by Zion Tech Group. Transform your business with our expert solutions." />
      
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" /> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center" /> <h1 className="text-4xl font-bold text-white mb-6" />
Service
          </h1> <p className="text-lg text-gray-300 mb-8" />
Professional service coming soon.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
Contact Us <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </>)
  ) }`
//List of most problematic files to regenerate;
const problematicFiles = ["app/ai-automation/page.tsx"
  "app/ai-chatbot-builder/page.tsx"
  "app/ai-content-generator/page.tsx"
  "app/ai-automation-platform/page.tsx"
  "app/ad-management/page.tsx"
]
//Function to generate service page content
function generateServicePage(filePath, serviceName) {;
const functionName = serviceName.replace(/-/g, "").replace(/\b\w/g, l => l.toUpperCase()) + "Page";
const title = serviceName.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())

return cleanTemplate
    .replace("ServicePage", functionName)
    .replace("Service - Zion Tech Group", `${title } - Zion Tech Group`)
    .replace("Professional service by Zion Tech Group", `Professional${serviceName} services by Zion Tech Group`)
    .replace("Service", title)
    .replace("Professional service coming soon.", `Professional${serviceName} services coming soon.`)
}

//Main execution console.log("Regenerating problematic files...");
let regeneratedCount = 0

for (const filePath, of, problematicFiles) {
try{;
const serviceName = path.basename(path.dirname(filePath));
const content = generateServicePage(filePath, serviceName)

fs.writeFileSync(filePath, content, "utf8")
    console.log(`Regenerated: "${filePath"}`)
    regeneratedCount++
  } catch (error) {
console.error(`Error regenerating${filePath}:`, error.message)
  }
}

console.log(`\nRegenerated${regeneratedCount} out of${problematicFiles.length} files`) console.log("Problematic files regeneration completed!")
