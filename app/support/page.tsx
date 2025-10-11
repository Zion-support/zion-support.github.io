'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState('chat');

  const supportChannels = [
    {
      id: 'chat',
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 minutes',
      popular: true
    },
    {
      id: 'phone',
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      popular: false
    },
    {
      id: 'email',
      name: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      popular: false
    }
  ];

  const supportOptions = [
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Get help with technical issues, integrations, and troubleshooting',
      icon: '🔧',
      features: [
        'System troubleshooting',
        'Integration assistance',
        'Performance optimization',
        'Bug fixes and patches'
      ]
    },
    {
      id: 'billing',
      title: 'Billing Support',
      description: 'Assistance with billing, payments, and account management',
      icon: '💳',
      features: [
        'Payment processing',
        'Invoice management',
        'Account upgrades',
        'Refund requests'
      ]
    },
    {
      id: 'training',
      title: 'Training & Onboarding',
      description: 'Learn how to use our services effectively with expert guidance',
      icon: '🎓',
      features: [
        'Product training',
        'Best practices',
        'Custom workshops',
        'Documentation access'
      ]
    },
    {
      id: 'consultation',
      title: 'Expert Consultation',
      description: 'Get strategic advice from our AI and IT experts',
      icon: '💡',
      features: [
        'Strategic planning',
        'Architecture review',
        'Performance analysis',
        'Custom solutions'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'Our response times vary by channel: Live chat typically responds within 2 minutes, email within 4 hours, and phone support is immediate during business hours.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 support through live chat and email. Phone support is available Monday through Friday, 9 AM to 6 PM EST.'
    },
    {
      question: 'What information should I include in my support request?',
      answer: 'Please include your account details, a clear description of the issue, steps to reproduce it, and any error messages you\'re seeing.'
    },
    {
      question: 'Do you offer training for new users?',
      answer: 'Yes, we provide comprehensive training sessions, documentation, and onboarding support to help you get the most out of our services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT services. 24/7 support available." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Support Center</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help you succeed. Get the support you need, when you need it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {supportChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`p-6 rounded-xl transition-all duration-300 text-left ${
                      selectedChannel === channel.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800/70'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold">{channel.name}</h3>
                        {channel.popular && (
                          <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {channel.availability}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {channel.responseTime}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {supportOptions.map((option) => (
                <div
                  key={option.id}
                  className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Support</h2>
                <div className="bg-slate-800/50 rounded-xl p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                          <div>
                            <p className="text-white font-semibold">Phone</p>
                            <p className="text-gray-300">+1 302 464 0950</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                          <div>
                            <p className="text-white font-semibold">Email</p>
                            <p className="text-gray-300">kleber@ziontechgroup.com</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                          <div>
                            <p className="text-white font-semibold">Business Hours</p>
                            <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-700">
                      <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Start Live Chat
                        </button>
                        <button className="w-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                          <Mail className="w-5 h-5 mr-2" />
                          Send Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you succeed. Don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600"
                >
                  Contact Us
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SupportPage;
