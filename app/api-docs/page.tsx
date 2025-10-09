'use client';
import React, { useState } from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Complete API reference for integrating with our AI platform
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Start
            </h2>
            <p className="text-xl text-gray-600">
              Get started with our API in minutes
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <Key className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">1. Get API Key</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Sign up for an account and get your API key from the dashboard.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Get API Key
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">2. Make Request</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Use our REST API or SDKs to make your first API call.
              </p>
              <Link 
                href="#examples"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
              >
                View Examples
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">3. Build & Scale</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Integrate AI into your applications and scale with confidence.
              </p>
              <Link 
                href="/docs"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
              >
                Full Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-600">
              Complete reference for all available endpoints
            </p>
          </div>
          <div className="space-y-12">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="space-y-8">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-600 mb-4">{endpoint.description}</p>
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
        </div>
      </section>

      {/* SDK Examples */}
      <section id="examples" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SDK Examples
            </h2>
            <p className="text-xl text-gray-600">
              Code examples for different programming languages
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sdkExamples.map((example, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">{example.language}</h3>
                  <p className="text-sm text-gray-600">{example.description}</p>
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
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authentication
            </h2>
            <p className="text-xl text-gray-600">
              Secure your API calls with proper authentication
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">API Key Authentication</h3>
            <p className="text-gray-600 mb-6">
              All API requests require authentication using an API key. Include your API key in the Authorization header:
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>Authorization: Bearer YOUR_API_KEY</code>
              </pre>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Important:</strong> Keep your API key secure and never expose it in client-side code. 
                Use environment variables or secure key management systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rate Limits
            </h2>
            <p className="text-xl text-gray-600">
              API usage limits and pricing tiers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Tier</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 1,000 requests/month</li>
                <li>• Basic AI models</li>
                <li>• Community support</li>
                <li>• Standard response time</li>
              </ul>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg shadow-lg p-6 ring-2 ring-blue-500">
              <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro Tier</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 50,000 requests/month</li>
                <li>• All AI models</li>
                <li>• Priority support</li>
                <li>• Fast response time</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Unlimited requests</li>
                <li>• Custom models</li>
                <li>• 24/7 support</li>
                <li>• SLA guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your API key and start building with our AI platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get API Key
            </Link>
            <Link 
              href="/docs"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Full Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Api-docsPage;
