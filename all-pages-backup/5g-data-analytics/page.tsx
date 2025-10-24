import React from 'react';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DataAnalytics5GPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">5G Data Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">Advanced 5G data analytics solutions for real-time insights and business intelligence.</p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
</>;
  )}
