'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, MessageCircle, Phone, Mail, ArrowRight, CheckCircle, Target, Users, Globe } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and get detailed responses',
      availability: '24/7'
    },
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      availability: 'Always Available'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Contact our sales team to discuss your requirements and get a customized solution.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We offer 24/7 technical support, documentation, and training resources.'
    },
    {
      question: 'How quickly can you respond to issues?',
      answer: 'We typically respond to critical issues within 1 hour and non-critical issues within 24 hours.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. 24/7 technical support, documentation, and training resources." />
        <meta name="keywords" content="technical support, help desk, customer service, documentation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support services and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chat
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Target className="mr-2 h-5 w-5" />
                Browse Docs
              </button>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              How Can We Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-300 mb-3">{option.description}</p>
                  <span className="text-purple-400 text-sm font-medium">{option.availability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our support team is here to help you succeed. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="mr-2 h-5 w-5" />
                Contact Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Schedule Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;