import React from 'react';
import { Link } from 'react-router-dom';

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">API Documentation</h1>
          
          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              API Endpoints
            </h2>
            <div className='space-y-6'>
              <div className='border-l-4 border-blue-500 pl-4'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>
                  Content Management
                </h3>
                <div className='space-y-2 text-sm'>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      GET /content
                    </code>{' '}
                    - List all content
                  </div>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      POST /content
                    </code>{' '}
                    - Create content
                  </div>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      GET /content/{'{id}'}
                    </code>{' '}
                    - Get content by ID
                  </div>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      PUT /content/{'{id}'}
                    </code>{' '}
                    - Update content
                  </div>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      DELETE /content/{'{id}'}
                    </code>{' '}
                    - Delete content
                  </div>
                </div>
              </div>

              <div className='border-l-4 border-green-500 pl-4'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>
                  User Management
                </h3>
                <div className='space-y-2 text-sm'>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      GET /users
                    </code>{' '}
                    - List all users
                  </div>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      POST /users
                    </code>{' '}
                    - Create user
                  </div>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      GET /users/{'{id}'}
                    </code>{' '}
                    - Get user by ID
                  </div>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      PUT /users/{'{id}'}
                    </code>{' '}
                    - Update user
                  </div>
                </div>
              </div>

              <div className='border-l-4 border-purple-500 pl-4'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>
                  Analytics
                </h3>
                <div className='space-y-2 text-sm'>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      GET /analytics
                    </code>{' '}
                    - Get analytics data
                  </div>
                  <div>
                    <code className='bg-gray-100 px-2 py-1 rounded'>
                      POST /analytics/track
                    </code>{' '}
                    - Track event
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              Authentication
            </h2>
            <p className='text-gray-600 mb-4'>
              All API requests require authentication using an API key. Include your API key in the Authorization header:
            </p>
            <div className='bg-gray-100 p-4 rounded-lg mb-4'>
              <code className='text-sm'>
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
            <p className='text-gray-600'>
              You can obtain an API key by contacting our support team at{' '}
              <a href="mailto:support@ziontechgroup.com" className="text-blue-600 hover:underline">
                support@ziontechgroup.com
              </a>
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              Rate Limits
            </h2>
            <div className='space-y-4'>
              <div>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>Free Tier</h3>
                <ul className='text-gray-600 space-y-1'>
                  <li>• 100 requests per hour</li>
                  <li>• 1,000 requests per day</li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>Pro Tier</h3>
                <ul className='text-gray-600 space-y-1'>
                  <li>• 1,000 requests per hour</li>
                  <li>• 10,000 requests per day</li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>Enterprise</h3>
                <ul className='text-gray-600 space-y-1'>
                  <li>• 10,000 requests per hour</li>
                  <li>• Unlimited daily requests</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              Support
            </h2>
            <p className='text-gray-600 mb-4'>
              Need help with our API? Our support team is here to help.
            </p>
            <div className='space-y-2'>
              <p className='text-gray-600'>
                Email:{' '}
                <a href="mailto:support@ziontechgroup.com" className="text-blue-600 hover:underline">
                  support@ziontechgroup.com
                </a>
              </p>
              <p className='text-gray-600'>
                Phone:{' '}
                <a href="tel:+13024640950" className="text-blue-600 hover:underline">
                  +1 302 464 0950
                </a>
              </p>
              <p className='text-gray-600'>
                Documentation:{' '}
                <Link to="/docs" className="text-blue-600 hover:underline">
                  Full Documentation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;