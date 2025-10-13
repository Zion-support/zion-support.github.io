import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Right, Circle, MessageCircle, Mail, Phone, BookOpen, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500',
      available: true
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500',
      available: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500',
      available: true
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      action: 'Browse Docs',
      color: 'from-yellow-500 to-orange-500',
      available: true
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team to schedule a consultation where we\'ll assess your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support, implementation assistance, training, and ongoing maintenance to ensure your solutions work optimally.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on complexity, but most projects are completed within 2-8 weeks. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs to help your team effectively use and manage the solutions we implement.'
    },
    {
      question: 'What if I need custom modifications?',
      answer: 'Our solutions are highly customizable. We work with you to modify and adapt our solutions to meet your specific requirements.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards to protect your data.'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Available 24/7 for urgent issues'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@ziontechgroup.com',
      description: 'We respond within 2 hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri 9AM-6PM EST',
      description: 'Extended support available'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for your Zion Tech Group solutions. 24/7 support, documentation, and expert assistance." />
        <meta name="keywords" content="support, help, documentation, technical support, customer service" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                We're Here to
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Help You Succeed
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our dedicated support team is available 24/7 to help you get the most out of your 
                Zion Tech Group solutions. Get help when you need it, how you need it.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Support
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <div
                    key={option.title}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {option.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Circle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm">Available</span>
                      </div>
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-medium">
                        {option.action}
                        <Right className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Multiple ways to reach our support team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={info.title}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-purple-400 font-medium mb-2">
                      {info.details}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {info.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to assist you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <button className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Browse Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;