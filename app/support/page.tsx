'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Video, BookOpen, Users, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation, and we\'ll assess your needs and recommend the best AI solutions for your business. We provide comprehensive onboarding and training.',
      category: 'Getting Started',
      icon: Zap
    },
    {
      id: 2,
      question: 'What is your response time for technical support?',
      answer: 'We offer 24/7 technical support with guaranteed response times: Critical issues within 1 hour, High priority within 4 hours, and General inquiries within 24 hours.',
      category: 'Support',
      icon: Clock
    },
    {
      id: 3,
      question: 'Do you provide training for your services?',
      answer: 'Yes! We provide comprehensive training for all our services, including documentation, video tutorials, live training sessions, and ongoing support to ensure your team can effectively use our solutions.',
      category: 'Training',
      icon: BookOpen
    },
    {
      id: 4,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure data centers, regular security audits, compliance with industry standards (SOC 2, GDPR, HIPAA), and 24/7 security monitoring.',
      category: 'Security',
      icon: CheckCircle
    },
    {
      id: 5,
      question: 'Can I customize your AI solutions for my specific needs?',
      answer: 'Absolutely! All our AI solutions are highly customizable. We work with you to tailor the functionality, integrations, and user interface to match your specific business requirements and workflows.',
      category: 'Customization',
      icon: FileText
    },
    {
      id: 6,
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing based on your needs: subscription plans for ongoing services, project-based pricing for custom development, and enterprise packages with dedicated support. Contact us for a personalized quote.',
      category: 'Pricing',
      icon: HelpCircle
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Under 5 minutes',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Video,
      title: 'Video Call Support',
      description: 'Schedule screen sharing sessions for complex issues',
      availability: 'By appointment',
      responseTime: 'Same day',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      link: '/community'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', count: faqs.length },
    { id: 'Getting Started', name: 'Getting Started', count: faqs.filter(f => f.category === 'Getting Started').length },
    { id: 'Support', name: 'Support', count: faqs.filter(f => f.category === 'Support').length },
    { id: 'Training', name: 'Training', count: faqs.filter(f => f.category === 'Training').length },
    { id: 'Security', name: 'Security', count: faqs.filter(f => f.category === 'Security').length },
    { id: 'Customization', name: 'Customization', count: faqs.filter(f => f.category === 'Customization').length },
    { id: 'Pricing', name: 'Pricing', count: faqs.filter(f => f.category === 'Pricing').length }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support for Zion Tech Group's AI and IT services. 24/7 support, documentation, tutorials, and expert assistance." />
        <meta name="keywords" content="technical support, help desk, customer service, AI support, IT support, documentation, tutorials" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the help you need with our comprehensive support resources and expert assistance.
              </p>
            </div>

            {/* Search */}
            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            {/* Support Channels */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-white">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-cyan-400">{channel.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resources */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Support Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Access Resource</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <faq.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        <div className="mt-3">
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                </div>
              )}
            </div>

            {/* Contact Support CTA */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Still Need Help?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our support team is here to help you succeed. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call Support: (302) 464-0950
                  </a>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;