import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Video, BookOpen } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      questions: [
        {
          question: 'How do I get started with your AI services?',
          answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
        },
        {
          question: 'What is the typical implementation timeline?',
          answer: 'Implementation timelines vary based on complexity, but most projects are completed within 4-12 weeks. We provide detailed project timelines during consultation.'
        },
        {
          question: 'Do you offer training for our team?',
          answer: 'Yes! We provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions we implement.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: '🔧',
      questions: [
        {
          question: 'What technical requirements do I need?',
          answer: 'Our solutions are designed to work with your existing infrastructure. We\'ll provide specific requirements during the consultation phase.'
        },
        {
          question: 'Do you provide 24/7 technical support?',
          answer: 'Yes, we offer 24/7 technical support for all our enterprise clients. Our support team is always available to help resolve any issues.'
        },
        {
          question: 'How do I report a technical issue?',
          answer: 'You can report issues through our support portal, email, or phone. We also have a dedicated support ticket system for tracking.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: '💳',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing including monthly subscriptions, project-based pricing, and custom enterprise agreements. Contact us for detailed pricing information.'
        },
        {
          question: 'Do you offer free trials?',
          answer: 'Yes, we offer free trials for most of our services. This allows you to test our solutions before making a commitment.'
        },
        {
          question: 'Can I change my plan anytime?',
          answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 minutes',
      action: 'Start Chat'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      action: 'Send Email'
    },
    {
      title: 'Support Portal',
      description: 'Access tickets, documentation, and self-service tools',
      icon: FileText,
      availability: '24/7',
      responseTime: 'Self-service',
      action: 'Access Portal'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      icon: Video,
      link: '/tutorials'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      icon: HelpCircle,
      link: '/knowledge-base'
    },
    {
      title: 'System Status',
      description: 'Real-time status of all our services',
      icon: CheckCircle,
      link: '/status'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              We're here to help you succeed with our AI solutions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Help Now
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support channel that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                    <div className="text-sm text-gray-500">
                      Response: {channel.responseTime}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {channel.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions
            </p>
          </div>
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white rounded-lg shadow-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600">
              Self-service tools and documentation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link 
                key={index}
                to={resource.link}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <resource.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-800">
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our support team is ready to assist you with any questions or issues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Support
            </Link>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📧 Email: support@ziontechgroup.com</p>
            <p>🕒 Available 24/7 for all support requests</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;