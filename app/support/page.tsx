'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
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
    { name: 'billing', label: 'Billing & Pricing', count: 5 },
    { name: 'technical', label: 'Technical Support', count: 7 },
    { name: 'account', label: 'Account Management', count: 5 }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our quick start guide. Our team will help you set up your first AI project within 24 hours.',
      category: 'getting-started',
      helpful: 95
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Enterprise clients can also set up invoicing and payment terms.',
      category: 'billing',
      helpful: 88
    },
    {
      id: 3,
      question: 'How secure is my data?',
      answer: 'We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is protected with bank-level security measures.',
      category: 'technical',
      helpful: 92
    },
    {
      id: 4,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees, and you\'ll continue to have access to your services until the end of your billing period.',
      category: 'billing',
      helpful: 85
    },
    {
      id: 5,
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our customers. Our support team is available via chat, email, and phone to help you with any issues.',
      category: 'technical',
      helpful: 90
    },
    {
      id: 6,
      question: 'How do I upgrade my plan?',
      answer: 'You can upgrade your plan anytime from your dashboard. Simply go to the billing section, select your new plan, and the changes will take effect immediately.',
      category: 'account',
      helpful: 87
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 minutes',
      action: 'Start Chat'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      action: 'Send Email'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM PST',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation',
      icon: BookOpen,
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Browse Docs'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOOptimizer 
        title="Support Center - Zion Tech Group"
        description="Get help and support for our AI and IT solutions. Find answers, contact support, and access our knowledge base."
        keywords="support, help center, customer service, technical support, FAQ, contact us"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Support Center
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                We're here to help you succeed. Find answers, get support, and access 
                our comprehensive knowledge base.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">How can we help you?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {channel.availability}
                      </div>
                      <div className="text-sm text-cyan-400">
                        Response: {channel.responseTime}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      {channel.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.label}
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Star className="w-4 h-4" />
                          {faq.helpful}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Still need help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you with any questions or issues. 
              Contact us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SupportPage;
