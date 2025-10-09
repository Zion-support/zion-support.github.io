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
      method: 'POST',
      endpoint: '/api/ai/analyze',
      description: 'Analyze text with AI for sentiment, keywords, and insights',
      parameters: [
        { name: 'text', type: 'string', required: true, description: 'Text to analyze' },
        { name: 'analysis_type', type: 'string', required: false, description: 'Type of analysis (sentiment, keywords, summary)' }
      ],
      example: {
        request: `{
  "text": "This product is amazing!",
  "analysis_type": "sentiment"
}`,
        response: `{
  "sentiment": "positive",
  "confidence": 0.95,
  "keywords": ["product", "amazing"],
  "summary": "Positive sentiment detected"
}`
      }
    },
    {
      method: 'GET',
      endpoint: '/api/ai/generate',
      description: 'Generate content using AI models',
      parameters: [
        { name: 'prompt', type: 'string', required: true, description: 'Input prompt for generation' },
        { name: 'model', type: 'string', required: false, description: 'AI model to use' },
        { name: 'max_tokens', type: 'number', required: false, description: 'Maximum tokens to generate' }
      ],
      example: {
        request: `{
  "prompt": "Write a product description for a smartphone",
  "model": "gpt-3.5-turbo",
  "max_tokens": 150
}`,
        response: `{
  "content": "Introducing the latest smartphone with cutting-edge technology...",
  "tokens_used": 45,
  "model": "gpt-3.5-turbo"
}`
      }
    },
    {
      method: 'POST',
      endpoint: '/api/ai/classify',
      description: 'Classify text into predefined categories',
      parameters: [
        { name: 'text', type: 'string', required: true, description: 'Text to classify' },
        { name: 'categories', type: 'array', required: true, description: 'List of possible categories' }
      ],
      example: {
        request: `{
  "text": "I need help with my order",
  "categories": ["support", "sales", "billing", "technical"]
}`,
        response: `{
  "category": "support",
  "confidence": 0.89,
  "all_scores": {
    "support": 0.89,
    "sales": 0.05,
    "billing": 0.03,
    "technical": 0.03
  }
}`
      }
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group's AI services. Access powerful AI capabilities through our RESTful API endpoints."
        keywords={['API documentation', 'AI API', 'REST API', 'developer tools', 'API reference']}
        canonicalUrl="https://ziontechgroup.com/api-docs"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              API Documentation
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Powerful AI capabilities through our RESTful API
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Integrate our advanced AI services into your applications with our comprehensive API. 
              Access text analysis, content generation, classification, and more through simple HTTP requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📧 Get API Key
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </section>

          {/* Quick Start Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Quick Start
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Key className="w-6 h-6 text-cyan-400 mr-2" />
                  Authentication
                </h3>
                <p className="text-gray-300 mb-4">
                  All API requests require authentication using your API key. Include it in the Authorization header.
                </p>
                <div className="bg-slate-800 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth')}
                    className="absolute top-2 right-2 text-cyan-400 hover:text-cyan-300"
                  >
                    {copiedCode === 'auth' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <code className="text-sm text-cyan-400">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>

              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                  Base URL
                </h3>
                <p className="text-gray-300 mb-4">
                  All API endpoints are relative to our base URL. Use HTTPS for all requests.
                </p>
                <div className="bg-slate-800 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard('https://api.ziontechgroup.com/v1', 'base')}
                    className="absolute top-2 right-2 text-cyan-400 hover:text-cyan-300"
                  >
                    {copiedCode === 'base' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <code className="text-sm text-cyan-400">
                    https://api.ziontechgroup.com/v1
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* API Endpoints Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              API Endpoints
            </h2>
            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded text-sm font-bold ${
                        endpoint.method === 'GET' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400 text-lg">{endpoint.endpoint}</code>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{endpoint.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-start space-x-3">
                            <code className="text-cyan-400 text-sm min-w-0 flex-shrink-0">{param.name}</code>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-400 text-sm">{param.type}</span>
                                {param.required && (
                                  <span className="text-red-400 text-xs">required</span>
                                )}
                              </div>
                              <p className="text-gray-300 text-sm">{param.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Example</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-2">Request:</p>
                          <div className="bg-slate-800 rounded-lg p-4 relative">
                            <button
                              onClick={() => copyToClipboard(endpoint.example.request, `req-${index}`)}
                              className="absolute top-2 right-2 text-cyan-400 hover:text-cyan-300"
                            >
                              {copiedCode === `req-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <pre className="text-sm text-cyan-400 overflow-x-auto">
                              <code>{endpoint.example.request}</code>
                            </pre>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-400 mb-2">Response:</p>
                          <div className="bg-slate-800 rounded-lg p-4 relative">
                            <button
                              onClick={() => copyToClipboard(endpoint.example.response, `res-${index}`)}
                              className="absolute top-2 right-2 text-cyan-400 hover:text-cyan-300"
                            >
                              {copiedCode === `res-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <pre className="text-sm text-green-400 overflow-x-auto">
                              <code>{endpoint.example.response}</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Need Help?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate our AI services. 
              Contact us for technical assistance, custom implementations, or API key requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📧 Email Support
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default APIDocsPage;