import React from 'react';
import { Helmet } from 'react-helmet-async';
const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and client success stories at Zion Tech Group." />
        <meta name="keywords" content="case studies, success stories, client projects, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with our innovative technology solutions.
          </p>
        </div>
      </div>
    </>
  );
};
export default CaseStudiesPage;