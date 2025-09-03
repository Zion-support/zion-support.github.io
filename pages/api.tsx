import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';

const API: NextPage = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/users',
      description: 'Retrieve user information',
      category: 'Users'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/users',
      description: 'Create a new user',
      category: 'Users'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/services',
      description: 'Get available services',
      category: 'Services'
    }
  ];

  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services and endpoints."
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">API Documentation</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Endpoints</h2>
            
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-gray-600 mb-2">{endpoint.description}</p>
                  <span className="text-sm text-gray-500">Category: {endpoint.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default API;