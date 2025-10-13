import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Helmet>
        <title>Software Development - Zion Tech Group</title>
        <meta name="description" content="Custom software development solutions for your business needs." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Software Development</h1>
          <p className="text-xl text-gray-300">Coming Soon</p>
        </div>
      </div>
    </>
  );
}