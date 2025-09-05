<<<<<<< HEAD
import React from 'react';
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

          <div className="container mx-auto px-4 relative z-10">            <motion.div
=======
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
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
    icon: Database,
    features: ['Single Endpoint', 'Real-time Subscriptions', 'Type Safety', 'Introspection']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connections', 'Event-driven']
  }
];

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["JSON Responses", "HTTP Status Codes", "Rate Limiting"]
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed API documentation with examples and guides",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Libraries"]
    },
    {
      title: "High Performance",
      description: "Fast, reliable APIs built for scale and speed",
      icon: Zap,
      features: ["Low Latency", "High Throughput", "Global CDN"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with authentication and encryption",
      icon: Shield,
      features: ["OAuth 2.0", "API Keys", "SSL/TLS Encryption"]
    }
  ];
  return (
    <Layout
      title="API Reference - Zion Tech Group"
      description="Comprehensive API documentation and reference for integrating with Zion Tech Group services."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                API{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate with Zion Tech Group's powerful APIs to build amazing applications 
                with AI, cloud services, and enterprise solutions.              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}        <section className="py-20 bg-white">
=======
                API Reference
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate with Zion Tech Group services using our comprehensive APIs.
                Build powerful applications with our developer-friendly platform.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-indigo-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* API Endpoints Section */}
        <section className="py-20 bg-white">
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive API endpoints for AI services, IT solutions, and micro SaaS platforms.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/analyze</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/predict</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/process</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Services API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/infrastructure/status</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/security/scan</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/cloud/resources</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/saas/subscribe</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/saas/usage</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/saas/configure</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

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
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Building Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to integrate with our APIs? Get started with our comprehensive documentation and developer tools.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Get API Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
  );
}