'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Key, Code, Zap, Shield, CheckCircle, ArrowRight, Copy, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';

const APIDocsPage: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/ai/analyze',
      description: 'Analyze text using AI',
      parameters: [
        { name: 'text', type: 'string', required: true, description: 'Text to analyze' },
        { name: 'type', type: 'string', required: false, description: 'Analysis type (sentiment, keywords, etc.)' }
      ]
    },
    {
      method: 'POST',
      path: '/api/ai/generate',
      description: 'Generate content using AI',
      parameters: [
        { name: 'prompt', type: 'string', required: true, description: 'Input prompt' },
        { name: 'max_tokens', type: 'number', required: false, description: 'Maximum tokens to generate' }
      ]
    },
    {
      method: 'GET',
      path: '/api/data/insights',
      description: 'Get business insights',
      parameters: [
        { name: 'date_range', type: 'string', required: false, description: 'Date range for insights' },
        { name: 'metrics', type: 'array', required: false, description: 'Specific metrics to retrieve' }
      ]
    }
  ];

  const codeExample = `// Example: Analyze text sentiment
const response = await fetch('/api/ai/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    text: "This is amazing!",
    type: "sentiment"
  })
});

const result = await response.json();
console.log(result.sentiment); // "positive"`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group's AI and technology services." />
        <meta name="keywords" content="API documentation, developer tools, AI API, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Integrate with our powerful AI and technology services through our comprehensive API.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Get API Key</h3>
              <p className="text-gray-300 mb-4">Sign up and get your API key from the dashboard</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium">
                Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Make API Calls</h3>
              <p className="text-gray-300 mb-4">Use our RESTful API with your preferred programming language</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium">
                View Examples <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Scale Your App</h3>
              <p className="text-gray-300 mb-4">Monitor usage and scale your application as needed</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium">
                View Dashboard <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Code Example</h2>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">JavaScript Example</h3>
              <button className="flex items-center text-gray-400 hover:text-white">
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </button>
            </div>
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-white font-mono">{endpoint.path}</code>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Parameters:</h4>
                  <div className="space-y-2">
                    {endpoint.parameters.map((param, paramIndex) => (
                      <div key={paramIndex} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <code className="text-white">{param.name}</code>
                          <span className="text-gray-400">({param.type})</span>
                          {param.required && <span className="text-red-400 text-xs">required</span>}
                        </div>
                        <span className="text-gray-400">{param.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security & Authentication</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your data is protected with enterprise-grade security measures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">HTTPS Only</h3>
              <p className="text-gray-300">All API calls are encrypted with TLS 1.3</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">API Keys</h3>
              <p className="text-gray-300">Secure authentication with API keys and JWT tokens</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rate Limiting</h3>
              <p className="text-gray-300">Protection against abuse with intelligent rate limiting</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDocsPage;