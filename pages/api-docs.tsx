import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Key, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Settings } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const apiCategories = [
  {
    title: "Authentication",
    description: "Secure API authentication and authorization",
    icon: Key,
    endpoints: [
      { method: "POST", path: "/auth/login", description: "User login" },
      { method: "POST", path: "/auth/refresh", description: "Refresh token" },
      { method: "POST", path: "/auth/logout", description: "User logout" },
      { method: "GET", path: "/auth/me", description: "Get current user" }
    ],
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "AI Services",
    description: "Artificial intelligence and machine learning APIs",
    icon: Zap,
    endpoints: [
      { method: "POST", path: "/ai/chat", description: "Chat completion" },
      { method: "POST", path: "/ai/analyze", description: "Text analysis" },
      { method: "POST", path: "/ai/generate", description: "Content generation" },
      { method: "POST", path: "/ai/classify", description: "Text classification" }
    ],
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "Data Management",
    description: "Data storage, retrieval, and management APIs",
    icon: Shield,
    endpoints: [
      { method: "GET", path: "/data/records", description: "List records" },
      { method: "POST", path: "/data/records", description: "Create record" },
      { method: "PUT", path: "/data/records/{id}", description: "Update record" },
      { method: "DELETE", path: "/data/records/{id}", description: "Delete record" }
    ],
    color: "from-green-600 to-green-800"
  },
  {
    title: "Analytics",
    description: "Analytics and reporting APIs",
    icon: Settings,
    endpoints: [
      { method: "GET", path: "/analytics/metrics", description: "Get metrics" },
      { method: "POST", path: "/analytics/events", description: "Track event" },
      { method: "GET", path: "/analytics/reports", description: "Generate report" },
      { method: "GET", path: "/analytics/dashboard", description: "Dashboard data" }
    ],
    color: "from-orange-600 to-orange-800"
  }
];

const sdks = [
  {
    name: "JavaScript/Node.js",
    description: "Official SDK for JavaScript and Node.js applications",
    icon: "🟨",
    version: "v2.1.0",
    href: "/docs/sdks/javascript"
  },
  {
    name: "Python",
    description: "Python SDK for data science and web applications",
    icon: "🐍",
    version: "v1.8.2",
    href: "/docs/sdks/python"
  },
  {
    name: "PHP",
    description: "PHP SDK for web applications and WordPress",
    icon: "🐘",
    version: "v1.5.1",
    href: "/docs/sdks/php"
  },
  {
    name: "Java",
    description: "Java SDK for enterprise applications",
    icon: "☕",
    version: "v2.0.3",
    href: "/docs/sdks/java"
  }
];

const quickStart = [
  {
    step: "1",
    title: "Get API Key",
    description: "Sign up and get your API key from the dashboard"
  },
  {
    step: "2",
    title: "Install SDK",
    description: "Install the SDK for your preferred language"
  },
  {
    step: "3",
    title: "Make Request",
    description: "Start making API calls with authentication"
  },
  {
    step: "4",
    title: "Handle Response",
    description: "Process the response and handle errors"
  }
];

export default function ApiDocsPage() {
  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for all our services. Get started quickly with our SDKs and comprehensive guides."
      keywords="API documentation, REST API, SDK, authentication, endpoints, integration"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                API{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation with examples, SDKs, and interactive testing tools. 
                Get started in minutes with our developer-friendly APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/getting-started/quick-start" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quick Start
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get up and running with our APIs in just a few steps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {quickStart.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                API Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive API endpoints organized by functionality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:bg-indigo-50 transition-colors group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-2">
                      {category.endpoints.map((endpoint, endpointIndex) => (
                        <div key={endpointIndex} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                              endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                              endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-sm text-gray-700">{endpoint.path}</code>
                          </div>
                          <span className="text-xs text-gray-500">{endpoint.description}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Official SDKs
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Use our official SDKs to integrate with our APIs quickly and easily.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{sdk.icon}</div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {sdk.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {sdk.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Version {sdk.version}</span>
                  </div>
                  
                  <Link
                    href={sdk.href}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                    <span>View Docs</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Get your API key and start integrating with our services today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  View Full Docs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}