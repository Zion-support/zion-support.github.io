import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Code, Key, Globe, Shield, Copy, Check, ChevronRight, ChevronDown } from 'lucide-react';

const API: NextPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      id: 'auth',
      method: 'POST',
      path: '/api/v1/auth/login',
      description: 'Authenticate user and get access token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      response: {
        status: 200,
        body: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          user: {
            id: '123',
            email: 'user@example.com',
            name: 'John Doe'
          }
        }
      }
    },
    {
      id: 'users',
      method: 'GET',
      path: '/api/v1/users',
      description: 'Get list of users',
      parameters: [
        { name: 'page', type: 'number', required: false, description: 'Page number (default: 1)' },
        { name: 'limit', type: 'number', required: false, description: 'Items per page (default: 10)' }
      ],
      response: {
        status: 200,
        body: {
          users: [
            { id: '123', email: 'user@example.com', name: 'John Doe' }
          ],
          pagination: {
            page: 1,
            limit: 10,
            total: 1
          }
        }
      }
    },
    {
      id: 'projects',
      method: 'POST',
      path: '/api/v1/projects',
      description: 'Create a new project',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'Project name' },
        { name: 'description', type: 'string', required: false, description: 'Project description' }
      ],
      response: {
        status: 201,
        body: {
          id: '456',
          name: 'My Project',
          description: 'Project description',
          created_at: '2024-01-15T10:30:00Z'
        }
      }
    }
  ];

  const codeExamples = {
    curl: `curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`,
    javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'your_password'
  })
});

const data = await response.json();
console.log(data.token);`,
    python: `import requests

response = requests.post('https://api.ziontechgroup.com/v1/auth/login', json={
    'email': 'user@example.com',
    'password': 'your_password'
})

data = response.json()
print(data['token'])`
  };

  return (
    <MainLayout
      title="API Reference - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group services. Find endpoints, authentication, examples, and SDKs."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Code className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Reference</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Complete API documentation for integrating with Zion Tech Group services. 
            Build powerful applications with our RESTful API.
          </p>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">RESTful API</h3>
              <p className="text-gray-600">Standard HTTP methods and status codes for easy integration</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Key className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Authentication</h3>
              <p className="text-gray-600">JWT-based authentication with API keys for secure access</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rate Limited</h3>
              <p className="text-gray-600">Fair usage policies with generous rate limits for all users</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Base URL</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-lg">
              https://api.ziontechgroup.com/v1
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Authentication</h2>
            <p className="text-gray-600">All API requests require authentication using JWT tokens or API keys.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">JWT Token</h3>
              <p className="text-gray-600 mb-4">
                Include the JWT token in the Authorization header:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                Authorization: Bearer your_jwt_token_here
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">API Key</h3>
              <p className="text-gray-600 mb-4">
                Include the API key in the X-API-Key header:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                X-API-Key: your_api_key_here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h2>
            <p className="text-gray-600">Get started quickly with these code examples in popular languages.</p>
          </div>

          <div className="space-y-8">
            {Object.entries(codeExamples).map(([language, code]) => (
              <div key={language} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 capitalize">{language}</h3>
                  <button
                    onClick={() => copyToClipboard(code, language)}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    {copiedCode === language ? (
                      <Check className="w-4 h-4 mr-2" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2" />
                    )}
                    {copiedCode === language ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                  <code>{code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-gray-600">Explore all available API endpoints with detailed documentation.</p>
          </div>

          <div className="space-y-6">
            {endpoints.map((endpoint) => {
              const isExpanded = expandedEndpoint === endpoint.id;
              const methodColor = endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 
                                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' : 
                                'bg-yellow-100 text-yellow-800';

              return (
                <div key={endpoint.id} className="bg-white rounded-lg shadow-lg border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedEndpoint(isExpanded ? null : endpoint.id)}
                  >
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mr-4 ${methodColor}`}>
                        {endpoint.method}
                      </span>
                      <div>
                        <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                        <p className="text-gray-600 mt-1">{endpoint.description}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-500" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-8 pt-6">
                        {/* Parameters */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h4>
                          <div className="space-y-3">
                            {endpoint.parameters.map((param, index) => (
                              <div key={index} className="bg-gray-50 p-3 rounded">
                                <div className="flex items-center justify-between mb-1">
                                  <code className="font-mono text-sm">{param.name}</code>
                                  <span className={`px-2 py-1 rounded text-xs ${
                                    param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                  }`}>
                                    {param.type}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600">{param.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Response */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Response</h4>
                          <div className="bg-gray-50 p-3 rounded mb-3">
                            <span className="text-sm font-medium">Status: {endpoint.response.status}</span>
                          </div>
                          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{JSON.stringify(endpoint.response.body, null, 2)}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SDKs and Libraries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SDKs and Libraries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our official SDKs and community libraries to integrate faster with your preferred programming language.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">JavaScript/Node.js</h3>
              <p className="text-gray-600 mb-4">Official SDK for JavaScript and Node.js applications</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">View on GitHub →</a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Python</h3>
              <p className="text-gray-600 mb-4">Official Python SDK for server-side applications</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">View on PyPI →</a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">PHP</h3>
              <p className="text-gray-600 mb-4">Community-maintained PHP library</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">View on Packagist →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need API Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get help with API integration, troubleshooting, and best practices from our technical team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/help"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              API Support
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default API;