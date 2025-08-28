import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Code, FileText, Search, Copy, Check, ExternalLink, ChevronRight, Brain, Rocket, Shield, Cloud, Database, Zap, Users, Star, Clock, Tag, Globe, Key, Lock, Server, Terminal } from 'lucide-react';

const APIDocumentation: React.FC = () => {
  const apiCategories = [
    {
      id: 'authentication',
      name: 'Authentication',
      description: 'API keys, OAuth, and security protocols',
      icon: Key,
      color: 'from-red-500 to-pink-500',
      endpoints: [
        { method: 'POST', path: '/auth/login', description: 'User authentication', status: 'stable' },
        { method: 'POST', path: '/auth/refresh', description: 'Refresh access token', status: 'stable' },
        { method: 'POST', path: '/auth/logout', description: 'User logout', status: 'stable' }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Machine learning and AI-powered APIs',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      endpoints: [
        { method: 'POST', path: '/ai/content/generate', description: 'Generate AI content', status: 'stable' },
        { method: 'POST', path: '/ai/analyze/sentiment', description: 'Sentiment analysis', status: 'stable' },
        { method: 'POST', path: '/ai/translate', description: 'Language translation', status: 'beta' }
      ]
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      description: 'Infrastructure and deployment APIs',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      endpoints: [
        { method: 'POST', path: '/cloud/deploy', description: 'Deploy application', status: 'stable' },
        { method: 'GET', path: '/cloud/status', description: 'Service status', status: 'stable' },
        { method: 'PUT', path: '/cloud/scale', description: 'Scale resources', status: 'stable' }
      ]
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Data processing and analytics APIs',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      endpoints: [
        { method: 'POST', path: '/analytics/query', description: 'Run analytics query', status: 'stable' },
        { method: 'GET', path: '/analytics/dashboard', description: 'Get dashboard data', status: 'stable' },
        { method: 'POST', path: '/analytics/export', description: 'Export data', status: 'beta' }
      ]
    },
    {
      id: 'security',
      name: 'Security',
      description: 'Security and compliance APIs',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      endpoints: [
        { method: 'POST', path: '/security/scan', description: 'Security scan', status: 'stable' },
        { method: 'GET', path: '/security/compliance', description: 'Compliance status', status: 'stable' },
        { method: 'POST', path: '/security/incident', description: 'Report incident', status: 'stable' }
      ]
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Quantum algorithms and processing',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      endpoints: [
        { method: 'POST', path: '/quantum/algorithm', description: 'Run quantum algorithm', status: 'alpha' },
        { method: 'GET', path: '/quantum/status', description: 'Quantum system status', status: 'alpha' },
        { method: 'POST', path: '/quantum/simulation', description: 'Quantum simulation', status: 'alpha' }
      ]
    }
  ];

  const codeExamples = [
    {
      title: 'Authentication with API Key',
      description: 'Basic authentication using your API key',
      language: 'javascript',
      code: `const response = await fetch('https://api.ziontechgroup.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    username: 'your_username',
    password: 'your_password'
  })
});

const data = await response.json();
console.log(data);`
    },
    {
      title: 'AI Content Generation',
      description: 'Generate content using our AI models',
      language: 'python',
      code: `import requests

url = "https://api.ziontechgroup.com/ai/content/generate"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "prompt": "Write a blog post about AI in business",
    "max_length": 500,
    "style": "professional"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result['content'])`
    },
    {
      title: 'Cloud Deployment',
      description: 'Deploy your application to the cloud',
      language: 'bash',
      code: `curl -X POST https://api.ziontechgroup.com/cloud/deploy \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "app_name": "my-app",
    "repository": "github.com/username/repo",
    "environment": "production",
    "resources": {
      "cpu": "2",
      "memory": "4GB",
      "storage": "20GB"
    }
  }'`
    }
  ];

  const sdkLibraries = [
    {
      name: 'JavaScript/Node.js',
      version: 'v2.1.0',
      description: 'Official SDK for JavaScript and Node.js applications',
      downloads: '45.2k',
      rating: 4.8,
      icon: 'JS',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Python',
      version: 'v1.9.3',
      description: 'Python SDK with full API coverage and async support',
      downloads: '32.8k',
      rating: 4.9,
      icon: 'PY',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Go',
      version: 'v1.7.1',
      description: 'High-performance Go SDK for server applications',
      downloads: '18.5k',
      rating: 4.7,
      icon: 'GO',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Java',
      version: 'v2.0.2',
      description: 'Enterprise-grade Java SDK with Spring integration',
      downloads: '25.1k',
      rating: 4.8,
      icon: 'JA',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation, SDKs, and integration guides for Zion Tech Group services. Get started with our REST APIs and client libraries."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive API references, SDKs, and integration guides to help you 
              build powerful applications with Zion Tech Group services.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search APIs, endpoints, or examples..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <Code className="w-5 h-5 mr-2" />
                <span>REST APIs</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FileText className="w-5 h-5 mr-2" />
                <span>SDK Libraries</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Terminal className="w-5 h-5 mr-2" />
                <span>Code Examples</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Quick Start
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <Key className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Get Your API Key</h3>
              <p className="text-gray-400 mb-6">
                Sign up for an account and generate your API key from the dashboard.
              </p>
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Get API Key
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Choose Your SDK</h3>
              <p className="text-gray-400 mb-6">
                Select from our official SDKs for JavaScript, Python, Go, Java, and more.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Browse SDKs
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Start Building</h3>
              <p className="text-gray-400 mb-6">
                Follow our examples and documentation to integrate our services.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                View Examples
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            API Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {category.endpoints.slice(0, 2).map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`px-2 py-1 rounded text-xs font-mono ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <span className="text-xs text-gray-500 font-mono">{endpoint.path}</span>
                        </div>
                        <p className="text-xs text-gray-400">{endpoint.description}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        endpoint.status === 'stable' ? 'bg-green-500/20 text-green-400' :
                        endpoint.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.status}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-slate-700/50 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600/50 transition-all duration-300 flex items-center justify-center group">
                  View All Endpoints
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Code Examples
          </motion.h2>
          
          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{example.title}</h3>
                    <p className="text-gray-400">{example.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                      {example.language}
                    </span>
                    <button className="bg-slate-700/50 text-gray-300 p-2 rounded-lg hover:bg-slate-600/50 transition-colors duration-200">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 border border-slate-600/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Libraries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Official SDKs
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sdkLibraries.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${sdk.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{sdk.icon}</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{sdk.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">{sdk.downloads} downloads</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {sdk.name}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {sdk.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                    {sdk.version}
                  </span>
                  <span className="text-sm text-gray-500">Latest</span>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Install
                  </button>
                  <button className="bg-slate-700/50 text-white p-3 rounded-xl hover:bg-slate-600/50 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building with our APIs today. Get your API key, explore our SDKs, 
              and join thousands of developers building amazing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get API Key
              </button>
              <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-600">
                View Full Docs
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APIDocumentation;