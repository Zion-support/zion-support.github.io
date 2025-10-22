import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIContentGenerationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI content generation solutions for your business" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            AI Content Generation
          </h1>
          <p className="text-lg text-gray-600">
            Generate high-quality content with our advanced AI technology.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIContentGenerationPage;