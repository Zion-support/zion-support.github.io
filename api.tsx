<<<<<<< HEAD
// import { ArrowRight, Code, ExternalLink, Shield, Zap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const API: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/content',
      description: 'Retrieve all content items',
      example: 'GET /api/content?limit=10&offset=0'
    },
    {
      method: 'POST',
      endpoint: '/api/content',
      description: 'Create a new content item',
      example: 'POST /api/content'
    },
    {
      method: 'PUT',
      endpoint: '/api/content/{id}',
      description: 'Update an existing content item',
      example: 'PUT /api/content/123'
    },
    {
      method: 'DELETE',
      endpoint: '/api/content/{id}',
      description: 'Delete a content item',
      example: 'DELETE /api/content/123'
    }
  ];
=======
import React from 'react';
>>>>>>> 800d0c7aac9826a6606b7f370413ac3309436671

const Api: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-6'>API Documentation</h1>
          <p className='text-xl mb-8 max-w-3xl mx-auto'>
            Comprehensive API documentation for integrating with Zion Tech Group's
            powerful AI and technology solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#endpoints'
              className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center'
            >
              View Endpoints
              <span className='ml-2 w-5 h-5'>→</span>
            </a>
            <a
              href='https://docs.ziontechgroup.com'
              className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center'
            >
              Full Documentation
              <span className='ml-2 w-5 h-5'>⚛️</span>
            </a>
          </div>
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our powerful API services for AI, cloud, and enterprise solutions
          </p>
>>>>>>> 800d0c7aac9826a6606b7f370413ac3309436671
        </div>

<<<<<<< HEAD
      {/* Features Section */}
      <div className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='w-8 h-8 text-blue-600'>⚛️</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                RESTful APIs
              </h3>
              <p className='text-gray-600'>
                Clean, intuitive REST endpoints following industry best
                practices for easy integration.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='w-8 h-8 text-green-600'>⚛️</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Secure & Reliable
              </h3>
              <p className='text-gray-600'>
                Enterprise-grade security with 99.9% uptime and
                comprehensive error handling.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='w-8 h-8 text-purple-600'>⚡</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                High Performance
              </h3>
              <p className='text-gray-600'>
                Optimized for speed with sub-100ms response times and
                comprehensive error handling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* API Endpoints Section */}
      <div id='endpoints' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            API Endpoints
          </h2>
          <div className='max-w-4xl mx-auto'>
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className='bg-white rounded-lg shadow-md p-6 mb-6'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center space-x-4'>
                    <span className={`px-3 py-1 rounded text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className='text-lg font-mono text-gray-800'>
                      {endpoint.endpoint}
                    </code>
                  </div>
                </div>
                <p className='text-gray-600 mb-3'>{endpoint.description}</p>
                <div className='bg-gray-100 p-3 rounded'>
                  <code className='text-sm text-gray-700'>{endpoint.example}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Ready to Get Started?</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Start building with our powerful APIs and transform your business
            with cutting-edge AI technology.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/contact'
              className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center'
            >
              Get API Key
              <span className='ml-2 w-5 h-5'>→</span>
            </Link>
            <a
              href='https://docs.ziontechgroup.com'
              className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center'
            >
              View Documentation
              <span className='ml-2 w-5 h-5'>⚛️</span>
            </a>
=======
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
>>>>>>> 800d0c7aac9826a6606b7f370413ac3309436671
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default API;
=======
export default Api;
>>>>>>> 800d0c7aac9826a6606b7f370413ac3309436671
