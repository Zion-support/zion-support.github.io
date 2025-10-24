'use client';

import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';

export default function Page() {
  return (
    <>
      <SEOHead
        title=" - Zion Tech Group"
        description="Professional  services by Zion Tech Group"
        keywords=", technology, solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional  services and solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}