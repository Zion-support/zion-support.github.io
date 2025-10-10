'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MessageCircle, Clock, CheckCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 response within 24 hours',
      responseTime: 'Within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+1 (302) 464-0950',
      availability: 'Monday - Friday, 9 AM - 6 PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat',
      contact: 'Available on website',
      availability: 'Monday - Friday, 9 AM - 6 PM EST',
      responseTime: 'Immediate'
    }
  ];

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'Our support team is available 24/7 via email, Monday-Friday 9 AM - 6 PM EST via phone and live chat. We also provide emergency support for critical issues outside regular hours.'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'We aim to respond to all support requests within 24 hours. Critical issues receive immediate attention, and we have an escalation process for urgent matters.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we provide comprehensive training for all our solutions including documentation, video tutorials, and live training sessions. We also offer ongoing support and best practices guidance.'
    },
    {
      question: 'What if I need custom development?',
      answer: 'We offer custom development services for unique requirements. Our team can work with you to design and implement solutions tailored to your specific needs.'
    },
    {
      question: 'How do you handle data security?',
      answer: 'We follow industry best practices for data security including encryption, secure data transmission, regular security audits, and compliance with relevant regulations like GDPR and HIPAA.'
    },
    {
      question: 'Can I get a demo of your solutions?',
      answer: 'Absolutely! We offer free demos and consultations to help you understand how our solutions can benefit your business. Contact us to schedule a personalized demonstration.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get comprehensive support for all Zion Tech Group solutions. 24/7 email support, phone support, and live chat available." />
        <meta name="keywords" content="support, help, customer service, technical support, AI solutions support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed. Get the support you need with our comprehensive help resources and expert assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Touch</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the support channel that works best for you. We're committed to providing timely and effective assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {channel.title}
                      </h3>
                      <p className="text-sm text-cyan-400">{channel.responseTime}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-cyan-400 font-medium">{channel.contact}</p>
                    <p className="text-sm text-gray-400">{channel.availability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions</span>
              </h2>
              <p className="text-gray-300 mb-8">Find answers to common questions about our services and solutions.</p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;