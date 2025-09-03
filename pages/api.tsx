import React from 'react';
import Head from 'next/head';

const API = () => {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation and integration guides" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive API documentation and integration guides for developers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Authentication</li>
                <li>• Rate Limits</li>
                <li>• Error Handling</li>
                <li>• SDKs & Libraries</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• REST API</li>
                <li>• GraphQL</li>
                <li>• Webhooks</li>
                <li>• Real-time APIs</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/docs/api" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Full Documentation
              </a>
              <a href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default API;