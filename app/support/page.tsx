'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MessageCircle, Phone, Mail, Clock, CheckCircle, Search, Filter, Star, Users, Shield, Zap, Brain, Code, BarChart, Globe, Smartphone, Settings, Calendar, FileText, Heart, DollarSign, Box, Monitor, Target, TrendingUp, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply contact us for a free consultation, and we\'ll assess your needs and create a customized implementation plan. Our team will guide you through every step of the process.',
      category: 'Getting Started',
      rating: 4.8
    },
    {
      id: 2,
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support team is always available to help with any issues or questions.',
      category: 'Support',
      rating: 4.9
    },
    {
      id: 3,
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards like GDPR and SOC 2.',
      category: 'Security',
      rating: 4.9
    },
    {
      id: 4,
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing infrastructure. We provide APIs, webhooks, and custom integration services to ensure smooth connectivity.',
      category: 'Integration',
      rating: 4.7
    },
    {
      id: 5,
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including subscription-based plans, project-based pricing, and custom enterprise solutions. Contact us for a personalized quote based on your specific needs.',
      category: 'Pricing',
      rating: 4.6
    },
    {
      id: 6,
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies depending on the complexity of your project. Simple solutions can be deployed in 2-4 weeks, while complex enterprise implementations may take 3-6 months.',
      category: 'Implementation',
      rating: 4.8
    },
    {
      id: 7,
      question: 'Do you provide training for my team?',
      answer: 'Absolutely! We provide comprehensive training programs including documentation, video tutorials, hands-on workshops, and ongoing support to ensure your team can effectively use our solutions.',
      category: 'Training',
      rating: 4.9
    },
    {
      id: 8,
      question: 'What happens if I need to scale my solution?',
      answer: 'Our solutions are designed to scale with your business. We provide auto-scaling capabilities and can help you upgrade or expand your solution as your needs grow.',
      category: 'Scaling',
      rating: 4.7
    },
    {
      id: 9,
      question: 'Do you offer custom development services?',
      answer: 'Yes! We offer custom development services to create tailored solutions that meet your specific business requirements. Our team can build custom features, integrations, and applications.',
      category: 'Custom Development',
      rating: 4.8
    },
    {
      id: 10,
      question: 'How do I contact technical support?',
      answer: 'You can contact our technical support team through multiple channels: email support@ziontechgroup.com, phone at (302) 464-0950, or through our support portal. We also offer live chat during business hours.',
      category: 'Support',
      rating: 4.9
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', icon: Star },
    { id: 'Getting Started', name: 'Getting Started', icon: Brain },
    { id: 'Support', name: 'Support', icon: MessageCircle },
    { id: 'Security', name: 'Security', icon: Shield },
    { id: 'Integration', name: 'Integration', icon: Code },
    { id: 'Pricing', name: 'Pricing', icon: DollarSign },
    { id: 'Implementation', name: 'Implementation', icon: Workflow },
    { id: 'Training', name: 'Training', icon: BookOpen },
    { id: 'Scaling', name: 'Scaling', icon: TrendingUp },
    { id: 'Custom Development', name: 'Custom Development', icon: Settings }
  ];

  const supportChannels = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      contact: '(302) 464-0950',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our live chat',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Support Portal',
      description: 'Submit and track support tickets',
      icon: Settings,
      contact: 'portal.ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Documentation</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="support, help, documentation, FAQ, technical support, customer service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support for our AI and IT solutions. Find answers to common questions and contact our expert support team.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-300">
                Choose the support channel that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{channel.contact}</div>
                  <div className="text-sm text-gray-400 mb-1">{channel.availability}</div>
                  <div className="text-sm text-gray-400">{channel.responseTime}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-5 h-5 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services and solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                    <div className="flex items-center ml-4">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-gray-300 text-sm">{faq.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {faq.category}
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                      <span>Was this helpful?</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Contact Support</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SupportPage;