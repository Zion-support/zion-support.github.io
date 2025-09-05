<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Code,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Terminal,
  Globe,
  Shield,
  Zap,
  Database,
  Cpu,
  Cloud,
  XCircle
} from 'lucide-react';

export default function APIPage() {
  const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      description: 'Secure authentication and authorization endpoints',
      baseUrl: '/api/v1/auth',
      methods: [
        {
          method: 'POST',
          endpoint: '/login',
          description: 'Authenticate user with email and password',
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`
        },
        {
          method: 'POST',
          endpoint: '/register',
          description: 'Register a new user account',
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password",
    "name": "John Doe"
  }'`
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Access our AI-powered services and models',
      baseUrl: '/api/v1/ai',
      methods: [
        {
          method: 'POST',
          endpoint: '/chat',
          description: 'Send messages to our AI chat service',
          code: `curl -X POST https://api.ziontechgroup.com/v1/ai/chat \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, how can you help me?",
    "model": "gpt-4",
    "temperature": 0.7
  }'`
        }
      ]
    }
  ];

  const responseExamples = {
    success: {
      status: 200,
      data: {
        message: "Request successful",
        data: {
          id: "12345",
          name: "Example Response",
          created_at: "2024-01-01T00:00:00Z"
        }
      }
    },
    error: {
      status: 400,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request parameters",
        details: {
          field: "email",
          issue: "Invalid email format"
        }
      }
    }
  };

  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Access our AI, cloud, and enterprise APIs with detailed examples and guides."
      keywords="API documentation, REST API, AI API, cloud API, developer resources"
    >
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
=======
import Head from 'next/head';
=======
import { motion } from 'framer-motion';
import Link from 'next/link';
>>>>>>> main
import Layout from '../components/Layout';
<<<<<<< HEAD

export default function Api() {
  return (
<<<<<<< HEAD
    <Layout>
      <Head>
        <title>API - Zion Tech Group</title>
        <meta name="description" content="API services and documentation" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">API Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            Our API services are coming soon.
          </p>
        </div>
=======
    <Layout
      title="API - Zion Tech Group"
      description="Powerful APIs for AI, cloud services, and enterprise solutions"
      keywords="API, REST API, GraphQL, WebSocket, AI API, cloud API"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
=======
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
    title: 'GraphQL API',
    description: 'Flexible query language for APIs',
    icon: Code,
    features: ['Single Endpoint', 'Type Safety', 'Real-time Subscriptions', 'Introspection']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connections', 'Event-driven']
  },
  {
    title: 'Database API',
    description: 'Secure database access and management',
    icon: Database,
    features: ['CRUD Operations', 'Query Optimization', 'Data Validation', 'Backup & Recovery']
  },
  {
    title: 'Authentication API',
    description: 'Secure user authentication and authorization',
    icon: Lock,
    features: ['JWT Tokens', 'OAuth 2.0', 'Role-based Access', 'Multi-factor Auth']
  },
  {
    title: 'Monitoring API',
    description: 'API performance and health monitoring',
    icon: Server,
    features: ['Health Checks', 'Performance Metrics', 'Error Tracking', 'Alerting']
  }
];

export default function API() {
  return (
    <Layout
      title="API Services - Zion Tech Group"
      description="Comprehensive API services including REST, GraphQL, WebSocket, and more. Build powerful applications with our developer-friendly APIs."
      keywords="API services, REST API, GraphQL, WebSocket, database API, authentication API"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Powerful APIs for Modern Development
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Integrate with our comprehensive suite of APIs for AI, cloud services, and enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
=======
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate with Zion Tech Group's powerful APIs to build amazing applications 
                with AI, cloud services, and enterprise solutions.
              </p>
=======
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                API
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive API services designed to power your applications with robust, scalable, and secure endpoints.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/api-docs"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                >
                  View Documentation
                </Link>
              </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* API Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our APIs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for developers, by developers. Our APIs are designed for simplicity, performance, and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional API Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">GraphQL API</h3>
                <p className="text-gray-600 mb-4">Flexible GraphQL API for complex queries</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Flexible Queries
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time Subscriptions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Schema Introspection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Type Safety
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">WebSocket API</h3>
                <p className="text-gray-600 mb-4">Real-time communication and updates</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time Updates
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bidirectional Communication
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Low Latency
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Event-driven
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SDK Libraries</h3>
                <p className="text-gray-600 mb-4">Official SDKs for popular programming languages</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    JavaScript/TypeScript
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Python
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Java
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    C#/.NET
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* API Documentation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Documentation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive API documentation with examples and interactive testing
=======
<<<<<<< HEAD
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
                Quick Start Guide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get started with our APIs in minutes. Follow these simple steps to make your first API call.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
            </div>

<<<<<<< HEAD
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Authentication</h3>
                <p className="text-gray-600 mb-6">Secure authentication and authorization endpoints</p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">POST</span>
                      <code className="text-sm font-mono">/api/v1/auth/login</code>
                    </div>
                    <p className="text-gray-600 mb-4">Authenticate user with email and password</p>
                    <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
{`curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">POST</span>
                      <code className="text-sm font-mono">/api/v1/auth/register</code>
                    </div>
                    <p className="text-gray-600 mb-4">Register a new user account</p>
                    <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
{`curl -X POST https://api.ziontechgroup.com/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password",
    "name": "John Doe"
  }'`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">AI Services</h3>
                <p className="text-gray-600 mb-6">Access to our AI-powered services and models</p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded">POST</span>
                      <code className="text-sm font-mono">/api/v1/ai/email-responder</code>
                    </div>
                    <p className="text-gray-600 mb-4">Generate intelligent email responses using AI</p>
                    <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
{`curl -X POST https://api.ziontechgroup.com/v1/ai/email-responder \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "message": "Hello, I need help with my account",
    "context": {
      "user_id": "12345",
      "previous_messages": []
    }
  }'`}
                      </pre>
                    </div>
                  </div>
                </div>
=======
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Get API Key</h3>
                  <p className="text-gray-600">Sign up and obtain your API key from the dashboard</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Make Request</h3>
                  <p className="text-gray-600">Use our RESTful APIs with your preferred language</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Build & Scale</h3>
                  <p className="text-gray-600">Create powerful applications with our APIs</p>
                </motion.div>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </div>
            </div>
          </div>
        </section>

        {/* Response Examples */}
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
                Response Examples
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understand the structure of our API responses with these examples.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white border border-gray-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Check className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Success Response</h3>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono">
                      <code>{JSON.stringify(responseExamples.success, null, 2)}</code>
                    </pre>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white border border-gray-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <XCircle className="w-6 h-6 text-red-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Error Response</h3>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-red-400 text-sm font-mono">
                      <code>{JSON.stringify(responseExamples.error, null, 2)}</code>
                    </pre>
                  </div>
                </motion.div>
              </div>
=======
        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our API Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of API services designed for modern applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
=======
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
<<<<<<< HEAD
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start building with our powerful APIs today. Get your API key and begin integrating our services.
=======
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Start building with our APIs today. Get your API key and begin integrating 
                with our powerful services.
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build with Our APIs?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Start integrating our powerful API services into your applications today.
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
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
                  href="/api-docs"
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
=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
      </div>
    </Layout>
  );
}