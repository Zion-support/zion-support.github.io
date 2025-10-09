'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
      name: 'AI Content Generation',
      method: 'POST',
      endpoint: '/api/ai/content/generate',
      description: 'Generate AI-powered content for blogs, social media, and marketing materials',
      example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/content/generate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI trends",
    "type": "blog",
    "length": "medium",
    "tone": "professional"
  }'`
    },
    {
      name: 'AI Analytics',
      method: 'GET',
      endpoint: '/api/ai/analytics/dashboard',
      description: 'Retrieve AI-powered business analytics and insights',
      example: `curl -X GET "https://api.ziontechgroup.com/v1/ai/analytics/dashboard" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    },
    {
      name: 'AI Chatbot',
      method: 'POST',
      endpoint: '/api/ai/chatbot/message',
      description: 'Send messages to AI-powered chatbots',
      example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/chatbot/message" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, how can you help me?",
    "session_id": "user_123",
    "context": "customer_support"
  }'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 enhanced-neon">API Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Integrate with our AI and IT services using our comprehensive REST API. 
            Get started with our developer-friendly endpoints and SDKs.
          </p>
        </section>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono">{endpoint.endpoint}</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(endpoint.example, `example-${index}`)}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {copiedCode === `example-${index}` ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="text-sm">Copy</span>
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap">{endpoint.example}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Key className="w-6 h-6 mr-2 text-cyan-400" />
                Authentication
              </h3>
              <p className="text-gray-300 mb-4">
                All API requests require authentication using your API key. Include it in the Authorization header.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-sm text-gray-300">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>

            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-cyan-400" />
                SDKs & Libraries
              </h3>
              <p className="text-gray-300 mb-4">
                We provide official SDKs for popular programming languages to make integration easier.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">JavaScript/Node.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Python</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">PHP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need Help?</h2>
          <div className="cyber-card hologram-card p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-6">
              Our developer support team is here to help you integrate with our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dev@ziontechgroup.com"
                className="cyberpunk-button inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </a>
              <a
                href="tel:+13024640950"
                className="cyberpunk-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;