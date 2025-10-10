'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD

const SupportPage: React.FC = () => {
=======
import SEOOptimizer from '../components/SEOOptimizer';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb

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
<<<<<<< HEAD
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions.'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements.'
=======
      question: 'Do you provide training for our team?',
      answer: 'Yes! We provide comprehensive training programs including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our solutions.'
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
<<<<<<< HEAD
      description: 'Speak directly with our technical experts',
      contact: '+1-302-464-0950',
      availability: '24/7'
=======
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      hours: '24/7'
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
    },
    {
      icon: Mail,
      title: 'Email Support',
<<<<<<< HEAD
      description: 'Get detailed responses to your questions',
=======
      description: 'Send us an email and we\'ll respond within 24 hours',
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
      contact: 'support@ziontechgroup.com',
      hours: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
<<<<<<< HEAD
      availability: '24/7'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />
        <meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Technical
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert help and support for your AI and IT solutions. 
              Our team is here to ensure your success.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How can we help you?</h2>
              <p className="text-xl text-gray-300">Search our knowledge base or contact our support team</p>
            </div>
=======
      hours: '9 AM - 6 PM EST'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for your Zion Tech Group solutions. 24/7 technical support and comprehensive documentation." />
        <meta name="keywords" content="support, help, technical support, customer service, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the help you need with our comprehensive support resources and expert assistance.
              </p>
            </div>

            {/* Search */}
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
<<<<<<< HEAD
                  placeholder="Search for help articles, guides, and solutions..."
=======
                  placeholder="Search for help..."
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>
              <p className="text-xl text-gray-300">Get in touch with our support team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
=======
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
<<<<<<< HEAD
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
=======
                  <p className="text-cyan-400 font-medium mb-2">{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.hours}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
<<<<<<< HEAD
        <section className="py-16 px-4">
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions</p>
            </div>
            <div className="space-y-6">
<<<<<<< HEAD
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
=======
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Support Hours */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Support Hours</h2>
                <p className="text-xl text-gray-300">We're here when you need us</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Emergency Support</h3>
                  <p className="text-gray-300">24/7 for critical issues</p>
                  <p className="text-gray-300">Emergency support included</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
=======
        {/* Business Hours */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Support Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Technical Support</h3>
                <p className="text-gray-300">24/7 availability</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
                <p className="text-gray-300">Within 2 hours for critical issues</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
      
      <Footer />
    </>
  );
};

export default SupportPage;
=======

      <Footer />
      <SEOOptimizer />
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
