'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT projects and see how we've helped businesses transform their operations." />
        <meta name="keywords" content="AI case studies, IT case studies, technology success stories, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Case Studies
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Coming soon - Explore our successful AI and IT projects and see how we've helped businesses transform their operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;