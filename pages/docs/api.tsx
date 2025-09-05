import React from 'react';
import Layout from '../../components/Layout';

export default function ApiDocs() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for integrating with our services and platforms."
      keywords="API, documentation, integration, developers, REST API, GraphQL"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Integrate with our powerful APIs to build amazing applications and services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}