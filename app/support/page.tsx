'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Clock, Search, CheckCircle, ArrowRight, HelpCircle, FileText, BookOpen, Video, Headphones } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      name: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST',
      color: 'text-cyan-400'
    },
    {
      name: 'Email Support',
      icon: Mail,
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 Response within 4 hours',
      color: 'text-green-400'
    },
    {
      name: 'Live Chat',
      icon: MessageCircle,
      description: 'Instant help with our AI-powered chat',
      contact: 'Start Chat',
      availability: '24/7 Available',
      color: 'text-purple-400'
    },
    {
      name: 'Emergency Support',
      icon: Clock,
      description: 'Critical issues get immediate attention',
      contact: 'emergency@ziontechgroup.com',
      availability: '24/7 Emergency Line',
      color: 'text-red-400'
    }
  ];

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team through any of our support channels, and we\'ll schedule a consultation to understand your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started'
    },
    {
      id: '2',
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple AI integrations typically take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'Project Management'
    },
    {
      id: '3',
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions to ensure your team can effectively use the tools we implement.',
      category: 'Training'
    },
    {
      id: '4',
      question: 'What kind of support do you offer after implementation?',
      answer: 'We offer ongoing support including 24/7 monitoring, regular updates, performance optimization, and technical assistance. Our support packages are tailored to your specific needs.',
      category: 'Support'
    },
    {
      id: '5',
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing systems. We work with all major platforms and can create custom integrations as needed.',
      category: 'Integration'
    },
    {
      id: '6',
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2 and GDPR.',
      category: 'Security'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: FileText,
      link: '/docs'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      icon: BookOpen,
      link: '/knowledge-base'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      icon: Video,
      link: '/tutorials'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      icon: MessageCircle,
      link: '/community'
    }
  ];

  const categories = ['all', 'Getting Started', 'Project Management', 'Training', 'Support', 'Integration', 'Security'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get comprehensive support for all Zion Tech Group services. 24/7 support, documentation, and expert assistance for your AI and IT solutions." />
        <meta name="keywords" content="support, help, documentation, FAQ, technical support, customer service, Zion Tech Group" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get comprehensive support for all Zion Tech Group services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We're here to help you succeed. Get expert support for all your AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help you succeed. Choose the support channel that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{channel.name}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className={`${channel.color} font-medium mb-2`}>{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300 mb-8">Find answers to common questions about our services</p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-cyan-400 text-slate-900 font-semibold'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                  <ArrowRight className="w-5 h-5 text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;
