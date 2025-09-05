import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Globe,
  Users,
  Settings
} from 'lucide-react';

const apiFeatures = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee',
    features: ['JWT Authentication', 'Rate Limiting', 'SSL Encryption', 'Data Validation']
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast responses with global CDN and caching',
    features: ['Global CDN', 'Response Caching', 'Compression', 'Load Balancing']
  },
  {
    icon: BookOpen,
    title: 'Developer Friendly',
    description: 'Comprehensive documentation and SDKs for easy integration',
    features: ['REST API', 'GraphQL', 'Webhooks', 'SDKs']
  },
  {
    icon: Terminal,
    title: 'Easy Integration',
    description: 'Simple endpoints with clear error messages and examples',
    features: ['RESTful Design', 'JSON Responses', 'Error Handling', 'Testing Tools']
  }
];

const endpoints = [
  {
    name: 'Authentication',
    method: 'POST',
    url: '/api/auth/login',
    description: 'Authenticate users and get access tokens'
  },
  {
    name: 'Get Services',
    method: 'GET',
    url: '/api/services',
    description: 'Retrieve all available services'
  },
  {
    name: 'Create Contact',
    method: 'POST',
    url: '/api/contact',
    description: 'Submit contact forms and inquiries'
  },
  {
    name: 'Get Analytics',
    method: 'GET',
    url: '/api/analytics',
    description: 'Retrieve usage analytics and metrics'
  }
];

export default function APIPage() {
  return (
    <>
      <Head>
        <title>API Services | Zion Tech Group</title>
        <meta name="description" content="Powerful API services for seamless integration. Build amazing applications with our comprehensive API platform." />
        <meta name="keywords" content="API services, REST API, GraphQL, webhooks, integration, developer tools" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Powerful API services for seamless integration. Build amazing applications 
                with our comprehensive API platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#features"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Explore Features
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our API platform is designed for developers, by developers. 
                Built with modern standards and best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.features.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Endpoints Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints and learn how to integrate with our services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {endpoint.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {endpoint.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {endpoint.method}
                    </span>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm">
                    {endpoint.url}
                  </div>
                </motion.div>
              ))}
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
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start building amazing applications with our powerful API platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get API Key
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}