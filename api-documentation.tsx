import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group services" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">API Documentation</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Authentication</h2>
            <p className="text-gray-600 mb-4">
              All API requests require authentication using an API key. Include your API key in the Authorization header:
            </p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              Authorization: Bearer YOUR_API_KEY
            </pre>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Endpoints</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Content Management</h3>
                <div className="space-y-2 text-sm">
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /content</code> - List all content</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">POST /content</code> - Create content</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /content/{'{id}'}</code> - Get content by ID</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">PUT /content/{'{id}'}</code> - Update content</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">DELETE /content/{'{id}'}</code> - Delete content</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Need Help?</h3>
            <p className="text-blue-600 mb-4">
              Our developer support team is here to help you integrate successfully.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;