import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
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
    name: 'Document Processing',
    method: 'POST',
    path: '/api/ai/document-processor',
    description: 'Extract and process information from documents',
    parameters: [
      { name: 'document', type: 'file', required: true, description: 'Document file to process' },
      { name: 'type', type: 'string', required: true, description: 'Document type (pdf, image, text)' }
    ],
    response: {
      status: 200,
      data: {
        extracted_text: 'string',
        entities: 'array',
        confidence: 'number'
      }
    }
  }
];

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
    description: 'Machine learning and AI model endpoints',
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
      
      <Layout 
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation for all Zion Tech Group services. Integrate with our AI, IT, and micro SaaS solutions seamlessly."
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  API <span className="text-blue-600">Documentation</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Comprehensive API documentation for all Zion Tech Group services. 
                  Integrate with our AI, IT, and micro SaaS solutions seamlessly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get API Access
                  </Link>
                  <Link 
                    href="/docs" 
                    className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Full Docs
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* API Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Available APIs
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our APIs are designed for developers, by developers. Easy to integrate, 
                  well-documented, and built for scale.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Code className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{feature.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{feature.method}</span>
                          <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                            {feature.path}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Parameters</h4>
                        <div className="space-y-2">
                          {feature.parameters.map((param, paramIndex) => (
                            <div key={paramIndex} className="flex items-center justify-between text-sm">
                              <span className="font-mono">{param.name}</span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {param.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Response</h4>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <pre className="text-sm font-mono">
                            {JSON.stringify(feature.response, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* API Endpoints Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  API Endpoints
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our comprehensive API endpoints for different services and integrations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {apiEndpoints.map((endpoint, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <endpoint.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{endpoint.title}</h3>
                        <p className="text-sm text-gray-600">{endpoint.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Methods</h4>
                        <div className="flex flex-wrap gap-2">
                          {endpoint.methods.map((method, methodIndex) => (
                            <span 
                              key={methodIndex}
                              className={`px-2 py-1 rounded text-xs font-mono ${
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
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Endpoint</h4>
                        <code className="text-sm font-mono bg-gray-200 px-2 py-1 rounded">
                          {endpoint.endpoint}
                        </code>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-blue-600">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get API access and start building amazing applications with our services.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/docs" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Documentation
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}