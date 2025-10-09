'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Core AI functionality and machine learning services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/predict',
          description: 'Make predictions using trained AI models',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  }'`
        },
        {
          method: 'POST',
          path: '/api/v1/ai/train',
          description: 'Train a new AI model with your data',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/train" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_name": "custom-classifier",
    "training_data": [...],
    "model_type": "classification"
  }'`
        }
      ]
    },
    {
      title: 'Micro SAAS',
      description: 'Micro SAAS tools and utilities',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/micro-saas/tools',
          description: 'Get list of available micro SAAS tools',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/micro-saas/tools" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/v1/micro-saas/execute',
          description: 'Execute a micro SAAS tool',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/micro-saas/execute" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool_id": "content-generator",
    "parameters": {
      "topic": "AI Technology",
      "length": "500"
    }
  }'`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Complete API Reference
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive API documentation for all our services. Get started with our APIs 
              and integrate our AI and micro SAAS solutions into your applications.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              API Endpoints
            </h2>
            <div className="space-y-12">
              {apiEndpoints.map((category, categoryIndex) => (
                <div key={categoryIndex} className="cyber-card-enhanced p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="cyber-card hologram-card p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              endpoint.method === 'GET' ? 'bg-green-400 text-slate-900' :
                              endpoint.method === 'POST' ? 'bg-blue-400 text-slate-900' :
                              endpoint.method === 'PUT' ? 'bg-yellow-400 text-slate-900' :
                              'bg-red-400 text-slate-900'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{endpoint.description}</p>
                        
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">Example Request</span>
                            <button
                              onClick={() => copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}
                              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span className="text-sm">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  <span className="text-sm">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="text-sm text-gray-300 overflow-x-auto">
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
        </section>

        {/* Authentication */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Authentication
            </h2>
            <div className="cyber-card-enhanced p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Key className="w-6 h-6 text-cyan-400 mr-2" />
                    API Key Authentication
                  </h3>
                  <p className="text-gray-300 mb-4">
                    All API requests require authentication using an API key. Include your API key 
                    in the Authorization header of each request.
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <pre className="text-sm text-gray-300">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                    Rate Limiting
                  </h3>
                  <p className="text-gray-300 mb-4">
                    API requests are rate limited to ensure fair usage. Standard rate limits are:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 1000 requests per hour for free tier</li>
                    <li>• 10,000 requests per hour for paid plans</li>
                    <li>• 100,000 requests per hour for enterprise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Software Development Kits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">JavaScript SDK</h3>
                <p className="text-gray-300 mb-4">Official JavaScript/Node.js SDK</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View Documentation →
                </a>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Python SDK</h3>
                <p className="text-gray-300 mb-4">Official Python SDK</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View Documentation →
                </a>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">REST API</h3>
                <p className="text-gray-300 mb-4">Direct REST API access</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View Documentation →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get your API key and start building with our powerful AI and micro SAAS services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4"
              >
                Get API Key
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;