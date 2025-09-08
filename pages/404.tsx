import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
export default function Custom404() {
  return (
    <>
      <Head><title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage to explore our services." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Go Home
            </Link>
            <div className="flex justify-center space-x-4">
              <Link
                href="/services"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Search className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </div>
          </div>
          <div className="mt-12 text-sm text-gray-500">
            <p>Need help? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </main>
    </>
  );
}