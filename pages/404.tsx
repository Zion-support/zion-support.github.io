import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group homepage." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Services
              </Link>
              <Link href="/solutions" className="text-blue-600 hover:text-blue-700 font-medium">
                Solutions
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;