import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { BookOpen, Code, Settings, Shield, Zap, Search, ExternalLink, Clock } from 'lucide-react';

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
    description: 'Complete API documentation and examples',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    docs: [
      { title: 'Authentication', description: 'How to authenticate with our API', time: '8 min read' },
      { title: 'Endpoints', description: 'Complete list of available endpoints', time: '15 min read' },
      { title: 'Rate Limits', description: 'Understanding API rate limits', time: '5 min read' },
      { title: 'Error Handling', description: 'How to handle API errors', time: '10 min read' }
    ]
  },
  {
    title: 'AI Services',
    description: 'Documentation for our AI-powered services',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    docs: [
      { title: 'Machine Learning', description: 'ML model integration guide', time: '25 min read' },
      { title: 'Natural Language Processing', description: 'NLP service documentation', time: '20 min read' },
      { title: 'Computer Vision', description: 'Image and video processing', time: '30 min read' },
      { title: 'Predictive Analytics', description: 'Analytics and forecasting', time: '35 min read' }
    ]
  },
  {
    title: 'Security',
    description: 'Security best practices and guidelines',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    docs: [
      { title: 'Data Protection', description: 'How we protect your data', time: '12 min read' },
      { title: 'Authentication', description: 'Secure authentication methods', time: '15 min read' },
      { title: 'API Security', description: 'Securing your API calls', time: '18 min read' },
      { title: 'Compliance', description: 'GDPR and compliance guidelines', time: '20 min read' }
    ]
  }
];

const DocsPage = () => {
  return (
    <Layout
      title="Documentation - Zion Tech Group"
      description="Complete documentation for our AI services, APIs, and development tools. Get started quickly with our comprehensive guides."
      keywords="documentation, API, guides, tutorials, AI services, development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to get started with our AI services and APIs.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse by Category</h2>
                <p className="text-xl text-gray-600">
                  Find the information you need organized by topic.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="space-y-2">
                        {category.docs.slice(0, 3).map((doc, docIndex) => (
                          <div key={docIndex} className="flex items-center justify-between text-sm">
                            <span className="text-gray-700">{doc.title}</span>
                            <div className="flex items-center text-gray-500">
                              <Clock className="w-3 h-3 mr-1" />
                              <span>{doc.time}</span>
                            </div>
                          </div>
                        ))}
                        {category.docs.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{category.docs.length - 3} more articles
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Links</h2>
                <p className="text-xl text-gray-600">
                  Popular documentation sections to get you started quickly.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'API Quick Start', description: 'Get up and running with our API in 5 minutes', href: '/docs/api-quick-start' },
                  { title: 'Authentication Guide', description: 'Learn how to authenticate with our services', href: '/docs/authentication' },
                  { title: 'SDK Installation', description: 'Install and configure our SDKs', href: '/docs/sdk-installation' },
                  { title: 'Webhook Setup', description: 'Configure webhooks for real-time updates', href: '/docs/webhooks' },
                  { title: 'Error Codes', description: 'Complete reference of error codes and solutions', href: '/docs/error-codes' },
                  { title: 'Rate Limits', description: 'Understanding and managing API rate limits', href: '/docs/rate-limits' }
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <Link
                      href={link.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Need Help?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Support
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/help"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Help Center
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;