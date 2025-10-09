'use client';
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
      id: 'ai-prediction',
      title: 'AI Prediction API',
      method: 'POST',
      endpoint: '/api/v1/predict',
      description: 'Get AI-powered predictions for your data',
      example: `curl -X POST https://api.ziontechgroup.com/v1/predict \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "sentiment-analysis",
    "data": "This is a great product!"
  }'`
    },
    {
      id: 'ai-analysis',
      title: 'AI Data Analysis',
      method: 'POST',
      endpoint: '/api/v1/analyze',
      description: 'Analyze data with advanced AI algorithms',
      example: `curl -X POST https://api.ziontechgroup.com/v1/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "dataset": "customer_data.csv",
    "analysis_type": "clustering"
  }'`
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      method: 'POST',
      endpoint: '/api/v1/automate',
      description: 'Trigger AI-powered automation workflows',
      example: `curl -X POST https://api.ziontechgroup.com/v1/automate \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "workflow_id": "email_processing",
    "parameters": {
      "email_count": 1000
    }
  }'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">API Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Integrate with our AI-powered APIs to enhance your applications with cutting-edge technology.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((endpoint) => (
              <div key={endpoint.id} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{endpoint.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <code className="text-cyan-400 font-mono">{endpoint.endpoint}</code>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Example Request</span>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, endpoint.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === endpoint.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{endpoint.example}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <Key className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3">Get API Key</h3>
              <p className="text-gray-300 mb-4">
                Sign up for an account and get your API key from the dashboard.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <Code className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3">Integrate</h3>
              <p className="text-gray-300 mb-4">
                Use our REST APIs or SDKs to integrate AI capabilities into your app.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                View SDKs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3">Scale</h3>
              <p className="text-gray-300 mb-4">
                Scale your AI-powered features with our enterprise-grade infrastructure.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Our technical team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Support
              </Link>
              <a 
                href="mailto:api@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Email API Team
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