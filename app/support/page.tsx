'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 4 hours'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Contact our team for a free consultation. We\'ll assess your needs and create a custom implementation plan.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple integrations take 2-4 weeks, while complex AI implementations can take 3-6 months.'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes, we offer comprehensive training programs for your team to ensure successful adoption and ongoing management.'
    },
    {
      question: 'What support do you offer after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization services.'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      link: '/tutorials'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      link: '/forum'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT needs. Live chat, phone, and email support available." />
        <meta name="keywords" content="technical support, customer service, help desk, AI support, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              24/7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get help when you need it. Our expert support team is available around the clock to assist with all your AI and IT needs.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-white">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-green-400">{channel.responseTime}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Contact Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
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
              <h2 className="text-3xl font-bold text-white mb-6">Helpful Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access documentation, tutorials, and community resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Access Resource
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is here to help you succeed. Contact us anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;