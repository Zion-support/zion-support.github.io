'use client';
import React, { useState } from 'react';
import { Search, MessageSquare, Phone, Mail, Clock, CheckCircle, Star, Users, Award, Shield, Globe, Brain, Cloud, Settings, ArrowRight, ChevronRight, BookOpen, FileText, Download, HelpCircle, Zap, Target, BarChart, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Topics', count: 45 },
    { name: 'getting-started', label: 'Getting Started', count: 12 },
    { name: 'billing', label: 'Billing & Plans', count: 8 },
    { name: 'technical', label: 'Technical Support', count: 15 },
    { name: 'api', label: 'API & Integration', count: 10 }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our quick start guide. Our team will also provide onboarding assistance to ensure you get the most out of our platform.',
      category: 'getting-started',
      popular: true
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Enterprise customers can also arrange for invoicing and payment terms.',
      category: 'billing',
      popular: false
    },
    {
      id: 3,
      question: 'How do I integrate your API into my application?',
      answer: 'Our API is RESTful and easy to integrate. Check out our comprehensive API documentation, which includes code examples in multiple programming languages. We also provide SDKs for popular languages.',
      category: 'api',
      popular: true
    },
    {
      id: 4,
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support via email, chat, and phone. Our support team includes AI experts, cloud engineers, and security specialists who can help with any technical issues.',
      category: 'technical',
      popular: true
    },
    {
      id: 5,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees, and you\'ll continue to have access to your services until the end of your current billing period.',
      category: 'billing',
      popular: false
    },
    {
      id: 6,
      question: 'How secure is my data?',
      answer: 'We take security seriously. All data is encrypted in transit and at rest using industry-standard encryption. We\'re SOC 2 compliant and undergo regular security audits.',
      category: 'technical',
      popular: true
    }
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: '< 4 hours',
      action: 'Send Email'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: BookOpen,
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: FileText,
      link: '/tutorials'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      link: '/community'
    },
    {
      title: 'Status Page',
      description: 'Check system status and uptime',
      icon: Globe,
      link: '/status'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const searchedFaqs = searchQuery 
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  const popularFaqs = faqs.filter(faq => faq.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Support - Zion Tech Group"
        description="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, contact support, and access resources."
        keywords="support, help, FAQ, contact, technical support, customer service, documentation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            How Can We
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the support you need to succeed with our AI and IT solutions. 
            Our expert team is here to help you every step of the way.
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
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {channel.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {channel.description}
                </p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span>Response: {channel.responseTime}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {popularFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
          
          <div className="space-y-4">
            {searchedFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Can't find what you're looking for? Our support team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
