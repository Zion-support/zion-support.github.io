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
  Zap
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Topics', count: 25 },
    { name: 'getting-started', label: 'Getting Started', count: 8 },
    { name: 'billing', label: 'Billing & Plans', count: 5 },
    { name: 'technical', label: 'Technical Support', count: 7 },
    { name: 'api', label: 'API Support', count: 5 }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with your platform?',
      answer: 'Getting started is easy! Simply sign up for an account, verify your email, and follow our quick start guide. You can also schedule a demo with our team for personalized assistance.',
      helpful: 45
    },
    {
      id: 2,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely through our PCI-compliant payment system.',
      helpful: 38
    },
    {
      id: 3,
      category: 'technical',
      question: 'How do I integrate your API?',
      answer: 'Our API integration is straightforward. First, obtain your API key from the dashboard, then refer to our comprehensive API documentation. We also provide SDKs for popular programming languages.',
      helpful: 52
    },
    {
      id: 4,
      category: 'technical',
      question: 'What are your system requirements?',
      answer: 'Our platform is cloud-based and works on any modern web browser. For mobile apps, we support iOS 12+ and Android 8+. No special hardware requirements needed.',
      helpful: 41
    },
    {
      id: 5,
      category: 'billing',
      question: 'Can I change my plan anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate any billing differences. Enterprise plans can be customized based on your needs.',
      helpful: 29
    },
    {
      id: 6,
      category: 'api',
      question: 'What are your API rate limits?',
      answer: 'Our API rate limits vary by plan: Free tier allows 100 requests/hour, Pro tier allows 1,000 requests/hour, and Enterprise plans have custom limits. Contact us for higher limits.',
      helpful: 33
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a screen sharing session for complex issues',
      availability: 'By appointment',
      responseTime: 'Same day',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredFaqs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Support <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get help when you need it. Our comprehensive support resources and expert team are here to assist you.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>{channel.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Categories */}
            <div className="md:w-1/4">
              <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {filteredFaqs.map((item) => (
                  <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{item.question}</h4>
                    <p className="text-gray-300 mb-4">{item.answer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Star className="w-4 h-4" />
                        <span>{item.helpful} people found this helpful</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-green-400 hover:text-green-300 text-sm">
                          Yes
                        </button>
                        <button className="text-red-400 hover:text-red-300 text-sm">
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Support
            </button>
            <button className="border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;