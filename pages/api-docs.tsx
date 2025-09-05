import { motion } from 'framer-motion';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight, Copy, ExternalLink } from 'lucide-react';
=======
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
  Brain, 
  Cloud,
  ArrowRight
} from 'lucide-react';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/health',
    description: 'Check API health status',
    response: {
      status: 'ok',
      timestamp: '2024-01-01T00:00:00Z'
    }
  },
  {
    method: 'POST',
    path: '/api/v1/auth/login',
    description: 'Authenticate user and get access token',
    response: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      expires_in: 3600
    }
  },
  {
<<<<<<< HEAD
    method: 'GET',
    path: '/api/v1/users',
    description: 'Get list of users',
    response: {
      users: [],
      total: 0,
      page: 1
    }
=======
    title: 'Services API',
    description: 'Access to our micro SaaS and IT services',
    icon: Server,
    methods: ['GET', 'POST'],
    endpoint: '/api/services'
  },
  {
    title: 'AI Services',
    description: 'AI-powered solutions and machine learning APIs',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Analytics',
    description: 'Data analytics and reporting endpoints',
    icon: Database,
    methods: ['GET', 'POST'],
    endpoint: '/api/analytics'
  },
  {
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment APIs',
    icon: Cloud,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    endpoint: '/api/cloud'
  }
];

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Authentication Example',
    code: `// Initialize the client
const client = new ZionTechClient('your-api-key');

// Authenticate user
const response = await client.auth.login({
  email: 'user@example.com',
  password: 'password123'
});

console.log('Access token:', response.accessToken);`
  },
  {
    language: 'Python',
    title: 'AI Services Example',
    code: `import ziontech

# Initialize client
client = ziontech.Client(api_key='your-api-key')

# Use AI service
response = client.ai.chat(
    message="Hello, how can you help me?",
    model="gpt-4"
)

print(response.message)`
  },
  {
    language: 'cURL',
    title: 'REST API Example',
    code: `curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'`
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
  }
];

export default function APIDocs() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Complete API documentation for Zion Tech Group's services. Learn how to integrate our APIs into your applications." />
        <meta name="keywords" content="API documentation, RESTful API, developer tools, integration" />
=======
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Complete guide to integrating with our APIs
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for all our services and solutions. 
                Get started quickly with our detailed guides and examples.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
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

<<<<<<< HEAD
        {/* API Endpoints Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
=======
        {/* API Endpoints */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6">API Endpoints</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our available API endpoints and their responses.
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints designed for modern applications.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {endpoint.method}
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <endpoint.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {endpoint.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {endpoint.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700">Endpoint:</span>
                    <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.methods.map((method, methodIndex) => (
                      <span
                        key={methodIndex}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          method === 'GET' ? 'bg-green-100 text-green-800' :
                          method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {method}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
                      </span>
                      <code className="text-lg font-mono">{endpoint.path}</code>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Copy size={20} />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {JSON.stringify(endpoint.response, null, 2)}
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
=======
        {/* Code Examples */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Code Examples
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started quickly with our code examples in multiple programming languages.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-800 px-4 py-2">
                    <h3 className="text-white font-semibold">{example.title}</h3>
                    <span className="text-gray-400 text-sm">{example.language}</span>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm text-gray-800 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Start Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow these simple steps to get started with our APIs.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
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
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-green-600" />
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
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Build & Scale</h3>
                  <p className="text-gray-600">Create powerful applications with our APIs</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get your API key and start integrating our services into your applications today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Examples
                </motion.button>
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of developers building amazing applications with our APIs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get API Key
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Contact Developer Support
                </Link>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}