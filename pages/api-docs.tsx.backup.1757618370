<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, BookOpen, Play, Copy, Check,
  Brain, Atom, Shield, Rocket, Globe,
  Search, Download, ExternalLink, ChevronRight,
  Zap, Settings, Database, Server, Wifi,
  Users, Lock, BarChart3, Lightbulb, Terminal
} from 'lucide-react';

export default function ApiDocs() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/ai/consciousness',
      description: 'Create and manage AI consciousness instances',
      category: 'AI Services',
      auth: 'Bearer Token',
      rateLimit: '1000/hour',
      parameters: [
        { name: 'model', type: 'string', required: true, description: 'AI model to use' },
        { name: 'consciousness_level', type: 'integer', required: false, description: 'Level of consciousness (1-10)' },
        { name: 'personality_traits', type: 'object', required: false, description: 'Personality configuration' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "id": "ai_123", "status": "active" }' },
        { code: 400, description: 'Bad Request', example: '{ "error": "Invalid model" }' },
        { code: 401, description: 'Unauthorized', example: '{ "error": "Invalid token" }' }
      ]
    },
    {
      method: 'GET',
      path: '/api/v1/quantum/status',
      description: 'Get quantum computing system status',
      category: 'Quantum Services',
      auth: 'Bearer Token',
      rateLimit: '10000/hour',
      parameters: [
        { name: 'system_id', type: 'string', required: false, description: 'Specific system to check' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "status": "operational", "qubits": 1000 }' },
        { code: 404, description: 'Not Found', example: '{ "error": "System not found" }' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/business/automate',
      description: 'Automate business processes with AI',
      category: 'Business Operations',
      auth: 'Bearer Token',
      rateLimit: '500/hour',
      parameters: [
        { name: 'process_type', type: 'string', required: true, description: 'Type of process to automate' },
        { name: 'workflow', type: 'object', required: true, description: 'Workflow configuration' },
        { name: 'triggers', type: 'array', required: false, description: 'Automation triggers' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "automation_id": "auto_456", "status": "running" }' },
        { code: 422, description: 'Validation Error', example: '{ "error": "Invalid workflow" }' }
      ]
    },
    {
      method: 'GET',
      path: '/api/v1/it/assets',
      description: 'Retrieve IT asset information',
      category: 'IT Services',
      auth: 'Bearer Token',
      rateLimit: '2000/hour',
      parameters: [
        { name: 'asset_type', type: 'string', required: false, description: 'Filter by asset type' },
        { name: 'status', type: 'string', required: false, description: 'Filter by status' },
        { name: 'limit', type: 'integer', required: false, description: 'Number of results (max 100)' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "assets": [...], "total": 150 }' },
        { code: 400, description: 'Bad Request', example: '{ "error": "Invalid parameters" }' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/quantum/neural-network',
      description: 'Create quantum neural network',
      category: 'Quantum Services',
      auth: 'Bearer Token',
      rateLimit: '100/hour',
      parameters: [
        { name: 'architecture', type: 'string', required: true, description: 'Network architecture' },
        { name: 'qubits', type: 'integer', required: true, description: 'Number of qubits' },
        { name: 'training_data', type: 'object', required: false, description: 'Training configuration' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "network_id": "qnn_789", "qubits": 64 }' },
        { code: 413, description: 'Payload Too Large', example: '{ "error": "Data exceeds limit" }' }
      ]
    }
  ];

  const categories = [
    { name: 'All APIs', count: endpoints.length, active: true },
    { name: 'AI Services', count: 1, active: false },
    { name: 'Quantum Services', count: 2, active: false },
    { name: 'Business Operations', count: 1, active: false },
    { name: 'IT Services', count: 1, active: false }
  ];

  const codeExamples = {
    authentication: `// JavaScript/Node.js
const response = await fetch('https://api.ziontechgroup.com/api/v1/ai/consciousness', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'consciousness-v2',
    consciousness_level: 8,
    personality_traits: {
      empathy: 0.9,
      creativity: 0.8,
      logic: 0.7
    }
  })
});

const data = await response.json();
console.log(data);`,

    python: `# Python
import requests

url = "https://api.ziontechgroup.com/api/v1/ai/consciousness"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "model": "consciousness-v2",
    "consciousness_level": 8,
    "personality_traits": {
        "empathy": 0.9,
        "creativity": 0.8,
        "logic": 0.7
    }
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,

    curl: `# cURL
curl -X POST https://api.ziontechgroup.com/api/v1/ai/consciousness \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "consciousness-v2",
    "consciousness_level": 8,
    "personality_traits": {
      "empathy": 0.9,
      "creativity": 0.8,
      "logic": 0.7
    }
  }'`
  };

  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API reference for Zion Tech Group's AI, quantum computing, and technology platforms. Authentication, endpoints, and code examples." />
        <meta name="keywords" content="API documentation, API reference, REST API, AI API, quantum computing API, authentication" />
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2" />
                API Reference
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
                API Documentation
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Integrate with our revolutionary AI, quantum computing, and technology platforms. 
                Complete API reference with authentication, endpoints, and code examples.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search API endpoints..."
                    className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 text-lg"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                    Search
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">1. Get Your API Key</h3>
                  <p className="text-gray-300 mb-4">
                    Sign up for an account and generate your API key from the dashboard.
                  </p>
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                    Get API Key
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">2. Make Your First Request</h3>
                  <p className="text-gray-300 mb-4">
                    Use the code examples below to integrate with our APIs.
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                    View Examples
                    <Play className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Authentication</h2>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Bearer Token Authentication</h3>
                  <p className="text-gray-300">
                    All API requests require authentication using a Bearer token in the Authorization header.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Header Format</h4>
                    <div className="flex items-center justify-between">
                      <code className="text-green-400">Authorization: Bearer YOUR_API_KEY</code>
                      <button
                        onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'header')}
                        className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded text-sm hover:bg-gray-600/50 transition-colors duration-200"
                      >
                        {copiedEndpoint === 'header' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedEndpoint === 'header' ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Rate Limits</h4>
                    <p className="text-gray-300 text-sm">
                      API requests are limited based on your plan. Check the response headers for current usage.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
              
              <div className="space-y-8">
                {endpoints.map((endpoint, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          endpoint.method === 'GET' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                          endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                          'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-white">{endpoint.path}</code>
                      </div>
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
                        {endpoint.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{endpoint.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-400">Authentication:</span>
                        <span className="text-white ml-2">{endpoint.auth}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Rate Limit:</span>
                        <span className="text-white ml-2">{endpoint.rateLimit}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Parameters:</span>
                        <span className="text-white ml-2">{endpoint.parameters.length}</span>
                      </div>
                    </div>
                    
                    {/* Parameters */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <span className="text-white font-mono text-sm">{param.name}</span>
                              <span className="text-gray-400 text-xs">{param.type}</span>
                              {param.required && <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Required</span>}
                            </div>
                            <span className="text-gray-300 text-sm">{param.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Responses */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Responses</h4>
                      <div className="space-y-2">
                        {endpoint.responses.map((response, responseIndex) => (
                          <div key={responseIndex} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <span className={`px-2 py-1 rounded text-xs font-bold ${
                                response.code >= 200 && response.code < 300 ? 'bg-green-500/20 text-green-300' :
                                response.code >= 400 && response.code < 500 ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-red-500/20 text-red-300'
                              }`}>
                                {response.code}
                              </span>
                              <span className="text-white text-sm">{response.description}</span>
                            </div>
                            <code className="text-gray-300 text-xs font-mono">{response.example}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Code Examples</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">JavaScript/Node.js</h3>
                    <button
                      onClick={() => copyToClipboard(codeExamples.authentication, 'js')}
                      className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded text-sm hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      {copiedEndpoint === 'js' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedEndpoint === 'js' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{codeExamples.authentication}</code>
                  </pre>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">Python</h3>
                    <button
                      onClick={() => copyToClipboard(codeExamples.python, 'python')}
                      className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded text-sm hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      {copiedEndpoint === 'python' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedEndpoint === 'python' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{codeExamples.python}</code>
                  </pre>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">cURL</h3>
                    <button
                      onClick={() => copyToClipboard(codeExamples.curl, 'curl')}
                      className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded text-sm hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      {copiedEndpoint === 'curl' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedEndpoint === 'curl' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{codeExamples.curl}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">SDKs & Libraries</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'JavaScript SDK', icon: <Code className="w-8 h-8" />, color: 'from-yellow-500 to-orange-600' },
                  { name: 'Python SDK', icon: <Code className="w-8 h-8" />, color: 'from-blue-500 to-cyan-600' },
                  { name: 'Java SDK', icon: <Code className="w-8 h-8" />, color: 'from-red-500 to-pink-600' },
                  { name: 'Go SDK', icon: <Code className="w-8 h-8" />, color: 'from-green-500 to-emerald-600' }
                ].map((sdk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${sdk.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200`}>
                      {sdk.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{sdk.name}</h3>
                    <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                      Download
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Integrate?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building with our revolutionary AI and quantum computing APIs. 
                Get support, download SDKs, and join our developer community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get API Key
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/support" className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                  Developer Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
=======
import React from 'react';
import Head from 'next/head';

export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
      </div>
    </>
  );
}