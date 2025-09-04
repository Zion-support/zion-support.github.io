import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function Custom404(): any {
  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage to explore our services." />";
        <meta name="robots" content="noindex, nofollow" />";
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              404
            </h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-slate-300 mb-8">
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">";
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors",";
            >
              <Home className="w-5 h-5 mr-2" />";
              Go Home
            </Link>
            
            <div className="flex justify-center space-x-4">";
              <Link 
                href="/services"
                className="inline-flex items-center px-4 py-2 text-blue-600 hover: text-blue-700 transition-colors",";
              >
                <ArrowLeft className="w-4 h-4 mr-2" />";
                Browse Services
              </Link>
              
              <Link 
                href="/contact"
                className="inline-flex items-center px-4 py-2 text-blue-600 hover: text-blue-700 transition-colors",";
              >
                <Search className="w-4 h-4 mr-2" />";
                Contact Support
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-sm text-gray-500">";
            <p>Need help? Contact us at <a href="mailto: kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>,";
          </div>
        </div>
      </div>
    </>
  );
};