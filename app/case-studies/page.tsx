'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solution implementations. Real case studies showcasing our expertise and client results." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Implemented AI recommendation engine that increased sales by 40% for a major online retailer.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Result:</strong> 40% increase in sales
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Migrated legacy systems to cloud infrastructure, reducing costs by 60% and improving performance.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Result:</strong> 60% cost reduction
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analytics Platform</h3>
              <p className="text-gray-600 mb-4">
                Built comprehensive analytics platform that provided real-time insights for decision making.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Result:</strong> 50% faster decisions
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;