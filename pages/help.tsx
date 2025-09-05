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
<<<<<<< HEAD
  Download,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const helpArticles = [
  {
    id: 'overview',
    title: 'Understanding Our Services',
    description: 'Overview of all available services and solutions',
    readTime: '7 min read',
    type: 'Overview'
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
=======
  Users,
  Star,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Layout from './components/Layout';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

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
<<<<<<< HEAD
    icon: Video,
    color: 'purple',
    articles: [
      {
        title: 'Getting Started Video',
        description: 'Watch our comprehensive getting started guide',
        readTime: '8 min watch',
        type: 'Video'
      }
    ]
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Learn about our services and how to get started',
          type: 'guide',
          readTime: '5 min read'
        },
        {
          title: 'Account Setup and Configuration',
          description: 'Step-by-step guide to setting up your account',
          type: 'tutorial',
          readTime: '10 min read'
        },
        {
          title: 'First Project Setup',
          description: 'How to create and configure your first project',
          type: 'tutorial',
          readTime: '15 min read'
        }
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: HelpCircle,
      articles: [
        {
          title: 'AI Services Overview',
          description: 'Understanding our AI and machine learning services',
          type: 'guide',
          readTime: '8 min read'
        },
        {
          title: 'Cloud Solutions Guide',
          description: 'Everything you need to know about our cloud services',
          type: 'guide',
          readTime: '12 min read'
        },
        {
          title: 'Security Best Practices',
          description: 'How to secure your applications and data',
          type: 'guide',
          readTime: '20 min read'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: FileText,
      articles: [
        {
          title: 'API Documentation',
          description: 'Complete API reference and integration guides',
          type: 'documentation',
          readTime: '30 min read'
        },
        {
          title: 'Troubleshooting Common Issues',
          description: 'Solutions to frequently encountered problems',
          type: 'troubleshooting',
          readTime: '15 min read'
        },
        {
          title: 'Performance Optimization',
          description: 'Tips and techniques for optimizing your applications',
          type: 'guide',
          readTime: '25 min read'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Account',
      icon: MessageCircle,
      articles: [
        {
          title: 'Understanding Your Bill',
          description: 'How to read and understand your monthly bill',
          type: 'guide',
          readTime: '5 min read'
        },
        {
          title: 'Payment Methods',
          description: 'How to add and manage payment methods',
          type: 'guide',
          readTime: '3 min read'
        },
        {
          title: 'Upgrading Your Plan',
          description: 'How to upgrade or downgrade your service plan',
          type: 'guide',
          readTime: '7 min read'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours during business days. For critical issues, we provide 24/7 emergency support for our enterprise clients.'
    },
    {
      question: 'Do you offer custom development services?',
      answer: 'Yes! We specialize in custom software development tailored to your specific business needs. Our team can build web applications, mobile apps, APIs, and more.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001.'
    },
    {
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! We provide comprehensive integration services and APIs that allow you to seamlessly connect our solutions with your existing business systems and workflows.'
    }
  ];

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get help via email',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      responseTime: 'Within 24 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak with our team',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      responseTime: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Live Chat',
      description: 'Chat with us online',
      icon: MessageCircle,
      contact: 'Available on website',
      responseTime: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
    icon: Video,
=======
    icon: Play,
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
<<<<<<< HEAD
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help <span className="text-blue-600">Center</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Find answers, get support, and learn how to make the most of our services.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find guides, tutorials, FAQs, and contact information." />
        <meta name="keywords" content="help, support, documentation, FAQ, tutorials, guides" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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

<<<<<<< HEAD
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
        {/* Search Section */}
=======
        {/* Quick Links */}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Contact us for personalized assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Support
                  <MessageCircle className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call Us
                  <Phone className="ml-2 w-4 h-4" />
                </a>
            <div className="max-w-6xl mx-auto">
              <div className="space-y-6">
                {filteredCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <category.icon className="w-8 h-8 text-indigo-600 mr-4" />
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                            <p className="text-gray-600">{category.articles.length} articles</p>
                          </div>
                        </div>
                        {expandedSection === category.id ? (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedSection === category.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200"
                        >
                          <div className="p-6 space-y-4">
                            {category.articles.map((article, articleIndex) => (
                              <motion.div
                                key={articleIndex}
                                className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: articleIndex * 0.1 }}
                              >
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {article.title}
                                  </h4>
                                  <p className="text-gray-600 mb-2">{article.description}</p>
                                  <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full mr-2">
                                      {article.type}
                                    </span>
                                    <span>{article.readTime}</span>
                                  </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 ml-4" />
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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