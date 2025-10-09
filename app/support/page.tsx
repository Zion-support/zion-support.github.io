import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle, HelpCircle, FileText, Video, BookOpen, Users, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle },
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'technical', name: 'Technical Support', icon: FileText },
    { id: 'billing', name: 'Billing & Pricing', icon: CheckCircle },
    { id: 'api', name: 'API & Integration', icon: BookOpen }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Contact our team through the contact form or call us at (302) 464-0950. We\'ll schedule a free consultation to understand your needs and recommend the best AI solutions for your business.',
      popular: true
    },
    {
      id: 2,
      category: 'technical',
      question: 'What AI technologies do you support?',
      answer: 'We support a wide range of AI technologies including machine learning, natural language processing, computer vision, predictive analytics, and quantum computing. Our team works with Python, TensorFlow, PyTorch, and other leading AI frameworks.',
      popular: true
    },
    {
      id: 3,
      category: 'billing',
      question: 'What are your pricing options?',
      answer: 'Our pricing varies based on the services you need. AI services start at $1,500/month, AI marketing at $199/month, and AI automation at $399/month. We also offer custom enterprise solutions with flexible pricing.',
      popular: true
    },
    {
      id: 4,
      category: 'technical',
      question: 'Do you provide 24/7 support?',
      answer: 'Yes! We offer 24/7 technical support for all our enterprise clients. Our support team is available around the clock to help with any issues or questions you may have.',
      popular: false
    },
    {
      id: 5,
      category: 'api',
      question: 'Do you have API documentation?',
      answer: 'Yes, we provide comprehensive API documentation for all our services. You can access our API docs at /api-docs or contact our technical team for integration assistance.',
      popular: false
    },
    {
      id: 6,
      category: 'billing',
      question: 'Can I change my plan anytime?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments accordingly.',
      popular: false
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-400'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-blue-400'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-purple-400'
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session',
      icon: Video,
      availability: 'Business Hours',
      responseTime: 'Same day',
      color: 'text-orange-400'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/support" className="text-cyan-400 font-semibold">Support</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support <span className="text-cyan-400">Center</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get help when you need it. Our expert support team is here to assist you 24/7.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center`}>
                    <channel.icon className={`w-6 h-6 ${channel.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
                    <p className="text-sm text-gray-400">{channel.availability}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Response time:</span>
                  <span className="text-cyan-400 font-semibold">{channel.responseTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Start Live Chat</h3>
              <p className="text-sm opacity-90">Get instant help from our team</p>
            </Link>
            <Link
              to="/docs"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
            >
              <BookOpen className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">View Documentation</h3>
              <p className="text-sm opacity-90">Browse our comprehensive guides</p>
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg text-center hover:from-green-600 hover:to-teal-700 transition-all duration-200"
            >
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Call Us Now</h3>
              <p className="text-sm opacity-90">(302) 464-0950</p>
            </a>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* FAQ List */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-slate-800 rounded-lg border border-slate-700">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                        {faq.popular && (
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is standing by to help you with any questions or issues. 
            Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Contact Support
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SupportPage;