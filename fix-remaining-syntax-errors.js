import fs from 'fs';
import Footer from '@/components/Footer';
import { glob } from 'glob';





function createPageContent(pageName) {
  return `'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export 
function Page() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${pageTitles[pageName]}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}`;
}

// Main execution
async function main() {
  let fixedCount = 0;
  
  for (const pageName of pagesToFix) {
    const filePath = `app/${pageName}/page.tsx`;
    try {
      const content = createPageContent(pageName);
      fs.writeFileSync(filePath, content);
            fixedCount++;
    } catch (error) {
    // Empty block
  }
  }

  }

main().catch(console.error);