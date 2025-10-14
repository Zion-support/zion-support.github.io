import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client case studies." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Case Studies</h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover how we've helped businesses transform with our technology solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;