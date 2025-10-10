'use client'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide comprehensive support including 24/7 monitoring, regular updates, technical assistance, and ongoing optimization to ensure your systems perform at their best.'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training sessions for your team to ensure they can effectively use and maintain the solutions we implement. Training is included in all our service packages.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2 and GDPR.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure. We work with all major platforms and can create custom integrations as needed.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '(302) 464-0950',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      hours: 'Response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help! Find answers to common questions or get in touch with our support team.
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700/70 transition-colors">
              <channel.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
              <p className="text-gray-300 mb-4">{channel.description}</p>
              <p className="text-cyan-400 font-semibold mb-2">{channel.contact}</p>
              <p className="text-gray-400 text-sm">{channel.hours}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Link
            to="/contact"
            className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors text-center"
          >
            <HelpCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Get Help</h3>
            <p className="text-gray-300 text-sm">Contact our support team</p>
          </Link>
          
          <Link
            to="/docs"
            className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors text-center"
          >
            <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
            <p className="text-gray-300 text-sm">Browse our guides and docs</p>
          </Link>
          
          <Link
            to="/tutorials"
            className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors text-center"
          >
            <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Tutorials</h3>
            <p className="text-gray-300 text-sm">Learn with step-by-step guides</p>
          </Link>
          
          <Link
            to="/community"
            className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors text-center"
          >
            <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
            <p className="text-gray-300 text-sm">Connect with other users</p>
          </Link>
        </div>

        {/* Contact CTA */}
        <div className="bg-slate-700/50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is ready to assist you with any questions or issues.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
          >
            Contact Support
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;