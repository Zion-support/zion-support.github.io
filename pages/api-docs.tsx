import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  ArrowRight,
  Copy,
  ExternalLink,
  Key,
  Globe,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play
} from 'lucide-react';
import Layout from '../components/Layout';

const apiEndpoints = [
  {
    method: 'GET',
    endpoint: '/api/v1/ai/analyze',
    description: 'Analyze text content using AI',
    parameters: [
      { name: 'text', type: 'string', required: true, description: 'Text to analyze' },
      { name: 'type', type: 'string', required: false, description: 'Analysis type (sentiment, keywords, etc.)' }
    ],
    example: {
      request: 'GET /api/v1/ai/analyze?text=Hello world&type=sentiment',
      response: {
        sentiment: 'positive',
        confidence: 0.85,
        keywords: ['hello', 'world']
      }
    }
  },
  {
    method: 'POST',
    endpoint: '/api/v1/ai/generate',
    description: 'Generate content using AI',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'Input prompt for generation' },
      { name: 'max_tokens', type: 'number', required: false, description: 'Maximum tokens to generate' }
    ],
    example: {
      request: 'POST /api/v1/ai/generate',
      body: {
        prompt: 'Write a blog post about AI',
        max_tokens: 500
      },
      response: {
        content: 'AI is transforming the way we work...',
        tokens_used: 150
      }
    }
  },
  {
    method: 'GET',
    endpoint: '/api/v1/cloud/status',
    description: 'Get cloud service status',
    parameters: [],
    example: {
      request: 'GET /api/v1/cloud/status',
      response: {
        status: 'operational',
        services: {
          compute: 'up',
          storage: 'up',
          network: 'up'
        }
      }
    }
  }
];

const sdkExamples = [
  {
    language: 'JavaScript',
    code: `// Install the SDK
npm install @ziontechgroup/sdk

// Initialize the client
import { ZionClient } from '@ziontechgroup/sdk';

const client = new ZionClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Use AI services
const result = await client.ai.analyze({
  text: 'Hello world',
  type: 'sentiment'
});

console.log(result);`
  },
  {
    language: 'Python',
    code: `# Install the SDK
pip install ziontechgroup-sdk

# Initialize the client
from ziontechgroup import ZionClient

client = ZionClient(
    api_key='your-api-key',
    environment='production'
)

# Use AI services
result = client.ai.analyze(
    text='Hello world',
    type='sentiment'
)

print(result)`
  },
  {
    language: 'cURL',
    code: `# Analyze text
curl -X GET "https://api.ziontechgroup.com/v1/ai/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Hello world", "type": "sentiment"}'

# Generate content
curl -X POST "https://api.ziontechgroup.com/v1/ai/generate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "Write a blog post about AI", "max_tokens": 500}'`
  }
];

export default function ApiDocs() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group's AI and cloud services. Get started with our powerful APIs and SDKs."
      keywords="API documentation, SDK, developer tools, AI API, cloud API, integration"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Integrate with our powerful AI and cloud services using our comprehensive APIs and SDKs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#getting-started"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#sdk-examples"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:border-blue-300 hover:text-white transition-all duration-200"
              >
                View SDK Examples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="getting-started" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick Start
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Get up and running with our APIs in minutes. Choose your preferred language and start building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Key className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Get API Key</h3>
              <p className="text-gray-600 mb-6">
                Sign up for a free account and get your API key from the dashboard. No credit card required for basic usage.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Get API Key
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Install SDK</h3>
              <p className="text-gray-600 mb-6">
                Install our SDK for your preferred language. We support JavaScript, Python, Go, and more.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                npm install @ziontechgroup/sdk
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Make API Call</h3>
              <p className="text-gray-600 mb-6">
                Start making API calls and integrate our services into your application.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                const result = await client.ai.analyze(text);
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              API Endpoints
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Explore our comprehensive API endpoints for AI and cloud services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-600">{endpoint.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h4>
                  <div className="space-y-3 mb-6">
                    {endpoint.parameters.map((param, paramIndex) => (
                      <div key={paramIndex} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {param.required ? 'Required' : 'Optional'}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <code className="font-mono text-sm text-gray-900">{param.name}</code>
                            <span className="text-sm text-gray-500">({param.type})</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{param.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Example</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <div className="mb-2">
                      <span className="text-blue-400">Request:</span>
                      <div className="mt-1">{endpoint.example.request}</div>
                    </div>
                    {endpoint.example.body && (
                      <div className="mb-2">
                        <span className="text-blue-400">Body:</span>
                        <div className="mt-1">{JSON.stringify(endpoint.example.body, null, 2)}</div>
                      </div>
                    )}
                    <div>
                      <span className="text-blue-400">Response:</span>
                      <div className="mt-1">{JSON.stringify(endpoint.example.response, null, 2)}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Examples Section */}
      <section id="sdk-examples" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SDK Examples
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Get started quickly with our SDK examples in multiple programming languages.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sdkExamples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">{example.language}</h3>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Copy className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Authentication
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Secure your API calls with our robust authentication system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                API Key Authentication
              </h3>
              <p className="text-gray-600 mb-6">
                Include your API key in the Authorization header of your requests.
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                Authorization: Bearer YOUR_API_KEY
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="w-8 h-8 text-green-600 mr-3" />
                Rate Limiting
              </h3>
              <p className="text-gray-600 mb-6">
                We implement rate limiting to ensure fair usage and system stability.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Free Tier:</span>
                  <span className="font-semibold">100 requests/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Pro Tier:</span>
                  <span className="font-semibold">1,000 requests/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Enterprise:</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of developers who are already building amazing applications with our APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get API Key
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}