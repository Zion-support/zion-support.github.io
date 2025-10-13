import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiWebsiteBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Website Builder - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced ai website builder solutions by Zion Tech Group" />
=======
        <meta name="description" content="Build professional websites with AI assistance." />
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Website Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
<<<<<<< HEAD
            Advanced ai website builder solutions by Zion Tech Group
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
=======
            Build professional websites with AI assistance.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Design Assistant</h3>
              <p className="text-gray-600">
                Get intelligent design suggestions and automated layout optimization.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Generation</h3>
              <p className="text-gray-600">
                Generate high-quality content automatically with AI-powered tools.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Optimization</h3>
              <p className="text-gray-600">
                Built-in SEO optimization and performance monitoring features.
              </p>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
          </div>
        </div>
      </div>
    </div>
  );
}