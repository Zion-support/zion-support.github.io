'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Video, BookOpen } from 'lucide-react';

interface SupportItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  popular: boolean;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const supportItems: SupportItem[] = [
    {
      id: '1',
      title: 'Getting Started Guide',
      description: 'Learn how to set up and configure your account',
      category: 'Getting Started',
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      popular: true
    },
    {
      id: '2',
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      category: 'Development',
      icon: <FileText className="w-6 h-6 text-green-500" />,
      popular: true
    },
    {
      id: '3',
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      category: 'Tutorials',
      icon: <Video className="w-6 h-6 text-purple-500" />,
      popular: false
    },
    {
      id: '4',
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      category: 'Help',
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      popular: false
    },
    {
      id: '5',
      title: 'Account Management',
      description: 'Manage your account settings and billing',
      category: 'Account',
      icon: <MessageCircle className="w-6 h-6 text-cyan-500" />,
      popular: false
    },
    {
      id: '6',
      title: 'Security Best Practices',
      description: 'Keep your account and data secure',
      category: 'Security',
      icon: <CheckCircle className="w-6 h-6 text-red-500" />,
      popular: false
    }
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      action: 'Start Chat'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      availability: 'Response within 2 hours',
      action: 'Send Email'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding guide. We also offer free consultations to help you get the most out of our services.'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer multiple support channels including live chat, phone support, email support, and a comprehensive knowledge base. Our support team is available 24/7 for urgent issues.'
    },
    {
      question: 'How quickly can I expect a response?',
      answer: 'Response times vary by channel: Live chat is instant, phone support is available during business hours, and email responses typically come within 2 hours during business days.'
    },
    {
      question: 'Do you offer training for your services?',
      answer: 'Yes! We provide comprehensive training materials including video tutorials, documentation, and live training sessions. We also offer custom training for enterprise clients.'
    },
    {
      question: 'What if I need custom integration help?',
      answer: 'Our technical team can help with custom integrations and configurations. We offer both guided support and full implementation services depending on your needs.'
    },
    {
      question: 'Is there a cost for support?',
      answer: 'Basic support is included with all plans. Premium support features and custom implementation services may have additional costs, which we\'ll discuss upfront.'
    }
  ];

  const filteredItems = supportItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find documentation, tutorials, and contact our support team." />
        <meta name="keywords" content="support, help, documentation, tutorials, contact, customer service" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Find answers, get support, and make the most of our services with our comprehensive help center.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="flex items-center justify-center text-sm text-gray-400 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  {method.availability}
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Help Center</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive help resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
