'use client';
const SupportPage: React.FC = () => {
=======
const SupportPage: React.FC = () => {
=======
const SupportPage: React.FC = () => {
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Search, 
  Send, 
  FileText, 
  Video, 
  Users, 
  BookOpen,
  ArrowRight,
  Star,
  Shield,
  Zap
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.'
=======
      category: 'General',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Contact our sales team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
    },
    {
      category: 'Technical',
      question: 'What technical support do you provide?',
      answer: 'We offer 24/7 technical support for all our services, including AI solutions, cloud infrastructure, and custom software. Our support includes phone, email, and live chat options.'
    },
    {
      category: 'Billing',
      question: 'How does your pricing work?',
      answer: 'Our pricing is flexible and based on your specific needs. We offer both project-based and subscription models. Contact us for a custom quote tailored to your requirements.'
    },
    {
      category: 'Technical',
      question: 'Do you provide training for your AI solutions?',
      answer: 'Yes! We provide comprehensive training for all our AI solutions, including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our tools.'
    },
    {
      category: 'General',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and more. Our AI and IT solutions are adaptable to various business needs.'
    },
    {
      category: 'Technical',
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures, comply with industry standards, and provide regular security audits and updates.'
    }
  ];
=======
  const supportChannels = [
    {title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      contact: 'support@ziontechgroup.com',},
    {title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST',},
    {title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: MessageCircle,
      contact: 'Available on website',}]

  const filteredFaqs = faqs.filter(faq =>)
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 phone support for urgent issues',
      contact: '+1 (302) 464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Real-time chat support on our website',
      contact: 'Available on website',
      availability: 'Business hours',
      responseTime: 'Within 5 minutes'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and video consultations',
      contact: 'Schedule via portal',
      availability: 'Business hours',
      responseTime: 'Scheduled'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      link: '/community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category.toLowerCase() === selectedCategory.toLowerCase()) &&
    (searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. 24/7 support available." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (
    <>
      <Helmet></Helmet>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Get the help you need to make the most of your AI and IT solutions.
              </p>
              
              <div className="max-w-md mx-auto relative mb-8"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Search>
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) =></input> setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="mb-12"></div>
              <div className="relative max-w-2xl mx-auto"></div>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Search>
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) =></input> setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"></div>
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <channel.icon className="w-8 h-8 text-white" /></channel>
                  </div>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2"></di>{channel.contact}</div>
                  <div className="text-sm text-gray-400 flex items-center justify-center"></div>
                    <Clock className="w-4 h-4 mr-2" /></Clock>
                    {channel.availability}
                  </div>
                </div>
              ))}
            </div>

                    <p className="text-gray-300">{faq.answer</p>}</p>
                  </div>
                ))}
              </div>
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Our support team is here to help you succeed with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center"></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h>Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
                Our technical team is here to help you succeed. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"></button>
=======
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Support
              </span>
              <br />
              <span className="text-white">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get instant support, find answers to common questions, 
              and access our comprehensive knowledge base.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Search
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="font-medium">Contact:</span>
                      <span>{channel.contact}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20'
                }`}
              >
                All
              </button>
              {['General', 'Technical', 'Billing'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      </div>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 ml-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Access Resource</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Contact Support
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  Schedule Call
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Contact Support
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
