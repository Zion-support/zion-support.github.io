import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Copy, Play, Shield, Zap, Globe, Database, Users, Search, Filter } from 'lucide-react';

const APIReferencePage = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('ai-content-generator');

  const endpoints = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      method: 'POST',
      path: '/api/v1/ai/content/generate',
      description: 'Generate high-quality content using AI',
      category: 'AI Services'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot',
      method: 'POST',
      path: '/api/v1/ai/chatbot/message',
      description: 'Send messages to AI chatbot and get responses',
      category: 'AI Services'
    },
    {
      id: 'ai-analytics',
      name: 'AI Analytics',
      method: 'GET',
      path: '/api/v1/ai/analytics/insights',
      description: 'Get AI-powered analytics and insights',
      category: 'AI Services'
    },
    {
      id: 'user-management',
      name: 'User Management',
      method: 'GET',
      path: '/api/v1/users',
      description: 'Manage user accounts and permissions',
      category: 'User Management'
    },
    {
      id: 'data-processing',
      name: 'Data Processing',
      method: 'POST',
      path: '/api/v1/data/process',
      description: 'Process and analyze data using AI',
      category: 'Data Services'
    },
    {
      id: 'file-upload',
      name: 'File Upload',
      method: 'POST',
      path: '/api/v1/files/upload',
      description: 'Upload and process files',
      category: 'File Services'
    }
  ];

  const codeExamples = {
    'ai-content-generator': {
      request: `curl -X POST "https://api.ziontechgroup.com/v1/ai/content/generate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI in healthcare",
    "max_length": 500,
    "tone": "professional",
    "language": "en"
  }'`,
      response: `{
  "success": true,
  "data": {
    "content": "Artificial Intelligence is revolutionizing healthcare...",
    "word_count": 487,
    "generated_at": "2024-01-15T10:30:00Z",
    "model_version": "gpt-4-turbo"
  },
  "usage": {
    "tokens_used": 1250,
    "tokens_remaining": 98750
  }
}`,
      javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/ai/content/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Write a blog post about AI in healthcare',
    max_length: 500,
    tone: 'professional',
    language: 'en'
  })
});

const data = await response.json();
console.log(data.data.content);`
    }
  };

  const categories = [
    { name: 'AI Services', icon: <Zap className="w-5 h-5" />, count: 15 },
    { name: 'User Management', icon: <Users className="w-5 h-5" />, count: 8 },
    { name: 'Data Services', icon: <Database className="w-5 h-5" />, count: 12 },
    { name: 'File Services', icon: <Globe className="w-5 h-5" />, count: 6 },
    { name: 'Analytics', icon: <Search className="w-5 h-5" />, count: 10 }
  ];

  const selectedEndpointData = endpoints.find(ep => ep.id === selectedEndpoint);
  const selectedCodeExample = codeExamples[selectedEndpoint as keyof typeof codeExamples];

  return (
    <>
      <Helmet>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Complete API reference for Zion Tech Group's AI and IT solutions. Documentation, examples, and SDKs for developers." />
        <meta name="keywords" content="API reference, developer documentation, REST API, SDK, integration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                API Reference
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete API documentation for our AI and IT solutions. 
                Build amazing applications with our powerful APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get API Key
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Download SDKs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-2">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-medium mb-1">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} endpoints</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Endpoints List */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Endpoints</h3>
                  <div className="space-y-2">
                    {endpoints.map((endpoint) => (
                      <button
                        key={endpoint.id}
                        onClick={() => setSelectedEndpoint(endpoint.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                          selectedEndpoint === endpoint.id
                            ? 'bg-blue-600/20 border border-blue-500/50'
                            : 'hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white font-medium">{endpoint.name}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-600/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-600/20 text-blue-400' :
                            'bg-yellow-600/20 text-yellow-400'
                          }`}>
                            {endpoint.method}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{endpoint.description}</p>
                        <p className="text-gray-500 text-xs mt-1">{endpoint.path}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Endpoint Details */}
              <div className="lg:col-span-2">
                {selectedEndpointData && (
                  <div className="space-y-8">
                    {/* Endpoint Info */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-white">{selectedEndpointData.name}</h2>
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          selectedEndpointData.method === 'GET' ? 'bg-green-600/20 text-green-400' :
                          selectedEndpointData.method === 'POST' ? 'bg-blue-600/20 text-blue-400' :
                          'bg-yellow-600/20 text-yellow-400'
                        }`}>
                          {selectedEndpointData.method}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{selectedEndpointData.description}</p>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <code className="text-green-400">{selectedEndpointData.path}</code>
                      </div>
                    </div>

                    {/* Code Examples */}
                    {selectedCodeExample && (
                      <div className="space-y-6">
                        {/* Request Example */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">Request Example</h3>
                            <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </button>
                          </div>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-gray-300 text-sm">
                              <code>{selectedCodeExample.request}</code>
                            </pre>
                          </div>
                        </div>

                        {/* Response Example */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">Response Example</h3>
                            <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </button>
                          </div>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-gray-300 text-sm">
                              <code>{selectedCodeExample.response}</code>
                            </pre>
                          </div>
                        </div>

                        {/* JavaScript Example */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">JavaScript Example</h3>
                            <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </button>
                          </div>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-gray-300 text-sm">
                              <code>{selectedCodeExample.javascript}</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">SDKs & Libraries</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official SDKs and libraries for popular programming languages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">JavaScript</h3>
                <p className="text-gray-300 mb-4">Node.js and browser support</p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Install
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Python</h3>
                <p className="text-gray-300 mb-4">Full Python support</p>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                  Install
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Code className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">PHP</h3>
                <p className="text-gray-300 mb-4">Composer package</p>
                <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                  Install
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Code className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Go</h3>
                <p className="text-gray-300 mb-4">Go module support</p>
                <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300">
                  Install
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Authentication
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Secure your API calls with our authentication system. 
                  Get your API key and start building today.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">API Key Authentication</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">OAuth 2.0 Support</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">Rate Limiting</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">HTTPS Only</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Get Your API Key</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Project Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="My Project"
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Generate API Key
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your API key and start building amazing applications with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started Now
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default APIReferencePage;