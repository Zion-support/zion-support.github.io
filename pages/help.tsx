import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Play,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  HelpCircle,
  FileText,
  Video,
  Users,
  Star,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Layout from './components/Layout';

const helpSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to our platform? Start here.',
    icon: BookOpen,
    articles: [
      {
        title: 'How to create your first project',
        description: 'Step-by-step guide to setting up your first project',
        readTime: '5 min read',
        difficulty: 'Beginner'
      },
      {
        title: 'Understanding the dashboard',
        description: 'Navigate through all the features and tools available',
        readTime: '3 min read',
        difficulty: 'Beginner'
      },
      {
        title: 'Setting up your profile',
        description: 'Complete your profile to get the most out of our platform',
        readTime: '2 min read',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    id: 'account-management',
    title: 'Account & Billing',
    description: 'Manage your account, subscription, and billing.',
    icon: Users,
    articles: [
      {
        title: 'How to update your billing information',
        description: 'Change payment methods and billing details',
        readTime: '3 min read',
        difficulty: 'Easy'
      },
      {
        title: 'Understanding your subscription plan',
        description: 'Learn about features and limits of your current plan',
        readTime: '4 min read',
        difficulty: 'Easy'
      },
      {
        title: 'How to cancel or pause your subscription',
        description: 'Temporarily pause or permanently cancel your subscription',
        readTime: '2 min read',
        difficulty: 'Easy'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions.',
    icon: HelpCircle,
    articles: [
      {
        title: 'Login issues and password reset',
        description: 'Troubleshoot login problems and reset your password',
        readTime: '3 min read',
        difficulty: 'Easy'
      },
      {
        title: 'Performance and loading issues',
        description: 'Fix slow loading and performance problems',
        readTime: '5 min read',
        difficulty: 'Intermediate'
      },
      {
        title: 'Browser compatibility issues',
        description: 'Ensure your browser works properly with our platform',
        readTime: '2 min read',
        difficulty: 'Easy'
      }
    ]
  },
  {
    id: 'api-integration',
    title: 'API & Integration',
    description: 'Connect with our APIs and third-party services.',
    icon: ExternalLink,
    articles: [
      {
        title: 'Getting started with our API',
        description: 'Learn the basics of our REST API',
        readTime: '10 min read',
        difficulty: 'Intermediate'
      },
      {
        title: 'Webhook configuration',
        description: 'Set up webhooks for real-time notifications',
        readTime: '7 min read',
        difficulty: 'Advanced'
      },
      {
        title: 'Third-party integrations',
        description: 'Connect with popular tools and services',
        readTime: '8 min read',
        difficulty: 'Intermediate'
      }
    ]
  }
];

const quickLinks = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    icon: BookOpen,
    href: '/docs'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    icon: Play,
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
    description: 'Get help from our support team',
    icon: Mail,
    href: '/contact'
  }
];

const faqs = [
  {
    question: 'How do I get started with your platform?',
    answer: 'Getting started is easy! Simply sign up for an account, complete your profile, and you can begin creating your first project. We have comprehensive guides and tutorials to help you along the way.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.'
  },
  {
    question: 'Can I change my subscription plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your subscription plan at any time. Changes will be reflected in your next billing cycle, and we\'ll prorate any differences.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our support team through email, live chat, or by submitting a ticket through your dashboard. We typically respond within 24 hours.'
  },
  {
    question: 'Do you offer custom solutions for enterprise clients?',
    answer: 'Absolutely! We provide custom solutions and dedicated support for enterprise clients. Contact our sales team to discuss your specific requirements.'
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const filteredSections = helpSections.map(section => ({
    ...section,
    articles: section.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.articles.length > 0);

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group platform. Find answers to common questions, tutorials, and contact our support team." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                How can we help you?
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Find answers, get support, and learn how to make the most of our platform.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access the most common resources and support channels.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <link.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {link.description}
                  </p>
                  <Link
                    href={link.href}
                    className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Help Articles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our comprehensive help articles organized by category.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {filteredSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                >
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <section.icon className="w-8 h-8 text-blue-600 mr-4" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {section.title}
                          </h3>
                          <p className="text-gray-600">
                            {section.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-6 h-6 text-gray-400 transition-transform ${
                          expandedSection === section.id ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedSection === section.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-6">
                          <div className="space-y-4">
                            {section.articles.map((article, articleIndex) => (
                              <motion.div
                                key={article.title}
                                className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: articleIndex * 0.1 }}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                      {article.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                      {article.description}
                                    </p>
                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                      <div className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {article.readTime}
                                      </div>
                                      <div className="flex items-center">
                                        <span className={`px-2 py-1 rounded ${
                                          article.difficulty === 'Beginner' || article.difficulty === 'Easy' 
                                            ? 'bg-green-100 text-green-700' 
                                            : article.difficulty === 'Intermediate' 
                                            ? 'bg-yellow-100 text-yellow-700' 
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                          {article.difficulty}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-400 ml-4 flex-shrink-0" />
                                </div>
                              </motion.div>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to the most common questions.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                          expandedFaq === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-6 pt-0">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Still need help?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Our support team is here to help you succeed. Get in touch with us through any of these channels.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <Mail className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Get detailed help via email
                  </p>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="text-white font-medium hover:underline"
                  >
                    support@ziontechgroup.com
                  </a>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <Phone className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Speak with our experts
                  </p>
                  <a
                    href="tel:+1-555-0123"
                    className="text-white font-medium hover:underline"
                  >
                    +1 (555) 012-3456
                  </a>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <MessageCircle className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Chat with us in real-time
                  </p>
                  <button className="text-white font-medium hover:underline">
                    Start Chat
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/community"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  Join Community
                  <Users className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}