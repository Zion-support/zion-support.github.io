import React from 'react';
import { Helmet } from 'react-helmet-async';


export default function AiMobileBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Mobile Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI mobile builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Mobile Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build intelligent mobile applications with our AI-powered development platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Development</h3>
              <p className="text-gray-600">
                Accelerate mobile app development with AI-powered tools and templates.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Features</h3>
              <p className="text-gray-600">
                Integrate advanced AI features like voice recognition and machine learning.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Platform</h3>
              <p className="text-gray-600">
                Build once and deploy across iOS, Android, and web platforms.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}