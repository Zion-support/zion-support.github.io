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
    "training_data": [...],
    "model_type": "classification"
  }'`
        },
        {
          method: 'GET',
          path: '/api/v1/ai/models',
          description: 'List all available AI models',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/ai/models" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      title: 'Data Processing',
      description: 'Data transformation and analytics endpoints',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/data/process',
          description: 'Process and transform data',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/data/process" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": [...],
    "operations": ["clean", "normalize", "aggregate"]
  }'`
        },
        {
          method: 'GET',
          path: '/api/v1/data/analytics',
          description: 'Get data analytics and insights',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/data/analytics?dataset_id=123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      title: 'Authentication',
      description: 'User authentication and authorization',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/auth/login',
          description: 'Authenticate user and get access token',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/auth/login" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`
        },
        {
          method: 'POST',
          path: '/api/v1/auth/refresh',
          description: 'Refresh access token',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/auth/refresh" \\
  -H "Authorization: Bearer YOUR_REFRESH_TOKEN"`
        }
      ]
    }
  ];

  const sdkExamples = [
    {
      language: 'Python',
      code: `from ziontech import Client

# Initialize client
client = Client(api_key="your_api_key")

# Make a prediction
result = client.ai.predict(
    model_id="sentiment-analysis-v1",
    input_data={"text": "I love this product!"}
)

print(result.predictions)`,
      description: 'Python SDK example for making AI predictions'
    },
    {
      language: 'JavaScript',
      code: `const { ZionTechClient } = require('ziontech-js');

// Initialize client
const client = new ZionTechClient('your_api_key');

// Make a prediction
const result = await client.ai.predict({
  modelId: 'sentiment-analysis-v1',
  inputData: { text: 'I love this product!' }
});

console.log(result.predictions);`,
      description: 'JavaScript/Node.js SDK example'
    },
    {
      language: 'cURL',
      code: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  }'`,
      description: 'Direct API call using cURL'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            API Documentation
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Complete API reference for integrating with our AI platform
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search API endpoints..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Quick Start
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <Key className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">1. Get API Key</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Sign up for an account and get your API key from the dashboard.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Get API Key
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">2. Make Request</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Use our REST API or SDKs to make your first API call.
              </p>
              <Link 
                href="#examples"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
              >
                View Examples
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">3. Build & Scale</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Integrate AI into your applications and scale with confidence.
              </p>
              <Link 
                href="/docs"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
              >
                Full Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            API Endpoints
          </h2>
          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card hologram-card p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
                <div className="space-y-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="bg-black/30 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                          endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                          endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-cyan-400">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      <div className="bg-gray-900 rounded-lg p-4 relative">
                        <button
                          onClick={() => copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}
                          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{endpoint.example}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SDK Examples */}
        <section id="examples" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            SDK Examples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sdkExamples.map((example, index) => (
              <div key={index} className="cyber-card hologram-card overflow-hidden">
                <div className="bg-black/30 px-6 py-4">
                  <h3 className="text-lg font-semibold text-white">{example.language}</h3>
                  <p className="text-sm text-gray-300">{example.description}</p>
                </div>
                <div className="p-6">
                  <div className="bg-gray-900 rounded-lg p-4 relative">
                    <button
                      onClick={() => copyToClipboard(example.code, `sdk-${index}`)}
                      className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === `sdk-${index}` ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Need Help?</h2>
          <p className="text-gray-300 mb-8">
            Contact our developer support team for assistance with API integration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
            >
              Email Support
            </a>
            <a
              href="/contact"
              className="cyber-button"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;