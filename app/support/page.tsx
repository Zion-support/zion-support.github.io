'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface SupportChannel {
  name: string;
  icon: React.ReactNode;
  description: string;
  contact: string;
  availability: string;
  color: string;
}

const SupportPage: React.FC = () => {
  const supportChannels: SupportChannel[] = [
    {
      name: 'Phone Support',
      icon: <Phone className="w-6 h-6" />,
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7 Emergency Support',
      color: 'text-cyan-400'
    },
    {
      name: 'Email Support',
      icon: <Mail className="w-6 h-6" />,
      description: 'Get detailed responses to your technical questions',
      contact: 'kleber@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-purple-400'
    },
    {
      name: 'Live Chat',
      icon: <MessageCircle className="w-6 h-6" />,
      description: 'Instant help with our AI-powered chat support',
      contact: 'Start Chat',
      availability: 'Available 24/7',
      color: 'text-green-400'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Simply contact us through any of our support channels, and we\'ll schedule a consultation to understand your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We aim to respond to all support requests within 2 hours during business hours and within 4 hours for emergency requests outside business hours.'
    },
    {
      question: 'Do you offer training for your AI solutions?',
      answer: 'Yes, we provide comprehensive training for all our AI solutions, including documentation, video tutorials, and live training sessions with our experts.'
    },
    {
      question: 'What if I need custom AI development?',
      answer: 'We offer custom AI development services. Contact our team to discuss your specific requirements, and we\'ll provide a detailed proposal and timeline.'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: <BookOpen className="w-6 h-6" />,
      link: '/docs'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of solutions and tips',
      icon: <HelpCircle className="w-6 h-6" />,
      link: '/knowledge-base'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and our team',
      icon: <Users className="w-6 h-6" />,
      link: '/community'
    },
    {
      title: 'Status Page',
      description: 'Real-time system status and updates',
      icon: <Zap className="w-6 h-6" />,
      link: '/status'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Support Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We're here to help you succeed with our AI and IT solutions. Get the support you need, when you need it.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{channel.name}</h3>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Helpful Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our comprehensive documentation and community resources.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="bg-gray-800/50 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300">
                Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    placeholder="What can we help you with?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    placeholder="Please describe your issue or question in detail"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;