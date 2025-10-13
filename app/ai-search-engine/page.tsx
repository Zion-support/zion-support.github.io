import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISearchEnginePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Search Engine - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered search engine solutions for intelligent content discovery and retrieval." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white mb-6">AI Search Engine</h1>
        <p className="text-xl text-gray-300">Coming Soon - Advanced search engine solutions</p>
      </div>
    </div>
  );
};

export default AISearchEnginePage;