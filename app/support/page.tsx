import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Right, Circle, MessageCircle, Mail, Phone, BookOpen } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
<<<<<<< HEAD
      icon: 'Chat',
=======
      icon: MessageCircle,
>>>>>>> cursor/fix-errors-and-merge-to-main-ecd7
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: &apos;Start Chat&apos;,
      color: &apos;from-blue-500 to-cyan-500&apos;
    },
    {
<<<<<<< HEAD
      icon: 'Phone',
      title: 'Phone Support',
=======
      icon: Mail,
      title: 'Email Support',
>>>>>>> cursor/fix-errors-and-merge-to-main-ecd7
      description: 'Call us for immediate assistance',
      action: &apos;Call Now&apos;,
      color: &apos;from-green-500 to-emerald-500&apos;
    },
    {
<<<<<<< HEAD
      icon: 'Email',
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: &apos;Send Email&apos;,
      color: &apos;from-purple-500 to-pink-500&apos;
    },
    {
      icon: 'Book',
=======
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      action: 'Call Now',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
>>>>>>> cursor/fix-errors-and-merge-to-main-ecd7
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      action: &apos;View Docs&apos;,
      color: &apos;from-orange-500 to-red-500&apos;
    }
  ];

  const faqs = [
    {
      question: &apos;How do I get started with your AI services?&apos;,
      answer: &apos;Getting started is easy! Contact our team for a consultation, and we\&apos;ll help you identify the best AI solutions for your business needs.&apos;
    },
    {
      question: &apos;What is your response time for support requests?&apos;,
      answer: &apos;We typically respond to support requests within 2-4 hours during business hours, and within 24 hours for non-urgent matters.&apos;
    },
    {
      question: &apos;Do you offer training for your solutions?&apos;,
      answer: &apos;Yes! We provide comprehensive training programs for all our solutions, including documentation, video tutorials, and live training sessions.&apos;
    },
    {
      question: &apos;What if I need custom development?&apos;,
      answer: &apos;We offer custom development services for unique requirements. Contact our team to discuss your specific needs and get a quote.&apos;
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Get Help | Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Live chat, phone support, documentation, and more." />
        <meta name="keywords" content="support, help, customer service, technical support, documentation, FAQ" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Support
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We&apos;re here to help! Get support for our AI and IT solutions through multiple channels.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              How Can We Help You?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center group">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-300 mb-4">{option.description}</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      {option.action}
                      <Right className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Contact Information
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
                <Circle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2"></h3>
                <p className="text-cyan-400 font-medium">+1 (555) 123-4567</p>
                <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
                <Circle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400 font-medium">support@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">24/7 Support</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
                <Circle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400 font-medium">123 Tech Street</p>
                <p className="text-gray-400 text-sm">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;