import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage to explore our services." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-red-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
                </Link>
                <Link href="/blockchain" className="text-gray-300 hover:text-white transition-colors">
                  Blockchain
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* 404 Content */}
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
              <p className="text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="inline-flex items-center justify-center w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </button>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-500 text-sm">
                Need help? <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}