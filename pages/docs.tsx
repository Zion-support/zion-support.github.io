import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, Code, CheckCircle, ArrowRight, FileText, Clock, Users, Zap } from 'lucide-react';
import Layout from '../components/Layout';

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
      { title: 'Authentication', description: 'API authentication and security', time: '10 min read' },
      { title: 'Endpoints', description: 'All available API endpoints', time: '30 min read' },
      { title: 'Rate Limits', description: 'Understanding rate limits and quotas', time: '5 min read' },
      { title: 'Error Handling', description: 'Common errors and how to handle them', time: '15 min read' }
    ]
  },
  {
    title: 'Best Practices',
    description: 'Recommended practices and guidelines',
    icon: CheckCircle,
    color: 'from-purple-500 to-pink-500',
    docs: [
      { title: 'Security Guidelines', description: 'Keep your applications secure', time: '20 min read' },
      { title: 'Performance Tips', description: 'Optimize your application performance', time: '25 min read' },
      { title: 'Code Standards', description: 'Maintain consistent code quality', time: '15 min read' },
      { title: 'Testing Strategies', description: 'Effective testing approaches', time: '30 min read' }
    ]
  }
];

export default function DocsPage() {
  return (
    <Layout>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI, IT, and micro SaaS services." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
                Everything you need to get started with our AI, IT, and micro SaaS services. 
                From quick start guides to advanced API documentation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {category.docs.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 text-blue-400 mr-3" />
                          <div>
                            <h4 className="text-white font-medium">{doc.title}</h4>
                            <p className="text-sm text-gray-400">{doc.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {doc.time}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team is here to help you get the most out of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </Link>
                <Link href="/help" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Help Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}