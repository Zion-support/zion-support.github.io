'use client';
import React, { useState } from 'react';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';

export default function APIDocsPage() {
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
      title: 'Data Processing',
      description: 'Data analysis and processing APIs',
      icon: Database,
      endpoints: [
        {
          name: 'Data Analysis',
          method: 'POST',
          path: '/api/data/analyze',
          description: 'Process and analyze large datasets',
          code: `curl -X POST "https://api.ziontechgroup.com/data/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": [1, 2, 3, 4, 5],
    "operations": ["aggregate", "filter", "transform"],
    "output_format": "json"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">API Documentation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive API documentation for all our services. Get started with our powerful APIs today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search APIs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {filteredEndpoints.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-purple-400 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {category.endpoints.map((endpoint, endpointIndex) => (
                  <div key={endpointIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`)}
                        className="flex items-center space-x-2 px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors"
                      >
                        {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span className="text-sm">
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? 'Copied!' : 'Copy'}
                        </span>
                      </button>
                    </div>

                    <p className="text-gray-300 mb-4">{endpoint.description}</p>

                    <div className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap">{endpoint.code}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
