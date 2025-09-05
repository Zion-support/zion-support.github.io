import React, { useState } from 'react';
import MainLayout from '../../src/components/layout/MainLayout';
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

export default function APIDocumentationPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
        },
        {
          method: 'POST',
          endpoint: '/refresh',
          description: 'Refresh access token using refresh token',
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/refresh \\
  -H "Authorization: Bearer YOUR_REFRESH_TOKEN"`
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
        },
        {
          method: 'POST',
          endpoint: '/analyze',
          description: 'Analyze text or data using AI',
          code: `curl -X POST https://api.ziontechgroup.com/v1/ai/analyze \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to analyze",
    "analysis_type": "sentiment"
  }'`
        },
        {
          method: 'POST',
          endpoint: '/generate',
          description: 'Generate content using AI models',
          code: `curl -X POST https://api.ziontechgroup.com/v1/ai/generate \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI",
    "type": "blog_post",
    "length": "medium"
  }'`
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Services',
      description: 'Manage cloud resources and infrastructure',
      baseUrl: '/api/v1/cloud',
      methods: [
        {
          method: 'GET',
          endpoint: '/resources',
          description: 'List all cloud resources',
          code: `curl -X GET https://api.ziontechgroup.com/v1/cloud/resources \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`
        },
        {
          method: 'POST',
          endpoint: '/deploy',
          description: 'Deploy application to cloud',
          code: `curl -X POST https://api.ziontechgroup.com/v1/cloud/deploy \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "app_name": "my-app",
    "environment": "production",
    "config": {
      "cpu": "2",
      "memory": "4GB"
    }
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
                Integrate with Zion Tech Group's powerful APIs to build amazing applications 
                with AI, cloud services, and enterprise solutions.
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
                Quick Start Guide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get started with our APIs in minutes. Follow these simple steps to make your first API call.
              </p>
            </motion.div>

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
              </div>
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for AI services, cloud management, and enterprise solutions.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto space-y-12">
              {apiEndpoints.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                    <p className="text-indigo-100 mb-2">{section.description}</p>
                    <code className="text-sm bg-indigo-800 px-3 py-1 rounded">
                      {section.baseUrl}
                    </code>
                  </div>

                  <div className="p-6 space-y-6">
                    {section.methods.map((method, methodIndex) => (
                      <div key={methodIndex} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                              method.method === 'GET' ? 'bg-green-100 text-green-800' :
                              method.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                              method.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {method.method}
                            </span>
                            <code className="text-gray-800 font-mono">
                              {section.baseUrl}{method.endpoint}
                            </code>
                          </div>
                          <button
                            onClick={() => copyToClipboard(method.code, `${section.id}-${methodIndex}`)}
                            className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            {copiedCode === `${section.id}-${methodIndex}` ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{method.description}</p>
                        
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-green-400 text-sm font-mono">
                            <code>{method.code}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Response Examples */}
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

        {/* SDKs and Libraries */}
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
                SDKs & Libraries
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use our official SDKs and libraries to integrate with our APIs more easily.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'JavaScript/Node.js', icon: '🟨', command: 'npm install @ziontechgroup/api-client' },
                  { name: 'Python', icon: '🐍', command: 'pip install ziontechgroup-api' },
                  { name: 'PHP', icon: '🐘', command: 'composer require ziontechgroup/api-client' },
                  { name: 'Java', icon: '☕', command: 'mvn install ziontechgroup-api-client' },
                  { name: 'C#', icon: '🔷', command: 'dotnet add package ZionTechGroup.ApiClient' },
                  { name: 'Go', icon: '🐹', command: 'go get github.com/ziontechgroup/api-client' }
                ].map((sdk, index) => (
                  <motion.div
                    key={sdk.name}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl mb-4">{sdk.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{sdk.name}</h3>
                    <div className="bg-gray-100 rounded p-3 text-sm font-mono text-gray-700">
                      {sdk.command}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
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
                Need Help?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our developer support team is here to help you integrate with our APIs successfully.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-50 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Terminal className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer Support</h3>
                  <p className="text-gray-600 mb-4">
                    Get help with API integration, troubleshooting, and best practices.
                  </p>
                  <a
                    href="mailto:dev-support@ziontechgroup.com"
                    className="text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    dev-support@ziontechgroup.com
                  </a>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
                  <p className="text-gray-600 mb-4">
                    Browse our comprehensive documentation and guides.
                  </p>
                  <a
                    href="/docs"
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    View Documentation
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}