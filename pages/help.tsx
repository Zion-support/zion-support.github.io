import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

import Layout from '../components/Layout';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics and get up and running quickly',
    icon: HelpCircle,
    color: 'blue',
    articles: [
      {
        title: 'Welcome to Zion Tech Group',
        description: 'Introduction to our platform and services',
        readTime: '3 min read',
        type: 'Getting Started'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Step-by-step account setup guide',
        readTime: '5 min read',
        type: 'Setup'
      },
      {
        title: 'First Steps',
        description: 'What to do after creating your account',
        readTime: '4 min read',
        type: 'Tutorial'
      }
    ]
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Everything about our AI and machine learning solutions',
    icon: HelpCircle,
    color: 'green',
    articles: [
      {
        title: 'AI Email Responder',
        description: 'How to use our AI-powered email response system',
        readTime: '7 min read',
        type: 'Feature Guide'
      },
      {
        title: 'Predictive Analytics',
        description: 'Understanding and using predictive analytics',
        readTime: '10 min read',
        type: 'Advanced'
      },
      {
        title: 'AI Integration',
        description: 'Integrating AI services into your workflow',
        readTime: '8 min read',
        type: 'Integration'
      }
    ]
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Technical issues and troubleshooting',
    icon: FileText,
    color: 'purple',
    articles: [
      {
        title: 'API Documentation',
        description: 'Complete API reference and examples',
        readTime: '15 min read',
        type: 'Documentation'
      },
      {
        title: 'System Requirements',
        description: 'Hardware and software requirements for our solutions',
        readTime: '4 min read',
        type: 'Requirements'
      },
      {
        title: 'Troubleshooting',
        description: 'Common issues and their solutions',
        readTime: '6 min read',
        type: 'Troubleshooting'
      }
    ]
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services" />
        <meta name="keywords" content="help, support, documentation, tutorials, FAQ" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Find answers, get support, and learn how to make the most of our services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      category.color === 'blue' ? 'bg-blue-100' :
                      category.color === 'green' ? 'bg-green-100' :
                      category.color === 'purple' ? 'bg-purple-100' :
                      'bg-gray-100'
                    }`}>
                      <category.icon className={`w-6 h-6 ${
                        category.color === 'blue' ? 'text-blue-600' :
                        category.color === 'green' ? 'text-green-600' :
                        category.color === 'purple' ? 'text-purple-600' :
                        'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <Link
                        key={articleIndex}
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {article.title}
                          </div>
                          <div className="text-sm text-gray-600">{article.description}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Quick Links
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Documentation',
                  description: 'Comprehensive guides and API references',
                  icon: BookOpen,
                  href: '/docs'
                },
                {
                  title: 'Video Tutorials',
                  description: 'Step-by-step video guides',
                  icon: Video,
                  href: '/tutorials'
                },
                {
                  title: 'Community Forum',
                  description: 'Connect with other users and experts',
                  icon: MessageCircle,
                  href: '/community'
                },
                {
                  title: 'Contact Support',
                  description: 'Get direct help from our team',
                  icon: Phone,
                  href: '/contact'
                }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <link.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{link.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}