import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAiEmailAnalyzerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Ai Email Analyzer - Zion Tech Group</title>
        <meta name="description" content="Professional zion ai email analyzer services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Zion Ai Email Analyzer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional zion ai email analyzer services designed to help your business grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZionAiEmailAnalyzerPage;
