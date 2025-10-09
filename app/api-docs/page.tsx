'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      description: 'Access our AI-powered services through RESTful APIs',
      endpoints: [
        {
          method: 'POST',
          path: '/api/ai/content-generation',
          description: 'Generate AI-powered content',
          parameters: [
            { name: 'prompt', type: 'string', required: true, description: 'Content prompt' },
            { name: 'style', type: 'string', required: false, description: 'Content style' },
            { name: 'length', type: 'number', required: false, description: 'Content length' }
          ],
          example: {
            request: {
              prompt: 'Write a blog post about AI trends',
              style: 'professional',
              length: 500
            },
            response: {
              content: 'AI is transforming industries...',
              wordCount: 487,
              confidence: 0.95
            }
          }
        },
        {
          method: 'POST',
          path: '/api/ai/data-analytics',
          description: 'Analyze data with AI insights',
          parameters: [
            { name: 'data', type: 'array', required: true, description: 'Data to analyze' },
            { name: 'analysisType', type: 'string', required: true, description: 'Type of analysis' }
          ],
          example: {
            request: {
              data: [1, 2, 3, 4, 5],
              analysisType: 'trend'
            },
            response: {
              trend: 'increasing',
              confidence: 0.87,
              insights: ['Data shows upward trend']
            }
          }
        }
      ]
    },
    {
      title: 'Authentication',
      description: 'Secure API access with JWT tokens',
      endpoints: [
        {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Authenticate and get access token',
          parameters: [
            { name: 'email', type: 'string', required: true, description: 'User email' },
            { name: 'password', type: 'string', required: true, description: 'User password' }
          ],
          example: {
            request: {
              email: 'user@example.com',
              password: 'password123'
            },
            response: {
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
              expiresIn: 3600
            }
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Integrate with our AI services using our comprehensive RESTful API. 
            Get started with our detailed documentation and code examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get API Access
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/api"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Try API Explorer
            </Link>
          </div>
        </section>

        {/* API Overview */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            API Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">RESTful API</h3>
              <p className="text-gray-300">Standard HTTP methods and status codes</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Key className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">JWT Authentication</h3>
              <p className="text-gray-300">Secure token-based authentication</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Real-time Updates</h3>
              <p className="text-gray-300">WebSocket support for live data</p>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            API Endpoints
          </h2>
          
          <div className="space-y-12">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-8">{category.description}</p>
                
                <div className="space-y-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="border border-gray-700 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded text-sm font-bold ${
                            endpoint.method === 'POST' ? 'bg-green-500' : 
                            endpoint.method === 'GET' ? 'bg-blue-500' : 
                            'bg-yellow-500'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Parameters</h4>
                          <div className="space-y-2">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <div key={paramIndex} className="flex items-center justify-between text-sm">
                                <div>
                                  <code className="text-cyan-400">{param.name}</code>
                                  <span className="text-gray-400 ml-2">({param.type})</span>
                                  {param.required && <span className="text-red-400 ml-2">*</span>}
                                </div>
                                <span className="text-gray-500">{param.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Example</h4>
                          <div className="bg-gray-800 rounded p-4">
                            <div className="mb-4">
                              <h5 className="text-sm font-semibold text-gray-400 mb-2">Request:</h5>
                              <pre className="text-sm text-gray-300 overflow-x-auto">
                                {JSON.stringify(endpoint.example.request, null, 2)}
                              </pre>
                            </div>
                            <div>
                              <h5 className="text-sm font-semibold text-gray-400 mb-2">Response:</h5>
                              <pre className="text-sm text-gray-300 overflow-x-auto">
                                {JSON.stringify(endpoint.example.response, null, 2)}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Getting Started
          </h2>
          
          <div className="cyber-card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">1. Get API Key</h3>
                <p className="text-gray-300 mb-4">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                
                <h3 className="text-xl font-bold text-white mb-4">2. Make Your First Request</h3>
                <p className="text-gray-300 mb-4">
                  Use your API key to authenticate and make requests to our endpoints.
                </p>
                
                <h3 className="text-xl font-bold text-white mb-4">3. Explore Examples</h3>
                <p className="text-gray-300">
                  Check out our code examples and SDKs for popular programming languages.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Start Code</h3>
                <div className="bg-gray-800 rounded p-4">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// JavaScript Example
const response = await fetch('/api/ai/content-generation', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: 'Write about AI trends',
    style: 'professional'
  })
});

const data = await response.json();
console.log(data.content);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="text-center">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our developer support team is here to help you integrate with our APIs. 
              Get personalized assistance and code reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
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