import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Success stories and case studies from our clients." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            See how we've helped businesses succeed with our solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;