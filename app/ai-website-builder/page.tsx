import React from 'react';
import { Helmet } from 'react-helmet-async';


export default function AiWebsiteBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Website Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI website builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Website Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create stunning websites with our AI-powered website builder platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Design</h3>
              <p className="text-gray-600">
                Generate beautiful designs automatically with AI-powered design tools.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Content</h3>
              <p className="text-gray-600">
                Create engaging content with AI-powered content generation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Optimized</h3>
              <p className="text-gray-600">
                Built-in SEO optimization for better search engine rankings.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}