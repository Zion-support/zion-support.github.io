'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Demo | Zion Tech Group</title>
        <meta name="description" content="Request a demo of our AI and IT solutions. See how we can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, zion tech group demo" />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Demo
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Coming soon - Request a demo of our AI and IT solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;