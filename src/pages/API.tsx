import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, Cloud, Shield, Brain, Globe, Building,
  ArrowRight, ExternalLink, Download, Play, FileText,
  Search, Filter, CheckCircle, AlertCircle, Info, Clock,
  Users, Zap, Rocket, TrendingUp, Star, Eye, Copy,
  Terminal, Key, Lock, Server, Wifi, Activity, BookOpen,
  MessageCircle, Mail, Github, Bookmark, Share2
} from 'lucide-react';

export default function API() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVersion, setSelectedVersion] = useState('v2');

  const apiCategories = [
    { id: 'all', name: 'All APIs', icon: Code, count: 12 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 4 },
    { id: 'security', name: 'Security & Authentication', icon: Shield, count: 3 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 2 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 3 }
  ];

  const apiVersions = [
    { id: 'v2', name: 'v2.0 (Latest)', status: 'stable' },
    { id: 'v1', name: 'v1.0', status: 'deprecated' },
    { id: 'beta', name: 'Beta', status: 'beta' }
  ];

  const apiEndpoints = [
    {
      id: 1,
      name: 'AI Text Analysis',
      category: 'ai',
      endpoint: '/api/v2/ai/text/analyze',
      method: 'POST',
      description: 'Analyze text content using advanced AI algorithms for sentiment, entities, and key insights',
      version: 'v2',
      status: 'stable',
      rateLimit: '1000 requests/hour',
      auth: 'Bearer Token',
      featured: true
    },
    {
      id: 2,
      name: 'Image Recognition',
      category: 'ai',
      endpoint: '/api/v2/ai/image/recognize',
      method: 'POST',
      description: 'Identify objects, faces, and text in images using computer vision AI',
      version: 'v2',
      status: 'stable',
      rateLimit: '500 requests/hour',
      auth: 'Bearer Token',
      featured: true
    },
    {
      id: 3,
      name: 'User Authentication',
      category: 'security',
      endpoint: '/api/v2/auth/login',
      method: 'POST',
      description: 'Authenticate users and generate access tokens for API access',
      version: 'v2',
      status: 'stable',
      rateLimit: '100 requests/hour',
      auth: 'Basic Auth',
      featured: false
    },
    {
      id: 4,
      name: 'Data Analytics',
      category: 'data',
      endpoint: '/api/v2/data/analytics',
      method: 'GET',
      description: 'Retrieve analytics data and insights from various data sources',
      version: 'v2',
      status: 'stable',
      rateLimit: '2000 requests/hour',
      auth: 'Bearer Token',
      featured: false
    },
    {
      id: 5,
      name: 'Cloud Resource Management',
      category: 'cloud',
      endpoint: '/api/v2/cloud/resources',
      method: 'GET',
      description: 'Manage and monitor cloud infrastructure resources',
      version: 'v2',
      status: 'stable',
      rateLimit: '500 requests/hour',
      auth: 'Bearer Token',
      featured: false
    },
    {
      id: 6,
      name: 'Security Threat Detection',
      category: 'security',
      endpoint: '/api/v2/security/threats',
      method: 'POST',
      description: 'Detect and analyze security threats in real-time',
      version: 'v2',
      status: 'stable',
      rateLimit: '300 requests/hour',
      auth: 'Bearer Token',
      featured: false
    }
  ];

  const codeExamples = [
    {
      id: 1,
      title: 'Python SDK Example',
      language: 'python',
      code: `import ziontech

# Initialize client
client = ziontech.Client(api_key='your_api_key')

# Analyze text
response = client.ai.text.analyze(
    text="Zion Tech Group is revolutionizing AI technology",
    analysis_type="sentiment"
)

print(response.sentiment)  # positive
print(response.confidence)  # 0.95`,
      featured: true
    },
    {
      id: 2,
      title: 'JavaScript SDK Example',
      language: 'javascript',
      code: `import { ZionTech } from 'ziontech-sdk';

// Initialize client
const client = new ZionTech('your_api_key');

// Analyze image
const response = await client.ai.image.recognize({
    image: imageFile,
    features: ['objects', 'faces']
});

console.log(response.objects);
console.log(response.faces);`,
      featured: true
    },
    {
      id: 3,
      title: 'cURL Example',
      language: 'bash',
      code: `curl -X POST "https://api.ziontechgroup.com/api/v2/ai/text/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello world",
    "analysis_type": "sentiment"
  }'`,
      featured: false
    }
  ];

  const sdkDownloads = [
    {
      id: 1,
      name: 'Python SDK',
      version: '2.1.0',
      downloads: 15420,
      size: '2.4 MB',
      description: 'Official Python SDK for Zion Tech Group APIs',
      features: ['Async support', 'Type hints', 'Comprehensive docs']
    },
    {
      id: 2,
      name: 'JavaScript SDK',
      version: '2.0.5',
      downloads: 12850,
      size: '1.8 MB',
      description: 'Official JavaScript/Node.js SDK for Zion Tech Group APIs',
      features: ['ES6 modules', 'TypeScript support', 'Browser compatible']
    },
    {
      id: 3,
      name: 'Go SDK',
      version: '1.9.2',
      downloads: 9870,
      size: '3.2 MB',
      description: 'Official Go SDK for Zion Tech Group APIs',
      features: ['Context support', 'Error handling', 'High performance']
    },
    {
      id: 4,
      name: 'Java SDK',
      version: '2.0.1',
      downloads: 7560,
      size: '4.1 MB',
      description: 'Official Java SDK for Zion Tech Group APIs',
      features: ['Spring integration', 'Async support', 'Comprehensive testing']
    }
  ];

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    const matchesSearch = endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         endpoint.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || endpoint.category === selectedCategory;
    const matchesVersion = selectedVersion === 'all' || endpoint.version === selectedVersion;
    
    return matchesSearch && matchesCategory && matchesVersion;
  });

  const featuredEndpoints = filteredEndpoints.filter(endpoint => endpoint.featured);
  const regularEndpoints = filteredEndpoints.filter(endpoint => !endpoint.featured);

  const getMethodColor = (method: string) => {
    const colors = {
      GET: 'bg-green-100 text-green-800',
      POST: 'bg-blue-100 text-blue-800',
      PUT: 'bg-yellow-100 text-yellow-800',
      DELETE: 'bg-red-100 text-red-800',
      PATCH: 'bg-purple-100 text-purple-800'
    };
    return colors[method as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      stable: 'bg-green-100 text-green-800',
      beta: 'bg-yellow-100 text-yellow-800',
      deprecated: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build powerful applications with Zion Tech Group's comprehensive APIs for AI, security, cloud, and data analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#endpoints"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Code className="w-5 h-5 mr-2" />
                View Endpoints
              </a>
              <a
                href="#sdks"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download SDKs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-gray-400">API Endpoints</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-gray-400">SDK Languages</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search APIs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {apiCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Version Filter */}
              <div>
                <select
                  value={selectedVersion}
                  onChange={(e) => setSelectedVersion(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {apiVersions.map((version) => (
                    <option key={version.id} value={version.id} className="bg-slate-800 text-white">
                      {version.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Endpoints */}
      {featuredEndpoints.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured APIs</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredEndpoints.map((endpoint) => (
                  <motion.div
                    key={endpoint.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(endpoint.status)}`}>
                        {endpoint.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{endpoint.name}</h3>
                    <p className="text-gray-300 mb-4">{endpoint.description}</p>
                    <div className="bg-slate-800/50 rounded-lg p-3 mb-4 font-mono text-sm text-gray-300">
                      {endpoint.endpoint}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Rate: {endpoint.rateLimit}</span>
                      <span>Auth: {endpoint.auth}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All API Endpoints */}
      <section id="endpoints" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All API Endpoints</h2>
            <div className="space-y-4">
              {regularEndpoints.map((endpoint) => (
                <motion.div
                  key={endpoint.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(endpoint.status)}`}>
                        {endpoint.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      v{endpoint.version}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{endpoint.name}</h3>
                  <p className="text-gray-300 mb-4">{endpoint.description}</p>
                  <div className="bg-slate-800/50 rounded-lg p-3 mb-4 font-mono text-sm text-gray-300">
                    {endpoint.endpoint}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Rate: {endpoint.rateLimit}</span>
                    <span>Auth: {endpoint.auth}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Code Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {codeExamples.filter(example => example.featured).map((example) => (
                <motion.div
                  key={example.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                    <button
                      onClick={() => copyToClipboard(example.code)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                  <pre className="bg-slate-800/50 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300">{example.code}</code>
                  </pre>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDK Downloads */}
      <section id="sdks" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Official SDKs</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Download our official SDKs to get started quickly with your preferred programming language
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdkDownloads.map((sdk) => (
                <motion.div
                  key={sdk.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{sdk.name}</h3>
                    <span className="text-sm text-gray-400">v{sdk.version}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm text-center">{sdk.description}</p>
                  <div className="space-y-2 mb-4">
                    {sdk.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{sdk.size}</span>
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {sdk.downloads.toLocaleString()}
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authentication & Getting Started */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Getting Started</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Authentication</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">API Keys</h4>
                    <p className="text-gray-300 mb-3">Get your API key from the dashboard to start making requests.</p>
                    <div className="bg-slate-800/50 rounded p-3 font-mono text-sm text-gray-300">
                      Authorization: Bearer YOUR_API_KEY
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Rate Limits</h4>
                    <p className="text-gray-300">Each endpoint has specific rate limits to ensure fair usage.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Quick Start</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">1. Get API Key</h4>
                    <p className="text-gray-300">Sign up and generate your API key in the dashboard.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">2. Choose SDK</h4>
                    <p className="text-gray-300">Download the SDK for your preferred programming language.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">3. Make Requests</h4>
                    <p className="text-gray-300">Start building with our comprehensive API endpoints.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of developers building amazing applications with Zion Tech Group APIs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/dashboard"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Key className="w-5 h-5 mr-2" />
                Get API Key
              </a>
              <a
                href="/documentation"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Full Docs
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
