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
  Clock
} from 'lucide-react';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to our platform? Start here.',
    icon: HelpCircle,
    color: 'blue',
    articles: [
      {
        title: 'Understanding Our Services',
        description: 'Overview of all available services and solutions',
        readTime: '7 min read',
        type: 'Overview'
      },
      {
        title: 'Account Setup',
        description: 'Step-by-step guide to setting up your account',
        readTime: '5 min read',
        type: 'Setup'
      },
      {
        title: 'First Steps',
        description: 'Getting started with your first project',
        readTime: '10 min read',
        type: 'Tutorial'
      }
    ]
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Everything about our AI and machine learning solutions.',
    icon: HelpCircle,
    color: 'green',
    articles: [
      {
        title: 'AI Email Responder Setup',
        description: 'Configure and customize your AI email responder',
        readTime: '15 min read',
        type: 'Setup'
      },
      {
        title: 'Predictive Analytics Guide',
        description: 'Learn how to use our predictive analytics features',
        readTime: '20 min read',
        type: 'Guide'
      },
      {
        title: 'Document Processing',
        description: 'Process and analyze documents with AI',
        readTime: '12 min read',
        type: 'Tutorial'
      }
    ]
  },
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Infrastructure and IT management solutions.',
    icon: FileText,
    color: 'purple',
    articles: [
      {
        title: 'Cloud Infrastructure Setup',
        description: 'Set up and configure your cloud infrastructure',
        readTime: '25 min read',
        type: 'Setup'
      },
      {
        title: 'Cybersecurity Configuration',
        description: 'Secure your systems with our cybersecurity tools',
        readTime: '18 min read',
        type: 'Security'
      },
      {
        title: 'Network Management',
        description: 'Manage and monitor your network infrastructure',
        readTime: '15 min read',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'micro-saas',
    title: 'Micro SaaS',
    description: 'Small business and startup solutions.',
    icon: BookOpen,
    color: 'orange',
    articles: [
      {
        title: 'Project Management Tools',
        description: 'Organize and track your projects effectively',
        readTime: '10 min read',
        type: 'Tutorial'
      },
      {
        title: 'Customer Relationship Management',
        description: 'Manage customer relationships and sales pipeline',
        readTime: '12 min read',
        type: 'Guide'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Monitor your business metrics and KPIs',
        readTime: '8 min read',
        type: 'Overview'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions.',
    icon: MessageCircle,
    color: 'red',
    articles: [
      {
        title: 'Common Login Issues',
        description: 'Resolve authentication and access problems',
        readTime: '5 min read',
        type: 'Troubleshooting'
      },
      {
        title: 'API Integration Problems',
        description: 'Fix common API integration issues',
        readTime: '10 min read',
        type: 'Technical'
      },
      {
        title: 'Performance Optimization',
        description: 'Improve system performance and speed',
        readTime: '15 min read',
        type: 'Optimization'
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Support',
    description: 'Payment, billing, and customer support.',
    icon: Phone,
    color: 'indigo',
    articles: [
      {
        title: 'Billing Information',
        description: 'Understand our pricing and billing structure',
        readTime: '8 min read',
        type: 'Billing'
      },
      {
        title: 'Payment Methods',
        description: 'Add and manage payment methods',
        readTime: '5 min read',
        type: 'Setup'
      },
      {
        title: 'System Requirements',
        description: 'Hardware and software requirements for our solutions',
        readTime: '4 min read',
        type: 'Requirements'
      }
    ]
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedArticle, setExpandedArticle] = useState(null);

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find answers, tutorials, and support resources for our AI, IT, and micro SaaS solutions." />
        <meta name="keywords" content="help center, support, documentation, tutorials, FAQ, Zion Tech Group" />
        <meta property="og:title" content="Help Center - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive help and support resources for all our services." />
        <meta property="og:url" content="https://ziontechgroup.com/help" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers, tutorials, and support resources for all our services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200">24/7 Support Available</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-blue-300"><MessageCircle className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-300"><Phone className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse Help Topics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the information you need quickly and easily
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${
                        category.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                        category.color === 'green' ? 'from-green-500 to-teal-500' :
                        category.color === 'purple' ? 'from-purple-500 to-pink-500' :
                        category.color === 'orange' ? 'from-orange-500 to-red-500' :
                        category.color === 'red' ? 'from-red-500 to-pink-500' :
                        'from-indigo-500 to-purple-500'
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                        selectedCategory === index ? 'rotate-180' : ''
                      }`} />
                    </div>

                    <AnimatePresence>
                      {selectedCategory === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-2"
                        >
                          {category.articles.map((article, articleIndex) => (
                            <div
                              key={articleIndex}
                              className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedArticle(expandedArticle === `${index}-${articleIndex}` ? null : `${index}-${articleIndex}`);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-gray-900">{article.title}</h4>
                                  <p className="text-sm text-gray-600">{article.description}</p>
                                  <div className="flex items-center mt-1 text-xs text-gray-500">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {article.readTime}
                                    <span className="mx-2">•</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                                      {article.type}
                                    </span>
                                  </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our support team is here to help you 24/7. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}