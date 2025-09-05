import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  MessageSquare, 
  Phone, 
  Mail, 
  FileText, 
  Download,
  ExternalLink,
  ChevronRight,
  Clock,
  User,
  Tag
} from 'lucide-react';
import Layout from '../components/Layout';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to Zion Tech Group? Start here to learn the basics.',
    icon: BookOpen,
    color: 'blue',
    articles: [
      {
        title: 'Welcome to Zion Tech Group',
        description: 'Learn about our platform and how to get started',
        readTime: '5 min read',
        type: 'Guide'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Step-by-step guide to configure your account',
        readTime: '3 min read',
        type: 'Tutorial'
      },
      {
        title: 'Understanding Our Services',
        description: 'Overview of all available services and solutions',
        readTime: '7 min read',
        type: 'Overview'
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
        title: 'AI Implementation Guide',
        description: 'How to implement AI solutions in your business',
        readTime: '10 min read',
        type: 'Guide'
      },
      {
        title: 'Machine Learning Models',
        description: 'Understanding different ML models and their applications',
        readTime: '8 min read',
        type: 'Technical'
      },
      {
        title: 'AI Best Practices',
        description: 'Tips and best practices for AI development',
        readTime: '6 min read',
        type: 'Best Practice'
      }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure, migration, and management help.',
    icon: HelpCircle,
    color: 'purple',
    articles: [
      {
        title: 'Cloud Migration Checklist',
        description: 'Complete checklist for migrating to the cloud',
        readTime: '12 min read',
        type: 'Checklist'
      },
      {
        title: 'AWS vs Azure vs Google Cloud',
        description: 'Comparison of major cloud providers',
        readTime: '9 min read',
        type: 'Comparison'
      },
      {
        title: 'Cloud Security Best Practices',
        description: 'Essential security practices for cloud environments',
        readTime: '7 min read',
        type: 'Security'
      }
    ]
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Technical issues, troubleshooting, and advanced topics.',
    icon: HelpCircle,
    color: 'orange',
    articles: [
      {
        title: 'Common Technical Issues',
        description: 'Solutions to frequently encountered problems',
        readTime: '5 min read',
        type: 'Troubleshooting'
      },
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
      }
    ]
  }
];

const quickLinks = [
  {
    title: 'API Documentation',
    description: 'Complete API reference',
    href: '/api-docs',
    icon: FileText,
    color: 'blue'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    href: '/tutorials',
    icon: Video,
    color: 'green'
  },
  {
    title: 'Status Page',
    description: 'Check system status',
    href: '/status',
    icon: Clock,
    color: 'orange'
  },
  {
    title: 'Contact Support',
    description: 'Get help from our team',
    href: '/contact',
    icon: MessageSquare,
    color: 'purple'
  }
];

const supportChannels = [
  {
    title: 'Email Support',
    description: 'Get detailed help via email',
    contact: 'support@ziontechgroup.com',
    responseTime: 'Within 24 hours',
    icon: Mail,
    color: 'blue'
  },
  {
    title: 'Phone Support',
    description: 'Speak with our experts',
    contact: '+1 302 464 0950',
    responseTime: 'Immediate',
    icon: Phone,
    color: 'green'
  },
  {
    title: 'Live Chat',
    description: 'Get instant help online',
    contact: 'Available 24/7',
    responseTime: 'Immediate',
    icon: MessageSquare,
    color: 'purple'
  }
];

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's services. Find documentation, tutorials, and contact our support team." />
        <meta name="keywords" content="help center, support, documentation, tutorials, Zion Tech Group, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Help Center</h1>
              <p className="text-xl text-blue-100 mb-8">
                Find answers, get support, and learn how to make the most of our services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search help articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-gray-600">Popular resources and support channels</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center transition-colors group"
                >
                  <div className={`bg-${link.color}-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${link.color}-200 transition-colors`}>
                    <link.icon className={`w-6 h-6 text-${link.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-auto mt-2 group-hover:text-gray-600" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse Help Topics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find help articles organized by topic and service area.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className={`bg-${category.color}-600 p-6 text-white`}>
                    <category.icon className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-${category.color}-100 text-sm">{category.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className={`w-2 h-2 bg-${category.color}-600 rounded-full mt-2`}></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {article.title}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-xs text-gray-500">{article.readTime}</span>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500">{article.type}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center text-sm text-blue-600 hover:text-blue-800">
                      <span>View all articles</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Category Articles */}
        {selectedCategory && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {helpCategories.find(cat => cat.id === selectedCategory)?.title} Articles
                  </h2>
                  <p className="text-gray-600">
                    {helpCategories.find(cat => cat.id === selectedCategory)?.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {helpCategories.find(cat => cat.id === selectedCategory)?.articles.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-3">{article.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.readTime}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Tag className="w-4 h-4 mr-1" />
                              {article.type}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <Download className="w-4 h-4 text-gray-400" />
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Support Channels */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className={`bg-${channel.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className={`w-8 h-8 text-${channel.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">{channel.contact}</p>
                    <p className="text-xs text-gray-500">Response time: {channel.responseTime}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}