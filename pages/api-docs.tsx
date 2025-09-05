import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Code, 
  Book, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Copy, 
  ExternalLink,
  Server,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/health',
    description: 'Health check endpoint',
    icon: Shield,
    parameters: [],
    response: {
      status: 'ok',
      timestamp: '2024-01-01T00:00:00Z'
    }
  },
  {
    method: 'POST',
    path: '/api/v1/ai/analyze',
    description: 'AI text analysis endpoint',
    icon: Code,
    parameters: [
      { name: 'text', type: 'string', required: true, description: 'Text to analyze' },
      { name: 'type', type: 'string', required: false, description: 'Analysis type' }
    ],
    response: {
      sentiment: 'positive',
      confidence: 0.95,
      keywords: ['example', 'keywords']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/services',
    description: 'Get available services',
    icon: Server,
    parameters: [
      { name: 'category', type: 'string', required: false, description: 'Service category filter' }
    ],
    response: {
      services: [],
      total: 0,
      page: 1
    }
  }
];

const features = [
  {
    icon: Shield,
    title: 'Secure',
    description: 'Enterprise-grade security with OAuth 2.0 and API key authentication'
  },
  {
    icon: Zap,
    title: 'Fast',
    description: 'High-performance API with sub-100ms response times'
  },
  {
    icon: Database,
    title: 'Reliable',
    description: '99.9% uptime guarantee with automatic failover'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Comprehensive documentation and SDKs for popular languages'
  }
];

export default function APIDocs() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group's services. Access our AI, micro SaaS, and IT services through our RESTful API."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Integrate with our services using our comprehensive RESTful API
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get API Key
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our API</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for developers, by developers. Our API is designed for ease of use and maximum performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        <IconComponent size={32} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">API Endpoints</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for all our services.
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => {
                const IconComponent = endpoint.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4">
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">
                            {endpoint.path}
                          </code>
                        </div>
                        <p className="text-gray-600">{endpoint.description}</p>
                      </div>
                    </div>

                    {endpoint.parameters.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Parameters</h4>
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
                                  <td className="py-2">{param.type}</td>
                                  <td className="py-2">
                                    <span className={`px-2 py-1 rounded text-xs ${
                                      param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      {param.required ? 'Yes' : 'No'}
                                    </span>
                                  </td>
                                  <td className="py-2">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Response Example</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          {JSON.stringify(endpoint.response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get your API key and start integrating with our services today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get API Key
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View SDKs
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}