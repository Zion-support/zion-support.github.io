import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Code, 
  ArrowRight,
<<<<<<< HEAD
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
  Book,
=======
  Book,
  Zap,
  Shield,
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
  Globe,
  Database,
  Server,
  Lock,
<<<<<<< HEAD
=======
  CheckCircle,
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
  Brain,
  Cloud
} from 'lucide-react';

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

=======
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
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
    endpoint: '/api/saas'
  },
  {
    title: 'IT Services API',
    description: 'Infrastructure and IT service management',
    icon: Server,
    methods: ['POST', 'GET', 'PUT'],
    endpoint: '/api/it-services'
  }
];

export default function APIDocs() {
  return (
<<<<<<< HEAD
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions."
      keywords="API documentation, developer resources, REST API, integration, SDK"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation for integrating with Zion Tech Group's powerful services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Get API Key
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
                >
                  View Docs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available APIs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive suite of APIs designed for modern applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start building with our powerful APIs today. Get your API key and begin integrating our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get API Key
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
=======
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
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"                  initial={{ opacity: 0, y: 30 }}
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
                  </div>

                  <p className="text-gray-600 mb-4">{endpoint.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Supported Methods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.methods.map((method, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

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
    </div>  );
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
}