import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiAutomationPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI automation platform solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Automation Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline your business processes with our advanced AI automation platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and workflows with intelligent AI solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with your existing systems and tools.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-600">
                Get detailed insights and analytics on your automated processes.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}