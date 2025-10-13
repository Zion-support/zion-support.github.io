import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiEmailMarketingPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI Email Marketing Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered email marketing automation and optimization." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Email Marketing Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered email marketing automation and optimization.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Segmentation</h3>
              <p className="text-gray-600">
                Automatically segment your audience for targeted campaigns.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Optimization</h3>
              <p className="text-gray-600">
                AI-generated subject lines and content for better engagement.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Detailed insights and recommendations for campaign improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}