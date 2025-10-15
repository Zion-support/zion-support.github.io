import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIEmailMarketingProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Email Marketing Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your email marketing with AI-powered campaigns, personalization, and automation. Boost engagement and conversions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Email Marketing Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your email marketing with AI-powered campaigns, personalization, and automation. Boost engagement and drive conversions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Personalization</h3>
              <p className="text-gray-600">
                Create highly personalized email campaigns that resonate with each recipient using advanced AI algorithms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Content Generation</h3>
              <p className="text-gray-600">
                Generate compelling email content automatically based on your brand voice and campaign objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                Predict customer behavior and optimize send times for maximum engagement and conversion rates.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Advanced Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated A/B Testing</h3>
                <p className="text-gray-600">Continuously test and optimize your email campaigns with AI-driven A/B testing.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dynamic Segmentation</h3>
                <p className="text-gray-600">Automatically segment your audience based on behavior, preferences, and engagement patterns.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
                <p className="text-gray-600">AI determines the optimal send times for each recipient to maximize open and click rates.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                <p className="text-gray-600">Continuously optimize campaign performance based on real-time data and AI insights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIEmailMarketingProPage;
