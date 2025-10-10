'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, BookOpen, Settings, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle },
    { id: 'general', name: 'General', icon: BookOpen },
    { id: 'technical', name: 'Technical', icon: Settings },
    { id: 'billing', name: 'Billing', icon: Shield },
    { id: 'account', name: 'Account', icon: User }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI development, cloud solutions, data analytics, cybersecurity, mobile development, and web development services. Our team specializes in custom AI solutions tailored to your business needs.'
    },
    {
      id: 2,
      category: 'technical',
      question: 'How do I get started with AI implementation?',
      answer: 'Getting started with AI implementation begins with a free consultation where we assess your current infrastructure, identify opportunities, and create a strategic roadmap. Contact us to schedule your consultation.'
    },
    {
      id: 3,
      category: 'technical',
      question: 'What technologies do you use for AI development?',
      answer: 'We use cutting-edge technologies including Python, TensorFlow, PyTorch, scikit-learn, cloud platforms (AWS, Azure, GCP), and modern frameworks like React, Node.js, and containerization tools.'
    },
    {
      id: 4,
      category: 'billing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including project-based pricing, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements. Contact us for a customized quote.'
    },
    {
      id: 5,
      category: 'account',
      question: 'How can I track my project progress?',
      answer: 'We provide regular project updates through our client portal, weekly status reports, and direct communication with your dedicated project manager. You can also schedule check-in calls anytime.'
    },
    {
      id: 6,
      category: 'general',
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance packages including 24/7 monitoring, regular updates, security patches, and performance optimization. Support levels can be customized to your needs.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get written responses',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="Support Center - Zion Tech Group"
        description="Get help and support for your AI and technology solutions. Find answers to common questions, contact our support team, and access resources."
        keywords="support, help, FAQ, technical support, customer service, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Support <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Get the help you need with our comprehensive support resources and expert assistance.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-purple-400 font-medium">{channel.contact}</p>
                  <p className="text-gray-400 text-sm">{channel.availability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and support.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quick Actions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common tasks and resources to help you get started quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Documentation',
                description: 'Browse our comprehensive documentation and guides',
                action: 'View Docs'
              },
              {
                icon: Settings,
                title: 'System Status',
                description: 'Check the current status of our services',
                action: 'Check Status'
              },
              {
                icon: MessageCircle,
                title: 'Community Forum',
                description: 'Connect with other users and share knowledge',
                action: 'Join Forum'
              },
              {
                icon: Zap,
                title: 'Emergency Support',
                description: 'Get immediate help for critical issues',
                action: 'Contact Now'
              }
            ].map((action, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  {action.action}
                  <ArrowRight className="inline-block ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our support team is here to help you succeed. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;