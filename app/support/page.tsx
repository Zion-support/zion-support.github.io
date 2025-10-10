'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Video, BookOpen } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const supportCategories = [
    'All',
    'AI Services',
    'Cloud Computing',
    'Cybersecurity',
    'Micro SAAS',
    'Billing',
    'Technical'
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with AI services?',
      answer: 'Getting started with our AI services is easy. Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'AI Services'
    },
    {
      id: 2,
      question: 'What cloud platforms do you support?',
      answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. Our team will help you choose the best platform for your needs.',
      category: 'Cloud Computing'
    },
    {
      id: 3,
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, multi-factor authentication, and regular security audits to protect your data.',
      category: 'Cybersecurity'
    },
    {
      id: 4,
      question: 'Can I try micro SAAS tools before purchasing?',
      answer: 'Yes! All our micro SAAS tools come with free trials. You can test the features and functionality before making a commitment. Contact us to set up your trial.',
      category: 'Micro SAAS'
    },
    {
      id: 5,
      question: 'What are your support hours?',
      answer: 'We provide 24/7 support for all our services. Our support team is available around the clock to help you with any issues or questions you may have.',
      category: 'Technical'
    },
    {
      id: 6,
      question: 'How do you handle billing and payments?',
      answer: 'We offer flexible billing options including monthly, quarterly, and annual plans. We accept all major credit cards and can also arrange enterprise billing for large organizations.',
      category: 'Billing'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '(302) 464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Business hours',
      responseTime: 'Immediate'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a video consultation with our experts',
      contact: 'Book online',
      availability: 'By appointment',
      responseTime: 'Same day'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our services',
      link: '/tutorials'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all our AI and IT services. Contact our expert team via phone, email, or live chat for immediate assistance." />
        <meta name="keywords" content="technical support, customer service, help desk, AI support, cloud support, 24/7 support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text glitch-text" data-text="24/7 Support">
              24/7 Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert support team is available around the clock to help you with any questions or issues. 
              Get immediate assistance via phone, email, or live chat.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Email Support
              </a>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Support Channels
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you. All channels are monitored by our expert team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="quantum-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 card-hover-lift group">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-cyan-400 font-semibold">{channel.contact}</div>
                    <div className="text-gray-400">Available: {channel.availability}</div>
                    <div className="text-gray-400">Response: {channel.responseTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and support.
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="cyber-card hologram-card p-6 mb-8 border border-cyan-500/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    {supportCategories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="quantum-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredFaqs.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No FAQs found</h3>
                  <p className="text-gray-300 mb-8">Try adjusting your search terms or browse all categories.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="cyber-button"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Additional Resources
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Access our comprehensive documentation, tutorials, and knowledge base for self-service support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="quantum-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 card-hover-lift group">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Access Resource
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Still Need Help?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Contact us through any of our support channels for immediate assistance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">Phone</div>
                    <a href="tel:+13024640950" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                      (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">Email</div>
                    <a href="mailto:support@ziontechgroup.com" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                      support@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">Availability</div>
                    <div className="text-white font-semibold">24/7 Support</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button"
                >
                  Call Now
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;