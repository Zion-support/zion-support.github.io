import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Code, Play, Copy, Check, ExternalLink, Key, Globe, Shield, Zap } from 'lucide-react';

const API: NextPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiExamples = [
    {
      id: 'auth',
      title: 'Authentication',
      description: 'Get your API key and authenticate requests',
      method: 'POST',
      endpoint: '/api/v1/auth/token',
      code: `curl -X POST https://api.ziontechgroup.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key_here",
    "client_id": "your_client_id"
  }'`,
      response: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}`
    },
    {
      id: 'users',
      title: 'Get Users',
      description: 'Retrieve a list of users',
      method: 'GET',
      endpoint: '/api/v1/users',
      code: `curl -X GET https://api.ziontechgroup.com/v1/users \\
  -H "Authorization: Bearer your_access_token" \\
  -H "Content-Type: application/json"`,
      response: `{
  "data": [
    {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 1
  }
}`
    },
    {
      id: 'create-project',
      title: 'Create Project',
      description: 'Create a new project',
      method: 'POST',
      endpoint: '/api/v1/projects',
      code: `curl -X POST https://api.ziontechgroup.com/v1/projects \\
  -H "Authorization: Bearer your_access_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My New Project",
    "description": "Project description",
    "type": "web_application"
  }'`,
      response: `{
  "id": "proj_456",
  "name": "My New Project",
  "description": "Project description",
  "type": "web_application",
  "status": "active",
  "created_at": "2024-01-01T00:00:00Z"
}`
    }
  ];

  const features = [
    {
      icon: Key,
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and API key authentication with JWT tokens'
    },
    {
      icon: Globe,
      title: 'RESTful API',
      description: 'Clean, intuitive REST API following industry best practices'
    },
    {
      icon: Shield,
      title: 'Rate Limiting',
      description: 'Built-in rate limiting to ensure fair usage and stability'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'WebSocket support for real-time data and notifications'
    }
  ];

  return (
    <MainLayout
      title="API Reference - Zion Tech Group"
      description="Complete API reference for Zion Tech Group's platform. Documentation, examples, and interactive testing tools."
      keywords="API, API reference, REST API, documentation, developer tools, Zion Tech Group, integration"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Code className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API Reference
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Build powerful integrations with our comprehensive REST API.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/api-playground" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Try API Playground
              </a>
              <a 
                href="/documentation" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                API Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* API Examples */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                API Examples
              </h2>
              <div className="space-y-8">
                {apiExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{example.title}</h3>
                          <p className="text-gray-600 mt-1">{example.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            example.method === 'GET' ? 'bg-green-100 text-green-800' :
                            example.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {example.method}
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <code className="text-sm text-gray-800">{example.endpoint}</code>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Request */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Request</h4>
                          <div className="relative">
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{example.code}</code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard(example.code, `request-${example.id}`)}
                              className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
                            >
                              {copiedCode === `request-${example.id}` ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>
                        
                        {/* Response */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Response</h4>
                          <div className="relative">
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{example.response}</code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard(example.response, `response-${example.id}`)}
                              className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
                            >
                              {copiedCode === `response-${example.id}` ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Available Endpoints
              </h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Method
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Endpoint
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Auth Required
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            POST
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          /api/v1/auth/token
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Get access token
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          API Key
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            GET
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          /api/v1/users
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          List users
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Bearer Token
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            POST
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          /api/v1/projects
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Create project
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Bearer Token
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            GET
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          /api/v1/projects/{id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Get project details
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Bearer Token
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get your API key and start integrating with our platform today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get API Key
              </a>
              <a 
                href="/api-playground" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg"
              >
                Try API Playground
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default API;