import React from "react";
import { Link } from "react-router-dom";

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            API Documentation
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              API Endpoints
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Content Management
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      GET /content
                    </code>{" "}
                    - List all content
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      POST /content
                    </code>{" "}
                    - Create new content
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      PUT /content/:id
                    </code>{" "}
                    - Update content
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      DELETE /content/:id
                    </code>{" "}
                    - Delete content
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  User Management
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      GET /users
                    </code>{" "}
                    - List all users
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      POST /users
                    </code>{" "}
                    - Create new user
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      PUT /users/:id
                    </code>{" "}
                    - Update user
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      DELETE /users/:id
                    </code>{" "}
                    - Delete user
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Analytics
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      GET /analytics
                    </code>{" "}
                    - Get analytics data
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      POST /analytics/track
                    </code>{" "}
                    - Track event
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Authentication
            </h2>
            <p className="text-gray-600 mb-4">
              All API endpoints require authentication. Include your API key in
              the Authorization header:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Rate Limiting
            </h2>
            <p className="text-gray-600 mb-4">
              API requests are limited to 1000 requests per hour per API key.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> Rate limit headers are included in all
                responses:
              </p>
              <ul className="mt-2 text-sm text-yellow-700">
                <li>X-RateLimit-Limit: Maximum requests per hour</li>
                <li>
                  X-RateLimit-Remaining: Remaining requests in current hour
                </li>
                <li>X-RateLimit-Reset: Time when the rate limit resets</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Error Handling
            </h2>
            <p className="text-gray-600 mb-4">
              All errors are returned in JSON format with appropriate HTTP
              status codes.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Error Response Format
                </h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <pre className="text-sm">
                    {`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "field": "email",
      "reason": "Invalid email format"
    }
  }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Common Error Codes
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">400</code> -
                    Bad Request
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">401</code> -
                    Unauthorized
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">403</code> -
                    Forbidden
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">404</code> -
                    Not Found
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">429</code> -
                    Too Many Requests
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">500</code> -
                    Internal Server Error
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;
