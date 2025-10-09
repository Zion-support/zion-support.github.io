import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Real success stories and case studies from our AI and IT implementations across various industries." />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case <span className="text-cyan-400">Studies</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real success stories and case studies from our AI and IT implementations 
                across various industries and business sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;