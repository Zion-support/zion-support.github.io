'use client';
import React from 'react';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


export default function SearchBar() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div></div></div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Service
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional service services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
            <ArrowRight className="w-5 h-5 ml-2" />
          
  );
}