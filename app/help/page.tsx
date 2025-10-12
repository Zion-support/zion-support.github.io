'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Brain,
  Cloud,
  Shield,
  Zap,
  Code,
  Smartphone,
  BarChart3
} from 'lucide-react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI solutions, IT services, 5G implementation, and micro SAAS platforms. Our services include AI content generation, chatbots, analytics, cloud migration, cybersecurity, mobile development, and more.'
    },
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Contact us through our contact form, call us at +1 (302) 464-0950, or email kleber@ziontechgroup.com. We\'ll schedule a free consultation to discuss your needs and recommend the best solutions.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We guarantee a maximum response time of 48 hours for all support requests. For critical issues, we provide 24/7 emergency support. Most inquiries are addressed within 24 hours during business days.'
    },
    {
      question: 'Do you offer custom AI solutions?',
      answer: 'Yes! We specialize in custom AI solutions tailored to your specific business needs. Our team can develop bespoke AI models, integrate existing systems, and create custom applications for your industry.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on the services and scope of work. We offer both project-based and subscription-based pricing models. Contact us for a detailed quote tailored to your specific requirements.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Absolutely! We provide comprehensive training for all our solutions, including user guides, video tutorials, and hands-on training sessions. We also offer ongoing support and documentation.'
    },
    {
      question: 'What security measures do you implement?',
      answer: 'We implement enterprise-grade security measures including SSL/TLS encryption, secure data storage, regular security audits, access controls, and compliance with industry standards like GDPR and SOC 2.'
    },
    {
      question: 'Can you help with existing system integration?',
      answer: 'Yes, we specialize in integrating our solutions with existing systems. Our team has extensive experience with various platforms and can ensure seamless integration with your current infrastructure.'
    }
  ];

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      description: 'Learn how to get started with our services',
      articles: [
        'How to choose the right AI solution',
        'Setting up your account',
        'First steps with our platform',
        'Understanding our pricing'
      ]
    },
    {
      title: 'AI Services',
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      description: 'Everything about our AI solutions',
      articles: [
        'AI Content Generator guide',
        'Setting up AI chatbots',
        'Analytics dashboard setup',
        'Custom AI model training'
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-6 h-6 text-green-400" />,
      description: 'IT solutions and technical support',
      articles: [
        'Cloud migration process',
        'Cybersecurity best practices',
        'Mobile app development',
        'DevOps implementation'
      ]
    },
    {
      title: '5G Solutions',
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      description: '5G implementation and optimization',
      articles: [
        '5G network planning',
        'Edge computing setup',
        'IoT device integration',
        'Performance optimization'
      ]
    },
    {
      title: 'Account & Billing',
      icon: <Users className="w-6 h-6 text-orange-400" />,
      description: 'Manage your account and billing',
      articles: [
        'Updating account information',
        'Understanding your bill',
        'Payment methods',
        'Cancellation policy'
      ]
    },
    {
      title: 'Technical Support',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      description: 'Technical issues and troubleshooting',
      articles: [
        'Common technical issues',
        'Performance troubleshooting',
        'API documentation',
        'System requirements'
      ]
    }
  ];

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      contact: 'kleber@ziontechgroup.com',
      responseTime: 'Within 24 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      contact: '+1 (302) 464-0950',
      responseTime: 'Immediate'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: <MessageSquare className="w-6 h-6 text-green-400" />,
      contact: 'Available on website',
      responseTime: 'Immediate'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT services. Find answers to common questions, documentation, and contact our support team." />
        <meta name="keywords" content="help center, support, documentation, FAQ, customer service, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Help{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Find answers to your questions, access documentation, and get the support you need 
            for our AI and IT solutions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                {method.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{method.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <div className="space-y-2">
                <p className="text-cyan-400 font-medium">{method.contact}</p>
                <p className="text-sm text-gray-400">{method.responseTime}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Help Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                      • {article}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl border border-slate-700">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Documentation Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Documentation & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/docs"
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center"
            >
              <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">API Documentation</h3>
              <p className="text-gray-300 text-sm">Complete API reference and integration guides</p>
            </Link>
            
            <Link
              to="/docs"
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center"
            >
              <Video className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Video Tutorials</h3>
              <p className="text-gray-300 text-sm">Step-by-step video guides for all features</p>
            </Link>
            
            <Link
              to="/docs"
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center"
            >
              <FileText className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">User Guides</h3>
              <p className="text-gray-300 text-sm">Comprehensive user manuals and guides</p>
            </Link>
            
            <Link
              to="/status"
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center"
            >
              <BarChart3 className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">System Status</h3>
              <p className="text-gray-300 text-sm">Real-time system status and uptime</p>
            </Link>
          </div>
        </section>

        {/* Support Hours */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Support Hours</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                  Regular Support
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-red-400 mr-2" />
                  Emergency Support
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Critical Issues</span>
                    <span>24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span>Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact</span>
                    <span>+1 (302) 464-0950</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Support
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Call Now
                <Phone className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}