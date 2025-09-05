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
  BookOpen,
  Zap,
  Shield,
  Globe,
  ArrowRight
} from 'lucide-react';
import Layout from '../../components/Layout';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/services',
    description: 'Retrieve all available services',
    parameters: [
      { name: 'limit', type: 'integer', required: false, description: 'Number of services to return (max 100)' },
      { name: 'offset', type: 'integer', required: false, description: 'Number of services to skip' },
      { name: 'category', type: 'string', required: false, description: 'Filter by service category' }
    ],
    responses: [
      { code: 200, description: 'Success', example: '{ "services": [...], "total": 45 }' },
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid parameters" }' }
    ]
  },
  {
    method: 'POST',
    path: '/api/v1/contact',
    description: 'Submit a contact form or inquiry',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Contact person name' },
      { name: 'email', type: 'string', required: true, description: 'Contact email address' },
      { name: 'message', type: 'string', required: true, description: 'Message content' },
      { name: 'company', type: 'string', required: false, description: 'Company name' },
      { name: 'phone', type: 'string', required: false, description: 'Phone number' }
    ],
    responses: [
      { code: 201, description: 'Created', example: '{ "id": "123", "status": "received" }' },
      { code: 400, description: 'Bad Request', example: '{ "error": "Missing required fields" }' }
    ]
  },
  {
    method: 'GET',
    path: '/api/v1/status',
    description: 'Get system status and health information',
    parameters: [],
    responses: [
      { code: 200, description: 'Success', example: '{ "status": "operational", "uptime": "99.9%" }' }
    ]
  },
  {
    method: 'POST',
    path: '/api/v1/quote',
    description: 'Request a project quote',
    parameters: [
      { name: 'project_type', type: 'string', required: true, description: 'Type of project (ai, cloud, web, mobile)' },
      { name: 'description', type: 'string', required: true, description: 'Project description' },
      { name: 'budget_range', type: 'string', required: false, description: 'Budget range' },
      { name: 'timeline', type: 'string', required: false, description: 'Project timeline' }
    ],
    responses: [
      { code: 201, description: 'Created', example: '{ "quote_id": "456", "estimated_cost": "$10,000 - $15,000" }' },
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid project type" }' }
    ]
  }
];

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Fetch Services',
    code: `const response = await fetch('https://ziontechgroup.com/api/v1/services', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
};
});

const data = await response.json();`
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
    description: 'Python SDK with full API support',
    version: '1.1.5',
    install: 'pip install ziontechgroup-sdk',
    documentation: '/docs/sdk/python'
  },
  {
    name: 'PHP SDK',
    description: 'PHP SDK for server-side integration',
    version: '1.0.8',
    install: 'composer require ziontechgroup/sdk',
    documentation: '/docs/sdk/php'
  }
];

export default function APIDocumentationPage() {}
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('all');

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
    const matchesSearch = endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         endpoint.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMethod = selectedMethod === 'all' || endpoint.method.toLowerCase() === selectedMethod.toLowerCase();
    return matchesSearch && matchesMethod;
  });

  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group services. Learn how to integrate with our APIs, view endpoints, and access code examples."
      keywords="API documentation, REST API, integration, developer docs, endpoints, Zion Tech Group API"
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        {/* Header */}
        <section className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  API Documentation;
                </h1>
                <p className="text-gray-300">
                  Complete reference for integrating with Zion Tech Group APIs;
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-400">API Version</p>
                  <p className="text-white font-medium">v1.0</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Base URL</p>
                  <p className="text-white font-medium">api.ziontechgroup.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Quick Start</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">1. Get API Key</h3>
                  <p className="text-gray-300 text-sm">
                    Sign up and generate your API key from the dashboard;
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">2. Make Requests</h3>
                  <p className="text-gray-300 text-sm">
                    Use our RESTful APIs with your preferred programming language;
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">3. Integrate</h3>
                  <p className="text-gray-300 text-sm">
                    Integrate our services into your applications;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Search and Filter */};
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search endpoints..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedMethod}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Methods</option>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>

            {/* API Endpoints */}
            <div className="space-y-6">
              {filteredEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/15 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded text-sm font-medium ${`}
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-white font-mono text-lg">
                        {endpoint.path};
                      </code>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {endpoint.description};
                  </p>

                  {/* Parameters */};
                  {endpoint.parameters.length > 0 && (})
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Parameters</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-white/20">
                              <th className="text-left py-2 text-gray-300">Name</th>
                              <th className="text-left py-2 text-gray-300">Type</th>
                              <th className="text-left py-2 text-gray-300">Required</th>
                              <th className="text-left py-2 text-gray-300">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (})
                              <tr key={paramIndex} className="border-b border-white/10">
                                <td className="py-2 text-white font-mono">{param.name}</td>
                                <td className="py-2 text-gray-300">{param.type}</td>
                                <td className="py-2 text-gray-300">
                                  {param.required ? (})
                                    <span className="text-red-400">Yes</span>
                                  ) : ()
                                    <span className="text-green-400">No</span>
                                  )};
                                </td>
                                <td className="py-2 text-gray-300">{param.description}</td>
                              </tr>
                            ))};
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )};
                  {/* Responses */};
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Responses</h4>
                    <div className="space-y-3">
                      {endpoint.responses.map((response, responseIndex) => (
                        <div key={responseIndex} className="bg-white/5 rounded p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              response.code >= 200 && response.code < 300 ? 'bg-green-100 text-green-800' :
                              response.code >= 400 ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>`
                              {response.code};
                            </span>
                            <span className="text-gray-300 text-sm">{response.description}</span>
                          </div>
                          <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{response.example}</code>
                          </pre>
                        </div>
                      ))};
                    </div>
                  </div>
                </motion.div>
              ))};
            </div>
          </div>
        </section>

        {/* Code Examples */};
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Code Examples;
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Get started quickly with these code examples in popular programming languages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {codeExamples.map((example, index) => (})
                <motion.div;
                  key={index};
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.1 }};
                  viewport={{ once: true }};
                >
                  <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">{example.language}</span>
                    </div>
                    <button;
                      onClick={() => copyToClipboard(example.code, `${example.language}-${index}`)};`
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === `${example.language}-${index}` ? (`)
                        <Check className="w-4 h-4 text-green-400" />
                      ) : ()
                        <Copy className="w-4 h-4" />
                      )};
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {example.title};
                    </h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </motion.div>
              ))};
            </div>
          </div>
        </section>

        {/* SDK Libraries */};
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SDK Libraries;
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Use our official SDKs for easier integration and better developer experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sdkLibraries.map((sdk, index) => (})
                <motion.div;
                  key={index};
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.1 }};
                  viewport={{ once: true }};
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {sdk.name};
                    </h3>
                    <p className="text-gray-600">
                      {sdk.description};
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Version:</span>
                      <span className="font-medium">{sdk.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Install:</span>
                      <code className="text-sm bg-gray-200 px-2 py-1 rounded">
                        {sdk.install};
                      </code>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link;
                      href={sdk.documentation};
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                    >
                      Documentation;
                    </Link>
                    <button;
                      onClick={() => copyToClipboard(sdk.install, `install-${index}`)};`
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))};
            </div>
          </div>
        </section>

        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div;
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start integrating with our services today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get API Key;
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Contact Support;
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};