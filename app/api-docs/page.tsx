import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
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
      title: 'AI Content Generation',
      method: 'POST',
      endpoint: '/api/v1/content/generate',
      description: 'Generate AI-powered content for blogs, social media, and marketing materials.',
      example: `curl -X POST https://api.ziontechgroup.com/v1/content/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI in healthcare",
    "type": "blog",
    "length": "medium"
  }'`
    },
    {
      title: 'Data Analytics',
      method: 'GET',
      endpoint: '/api/v1/analytics/dashboard',
      description: 'Retrieve analytics data and insights for your business metrics.',
      example: `curl -X GET https://api.ziontechgroup.com/v1/analytics/dashboard \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    },
    {
      title: 'User Management',
      method: 'POST',
      endpoint: '/api/v1/users/create',
      description: 'Create and manage user accounts with role-based access control.',
      example: `curl -X POST https://api.ziontechgroup.com/v1/users/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "name": "John Doe",
    "role": "user"
  }'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with our AI and IT services. Build powerful applications with our robust APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#getting-started"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Code className="w-5 h-5 mr-2" />
              Get Started
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Key className="w-5 h-5 mr-2" />
              Get API Key
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Get API Key</h3>
              <p className="text-gray-300">Sign up for an account and generate your API key from the dashboard.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Make API Calls</h3>
              <p className="text-gray-300">Use our RESTful APIs to integrate with our services using your preferred language.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Scale Your App</h3>
              <p className="text-gray-300">Monitor usage, optimize performance, and scale your application as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            API Endpoints
          </h2>
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      endpoint.method === 'POST' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono">{endpoint.endpoint}</code>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{endpoint.title}</h3>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Example Request</span>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, `example-${index}`)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {copiedCode === `example-${index}` ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
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
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your API key and start integrating with our powerful AI and IT services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Key className="w-5 h-5 mr-2" />
              Get API Key
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApiDocsPage;