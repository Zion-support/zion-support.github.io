import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
  Copy,
  Check,
  ExternalLink,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Globe,
  Shield,
  Zap,
  Database,
  Server,
  Cpu,
  Network,
  Lock,
  Key,
  Settings,
  Play,
  Download,
  BookOpen,
  FileText,
  Terminal,
  GitBranch,
  AlertCircle,
  CheckCircle,
  Info,
  Lightbulb,
  Target,
  TrendingUp,
  BarChart3,
  Headphones,
  MessageSquare,
  Calendar,
  Clock,
  Star,
  Award,
  Users,
  Building,
  ArrowRight
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/status',
    description: 'Get system status and health information',
    parameters: [],
    response: {
      status: 'success',
      data: {
        status: 'healthy',
        timestamp: '2024-01-15T10:30:00Z',
        version: '1.2.0',
        uptime: '99.9%'
      }
    }
  },
  {
    method: 'POST',
    path: '/api/v1/contact',
    description: 'Submit contact form data',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Full name' },
      { name: 'email', type: 'string', required: true, description: 'Email address' },
      { name: 'message', type: 'string', required: true, description: 'Message content' },
      { name: 'company', type: 'string', required: false, description: 'Company name' }
    ],
    response: {
      status: 'success',
      message: 'Contact form submitted successfully',
      data: {
        id: 'contact_123',
        timestamp: '2024-01-15T10:30:00Z'
      }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/services',
    description: 'Get list of available services',
    parameters: [
      { name: 'category', type: 'string', required: false, description: 'Filter by category' },
      { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
    ],
    response: {
      status: 'success',
      data: {
        services: [
          {
            id: 'ai_001',
            name: 'AI Solutions',
            category: 'AI',
            description: 'Cutting-edge AI services'
          }
        ],
        total: 1,
        page: 1,
        limit: 10
      }
    }
  }
];

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Get System Status',
    code: `const response = await fetch('https://ziontechgroup.com/api/v1/status', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
const data = await response.json()
console.log(data)`
  },
  {
    language: 'Python',
    title: 'Submit Contact Form',
    code: `import requests

url = 'https://ziontechgroup.com/api/v1/contact'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}
data = {
    'name': 'John Doe',
    'email': 'john@example.com',
    'message': 'Interested in AI services',
    'company': 'Tech Corp'
}
response = requests.post(url, json=data, headers=headers)
print(response.json())`
  },
  {
    language: 'cURL',
    title: 'Get System Status',
    code: `curl -X GET "https://ziontechgroup.com/api/v1/status" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
  }
];

const sdkLibraries = [
  {
    name: 'JavaScript SDK',
    description: 'Official JavaScript SDK for easy integration',
    version: '1.2.0',
    install: 'npm install @ziontechgroup/sdk',
    documentation: '/docs/sdk/javascript'
  },
  {
    name: 'Python SDK',
    description: 'Python SDK for server-side integration',
    version: '1.1.5',
    install: 'pip install ziontechgroup-sdk',
    documentation: '/docs/sdk/python'
  },
  {
    name: 'PHP SDK',
    description: 'PHP SDK for web applications',
    version: '1.0.8',
    install: 'composer require ziontechgroup/sdk',
    documentation: '/docs/sdk/php'
  }
];

export default function APIDocumentationPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('All');

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    const matchesSearch = searchQuery === '' || 
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMethod = selectedMethod === 'All' || endpoint.method === selectedMethod;
    
    return matchesSearch && matchesMethod;
  });

  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Learn how to integrate our AI, IT, and Micro SaaS solutions into your applications."
      keywords="API documentation, REST API, integration, SDK, developer resources, AI API, IT services API, Micro SaaS API"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <Code className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  API Documentation
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate our powerful AI, IT, and Micro SaaS services into your applications 
                with our comprehensive REST API and SDK libraries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick Start
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Get started with our API in minutes. Choose your preferred language and follow the examples.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={example.language}
                  className="bg-gray-900 rounded-lg p-6 text-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{example.title}</h3>
                    <button
                      onClick={() => copyToClipboard(example.code, example.language)}
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      {copiedCode === example.language ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Explore our comprehensive API endpoints for all services and features.
              </p>
            </motion.div>

            {/* Filters */}
            <div className="max-w-6xl mx-auto mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search endpoints..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedMethod}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Methods</option>
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {filteredEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.path}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-4 ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">
                        {endpoint.path}
                      </code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(endpoint.path, endpoint.path)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {copiedCode === endpoint.path ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {endpoint.description}
                  </p>

                  {endpoint.parameters.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <code className="bg-gray-100 px-2 py-1 rounded mr-2">
                              {param.name}
                            </code>
                            <span className="text-gray-600 mr-2">({param.type})</span>
                            <span className="text-gray-500">{param.description}</span>
                            {param.required && (
                              <span className="text-red-600 ml-2">*</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDK Libraries */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                SDK Libraries
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Use our official SDKs to integrate our services quickly and easily into your applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sdkLibraries.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {sdk.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {sdk.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Version: </span>
                    <span className="text-sm font-semibold text-blue-600">{sdk.version}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Install: </span>
                    <code className="text-sm bg-gray-200 px-2 py-1 rounded">
                      {sdk.install}
                    </code>
                  </div>
                  <a
                    href={sdk.documentation}
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                  >
                    Documentation
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Integration?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our developer support team is here to help you integrate our services successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Support
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}