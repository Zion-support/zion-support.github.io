import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to explore our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div className="text-9xl font-bold gradient-text mb-8">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best developers encounter this from time to time!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
          
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400">
            While you're here, why not explore our amazing services?
          </p>
        </div>
      </div>
    </>
  );
}