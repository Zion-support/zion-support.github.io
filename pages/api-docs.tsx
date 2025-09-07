import React from 'react';
import Layout from '../components/layout/MainLayout';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/health',
    description: 'Health check endpoint'
  },
  {
    method: 'POST',
    path: '/api/auth/login',
    description: 'User authentication'
  },
  {
    method: 'GET',
    path: '/api/services',
    description: 'Get available services'
  }
];

export default function APIDocsPage() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group services."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete API documentation for Zion Tech Group services.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Available Endpoints</h2>
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="ml-4 text-gray-800">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-600">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}