'use client';
import React, { useState } from 'react';

export const dynamic = 'force-dynamic';
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
          path: '/api/ai/analyze',
          description: 'Analyze text or data using AI',
          example: `curl -X POST https://api.ziontechgroup.com/ai/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "text": "Your text to analyze",
    "model": "gpt-4",
    "options": {
      "temperature": 0.7,
      "max_tokens": 1000
    }
  }'`
        },
        {
          method: 'GET',
          path: '/api/ai/models',
          description: 'Get available AI models',
          example: `curl -X GET https://api.ziontechgroup.com/ai/models \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      title: 'Data Processing',
      description: 'Data transformation and processing services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/data/process',
          description: 'Process and transform data',
          example: `curl -X POST https://api.ziontechgroup.com/data/process \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "data": [1, 2, 3, 4, 5],
    "operation": "normalize",
    "format": "json"
  }'`
        }
      ]
    },
    {
      title: 'Analytics',
      description: 'Business intelligence and analytics services',
      endpoints: [
        {
          method: 'GET',
          path: '/api/analytics/dashboard',
          description: 'Get analytics dashboard data',
          example: `curl -X GET https://api.ziontechgroup.com/analytics/dashboard \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -G -d "period=30d&metrics=revenue,users,conversion"`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">API Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion Tech Group's AI and IT services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {apiEndpoints.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-gray-300 mb-8">{section.description}</p>
              
              <div className="space-y-6">
                {section.endpoints.map((endpoint, endpointIndex) => (
                  <div key={endpointIndex} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                          endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{endpoint.description}</p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Example Request</span>
                        <button
                          onClick={() => copyToClipboard(endpoint.example, `${sectionIndex}-${endpointIndex}`)}
                          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {copiedCode === `${sectionIndex}-${endpointIndex}` ? (
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

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Get Started</h3>
            <p className="text-gray-300 mb-6">
              Ready to integrate with our APIs? Get your API key and start building amazing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
              >
                Get API Key
              </a>
              <a
                href="/docs"
                className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all text-center"
              >
                View Full Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocsPage;