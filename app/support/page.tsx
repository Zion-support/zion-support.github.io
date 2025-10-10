'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Video, BookOpen, Headphones } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'Getting Started',
    'AI Services',
    'IT Services',
    'Billing',
    'Technical Issues',
    'Account Management'
  ];

  const faqs = [
    {
      id: '1',
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team at (302) 464-0950 or email kleber@ziontechgroup.com for a free consultation. We\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started',
      helpful: 95
    },
    {
      id: '2',
      question: 'What AI technologies do you support?',
      answer: 'We support a wide range of AI technologies including machine learning, natural language processing, computer vision, predictive analytics, and custom AI model development. Our team works with all major AI frameworks and platforms.',
      category: 'AI Services',
      helpful: 92
    },
    {
      id: '3',
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our clients. You can reach us via phone, email, or our support portal. Emergency support is available for critical issues.',
      category: 'Technical Issues',
      helpful: 98
    },
    {
      id: '4',
      question: 'How does billing work?',
      answer: 'We offer flexible billing options including monthly and yearly plans. All plans include our core services with transparent pricing. You can upgrade or downgrade your plan at any time.',
      category: 'Billing',
      helpful: 89
    },
    {
      id: '5',
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems. Our team will work with you to ensure smooth integration with your current infrastructure and workflows.',
      category: 'Technical Issues',
      helpful: 94
    },
    {
      id: '6',
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including SOC2 compliance, data encryption, secure APIs, and regular security audits. Your data is protected with bank-level security standards.',
      category: 'Technical Issues',
      helpful: 96
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '(302) 464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Within 5 minutes'
    },
    {
      icon: FileText,
      title: 'Support Portal',
      description: 'Submit and track tickets',
      contact: 'support.ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 1 hour'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Search our extensive knowledge base',
      link: '/knowledge-base'
    },
    {
      icon: Headphones,
      title: 'Training',
      description: 'Get trained on our solutions',
      link: '/training'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group - 24/7 Customer Support</title>
        <meta name="description" content="Get 24/7 support for your AI and IT solutions. Contact us via phone, email, or live chat. We're here to help you succeed." />
        <meta name="keywords" content="customer support, technical support, AI support, IT support, help desk, 24/7 support" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            We're Here to <span className="text-cyan-400">Help</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get 24/7 support for all your AI and IT solutions. Our expert team is ready to help you succeed.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div>{channel.contact}</div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                  <div>Response: {channel.responseTime}</div>
                </div>
                <a
                  href={channel.contact.startsWith('(') ? `tel:${channel.contact}` : `mailto:${channel.contact}`}
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Contact Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {faq.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {faq.helpful}% helpful
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQs found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive resources to get the most out of our solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;