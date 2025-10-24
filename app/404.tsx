import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our services." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <AlertTriangle className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-6xl font-bold text-white mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
            <p className="text-gray-400 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Contact
              </Link>
              <Link href="/demo" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;