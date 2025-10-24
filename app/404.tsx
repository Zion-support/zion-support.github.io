'use client'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="Page not found - Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              404 - Page Not Found
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              The page you're looking for doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}