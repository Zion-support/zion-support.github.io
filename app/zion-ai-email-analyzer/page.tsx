'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIEmailAnalyzerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Zion AI Email Analyzer - Zion Tech Group</title>
        <meta name="description" content="Professional AI email analyzer services by Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Zion AI Email Analyzer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI-powered email analysis and optimization solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZionAIEmailAnalyzerPage;