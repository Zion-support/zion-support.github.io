import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-red-400 mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Go Home
            </Link>
            
            <div className="pt-4">
              <Link
                href="/services"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Browse Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
