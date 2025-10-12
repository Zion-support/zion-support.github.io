import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G implementation services for ultra-fast connectivity and IoT solutions." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">5G Implementation</h1>
        <p className="text-gray-300 mb-8">This page is under construction.</p>
        <a 
          href="/" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}