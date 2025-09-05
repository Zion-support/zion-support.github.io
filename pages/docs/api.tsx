<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import Layout from '../../components/Layout';

const apiEndpoints = [
  {
    title: 'Authentication',
    method: 'POST',
    endpoint: '/api/auth/login',
    description: 'Authenticate users and get access tokens'
  },
  {
    title: 'User Management',
    method: 'GET',
    endpoint: '/api/users',
    description: 'Retrieve user information and manage profiles'
  },
  {
    title: 'Services',
    method: 'GET',
    endpoint: '/api/services',
    description: 'Get available services and their details'
  },
  {
    title: 'Analytics',
    method: 'POST',
    endpoint: '/api/analytics',
    description: 'Submit analytics data and get insights'
  }
];

const apiFeatures = [
  {
    title: 'RESTful API',
    icon: Code,
    description: 'Clean, intuitive REST API design'
  },
  {
    title: 'Comprehensive Documentation',
    icon: Book,
    description: 'Detailed API documentation with examples'
  },
  {
    title: 'High Performance',
    icon: Zap,
    description: 'Fast response times and optimized endpoints'
  },
  {
    title: 'Secure',
    icon: Shield,
    description: 'Enterprise-grade security and authentication'
  }
];

export default function APIDocumentation() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for developers"
      keywords="API documentation, developer resources, REST API, integration"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Complete API documentation for developers
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Integrate with our services using our comprehensive REST API
              </p>
              <Link href="/contact">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get API Access
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
=======
import React from 'react'
import Layout from '../../components/Layout'

export default function ApiDocs() {
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
})
const data = await response.json()
`
  },
  {
    language: 'Python',
    title: 'Submit Contact Form',
    code: `import requests,
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
print(response.json())
`
  }
]

export default function APIDocumentationPage() {
  return (
<<<<<<< HEAD
    <Layout,
    title="API Documentation - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group services. Learn how to integrate with our APIs, view endpoints, and access code examples."
      keywords="API documentation, REST API, integration, developer docs, endpoints, Zion Tech Group API"
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        {/* Header */}
        <section className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-4 py-8">
            <motion.div,
    initial={{ opacity: 0, y: 20 }}
>>>>>>> main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-600">
                Powerful, secure, and easy to use
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
<<<<<<< HEAD
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
=======
            <motion.div,
    initial={{ opacity: 0, y: 20 }}
>>>>>>> main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-600">
                Explore our available API endpoints
              </p>
            </motion.div>
<<<<<<< HEAD

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {apiEndpoints.map((endpoint, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{endpoint.title}</h3>
=======
            {/* Search and Filter */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input,
    type="text"
                  placeholder="Search endpoints..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select,
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
                <motion.div,
    key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/15 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
>>>>>>> main
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                    </div>
<<<<<<< HEAD
                    <code className="text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded mb-2 block">
                      {endpoint.endpoint}
                    </code>
                    <p className="text-gray-600">{endpoint.description}</p>
                  </motion.div>
                ))}
              </div>
=======
                  </div>
                  <p className="text-gray-300 mb-6">
                    {endpoint.description}
                  </p>
                  {/* Parameters */}
                  {endpoint.parameters.length > 0 && (
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
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex} className="border-b border-white/10">
                                <td className="py-2 text-white font-mono">{param.name}</td>
                                <td className="py-2 text-gray-300">{param.type}</td>
                                <td className="py-2 text-gray-300">
                                  {param.required ? (
                                    <span className="text-red-400">Yes</span>
                                  ) : (
                                    <span className="text-green-400">No</span>
                                  )}
                                </td>
                                <td className="py-2 text-gray-300">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {/* Responses */}
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
                            }`}>
                              {response.code}
                            </span>
                            <span className="text-gray-300 text-sm">{response.description}</span>
                          </div>
                          <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{response.example}</code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Code Examples */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div,
    className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Code Examples
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Get started quickly with these code examples in popular programming languages.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div,
    key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">{example.language}</span>
                    </div>
                    <button,
    onClick={() => copyToClipboard(example.code, `${example.language}-${index}`)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === `${example.language}-${index}` ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {example.title}
                    </h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
                      <code>{example.code}</code>
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
            <motion.div,
    className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SDK Libraries
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Use our official SDKs for easier integration and better developer experience.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sdkLibraries.map((sdk, index) => (
                <motion.div,
    key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {sdk.name}
                    </h3>
                    <p className="text-gray-600">
                      {sdk.description}
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
                        {sdk.install}
                      </code>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link,
    href={sdk.documentation}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                    >
                      Documentation
                    </Link>
                    <button,
    onClick={() => copyToClipboard(sdk.install, `install-${index}`)}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
>>>>>>> main
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div,
    initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
>>>>>>> main
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us to get API access and start building
              </p>
              <Link href="/contact">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
=======
    <Layout title="API Docs">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-600">Reference content will return after fixes. Basic page added to restore build.</p>
>>>>>>> main
      </div>
    </Layout>
<<<<<<< HEAD
  );
}
=======
  )
}

>>>>>>> main
