'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiMarketingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Marketing Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with AI-powered solutions for customer insights, personalization, and campaign optimization." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Marketing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your marketing strategy with cutting-edge AI technology that delivers personalized experiences and maximizes ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Segmentation</h3>
              <p className="text-gray-600">AI-powered customer analysis for precise targeting and personalization.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast customer behavior and optimize marketing campaigns.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Content Generation</h3>
              <p className="text-gray-600">Automated content creation for all marketing channels.</p>
            </div>
          </div>
        </div>
      </div>
    </>);
};
export default AiMarketingPage;