<<<<<<< HEAD
import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

export default function ApiDocs() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for integrating with our services and platforms."
      keywords="API, documentation, integration, developers, REST API, GraphQL"
    >
      <div className="min-h-screen bg-gray-50">
=======
<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD
<<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD
=======
=======
import React from 'react';
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
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
  }
];

<<<<<<< HEAD:pages/docs/api.tsx.backup
const codeExamples = [
  {
    language: 'JavaScript',
    code: `// AI Email Responder
const response = await fetch('/api/ai/email-responder', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    message: 'I need help with my account',
    context: { userId: '12345' }
=======
========
>>>>>>>> origin/main:pages/docs/api.tsx
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
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      description: 'Endpoints for user authentication and authorization',
      methods: ['POST', 'GET', 'PUT', 'DELETE'],
      baseUrl: '/api/v1/auth',
      endpoints: [
        {
          method: 'POST',
          path: '/login',
          description: 'Authenticate user with email and password',
          parameters: [
            { name: 'email', type: 'string', required: true, description: 'User email address' },
            { name: 'password', type: 'string', required: true, description: 'User password' }
          ],
          response: {
            status: 200,
            data: {
              token: 'string',
              user: 'object',
              expires_in: 'number'
            }
          }
        },
        {
          method: 'POST',
          path: '/register',
          description: 'Register a new user account',
          parameters: [
            { name: 'email', type: 'string', required: true, description: 'User email address' },
            { name: 'password', type: 'string', required: true, description: 'User password' },
            { name: 'name', type: 'string', required: true, description: 'User full name' }
          ],
          response: {
            status: 201,
            data: {
              user: 'object',
              message: 'string'
            }
          }
        },
        {
          method: 'POST',
          path: '/logout',
          description: 'Logout user and invalidate token',
          parameters: [],
          response: {
            status: 200,
            data: {
              message: 'string'
            }
          }
        }
      ]
    },
    {
      id: 'users',
      title: 'Users',
      description: 'User management and profile operations',
      methods: ['GET', 'PUT', 'DELETE'],
      baseUrl: '/api/v1/users',
      endpoints: [
        {
          method: 'GET',
          path: '/profile',
          description: 'Get current user profile',
          parameters: [],
          response: {
            status: 200,
            data: {
              id: 'string',
              name: 'string',
              email: 'string',
              created_at: 'string',
              updated_at: 'string'
            }
          }
        },
        {
          method: 'PUT',
          path: '/profile',
          description: 'Update user profile',
          parameters: [
            { name: 'name', type: 'string', required: false, description: 'User full name' },
            { name: 'email', type: 'string', required: false, description: 'User email address' }
          ],
          response: {
            status: 200,
            data: {
              user: 'object',
              message: 'string'
            }
          }
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Project management and operations',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      baseUrl: '/api/v1/projects',
      endpoints: [
        {
          method: 'GET',
          path: '/',
          description: 'Get list of user projects',
          parameters: [
            { name: 'page', type: 'number', required: false, description: 'Page number for pagination' },
            { name: 'limit', type: 'number', required: false, description: 'Number of items per page' }
          ],
          response: {
            status: 200,
            data: {
              projects: 'array',
              pagination: 'object'
            }
          }
        },
        {
          method: 'POST',
          path: '/',
          description: 'Create a new project',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Project name' },
            { name: 'description', type: 'string', required: false, description: 'Project description' },
            { name: 'type', type: 'string', required: true, description: 'Project type' }
          ],
          response: {
            status: 201,
            data: {
              project: 'object',
              message: 'string'
            }
          }
        },
        {
          method: 'GET',
          path: '/:id',
          description: 'Get project details',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Project ID' }
          ],
          response: {
            status: 200,
            data: {
              project: 'object'
            }
          }
        }
      ]
    }
  ];

  const codeExamples = {
    javascript: `// JavaScript/Node.js Example
=======
const codeExamples = {
  javascript: `// JavaScript/Node.js Example
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
const response = await fetch('https://api.ziontechgroup.com/api/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
<<<<<<< HEAD:pages/docs/api.tsx.backup
    password: 'your-password'
<<<<<<<< HEAD:pages/docs/api.tsx.backup
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
=======
    password: 'password123'
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
========
>>>>>>>> origin/main:pages/docs/api.tsx
  })
});

const data = await response.json();
console.log(data);`,
  
  python: `# Python Example
import requests

response = requests.post(
    'https://api.ziontechgroup.com/api/v1/auth/login',
    json={
        'email': 'user@example.com',
        'password': 'password123'
    }
)

data = response.json()
print(data)`,
  
  curl: `# cURL Example
curl -X POST 'https://api.ziontechgroup.com/api/v1/auth/login' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'`
};

<<<<<<<< HEAD:pages/docs/api.tsx.backup
export default function APIDocsPage() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group | Complete Developer Guide</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group's developer platform. Detailed guides, examples, and SDKs for seamless integration." />
        <meta name="keywords" content="API documentation, developer guide, REST API, SDK, integration, authentication" />
        <meta property="og:title" content="Complete API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Access our comprehensive API documentation with detailed guides, examples, and SDKs." />
        <meta property="og:url" content="https://ziontechgroup.com/docs/api" />
        <meta property="og:type" content="website" />
      </Head>
      
========
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight, Copy, ExternalLink } from 'lucide-react';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/health',
    description: 'Check API health status',
    icon: Shield,
    response: {
      status: 'healthy',
      timestamp: '2024-01-01T00:00:00Z',
      version: '1.0.0'
    }
  },
  {
    method: 'POST',
    path: '/api/v1/ai/analyze',
    description: 'Analyze text using AI',
    icon: Zap,
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
  }
];

