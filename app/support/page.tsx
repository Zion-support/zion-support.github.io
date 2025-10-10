'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';

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
question: 'Do you provide training for our team?',
      answer: 'Yes! We provide comprehensive training programs including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our solutions.'

    }
  ];

  const supportChannels = [
    {
icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1-302-464-0950',
      availability: '24/7'

    },
    {
      icon: Mail,
      title: 'Email Support',
description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant help through our website chat',
      contact: 'Available on website',
      availability: 'Business Hours'

    }
  ];

  const resources = [
    {
icon: FileText,

      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: BookOpen,
      link: '/docs'
    },
    {
icon: Book,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base'

    },
    {
      title: 'Community Forum',
description: 'Connect with other users and experts',

      link: '/community'
    },
    {
      title: 'Status Page',
      description: 'Check system status and uptime',
      icon: Globe,
      link: '/status'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const searchedFaqs = searchQuery 
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

{/* Search */}
          <div className="max-w-2xl mx-auto mb-16">

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
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
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Phone Support</h3>
                <p className="text-gray-300 mb-4">24/7 technical support</p>
                <p className="text-cyan-400 font-semibold">+1 (555) 123-4567</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
                <p className="text-gray-300 mb-4">Get help via email</p>
                <p className="text-cyan-400 font-semibold">support@ziontechgroup.com</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                <p className="text-gray-300 mb-4">Chat with our experts</p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card p-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Business Hours</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Support</h3>
                  <p className="text-gray-300">24/7 availability</p>
                  <p className="text-gray-300">Emergency support included</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
