'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I get started with your AI services?",
      answer: "Getting started is easy! Contact our team for a free consultation where we'll assess your needs and recommend the best AI solutions for your business."
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex AI systems may take 3-6 months."
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 technical support, regular maintenance, updates, and dedicated account management for enterprise clients."
    },
    {
      question: "Can I integrate your solutions with existing systems?",
      answer: "Absolutely! Our solutions are designed with integration in mind and can work with most existing business systems and platforms."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards."
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "Under 2 minutes"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "Immediate"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      availability: "24/7",
      responseTime: "Within 4 hours"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      link: "/docs"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      link: "/tutorials"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share experiences",
      link: "/community"
    },
    {
      title: "Status Page",
      description: "Check system status and uptime information",
      link: "/status"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers, contact our team, and access resources." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help! Find answers to your questions, get technical support, 
            and access resources to make the most of our services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help, documentation, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                {channel.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
              <p className="text-gray-300 mb-4">{channel.description}</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{channel.availability}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>{channel.responseTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
                  <span className="text-white font-medium">{faq.question}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 transform rotate-90" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our expert team is ready to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@ziontechgroup.com"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;