'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle, ArrowRight, Clock, CheckCircle, Users, Shield, HelpCircle, FileText } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or schedule a free consultation. We\'ll assess your needs and create a customized plan for your business.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We provide comprehensive support including email support, phone support, and dedicated account management for enterprise clients. Our support team is available 24/7 for critical issues.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while complex enterprise implementations may take 3-6 months.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs for your team, including hands-on workshops, documentation, and ongoing support to ensure successful adoption.'
    },
    {
      question: 'What if we need custom features?',
      answer: 'We specialize in custom development and can build tailored features to meet your specific requirements. Contact us to discuss your custom needs.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards. Your data security is our top priority.'
    }
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      responseTime: 'Within 24 hours',
      availability: '24/7',
      contact: 'support@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      responseTime: 'Immediate',
      availability: 'Mon-Fri 9AM-6PM EST',
      contact: '+1 (555) 123-4567'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      responseTime: 'Immediate',
      availability: 'Mon-Fri 9AM-6PM EST',
      contact: 'Available on website'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Search our extensive knowledge base',
      link: '/knowledge-base'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      link: '/community'
    },
    {
      icon: MessageCircle,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and technology solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="support, help, FAQ, contact, customer service, technical support" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help! Find answers to your questions or get in touch with our support team.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.responseTime}
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                  </div>
                  <div className="text-cyan-400 font-medium">{channel.contact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Self-Service Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers quickly with our comprehensive resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <a 
                    href={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to the most common questions about our services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default SupportPage;