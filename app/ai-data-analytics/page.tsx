'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiDataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered analytics and machine learning solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Data Analytics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced AI-powered analytics and machine learning solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast future trends and behaviors using machine learning algorithms.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Real-time Processing</h3>
              <p className="text-gray-600">Process and analyze data in real-time for immediate insights.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Data Visualization</h3>
              <p className="text-gray-600">Create interactive dashboards and visualizations for better understanding.</p>
            </div>
          </div>ursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default AiDataAnalyticsPage;