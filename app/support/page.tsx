'use client';
import React from 'react';
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, Star, Users, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
import React from 'react';

const SupportPage: React.FC = () => {

const SupportPage: React.FC = () => {

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and create a customized implementation plan.',
      category: 'Getting Started',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'general',
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly.',
      category: 'Support',
    },
    {
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards.',
      category: 'Security',
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing infrastructure and third-party applications.',
      category: 'Integration',
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We guarantee response times of under 1 hour for critical issues and 4 hours for general inquiries during business hours.',
      category: 'Support',
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Absolutely! We provide comprehensive training programs to ensure your team can effectively use and maintain the solutions.',
      category: 'Training',
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      hours: '24/7 Available',
    },
    {
      category: 'Technical',
      question: 'What technical support do you provide?',
      answer: 'We provide 24/7 technical support for all our services. Our support team includes certified engineers who can help with implementation, troubleshooting, and optimization.',
    },
    {
      category: 'Billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise clients. All payments are processed securely through our encrypted payment system.',
    },
    {
      category: 'Technical',
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions. Training is included with all our service plans.',
    },
    {
      category: 'General',
      question: 'Can I customize your solutions for my specific needs?',
      answer: 'Absolutely! All our solutions are designed to be customizable. Our team works closely with you to tailor solutions that meet your specific business requirements and objectives.',
    },
    {
      category: 'Technical',
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. We have redundant systems and monitoring in place to ensure maximum availability and quick recovery from any issues.',
    }
  ];

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  ]

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services.',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with all major cloud platforms (AWS, Azure, GCP), AI frameworks (TensorFlow, PyTorch), and modern development stacks.',
    }
  ];
  const supportChannels = [
    {
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST',
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: MessageCircle,
      contact: 'Available on website',
    }
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Support</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get help and support for our AI and IT solutions.
          </p>
        </div>
      </div>
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7 for critical issues',
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 302 464 0950',
      availability: '24/7',
      responseTime: 'Immediate',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      hours: 'Response within 4 hours',
      hours: '24/7',
      description: 'Send us an email and we\'ll respond quickly',
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST',
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, contact support, and access resources." />
      availability: '24/7',
    }
  ]

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials',
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: <Users className="w-5 h-5" />,
      link: '/community',
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base',
    }
  ]

  return (
    <>
  </>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />
        <meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            How Can We
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our dedicated support team is here to help you succeed with our AI and IT solutions. 
            Find answers, get assistance, and access resources.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Search for Help</h2>
            <p className="text-gray-300">Find answers to common questions and solutions</p>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help, questions, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>
            <p className="text-xl text-gray-300">Get in touch with our support team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <p className="text-cyan-400 font-semibold mb-2">{channel.contact}</p>
                <p className="text-sm text-gray-400">{channel.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Find answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-2 py-1 rounded-full mr-3">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span> Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get the support you need with our comprehensive help center and dedicated support team.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How can we help you?</h2>
              <p className="text-gray-300">Search our knowledge base or contact our support team</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Categories</option>
                <option value="General">General</option>
                <option value="Technical">Technical</option>
                <option value="Billing">Billing</option>
              </select>
            </div>
          </div>
        </div>
      </section>

        {/* Search Section */}
        <section$1>
        <div$2>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How can we help you?</h2>
              <p className="text-xl text-gray-300">Search our knowledge base or contact our support team</p>
            </div>
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value</div>
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id</div>
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Choose the support channel that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-cyan-400 font-semibold mb-2">{channel.contact}</div>
                <div className="text-sm text-gray-400">
                  <div>Available: {channel.availability}</div>
                  <div>Response: {channel.responseTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      <section>
        <div>
          <div>
            <h2>
                Get in Touch
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to contact our support team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                </div>
              ))}
            </div>
          ))
        </section>

        {/* FAQ Section */}
        <section$1>
        <div$2>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            ))
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Contact Support
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
    </div>
  );
};

export default SupportPage;
            </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </button>
            <button className="cyber-button-secondary">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
