import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Terminal, 
  Download, 
  BookOpen, 
  Search, 
  Filter,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Server,
  Database,
  Shield,
  Zap,
  Users,
  Globe,
  Lock,
  Settings,
  Play,
  Bookmark,
  Star,
  Activity,
  Clock,
  AlertCircle,
  Info,
  Key
} from 'lucide-react';

export default function Api() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedEndpoints, setExpandedEndpoints] = useState<string[]>(['authentication']);

  const categories = [
    { id: 'all', name: 'All APIs', count: 28 },
    { id: 'ai', name: 'AI Services', count: 12 },
    { id: 'data', name: 'Data & Analytics', count: 8 },
    { id: 'auth', name: 'Authentication', count: 4 },
    { id: 'integrations', name: 'Integrations', count: 4 }
  ];

  const apiEndpoints = [
    {
      id: 'authentication',
      title: 'Authentication',
      description: 'Secure your API requests with authentication',
      icon: Shield,
      endpoints: [
        {
          method: 'POST',
          path: '/v1/auth/login',
          description: 'Authenticate user and get access token',
          parameters: ['email', 'password'],
          responses: ['200', '401', '422']
        },
        {
          method: 'POST',
          path: '/v1/auth/refresh',
          description: 'Refresh expired access token',
          parameters: ['refresh_token'],
          responses: ['200', '401']
        },
        {
          method: 'POST',
          path: '/v1/auth/logout',
          description: 'Invalidate current access token',
          parameters: ['access_token'],
          responses: ['200', '401']
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Access our advanced AI and machine learning capabilities',
      icon: Zap,
      endpoints: [
        {
          method: 'POST',
          path: '/v1/ai/analyze',
          description: 'Analyze data with AI models',
          parameters: ['data', 'model', 'options'],
          responses: ['200', '400', '429']
        },
        {
          method: 'POST',
          path: '/v1/ai/generate',
          description: 'Generate content using AI',
          parameters: ['prompt', 'model', 'parameters'],
          responses: ['200', '400', '429']
        },
        {
          method: 'POST',
          path: '/v1/ai/classify',
          description: 'Classify data using AI models',
          parameters: ['data', 'model', 'categories'],
          responses: ['200', '400', '429']
        },
        {
          method: 'POST',
          path: '/v1/ai/translate',
          description: 'Translate text between languages',
          parameters: ['text', 'source_lang', 'target_lang'],
          responses: ['200', '400', '429']
        }
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      description: 'Process and analyze your data',
      icon: Database,
      endpoints: [
        {
          method: 'POST',
          path: '/v1/data/process',
          description: 'Process raw data for analysis',
          parameters: ['data', 'format', 'options'],
          responses: ['200', '400', '422']
        },
        {
          method: 'GET',
          path: '/v1/data/insights',
          description: 'Get data insights and analytics',
          parameters: ['dataset_id', 'metrics', 'filters'],
          responses: ['200', '400', '404']
        },
        {
          method: 'POST',
          path: '/v1/data/export',
          description: 'Export data in various formats',
          parameters: ['dataset_id', 'format', 'filters'],
          responses: ['200', '400', '404']
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Connect with third-party services and platforms',
      icon: Globe,
      endpoints: [
        {
          method: 'POST',
          path: '/v1/integrations/webhook',
          description: 'Configure webhook endpoints',
          parameters: ['url', 'events', 'secret'],
          responses: ['200', '400', '422']
        },
        {
          method: 'GET',
          path: '/v1/integrations/status',
          description: 'Check integration status',
          parameters: ['integration_id'],
          responses: ['200', '404']
        }
      ]
    }
  ];

  const sdkLibraries = [
    {
      name: 'JavaScript/Node.js',
      version: 'v2.1.0',
      description: 'Official JavaScript SDK for Node.js and browsers',
      icon: 'JS',
      color: 'from-yellow-500 to-orange-500',
      downloadUrl: '#',
      docsUrl: '#'
    },
    {
      name: 'Python',
      version: 'v2.0.0',
      description: 'Python client library with async support',
      icon: 'PY',
      color: 'from-blue-500 to-cyan-500',
      downloadUrl: '#',
      docsUrl: '#'
    },
    {
      name: 'Java',
      version: 'v1.9.0',
      description: 'Java SDK for enterprise applications',
      icon: 'JA',
      color: 'from-red-500 to-pink-500',
      downloadUrl: '#',
      docsUrl: '#'
    },
    {
      name: 'Go',
      version: 'v1.8.0',
      description: 'Go client library with high performance',
      icon: 'GO',
      color: 'from-blue-600 to-indigo-600',
      downloadUrl: '#',
      docsUrl: '#'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Authenticate and make API call',
      code: `const { ZionTechAPI } = require('ziontech-sdk');

const api = new ZionTechAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Authenticate
const auth = await api.auth.login({
  email: 'user@example.com',
  password: 'password'
});

// Make API call
const result = await api.ai.analyze({
  data: 'Your data here',
  model: 'gpt-4',
  options: { max_tokens: 1000 }
});

console.log(result);`
    },
    {
      language: 'Python',
      title: 'AI content generation',
      code: `from ziontech import ZionTechAPI

api = ZionTechAPI(api_key='your-api-key')

# Generate content
response = api.ai.generate(
    prompt="Write a blog post about AI",
    model="gpt-4",
    parameters={
        "max_tokens": 500,
        "temperature": 0.7
    }
)

print(response.content)`
    },
    {
      language: 'cURL',
      title: 'Direct API call with cURL',
      code: `curl -X POST https://api.ziontechgroup.com/v1/ai/analyze \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": "Your data here",
    "model": "gpt-4",
    "options": {
      "max_tokens": 1000
    }
  }'`
    }
  ];

  const toggleEndpoint = (endpointId: string) => {
    setExpandedEndpoints(prev => 
      prev.includes(endpointId) 
        ? prev.filter(id => id !== endpointId)
        : [...prev, endpointId]
    );
  };

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    if (selectedCategory !== 'all' && endpoint.id !== selectedCategory) return false;
    if (searchQuery) {
      const matchesSearch = endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           endpoint.endpoints.some(ep => 
                             ep.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             ep.description.toLowerCase().includes(searchQuery.toLowerCase())
                           );
      return matchesSearch;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              API Reference
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Build powerful applications with Zion Tech Group's comprehensive APIs. 
              Access AI services, data analytics, and more through our RESTful API.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search API endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quick Start
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running with our API in minutes. Follow these simple steps to start building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Get API Key',
                description: 'Sign up and get your API key from the dashboard',
                icon: Key,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '2',
                title: 'Install SDK',
                description: 'Choose your preferred language and install our SDK',
                icon: Download,
                color: 'from-green-500 to-emerald-500'
              },
              {
                step: '3',
                title: 'Make First Call',
                description: 'Start making API calls and building your application',
                icon: Play,
                color: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${item.color} rounded-full mb-6 text-white text-2xl font-bold`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints organized by service category.
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleEndpoint(endpoint.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                        <endpoint.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{endpoint.title}</h3>
                        <p className="text-gray-600">{endpoint.description}</p>
                      </div>
                    </div>
                    {expandedEndpoints.includes(endpoint.id) ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedEndpoints.includes(endpoint.id) && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50">
                    <div className="space-y-4">
                      {endpoint.endpoints.map((ep, epIndex) => (
                        <motion.div
                          key={epIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: epIndex * 0.1 }}
                          className="bg-white rounded-lg p-4 border border-gray-200"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                                ep.method === 'GET' ? 'bg-green-100 text-green-800' :
                                ep.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                                ep.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {ep.method}
                              </span>
                              <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                                {ep.path}
                              </code>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3">{ep.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Parameters</h5>
                              <div className="space-y-1">
                                {ep.parameters.map((param, idx) => (
                                  <div key={idx} className="text-gray-600">
                                    <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">{param}</code>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Responses</h5>
                              <div className="space-y-1">
                                {ep.responses.map((response, idx) => (
                                  <div key={idx} className="text-gray-600">
                                    <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">{response}</code>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Libraries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              SDK Libraries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our official SDKs to integrate with your preferred programming language.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdkLibraries.map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${sdk.color} rounded-xl mb-4 text-white font-bold text-lg`}>
                  {sdk.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{sdk.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{sdk.description}</p>
                <div className="text-xs text-gray-500 mb-4">Version {sdk.version}</div>
                
                <div className="space-y-2">
                  <a
                    href={sdk.downloadUrl}
                    className="block w-full text-center py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    Download
                  </a>
                  <a
                    href={sdk.docsUrl}
                    className="block w-full text-center py-2 border border-purple-600 text-purple-600 text-sm font-medium rounded-lg hover:bg-purple-50 transition-colors duration-300"
                  >
                    Documentation
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Code Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with these working code examples in multiple languages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
                    <span className="text-sm text-gray-500">{example.language}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Start building with our API today. Get your API key and begin integrating 
              Zion Tech Group services into your applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/api-playground"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <Terminal className="w-5 h-5 mr-2" />
                Try API Playground
              </a>
              
              <a
                href="/documentation"
                className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}