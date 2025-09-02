import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, HelpCircle, MessageCircle, Phone, Mail, BookOpen, Video, FileText, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Help: NextPage = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      icon: BookOpen,
      articles: [
        'How to create your account',
        'Setting up your first project',
        'Understanding the dashboard',
        'Basic configuration guide'
      ]
    },
    {
      title: 'Account & Billing',
      description: 'Manage your account, billing, and subscription',
      icon: Users,
      articles: [
        'Managing your subscription',
        'Updating payment methods',
        'Billing and invoicing',
        'Account security settings'
      ]
    },
    {
      title: 'Technical Support',
      description: 'Technical issues and troubleshooting',
      icon: HelpCircle,
      articles: [
        'Common technical issues',
        'API documentation',
        'Integration guides',
        'Performance optimization'
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      articles: [
        'Platform overview',
        'Feature walkthroughs',
        'Best practices',
        'Advanced configurations'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What types of projects do you work on?',
      answer: 'We work on a wide range of projects including AI development, cloud migration, software development, micro SaaS applications, and digital transformation initiatives for businesses of all sizes.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. Simple projects can be completed in 2-4 weeks, while larger enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive support packages including maintenance, updates, monitoring, and technical support. Our support plans are designed to ensure your solutions continue to perform optimally.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern technologies including AI/ML, cloud platforms (AWS, Azure, GCP), modern web frameworks, mobile development, and enterprise integration solutions.'
    },
    {
      question: 'How do you ensure project security and data protection?',
      answer: 'Security is our top priority. We follow industry best practices, implement proper access controls, use encrypted communications, and comply with relevant data protection regulations. All team members are security-trained.'
    }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours'
    }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers, tutorials, and contact our support team."
      keywords="help center, support, FAQ, documentation, customer service, technical support"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers, get support, and learn how to make the most of our services
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse Help Topics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the information you need organized by topic and category.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      • {article}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{method.availability}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Response: {method.responseTime}</span>
                  </div>
                </div>
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Contact Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access important resources and information quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Documentation', href: '/documentation', icon: FileText },
              { title: 'API Reference', href: '/api', icon: BookOpen },
              { title: 'System Status', href: '/status', icon: Clock },
              { title: 'Contact Us', href: '/contact', icon: MessageCircle }
            ].map((link, index) => (
              <motion.div
                key={link.title}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <link.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                <Link
                  href={link.href}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;