export default function APIDocs() {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
<<<<<<< HEAD
      description="Comprehensive API documentation for Zion Tech Group services. Learn how to integrate with our APIs and build powerful applications."
      keywords="API documentation, REST API, integration, developers, endpoints, authentication"
    >
>>>>>>>> origin/main:pages/docs/api.tsx
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> origin/main
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
<<<<<<< HEAD
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======

          <div className="container mx-auto px-4 relative z-10">
=======
      description="Comprehensive API documentation for Zion Tech Group's services. Learn how to integrate with our AI and technology solutions."
      keywords="API documentation, REST API, developer docs, integration guide, API reference"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Integrate with our powerful APIs to build amazing applications and services.
              </p>
=======
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
<<<<<<<< HEAD:pages/docs/api.tsx.backup
                Complete developer documentation with detailed guides, examples, and SDKs for seamless integration.
========
                Comprehensive API documentation for integrating with Zion Tech Group services. 
                Build powerful applications with our RESTful APIs.
=======
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                API
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Documentation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation for integrating with our AI and technology solutions. 
                Build powerful applications with our developer-friendly APIs.
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>>> origin/main:pages/docs/api.tsx
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
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
                </Link>
              </div>
>>>>>>> origin/main
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* API Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD
<<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD
        {/* API Endpoints Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
=======
        {/* API Endpoints */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> main
              animate={{ opacity: 1, y: 0 }}
=======
        {/* Code Examples Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Code Examples</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get started quickly with our code examples in multiple programming languages.
              </p>
            </motion.div>
<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                    </div>
=======
            <div className="space-y-8">
              {endpoints.map((endpoint, index) => (
=======

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Object.entries(codeExamples).map(([language, code], index) => (
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
                <motion.div
                  key={language}
                  className="bg-gray-900 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <span className="text-white font-semibold capitalize">{language}</span>
                    <button className="text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </motion.div>
              ))}
<<<<<<< HEAD:pages/docs/api.tsx.backup
=======
========
>>>>>>>> origin/main:pages/docs/api.tsx
        {/* Navigation Tabs */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
<<<<<<<< HEAD:pages/docs/api.tsx.backup
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
========
>>>>>>>> origin/main:pages/docs/api.tsx
            </div>
          </div>
        </section>

<<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD
        {/* Code Examples */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Overview
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our RESTful APIs provide easy access to our services and data with comprehensive documentation and examples.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure</h3>
                <p className="text-gray-600">OAuth 2.0 authentication and HTTPS encryption for all API calls.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast</h3>
                <p className="text-gray-600">High-performance APIs with sub-100ms response times and 99.9% uptime.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive</h3>
                <p className="text-gray-600">Complete coverage of all our services with detailed documentation.</p>
              </motion.div>
            </div>

            {/* API Endpoints */}
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4">GET</span>
                        <code className="text-lg font-mono text-gray-900">/api/v1/services</code>
                      </div>
                      <button className="flex items-center text-blue-600 hover:text-blue-800">
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </button>
                    </div>
                    <p className="text-gray-600 mb-4">Retrieve all available services</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <pre className="text-sm text-gray-800">
{`{
  "services": [
    {
      "id": "ai-code-review",
      "name": "AI Code Review Assistant",
      "description": "Automated code review with AI analysis",
      "pricing": "$199-999/month",
      "category": "Development Tools"
    }
  ]
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">POST</span>
                        <code className="text-lg font-mono text-gray-900">/api/v1/contact</code>
                      </div>
                      <button className="flex items-center text-blue-600 hover:text-blue-800">
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </button>
                    </div>
                    <p className="text-gray-600 mb-4">Submit a contact form</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <pre className="text-sm text-gray-800">
{`{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "Interested in your AI services"
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mr-4">PUT</span>
                        <code className="text-lg font-mono text-gray-900">/api/v1/projects/&#123;id&#125;</code>
                      </div>
                      <button className="flex items-center text-blue-600 hover:text-blue-800">
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </button>
                    </div>
                    <p className="text-gray-600 mb-4">Update project information</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <pre className="text-sm text-gray-800">
{`{
  "name": "Updated Project Name",
  "status": "in-progress",
  "description": "Updated project description"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Examples</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get started quickly with our code examples in multiple programming languages.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{example.language}</h3>
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </motion.div>
              ))}
>>>>>>> main
=======
========
>>>>>>>> origin/main:pages/docs/api.tsx
        {/* Tab Content */}
        <section className="py-16 bg-white">
=======
        {/* API Endpoints Section */}
        <section className="py-20 bg-gray-50">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
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
                          <code>{`${Object.values(endpoint.examples)[0].method} ${Object.values(endpoint.examples)[0].url}
${Object.keys(Object.values(endpoint.examples)[0].headers || {}).map(key => 
  `-H '${key}: ${Object.values(endpoint.examples)[0].headers[key]}'`
).join('\n')}
${Object.values(endpoint.examples)[0].body ? 
  `-d '${JSON.stringify(Object.values(endpoint.examples)[0].body, null, 2)}'` : 
  ''
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Example Response:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{JSON.stringify(Object.values(endpoint.examples)[0].response, null, 2)}</code>
                        </pre>
                      </div>
                    </div>

<<<<<<< HEAD:pages/docs/api.tsx.backup
                  <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Error Response Format</h3>
                    <p className="text-gray-600 mb-4">
                      All error responses follow a consistent format:
                    </p>
                    <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
                      <code>{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request data is invalid",
    "details": {
      "field": "email",
      "reason": "Invalid email format"
    }
  }
}`}</code>
                    </pre>
                  </div>
                </motion.div>
              )}
<<<<<<<< HEAD:pages/docs/api.tsx.backup
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
=======
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
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
========
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
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Response Example:</h4>
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>>> origin/main:pages/docs/api.tsx
>>>>>>> origin/main
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start building amazing applications with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <Code className="w-5 h-5 mr-2" />
                  Get API Key
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Examples
                </button>
=======
<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<<< HEAD:pages/docs/api.tsx.backup
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start integrating with our platform today.
========
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Start building with our APIs today. Get your API key and begin integrating 
                with our powerful services.
>>>>>>>> origin/main:pages/docs/api.tsx
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD:pages/docs/api.tsx.backup
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get API Key
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  View Full Documentation
                </a>
<<<<<<<< HEAD:pages/docs/api.tsx.backup
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
=======
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get API Access
                </Link>
                <Link href="/api" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View API Overview
                </Link>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
========
=======
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get API access and start integrating our powerful AI and technology solutions into your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get API Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Documentation
                </Link>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>>> origin/main:pages/docs/api.tsx
>>>>>>> origin/main
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </Layout>
  );
}
=======
<<<<<<<< HEAD:pages/docs/api.tsx.backup
<<<<<<< HEAD
<<<<<<< HEAD
    <Layout title="API Docs">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-600">Reference content will return after fixes. Basic page added to restore build.</p>
      </div>
    </Layout>
=======
      </div>
    </>
  );
<<<<<<< HEAD:pages/docs/api.tsx.backup
}
>>>>>>> main
=======
      </div>
    </MainLayout>
  );
}
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
=======
}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-55a3:pages/docs/api.tsx
========
      </div>
    </MainLayout>
  );
}
>>>>>>>> origin/main:pages/docs/api.tsx
>>>>>>> origin/main
