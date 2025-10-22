'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';


const AiDataVisualizationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group</title>
        <meta name="description" content="Transform complex data into actionable insights with AI-powered visualization tools and interactive dashboards." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Data Visualization
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform complex data into clear, actionable insights with AI-powered visualization tools and interactive dashboards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Interactive Dashboards</h3>
              <p className="text-gray-600">Dynamic, interactive dashboards that adapt to your data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Automated Insights</h3>
              <p className="text-gray-600">AI-generated insights and pattern recognition in your data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">Live data visualization and real-time monitoring capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiDataVisualizationPage;
