'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
import { Helmet } from 'react-helmet-async';
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'general'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly.',
      category: 'support'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions.',
      category: 'training'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements.',
      category: 'customization'
    }
  ];

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '(302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'support@ziontechgroup.com',
<<<<<<< HEAD
      availability: '24/7'
=======
      availability: '24/7 response within 24 hours'
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
<<<<<<< HEAD
      availability: 'Business hours'
=======
      availability: 'Mon-Fri: 9AM-6PM EST'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll help you choose the right AI solution for your business needs.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including technical assistance, training, documentation, and ongoing maintenance for all our solutions.'
    },
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'We typically respond to support requests within 24 hours, with priority support available for enterprise customers.'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training programs to help your team get the most out of our AI and IT solutions.'
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="support, help, FAQ, customer service, technical support, AI solutions" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support for our AI and IT solutions. We're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to get in touch with our support team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <channel.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{channel.title}</h3>
                  </div>
=======
        <title>Support | Zion Tech Group - Technical Support & Help Center</title>
        <meta name="description" content="Get expert technical support for your AI and IT solutions. Contact our support team, access knowledge base, and get help when you need it." />
        <meta name="keywords" content="technical support, help center, customer support, AI support, IT support, troubleshooting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technical Support
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get expert help and support for your AI and IT solutions. Our team is here to ensure your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                </div>
              ))}
            </div>

<<<<<<< HEAD
        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services.
              </p>
            </div>
            
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Contact Support
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
=======
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/10 pb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
    </>
  );
};

export default SupportPage;