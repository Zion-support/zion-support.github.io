'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const FAQPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | Zion Tech Group</title>
        <meta name="description" content="Frequently asked questions about our AI and IT services. Find answers to common questions." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services FAQ, IT services FAQ" />
        <link rel="canonical" href="https://ziontechgroup.com/faq" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              FAQ
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Coming soon - Frequently asked questions about our AI and IT services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;