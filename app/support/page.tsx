'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: '24/7 Phone Support',
      description: 'Get immediate help from our technical experts',
      icon: Phone,
      contact: '+1 302 464 0950',
      availability: '24/7 Available',
      color: 'cyan'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      contact: 'kleber@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'purple'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: MessageCircle,
      contact: 'Start Chat',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'green'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'We respond to phone calls immediately and email requests within 2 hours during business hours.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer 24/7 phone support for critical issues. Email support is available during business hours.'
    },
    {
      question: 'What types of issues can you help with?',
      answer: 'We can help with AI integration, cloud migration, cybersecurity, system optimization, and any technical challenges.'
    },
    {
      question: 'Is there a cost for support?',
      answer: 'Basic support is included with all our services. Premium support packages are available for enterprise clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get 24/7 technical support from Zion Tech Group. Expert help for all your AI and IT needs." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Support
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert technical support whenever you need it. Our team is here to help you succeed.
          </p>
        </section>

        {/* Support Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className={`w-16 h-16 bg-gradient-to-r from-${option.color}-500 to-${option.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {option.description}
                </p>
                <div className="mb-4">
                  <p className="text-cyan-400 font-semibold text-lg">{option.contact}</p>
                  <p className="text-gray-400 text-sm">{option.availability}</p>
                </div>
                <a 
                  href={option.title.includes('Phone') ? 'tel:+13024640950' : option.title.includes('Email') ? 'mailto:kleber@ziontechgroup.com' : '#'}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                >
                  {option.contact}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">Need Immediate Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our technical support team is standing by to assist you with any issues or questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SupportPage;