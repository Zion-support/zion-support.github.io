'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Shield, Brain, Cloud, Database, Users, Settings } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Core AI functionality and machine learning services',
      icon: Brain,
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/predict',
          description: 'Make predictions using trained AI models',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "sentiment-analysis",
    "input": "This is a great product!"
  }'`
        },
        {
          method: 'GET',
          path: '/api/v1/ai/models',
          description: 'List available AI models',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/ai/models" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment APIs',
      icon: Cloud,
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/cloud/deploy',
          description: 'Deploy application to cloud',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/cloud/deploy" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "app_name": "my-app",
    "environment": "production"
  }'`
        },
        {
          method: 'GET',
          path: '/api/v1/cloud/status',
          description: 'Get deployment status',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/cloud/status" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      title: 'Security',
      description: 'Authentication and security APIs',
      icon: Shield,
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/auth/login',
          description: 'Authenticate user',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/auth/login" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'`
        },
        {
          method: 'POST',
          path: '/api/v1/auth/refresh',
          description: 'Refresh authentication token',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/auth/refresh" \\
  -H "Authorization: Bearer YOUR_REFRESH_TOKEN"`
        }
      ]
    },
    {
      title: 'Data Management',
      description: 'Data storage and management APIs',
      icon: Database,
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/data/query',
          description: 'Query data from database',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/data/query?table=users&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/v1/data/insert',
          description: 'Insert data into database',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/data/insert" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "table": "users",
    "data": {"name": "John Doe", "email": "john@example.com"}
  }'`
        }
      ]
    }
  ];

  const filteredEndpoints = apiEndpoints.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(endpoint =>
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.endpoints.length > 0);

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500/20 text-green-400';
      case 'POST': return 'bg-blue-500/20 text-blue-400';
      case 'PUT': return 'bg-yellow-500/20 text-yellow-400';
      case 'DELETE': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <>
      <SEOOptimizer 
        title="API Documentation - Zion Tech Group"
        description="Complete API documentation for our AI and IT solutions. Endpoints, authentication, examples, and SDKs."
        keywords="API documentation, REST API, API reference, developer docs, API endpoints, authentication"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                API Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive API documentation for integrating with our AI and IT solutions. 
                Get started with our REST APIs and SDKs.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">API Endpoints</h2>
              <div className="space-y-8">
                {filteredEndpoints.map((category, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {category.endpoints.map((endpoint, endpointIndex) => (
                        <div key={endpointIndex} className="bg-white/5 rounded-lg p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getMethodColor(endpoint.method)}`}>
                              {endpoint.method}
                            </span>
                            <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                          </div>
                          <p className="text-gray-300 mb-4">{endpoint.description}</p>
                          <div className="bg-slate-900 rounded-lg p-4 relative">
                            <button
                              onClick={() => copyToClipboard(endpoint.example, `${index}-${endpointIndex}`)}
                              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                            >
                              {copiedCode === `${index}-${endpointIndex}` ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                            <pre className="text-gray-300 text-sm overflow-x-auto">
                              <code>{endpoint.example}</code>
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Authentication</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Key className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">API Key Authentication</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  All API requests require authentication using an API key. Include your API key 
                  in the Authorization header of each request.
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-gray-300 text-sm">
                    <code>Authorization: Bearer YOUR_API_KEY</code>
                  </pre>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Get your API key from the dashboard after signing up for an account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our APIs today and start building amazing applications 
              with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get API Key
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download SDK
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default APIDocsPage;
