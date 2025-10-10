'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';

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
      description: 'Artificial Intelligence and Machine Learning APIs',
      icon: Brain,
      endpoints: [
        {
          name: 'Text Analysis',
          method: 'POST',
          path: '/api/ai/text-analysis',
          description: 'Analyze text sentiment, entities, and key phrases',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/text-analysis" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to analyze",
    "features": ["sentiment", "entities", "key_phrases"]
  }'`
        },
        {
          name: 'Image Recognition',
          method: 'POST',
          path: '/api/ai/image-recognition',
          description: 'Identify objects, faces, and scenes in images',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/image-recognition" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/image.jpg",
    "features": ["objects", "faces", "text"]
  }'`
        }
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment APIs',
      icon: Cloud,
      endpoints: [
        {
          name: 'Deploy Application',
          method: 'POST',
          path: '/api/cloud/deploy',
          description: 'Deploy applications to cloud infrastructure',
          code: `curl -X POST "https://api.ziontechgroup.com/cloud/deploy" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "app_name": "my-app",
    "environment": "production",
    "config": {...}
  }'`
        }
      ]
    }
  ];

  const filteredEndpoints = apiEndpoints.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(endpoint =>
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.endpoints.length > 0);

  return (
    <>
      <Helmet>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's AI, cloud, and blockchain services." />
        <meta name="keywords" content="API documentation, REST API, AI API, cloud API, blockchain API, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive API documentation for all our services. Integrate with our AI, cloud, and blockchain solutions.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search APIs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEndpoints.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{endpoint.name}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-mono ${
                            endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {endpoint.method}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{endpoint.description}</p>
                        <code className="text-purple-400 text-sm font-mono">{endpoint.path}</code>
                        
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">Example Request:</span>
                            <button
                              onClick={() => copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`)}
                              className="text-purple-400 hover:text-white transition-colors"
                            >
                              {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          <pre className="bg-black/20 rounded p-3 text-sm text-gray-300 overflow-x-auto">
                            <code>{endpoint.code}</code>
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

        {/* Getting Started */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Getting Started
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Ready to integrate with our APIs? Get your API key and start building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Key className="mr-2 h-5 w-5" />
                Get API Key
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Download SDK
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default APIDocsPage;