'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, ExternalLink } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'general'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly.',
      category: 'support'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs for your team, including hands-on workshops, documentation, and ongoing support.',
      category: 'training'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular audits, and compliance with industry standards.',
      category: 'security'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems and can work with virtually any technology stack.',
      category: 'integration'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7 Emergency Support'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support through our website',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST'
    }
  ];

  const categories = ['All', 'General', 'Support', 'Implementation', 'Training', 'Security', 'Integration'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Support Center
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert assistance
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Get Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:cyber-glow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-gray-300 text-sm mb-4">Comprehensive guides and API documentation</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                  View Docs →
                </button>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Status Page</h3>
                <p className="text-gray-300 text-sm mb-4">Real-time system status and uptime</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                  Check Status →
                </button>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-300 text-sm mb-4">Join our community forum</p>
                <button className="text-green-400 hover:text-green-300 font-medium text-sm">
                  Join Community →
                </button>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
                <p className="text-gray-300 text-sm mb-4">Learn with our training programs</p>
                <button className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                  Start Learning →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cyber-glow hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Support</span>
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 cyber-glow"
                >
                  Email Support
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