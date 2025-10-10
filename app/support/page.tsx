'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Book, Users } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical assistance, regular check-ins, training sessions, and dedicated account management.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months.'
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
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-cyan-400 font-medium mb-2">{channel.contact}</div>
                <div className="text-sm text-gray-400">{channel.availability}</div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Help Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2"
                  >
                    <span>Access Resource</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you with any questions or issues. 
              Contact us through any of our support channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-302-464-0950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
