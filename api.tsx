import React from 'react';

const Api: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our powerful API services for AI, cloud, and enterprise solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI Services
            </h3>
            <p className="text-gray-600 mb-4">
              Access our AI-powered services including machine learning models,
              natural language processing, and computer vision.
            </p>
            <div className="text-sm text-blue-600">
              Endpoint: /api/v1/ai
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cloud Services
            </h3>
            <p className="text-gray-600 mb-4">
              Manage cloud infrastructure, deploy applications, and monitor
              performance through our cloud API.
            </p>
            <div className="text-sm text-blue-600">
              Endpoint: /api/v1/cloud
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Analytics
            </h3>
            <p className="text-gray-600 mb-4">
              Get insights from your data with our analytics API for
              business intelligence and reporting.
            </p>
            <div className="text-sm text-blue-600">
              Endpoint: /api/v1/analytics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;