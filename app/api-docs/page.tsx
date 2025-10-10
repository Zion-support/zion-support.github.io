'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Download, Key, BookOpen, Zap, Shield, Globe, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ApiDocsPage: React.FC = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/ai/chat',
      description: 'Send a message to the AI chat service',
      parameters: [
        { name: 'message', type: 'string', required: true, description: 'The message to send' },
        { name: 'context', type: 'object', required: false, description: 'Additional context for the conversation' }
      ]
    },
    {
      method: 'GET',
      path: '/api/v1/ai/analytics',
      description: 'Retrieve AI analytics data',
      parameters: [
        { name: 'start_date', type: 'string', required: true, description: 'Start date for analytics (YYYY-MM-DD)' },
        { name: 'end_date', type: 'string', required: true, description: 'End date for analytics (YYYY-MM-DD)' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/ai/content/generate',
      description: 'Generate AI content',
      parameters: [
        { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
        { name: 'type', type: 'string', required: true, description: 'Type of content to generate' },
        { name: 'length', type: 'number', required: false, description: 'Desired content length' }
      ]
    }
  ];

  const sdkLanguages = [
    { name: 'JavaScript', icon: '🟨', description: 'Node.js and browser support' },
    { name: 'Python', icon: '🐍', description: 'Full Python SDK with async support' },
    { name: 'Java', icon: '☕', description: 'Enterprise Java integration' },
    { name: 'PHP', icon: '🐘', description: 'PHP 7.4+ support' },
    { name: 'Go', icon: '🐹', description: 'High-performance Go client' },
    { name: 'C#', icon: '🔷', description: '.NET Core integration' }
  ];

  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group's AI and IT solutions. Explore endpoints, authentication, and integration guides." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete API documentation for Zion Tech Group's AI and IT solutions. 
              Explore endpoints, authentication, and integration guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Code className="mr-2 h-5 w-5" />
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Download SDK
              </button>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Get API Key</h3>
                <p className="text-gray-300">Sign up and get your API key from the dashboard</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Install SDK</h3>
                <p className="text-gray-300">Install our SDK for your preferred programming language</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">3. Make Requests</h3>
                <p className="text-gray-300">Start making API calls to our AI services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Authentication</h2>
            <div className="bg-slate-800 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                All API requests require authentication using your API key. Include it in the Authorization header:
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                <code className="text-green-400">Authorization: Bearer YOUR_API_KEY</code>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
            <div className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-white font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-300 mb-4">{endpoint.description}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Parameters:</h4>
                    <div className="space-y-2">
                      {endpoint.parameters.map((param, paramIndex) => (
                        <div key={paramIndex} className="flex items-center gap-4 text-sm">
                          <code className="text-blue-400 font-mono">{param.name}</code>
                          <span className="text-gray-400">({param.type})</span>
                          {param.required && <span className="text-red-400 text-xs">required</span>}
                          <span className="text-gray-300">{param.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdkLanguages.map((sdk, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{sdk.icon}</span>
                    <h3 className="text-xl font-semibold text-white">{sdk.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{sdk.description}</p>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Install SDK
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <BookOpen className="mr-2 h-5 w-5" />
                View Documentation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Globe className="mr-2 h-5 w-5" />
                Contact Support
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ApiDocsPage;