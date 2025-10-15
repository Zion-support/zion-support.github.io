import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-white mb-8">404</h1>
          <h2 className="text-3xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <a 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Go Home
            </a>
            <div className="text-gray-500">
              <p>Or try one of these popular pages:</p>
              <div className="mt-4 space-x-4">
                <a href="/services" className="text-blue-400 hover:text-blue-300">Services</a>
                <a href="/about" className="text-blue-400 hover:text-blue-300">About</a>
                <a href="/contact" className="text-blue-400 hover:text-blue-300">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}