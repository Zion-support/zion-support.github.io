import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Code, 
  Book, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Server, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Copy,
  ExternalLink
} from 'lucide-react';

const apiEndpoints = [
  {
    title: 'Authentication API',
    description: 'Secure authentication and authorization endpoints',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth',
    examples: {
      login: {
        method: 'POST',
        url: '/api/auth/login',
        body: {
          email: 'user@example.com',
          password: 'password123'
        },
        response: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          user: {
            id: 1,
            email: 'user@example.com',
            name: 'John Doe'
          }
        }
      }
    }
  },
  {
    title: 'User Management API',
    description: 'Complete user profile and account management',
    icon: Server,
    methods: ['GET', 'PUT', 'DELETE'],
    endpoint: '/api/users',
    examples: {
      getProfile: {
        method: 'GET',
        url: '/api/users/profile',
        headers: {
          'Authorization': 'Bearer YOUR_TOKEN'
        },
        response: {
          id: 1,
          email: 'user@example.com',
          name: 'John Doe',
          avatar: 'https://example.com/avatar.jpg',
          createdAt: '2023-01-01T00:00:00Z'
        }
      }
    }
  },
  {
    title: 'Data Analytics API',
    description: 'Advanced analytics and reporting endpoints',
    icon: Database,
    methods: ['GET', 'POST'],
    endpoint: '/api/analytics',
    examples: {
      getMetrics: {
        method: 'GET',
        url: '/api/analytics/metrics',
        query: {
          startDate: '2023-01-01',
          endDate: '2023-12-31',
          metric: 'page_views'
        },
        response: {
          metrics: [
            { date: '2023-01-01', value: 1000 },
            { date: '2023-01-02', value: 1200 }
          ],
          total: 50000
        }
      }
    }
  },
  {
    title: 'File Management API',
    description: 'Upload, download, and manage files securely',
    icon: Globe,
    methods: ['POST', 'GET', 'DELETE'],
    endpoint: '/api/files',
    examples: {
      uploadFile: {
        method: 'POST',
        url: '/api/files/upload',
        body: {
          file: 'multipart/form-data',
          folder: 'documents'
        },
        response: {
          id: 'file_123',
          name: 'document.pdf',
          size: 1024000,
          url: 'https://cdn.ziontechgroup.com/files/file_123.pdf',
          uploadedAt: '2023-01-01T00:00:00Z'
        }
      }
    }
  }
];

const sdkLanguages = [
  { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Python', icon: 'PY', color: 'bg-blue-100 text-blue-800' },
  { name: 'PHP', icon: 'PHP', color: 'bg-purple-100 text-purple-800' },
  { name: 'Java', icon: 'J', color: 'bg-red-100 text-red-800' },
  { name: 'C#', icon: 'C#', color: 'bg-green-100 text-green-800' },
  { name: 'Go', icon: 'GO', color: 'bg-cyan-100 text-cyan-800' }
];

export default function APIDocsPage() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group | Complete Developer Guide</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group's developer platform. Detailed guides, examples, and SDKs for seamless integration." />
        <meta name="keywords" content="API documentation, developer guide, REST API, SDK, integration, authentication" />
        <meta property="og:title" content="Complete API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Access our comprehensive API documentation with detailed guides, examples, and SDKs." />
        <meta property="og:url" content="https://ziontechgroup.com/api-docs" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete developer documentation with detailed guides, examples, and SDKs for seamless integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#getting-started" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="#endpoints" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Endpoints
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section id="getting-started" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quick Start</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get up and running with our API in just a few minutes. Follow our step-by-step guide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Get Your API Key</h3>
                <p className="text-gray-600 mb-6">
                  Sign up for a developer account and get your API key from the dashboard. This key will be used to authenticate all your API requests.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
                    <code>{`curl -X POST 'https://api.ziontechgroup.com/v1/auth/login' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'`}</code>
                  </pre>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Make Your First Request</h3>
                <p className="text-gray-600 mb-6">
                  Use your API key to make authenticated requests to our endpoints. Here's an example of fetching user data.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">
                    <code>{`curl -X GET 'https://api.ziontechgroup.com/v1/users/profile' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'`}</code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Official SDKs</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use our official SDKs to integrate with our API quickly and easily in your preferred programming language.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {sdkLanguages.map((sdk, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 ${sdk.color} rounded-lg flex items-center justify-center mx-auto mb-4 font-bold`}>
                    {sdk.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{sdk.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section id="endpoints" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">API Endpoints</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints with detailed documentation and examples.
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => {
                const IconComponent = endpoint.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="text-blue-600 mr-4">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{endpoint.title}</h3>
                          <p className="text-gray-600">{endpoint.description}</p>
                          <p className="text-sm text-blue-600 font-mono mt-1">{endpoint.endpoint}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Supported Methods:</h4>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.methods.map((method, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              method === 'GET' ? 'bg-green-100 text-green-800' :
                              method === 'POST' ? 'bg-blue-100 text-blue-800' :
                              method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Example Request:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{`${endpoint.examples[Object.keys(endpoint.examples)[0]].method} ${endpoint.examples[Object.keys(endpoint.examples)[0]].url}
${Object.keys(endpoint.examples[Object.keys(endpoint.examples)[0]].headers || {}).map(key => 
  `-H '${key}: ${endpoint.examples[Object.keys(endpoint.examples)[0]].headers[key]}'`
).join('\n')}
${endpoint.examples[Object.keys(endpoint.examples)[0]].body ? 
  `-d '${JSON.stringify(endpoint.examples[Object.keys(endpoint.examples)[0]].body, null, 2)}'` : 
  ''
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Example Response:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{JSON.stringify(endpoint.examples[Object.keys(endpoint.examples)[0]].response, null, 2)}</code>
                        </pre>
                      </div>
                    </div>

                    <Link
                      href={`/contact?api=${encodeURIComponent(endpoint.title)}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Get API Access
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
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
                Ready to Start Building?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start integrating with our platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get API Access
                </Link>
                <Link href="/api" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View API Overview
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}