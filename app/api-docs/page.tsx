'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Copy, Play, Users, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ApiDocsPage: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('authentication');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const endpoints = [
    {
      id: 'authentication',
      name: 'Authentication',
      method: 'POST',
      path: '/api/auth/login',
      description: 'Authenticate users and get access tokens'
    },
    {
      id: 'ai-predict',
      name: 'AI Prediction',
      method: 'POST',
      path: '/api/ai/predict',
      description: 'Make predictions using our AI models'
    },
    {
      id: 'data-upload',
      name: 'Data Upload',
      method: 'POST',
      path: '/api/data/upload',
      description: 'Upload and process data files'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      method: 'GET',
      path: '/api/analytics/dashboard',
      description: 'Retrieve analytics and insights'
    }
  ];

  const codeExamples = {
    authentication: `curl -X POST https://api.ziontechgroup.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`,
    'ai-predict': `curl -X POST https://api.ziontechgroup.com/ai/predict \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-classification",
    "input": "This is a sample text for classification"
  }'`,
    'data-upload': `curl -X POST https://api.ziontechgroup.com/data/upload \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -F "file=@data.csv" \\
  -F "type=csv"`,
    analytics: `curl -X GET https://api.ziontechgroup.com/analytics/dashboard \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Accept: application/json"`
  };

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'POST': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'PUT': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'DELETE': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's AI and IT services with code examples and interactive guides." />
        <meta name="keywords" content="API documentation, REST API, AI API, IT services API, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  API Documentation
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive API reference for all our AI and IT services. 
                  Get started with our RESTful APIs and integrate seamlessly.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
                  <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">API Endpoints</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">1000+</div>
                  <div className="text-gray-300">Active Developers</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-pink-500/20">
                  <Database className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime SLA</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/20">
                  <Eye className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar - Endpoints */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h2 className="text-xl font-bold text-white mb-6">API Endpoints</h2>
                    <div className="space-y-3">
                      {endpoints.map((endpoint) => (
                        <button
                          key={endpoint.id}
                          onClick={() => setSelectedEndpoint(endpoint.id)}
                          className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                            selectedEndpoint === endpoint.id
                              ? 'bg-cyan-500/20 border border-cyan-500/40'
                              : 'bg-slate-800/50 border border-cyan-500/20 hover:bg-slate-700/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-white">{endpoint.name}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium border ${getMethodColor(endpoint.method)}`}>
                              {endpoint.method}
                            </span>
                          </div>
                          <div className="text-sm text-gray-400 font-mono">{endpoint.path}</div>
                          <div className="text-sm text-gray-300 mt-1">{endpoint.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content - Code Examples */}
                <div className="lg:col-span-2">
                  <div className="bg-slate-800/50 rounded-xl border border-cyan-500/20 overflow-hidden">
                    <div className="bg-slate-700/50 px-6 py-4 border-b border-cyan-500/20">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          {endpoints.find(e => e.id === selectedEndpoint)?.name} Example
                        </h3>
                        <button
                          onClick={() => copyToClipboard(codeExamples[selectedEndpoint as keyof typeof codeExamples], selectedEndpoint)}
                          className="flex items-center space-x-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                          <span>{copiedCode === selectedEndpoint ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <pre className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
                        <code className="text-gray-300 text-sm">
                          {codeExamples[selectedEndpoint as keyof typeof codeExamples]}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* Response Example */}
                  <div className="mt-8 bg-slate-800/50 rounded-xl border border-cyan-500/20 overflow-hidden">
                    <div className="bg-slate-700/50 px-6 py-4 border-b border-cyan-500/20">
                      <h3 className="text-lg font-semibold text-white">Response Example</h3>
                    </div>
                    <div className="p-6">
                      <pre className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
                        <code className="text-gray-300 text-sm">
{`{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600,
    "user": {
      "id": "12345",
      "email": "user@example.com",
      "role": "developer"
    }
  },
  "message": "Authentication successful"
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDKs and Libraries */}
              <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">SDKs & Libraries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">JavaScript</h3>
                    <p className="text-sm text-gray-300 mb-4">Node.js and browser SDK</p>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Download SDK
                    </button>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Python</h3>
                    <p className="text-sm text-gray-300 mb-4">Python client library</p>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Download SDK
                    </button>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">PHP</h3>
                    <p className="text-sm text-gray-300 mb-4">PHP client library</p>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Download SDK
                    </button>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">cURL</h3>
                    <p className="text-sm text-gray-300 mb-4">Command line examples</p>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      View Examples
                    </button>
                  </div>
                </div>
              </div>

              {/* Getting Started CTA */}
              <div className="mt-16 text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Sign up for a free API key and start building with our powerful AI and IT services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get API Key
                  </a>
                  <a
                    href="/docs"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Full Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ApiDocsPage;