'use client';
import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle, 
  Search, 
  Filter, 
  Clock, 
  Star, 
  Users, 
  BookOpen, 
  FileText, 
  Video, 
  Calendar,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us at +1 (302) 464-0950. We\'ll schedule a free consultation to understand your needs and recommend the best solutions for your business.',
      category: 'getting-started',
      helpful: 89
    },
    {
      id: 2,
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including machine learning platforms, natural language processing, computer vision, predictive analytics, workflow automation, and custom AI solutions tailored to your specific business needs.',
      category: 'technical',
      helpful: 92
    },
    {
      id: 3,
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the specific services and scale of your project. We offer flexible pricing plans starting from $199/month for basic AI services to custom enterprise solutions. Contact us for a detailed quote tailored to your needs.',
      category: 'billing',
      helpful: 85
    },
    {
      id: 4,
      question: 'Do you provide 24/7 support?',
      answer: 'Yes! We offer 24/7 technical support for all our enterprise clients. Our support team is available around the clock to help with any issues or questions you may have.',
      category: 'technical',
      helpful: 94
    },
    {
      id: 5,
      question: 'How do I integrate your APIs?',
      answer: 'We provide comprehensive API documentation and SDKs for popular programming languages. Our technical team will guide you through the integration process and provide sample code and best practices.',
      category: 'api',
      helpful: 87
    },
    {
      id: 6,
      question: 'What is your data security policy?',
      answer: 'We take data security seriously and are SOC 2 Type II compliant. All data is encrypted in transit and at rest, and we follow industry best practices for data protection and privacy.',
      category: 'technical',
      helpful: 91
    }
  ];

  const supportArticles = [
    {
      id: 1,
      title: 'Getting Started with AI Analytics',
      description: 'Learn how to set up and configure our AI analytics platform for maximum insights',
      category: 'getting-started',
      readTime: '5 min read',
      views: 1250,
      helpful: 89
    },
    {
      id: 2,
      title: 'API Authentication Guide',
      description: 'Complete guide to authenticating with our APIs and managing access tokens',
      category: 'api',
      readTime: '8 min read',
      views: 980,
      helpful: 92
    },
    {
      id: 3,
      title: 'Billing and Payment Methods',
      description: 'Everything you need to know about billing, payment methods, and invoice management',
      category: 'billing',
      readTime: '3 min read',
      views: 756,
      helpful: 85
    },
    {
      id: 4,
      title: 'Troubleshooting Common Issues',
      description: 'Quick solutions to the most common technical issues and error messages',
      category: 'technical',
      readTime: '6 min read',
      views: 2100,
      helpful: 94
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      contact: 'Available on website',
      availability: 'Business hours',
      responseTime: 'Immediate'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a dedicated support session with our experts',
      contact: 'Book online',
      availability: 'Business hours',
      responseTime: 'Scheduled'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Support Center
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get help when you need it. Find answers, connect with our team, and get the most out of our AI solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <HelpCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Knowledge Base</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the support method that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{method.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="text-cyan-400 font-medium">{method.contact}</div>
                  <div className="text-gray-400">Available: {method.availability}</div>
                  <div className="text-gray-400">Response: {method.responseTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.name
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-slate-800/50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed mb-4">{faq.answer}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{faq.helpful}% helpful</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Knowledge Base
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides and documentation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportArticles.map((article) => (
              <div key={article.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {article.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{article.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{article.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{article.helpful}% helpful</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our expert support team is here to help you succeed. Get in touch with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;