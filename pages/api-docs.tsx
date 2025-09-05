import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';
=======
<<<<<<< HEAD
import Head from 'next/head';
import Layout from '../components/Layout';
<<<<<<< HEAD

export default function ApiDocs() {
  return (
    <Layout>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">API Documentation</h1>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive API documentation for our services will be available soon.
          </p>
        </div>
=======
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
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { 
  Code, 
  ArrowRight,
  Book,
  Zap,
  Shield,
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
  Globe,
  Database,
  Server,
  Lock,
<<<<<<< HEAD
=======
  CheckCircle,
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
  Brain,
  Cloud
} from 'lucide-react';
>>>>>>> main

<<<<<<< HEAD
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
  },
  {
    name: 'Content Generation',
    method: 'POST',
    path: '/api/ai/content-generation',
    description: 'Generate various types of content using AI',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'The content generation prompt' },
      { name: 'type', type: 'string', required: true, description: 'Type of content to generate' }
    ],
    response: {
      status: 200,
      data: {
        content: 'string',
        tokens_used: 'number',
        model: 'string'
      }
    }
  }
];

const apiEndpoints = [
  {
    name: 'Authentication',
    method: 'POST',
    endpoint: '/api/auth/login',
    description: 'Authenticate users and get access tokens',
    features: ['OAuth 2.0', 'JWT Tokens', 'Rate Limiting', 'Security Headers']
  },
  {
<<<<<<< HEAD
    name: 'User Management',
    method: 'GET',
    endpoint: '/api/users',
    description: 'Retrieve and manage user information',
    features: ['CRUD Operations', 'Pagination', 'Filtering', 'Sorting']
  },
  {
    name: 'Data Analytics',
    method: 'POST',
    endpoint: '/api/analytics',
    description: 'Submit and retrieve analytics data',
    features: ['Real-time Data', 'Historical Reports', 'Custom Metrics', 'Export Options']
=======
    title: 'AI Services API',
    description: 'Access to all AI-powered services and models',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Micro SaaS API',
    description: 'Manage micro SaaS applications and subscriptions',
    icon: Cloud,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/saas'
  },
  {
    title: 'IT Services API',
    description: 'Infrastructure and IT service management',
    icon: Server,
    methods: ['POST', 'GET', 'PUT'],
    endpoint: '/api/it-services'
=======
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
    description: 'Access to all AI-powered services and models',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Micro SaaS API',
    description: 'Manage micro SaaS applications and subscriptions',
    icon: Cloud,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/micro-saas'
  },
  {
    title: 'IT Services API',
    description: 'Infrastructure and IT service management',
    icon: Server,
    methods: ['POST', 'GET', 'PUT'],
    endpoint: '/api/it-services'
>>>>>>> main
  }
];

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions." />
        <meta name="keywords" content="API documentation, developer resources, REST API, integration, SDK" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Comprehensive API documentation for integrating with Zion Tech Group services. 
              Build powerful applications with our RESTful APIs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for seamless integration with our services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apiEndpoints.map((endpoint, index) => {
              const IconComponent = endpoint.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{endpoint.title}</h3>
                      <code className="text-sm text-blue-600">{endpoint.endpoint}</code>
                    </div>
=======
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight, Copy, ExternalLink } from 'lucide-react';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/health',
    description: 'Check API health status',
    icon: Shield,
<<<<<<< HEAD
    title: 'Secure',
    description: 'Enterprise-grade security with OAuth 2.0 and JWT authentication'
=======
    response: {
      status: 'healthy',
      timestamp: '2024-01-01T00:00:00Z',
      version: '1.0.0'
    }
>>>>>>> main
  },
  {
    method: 'POST',
    path: '/api/v1/ai/analyze',
    description: 'Analyze text using AI',
    icon: Zap,
<<<<<<< HEAD
    title: 'Fast',
    description: 'High-performance API with sub-100ms response times'
  },
  {
    icon: Globe,
    title: 'Global',
    description: 'Available worldwide with 99.9% uptime guarantee'
  },
  {
    icon: Database,
    title: 'Scalable',
    description: 'Handles millions of requests with auto-scaling infrastructure'
=======
    response: {
      analysis: 'positive',
      confidence: 0.95,
      sentiment: 'happy'
    }
  },
  {
    method: 'GET',
    path: '/api/v1/services',
    description: 'Get available services',
    icon: Book,
    response: {
      services: [],
      total: 0,
      page: 1
    }
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
  }
];

export default function APIDocs() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's developer platform and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">API Documentation</h1>
                <p className="text-gray-600 mt-2">Developer resources and API reference</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  v2.1.0
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="sticky top-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#getting-started" className="text-blue-600 hover:text-blue-800">Getting Started</a></li>
                    <li><a href="#authentication" className="text-blue-600 hover:text-blue-800">Authentication</a></li>
                    <li><a href="#endpoints" className="text-blue-600 hover:text-blue-800">API Endpoints</a></li>
                    <li><a href="#examples" className="text-blue-600 hover:text-blue-800">Code Examples</a></li>
                    <li><a href="#support" className="text-blue-600 hover:text-blue-800">Support</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Getting Started */}
              <section id="getting-started" className="mb-12">
