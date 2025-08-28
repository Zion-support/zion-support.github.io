import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Code, Book, Search, Zap, Layers, GitBranch, ArrowRight, CheckCircle, Lock, Database, Bot, Cloud, DollarSign, AlertCircle } from 'lucide-react';

const APIDocumentation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const apiCategories = [
    { id: 'all', name: 'All APIs', icon: <Layers className="w-6 h-6" /> },
    { id: 'auth', name: 'Authentication', icon: <Lock className="w-6 h-6" /> },
    { id: 'data', name: 'Data Services', icon: <Database className="w-6 h-6" /> },
    { id: 'ai', name: 'AI/ML', icon: <Bot className="w-6 h-6" /> },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-6 h-6" /> },
    { id: 'payments', name: 'Payments', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const apiEndpoints = [
    {
      id: 'auth-login',
      category: 'auth',
      name: 'Login User',
      method: 'POST',
      path: '/api/v1/auth/login',
      description: 'Authenticates a user and returns an access token.',
      requestBody: '{ "email": "string", "password": "string" }',
      responseBody: '{ "token": "string", "user": { "id": "string", "email": "string" } }',
      status: 'Stable'
    },
    {
      id: 'auth-register',
      category: 'auth',
      name: 'Register User',
      method: 'POST',
      path: '/api/v1/auth/register',
      description: 'Creates a new user account and returns user details.',
      requestBody: '{ "email": "string", "password": "string", "name": "string" }',
      responseBody: '{ "user": { "id": "string", "email": "string", "name": "string" } }',
      status: 'Stable'
    },
    {
      id: 'ai-generate',
      category: 'ai',
      name: 'Generate AI Content',
      method: 'POST',
      path: '/api/v1/ai/generate',
      description: 'Generates AI content based on provided prompts and parameters.',
      requestBody: '{ "prompt": "string", "model": "string", "max_tokens": "number" }',
      responseBody: '{ "content": "string", "usage": { "tokens": "number" } }',
      status: 'Stable'
    },
    {
      id: 'data-query',
      category: 'data',
      name: 'Query Data',
      method: 'POST',
      path: '/api/v1/data/query',
      description: 'Executes data queries and returns results.',
      requestBody: '{ "query": "string", "parameters": "object" }',
      responseBody: '{ "results": "array", "metadata": "object" }',
      status: 'Beta'
    },
    {
      id: 'cloud-deploy',
      category: 'cloud',
      name: 'Deploy Application',
      method: 'POST',
      path: '/api/v1/cloud/deploy',
      description: 'Deploys an application to the cloud infrastructure.',
      requestBody: '{ "app_name": "string", "config": "object" }',
      responseBody: '{ "deployment_id": "string", "status": "string" }',
      status: 'Stable'
    },
    {
      id: 'payments-charge',
      category: 'payments',
      name: 'Process Payment',
      method: 'POST',
      path: '/api/v1/payments/charge',
      description: 'Processes a payment transaction.',
      requestBody: '{ "amount": "number", "currency": "string", "token": "string" }',
      responseBody: '{ "transaction_id": "string", "status": "string" }',
      status: 'Stable'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      code: `fetch('/api/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'user@example.com', password: 'password123' })
    })
    .then(response => response.json())
    .then(data => console.log(data));`,
    },
    {
      language: 'Python',
      code: `import requests

response = requests.post(
    'https://api.ziontechgroup.com/api/v1/ai/generate',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'prompt': 'Generate a business proposal',
        'model': 'gpt-4',
        'max_tokens': 1000
    }
)

print(response.json())`,
    },
    {
      language: 'cURL',
      code: `curl -X POST https://api.ziontechgroup.com/api/v1/data/query \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "SELECT * FROM users", "parameters": {}}'`,
    }
  ];

  const sdkLibraries = [
    { name: 'JavaScript SDK', version: '1.2.0', link: '#', icon: <Code className="w-6 h-6" /> },
    { name: 'Python SDK', version: '0.9.5', link: '#', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'Java SDK', version: '1.0.3', link: '#', icon: <Code className="w-6 h-6" /> },
    { name: 'Go SDK', version: '0.8.1', link: '#', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'Ruby SDK', version: '0.7.2', link: '#', icon: <Code className="w-6 h-6" /> },
    { name: 'PHP SDK', version: '0.6.8', link: '#', icon: <GitBranch className="w-6 h-6" /> },
  ];

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    const matchesCategory = activeCategory === 'all' || endpoint.category === activeCategory;
    const matchesSearch = endpoint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          endpoint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          endpoint.path.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group services. Explore endpoints, request/response formats, and code examples."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              API Documentation
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer API Reference
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Access our powerful APIs to integrate Zion Tech Group's cutting-edge services
              directly into your applications and workflows.
            </p>

            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search API endpoints..."
                className="w-full px-6 py-4 pl-14 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running quickly with our step-by-step guides and tutorials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Authentication Flow', description: 'Learn how to authenticate your API requests.', icon: <Lock className="w-8 h-8" /> },
              { title: 'Making Your First Call', description: 'A simple guide to your first API interaction.', icon: <Zap className="w-8 h-8" /> },
              { title: 'Handling Errors', description: 'Understand common error codes and how to resolve them.', icon: <AlertCircle className="w-8 h-8" /> },
            ].map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {guide.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{guide.title}</h3>
                <p className="text-gray-400 mb-6">{guide.description}</p>

                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                  Read Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Categories & Endpoints */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive list of API endpoints by category.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {apiCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredEndpoints.map((endpoint) => (
              <motion.div
                key={endpoint.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.status === 'Stable' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {endpoint.status}
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-2 bg-blue-600 rounded-lg text-white font-mono text-sm">{endpoint.method}</span>
                  <span className="font-mono text-cyan-400 text-lg">{endpoint.path}</span>
                </div>

                <p className="text-gray-400 mb-6">{endpoint.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Request Body:</h4>
                    <pre className="bg-slate-700/70 p-4 rounded-lg text-gray-300 text-sm overflow-x-auto">
                      <code>{endpoint.requestBody}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Response Body:</h4>
                    <pre className="bg-slate-700/70 p-4 rounded-lg text-gray-300 text-sm overflow-x-auto">
                      <code>{endpoint.responseBody}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
            {filteredEndpoints.length === 0 && (
              <div className="text-center text-gray-400 text-lg py-10">
                No endpoints found for the selected criteria.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Code Examples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jumpstart your development with ready-to-use code snippets in various languages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{example.language}</h3>
                <pre className="bg-slate-700/70 p-4 rounded-lg text-gray-300 text-sm overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Libraries */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              SDK Libraries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simplify your integration with our official Software Development Kits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdkLibraries.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {sdk.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{sdk.name}</h3>
                <p className="text-gray-400 mb-6">Version: {sdk.version}</p>

                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                  Download SDK
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our developer support team is ready to help you with any API integration challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-600 hover:bg-slate-700 transition-all duration-300">
                Join Developer Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APIDocumentation;