import React from 'react';
import Link from 'next/link';

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">API Documentation</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              API Endpoints
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">GET /api/health</h3>
                <p className="text-gray-600 mb-2">Check API health status</p>
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">curl -X GET https://api.ziontechgroup.com/health</code>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">POST /api/contact</h3>
                <p className="text-gray-600 mb-2">Submit contact form</p>
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">
                    {`curl -X POST https://api.ziontechgroup.com/contact \\
                    -H "Content-Type: application/json" \\
                    -d '{"name": "John Doe", "email": "john@example.com", "message": "Hello"}'`}
                  </code>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">GET /api/services</h3>
                <p className="text-gray-600 mb-2">Get available services</p>
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">curl -X GET https://api.ziontechgroup.com/services</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Authentication
            </h2>
            <p className="text-gray-600 mb-4">
              Most API endpoints require authentication. Include your API key in the Authorization header:
            </p>
            <div className="bg-gray-100 p-3 rounded">
              <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Rate Limiting
            </h2>
            <p className="text-gray-600 mb-4">
              API requests are rate limited to 1000 requests per hour per API key.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> Rate limit headers are included in all responses.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Error Handling
            </h2>
            <p className="text-gray-600 mb-4">
              All errors return a JSON response with error details:
            </p>
            <div className="bg-gray-100 p-3 rounded">
              <code className="text-sm">
                {`{
  "error": "Invalid API key",
  "code": 401,
  "message": "Authentication required"
}`}
              </code>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get API Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;