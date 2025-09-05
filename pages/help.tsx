import React, { useState } from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Book, 
  MessageSquare, 
  Phone, 
  Mail,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';

const faqCategories = [
  'All',
  'Getting Started',
  'AI Services',
  'IT Services',
  'Micro SaaS',
  'Billing',
  'Technical',
  'Account'
];

const faqs = [
  {
    id: 1,
    question: 'What services does Zion Tech Group offer?',
    answer: 'Zion Tech Group offers comprehensive AI solutions, IT services, and Micro SaaS products. Our AI services include machine learning, computer vision, natural language processing, and advanced AI applications. Our IT services cover cloud infrastructure, cybersecurity, network management, and system administration. We also provide Micro SaaS solutions for various business needs.',
    category: 'Getting Started',
    popular: true
  },
  {
    id: 2,
    question: 'How do I get started with your AI services?',
    answer: 'Getting started is easy! Contact us through our website or call us at +1 302 464 0950. We\'ll schedule a free consultation to understand your needs and recommend the best AI solutions for your business. Our team will guide you through the entire process from planning to implementation.',
    category: 'AI Services',
    popular: true
  },
  {
    id: 3,
    question: 'What is the typical timeline for AI project implementation?',
    answer: 'Project timelines vary depending on complexity and scope. Simple AI solutions can be implemented in 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.',
    category: 'AI Services',
    popular: false
  },
  {
    id: 4,
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes! We offer comprehensive support and maintenance for all our services. This includes 24/7 technical support, regular updates, performance monitoring, and system optimization. Our support plans are tailored to your specific needs and can be customized based on your requirements.',
    category: 'Technical',
    popular: true
  },
  {
    id: 5,
    question: 'What are your pricing models?',
    answer: 'We offer flexible pricing models to suit different business needs. Our pricing includes project-based fees, monthly subscriptions, and custom enterprise solutions. Contact us for a detailed quote based on your specific requirements. We also offer free consultations to help you understand the best pricing option for your needs.',
    category: 'Billing',
    popular: true
  },
  {
    id: 6,
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely! We specialize in integrating our solutions with existing systems and infrastructure. Our team has experience with various platforms, databases, and APIs. We ensure seamless integration while maintaining data security and system stability.',
    category: 'Technical',
    popular: false
  },
  {
    id: 7,
    question: 'What security measures do you implement?',
    answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with industry standards. All our solutions are designed with security best practices and we provide detailed security documentation.',
    category: 'Technical',
    popular: true
  },
  {
    id: 8,
    question: 'Do you offer training for our team?',
    answer: 'Yes! We provide comprehensive training programs for your team to ensure successful adoption and utilization of our solutions. Training includes hands-on sessions, documentation, video tutorials, and ongoing support. We customize training based on your team\'s technical level and specific needs.',
    category: 'Getting Started',
    popular: false
  }
];

const helpArticles = [
  {
    id: 1,
    title: 'Getting Started with AI Services',
    description: 'Learn how to implement AI solutions in your business',
    readTime: '5 min read',
    type: 'Guide'
  },
  {
    id: 2,
    title: 'API Documentation',
    description: 'Complete guide to our API endpoints and integration',
    readTime: '10 min read',
    type: 'Technical'
  },
  {
    id: 3,
    title: 'Security Best Practices',
    description: 'How to secure your AI and IT infrastructure',
    readTime: '7 min read',
    type: 'Security'
  },
  {
    id: 4,
    title: 'Billing and Payment',
    description: 'Understanding our pricing and payment options',
    readTime: '3 min read',
    type: 'Billing'
  },
  {
    id: 5,
    title: 'System Requirements',
    description: 'Technical requirements for our services',
    readTime: '4 min read',
    type: 'Requirements'
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us for immediate assistance',
    value: '+1 302 464 0950',
    link: 'tel:+13024640950'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email anytime',
    value: 'kleber@ziontechgroup.com',
    link: 'mailto:kleber@ziontechgroup.com'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team',
    value: 'Available 24/7',
    link: '/contact'
=======
import { motion } from 'framer-motion';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Download, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const helpCategories = [
  {
    id: 1,
    title: 'Getting Started',
    icon: BookOpen,
    articles: [
      { title: 'How to create an account', url: '#' },
      { title: 'Setting up your first project', url: '#' },
      { title: 'Understanding the dashboard', url: '#' }
    ]
  },
  {
    id: 2,
    title: 'Account & Billing',
    icon: FileText,
    articles: [
      { title: 'Managing your subscription', url: '#' },
      { title: 'Payment methods', url: '#' },
      { title: 'Billing history', url: '#' }
    ]
  },
  {
    id: 3,
    title: 'Technical Support',
    icon: HelpCircle,
    articles: [
      { title: 'Troubleshooting common issues', url: '#' },
      { title: 'API documentation', url: '#' },
      { title: 'System requirements', url: '#' }
    ]
>>>>>>> origin/main
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);

<<<<<<< HEAD
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
=======
  const toggleCategory = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
>>>>>>> origin/main
  };

  return (
    <Layout
<<<<<<< HEAD
      title="Help Center - Zion Tech Group | Support & Documentation"
      description="Get help with Zion Tech Group's AI services, IT solutions, and Micro SaaS products. Find answers to common questions and access our support resources."
      keywords="help center, support, FAQ, documentation, AI services, IT support, customer service"
    >
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Help <span className="text-blue-400">Center</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Find answers to your questions and get the support you need
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pr-12 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-4 top-4 h-6 w-6 text-gray-400" />
              </div>
=======
      title="Help & Support - Zion Tech Group"
      description="Get help and support for our services. Find answers to common questions and contact our support team."
      keywords="help, support, documentation, FAQ, contact"
    >
      <div className="min-h-screen bg-gray-50">
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find answers to your questions and get the support you need to succeed.
              </p>
>>>>>>> origin/main
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Methods Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Can't find what you're looking for? Contact our support team
              </p>
=======
        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
>>>>>>> origin/main
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <a
                    href={method.link}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {method.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <HelpCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {faq.popular && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    {openFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-700">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
=======
        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Help Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our help articles organized by category to find the information you need.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-gray-500">{category.articles.length} articles</p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-2">
                        {category.articles.map((article, idx) => (
                          <a
                            key={idx}
                            href={article.url}
                            className="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                          >
                            {article.title}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
>>>>>>> origin/main
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Help Articles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Help Articles</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Browse our comprehensive documentation and guides
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Book className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {article.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our support team is here to help you succeed with our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Contact Support
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Explore Services
              </Link>
            </div>
=======

        {/* Contact Support */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Contact us through any of these channels.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">+1 302 464 0950</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-500">24/7 response within 24 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Available on our website</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </motion.div>
>>>>>>> origin/main
          </div>
        </section>
      </div>
    </Layout>
  );
}