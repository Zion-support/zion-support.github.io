'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, MessageSquare } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our sales team for a free consultation, and we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started'
    },
    {
      question: 'What is the typical implementation timeline?',
      answer: 'Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months.',
      category: 'Implementation'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes! We provide comprehensive training programs for your team, including hands-on workshops, documentation, and ongoing support to ensure successful adoption.',
      category: 'Training'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 technical support, dedicated account managers, regular check-ins, and priority support for enterprise clients. Support includes phone, email, and chat options.',
      category: 'Support'
    },
    {
      question: 'Can I integrate your AI solutions with existing systems?',
      answer: 'Absolutely! Our AI solutions are designed to integrate seamlessly with existing systems through APIs, webhooks, and custom connectors. We support most major platforms.',
      category: 'Integration'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure APIs, compliance with industry standards (SOC 2, GDPR, HIPAA), and regular security audits.',
      category: 'Security'
    },
    {
      question: 'Do you offer custom AI model development?',
      answer: 'Yes! Our team of AI experts can develop custom models tailored to your specific business needs, data, and use cases for optimal performance.',
      category: 'Custom Development'
    },
    {
      question: 'What happens if I need to scale up or down?',
      answer: 'Our solutions are designed to scale with your business. You can easily adjust your plan, add new features, or scale resources based on your changing needs.',
      category: 'Scaling'
    }
  ];

  const categories = ['all', 'Getting Started', 'Implementation', 'Training', 'Support', 'Integration', 'Security', 'Custom Development', 'Scaling'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (302) 464-0950',
      hours: '24/7 Available',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      hours: 'Response within 2 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      contact: 'docs.ziontechgroup.com',
      hours: 'Always available',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step guide to implementing our AI solutions',
      type: 'Guide',
      icon: BookOpen
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and integration examples',
      type: 'Documentation',
      icon: MessageSquare
    },
    {
      title: 'Video Tutorials',
      description: 'Video tutorials covering all major features',
      type: 'Video',
      icon: MessageCircle
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices and optimization tips',
      type: 'Guide',
      icon: CheckCircle
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 AI & IT Support</title>
        <meta name="description" content="Get 24/7 support for all your AI and IT needs. Phone, email, chat, and comprehensive documentation available." />
        <meta name="keywords" content="AI support, IT support, technical support, customer service, help desk" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="24/7 support for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get 24/7 support for all your AI and IT needs with our 
              comprehensive support channels and resources.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get Help</h2>
              <p className="text-gray-300">Choose your preferred support channel</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-cyan-400 font-semibold">{channel.contact}</p>
                    <p className="text-gray-400 text-sm">{channel.hours}</p>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${channel.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                    Contact Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">Find answers to common questions</p>
            </div>
            
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-white font-medium">{faq.question}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                      <div className={`transform transition-transform duration-200 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-400 mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Resources</h2>
              <p className="text-gray-300">Helpful resources to get the most out of our solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                      Access →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-gray-300">Can't find what you're looking for? Contact our support team directly.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      support@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Business Hours</p>
                    <p className="text-white font-semibold">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Submit a Ticket</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-2">
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Describe your issue or question"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Ticket
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;