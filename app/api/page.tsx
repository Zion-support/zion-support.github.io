import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Key, Book, ArrowRight, CheckCircle, Copy } from 'lucide-react';

const ApiPage = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/analytics',
      description: 'Retrieve analytics data',
      color: 'text-green-400'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/content/generate',
      description: 'Generate AI content',
      color: 'text-blue-400'
    },
    {
      method: 'PUT',
      endpoint: '/api/v1/settings',
      description: 'Update user settings',
      color: 'text-yellow-400'
    },
    {
      method: 'DELETE',
      endpoint: '/api/v1/data/{id}',
      description: 'Delete specific data',
      color: 'text-red-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>API Reference - Zion Tech Group | AI Solutions API Documentation</title>
        <meta name="description" content="Complete API reference for our AI solutions. Integrate with our platform using our RESTful APIs and SDKs." />
        <meta name="keywords" content="API, API reference, REST API, SDK, integration, AI API" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              API Reference
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Integrate with our AI solutions using our comprehensive RESTful APIs and SDKs. 
            Build powerful applications with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              <Key className="w-5 h-5 mr-2" />
              Get API Key
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/docs"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              <Book className="w-5 h-5 mr-2" />
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our RESTful API endpoints
            </p>
          </div>
          
          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded text-sm font-semibold ${endpoint.color} bg-black/20`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono text-lg">{endpoint.endpoint}</code>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300">{endpoint.description}</span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded">
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Start
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our API in minutes
          </p>
          <div className="bg-black/20 rounded-xl p-8 text-left">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{`# Install our SDK
npm install @ziontechgroup/api

# Initialize the client
import { ZionAPI } from '@ziontechgroup/api';

const client = new ZionAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

# Make your first request
const analytics = await client.analytics.get({
  startDate: '2024-01-01',
  endDate: '2024-01-31'
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building with our API today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              <Key className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              <Code className="w-5 h-5 mr-2" />
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiPage;