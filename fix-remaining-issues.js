import fs from 'fs';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix function names starting with numbers
    if (content.includes('function 5g')) {
      content = content.replace(/function 5g(\w+)Page\(\)/g, 'function FiveG$1Page()');
      content = content.replace(/5g(\w+)Page/g, 'FiveG$1Page');
      modified = true;
    }
    
    // Fix wrong import paths
    if (content.includes("import ErrorBoundary from '../components/ErrorBoundary'") && filePath.includes('app/page.tsx')) {
      content = content.replace(
        "import ErrorBoundary from '../components/ErrorBoundary'",
        "import ErrorBoundary from './components/ErrorBoundary'"
      );
      modified = true;
    }
    
    if (content.includes("import ErrorBoundary from '../../components/ErrorBoundary'") && filePath.includes('micro-saas-services/page.tsx')) {
      content = content.replace(
        "import ErrorBoundary from '../../components/ErrorBoundary'",
        "import ErrorBoundary from '../components/ErrorBoundary'"
      );
      modified = true;
    }
    
    // Fix offline page
    if (filePath.includes('offline/page.tsx')) {
      content = `'use client'
import ErrorBoundary from '../components/ErrorBoundary'
import React from 'react'
import Link from 'next/link'

function OfflinePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            You're Offline
          </h1>
          <p className="text-slate-400 mb-8">
            It looks like you're not connected to the internet. Please check your connection and try again.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            aria-label="Try again"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="block w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go to Homepage
          </Link>
        </div>

        <div className="mt-8 text-sm text-slate-500">
          <p>Some features may not be available offline.</p>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <OfflinePage {...props} />
    </ErrorBoundary>
  );
}`;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page.tsx files
async function fixAllFiles() {
  try {
    const files = await glob('app/**/page.tsx');
    files.forEach(fixFile);
    console.log('All files processed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllFiles();