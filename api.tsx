import {
  ArrowRight,
  Code,
  ExternalLink,
  Shield,
  Zap,
  Atom,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Api: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/content',
      description: 'Retrieve all content items',
      example: 'GET /api/content?limit=10&offset=0',
    },
    {
      method: 'POST',
      endpoint: '/api/content',
      description: 'Create a new content item',
      example: 'POST /api/content',
    },
    {
      method: 'PUT',
      endpoint: '/api/content/:id',
      description: 'Update an existing content item',
      example: 'PUT /api/content/123',
    },
    {
      method: 'DELETE',
      endpoint: '/api/content/:id',
      description: 'Delete a content item',
      example: 'DELETE /api/content/123',
    },
  ];

  const features = [
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'Secure Authentication',
      description: 'JWT-based authentication with role-based access control',
    },
    {
      icon: <Zap className='w-6 h-6' />,
      title: 'High Performance',
      description: 'Optimized for speed with caching and compression',
    },
    {
      icon: <Code className='w-6 h-6' />,
      title: 'RESTful Design',
      description: 'Clean, intuitive API following REST principles',
    },
    {
      icon: <ExternalLink className='w-6 h-6' />,
      title: 'Easy Integration',
      description: 'Simple integration with comprehensive documentation',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-white mb-6'>
            API Documentation
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Comprehensive API documentation for Zion Tech Group's services.
            Build powerful applications with our robust and scalable API.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300'
            >
              <div className='text-blue-400 mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-bold text-white mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-300'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* API Endpoints */}
        <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16'>
          <h2 className='text-3xl font-bold text-white mb-8'>API Endpoints</h2>
          <div className='space-y-6'>
            {apiEndpoints.map((endpoint, index) => (
              <div
                key={index}
                className='bg-white/5 border border-white/10 rounded-xl p-6'
              >
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center space-x-4'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET'
                          ? 'bg-green-500/20 text-green-400'
                          : endpoint.method === 'POST'
                            ? 'bg-blue-500/20 text-blue-400'
                            : endpoint.method === 'PUT'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className='text-white font-mono text-lg'>
                      {endpoint.endpoint}
                    </code>
                  </div>
                </div>
                <p className='text-gray-300 mb-3'>{endpoint.description}</p>
                <div className='bg-black/30 rounded-lg p-4'>
                  <code className='text-green-400 font-mono text-sm'>
                    {endpoint.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16'>
          <h2 className='text-3xl font-bold text-white mb-8'>
            Getting Started
          </h2>
          <div className='space-y-6'>
            <div className='bg-white/5 border border-white/10 rounded-xl p-6'>
              <h3 className='text-xl font-bold text-white mb-4'>
                1. Authentication
              </h3>
              <p className='text-gray-300 mb-4'>
                All API requests require authentication. Include your API key in
                the Authorization header:
              </p>
              <div className='bg-black/30 rounded-lg p-4'>
                <code className='text-green-400 font-mono text-sm'>
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>

            <div className='bg-white/5 border border-white/10 rounded-xl p-6'>
              <h3 className='text-xl font-bold text-white mb-4'>2. Base URL</h3>
              <p className='text-gray-300 mb-4'>
                All API requests should be made to our base URL:
              </p>
              <div className='bg-black/30 rounded-lg p-4'>
                <code className='text-green-400 font-mono text-sm'>
                  https://api.ziontechgroup.com
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center'>
          <Link
            to='/contact'
            className='inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
          >
            <span>Get API Access</span>
            <ArrowRight className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Api;
