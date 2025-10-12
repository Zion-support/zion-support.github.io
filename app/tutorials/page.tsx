'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Tutorials</h1>
          <p className="text-gray-300 text-lg">Coming soon - Comprehensive tutorials and guides for AI and IT solutions.</p>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;