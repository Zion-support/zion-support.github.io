import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find what you need with our helpful navigation and search options." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-400 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-300 mb-8">
              The page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Search className="h-5 w-5 mr-2" />
              Browse Services
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}