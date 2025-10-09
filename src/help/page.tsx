'use client';
import React, { useState } from 'react';
import { HelpCircle, Search, Phone, Mail, MessageSquare, BookOpen, Video, Download, CheckCircle, ArrowRight, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: BookOpen,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: HelpCircle,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: MessageSquare,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const helpArticles = {
    'getting-started': [
      {
        title: 'How to Get Started with AI Services',
        description: 'Complete guide to setting up your AI services and making the most of our platform',
        category: 'Getting Started',
        readTime: '5 min read',
        difficulty: 'Beginner',
        icon: BookOpen,
        color: 'text-blue-400'
      },
      {
        title: 'Setting Up Your First Dashboard',
        description: 'Step-by-step instructions for creating and customizing your analytics dashboard',
        category: 'Getting Started',
        readTime: '3 min read',
        difficulty: 'Beginner',
        icon: BookOpen,
        color: 'text-blue-400'
      },
      {
        title: 'Understanding AI Pricing Models',
        description: 'Learn about our different pricing tiers and how to choose the right one for your needs',
        category: 'Getting Started',
        readTime: '4 min read',
        difficulty: 'Beginner',
        icon: BookOpen,
        color: 'text-blue-400'
      },
      {
        title: 'Integration with Existing Systems',
        description: 'How to integrate our AI services with your current business systems',
        category: 'Getting Started',
        readTime: '7 min read',
        difficulty: 'Intermediate',
        icon: BookOpen,
        color: 'text-blue-400'
      }
    ],
    'troubleshooting': [
      {
        title: 'Common Login Issues and Solutions',
        description: 'Troubleshoot common authentication problems and access issues',
        category: 'Troubleshooting',
        readTime: '3 min read',
        difficulty: 'Beginner',
        icon: HelpCircle,
        color: 'text-red-400'
      },
      {
        title: 'API Connection Problems',
        description: 'Resolve API connectivity issues and authentication errors',
        category: 'Troubleshooting',
        readTime: '5 min read',
        difficulty: 'Intermediate',
        icon: HelpCircle,
        color: 'text-red-400'
      },
      {
        title: 'Performance Optimization',
        description: 'Improve system performance and resolve slow response times',
        category: 'Troubleshooting',
        readTime: '6 min read',
        difficulty: 'Advanced',
        icon: HelpCircle,
        color: 'text-red-400'
      },
      {
        title: 'Data Import/Export Issues',
        description: 'Fix problems with data migration and file uploads',
        category: 'Troubleshooting',
        readTime: '4 min read',
        difficulty: 'Intermediate',
        icon: HelpCircle,
        color: 'text-red-400'
      }
    ],
    'billing': [
      {
        title: 'Understanding Your Bill',
        description: 'Learn how to read and understand your monthly billing statement',
        category: 'Billing',
        readTime: '3 min read',
        difficulty: 'Beginner',
        icon: CheckCircle,
        color: 'text-green-400'
      },
      {
        title: 'Upgrading or Downgrading Plans',
        description: 'How to change your subscription plan and what to expect',
        category: 'Billing',
        readTime: '4 min read',
        difficulty: 'Beginner',
        icon: CheckCircle,
        color: 'text-green-400'
      },
      {
        title: 'Payment Methods and Billing',
        description: 'Manage your payment methods and billing information',
        category: 'Billing',
        readTime: '3 min read',
        difficulty: 'Beginner',
        icon: CheckCircle,
        color: 'text-green-400'
      },
      {
        title: 'Refund and Cancellation Policy',
        description: 'Understand our refund policy and how to cancel your subscription',
        category: 'Billing',
        readTime: '5 min read',
        difficulty: 'Beginner',
        icon: CheckCircle,
        color: 'text-green-400'
      }
    ],
    'technical': [
      {
        title: 'API Documentation and Examples',
        description: 'Complete API reference with code examples and best practices',
        category: 'Technical',
        readTime: '10 min read',
        difficulty: 'Advanced',
        icon: MessageSquare,
        color: 'text-purple-400'
      },
      {
        title: 'Security Best Practices',
        description: 'Implement security measures to protect your data and systems',
        category: 'Technical',
        readTime: '8 min read',
        difficulty: 'Advanced',
        icon: MessageSquare,
        color: 'text-purple-400'
      },
      {
        title: 'Custom Integration Guide',
        description: 'Build custom integrations with our platform using webhooks and APIs',
        category: 'Technical',
        readTime: '12 min read',
        difficulty: 'Advanced',
        icon: MessageSquare,
        color: 'text-purple-400'
      },
      {
        title: 'Monitoring and Logging',
        description: 'Set up monitoring and logging for your AI services and applications',
        category: 'Technical',
        readTime: '6 min read',
        difficulty: 'Intermediate',
        icon: MessageSquare,
        color: 'text-purple-400'
      }
    ]
  };

  const resources = [
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our services',
      icon: Video,
      color: 'text-red-400',
      count: '50+ videos'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive technical documentation and guides',
      icon: BookOpen,
      color: 'text-blue-400',
      count: '200+ articles'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      icon: MessageSquare,
      color: 'text-purple-400',
      count: '100+ endpoints'
    },
    {
      title: 'Download Center',
      description: 'SDKs, tools, and resources for developers',
      icon: Download,
      color: 'text-green-400',
      count: '25+ downloads'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageSquare,
      color: 'text-cyan-400',
      availability: '24/7',
      responseTime: 'Instant'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      icon: Mail,
      color: 'text-blue-400',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      color: 'text-green-400',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share knowledge',
      icon: Users,
      color: 'text-purple-400',
      availability: '24/7',
      responseTime: 'Community driven'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get started with your AI services?',
      answer: 'Most of our AI services can be set up within 24-48 hours. We provide comprehensive onboarding support to ensure you\'re up and running quickly.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs including online courses, live workshops, and one-on-one sessions to help your team master our platform.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 support through multiple channels including live chat, email, phone, and our community forum. Our response times vary by channel but we aim to respond within 4 hours for most inquiries.'
    },
    {
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! We provide extensive APIs, webhooks, and integration tools to seamlessly connect with your existing business systems and workflows.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for most of our services. This allows you to test our platform and see how it fits your business needs before committing to a paid plan.'
    }
  ];

  const getCurrentArticles = () => {
    return helpArticles[activeCategory as keyof typeof helpArticles] || [];
  };

  const filteredArticles = getCurrentArticles().filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Help Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers, get support, and learn how to make the most of our AI and IT services. 
              We're here to help you succeed.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-lg"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.bgColor} ${category.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              {categories.find(cat => cat.id === activeCategory)?.name} Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 ${article.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-lg flex items-center justify-center mr-3`}>
                      <article.icon className={`w-5 h-5 ${article.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{article.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{article.readTime}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {article.difficulty}
                    </span>
                  </div>
                  
                  <button className="w-full text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors flex items-center justify-center">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${resource.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <resource.icon className={`w-8 h-8 ${resource.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                  <div className="text-cyan-400 text-sm font-medium">{resource.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Get Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${channel.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className={`w-8 h-8 ${channel.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                  <div className="text-sm text-gray-400 mb-2">
                    <div className="font-medium">Availability: {channel.availability}</div>
                    <div>Response: {channel.responseTime}</div>
                  </div>
                  <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium">
                    Contact Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpPage;