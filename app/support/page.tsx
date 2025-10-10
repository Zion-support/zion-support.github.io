'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Search, 
  FileText, 
  Headphones, 
  Zap,
  ArrowRight,
  Star,
  Users,
  Award
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const supportCategories = [
    'All',
    'AI Services',
    'IT Services',
    'Micro SAAS',
    'Billing',
    'Technical Issues',
    'Account Management'
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'AI Services'
    },
    {
      id: 2,
      question: 'What is your response time for support requests?',
      answer: 'We offer 24/7 support with guaranteed response times: Critical issues (1 hour), High priority (4 hours), Standard requests (24 hours).',
      category: 'Technical Issues'
    },
    {
      id: 3,
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. We\'ll help you transition your data and ensure a smooth process.',
      category: 'Billing'
    },
    {
      id: 4,
      question: 'Do you offer custom AI solutions?',
      answer: 'Absolutely! We specialize in custom AI solutions tailored to your specific business needs. Contact our team to discuss your requirements.',
      category: 'AI Services'
    },
    {
      id: 5,
      question: 'How secure is my data?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards like SOC 2 and GDPR.',
      category: 'Technical Issues'
    },
    {
      id: 6,
      question: 'What training do you provide?',
      answer: 'We offer comprehensive training including documentation, video tutorials, live training sessions, and ongoing support to ensure your team can effectively use our solutions.',
      category: 'Account Management'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (302) 464-0950',
      availability: '24/7 Emergency Support',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Within 4 hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Within 2 minutes'
    },
    {
      icon: FileText,
      title: 'Ticket System',
      description: 'Submit a support ticket',
      contact: 'support.ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 1 hour'
    }
  ];

  const stats = [
    {
      icon: Clock,
      value: '< 1 min',
      label: 'Average Response Time',
      description: 'For live chat support'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Customer Satisfaction',
      description: 'Based on support ratings'
    },
    {
      icon: Users,
      value: '24/7',
      label: 'Support Availability',
      description: 'Round-the-clock assistance'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Service reliability'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Customer Support & Help Center</title>
        <meta name="description" content="Get help with Zion Tech Group services. 24/7 support, comprehensive documentation, and expert assistance for all your AI and IT needs." />
        <meta name="keywords" content="customer support, help center, technical support, AI support, IT support, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help when you need it. Our expert support team is here 24/7 to assist you with any questions or issues.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-cyan-400 font-medium">{channel.contact}</div>
                    <div className="text-gray-400">{channel.availability}</div>
                    <div className="text-gray-400">Response: {channel.responseTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {supportCategories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 ml-4" />
                  </div>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert support team is ready to help you with any questions or issues.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;