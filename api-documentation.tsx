import React from 'react';
import { Link } from 'react-router-dom';

const ApiDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive API documentation for Zion Tech Group services
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Getting Started
          </h2>
          <p className="text-gray-600 mb-6">
            Our API provides access to all Zion Tech Group services and data.
            Get started by obtaining your API key and exploring our endpoints.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Base URL
            </h3>
            <code className="text-blue-600">
              https://api.ziontechgroup.com/v1
            </code>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authentication
              </h3>
              <p className="text-gray-600 mb-3">
                All API requests require authentication using your API key.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <code className="text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Rate Limits
              </h3>
              <p className="text-gray-600">
                API requests are limited to 1000 requests per hour per API key.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Support
              </h3>
              <p className="text-gray-600 mb-3">
                Need help with our API? Contact our support team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocumentation;