'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '(302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll help you choose the right AI solution for your business needs.',
      category: 'general'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including technical assistance, training, documentation, and ongoing maintenance for all our solutions.',
      category: 'support'
    },
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'We typically respond to support requests within 24 hours, with priority support available for enterprise customers.',
      category: 'support'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training programs to help your team get the most out of our AI and IT solutions.',
      category: 'training'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements.',
      category: 'customization'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months.',
      category: 'implementation'
    }
  ];

  const knowledgeBase = [
    {
      title: 'Getting Started Guide',
      description: 'Learn how to set up and configure your AI solutions',
      category: 'Documentation',
      link: '/docs/getting-started'
    },
    {
      title: 'API Documentation',
      description: 'Complete reference for our APIs and integrations',
      category: 'Technical',
      link: '/docs/api'
    },
    {
      title: 'Troubleshooting Guide',
      description: 'Common issues and their solutions',
      category: 'Support',
      link: '/docs/troubleshooting'
    },
    {
      title: 'Best Practices',
      description: 'Optimize your AI solutions for better performance',
      category: 'Optimization',
      link: '/docs/best-practices'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group - Technical Support & Help Center</title>
        <meta name="description" content="Get expert technical support for your AI and IT solutions. Contact our support team, access knowledge base, and get help when you need it." />
        <meta name="keywords" content="technical support, help center, customer support, AI support, IT support, troubleshooting" />
      </Helmet>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technical Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert help and support for your AI and IT solutions. Our team is here to ensure your success.
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <p className="text-cyan-400 font-medium">{channel.contact}</p>
                <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Knowledge Base</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Access our comprehensive documentation and guides to help you get the most out of your solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeBase.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            {filteredFaqs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400">No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Schedule a Call
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;