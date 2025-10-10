'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap, MessageSquare } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'implementation', name: 'Implementation' }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire implementation process.',
      category: 'general'
    },
    {
      question: 'What cloud platforms do you support?',
      answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud environments. Our solutions are designed to be platform-agnostic for maximum flexibility.',
      category: 'technical'
    },
    {
      question: 'Do you provide 24/7 technical support?',
      answer: 'Yes! We offer 24/7 technical support for all our enterprise clients. Our support team includes certified engineers who can help with any technical issues or questions you may have.',
      category: 'technical'
    },
    {
      question: 'What is your pricing model?',
      answer: 'Our pricing is based on the specific solutions and services you need. We offer flexible pricing models including subscription-based, project-based, and custom enterprise agreements. Contact us for a personalized quote.',
      category: 'billing'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary depending on the complexity of your project. Simple AI integrations can take 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We\'ll provide a detailed timeline during planning.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Absolutely! We provide comprehensive training programs for your team, including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use and maintain our solutions.',
      category: 'implementation'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR.',
      category: 'technical'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing systems. We support a wide range of APIs and can work with virtually any technology stack to ensure smooth integration.',
      category: 'technical'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call our support team for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 2 hours',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      color: 'text-blue-400'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Business Hours',
      color: 'text-purple-400'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation',
      contact: 'Self-service',
      availability: '24/7',
      color: 'text-orange-400'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for your Zion Tech Group solutions. Find answers, contact support, and access our knowledge base." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="text-cyan-400">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the support you need to make the most of your Zion Tech Group solutions. We're here to help you succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Get Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-400/30 transition-colors">
                      <channel.icon className={`w-8 h-8 ${channel.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <p className="text-cyan-400 font-medium mb-2">{channel.contact}</p>
                    <p className="text-sm text-gray-400">{channel.availability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl mb-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                      <HelpCircle className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Still Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Our Support Team</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">support@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-gray-300">Within 2 hours for email, immediate for phone</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <button className="w-full flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Browse Knowledge Base</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Start Live Chat</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Schedule a Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;