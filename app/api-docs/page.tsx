'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      method: 'POST',
      endpoint: '/api/auth/login',
      description: 'Authenticate user and get access token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      response: {
        success: {
          token: 'string',
          user: 'object',
          expires_in: 'number'
        }
      },
      example: `curl -X POST https://api.ziontechgroup.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`
    },
    {
      id: 'users',
      title: 'Get Users',
      method: 'GET',
      endpoint: '/api/users',
      description: 'Retrieve list of users',
      parameters: [
        { name: 'page', type: 'number', required: false, description: 'Page number' },
        { name: 'limit', type: 'number', required: false, description: 'Items per page' }
      ],
      response: {
        users: 'array',
        total: 'number',
        page: 'number'
      },
      example: `curl -X GET https://api.ziontechgroup.com/users \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json"`
    },
    {
      id: 'create-user',
      title: 'Create User',
      method: 'POST',
      endpoint: '/api/users',
      description: 'Create a new user',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'User full name' },
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'role', type: 'string', required: false, description: 'User role' }
      ],
      response: {
        id: 'string',
        name: 'string',
        email: 'string',
        role: 'string',
        created_at: 'string'
      },
      example: `curl -X POST https://api.ziontechgroup.com/users \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            API <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Documentation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive API documentation with examples, code snippets, and interactive testing tools.
          </p>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {apiEndpoints.map((endpoint) => (
              <div key={endpoint.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-300' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-300' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-purple-400 font-mono text-lg">{endpoint.endpoint}</code>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{endpoint.title}</h2>
                    <p className="text-gray-300">{endpoint.description}</p>
                  </div>
                </div>

                {/* Parameters */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Parameters</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 text-gray-300">Name</th>
                          <th className="text-left py-2 text-gray-300">Type</th>
                          <th className="text-left py-2 text-gray-300">Required</th>
                          <th className="text-left py-2 text-gray-300">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.parameters.map((param, idx) => (
                          <tr key={idx} className="border-b border-white/5">
                            <td className="py-2 text-white font-mono">{param.name}</td>
                            <td className="py-2 text-blue-400">{param.type}</td>
                            <td className="py-2">
                              <span className={`px-2 py-1 rounded text-xs ${
                                param.required 
                                  ? 'bg-red-500/20 text-red-300' 
                                  : 'bg-gray-500/20 text-gray-300'
                              }`}>
                                {param.required ? 'Required' : 'Optional'}
                              </span>
                            </td>
                            <td className="py-2 text-gray-300">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Example */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Example Request</h3>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, endpoint.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      {copiedCode === endpoint.id ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap">
                      {endpoint.example}
                    </pre>
                  </div>
                </div>

                {/* Response */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Response</h3>
                  <div className="bg-black/50 rounded-lg p-4">
                    <pre className="text-gray-300 text-sm font-mono">
                      {JSON.stringify(endpoint.response, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="/docs/authentication"
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Key className="w-8 h-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    Authentication
                  </h3>
                  <p className="text-gray-300 text-sm">Learn how to authenticate with our API</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors ml-auto" />
              </a>
              
              <a
                href="/docs/rate-limits"
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Zap className="w-8 h-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Rate Limits
                  </h3>
                  <p className="text-gray-300 text-sm">Understanding API rate limits</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors ml-auto" />
              </a>
              
              <a
                href="/docs/sdk"
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Code className="w-8 h-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                    SDKs
                  </h3>
                  <p className="text-gray-300 text-sm">Official SDKs for popular languages</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors ml-auto" />
              </a>
              
              <a
                href="/docs/webhooks"
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Search className="w-8 h-8 text-yellow-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    Webhooks
                  </h3>
                  <p className="text-gray-300 text-sm">Real-time event notifications</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIDocsPage;