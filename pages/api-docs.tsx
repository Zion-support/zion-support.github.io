import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
  Book,
  Globe,
  Database,
  Server,
  Lock,
  Brain,
  Cloud
} from 'lucide-react';

const apiEndpoints = [
  {
    title: 'Authentication API',
    description: 'Secure authentication and authorization endpoints',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth'
  },
  {
    title: 'AI Services API',
    description: 'AI-powered services and machine learning endpoints',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Data Analytics API',
    description: 'Data processing and analytics endpoints',
    icon: Database,
    methods: ['POST', 'GET', 'PUT'],
    endpoint: '/api/analytics'
  },
  {
    title: 'Cloud Services API',
    description: 'Cloud infrastructure and deployment endpoints',
    icon: Cloud,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/cloud'
  }
];

const apiFeatures = [
  {
    name: 'AI Email Responder',
    method: 'POST',
    path: '/api/ai/email-responder',
    description: 'Generate intelligent email responses using AI',
    parameters: [
      { name: 'message', type: 'string', required: true, description: 'The email message to respond to' },
      { name: 'context', type: 'object', required: false, description: 'Additional context for the response' }
    ],
    response: {
      status: 200,
      data: {
        response: 'string',
        confidence: 'number',
        suggestions: 'array'
      }
    }
  },
  {
    name: 'Predictive Analytics',
    method: 'POST',
    path: '/api/ai/predictive-analytics',
    description: 'Generate business predictions and forecasts',
    parameters: [
      { name: 'data', type: 'array', required: true, description: 'Historical data for analysis' },
      { name: 'period', type: 'string', required: true, description: 'Time period for prediction' }
    ],
    response: {
      status: 200,
      data: {
        predictions: 'array',
        accuracy: 'number',
        trends: 'array'
      }
    }
  }
];

export default function APIDocs() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Learn how to integrate with our APIs and services." />
        <meta name="keywords" content="API documentation, API reference, developer docs, integration guide" />
        <meta property="og:title" content="API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Complete API documentation and integration guides for our services." />
        <meta property="og:url" content="https://ziontechgroup.com/api-docs" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation and integration guides for all our services. 
                Build powerful applications with our robust APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#endpoints" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore APIs
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section id="endpoints" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for all services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <endpoint.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{endpoint.title}</h3>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Endpoint:</p>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">{endpoint.endpoint}</code>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {endpoint.methods.map((method, methodIndex) => (
                      <span key={methodIndex} className={`px-2 py-1 rounded text-xs font-medium ${
                        method === 'GET' ? 'bg-green-100 text-green-800' :
                        method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {method}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">API Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed documentation for our API features and capabilities
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{feature.name}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {feature.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium">{param.name}</span>
                            <span className="text-sm text-gray-500">{param.type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Response</h4>
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                        <div>Status: {feature.response.status}</div>
                        <div>Data: {JSON.stringify(feature.response.data, null, 2)}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Need Help with Integration?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Our team is here to help you integrate with our APIs successfully
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
                <Link href="/api" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  View API Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}