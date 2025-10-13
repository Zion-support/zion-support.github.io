import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAiProjectManagerProPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Project Manager Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered project management solution by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Zion AI Project Manager Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered project management solution designed to help your business manage projects efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZionAiProjectManagerProPage;