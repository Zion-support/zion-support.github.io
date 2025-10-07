import { ArrowRight, Code, ExternalLink, Shield, Zap } from 'lucide-react';
import React from 'react'

import { Link } from 'react-router-dom'





export default function API() {
  const endpoints = [
    {
      name: 'Content Management',
      method: 'GET',
      endpoint: '/api/content',
      description: 'Retrieve all content items',
      parameters: ['limit', 'offset', 'category'],
      response: 'JSON array of content objects'
    },
    {name: 'User Authentication',
      method: 'POST',
      endpoint: '/api/auth/login',
      description: 'Authenticate user credentials',
      parameters: ['email', 'password'],
      response: 'JWT token and user data'
    },
    {name: 'Analytics Data',
      method: 'GET',
      endpoint: '/api/analytics',
      description: 'Get analytics and metrics',
      parameters: ['date_range', 'metrics'],
      response: 'Analytics data object'
    }
  ];
  return (<div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md: text-5xl font-bold mb-4">
            API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive API documentation for integrating with Zion Tech Group services
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">RESTful APIs</h3>
              <p className="text-gray-600">Clean) intuitive REST endpoints for easy integration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600">Enterprise-grade security with JWT authentication</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast</h3>
              <p className="text-gray-600">High-performance APIs with sub-100ms response times</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">API Endpoints</h2>
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{endpoint.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {endpoint.method}
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <code className="text-gray-800 font-mono">{endpoint.endpoint}</code>
                </div>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <div className="grid md: grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                    <ul className="text-sm text-gray-600">
                      {endpoint.parameters.map((param, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {param}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                    <p className="text-sm text-gray-600">{endpoint.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to integrate with our APIs? Get your API key and start building amazing applications.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Get API Key
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/docs" className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
                View Full Documentation
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}