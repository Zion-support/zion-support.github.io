import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiMobileAppBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Mobile App Builder - Zion Tech Group</title>
        <meta name="description" content="Build mobile applications with AI-powered tools and features." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Mobile App Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build mobile applications with AI-powered tools and features.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
              <p className="text-gray-600">
                Leverage AI to accelerate mobile app development and reduce time to market.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Platform Support</h3>
              <p className="text-gray-600">
                Build apps for iOS and Android with a single codebase using our platform.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              <p className="text-gray-600">
                Integrate AI features like natural language processing and machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}