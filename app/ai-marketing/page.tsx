'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiMarketingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Marketing Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with AI-powered solutions for better targeting, personalization, and ROI." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Marketing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your marketing strategy with cutting-edge AI technology that delivers personalized experiences and maximizes ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Targeting</h3>
              <p className="text-gray-600">Advanced algorithms to identify and target the right audience segments.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Personalized Content</h3>
              <p className="text-gray-600">Create dynamic, personalized content that resonates with each customer.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast customer behavior and optimize marketing campaigns in real-time.</p>
            </div>
          </div>ursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default AiMarketingPage;