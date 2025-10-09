'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const SupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faq');

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact us for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.'
    },
    {
      question: 'What is the typical timeline for AI implementation?',
      answer: 'Implementation timelines vary based on complexity. Simple AI integrations can take 2-4 weeks, while comprehensive AI transformations may take 3-6 months. We\'ll provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs to help your team understand and effectively use our AI solutions. Training includes hands-on workshops, documentation, and ongoing support.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support, regular system monitoring, performance optimization, and proactive maintenance. Our support team is always available to help with any issues or questions.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure, including CRM systems, databases, cloud platforms, and other business applications.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards. Your data security is our top priority.'
    }
  ];

  const supportChannels = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'kleber@ziontechgroup.com',
      responseTime: 'Within 24 hours',
      icon: '📧'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      contact: '(302) 464-0950',
      responseTime: 'Mon-Fri: 9AM-6PM EST',
      icon: '📞'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our website chat',
      contact: 'Available on website',
      responseTime: 'Real-time',
      icon: '💬'
    },
    {
      title: 'Support Portal',
      description: 'Access our knowledge base and submit tickets',
      contact: 'support.ziontechgroup.com',
      responseTime: '24/7 access',
      icon: '🎫'
    }
  ];

  const knowledgeBase = [
    {
      category: 'Getting Started',
      articles: [
        'Quick Start Guide',
        'System Requirements',
        'Account Setup',
        'First Steps with AI'
      ]
    },
    {
      category: 'AI Services',
      articles: [
        'AI Model Training',
        'Data Preparation',
        'Model Deployment',
        'Performance Optimization'
      ]
    },
    {
      category: 'IT Services',
      articles: [
        'Cloud Migration Guide',
        'Security Best Practices',
        'Backup and Recovery',
        'System Monitoring'
      ]
    },
    {
      category: 'Troubleshooting',
      articles: [
        'Common Issues',
        'Error Messages',
        'Performance Issues',
        'Integration Problems'
      ]
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Support - Help & Technical Support | Zion Tech Group"
        description="Get help with our AI and IT solutions. Access our knowledge base, contact support, and find answers to common questions about our services."
        keywords={['support', 'help', 'technical support', 'customer service', 'FAQ', 'knowledge base']}
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Support</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  We're here to help! Get the support you need for our AI and IT solutions. 
                  Find answers, contact our team, and access our knowledge base.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Contact Support
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Support Channels */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Help</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the support channel that works best for you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-6">{channel.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="space-y-2">
                      <p className="text-cyan-400 font-medium">{channel.contact}</p>
                      <p className="text-gray-400 text-sm">{channel.responseTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Tabs */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Support Resources</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Find answers and resources to help you get the most out of our services.
                </p>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center mb-12">
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors mr-4 mb-4 ${
                    activeTab === 'faq'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  FAQ
                </button>
                <button
                  onClick={() => setActiveTab('knowledge')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors mr-4 mb-4 ${
                    activeTab === 'knowledge'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  Knowledge Base
                </button>
                <button
                  onClick={() => setActiveTab('tutorials')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors mr-4 mb-4 ${
                    activeTab === 'tutorials'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  Tutorials
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'faq' && (
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="cyber-card p-8">
                      <h3 className="text-xl font-bold text-white mb-4">{item.question}</h3>
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'knowledge' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {knowledgeBase.map((category, index) => (
                    <div key={index} className="cyber-card p-6">
                      <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex}>
                            <a
                              href="#"
                              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                            >
                              {article}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'tutorials' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="cyber-card p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Getting Started with AI</h3>
                    <p className="text-gray-300 mb-4">
                      Learn the basics of implementing AI solutions in your business.
                    </p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      Watch Tutorial →
                    </a>
                  </div>
                  
                  <div className="cyber-card p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Cloud Migration Guide</h3>
                    <p className="text-gray-300 mb-4">
                      Step-by-step guide to migrating your infrastructure to the cloud.
                    </p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      Watch Tutorial →
                    </a>
                  </div>
                  
                  <div className="cyber-card p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Security Best Practices</h3>
                    <p className="text-gray-300 mb-4">
                      Essential security measures to protect your business data.
                    </p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      Watch Tutorial →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Contact Support */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="cyber-card p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Still Need Help?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our support team is ready to help you with any questions or issues. 
                  Contact us and we'll get back to you as soon as possible.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Contact Support
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SupportPage;