import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I get started with your AI solutions?",
      answer: "Getting started is easy! Contact our team for a free consultation where we'll assess your needs and recommend the best AI solutions for your business. We'll guide you through the entire implementation process."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support, regular system monitoring, performance optimization, and ongoing maintenance. Our support team is always available to help with any issues or questions you may have."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation time varies depending on the complexity of your project. Simple solutions can be deployed in a few weeks, while complex enterprise solutions may take several months. We'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes! We provide comprehensive training programs for your team to ensure they can effectively use and manage the solutions we implement. Training includes hands-on sessions, documentation, and ongoing support."
    },
    {
      question: "What security measures do you have in place?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including data encryption, access controls, regular security audits, and compliance with industry standards like GDPR and SOC 2."
    },
    {
      question: "Can I customize the solutions to fit my business needs?",
      answer: "Absolutely! All our solutions are highly customizable to meet your specific business requirements. We work closely with you to ensure the solutions align perfectly with your processes and goals."
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: ChatBubbleLeftRightIcon,
      availability: "24/7",
      responseTime: "Immediate"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: PhoneIcon,
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: EnvelopeIcon,
      availability: "24/7",
      responseTime: "Within 4 hours"
    },
    {
      title: "Knowledge Base",
      description: "Search our comprehensive documentation and guides",
      icon: QuestionMarkCircleIcon,
      availability: "24/7",
      responseTime: "Immediate"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. 24/7 support, documentation, and expert assistance." />
        <meta name="keywords" content="support, help, documentation, technical support, customer service, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get the support you need for our AI and IT solutions. 
              Our expert team is available 24/7 to assist you.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search our knowledge base..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How Can We Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-2" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
            {filteredFaqs.length === 0 && searchQuery && (
              <div className="text-center py-8">
                <p className="text-gray-400">No results found for "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-purple-400 hover:text-purple-300 mt-2"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Still Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Support</h3>
                <p className="text-gray-300 mb-6">
                  Get in touch with our support team for personalized assistance with your specific needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <PhoneIcon className="w-5 h-5 mr-3 text-purple-400" />
                    <span>+1-302-464-0950</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <EnvelopeIcon className="w-5 h-5 mr-3 text-purple-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="mt-6 inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Contact Us <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Schedule a Call</h3>
                <p className="text-gray-300 mb-6">
                  Book a one-on-one session with our technical experts to discuss your specific requirements.
                </p>
                <Link 
                  to="/demo"
                  className="mt-6 inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Schedule Demo <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;
