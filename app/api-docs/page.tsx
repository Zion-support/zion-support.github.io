'use client';
import React, { useState } from 'react';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      method: 'POST',
      path: '/api/ai/content-generate',
      description: 'Generate AI-powered content',
      example: {
        prompt: 'Write a blog post about AI',
        style: 'professional',
        length: 'medium'
      }
    },
    {
      method: 'GET',
      path: '/api/analytics/dashboard',
      description: 'Get analytics dashboard data',
      example: {
        dateRange: '30d',
        metrics: ['views', 'conversions', 'revenue']
      }
    },
    {
      method: 'POST',
      path: '/api/automation/workflow',
      description: 'Create or update workflow',
      example: {
        name: 'Email Marketing Campaign',
        triggers: ['user_signup', 'purchase'],
        actions: ['send_email', 'update_crm']
      }
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            API Documentation
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Integrate with our AI services using our powerful REST API
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Access our comprehensive API documentation and start building amazing applications 
            with our AI-powered services.
          </p>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            API Endpoints
          </h2>
          
          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="cyber-card hologram-card p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      endpoint.method === 'GET' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(endpoint.example, null, 2), endpoint.path)}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {copiedEndpoint === endpoint.path ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>Copy Example</span>
                  </button>
                </div>
                
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Example Request:</h4>
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{JSON.stringify(endpoint.example, null, 2)}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Getting Started
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Key className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Get API Key</h3>
              <p className="text-gray-300">
                Sign up for an account and get your API key to start making requests.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Make Requests</h3>
              <p className="text-gray-300">
                Use our REST API to integrate AI services into your applications.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Scale Up</h3>
              <p className="text-gray-300">
                Scale your usage as your application grows with our flexible pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your API key and start integrating our AI services today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get API Key
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default APIDocsPage;