'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Search, Clock, CheckCircle, ArrowRight, FileText, Video, BookOpen, Users, Headphones } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics', icon: Search },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen },
    { id: 'technical', name: 'Technical Support', icon: FileText },
    { id: 'billing', name: 'Billing & Accounts', icon: CheckCircle },
    { id: 'api', name: 'API Documentation', icon: Code },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Headphones }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply contact our team through the contact form or schedule a consultation. We\'ll assess your needs and create a customized implementation plan.',
      category: 'getting-started'
    },
    {
      id: 2,
      question: 'What programming languages do you support?',
      answer: 'We support all major programming languages including Python, JavaScript, Java, C++, Go, and more. Our APIs are language-agnostic and work with any technology stack.',
      category: 'technical'
    },
    {
      id: 3,
      question: 'How secure is my data?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is protected with bank-level security standards.',
      category: 'technical'
    },
    {
      id: 4,
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans starting from $299/month for basic services up to custom enterprise solutions. Contact our sales team for a personalized quote based on your specific needs.',
      category: 'billing'
    },
    {
      id: 5,
      question: 'Do you provide 24/7 support?',
      answer: 'Yes! We offer 24/7 technical support for all our clients. Our support team is available around the clock to help you with any issues or questions.',
      category: 'technical'
    },
    {
      id: 6,
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple integrations can be completed in 2-4 weeks, while complex AI solutions may take 3-6 months. We provide detailed timelines during consultation.',
      category: 'getting-started'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (555) 123-4567',
      availability: '24/7 Available',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 Available',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      contact: 'Available on website',
      availability: 'Business Hours',
      responseTime: 'Immediate'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a video consultation with our experts',
      contact: 'Schedule online',
      availability: 'By appointment',
      responseTime: 'Same day'
    }
  ];

  const resources = [
    {
      title: 'API Documentation',
      description: 'Comprehensive guides for all our APIs and SDKs',
      icon: FileText,
      link: '/docs/api'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      icon: Video,
      link: '/tutorials'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and guides',
      icon: BookOpen,
      link: '/knowledge-base'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      icon: Users,
      link: '/community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help Center & Technical Support</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team." />
        <meta name="keywords" content="support, help center, technical support, documentation, FAQ, customer service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Support
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're here to help! Find answers to your questions, access documentation, 
                and get the support you need to succeed.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2">
                    <p className="text-cyan-400 font-semibold">{channel.contact}</p>
                    <p className="text-gray-400 text-sm">{channel.availability}</p>
                    <p className="text-gray-400 text-sm">Response: {channel.responseTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Helpful Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access documentation, tutorials, and community resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    <span>Access Resource</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Support</span>
              </a>
              <a
                href="tel:+15551234567"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;