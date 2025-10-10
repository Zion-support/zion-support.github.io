'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Code, Copy, Check, ExternalLink, BookOpen, Zap, Shield, Database, Cloud } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiEndpoints = [
    {
      id: '1',
      method: 'POST',
      path: '/api/v1/ai/analyze',
      description: 'Analyze text using AI models',
      category: 'AI Services',
      icon: Zap
    },
    {
      id: '2',
      method: 'GET',
      path: '/api/v1/cloud/status',
      description: 'Get cloud infrastructure status',
      category: 'Cloud Services',
      icon: Cloud
    },
    {
      id: '3',
      method: 'POST',
      path: '/api/v1/security/scan',
      description: 'Perform security vulnerability scan',
      category: 'Security',
      icon: Shield
    },
    {
      id: '4',
      method: 'GET',
      path: '/api/v1/data/query',
      description: 'Query database with AI assistance',
      category: 'Data Services',
      icon: Database
    }
  ];

  const codeExamples = {
    javascript: `// JavaScript Example
const response = await fetch('https://api.ziontechgroup.com/v1/ai/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'Your text to analyze',
    model: 'gpt-4'
  })
});

const result = await response.json();
console.log(result);`,
    python: `# Python Example
import requests

url = 'https://api.ziontechgroup.com/v1/ai/analyze'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}
data = {
    'text': 'Your text to analyze',
    'model': 'gpt-4'
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`,
    curl: `# cURL Example
curl -X POST https://api.ziontechgroup.com/v1/ai/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to analyze",
    "model": "gpt-4"
  }'`
  };

  const copyToClipboard = async (code: string, language: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(language);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const filteredEndpoints = apiEndpoints.filter(endpoint =>
    endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group | Developer API Reference</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group services. Get started with our REST APIs, authentication, and code examples." />
        <meta name="keywords" content="API documentation, REST API, developer docs, API reference, authentication, code examples" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Integrate with our powerful APIs to build amazing applications. Complete documentation with examples and interactive testing.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quick Start
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running with our API in minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Authentication */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Authentication</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  All API requests require authentication using your API key.
                </p>
                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <code className="text-green-400 text-sm">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
                >
                  Get API Key
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Base URL */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Base URL</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  All API endpoints are relative to this base URL.
                </p>
                <div className="bg-slate-800 rounded-lg p-4">
                  <code className="text-cyan-400 text-sm">
                    https://api.ziontechgroup.com/v1
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints.
              </p>
            </div>

            <div className="space-y-4">
              {filteredEndpoints.map((endpoint) => (
                <div
                  key={endpoint.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <endpoint.icon className="w-6 h-6 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{endpoint.description}</h3>
                        <p className="text-purple-400 text-sm">{endpoint.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-400/10 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-400/10 text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-400/10 text-yellow-400' :
                        'bg-red-400/10 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <code className="text-cyan-400 text-sm font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Code Examples
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with these code examples.
              </p>
            </div>

            <div className="space-y-6">
              {Object.entries(codeExamples).map(([language, code]) => (
                <div key={language} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h3 className="text-lg font-semibold text-white capitalize">{language}</h3>
                    <button
                      onClick={() => copyToClipboard(code, language)}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === language ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building with our APIs today. Get your API key and begin integrating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <BookOpen className="w-5 h-5" />
                  Get API Key
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Code className="w-5 h-5" />
                  Developer Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiDocsPage;
