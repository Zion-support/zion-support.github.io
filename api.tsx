import React from 'react';
import { Link } from 'react-router-dom';

const API: React.FC = () => {
  const apiEndpoints = [
    {
      name: 'Authentication',
      method: 'POST',
      endpoint: '/api/auth/login',
      description: 'Authenticate users and get access tokens',
      parameters: [
        { name: 'email', type: 'string', required: true },
        { name: 'password', type: 'string', required: true }
      ]
    },
    {
      name: 'Get Users',
      method: 'GET',
      endpoint: '/api/users',
      description: 'Retrieve a list of all users',
      parameters: [
        { name: 'page', type: 'number', required: false },
        { name: 'limit', type: 'number', required: false }
      ]
    },
    {
      name: 'Create User',
      method: 'POST',
      endpoint: '/api/users',
      description: 'Create a new user account',
      parameters: [
        { name: 'name', type: 'string', required: true },
        { name: 'email', type: 'string', required: true },
        { name: 'role', type: 'string', required: false }
      ]
    }
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-6'>API Documentation</h1>
          <p className='text-xl mb-8 max-w-3xl mx-auto'>
            Comprehensive API documentation for integrating with Zion Tech Group's
            powerful services and solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/contact'
              className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center'
            >
              Get API Key
              <span className='ml-2'>→</span>
            </Link>
            <a
              href='https://docs.ziontechgroup.com'
              className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center'
            >
              Full Documentation
              <span className='ml-2'>⚛️</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚛️</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                RESTful APIs
              </h3>
              <p className='text-gray-600'>
                Clean, intuitive RESTful endpoints following industry best
                practices for easy integration.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🛡️</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Secure & Reliable
              </h3>
              <p className='text-gray-600'>
                Enterprise-grade security with OAuth 2.0, rate limiting, and
                comprehensive error handling.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Fast & Scalable
              </h3>
              <p className='text-gray-600'>
                High-performance APIs designed to scale with your business
                needs and growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* API Endpoints Section */}
      <div className='py-16 bg-gray-100' id='endpoints'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>API Endpoints</h2>
          <div className='space-y-8'>
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className='bg-white rounded-lg shadow-md p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-xl font-semibold'>{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <div className='mb-4'>
                  <code className='bg-gray-100 px-3 py-1 rounded text-sm font-mono'>
                    {endpoint.endpoint}
                  </code>
                </div>
                <p className='text-gray-600 mb-4'>{endpoint.description}</p>
                <div>
                  <h4 className='font-semibold mb-2'>Parameters:</h4>
                  <div className='space-y-2'>
                    {endpoint.parameters.map((param, paramIndex) => (
                      <div key={paramIndex} className='flex items-center space-x-4 text-sm'>
                        <span className='font-mono bg-gray-100 px-2 py-1 rounded'>
                          {param.name}
                        </span>
                        <span className='text-gray-500'>{param.type}</span>
                        {param.required && (
                          <span className='text-red-500 text-xs'>Required</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-16 bg-blue-600 text-white text-center'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Ready to integrate with our APIs? Get your API key and start
            building amazing applications.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/contact'
              className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center'
            >
              Get API Key
              <span className='ml-2'>→</span>
            </Link>
            <a
              href='https://docs.ziontechgroup.com'
              className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center'
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Getting Started
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Ready to integrate with our APIs? Get your API key and start
              building amazing applications.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center'
              >
                Get API Key
              </Link>
              <a
                href='https://docs.ziontechgroup.com'
                className='border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center'
              >
                View Full Docs
                <span className='ml-2'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default API;