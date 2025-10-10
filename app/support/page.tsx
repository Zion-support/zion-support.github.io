'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Video, BookOpen } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportOptions = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      action: 'Start Chat'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      action: 'Send Email'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      questions: [
        {
          question: 'How do I get started with your AI services?',
          answer: 'You can start by contacting our sales team for a free consultation. We\'ll assess your needs and recommend the best solutions.'
        },
        {
          question: 'What is the setup process like?',
          answer: 'Our setup process typically takes 1-2 weeks and includes consultation, configuration, testing, and training.'
        }
      ]
    },
    {
      title: 'Technical Support',
      questions: [
        {
          question: 'How do I integrate your APIs?',
          answer: 'We provide comprehensive documentation and SDKs for easy integration. Our support team can also assist with implementation.'
        },
        {
          question: 'What if I encounter technical issues?',
          answer: 'Our 24/7 technical support team is available to help resolve any issues quickly and efficiently.'
        }
      ]
    }
  ];

  const resources = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API references'
    },
    {
      icon: <Video className="w-6 h-6 text-blue-400" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-400" />,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Live chat, phone, and email support available." />
        <meta name="keywords" content="support, technical support, help desk, customer service, AI support" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              How Can We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get 24/7 support for all your AI and IT solutions. Our expert team is here to help you succeed.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="glass-card quantum-field group text-center">
                  <div className="p-8">
                    <div className="flex justify-center mb-6">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{option.description}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
                      <Clock className="w-4 h-4" />
                      <span>{option.availability}</span>
                    </div>
                    <button className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                      {option.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and solutions.
              </p>
            </div>
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="glass-card quantum-field">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                    <div className="space-y-6">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                          <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our comprehensive library of guides, tutorials, and documentation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="glass-card quantum-field group">
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{resource.description}</p>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold mx-auto">
                      Access Resource
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="holographic-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our support team directly for personalized assistance.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>support@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;