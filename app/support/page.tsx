'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  BookOpen, 
  Video, 
  FileText, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Zap,
  Shield,
  Users
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const supportCategories = [
    {
      name: 'Getting Started',
      icon: Zap,
      description: 'Quick start guides and onboarding resources',
      articles: [
        'How to set up your account',
        'First steps with AI tools',
        'Account verification process',
        'Initial configuration guide'
      ]
    },
    {
      name: 'AI Tools & Features',
      icon: HelpCircle,
      description: 'Learn about our AI-powered features and tools',
      articles: [
        'AI Analytics Dashboard guide',
        'Using AI Content Studio',
        'Setting up AI automation',
        'Custom AI model training'
      ]
    },
    {
      name: 'Billing & Account',
      icon: Shield,
      description: 'Manage your subscription and account settings',
      articles: [
        'Understanding your bill',
        'Upgrading your plan',
        'Payment methods',
        'Account security settings'
      ]
    },
    {
      name: 'Technical Support',
      icon: BookOpen,
      description: 'Technical issues and troubleshooting',
      articles: [
        'API documentation',
        'Integration guides',
        'Troubleshooting common issues',
        'System requirements'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI tools?',
      answer: 'Getting started is easy! After signing up, you\'ll receive a welcome email with setup instructions. You can also access our comprehensive onboarding guide in your dashboard.',
      category: 'Getting Started'
    },
    {
      question: 'What is included in the free trial?',
      answer: 'Our 14-day free trial includes access to all basic features, 5 AI tools, and email support. No credit card required to start.',
      category: 'Billing & Account'
    },
    {
      question: 'How secure is my data?',
      answer: 'We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is protected with bank-level security.',
      category: 'Technical Support'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! We offer APIs and pre-built integrations with popular platforms like Salesforce, HubSpot, Slack, and more. Check our integration guide for details.',
      category: 'Technical Support'
    },
    {
      question: 'What support channels are available?',
      answer: 'We offer multiple support channels: 24/7 chat support, email support, phone support for enterprise customers, and our comprehensive knowledge base.',
      category: 'Getting Started'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your account settings. Your access will continue until the end of your current billing period.',
      category: 'Billing & Account'
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'green'
    },
    {
      name: 'Email Support',
      icon: Mail,
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'blue'
    },
    {
      name: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'purple'
    },
    {
      name: 'Knowledge Base',
      icon: BookOpen,
      description: 'Search our comprehensive guides',
      availability: '24/7',
      responseTime: 'Instant',
      color: 'cyan'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'All' || faq.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Support | Zion Tech Group - Help Center & Customer Support</title>
        <meta name="description" content="Get help with Zion Tech Group products. Access our knowledge base, contact support, and find answers to common questions." />
        <meta name="keywords" content="support, help center, customer service, FAQ, documentation, technical support" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get help when you need it. Find answers, contact support, and access our comprehensive resources.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card hologram-card p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={channel.name} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  channel.color === 'green' ? 'bg-green-500/20' :
                  channel.color === 'blue' ? 'bg-blue-500/20' :
                  channel.color === 'purple' ? 'bg-purple-500/20' :
                  'bg-cyan-500/20'
                }`}>
                  <channel.icon className={`w-8 h-8 ${
                    channel.color === 'green' ? 'text-green-400' :
                    channel.color === 'blue' ? 'text-blue-400' :
                    channel.color === 'purple' ? 'text-purple-400' :
                    'text-cyan-400'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-sm text-gray-400 mb-2">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                  <div className="flex items-center justify-center">
                    <Zap className="w-4 h-4 mr-2" />
                    {channel.responseTime}
                  </div>
                </div>
                <button className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 mt-4">
                  Get Help
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Knowledge Base
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive guides and documentation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <div key={category.name} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                      {article}
                    </li>
                  ))}
                </ul>
                <button className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 mt-4">
                  Browse Articles
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>

          {/* FAQ Filter */}
          <div className="cyber-card hologram-card p-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All
              </button>
              {['Getting Started', 'Billing & Account', 'Technical Support'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center cyber-card hologram-card p-12">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help you succeed. Contact us through any of these channels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <Phone className="w-5 h-5" />
              <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:support@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                support@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <MessageCircle className="w-5 h-5" />
              <span>Live Chat Available</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Start Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;