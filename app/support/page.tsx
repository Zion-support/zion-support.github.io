'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MessageCircle, Clock, CheckCircle, ArrowRight, Search, FileText, Users, Headphones } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (555) 123-4567',
      availability: '24/7 Available'
    },
    {
      icon: <Mail className="w-8 h-8 text-green-500" />,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      contact: 'Available on website',
      availability: 'Business Hours'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide comprehensive ongoing support including 24/7 technical assistance, regular updates, performance monitoring, and dedicated account management.'
    },
    {
      question: 'Can I customize the AI solutions to fit my business?',
      answer: 'Absolutely! All our AI solutions are fully customizable to meet your specific business requirements and integrate seamlessly with your existing systems.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We guarantee response times of under 2 hours for critical issues and within 24 hours for general inquiries. Premium support customers get priority handling.'
    },
    {
      question: 'Do you provide training for my team?',
      answer: 'Yes! We offer comprehensive training programs including hands-on workshops, documentation, video tutorials, and ongoing support to ensure your team can effectively use our solutions.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2 and GDPR.'
    }
  ];

  const resources = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      link: '/community'
    },
    {
      icon: <Headphones className="w-6 h-6 text-purple-500" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and best practices',
      link: '/tutorials'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all Zion Tech Group AI and IT solutions. Phone, email, and live chat support available." />
        <meta name="keywords" content="technical support, AI support, IT support, customer service, help desk, 24/7 support" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the support you need with our comprehensive 24/7 technical assistance and expert guidance.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-blue-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services and support
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Helpful Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of resources and documentation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {resource.icon}
                  <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Email Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;