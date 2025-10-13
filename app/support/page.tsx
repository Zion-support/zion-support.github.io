'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MessageCircle, BookOpen, Phone, Mail, Clock, CheckCircle, Star, Users, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: <Zap className="w-6 h-6" />,
      faqs: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact us through our contact form or schedule a free consultation. Our team will assess your needs and recommend the best solutions for your business.'
        },
        {
          question: 'What is the onboarding process like?',
          answer: 'Our onboarding process typically takes 1-2 weeks and includes a detailed assessment, custom solution design, implementation planning, and team training.'
        },
        {
          question: 'Do you offer free trials?',
          answer: 'Yes, we offer 14-day free trials for most of our AI solutions. No credit card required to get started.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: <MessageCircle className="w-6 h-6" />,
      faqs: [
        {
          question: 'What are your support hours?',
          answer: 'We provide 24/7 support for enterprise customers and standard business hours (9 AM - 6 PM EST) for other plans. Emergency support is available 24/7 for all customers.'
        },
        {
          question: 'How do I contact technical support?',
          answer: 'You can reach our technical support team through email, phone, or our support portal. Enterprise customers have access to dedicated support channels.'
        },
        {
          question: 'What is your average response time?',
          answer: 'We aim to respond to all support requests within 2 hours during business hours and 4 hours outside business hours.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: <BookOpen className="w-6 h-6" />,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.'
        },
        {
          question: 'Can I change my plan anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate any billing differences.'
        },
        {
          question: 'Do you offer custom pricing?',
          answer: 'Yes, we offer custom pricing for enterprise customers and large-scale implementations. Contact our sales team for a personalized quote.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      icon: <Mail className="w-8 h-8" />,
      contact: 'support@ziontechgroup.com',
      responseTime: 'Within 2 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: <Phone className="w-8 h-8" />,
      contact: '+1 302 464 0950',
      responseTime: 'Immediate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: <MessageCircle className="w-8 h-8" />,
      contact: 'Available 24/7',
      responseTime: 'Within 1 minute',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: <BookOpen className="w-6 h-6" />,
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <MessageCircle className="w-6 h-6" />,
      link: '/tutorials'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: <Users className="w-6 h-6" />,
      link: '/community'
    },
    {
      title: 'Status Page',
      description: 'Check system status and uptime',
      icon: <CheckCircle className="w-6 h-6" />,
      link: '/status'
    }
  ];

  const stats = [
    { label: 'Support Tickets Resolved', value: '50,000+', icon: CheckCircle },
    { label: 'Customer Satisfaction', value: '98%', icon: Star },
    { label: 'Average Response Time', value: '1.2 hrs', icon: Clock },
    { label: 'Support Team Members', value: '25+', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help Center & Customer Support</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access helpful resources." />
        <meta name="keywords" content="support, help center, customer service, technical support, FAQ, documentation, Zion Tech Group support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">help you?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Find answers to your questions, get technical support, and access helpful resources to make the most of our AI solutions.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're here to help 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${channel.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{channel.title}</h3>
                  <p className="text-gray-300 text-center mb-6">{channel.description}</p>
                  <div className="text-center mb-6">
                    <div className="text-cyan-400 font-semibold text-lg mb-2">{channel.contact}</div>
                    <div className="text-gray-400 text-sm">Response: {channel.responseTime}</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Contact Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find quick answers to the most common questions about our services.
              </p>
            </div>

            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-white/10 pb-6 last:border-b-0">
                        <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
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
                Access documentation, tutorials, and other resources to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still need help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;
