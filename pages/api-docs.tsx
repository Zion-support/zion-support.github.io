import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Code, 
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Zap,
  Database
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

export default function ApiDocs() {
  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/auth/verify",
      description: "Verify authentication token",
      category: "Authentication",
      parameters: [
        { name: "token", type: "string", required: true, description: "JWT authentication token" }
      ],
      response: {
        status: 200,
        data: {
          valid: true,
          user: { id: "123", email: "user@example.com" }
        }
      }
    },
    {
      method: "POST",
      endpoint: "/api/v1/ai/analyze",
      description: "Analyze text using AI models",
      category: "AI Services",
      parameters: [
        { name: "text", type: "string", required: true, description: "Text to analyze" },
        { name: "model", type: "string", required: false, description: "AI model to use" }
      ],
      response: {
        status: 200,
        data: {
          sentiment: "positive",
          confidence: 0.95,
          keywords: ["positive", "excellent", "great"]
        }
      }
    },
    {
      method: "GET",
      endpoint: "/api/v1/cloud/status",
      description: "Get cloud infrastructure status",
      category: "Cloud Services",
      parameters: [],
      response: {
        status: 200,
        data: {
          status: "healthy",
          uptime: "99.9%",
          services: ["api", "database", "storage"]
        }
      }
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services and integrations." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Integrate with our powerful APIs to build amazing applications and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">API Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our RESTful APIs provide secure, scalable access to all our services including AI, cloud computing, and micro SaaS solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure</h3>
              <p className="text-gray-600">OAuth 2.0 authentication and HTTPS encryption</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast</h3>
              <p className="text-gray-600">Low latency responses with global CDN</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable</h3>
              <p className="text-gray-600">Handle millions of requests with auto-scaling</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for all services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono">{endpoint.endpoint}</code>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {endpoint.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                
                {endpoint.parameters.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Parameters:</h4>
                    <div className="space-y-2">
                      {endpoint.parameters.map((param, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-sm">
                          <code className="font-mono bg-gray-100 px-2 py-1 rounded">{param.name}</code>
                          <span className="text-gray-600">{param.type}</span>
                          {param.required && <span className="text-red-600">Required</span>}
                          <span className="text-gray-500">{param.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold mb-2">Response:</h4>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get your API key and start building amazing applications with our powerful APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get API Key
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}