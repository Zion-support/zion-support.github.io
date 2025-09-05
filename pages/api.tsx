import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Copy,
  ExternalLink,
  Key,
  Globe,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
  Code,
  Database,
  Server,
  Cpu
} from 'lucide-react';
import Layout from '../components/Layout';

const apiFeatures = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design',
    icon: Globe
  },
  {
    title: 'Authentication',
    description: 'Secure API key authentication',
    icon: Key
  },
  {
    title: 'Rate Limiting',
    description: 'Built-in rate limiting protection',
    icon: Shield
  },
  {
    title: 'Real-time Updates',
    description: 'WebSocket support for real-time data',
    icon: Zap
  }
];

const apiEndpoints = [
  {
    method: 'GET',
    endpoint: '/api/v1/ai-services',
    description: 'Retrieve all AI services',
    parameters: ['limit', 'offset', 'category'],
    response: 'Array of AI service objects'
  },
  {
    method: 'POST',
    endpoint: '/api/v1/ai-services',
    description: 'Create a new AI service request',
    parameters: ['service_type', 'requirements', 'budget'],
    response: 'Service request object'
  },
  {
    method: 'GET',
    endpoint: '/api/v1/it-services',
    description: 'Retrieve all IT services',
    parameters: ['limit', 'offset', 'category'],
    response: 'Array of IT service objects'
  },
  {
    method: 'GET',
    endpoint: '/api/v1/micro-saas',
    description: 'Retrieve all Micro SaaS products',
    parameters: ['limit', 'offset', 'category'],
    response: 'Array of Micro SaaS product objects'
  }
];

export default function API() {
  return (
    <Layout
      title="API - Zion Tech Group"
      description="Complete API documentation and integration guides for all our services"
      keywords="API, REST API, developer resources, integration guides, API documentation"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Comprehensive API documentation and integration guides for all our services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center"
                >
                  Get API Key
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              API Endpoints
            </h2>
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                      <p className="text-sm text-gray-600">{endpoint.parameters.join(', ')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                      <p className="text-sm text-gray-600">{endpoint.response}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}