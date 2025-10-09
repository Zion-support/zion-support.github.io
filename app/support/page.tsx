import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, Mail, Clock, Search, FileText, Video, Book, Users } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: '💬',
      color: 'blue',
      availability: '24/7',
      responseTime: 'Instant'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      icon: '📧',
      color: 'green',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: '📞',
      color: 'purple',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session for complex issues',
      icon: '📹',
      color: 'orange',
      availability: 'By appointment',
      responseTime: 'Same day'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our quick start guide. You can also schedule a free consultation with our team.'
        },
        {
          question: 'What do I need to integrate your AI services?',
          answer: 'You\'ll need an API key (provided after signup), basic programming knowledge, and our SDK for your preferred language. We support Python, JavaScript, Java, Go, and PHP.'
        },
        {
          question: 'Is there a free trial available?',
          answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: '💰',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.'
        },
        {
          question: 'Can I change my plan anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
        },
        {
          question: 'Do you offer enterprise pricing?',
          answer: 'Yes, we offer custom enterprise pricing with volume discounts, dedicated support, and custom features. Contact our sales team for details.'
        }
      ]
    },
    {
      title: 'Technical Issues',
      icon: '🔧',
      questions: [
        {
          question: 'My API requests are failing. What should I do?',
          answer: 'First, check your API key and request format. If issues persist, check our status page for service updates or contact support with specific error messages.'
        },
        {
          question: 'How do I troubleshoot model performance issues?',
          answer: 'Review your input data quality, check model parameters, and ensure you\'re using the latest model version. Our documentation has detailed troubleshooting guides.'
        },
        {
          question: 'What if I need help with custom integrations?',
          answer: 'Our technical team can help with custom integrations. Contact support with your specific requirements, and we\'ll provide guidance or custom solutions.'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: '🔒',
      questions: [
        {
          question: 'How do you protect my data?',
          answer: 'We use enterprise-grade security including encryption at rest and in transit, SOC 2 compliance, and regular security audits. Your data is never shared with third parties.'
        },
        {
          question: 'Do you offer HIPAA compliance?',
          answer: 'Yes, we offer HIPAA-compliant solutions for healthcare customers. Contact our compliance team for specific requirements and implementation.'
        },
        {
          question: 'Can I use your services in regulated industries?',
          answer: 'Yes, we support various compliance frameworks including SOC 2, ISO 27001, GDPR, and industry-specific regulations. Contact us for compliance documentation.'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: '📚',
      url: '/docs',
      type: 'Internal'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: '🎥',
      url: '/tutorials',
      type: 'Internal'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and developers',
      icon: '👥',
      url: '/community',
      type: 'Internal'
    },
    {
      title: 'Status Page',
      description: 'Real-time service status and updates',
      icon: '📊',
      url: '/status',
      type: 'Internal'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable articles and solutions',
      icon: '🔍',
      url: '/knowledge-base',
      type: 'Internal'
    },
    {
      title: 'GitHub Repository',
      description: 'Open source examples and SDKs',
      icon: '💻',
      url: 'https://github.com/ziontechgroup',
      type: 'External'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'green': return 'from-green-500 to-green-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'orange': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need, when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Live Chat
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Browse FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support option that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(option.color)} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Available: {option.availability}</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>Response: {option.responseTime}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Help
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Search</h2>
            <p className="text-gray-600">Find answers to common questions instantly</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, guides, or solutions..."
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to the most common questions
            </p>
          </div>
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600">
              Additional resources to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target={resource.type === 'External' ? '_blank' : '_self'}
                rel={resource.type === 'External' ? 'noopener noreferrer' : ''}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100">
              Contact our support team directly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-blue-100 mb-4">Available 24/7</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Chat
              </button>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-blue-100 mb-4">support@ziontechgroup.com</p>
              <a 
                href="mailto:support@ziontechgroup.com"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Send Email
              </a>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-blue-100 mb-4">+1 302 464 0950</p>
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;