=======
    <Layout
      title="API Documentation - Zion Tech Group"
<<<<<<< HEAD
      description="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions."
      keywords="API documentation, developer resources, REST API, integration, SDK"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
=======
      description="Comprehensive API documentation for Zion Tech Group's services. Learn how to integrate with our AI and technology solutions."
      keywords="API documentation, REST API, developer docs, integration guide, API reference"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
<<<<<<< HEAD
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation for integrating with Zion Tech Group's powerful services
=======
                API
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Documentation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation for integrating with our AI and technology solutions. 
                Build powerful applications with our developer-friendly APIs.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Get API Key
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
                >
                  View Docs
=======
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get API Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* API Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available APIs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive suite of APIs designed for modern applications
=======
        {/* API Endpoints */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints designed for seamless integration.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiEndpoints.map((endpoint, index) => (
>>>>>>> main
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
                  <p className="text-gray-600 mb-6">
                    Welcome to the Zion Tech Group API. Our RESTful API provides programmatic access to our platform's features and data.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Base URL</h3>
                    <code className="text-blue-600">https://api.ziontechgroup.com/v2</code>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="text-center p-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    ))}
=======
<<<<<<< HEAD
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <endpoint.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{endpoint.title}</h3>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {endpoint.methods.map((method, methodIndex) => (
                      <span
                        key={methodIndex}
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          method === 'POST' ? 'bg-green-100 text-green-800' :
                          method === 'GET' ? 'bg-blue-100 text-blue-800' :
                          method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  <code className="text-sm text-gray-500 font-mono">{endpoint.endpoint}</code>
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <endpoint.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-lg font-mono text-gray-900">
                            {endpoint.path}
                          </code>
                        </div>
                        <p className="text-gray-600 mt-2">{endpoint.description}</p>
                      </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Copy className="h-5 w-5" />
                    </button>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Response Example:</h4>
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                    </pre>
                  </div>
<<<<<<< HEAD

                  <Link
                    href={`/api-docs/${endpoint.endpoint.replace('/api/', '')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    View Documentation
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Integration?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
              Contact Developer Support
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* API Examples */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Examples
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started quickly with these practical examples
              </p>
            </div>

            <div className="space-y-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                      {feature.method}
                    </span>
                    <code className="text-sm font-mono text-gray-700">{feature.path}</code>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {feature.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="text-sm">
                            <code className="text-blue-600">{param.name}</code>
                            <span className="text-gray-500"> ({param.type})</span>
                            {param.required && <span className="text-red-500 ml-1">*</span>}
                            <p className="text-gray-600 text-xs mt-1">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Response</h4>
                      <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
{`{
  "status": ${feature.response.status},
  "data": {
    ${Object.entries(feature.response.data).map(([key, value]) => `"${key}": "${value}"`).join(',\n    ')}
  }
}`}
                        </pre>
                      </div>
                    </div>
>>>>>>> main
                  </div>
                </motion.div>
              </section>

              {/* API Endpoints */}
              <section id="endpoints" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h2>
                  
                  <div className="space-y-6">
                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                              endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-gray-900 font-mono">{endpoint.endpoint}</code>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{endpoint.name}</h3>
                        <p className="text-gray-600 mb-4">{endpoint.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {endpoint.features.map((feature, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Code Examples */}
              <section id="examples" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Examples</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">JavaScript/Node.js</h3>
                      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <pre><code>{`const response = await fetch('https://api.ziontechgroup.com/v2/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'your-email@example.com',
    password: 'your-password'
  })
});

const data = await response.json();
console.log(data);`}</code></pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Python</h3>
                      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <pre><code>{`import requests

response = requests.post(
    'https://api.ziontechgroup.com/v2/auth/login',
    json={
        'email': 'your-email@example.com',
        'password': 'your-password'
    }
)

data = response.json()
print(data)`}</code></pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Support */}
              <section id="support" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Support</h2>
                  <p className="text-gray-600 mb-6">
                    Need help with our API? Our developer support team is here to assist you.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
                      <p className="text-gray-600 mb-4">Comprehensive guides and tutorials</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        View Full Docs <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Support</h3>
                      <p className="text-gray-600 mb-4">Get help from our technical team</p>
                      <a href="/contact" className="text-blue-600 hover:text-blue-800 flex items-center">
                        Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </div>
    </>
=======
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start building with our powerful APIs today. Get your API key and begin integrating our services.
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get API access and start integrating our powerful AI and technology solutions into your applications.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get API Key
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
=======
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get API Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
>>>>>>> main
      </div>
    </Layout>
=======
      </div>
    </Layout>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
  );
}