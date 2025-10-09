'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { HelpCircle, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Find answers to common questions',
      action: 'Browse Articles'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email'
    }
  ];

  const quickLinks = [
    {
      title: 'Getting Started',
      description: 'New to our platform? Start here',
      icon: '🚀',
      link: '/docs/getting-started'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and guides',
      icon: '📚',
      link: '/api-docs'
    },
    {
      title: 'System Status',
      description: 'Real-time status of all our services',
      icon: CheckCircle,
      link: '/status'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get help with our products and services. Our support team is here to assist you 24/7.
          </p>
        </section>

        {/* Support Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{link.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-300">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-gray-800/50 rounded-xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our support team directly for urgent issues or questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:support@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Support
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Email: support@ziontechgroup.com</p>
            <p>🕒 Available 24/7 for all support requests</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;