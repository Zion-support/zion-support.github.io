'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiDataVisualizationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group</title>
        <meta name="description" content="Transform complex data into clear, actionable insights with AI-powered visualization tools and dashboards." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Data Visualization
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform complex data into clear, actionable insights with AI-powered visualization tools and interactive dashboards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Interactive Dashboards</h3>
              <p className="text-gray-600">Create dynamic, interactive dashboards that update in real-time.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Smart Charts</h3>
              <p className="text-gray-600">AI automatically selects the best chart types for your data.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Pattern Recognition</h3>
              <p className="text-gray-600">Identify patterns and trends in your data automatically.</p>
            </div>
          </div>        </div>
      </div>
    </>
  );
};

export default AiDataVisualizationPage;