'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Mail, Phone, Clock, CheckCircle, ArrowRight, Search } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      id: 'email',
      title: 'Email Support',
      description: 'Get help via email for non-urgent issues',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      contact: 'support@ziontechgroup.com',
      icon: Mail,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      contact: '+1-302-464-0950',
      icon: Phone,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Within 2 minutes',
      contact: 'Start Chat',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'video',
      title: 'Video Support',
      description: 'Schedule a video call for complex technical issues',
      availability: 'By appointment',
      responseTime: 'Within 2 hours',
      contact: 'Schedule Call',
      icon: Clock,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply contact our team through any of our support channels, and we\'ll schedule a consultation to understand your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What is your typical response time?',
      answer: 'Our response times vary by channel: Email support within 4 hours, live chat within 2 minutes during business hours, and phone support is immediate during our business hours.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'We offer 24/7 email support for all customers. Phone and chat support are available during business hours (Mon-Fri 9AM-6PM EST).'
    },
    {
      question: 'Can I schedule a technical consultation?',
      answer: 'Yes! We offer free technical consultations to help you understand our services and determine the best solutions for your specific needs.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Multiple support channels available including email, phone, and live chat." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get support for our AI and IT solutions through multiple channels.
            </p>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supportChannels.map((channel) => (
              <div key={channel.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${channel.color} flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                  <div className="text-sm text-gray-400">
                    Response: {channel.responseTime}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  {channel.contact}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
            
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center mx-auto">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SupportPage;