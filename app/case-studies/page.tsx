import { Helmet } from "react-helmet-async";
import React from 'react';

const CaseStudiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client case studies showcasing our AI and IT solutions expertise." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform through innovative AI and IT solutions.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Case studies coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
