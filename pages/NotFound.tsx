import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
            <p className="text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
              
              <Link 
                href="/contact"
                className="inline-flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Get Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}