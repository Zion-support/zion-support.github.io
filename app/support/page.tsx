'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, HelpCircle, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST',
      icon: Phone
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 Response within 4 hours',
      icon: Mail
    },
    {
      title: 'Live Chat',
      description: 'Get instant help with our AI-powered chat system',
      contact: 'Available 24/7',
      availability: 'Instant response',
      icon: MessageCircle
    }
  ];

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'Our phone support is available Monday-Friday from 9AM-6PM EST. Email and chat support are available 24/7 with guaranteed response times.'
    },
    {
      question: 'How quickly can I expect a response?',
      answer: 'Phone calls are answered immediately during business hours. Emails receive responses within 4 hours, and live chat provides instant responses.'
    },
    {
      question: 'Do you offer emergency support?',
      answer: 'Yes, we provide 24/7 emergency support for critical issues. Contact us through any channel and mention it\'s an emergency.'
    },
    {
      question: 'What information should I include in my support request?',
      answer: 'Please include your account details, a clear description of the issue, any error messages, and steps you\'ve already tried to resolve the problem.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for your Zion Tech Group services. Contact our expert support team for technical assistance." />
        <meta name="keywords" content="support, help, technical assistance, customer service, contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Support Center
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              We're Here to Help
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Get expert support for all your AI and IT solutions. Our team is ready to help you succeed.
            </p>
          </section>

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to contact our support team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700 pb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button">
                Contact Support
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Call: (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SupportPage;