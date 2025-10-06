import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-cyan-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Go Home
          </Link>
          
          <div className="text-gray-400">
            <p>Or try one of these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/enterprise" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Enterprise Solutions
              </Link>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Contact Us
              </Link>
              <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}