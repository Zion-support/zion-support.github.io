import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiMobileBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Mobile Builder - Zion Tech Group</title>
        <meta name="description" content="Create mobile applications using advanced AI technology." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Mobile Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create mobile applications using advanced AI technology.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
              <p className="text-gray-600">
Create mobile apps quickly with our AI-assisted development tools.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Design</h3>
              <p className="text-gray-600">
                AI-powered UI/UX design suggestions for optimal user experience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600">
                Automatic performance optimization and code quality improvements.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}