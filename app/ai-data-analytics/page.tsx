'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';


const AiDataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Unlock insights from your data with AI-powered analytics solutions for business intelligence and decision making." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Data Analytics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform raw data into actionable insights with our advanced AI-powered analytics platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast trends and outcomes using machine learning models.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Real-time Insights</h3>
              <p className="text-gray-600">Get instant insights from streaming data sources.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Data Visualization</h3>
              <p className="text-gray-600">Interactive dashboards and visual analytics tools.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default AiDataAnalyticsPage;