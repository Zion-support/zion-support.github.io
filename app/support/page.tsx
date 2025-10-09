'use client';
import React, { useState } from 'react';
import { Search, MessageCircle, Phone, Mail, Calendar, Clock, Users, Award, Brain, Cloud, Shield, Code, BarChart, Zap, Target, MessageSquare, Eye, Cpu, Lock, FileText, Bot, Calculator, Compass, Navigation, PieChart, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck, DollarSign, TrendingUp, ArrowRight, CheckCircle, Star, ExternalLink, Download, BookOpen as BookIcon, HelpCircle, Settings, AlertCircle, Info, Lightbulb, Bug, QuestionMarkCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: FileText },
    { id: 'getting-started', name: 'Getting Started', icon: Play },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Settings },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'technical', name: 'Technical', icon: Code },
    { id: 'account', name: 'Account', icon: Users }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our sales team through our contact form or call us at +1 302 464 0950. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.',
      category: 'getting-started',
      tags: ['getting-started', 'onboarding', 'consultation']
    },
    {
      id: 2,
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including machine learning solutions, natural language processing, computer vision, AI automation, predictive analytics, and custom AI model development. Our services are designed to help businesses leverage AI for competitive advantage.',
      category: 'ai-services',
      tags: ['ai-services', 'machine-learning', 'automation']
    },
    {
      id: 3,
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the specific services and scale of implementation. Micro SAAS solutions start at $79/month, AI services begin at $1,000/month, and IT services start at $800/month. Contact our sales team for a custom quote tailored to your needs.',
      category: 'billing',
      tags: ['pricing', 'billing', 'cost']
    },
    {
      id: 4,
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our enterprise clients. Our support team is available around the clock to help with any technical issues or questions you may have.',
      category: 'technical',
      tags: ['support', '24-7', 'technical']
    },
    {
      id: 5,
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary depending on the complexity of the project. Simple AI integrations can take 2-4 weeks, while comprehensive enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'technical',
      tags: ['implementation', 'timeline', 'project']
    },
    {
      id: 6,
      question: 'Can I integrate your AI services with my existing systems?',
      answer: 'Absolutely! Our AI services are designed to integrate seamlessly with existing systems through APIs, webhooks, and custom connectors. We work with all major platforms and can develop custom integrations as needed.',
      category: 'technical',
      tags: ['integration', 'api', 'existing-systems']
    },
    {
      id: 7,
      question: 'What security measures do you have in place?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'technical',
      tags: ['security', 'encryption', 'compliance']
    },
    {
      id: 8,
      question: 'How do I update my account information?',
      answer: 'You can update your account information by logging into your dashboard and navigating to the Account Settings section. For changes that require verification, please contact our support team.',
      category: 'account',
      tags: ['account', 'profile', 'settings']
    },
    {
      id: 9,
      question: 'Do you offer training for my team?',
      answer: 'Yes! We provide comprehensive training programs for your team, including hands-on workshops, documentation, video tutorials, and ongoing support. Training is included with all our service packages.',
      category: 'getting-started',
      tags: ['training', 'education', 'team']
    },
    {
      id: 10,
      question: 'What happens if I need to cancel my subscription?',
      answer: 'You can cancel your subscription at any time through your account dashboard. We offer a 30-day notice period for most services, and we\'ll help you transition your data and systems smoothly.',
      category: 'billing',
      tags: ['cancellation', 'subscription', 'billing']
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 1 minute',
      color: 'text-green-400'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-blue-400'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 2 hours',
      color: 'text-purple-400'
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session with our experts',
      icon: Video,
      availability: 'Business Hours',
      responseTime: 'Scheduled',
      color: 'text-cyan-400'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookIcon,
      link: '/docs',
      type: 'Documentation'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our services',
      icon: Video,
      link: '/tutorials',
      type: 'Video'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      link: '/api-docs',
      type: 'API'
    },
    {
      title: 'Status Page',
      description: 'Real-time system status and uptime information',
      icon: Activity,
      link: '/status',
      type: 'Status'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      icon: Users,
      link: '/community',
      type: 'Community'
    },
    {
      title: 'Release Notes',
      description: 'Latest updates and feature announcements',
      icon: FileText,
      link: '/releases',
      type: 'Updates'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Support Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers to common questions, access documentation, and connect with our support team."
        keywords={['support', 'help', 'documentation', 'FAQ', 'customer service', 'technical support', 'contact support']}
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Support Center
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Get the help you need, when you need it. Our support team is here to assist you with any questions or issues.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Get Help Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <channel.icon className={`w-12 h-12 ${channel.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-green-400">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-cyan-400">{channel.responseTime}</span>
                  </div>
                </div>
                <a href="/contact" className="mt-4 inline-block cyber-button px-4 py-2 text-sm font-semibold">
                  Contact Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'cyber-button'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="cyber-card p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, index) => (
                      <span key={index} className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <resource.icon className="w-8 h-8 text-cyan-400" />
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <span className="text-sm text-cyan-400 font-semibold">{resource.type}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our support team is ready to help you with any questions or issues. Contact us through any of the channels below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">24/7 Support</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-2">support@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Response within 2 hours</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Schedule Call</h3>
                <p className="text-gray-300 mb-2">Book a meeting</p>
                <p className="text-sm text-gray-400">Available during business hours</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Contact Support
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;