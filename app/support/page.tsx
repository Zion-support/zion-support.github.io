'use client';
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
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
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
    }
  ];

  const resources = [
    {
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
    },
    {
      icon: Users,
      title: 'Community Forum',
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
  );
};

export default SupportPage;