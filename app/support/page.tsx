import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, MessageCircle, Phone, Mail, Search, Book, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: Book,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/docs',
      features: ['API Reference', 'Getting Started', 'Code Examples', 'Best Practices']
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/community',
      features: ['Developer Discussions', 'Q&A', 'Feature Requests', 'Showcase Projects']
    },
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      link: '#chat',
      features: ['24/7 Availability', 'Instant Response', 'Technical Support', 'Account Help']
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond',
      icon: Mail,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      link: 'mailto:support@ziontechgroup.com',
      features: ['Detailed Responses', 'File Attachments', 'Priority Support', 'Follow-up Tracking']
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with the AI API?',
      answer: 'Getting started is easy! First, sign up for an account and get your API key. Then check out our quick start guide in the documentation. You can make your first API call in under 5 minutes.',
      category: 'Getting Started'
    },
    {
      question: 'What are the API rate limits?',
      answer: 'Our API has generous rate limits. Free tier users get 1,000 requests per month, while paid plans start at 10,000 requests per month. Enterprise plans have custom limits based on your needs.',
      category: 'API Usage'
    },
    {
      question: 'How accurate are your AI models?',
      answer: 'Our AI models achieve industry-leading accuracy rates. For example, our sentiment analysis model has 95%+ accuracy, and our image classification models achieve 99%+ accuracy on standard benchmarks.',
      category: 'AI Models'
    },
    {
      question: 'Can I train custom models?',
      answer: 'Yes! We offer custom model training services. You can upload your data and we\'ll train a model specifically for your use case. This is available for enterprise customers.',
      category: 'Custom Models'
    },
    {
      question: 'What data security measures do you have?',
      answer: 'We take data security seriously. All data is encrypted in transit and at rest, we\'re SOC 2 Type II compliant, and we follow GDPR guidelines. Your data is never used to train our general models.',
      category: 'Security'
    },
    {
      question: 'How do I upgrade my plan?',
      answer: 'You can upgrade your plan anytime from your dashboard. Simply go to the billing section and select your new plan. Changes take effect immediately.',
      category: 'Billing'
    }
  ];

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: '24/7',
      responseTime: 'Immediate'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI services. Documentation, community, and direct support options." />
        <meta name="keywords" content="support, help, documentation, community, technical support, AI help" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the help you need to succeed with our AI services. Multiple support channels available 24/7.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How Can We Help?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${option.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <option.icon className={`w-6 h-6 ${option.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600">
                    {option.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-3">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                  <HelpCircle className="w-6 h-6 text-gray-400 ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="space-y-3">
                  <div className="text-lg font-semibold text-gray-900">{method.contact}</div>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {method.availability}
                  </div>
                  <div className="text-sm text-gray-500">
                    Response time: {method.responseTime}
                  </div>
                </div>
                <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">System Status</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
              <span className="text-xl font-semibold text-gray-900">All Systems Operational</span>
            </div>
            <p className="text-gray-600 mb-6">
              All our services are running normally. No incidents reported.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">&lt;100ms</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-gray-600">Active Incidents</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;