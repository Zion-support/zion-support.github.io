'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Settings, Bug, Lightbulb } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    {
      title: 'Getting Started',
      icon: HelpCircle,
      color: 'from-blue-500 to-cyan-600',
      articles: [
        'How to set up your account',
        'First steps with our platform',
        'Understanding the dashboard',
        'Basic configuration guide'
      ]
    },
    {
      title: 'Technical Support',
      icon: Settings,
      color: 'from-purple-500 to-pink-600',
      articles: [
        'API documentation',
        'Integration guides',
        'Troubleshooting common issues',
        'System requirements'
      ]
    },
    {
      title: 'Billing & Account',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      articles: [
        'Billing information',
        'Account management',
        'Subscription changes',
        'Payment methods'
      ]
    },
    {
      title: 'Bug Reports',
      icon: Bug,
      color: 'from-red-500 to-orange-600',
      articles: [
        'Report a bug',
        'Known issues',
        'Status updates',
        'Feature requests'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and provide a customized implementation plan.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We offer 24/7 technical support, comprehensive documentation, training sessions, and regular check-ins to ensure your success.'
    },
    {
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing infrastructure through APIs and custom connectors.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We typically respond to support requests within 2 hours during business hours and within 24 hours for non-urgent requests.'
    },
    {
      question: 'Do you provide training for my team?',
      answer: 'Absolutely! We offer comprehensive training programs including documentation, video tutorials, and live training sessions.'
    }
  ];

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '(302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST',
      icon: Phone,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed information about your issue',
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7 response within 24 hours',
      icon: Mail,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find documentation, FAQs, and contact our support team." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get help and support for our AI and IT solutions. Find answers, documentation, and contact our expert team.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supportCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                      <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Support</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mr-4`}>
                        <method.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{method.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-3">{method.description}</p>
                    <p className="text-cyan-400 font-semibold mb-2">{method.contact}</p>
                    <p className="text-sm text-gray-400">{method.availability}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our expert team is here to help you succeed with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;