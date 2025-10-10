'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: '24/7',
      responseTime: 'Instant',
      link: '/contact'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      availability: '24/7',
      responseTime: '< 24 hours',
      link: '/contact'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance with critical issues',
      availability: 'Mon-Fri 9AM-6PM',
      responseTime: 'Immediate',
      link: '/contact'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What support do you provide during implementation?',
      answer: 'We provide comprehensive support throughout the entire implementation process, including project management, technical guidance, and training for your team.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We offer 24/7 support for all our enterprise clients. Our support team is always available to help with any issues or questions you may have.'
    },
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'Response times vary by priority level. Critical issues are addressed immediately, while general inquiries are typically resolved within 24 hours.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Absolutely! We provide comprehensive training programs for all our solutions, including documentation, video tutorials, and hands-on training sessions.'
    },
    {
      question: 'What if I need custom modifications?',
      answer: 'We offer custom development services to modify our solutions to meet your specific requirements. Contact us to discuss your needs.'
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      description: 'Essential support for small businesses',
      features: [
        'Email support',
        'Business hours response',
        'Documentation access',
        'Community forum'
      ],
      price: 'Included'
    },
    {
      name: 'Professional Support',
      description: 'Enhanced support for growing businesses',
      features: [
        'Priority email support',
        'Phone support',
        'Faster response times',
        'Advanced documentation',
        'Training resources'
      ],
      price: '$299/month'
    },
    {
      name: 'Enterprise Support',
      description: 'Comprehensive support for large organizations',
      features: [
        '24/7 phone and chat support',
        'Dedicated support manager',
        'SLA guarantees',
        'Custom training',
        'Priority feature requests'
      ],
      price: 'Custom'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Customer Support & Help</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. 24/7 support, documentation, training, and expert assistance available." />
        <meta name="keywords" content="customer support, help desk, technical support, AI support, IT support, documentation, training" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the help you need with our comprehensive support services and resources.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Get Support</h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're here to help 24/7.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-center mb-6">
                      <IconComponent className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                      <p className="text-gray-300 mb-4">{channel.description}</p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{channel.availability}</span>
                        </div>
                        <div className="text-cyan-400 font-medium">{channel.responseTime}</div>
                      </div>
                    </div>

                    <Link
                      to={channel.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/10 pb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Support Plans</h2>
              <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Choose the support plan that best fits your needs and budget.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supportTiers.map((tier, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                    tier.name === 'Professional Support' ? 'ring-2 ring-cyan-500' : ''
                  }`}>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-300 mb-4">{tier.description}</p>
                      <div className="text-2xl font-bold text-cyan-400">{tier.price}</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Choose Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Contact our support team directly for personalized assistance.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;