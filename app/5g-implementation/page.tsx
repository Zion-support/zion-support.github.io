'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementationPage() {
  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="5G Implementation Services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">5G Implementation</h1>
          <p className="text-xl text-gray-300 mb-8">5G Implementation Services by Zion Tech Group</p>
          <a
            href="/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
}
