import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const apiEndpoints = [
  {
    name: 'Authentication',
    method: 'POST',
    endpoint: '/api/auth/login',
    description: 'Authenticate users and get access tokens',
    features: ['OAuth 2.0', 'JWT Tokens', 'Rate Limiting', 'Security Headers']
  },
  {
    name: 'User Management',
    method: 'GET',
    endpoint: '/api/users',
    description: 'Retrieve and manage user information',
    features: ['CRUD Operations', 'Pagination', 'Filtering', 'Sorting']
  },
  {
    name: 'Data Analytics',
    method: 'POST',
    endpoint: '/api/analytics',
    description: 'Submit and retrieve analytics data',
    features: ['Real-time Data', 'Historical Reports', 'Custom Metrics', 'Export Options']
  }
];

const features = [
  {
    icon: Shield,
    title: 'Secure',
    description: 'Enterprise-grade security with OAuth 2.0 and JWT authentication'
  },
  {
    icon: Zap,
    title: 'Fast',
    description: 'High-performance API with sub-100ms response times'
  },
  {
    icon: Globe,
    title: 'Global',
    description: 'Available worldwide with 99.9% uptime guarantee'
  },
  {
    icon: Database,
    title: 'Scalable',
    description: 'Handles millions of requests with auto-scaling infrastructure'
  }
];

export default function APIDocs() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's developer platform and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">API Documentation</h1>
                <p className="text-gray-600 mt-2">Developer resources and API reference</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  v2.1.0
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="sticky top-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#getting-started" className="text-blue-600 hover:text-blue-800">Getting Started</a></li>
                    <li><a href="#authentication" className="text-blue-600 hover:text-blue-800">Authentication</a></li>
                    <li><a href="#endpoints" className="text-blue-600 hover:text-blue-800">API Endpoints</a></li>
                    <li><a href="#examples" className="text-blue-600 hover:text-blue-800">Code Examples</a></li>
                    <li><a href="#support" className="text-blue-600 hover:text-blue-800">Support</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Getting Started */}
              <section id="getting-started" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
                  <p className="text-gray-600 mb-6">
                    Welcome to the Zion Tech Group API. Our RESTful API provides programmatic access to our platform's features and data.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Base URL</h3>
                    <code className="text-blue-600">https://api.ziontechgroup.com/v2</code>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="text-center p-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* API Endpoints */}
              <section id="endpoints" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h2>
                  
                  <div className="space-y-6">
                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                              endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-gray-900 font-mono">{endpoint.endpoint}</code>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{endpoint.name}</h3>
                        <p className="text-gray-600 mb-4">{endpoint.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {endpoint.features.map((feature, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Code Examples */}
              <section id="examples" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Examples</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">JavaScript/Node.js</h3>
                      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <pre><code>{`const response = await fetch('https://api.ziontechgroup.com/v2/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'your-email@example.com',
    password: 'your-password'
  })
});

const data = await response.json();
console.log(data);`}</code></pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Python</h3>
                      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <pre><code>{`import requests

response = requests.post(
    'https://api.ziontechgroup.com/v2/auth/login',
    json={
        'email': 'your-email@example.com',
        'password': 'your-password'
    }
)

data = response.json()
print(data)`}</code></pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Support */}
              <section id="support" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Support</h2>
                  <p className="text-gray-600 mb-6">
                    Need help with our API? Our developer support team is here to assist you.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
                      <p className="text-gray-600 mb-4">Comprehensive guides and tutorials</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        View Full Docs <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Support</h3>
                      <p className="text-gray-600 mb-4">Get help from our technical team</p>
                      <a href="/contact" className="text-blue-600 hover:text-blue-800 flex items-center">
                        Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}