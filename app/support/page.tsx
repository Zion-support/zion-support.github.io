'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
    { name: 'api', label: 'API & Integration', count: 5 }
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
      answer: 'Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. Your data is never shared with third parties without your explicit consent.',
      category: 'technical',
      helpful: 92
    },
    {
      id: 4,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees, and you\'ll continue to have access to your plan until the end of your current billing period.',
      category: 'billing',
      helpful: 90
    },
    {
      id: 5,
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our customers. Our support team is available via live chat, email, and phone to help you with any questions or issues.',
      category: 'technical',
      helpful: 87
    },
    {
      id: 6,
      question: 'How do I integrate your API?',
      answer: 'We provide comprehensive API documentation, SDKs for popular programming languages, and code examples. Our technical team can also assist with custom integrations.',
      category: 'api',
      helpful: 85
    },
    {
      id: 7,
      question: 'Do you offer custom AI model development?',
      answer: 'Yes! Our AI research team can develop custom models tailored to your specific needs. We work with you to understand your requirements and deliver solutions that fit your business perfectly.',
      category: 'technical',
      helpful: 93
    },
    {
      id: 8,
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. If we fall below this threshold, we provide service credits as outlined in our SLA.',
      category: 'technical',
      helpful: 89
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed responses to complex issues',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and live demonstrations',
      availability: 'Business Hours',
      responseTime: 'Scheduled',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
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
      description: 'Step-by-step video guides',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      link: '/knowledge-base',
      type: 'Article'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
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

  return (
    <>
      <Helmet>
        <title>Support Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT services. Find answers to common questions, contact our support team, and access resources." />
        <meta name="keywords" content="support, help, FAQ, contact, technical support, customer service" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help when you need it. Our support team is here 24/7 to assist you with any questions or issues.
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
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>
          </section>

          {/* Support Channels */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How Can We Help You?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={index} className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                  <channel.icon className={`w-12 h-12 ${channel.color} mb-4`} />
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      {channel.responseTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map(faq => (
                <div key={faq.id} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 mb-4">{faq.answer}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Star className="w-4 h-4 mr-1" />
                      {faq.helpful}% helpful
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Was this helpful?
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Helpful Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500 group"
                >
                  <resource.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Still Need Help?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="btn-futuristic text-lg px-8 py-4"
                  >
                    Contact Support
                  </Link>
                  <a
                    href="tel:+1234567890"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SupportPage;