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

response = requests.post('/api/v1/ai/generate', 
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
      code: `curl -X POST 'https://api.ziontechgroup.com/api/v1/data/query' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{"query": "SELECT * FROM users", "parameters": {}}'`,
    }
  ];

  const sdks = [
    { name: 'JavaScript SDK', version: '1.2.0', link: '#', icon: <Code className="w-6 h-6" /> },
    { name: 'Python SDK', version: '0.9.5', link: '#', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'Java SDK', version: '1.0.3', link: '#', icon: <Code className="w-6 h-6" /> },
    { name: 'Go SDK', version: '0.8.1', link: '#', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'Ruby SDK', version: '0.7.2', link: '#', icon: <Code className="w-6 h-6" /> },
    { name: 'PHP SDK', version: '0.6.8', link: '#', icon: <GitBranch className="w-6 h-6" /> }
  ];

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    const matchesCategory = activeCategory === 'all' || endpoint.category === activeCategory;
    const matchesSearch = endpoint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          endpoint.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation, endpoints, and integration guides for Zion Tech Group services."
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
              API Reference
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Integrate with Zion Tech Group's powerful APIs. Build amazing applications with our comprehensive documentation.
            </p>

            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search APIs..."
                className="w-full px-6 py-4 pl-14 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Categories */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {apiCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg border transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 border-cyan-400 text-white'
                    : 'bg-slate-800/50 border-slate-600 text-gray-300 hover:border-cyan-500/50'
                }`}
              >
                {category.icon}
                <span className="ml-2 font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid gap-6">
            {filteredEndpoints.map((endpoint) => (
              <motion.div
                key={endpoint.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="text-cyan-400 font-mono text-sm">{endpoint.path}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{endpoint.name}</h3>
                    <p className="text-gray-300">{endpoint.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    endpoint.status === 'Stable' ? 'bg-green-500/20 text-green-400' :
                    endpoint.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {endpoint.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Request Body</h4>
                    <pre className="bg-slate-900 p-3 rounded-lg text-sm text-gray-300 overflow-x-auto">
                      <code>{endpoint.requestBody}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Response Body</h4>
                    <pre className="bg-slate-900 p-3 rounded-lg text-sm text-gray-300 overflow-x-auto">
                      <code>{endpoint.responseBody}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Code Examples</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">{example.language}</h3>
                </div>
                <pre className="bg-slate-900 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-white text-center mb-12">SDKs & Libraries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  {sdk.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{sdk.name}</h3>
                    <p className="text-sm text-gray-400">v{sdk.version}</p>
                  </div>
                </div>
                <a
                  href={sdk.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  View Documentation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building with our APIs today. Get your API key and begin integrating powerful AI and technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Get API Key
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/docs"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                View Full Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APIDocumentation;
