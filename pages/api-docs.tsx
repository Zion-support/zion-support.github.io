import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
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
  Cloud 
} from 'lucide-react';

const apiEndpoints = [
  {
    title: 'Authentication API',
    description: 'Secure authentication and authorization endpoints',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth'
  },
  {
    title: 'User Management',
    description: 'User profile and account management',
    icon: Globe,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    endpoint: '/api/users'
  },
  {
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

const features = [
  {
    icon: Shield,
    title: 'Secure',
    description: 'Enterprise-grade security with OAuth 2.0 and JWT tokens'
  },
  {
    icon: Zap,
    title: 'Fast',
    description: 'High-performance APIs with sub-100ms response times'
  },
  {
    icon: CheckCircle,
    title: 'Reliable',
    description: '99.9% uptime with comprehensive error handling'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Clear documentation and SDKs for all major languages'
  }
];

export default function APIDocs() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services and solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
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
    </div>
        {/* Code Examples */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for all our services and solutions. 
                Build amazing applications with our powerful APIs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get API Key
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Examples
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our APIs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful features and excellent documentation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for all services and solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <endpoint.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {endpoint.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-mono">
                        {endpoint.endpoint}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {endpoint.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.methods.map((method, methodIndex) => (
                      <span
                        key={methodIndex}
                        className={`px-2 py-1 rounded text-xs font-semibold ${
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
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
                Get started with our APIs in minutes with our comprehensive quick start guide.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                <div className="text-green-400 mb-2"># Install our SDK</div>
                <div className="text-blue-400 mb-4">npm install zion-tech-sdk</div>
                
                <div className="text-green-400 mb-2"># Initialize the client</div>
                <div className="text-white mb-4">const client = new ZionTechClient('your-api-key');</div>
                
                <div className="text-green-400 mb-2"># Make your first API call</div>
                <div className="text-white">const services = await client.services.list();</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands of developers building amazing applications with our APIs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get API Key
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}