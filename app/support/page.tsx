'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
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
    { name: 'api', label: 'API & Integration', count: 5 }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our quick start guide. You can also schedule a free consultation with our experts.',
      category: 'getting-started'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.',
      category: 'billing'
    },
    {
      id: 3,
      question: 'How do I integrate your APIs?',
      answer: 'Our APIs are RESTful and well-documented. You can find integration guides, SDKs, and code examples in our API documentation section.',
      category: 'api'
    },
    {
      id: 4,
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. If we fall below this threshold, you may be eligible for service credits.',
      category: 'technical'
    },
    {
      id: 5,
      question: 'How secure is my data?',
      answer: 'We use enterprise-grade security with end-to-end encryption, SOC 2 Type II compliance, and regular security audits.',
      category: 'technical'
    },
    {
      id: 6,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees, and you can continue using the service until the end of your billing period.',
      category: 'billing'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Under 2 minutes'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a screen sharing session with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Same day'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Support <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get help when you need it. Our support team is here to assist you with any questions 
              or issues you may have with our AI and IT solutions.
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Get <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Support</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={channel.title} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <channel.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>{channel.responseTime}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Categories */}
              <div className="lg:w-1/4">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.name
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span className="text-xs opacity-75">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="lg:w-3/4">
                <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <div key={faq.id} className="cyber-card p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Helpful <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Resources</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <BookOpen className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-gray-300 mb-4">Comprehensive guides and API references</p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>View Docs</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <Video className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Video Tutorials</h3>
                <p className="text-gray-300 mb-4">Step-by-step video guides and walkthroughs</p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>Watch Videos</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-gray-300 mb-4">Connect with other users and developers</p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>Join Community</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
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
              Our support team is standing by to help you succeed. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;