import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
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
  Cloud
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
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment solutions.',
    icon: Cloud,
    color: 'blue',
    articles: [
      {
        title: 'Cloud Migration Guide',
        description: 'Step-by-step guide to migrating to the cloud',
        readTime: '12 min read',
        type: 'Guide'
      },
      {
        title: 'Cloud Security',
        description: 'Best practices for securing your cloud infrastructure',
        readTime: '9 min read',
        type: 'Security'
      }
    ]
  }
];

const helpCategories = [
  {
    title: 'Getting Started',
    description: 'New to our platform? Start here.',
    icon: BookOpen,
    color: 'blue',
    articles: helpArticles
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

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

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find documentation, tutorials, and support resources." />
        <meta name="keywords" content="help, support, documentation, FAQ, tutorials, guides" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
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
            </motion.div>
          </div>
        </section>
      </div>
    </>
  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const filteredFaqs = faqCategories[selectedCategory].faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to your questions, learn how to use our services, 
                and get the support you need to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Search Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How can we help you?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Search our knowledge base for articles, guides, and solutions.
                </p>
              </motion.div>

              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find help articles organized by topic and service area.
              </p>
            </motion.div>

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

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quick answers to the most common questions we receive.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Contact Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our support team is here to help you succeed. Get in touch with us.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="text-indigo-600 font-semibold mb-2">{method.contact}</p>
                    <p className="text-sm text-gray-500">{method.responseTime}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your project and learn how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-semibold">{resource.type}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Call Support
              <Phone className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Email Support
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
import React from 'react';
import { Helmet } from 'react-helmet-async';

const help: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>help | Zion Tech Group</title>
        <meta name="description" content="help - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">help</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default help;
