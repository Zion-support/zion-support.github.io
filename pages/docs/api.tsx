import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { 
  Code, 
  ArrowRight,
  Shield,
  Database,
  Zap,
  Globe,
  Lock,
  CheckCircle,
  Copy,
  ExternalLink,
  BookOpen,
  Terminal,
  Server,
  Cpu,
  Network,
  XCircle,
  AlertTriangle,
  Info,
  Rocket
} from 'lucide-react';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/health',
    description: 'Check API health status',
    icon: Shield,
    response: {
      status: 200,
      data: {
        status: 'healthy',
        timestamp: '2024-01-15T10:30:00Z',
        version: '1.0.0'
      }
    }
  },
  {
    method: 'POST',
    path: '/api/v1/ai/analyze',
    description: 'Analyze text using AI models',
    icon: Cpu,
    response: {
      status: 200,
      data: {
        analysis: {
          sentiment: 'positive',
          confidence: 0.95,
          entities: ['Zion Tech Group', 'AI', 'technology']
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/services',
    description: 'Get available services',
    icon: Server,
    response: {
      status: 200,
      data: {
        services: [
          { id: 1, name: 'AI Services', status: 'active' },
          { id: 2, name: 'IT Services', status: 'active' }
        ]
      }
    }
  }
];

const errorCodes = [
  { code: 400, name: 'Bad Request', description: 'The request was invalid or cannot be served' },
  { code: 401, name: 'Unauthorized', description: 'Authentication is required and has failed' },
  { code: 403, name: 'Forbidden', description: 'The request was valid but the server is refusing action' },
  { code: 404, name: 'Not Found', description: 'The requested resource could not be found' },
  { code: 429, name: 'Too Many Requests', description: 'Rate limit exceeded' },
  { code: 500, name: 'Internal Server Error', description: 'An unexpected error occurred' }
];

const navigationItems = [
  { id: 'getting-started', label: 'Getting Started', icon: Rocket },
  { id: 'authentication', label: 'Authentication', icon: Lock },
  { id: 'endpoints', label: 'Endpoints', icon: Server },
  { id: 'errors', label: 'Errors', icon: XCircle }
];

export default function APIDocs() {
  return (
    <Layout 
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group's services. Get started with our RESTful APIs for AI, IT services, and more."
      keywords="API documentation, REST API, developer tools, integration, SDK, webhooks"
    >
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services. Get started with our RESTful APIs for AI, IT services, and more." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Integrate with our powerful APIs to build amazing applications. 
                Comprehensive documentation, SDKs, and examples to get you started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#getting-started" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </a>
                <a href="#endpoints" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Endpoints
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Getting Started
                </h2>
                <p className="text-lg text-gray-600">
                  Get up and running with our API in minutes
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Get API Key</h3>
                  <p className="text-gray-600">Sign up and get your free API key from the dashboard</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Make Request</h3>
                  <p className="text-gray-600">Use our RESTful API endpoints with your preferred language</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Build & Deploy</h3>
                  <p className="text-gray-600">Integrate our services into your application</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600">
                Explore our comprehensive API reference
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {apiEndpoints.map((endpoint, index) => (
                  <motion.div
                    key={endpoint.path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <endpoint.icon className="w-6 h-6 text-blue-600 mr-3" />
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-gray-700 font-mono">{endpoint.path}</code>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{endpoint.description}</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Response Example:</h4>
                      <pre className="text-xs text-gray-600 overflow-x-auto">
                        {JSON.stringify(endpoint.response, null, 2)}
                      </pre>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Error Codes */}
        <section id="errors" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Error Codes
              </h2>
              <p className="text-lg text-gray-600">
                Common HTTP status codes and their meanings
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {errorCodes.map((error, index) => (
                  <motion.div
                    key={error.code}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        error.code >= 500 ? 'bg-red-100' : error.code >= 400 ? 'bg-yellow-100' : 'bg-green-100'
                      }`}>
                        <span className={`text-lg font-bold ${
                          error.code >= 500 ? 'text-red-600' : error.code >= 400 ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {error.code}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{error.name}</h3>
                        <p className="text-gray-600 text-sm">{error.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Integration?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Support
              </Link>
              <a href="mailto:dev@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Email Dev Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}