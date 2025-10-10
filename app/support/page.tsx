'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, and ongoing optimization to ensure your systems run smoothly.'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity, but most projects are completed within 4-12 weeks.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the implemented solutions.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We guarantee a response within 2 hours for critical issues and 24 hours for general support requests.'
    },
    {
      question: 'Do you provide documentation and resources?',
      answer: 'Yes, we provide detailed documentation, user guides, and ongoing resources to help you maximize the value of our solutions.'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Business hours'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help Center</title>
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and resources to help you succeed." />
        <meta name="keywords" content="support, help, technical support, AI support, IT support, documentation, FAQ" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Support
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the help you need with our comprehensive support resources, documentation, and expert assistance.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help, documentation, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>
            <p className="text-xl text-gray-300">Get in touch with our support team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <p className="text-cyan-400 font-semibold mb-2">{method.contact}</p>
                <p className="text-sm text-gray-400">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Find answers to common questions</p>
          </div>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Resources</h2>
            <p className="text-xl text-gray-300">Additional resources to help you succeed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
              <p className="text-gray-300">Comprehensive guides and API documentation</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Status Page</h3>
              <p className="text-gray-300">Real-time system status and uptime information</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-gray-300">Join our community for tips and best practices</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Knowledge Base</h3>
              <p className="text-gray-300">Searchable knowledge base with articles and tutorials</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;