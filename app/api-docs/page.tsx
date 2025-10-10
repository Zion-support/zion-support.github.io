'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const APIDocsPage: React.FC = () => {
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
    "training_data": [
      {"text": "positive example", "label": "positive"},
      {"text": "negative example", "label": "negative"}
    ]
  }'`
        }
      ]
    },
    {
      title: 'Data Management',
      description: 'Data processing and management endpoints',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/data/datasets',
          description: 'List all available datasets',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/data/datasets" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/v1/data/upload',
          description: 'Upload new data for processing',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/data/upload" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@data.csv"`
        }
      ]
    },
    {
      title: 'Analytics',
      description: 'Analytics and reporting endpoints',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/analytics/insights',
          description: 'Get analytics insights for your data',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/analytics/insights?dataset_id=123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete API reference with examples and interactive documentation.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {apiEndpoints.map((category, categoryIndex) => (
                <div key={categoryIndex} className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                        <p className="text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {category.endpoints.map((endpoint, endpointIndex) => (
                        <div key={endpointIndex} className="bg-slate-700/30 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                endpoint.method === 'GET' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-blue-500/20 text-blue-400'
                              }`}>
                                {endpoint.method}
                              </span>
                              <code className="text-white font-mono text-lg">{endpoint.path}</code>
                            </div>
                            <button
                              onClick={() => copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}
                              className="flex items-center space-x-2 px-4 py-2 bg-slate-600/50 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-colors"
                            >
                              {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                                <Check className="w-4 h-4 text-green-400" />
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
                            <pre className="text-gray-300 text-sm whitespace-pre-wrap">{endpoint.example}</pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Authentication</h2>
              </div>
              <p className="text-gray-300 mb-6">
                All API requests require authentication using an API key. Include your API key in the Authorization header.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 mb-6">
                <pre className="text-gray-300 text-sm">Authorization: Bearer YOUR_API_KEY</pre>
              </div>
              <p className="text-gray-400 text-sm">
                Get your API key from the <Link to="/dashboard" className="text-purple-400 hover:text-purple-300">dashboard</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building with our API today and unlock the power of AI and data processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get API Key
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View SDKs
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APIDocsPage;