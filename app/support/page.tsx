'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  CogIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faq');

  const faqs = [
    {
      question: "How do I get started with your AI solutions?",
      answer: "Getting started is easy! Simply contact our sales team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best AI solutions for your business."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support, implementation assistance, training sessions, and ongoing maintenance. Our support team is always available to help you get the most out of our solutions."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary depending on the complexity of your project. Simple AI solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 2-6 months. We'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you offer training for your solutions?",
      answer: "Yes! We provide comprehensive training programs for all our solutions, including hands-on workshops, documentation, video tutorials, and ongoing support to ensure your team can effectively use our technology."
    },
    {
      question: "What security measures do you have in place?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including data encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA."
    },
    {
      question: "Can I integrate your solutions with my existing systems?",
      answer: "Absolutely! Our solutions are designed with integration in mind. We support APIs, webhooks, and custom integrations with most popular business systems and platforms."
    }
  ];

  const supportOptions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: ChatBubbleLeftRightIcon,
      availability: '24/7 Available',
      responseTime: 'Under 2 minutes'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: PhoneIcon,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: EnvelopeIcon,
      availability: '24/7 Available',
      responseTime: 'Within 4 hours'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: DocumentTextIcon,
      availability: 'Always Available',
      responseTime: 'Instant'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step guide to set up your first AI solution',
      type: 'Guide',
      icon: AcademicCapIcon
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and integration examples',
      type: 'Technical',
      icon: CogIcon
    },
    {
      title: 'Video Tutorials',
      description: 'Watch our comprehensive video training series',
      type: 'Video',
      icon: PlayIcon
    },
    {
      title: 'Best Practices',
      description: 'Learn how to optimize your AI implementations',
      type: 'Guide',
      icon: CheckCircleIcon
    }
  ];

  return (
    <>
      <SEOHead 
        title="Support Center - Zion Tech Group"
        description="Get help with our AI solutions, cybersecurity, and cloud infrastructure. 24/7 support, documentation, and resources available."
        keywords="support, help, documentation, AI solutions, technical support, customer service"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed with our AI solutions, cybersecurity, and cloud infrastructure. Get the support you need, when you need it.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Can We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Help You?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{option.availability}</span>
                    </div>
                    <div className="flex items-center text-sm text-green-400">
                      <CheckCircleIcon className="w-4 h-4 mr-2" />
                      <span>{option.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Get in <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-4">Speak with our technical experts</p>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 font-semibold">
                  +1 (302) 464-0950
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Send us detailed questions</p>
                <a href="mailto:support@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-semibold">
                  support@ziontechgroup.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">Get instant help online</p>
                <button className="text-purple-400 hover:text-purple-300 font-semibold">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Helpful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Resources</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <span className="text-sm text-purple-400 font-medium">{resource.type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;