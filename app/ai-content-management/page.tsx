import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiContentManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Content Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content management solutions for modern businesses." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Content Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI-powered content management solutions for modern businesses.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Content Creation</h3>
              <p className="text-gray-600">
                Generate high-quality content automatically using advanced AI algorithms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Optimization</h3>
              <p className="text-gray-600">
                Optimize content for SEO, readability, and engagement automatically.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Platform Publishing</h3>
              <p className="text-gray-600">
                Publish content across multiple platforms with a single click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}