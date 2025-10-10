'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get technical support and help with your AI and IT solutions. 24/7 support available." />
        <meta name="keywords" content="support, technical support, help desk, customer support, zion tech group support" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Support
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Coming soon - Get technical support and help with your AI and IT solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;