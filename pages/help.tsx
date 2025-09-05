import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Phone, 
  Mail,
  HelpCircle,
  Settings,
  Shield,
  Zap,
  Globe,
  FileText,
  Video,
  Download,
  Star,
  TrendingUp
} from 'lucide-react';

const helpCategories = [
  {
    name: 'Getting Started',
    icon: BookOpen,
    description: 'Learn the basics and get up and running quickly',
    articles: [
      {
        title: 'Welcome to Zion Tech Group',
        description: 'Introduction to our platform and services',
        type: 'Guide',
        readTime: '5 min',
        difficulty: 'Beginner'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Complete guide to account setup and configuration',
        type: 'Tutorial',
        readTime: '10 min',
        difficulty: 'Beginner'
      },
      {
        title: 'First Steps with Our Services',
        description: 'Quick start guide for new users',
        type: 'Guide',
        readTime: '8 min',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    name: 'Account Management',
    icon: Settings,
    description: 'Manage your account settings and preferences',
    articles: [
      {
        title: 'Account Settings',
        description: 'Manage your account preferences and settings',
        type: 'Guide',
        readTime: '6 min',
        difficulty: 'Beginner'
      },
      {
        title: 'Billing and Payments',
        description: 'Understanding billing cycles and payment methods',
        type: 'Guide',
        readTime: '7 min',
        difficulty: 'Beginner'
      },
      {
        title: 'User Permissions',
        description: 'Setting up team members and access levels',
        type: 'Tutorial',
        readTime: '12 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    name: 'Services & Features',
    icon: Zap,
    description: 'Learn about our services and how to use them',
    articles: [
      {
        title: 'AI Services Overview',
        description: 'Complete guide to our AI solutions',
        type: 'Guide',
        readTime: '15 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Cloud Migration Guide',
        description: 'Step-by-step cloud migration process',
        type: 'Tutorial',
        readTime: '20 min',
        difficulty: 'Advanced'
      },
      {
        title: 'Micro SaaS Development',
        description: 'Building custom micro SaaS applications',
        type: 'Guide',
        readTime: '18 min',
        difficulty: 'Advanced'
      }
    ]
  },
  {
    name: 'Security & Compliance',
    icon: Shield,
    description: 'Security best practices and compliance information',
    articles: [
      {
        title: 'Security Best Practices',
        description: 'Essential security guidelines for your projects',
        type: 'Guide',
        readTime: '12 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Data Privacy & GDPR',
        description: 'Understanding data privacy and GDPR compliance',
        type: 'Guide',
        readTime: '10 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Access Control Setup',
        description: 'Configuring user access and permissions',
        type: 'Tutorial',
        readTime: '14 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    name: 'Troubleshooting',
    icon: HelpCircle,
    description: 'Common issues and how to resolve them',
    articles: [
      {
        title: 'Common Login Issues',
        description: 'Troubleshooting login and authentication problems',
        type: 'Guide',
        readTime: '8 min',
        difficulty: 'Beginner'
      },
      {
        title: 'API Error Codes',
        description: 'Understanding and resolving API errors',
        type: 'Reference',
        readTime: '6 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Performance Optimization',
        description: 'Tips for improving application performance',
        type: 'Guide',
        readTime: '16 min',
        difficulty: 'Advanced'
      }
    ]
  },
  {
    name: 'API Documentation',
    icon: Settings,
    description: 'Technical documentation and API references',
    articles: [
      {
        title: 'API Quick Start',
        description: 'Get started with our REST API',
        type: 'Tutorial',
        readTime: '12 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Authentication Guide',
        description: 'API authentication methods and examples',
        type: 'Guide',
        readTime: '10 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'SDK Documentation',
        description: 'Software development kits and libraries',
        type: 'Reference',
        readTime: '15 min',
        difficulty: 'Advanced'
      }
    ]
  }
];

const popularArticles = [
  {
    title: 'Getting Started with AI Services',
    views: 1250,
    rating: 4.8,
    category: 'AI Services'
  },
  {
    title: 'Cloud Migration Checklist',
    views: 980,
    rating: 4.9,
    category: 'Cloud Services'
  },
  {
    title: 'API Authentication Guide',
    views: 850,
    rating: 4.7,
    category: 'API Documentation'
  },
  {
    title: 'Security Best Practices',
    views: 720,
    rating: 4.9,
    category: 'Security'
  }
];

const supportChannels = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7',
    responseTime: '2-5 minutes',
    color: 'blue'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    color: 'green'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    availability: '24/7',
    responseTime: '2-4 hours',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other users and share knowledge',
    availability: '24/7',
    responseTime: 'Varies',
    color: 'orange'
  }
];

export default function HelpPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Find answers, learn best practices, and get the most out of our services. 
                Our comprehensive help center has everything you need to succeed.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search help articles, guides, and tutorials..."
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the information you need organized by topic and difficulty level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{article.title}</h4>
                            <div className="flex items-center mt-1">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {article.difficulty}
                              </span>
                              <span className="text-xs text-gray-500 ml-2">{article.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href={`/help/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
                    >
                      View All Articles
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Most viewed and highly rated articles from our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">{article.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span>{article.views} views</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help 
                you succeed with our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <motion.div
                    key={channel.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      channel.color === 'blue' ? 'bg-blue-100' :
                      channel.color === 'green' ? 'bg-green-100' :
                      channel.color === 'purple' ? 'bg-purple-100' :
                      'bg-orange-100'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        channel.color === 'blue' ? 'text-blue-600' :
                        channel.color === 'green' ? 'text-green-600' :
                        channel.color === 'purple' ? 'text-purple-600' :
                        'text-orange-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 mb-4">{channel.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{channel.availability}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Zap className="w-4 h-4 mr-2" />
                        <span>{channel.responseTime}</span>
                      </div>
                    </div>
                    
                    <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      channel.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                      channel.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700' :
                      channel.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700' :
                      'bg-orange-600 text-white hover:bg-orange-700'
                    }`}>
                      {channel.title === 'Live Chat' ? 'Start Chat' :
                       channel.title === 'Phone Support' ? 'Call Now' :
                       channel.title === 'Email Support' ? 'Send Email' :
                       'Join Forum'}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our expert support team is ready to help you succeed. 
                Contact us today for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Support
                </Link>
                <Link
                  href="/faq"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}