'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight, Star, Users, Headphones, BookOpen } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7 Emergency Support',
      responseTime: 'Immediate',
      tier: 'All Plans'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your technical questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Within 2 hours',
      tier: 'All Plans'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Real-time chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Within 5 minutes',
      tier: 'Professional+'
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: 'Dedicated support for enterprise clients',
      contact: 'priority@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 15 minutes',
      tier: 'Enterprise'
    }
  ];

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'We provide 24/7 emergency support for all clients. Regular support is available Monday-Friday, 9AM-6PM EST. Enterprise clients have dedicated 24/7 support.'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'Response times vary by plan: Emergency support (immediate), Email support (within 2 hours), Live chat (within 5 minutes), and Priority support (within 15 minutes).'
    },
    {
      question: 'What types of issues can you help with?',
      answer: 'We provide comprehensive support for all our AI and IT services including technical issues, implementation guidance, troubleshooting, optimization, and best practices.'
    },
    {
      question: 'Do you offer training for your services?',
      answer: 'Yes, we provide comprehensive training programs including documentation, video tutorials, webinars, and hands-on workshops for all our services.'
    },
    {
      question: 'Is there a cost for support?',
      answer: 'Support is included with all our service plans. Emergency support is available to all clients, while additional support features vary by plan tier.'
    },
    {
      question: 'How do I escalate a support issue?',
      answer: 'You can escalate issues through your account manager, by calling our priority support line, or by emailing priority@ziontechgroup.com for immediate attention.'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs',
      type: 'Documentation'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and get community support',
      link: '/community',
      type: 'Community'
    },
    {
      icon: Star,
      title: 'Best Practices',
      description: 'Learn best practices and optimization tips',
      link: '/best-practices',
      type: 'Guides'
    },
    {
      icon: MessageSquare,
      title: 'Status Page',
      description: 'Check system status and uptime information',
      link: '/status',
      type: 'Status'
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      description: 'Essential support for all clients',
      features: [
        'Email support',
        'Phone support',
        'Documentation access',
        'Community forum',
        'Response within 2 hours'
      ],
      price: 'Included'
    },
    {
      name: 'Professional Support',
      description: 'Enhanced support for growing businesses',
      features: [
        'Everything in Basic',
        'Live chat support',
        'Priority email support',
        'Video call support',
        'Response within 1 hour',
        'Extended support hours'
      ],
      price: 'Included with Professional plans'
    },
    {
      name: 'Enterprise Support',
      description: 'Dedicated support for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        '24/7 phone support',
        'On-site support available',
        'Response within 15 minutes',
        'Custom SLA agreements',
        'White-glove service'
      ],
      price: 'Included with Enterprise plans'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all Zion Tech Group services. Multiple support channels available including phone, email, and live chat." />
        <meta name="keywords" content="technical support, customer service, help desk, AI support, IT support, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with 24/7 technical support, comprehensive documentation, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-cyan-400 font-medium">{channel.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-cyan-400 font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Tier:</span>
                      <span className="text-cyan-400 font-medium">{channel.tier}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <p className="text-cyan-400 font-medium">{channel.contact}</p>
                    <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Support Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">{resource.type}</span>
                    <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      <span>Access</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Support Tiers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{tier.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to help you succeed. Contact us now for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Call Now: (302) 464-0950
              </a>
              <a href="mailto:support@ziontechgroup.com" className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Email Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;