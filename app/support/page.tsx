'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Phone, Mail, MessageCircle, Clock, Search } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const supportChannels = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST',
      color: 'text-cyan-400',
      icon: Phone
    },
    {
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 response within 24 hours',
      color: 'text-green-400',
      icon: Mail
    },
    {
      name: 'Live Chat',
      description: 'Instant support through our chat system',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      color: 'text-purple-400',
      icon: MessageCircle
    },
    {
      name: 'Emergency Support',
      description: 'Critical issues and system outages',
      contact: '+1 (302) 464-0950',
      availability: '24/7 for critical issues',
      color: 'text-red-400',
      icon: Clock
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours. For critical issues, we provide 24/7 emergency support with immediate response.'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions with our experts.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001.'
    },
    {
      question: 'Can I customize your solutions for my specific needs?',
      answer: 'Absolutely! All our solutions are designed to be customizable. Our team works closely with you to tailor the solutions to your specific business requirements.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise solutions. Contact us for a personalized quote.'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs',
      icon: '📚'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials',
      icon: '🎥'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get help',
      link: '/community',
      icon: '👥'
    },
    {
      title: 'Status Page',
      description: 'Real-time system status and updates',
      link: '/status',
      icon: '📊'
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT solutions" />
        <meta name="keywords" content="support, help, documentation, FAQ, customer service" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get help and support for our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get the support you need to succeed with our AI and IT solutions. Our expert team is ready to help you every step of the way.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400">Experts</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-gray-400">Issues Resolved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Get Support</h2>
              <p className="text-gray-300">We're here to help you succeed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <channel.icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{channel.name}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className={`${channel.color} font-medium mb-2`}>{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 mb-8">Find answers to common questions</p>
              
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
                <p className="text-gray-400">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Resources</h2>
              <p className="text-gray-300">Additional resources to help you succeed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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