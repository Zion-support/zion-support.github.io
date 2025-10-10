'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation, and we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started'
    },
    {
      id: 2,
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple AI implementations take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during consultation.',
      category: 'Project Management'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive support packages including 24/7 technical support, regular updates, maintenance, and optimization services.',
      category: 'Support'
    },
    {
      id: 4,
      question: 'What security measures do you implement?',
      answer: 'We follow industry best practices including data encryption, secure cloud infrastructure, compliance with GDPR and HIPAA, and regular security audits.',
      category: 'Security'
    },
    {
      id: 5,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems including CRM, ERP, databases, and third-party applications.',
      category: 'Integration'
    },
    {
      id: 6,
      question: 'What is your pricing structure?',
      answer: 'Our pricing is flexible and based on project scope, complexity, and requirements. We offer both fixed-price and hourly consulting options.',
      category: 'Pricing'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 302 464 0950',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate'
    },</Phone className="w-6 h-6 text-cyan-400" />
    {</Phone className="w-6 h-6 text-cyan-400" />
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },</Mail className="w-6 h-6 text-cyan-400" />
    {</Mail className="w-6 h-6 text-cyan-400" />
      icon: <MessageCircle className="w-6 h-6 text-cyan-400" />,
      title: 'Live Chat',
      description: 'Get instant help through our website chat',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate'
    },</MessageCircle className="w-6 h-6 text-cyan-400" />
    {</MessageCircle className="w-6 h-6 text-cyan-400" />
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      contact: 'docs.ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Self-service'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', count: faqs.length },
    { id: 'Getting Started', name: 'Getting Started', count: faqs.filter(faq => faq.category === 'Getting Started').length },
    { id: 'Project Management', name: 'Project Management', count: faqs.filter(faq => faq.category === 'Project Management').length },
    { id: 'Support', name: 'Support', count: faqs.filter(faq => faq.category === 'Support').length },
    { id: 'Security', name: 'Security', count: faqs.filter(faq => faq.category === 'Security').length },
    { id: 'Integration', name: 'Integration', count: faqs.filter(faq => faq.category === 'Integration').length },
    { id: 'Pricing', name: 'Pricing', count: faqs.filter(faq => faq.category === 'Pricing').length }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());</BookOpen className="w-6 h-6 text-cyan-400" />
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;</BookOpen className="w-6 h-6 text-cyan-400" />
    return matchesSearch && matchesCategory</BookOpen className="w-6 h-6 text-cyan-400" />
  })</BookOpen className="w-6 h-6 text-cyan-400" />return (<//BookOpen className="w-6 h-6 text-cyan-400" />
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for your Zion Tech Group services. Find answers to common questions and contact our support team." />
      </Helmet>   <//Helmet>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">{/* Header */}</div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Support Center</h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Get help when you need it. Our support team is here to assist you with any questions or issues.</p className="text-xl text-gray-300 max-w-3xl mx-auto">
              </p>
            </div>{/* Support Channels */}<//div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">How Can We Help?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{supportChannels.map((channel, index) => (</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex justify-center mb-4">{channel.icon}</div className="flex justify-center mb-4">
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{channel.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="text-cyan-400 font-semibold">{channel.contact}</div>
                      <div className="text-gray-400">{channel.availability}</div>
                      <div className="text-gray-400">Response: {channel.responseTime}</div>))} {/* Search and Filter */}<//div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) =>setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"</input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) =>
                  /></input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) =>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) =>setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  ></select
                    value={selectedCategory}
                    onChange={(e) =>
                    {categories.map(category => ( {category.name} ({category.count})</select
                    value={selectedCategory}
                    onChange={(e) =>
                      </option>))}<//option>
                  </select>
                </div>{/* FAQ List */} {filteredFaqs.map((faq) => (<//div>
                <div key={faq.id} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">{faq.category}</span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        </span>
                        <HelpCircle className="w-4 h-4 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>))} {/* No Results */}<//div>
            {filteredFaqs.length === 0 && (<//div>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>)}
<//div>
            {/* Contact Support */}<//div>
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2 className="text-2xl font-bold text-white mb-4">
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Can't find what you're looking for? Our support team is ready to help you with any questions or issues.</p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Call Support</a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Email Support</a
                    href="mailto:support@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                </div>
        </div>
      </main> <//main>
      <Footer />
    </>);<//>
}<//>
export default SupportPage<//>