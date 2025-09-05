import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  ArrowRight,
  CheckCircle,
  Copy,
  Play,
  Download
} from 'lucide-react';
import SimpleLayout from '../components/SimpleLayout';

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/users",
    description: "Retrieve all users",
    parameters: [
      { name: "limit", type: "integer", required: false, description: "Number of users to return" },
      { name: "offset", type: "integer", required: false, description: "Number of users to skip" }
    ],
    example: `curl -X GET "https://api.ziontechgroup.com/v1/users?limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  {
    method: "POST",
    path: "/api/v1/users",
    description: "Create a new user",
    parameters: [
      { name: "name", type: "string", required: true, description: "User's full name" },
      { name: "email", type: "string", required: true, description: "User's email address" },
      { name: "role", type: "string", required: false, description: "User's role" }
    ],
    example: `curl -X POST "https://api.ziontechgroup.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Doe", "email": "john@example.com"}'`
  },
  {
    method: "PUT",
    path: "/api/v1/users/{id}",
    description: "Update a user",
    parameters: [
      { name: "id", type: "string", required: true, description: "User ID" },
      { name: "name", type: "string", required: false, description: "User's full name" },
      { name: "email", type: "string", required: false, description: "User's email address" }
    ],
    example: `curl -X PUT "https://api.ziontechgroup.com/v1/users/123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Smith"}'`
  },
  {
    method: "DELETE",
    path: "/api/v1/users/{id}",
    description: "Delete a user",
    parameters: [
      { name: "id", type: "string", required: true, description: "User ID" }
    ],
    example: `curl -X DELETE "https://api.ziontechgroup.com/v1/users/123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  }
];

const sdks = [
  { name: "JavaScript", version: "2.1.0", description: "Node.js and browser support" },
  { name: "Python", version: "1.8.2", description: "Python 3.6+ support" },
  { name: "PHP", version: "1.5.1", description: "PHP 7.4+ support" },
  { name: "Java", version: "2.0.0", description: "Java 8+ support" },
  { name: "Go", version: "1.2.0", description: "Go 1.16+ support" },
  { name: "Ruby", version: "1.3.0", description: "Ruby 2.7+ support" }
];

export default function ApiDocsPage() {
  return (
    <SimpleLayout
      title="API Documentation - Zion Tech Group"
      description="Complete API reference with endpoints, authentication, examples, and SDKs for developers."
      keywords="API documentation, REST API, GraphQL, SDKs, developer resources, API reference"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete API reference with endpoints, authentication, examples, and SDKs. 
                Everything you need to integrate with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#endpoints" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Endpoints
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quick Start
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get up and running with our API in minutes
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-4">
                  <span className="text-gray-400"># Install our SDK</span>
                </div>
                <div className="mb-4">
                  <span className="text-blue-400">npm</span> install ziontechgroup-api
                </div>
                <div className="mb-4">
                  <span className="text-gray-400"># Initialize the client</span>
                </div>
                <div className="mb-4">
                  <span className="text-purple-400">const</span> client = <span className="text-yellow-400">new</span> ZionTechGroupAPI({'{'}
                </div>
                <div className="ml-4 mb-4">
                  apiKey: <span className="text-green-400">'your-api-key'</span>
                </div>
                <div className="mb-4">{'}'});</div>
                <div className="mb-4">
                  <span className="text-gray-400"># Make your first request</span>
                </div>
                <div>
                  <span className="text-purple-400">const</span> users = <span className="text-purple-400">await</span> client.users.list();
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Complete reference for all available endpoints
              </p>
            </motion.div>

            <div className="space-y-8">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-600">{endpoint.description}</p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>

                  {endpoint.parameters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Name</th>
                              <th className="text-left py-2">Type</th>
                              <th className="text-left py-2">Required</th>
                              <th className="text-left py-2">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex} className="border-b">
                                <td className="py-2 font-mono">{param.name}</td>
                                <td className="py-2 text-gray-600">{param.type}</td>
                                <td className="py-2">
                                  {param.required ? (
                                    <span className="text-red-600">Yes</span>
                                  ) : (
                                    <span className="text-gray-400">No</span>
                                  )}
                                </td>
                                <td className="py-2 text-gray-600">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                    <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                      <pre>{endpoint.example}</pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SDKs & Libraries
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Official SDKs for popular programming languages
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{sdk.name}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                      v{sdk.version}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{sdk.description}</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4 inline mr-1" />
                      Download
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded hover:bg-gray-50 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Get your API key and start building amazing applications today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </SimpleLayout>
  );
}