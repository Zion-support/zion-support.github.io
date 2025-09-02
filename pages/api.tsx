import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Code, Key, Zap, Shield, ArrowRight, Copy, CheckCircle } from 'lucide-react';

export default function API() {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/ai/chat',
      description: 'Send a message to our AI chatbot',
      parameters: ['message', 'context', 'user_id']
    },
    {
      method: 'GET',
      path: '/api/v1/ai/models',
      description: 'List available AI models',
      parameters: ['category', 'version']
    },
    {
      method: 'POST',
      path: '/api/v1/ai/analyze',
      description: 'Analyze text or data using AI',
      parameters: ['data', 'analysis_type', 'options']
    },
    {
      method: 'GET',
      path: '/api/v1/services/status',
      description: 'Check service status and health',
      parameters: ['service_id']
    },
    {
      method: 'POST',
      path: '/api/v1/saas/deploy',
      description: 'Deploy a micro SaaS application',
      parameters: ['app_config', 'environment', 'resources']
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Sub-100ms response times with 99.9% uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'OAuth 2.0, JWT tokens, and end-to-end encryption'
    },
    {
      icon: Key,
      title: 'Easy Authentication',
      description: 'Simple API key authentication with role-based access'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'RESTful APIs with comprehensive documentation and SDKs'
    }
  ];

  const codeExample = `// Example: AI Chat API
const response = await fetch('https://api.ziontechgroup.com/v1/ai/chat', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Hello, how can you help me?',
    context: 'customer_support',
    user_id: 'user_123'
  })
});

const data = await response.json();
console.log(data.response);`;

  const sdkExamples = [
    {
      language: 'JavaScript',
      code: `import { ZionAPI } from '@ziontechgroup/sdk';

const client = new ZionAPI('your-api-key');
const response = await client.ai.chat({
  message: 'Hello!',
  context: 'support'
});`
    },
    {
      language: 'Python',
      code: `from ziontechgroup import ZionAPI

client = ZionAPI('your-api-key')
response = client.ai.chat(
    message='Hello!',
    context='support'
)`
    }
  ];

  return (
    <>
      <Head>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API reference for Zion Tech Group's services. RESTful APIs for AI, IT services, and micro SaaS development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/api" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                API Reference
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful RESTful APIs for integrating our AI services, IT solutions, 
                and micro SaaS platforms into your applications.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">API Features</h2>
              <p className="text-lg text-gray-600">
                Built for developers, by developers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
              <p className="text-lg text-gray-600">
                Explore our comprehensive API endpoints
              </p>
            </div>
            
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        endpoint.method === 'GET' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-3">{endpoint.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.parameters.map((param, paramIndex) => (
                      <span key={paramIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h2>
              <p className="text-lg text-gray-600">
                Get started quickly with our code examples
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">REST API Example</h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">SDK Examples</h3>
                <div className="space-y-4">
                  {sdkExamples.map((example, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{example.language}</h4>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Authentication</h2>
              <p className="text-lg text-gray-600">
                Secure your API calls with our authentication system
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">API Key Authentication</h3>
                  <p className="text-gray-600 mb-4">
                    Include your API key in the Authorization header:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rate Limits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">1000</div>
                      <div className="text-sm text-gray-600">Requests per hour</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">100</div>
                      <div className="text-sm text-gray-600">Requests per minute</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">10</div>
                      <div className="text-sm text-gray-600">Concurrent requests</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get your API key and start building amazing applications with our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Get API Key</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/docs" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}