import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Code, 
=======
import {
  Code,
>>>>>>> cursor/expand-services-advertise-and-build-project-22c3
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
<<<<<<< HEAD

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
=======
const sdks = [
  { name: "JavaScript", version: "2.1.0", description: "Node.js and browser support" },
  { name: "Python", version: "1.8.2", description: "Python 3.6+ support" },
  { name: "PHP", version: "1.5.1", description: "PHP 7.4+ support" },
  { name: "Java", version: "2.0.0", description: "Java 8+ support" },
  { name: "Go", version: "1.2.0", description: "Go 1.16+ support" },
  { name: "Ruby", version: "1.3.0", description: "Ruby 2.7+ support" }
];
export default function ApiDocsPage() {
>>>>>>> e424d87cc10bafdae18928500b657e2f4d2faa16
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group's AI and cloud services. Get started with our powerful APIs and SDKs."
      keywords="API documentation, SDK, developer tools, AI API, cloud API, integration"
    >
<<<<<<< HEAD
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
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete API reference with endpoints, authentication, examples, and SDKs.
                Everything you need to integrate with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#endpoints" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Endpoints
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Quick Start */}
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
                Quick Start
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get up and running with our API in minutes
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-4">
                  <span className="text-gray-400"># Install our SDK</span>
                </div>
                <div className="mb-4">
                  <span className="text-blue-400">npm</span> install ziontechgroup-api
                </div>
                <div className="mb-4">
                  <span className="text-gray-400"># Initialize the client</span>
                </div>
                <div className="mb-4">
                  <span className="text-purple-400">const</span> client = <span className="text-yellow-400">new</span> ZionTechGroupAPI({'{'}
                </div>
                <div className="ml-4 mb-4">
                  apiKey: <span className="text-green-400">'your-api-key'</span>
                </div>
                <div className="mb-4">{'}'});</div>
                <div className="mb-4">
                  <span className="text-gray-400"># Make your first request</span>
                </div>
                <div>
                  <span className="text-purple-400">const</span> users = <span className="text-purple-400">await</span> client.users.list();
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* API Endpoints */}
        <section id="endpoints" className="py-20 bg-white">
          <div className="container mx-auto px-4">
>>>>>>> e424d87cc10bafdae18928500b657e2f4d2faa16
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
<<<<<<< HEAD

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
=======
            <div className="space-y-8">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-600">{endpoint.description}</p>
>>>>>>> e424d87cc10bafdae18928500b657e2f4d2faa16
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
<<<<<<< HEAD
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
=======
                  {endpoint.parameters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Name</th>
                              <th className="text-left py-2">Type</th>
                              <th className="text-left py-2">Required</th>
                              <th className="text-left py-2">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex} className="border-b">
                                <td className="py-2 font-mono">{param.name}</td>
                                <td className="py-2 text-gray-600">{param.type}</td>
                                <td className="py-2">
                                  {param.required ? (
                                    <span className="text-red-600">Yes</span>
                                  ) : (
                                    <span className="text-gray-400">No</span>
                                  )}
                                </td>
                                <td className="py-2 text-gray-600">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                    <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                      <pre>{endpoint.example}</pre>
>>>>>>> e424d87cc10bafdae18928500b657e2f4d2faa16
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
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
=======
        </section>
        {/* SDKs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
>>>>>>> e424d87cc10bafdae18928500b657e2f4d2faa16
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
<<<<<<< HEAD

=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{sdk.name}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                      v{sdk.version}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{sdk.description}</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4 inline mr-1" />
                      Download
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded hover:bg-gray-50 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
>>>>>>> e424d87cc10bafdae18928500b657e2f4d2faa16
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