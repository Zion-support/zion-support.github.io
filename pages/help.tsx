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
  ChevronRight
} from 'lucide-react';
import Layout from '../components/Layout';

const helpCategories = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    color: 'from-blue-600 to-purple-600',
    articles: [
      {
        title: 'How to create an account',
        description: 'Step-by-step guide to setting up your account',
        readTime: '2 min',
        type: 'Guide'
      },
      {
        title: 'First project setup',
        description: 'Learn how to create your first AI project',
        readTime: '5 min',
        type: 'Tutorial'
      },
      {
        title: 'API key management',
        description: 'How to generate and manage your API keys',
        readTime: '3 min',
        type: 'Guide'
      }
    ]
  },
  {
    title: 'AI Services',
    icon: HelpCircle,
    color: 'from-green-600 to-blue-600',
    articles: [
      {
        title: 'AI model selection',
        description: 'Choose the right AI model for your use case',
        readTime: '4 min',
        type: 'Guide'
      },
      {
        title: 'Text analysis API',
        description: 'Complete guide to using our text analysis API',
        readTime: '8 min',
        type: 'Tutorial'
      },
      {
        title: 'Image recognition setup',
        description: 'Configure image recognition for your application',
        readTime: '6 min',
        type: 'Tutorial'
      }
    ]
  },
  {
    title: 'Cloud Services',
    icon: MessageCircle,
    color: 'from-purple-600 to-pink-600',
    articles: [
      {
        title: 'Cloud deployment guide',
        description: 'Deploy your applications to the cloud',
        readTime: '10 min',
        type: 'Tutorial'
      },
      {
        title: 'Auto-scaling configuration',
        description: 'Set up automatic scaling for your services',
        readTime: '7 min',
        type: 'Guide'
      },
      {
        title: 'Monitoring setup',
        description: 'Configure monitoring and alerting',
        readTime: '5 min',
        type: 'Guide'
      }
    ]
  },
  {
    title: 'Billing & Account',
    icon: FileText,
    color: 'from-orange-600 to-red-600',
    articles: [
      {
        title: 'Understanding pricing',
        description: 'Learn about our pricing structure and plans',
        readTime: '3 min',
        type: 'Guide'
      },
      {
        title: 'Payment methods',
        description: 'How to add and manage payment methods',
        readTime: '2 min',
        type: 'Guide'
      },
      {
        title: 'Billing history',
        description: 'View and download your billing history',
        readTime: '2 min',
        type: 'Guide'
      }
    ]
  }
];

const faqItems = [
  {
    question: 'How do I get started with AI services?',
    answer: 'Getting started is easy! First, create an account and generate your API key. Then, check out our quick start guide to make your first API call. We also provide SDKs for popular programming languages to make integration even easier.'
  },
  {
    question: 'What programming languages do you support?',
    answer: 'We provide SDKs for JavaScript, Python, Go, Java, and C#. You can also use our REST API with any programming language that supports HTTP requests.'
  },
  {
    question: 'How does pricing work?',
    answer: 'We offer flexible pricing based on usage. You can start with our free tier and scale up as needed. Pricing is based on API calls, data processing, and storage usage. Check our pricing page for detailed information.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take security seriously. All data is encrypted in transit and at rest. We are SOC 2 Type II compliant and follow industry best practices for data protection.'
  },
  {
    question: 'Do you offer support?',
    answer: 'Yes! We offer multiple support channels including email, chat, and phone support. Our documentation and guides are also comprehensive resources for self-service support.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You will continue to have access to your account until the end of your current billing period.'
  }
];

const supportChannels = [
  {
    name: 'Email Support',
    description: 'Get help via email within 24 hours',
    icon: Mail,
    contact: 'support@ziontechgroup.com',
    responseTime: '24 hours'
  },
  {
    name: 'Live Chat',
    description: 'Chat with our support team in real-time',
    icon: MessageCircle,
    contact: 'Available 9 AM - 6 PM EST',
    responseTime: 'Immediate'
  },
  {
    name: 'Phone Support',
    description: 'Speak directly with our support team',
    icon: Phone,
    contact: '+1 (555) 123-4567',
    responseTime: 'Immediate'
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleCategory = (categoryTitle) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  return (
    <Layout
      title="Help & Support - Zion Tech Group"
      description="Get help and support for Zion Tech Group's AI and cloud services. Find guides, FAQs, and contact our support team."
      keywords="help, support, FAQ, guides, documentation, contact support"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help & Support
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Find answers to your questions and get the help you need to succeed with our platform
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
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Help Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Browse our organized help articles by category
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mr-4`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-gray-600">{category.articles.length} articles</p>
                      </div>
                    </div>
                    {expandedCategory === category.title ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-200 p-6">
                        <div className="space-y-4">
                          {category.articles.map((article, articleIndex) => (
                            <div key={articleIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-1">{article.title}</h4>
                                <p className="text-sm text-gray-600">{article.description}</p>
                                <div className="flex items-center mt-2 space-x-4">
                                  <span className="text-xs text-gray-500">{article.readTime}</span>
                                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                    {article.type}
                                  </span>
                                </div>
                              </div>
                              <ExternalLink className="w-5 h-5 text-gray-400" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-200 p-6">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Support
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Still need help? Reach out to our support team through any of these channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{channel.name}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <p className="text-blue-600 font-semibold mb-2">{channel.contact}</p>
                <p className="text-sm text-gray-500">Response time: {channel.responseTime}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is here to help you succeed. Contact us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Browse Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}