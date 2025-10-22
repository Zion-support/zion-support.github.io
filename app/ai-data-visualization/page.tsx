'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiDataVisualizationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group</title>
        <meta name="description" content="Transform complex data into actionable insights with AI-powered visualization and interactive dashboards." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Data Visualization</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Transform complex data into actionable insights with AI-powered visualization tools.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiDataVisualizationPage;