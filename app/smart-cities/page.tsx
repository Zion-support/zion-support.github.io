import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function smartcities() {
  return (
    <>
      <Helmet>
        <title>smart cities - Zion Tech Group</title>
        <meta name="description" content="Professional smart cities services for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">smart cities</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}