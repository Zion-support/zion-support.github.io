'use client';
<<<<<<< HEAD

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Book, Users } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical assistance, regular check-ins, training sessions, and dedicated account management.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months.'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes! We provide comprehensive training programs including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our solutions.'
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle, 
  Search,
  Clock,
  FileText,
  Video,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  Brain,
  Cloud,
  Settings,
  Database,
  Eye,
  Sparkles
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Topics', count: 25 },
    { name: 'getting-started', label: 'Getting Started', count: 8 },
    { name: 'api', label: 'API & Integration', count: 6 },
    { name: 'billing', label: 'Billing & Account', count: 4 },
    { name: 'technical', label: 'Technical Issues', count: 7 }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your platform?',
      answer: 'Getting started is easy! Simply sign up for an account, verify your email, and you can begin using our services immediately. We provide comprehensive onboarding guides and tutorials to help you get up and running quickly.',
      category: 'getting-started',
      helpful: 15
    },
    {
      id: 2,
      question: 'What APIs are available for integration?',
      answer: 'We offer a comprehensive REST API that includes endpoints for AI services, data analytics, cloud management, and more. All APIs are well-documented with examples and interactive testing tools.',
      category: 'api',
      helpful: 23
    },
    {
      id: 3,
      question: 'How does billing work?',
      answer: 'We offer flexible billing options including pay-as-you-go and monthly subscriptions. You can monitor your usage in real-time through our dashboard and set up alerts to manage costs effectively.',
      category: 'billing',
      helpful: 18
    },
    {
      id: 4,
      question: 'What security measures do you have in place?',
      answer: 'Security is our top priority. We implement enterprise-grade security including end-to-end encryption, regular security audits, compliance with industry standards, and 24/7 monitoring.',
      category: 'technical',
      helpful: 31
    },
    {
      id: 5,
      question: 'How can I contact support?',
      answer: 'You can reach our support team through multiple channels: live chat, email, phone, or our support portal. We offer 24/7 support for enterprise customers and business hours support for all users.',
      category: 'getting-started',
      helpful: 27
    },
    {
      id: 6,
      question: 'Do you offer custom solutions?',
      answer: 'Yes! We provide custom development services for enterprise clients. Our team can build tailored solutions that meet your specific requirements and integrate seamlessly with your existing systems.',
      category: 'api',
      helpful: 19
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
    }
  ];

  const supportChannels = [
    {
<<<<<<< HEAD
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1-302-464-0950',
      availability: '24/7'
=======
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-400'
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
    },
    {
      icon: Mail,
      title: 'Email Support',
<<<<<<< HEAD
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant help through our website chat',
      contact: 'Available on website',
      availability: 'Business Hours'
=======
      description: 'Send us a detailed message and we\'ll respond quickly',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Business Hours',
      responseTime: 'Immediate',
      color: 'text-purple-400'
    },
    {
      icon: FileText,
      title: 'Support Portal',
      description: 'Submit tickets and track your requests',
      availability: '24/7',
      responseTime: '< 1 hour',
      color: 'text-orange-400'
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
    }
  ];

  const resources = [
    {
<<<<<<< HEAD
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs'
    },
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base'
=======
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      type: 'Guide'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and walkthroughs',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base',
      type: 'Article'
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
    },
    {
      icon: Users,
      title: 'Community Forum',
<<<<<<< HEAD
      description: 'Connect with other users and experts',
      link: '/community'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. 24/7 support, documentation, and resources to help you succeed." />
        <meta name="keywords" content="support, help, technical support, documentation, FAQ, customer service, troubleshooting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Support
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need with our 
              comprehensive help resources and expert assistance.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-cyan-400 font-medium mb-2">{channel.contact}</div>
                <div className="text-sm text-gray-400">{channel.availability}</div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Help Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2"
                  >
                    <span>Access Resource</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you with any questions or issues. 
              Contact us through any of our support channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-302-464-0950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
=======
      description: 'Connect with other users and get peer support',
      link: '/community',
      type: 'Community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: '99%', label: 'Customer Satisfaction', icon: Star },
    { number: '< 2min', label: 'Average Response Time', icon: Clock },
    { number: '24/7', label: 'Support Available', icon: Shield },
    { number: '1000+', label: 'Issues Resolved', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Support
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're here to help! Get the support you need with our comprehensive help resources and expert team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <channel.icon className={`w-8 h-8 ${channel.color} mr-3`} />
                  <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white">{channel.responseTime}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Category Filter */}
            <div className="md:w-1/4">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="md:w-3/4">
              <h3 className="text-lg font-semibold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {categories.find(c => c.name === faq.category)?.label}
                      </span>
                      <div className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 mr-1" />
                        {faq.helpful} found this helpful
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <resource.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Support
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
  );
};

export default SupportPage;