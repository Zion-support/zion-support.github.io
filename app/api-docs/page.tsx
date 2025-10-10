'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
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
      description: 'Access our AI-powered services and machine learning capabilities',
      endpoints: [
        {
          method: 'POST',
          path: '/api/ai/analyze',
          description: 'Analyze text or data using AI',
          example: `curl -X POST https://api.ziontechgroup.com/ai/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Your text to analyze"}'`
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
      title: 'Cloud Services',
      description: 'Manage cloud resources and infrastructure',
      endpoints: [
        {
          method: 'POST',
          path: '/api/cloud/deploy',
          description: 'Deploy application to cloud',
          example: `curl -X POST https://api.ziontechgroup.com/cloud/deploy \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"app": "my-app", "environment": "production"}'`
        }
      ]
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'JavaScript SDK',
      code: `import { ZionAPI } from '@ziontechgroup/sdk';

const api = new ZionAPI('YOUR_API_KEY');

// Analyze text
const result = await api.ai.analyze({
  text: 'Hello world',
  model: 'gpt-4'
});

console.log(result);`
    },
    {
      language: 'Python',
      title: 'Python SDK',
      code: `from ziontechgroup import ZionAPI

api = ZionAPI('YOUR_API_KEY')

# Analyze text
result = api.ai.analyze(
    text='Hello world',
    model='gpt-4'
)

print(result)`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="API Documentation - Developer Resources | Zion Tech Group"
        description="Complete API documentation for our AI and IT solutions. Get started with our APIs and SDKs."
        keywords="API docs, developer documentation, SDK, REST API, integration guide"
      />
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              API
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Integrate with our AI and IT solutions using our comprehensive APIs and SDKs. 
              Get started in minutes with our developer-friendly documentation.
            </p>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Quick Start</h2>
                <p className="text-gray-300 mb-6">
                  Get up and running with our API in just a few minutes. 
                  Follow these simple steps to start integrating our services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                    <span className="text-gray-300">Get your API key from the dashboard</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                    <span className="text-gray-300">Install our SDK or use REST API</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                    <span className="text-gray-300">Make your first API call</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Get API Key</h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Get Free API Key
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
            
            <div className="space-y-8">
              {apiEndpoints.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded text-sm font-medium ${
                              endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                              endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-purple-400 font-mono">{endpoint.path}</code>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{endpoint.description}</p>
                        
                        <div className="bg-gray-900 rounded-lg p-4 relative">
                          <button
                            onClick={() => copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}
                            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{endpoint.example}</code>
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

        {/* Code Examples */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Code Examples</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded">
                      {example.language}
                    </span>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 relative">
                    <button
                      onClick={() => copyToClipboard(example.code, `example-${index}`)}
                      className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === `example-${index}` ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already using our APIs to build amazing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Now
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