import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  CheckCircle, 
  Clock, 
  Search,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const categories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and setup instructions',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    docs: [
      { title: 'Quick Start Guide', description: 'Get up and running in minutes', time: '5 min read' },
      { title: 'Installation Guide', description: 'Step-by-step installation instructions', time: '10 min read' },
      { title: 'Configuration', description: 'Configure your environment', time: '15 min read' },
      { title: 'First Project', description: 'Create your first project', time: '20 min read' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and endpoints',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    docs: [
      { title: 'Authentication', description: 'API authentication methods', time: '8 min read' },
      { title: 'Endpoints', description: 'Complete API endpoint reference', time: '30 min read' },
      { title: 'Rate Limits', description: 'Understanding API rate limits', time: '5 min read' },
      { title: 'Error Codes', description: 'API error codes and handling', time: '10 min read' }
    ]
  },
  {
    title: 'Tutorials',
    description: 'Step-by-step tutorials and examples',
    icon: FileText,
    color: 'from-purple-500 to-pink-500',
    docs: [
      { title: 'Building a Web App', description: 'Complete web application tutorial', time: '45 min read' },
      { title: 'Database Integration', description: 'Connect and manage databases', time: '25 min read' },
      { title: 'Authentication Setup', description: 'Implement user authentication', time: '20 min read' },
      { title: 'Deployment Guide', description: 'Deploy your application', time: '15 min read' }
    ]
  },
  {
    title: 'Best Practices',
    description: 'Recommended practices and guidelines',
    icon: CheckCircle,
    color: 'from-orange-500 to-red-500',
    docs: [
      { title: 'Security Guidelines', description: 'Essential security practices', time: '20 min read' },
      { title: 'Performance Optimization', description: 'Optimize your application', time: '25 min read' },
      { title: 'Code Standards', description: 'Coding best practices', time: '15 min read' },
      { title: 'Testing Strategies', description: 'Comprehensive testing approaches', time: '30 min read' }
    ]
  }
];

const popularDocs = [
  { title: 'Quick Start Guide', description: 'Get started with our platform in minutes', category: 'Getting Started', views: '2.5k' },
  { title: 'API Authentication', description: 'Learn how to authenticate with our API', category: 'API Reference', views: '1.8k' },
  { title: 'Building a Web App', description: 'Complete tutorial for web application development', category: 'Tutorials', views: '3.2k' },
  { title: 'Security Guidelines', description: 'Essential security practices for your applications', category: 'Best Practices', views: '1.5k' }
];

export default function DocsPage() {
  return (
    <>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's services, APIs, and development guides. Get started quickly with our detailed tutorials and references." />
        <meta name="keywords" content="documentation, API reference, tutorials, guides, development, Zion Tech Group" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Documentation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  & Resources
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Everything you need to get started with our platform, from quick start guides 
                to comprehensive API references and best practices.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Docs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Documentation
              </h2>
              <p className="text-gray-600">
                Most viewed and helpful documentation articles
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-3">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {doc.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {doc.views} views
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive documentation organized by category to find exactly what you need.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mr-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.docs.map((doc, docIndex) => (
                      <motion.div
                        key={doc.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: docIndex * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {doc.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {doc.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {doc.time}
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our support team is here to help you find the information you need or answer any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Request Documentation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}