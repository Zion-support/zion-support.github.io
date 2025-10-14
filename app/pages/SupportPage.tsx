'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock technical assistance for all your IT and AI needs",
      icon: PhoneIcon,
      contact: "+1-302-464-0950",
      availability: "24/7"
    },
    {
      title: "Email Support",
      description: "Get detailed responses to your questions via email",
      icon: EnvelopeIcon,
      contact: "kleber@ziontechgroup.com",
      availability: "Within 2 hours"
    },
    {
      title: "Live Chat",
      description: "Instant support through our live chat system",
      icon: ChatBubbleLeftRightIcon,
      contact: "Available on website",
      availability: "Business hours"
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive AI solutions, IT services, and micro SaaS applications including machine learning, cloud infrastructure, cybersecurity, and digital transformation services."
    },
    {
      question: "How quickly can you start a project?",
      answer: "We can typically begin new projects within 1-2 weeks after initial consultation and requirements gathering. Rush projects can be accommodated with additional fees."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, all our services include ongoing support and maintenance. We offer 24/7 technical support and regular updates to ensure optimal performance."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including monthly subscriptions, project-based pricing, and enterprise contracts. Contact us for a customized quote based on your specific needs."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can grow with your business."
    },
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, Node.js, Python, AWS, Azure, machine learning frameworks, and modern development tools to deliver high-quality solutions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT needs. Contact us via phone, email, or live chat for immediate assistance." />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk, troubleshooting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden particles">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Support <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We're Here to Help You Succeed
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Get 24/7 technical support, expert guidance, and comprehensive assistance 
              for all your AI and IT needs. Our team is dedicated to your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+1-302-464-0950" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now: +1-302-464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Can We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Help You?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support option that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{option.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{option.contact}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">{option.availability}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and support
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 gradient-text">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our expert team is ready to assist you with any questions or technical issues. 
            Contact us today for immediate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+1-302-464-0950" 
              className="group bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us: +1-302-464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
