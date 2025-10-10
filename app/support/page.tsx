'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Search,
  FileText,
  Video,
  Headphones
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportOptions = [
    {
      id: 1,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: '24/7',
      responseTime: 'Immediate',
      contact: '+1 (302) 464-0950',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 2 hours',
      contact: 'support@ziontechgroup.com',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Live Chat',
      description: 'Get instant help with our AI-powered chat system',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Immediate',
      contact: 'Start Chat',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Video Call',
      description: 'Schedule a video consultation with our experts',
      icon: Video,
      availability: 'Business Hours',
      responseTime: 'Within 24 hours',
      contact: 'Schedule Call',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team for a free consultation, and we\'ll help you choose the right AI solution for your business needs.',
      category: 'Getting Started'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We pride ourselves on fast response times. Phone and live chat support is immediate, email support responds within 2 hours, and video consultations are scheduled within 24 hours.',
      category: 'Support'
    },
    {
      question: 'Do you offer training for your AI solutions?',
      answer: 'Yes! We provide comprehensive training for all our AI solutions, including documentation, video tutorials, and live training sessions with our experts.',
      category: 'Training'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and GDPR.',
      category: 'Security'
    },
    {
      question: 'Can I integrate your AI solutions with my existing systems?',
      answer: 'Absolutely! Our AI solutions are designed with integration in mind. We provide APIs, SDKs, and custom integration services to connect with your existing infrastructure.',
      category: 'Integration'
    },
    {
      question: 'What happens if I need to scale my AI solution?',
      answer: 'Our solutions are built to scale with your business. We offer flexible pricing plans and can help you upgrade or expand your AI capabilities as your needs grow.',
      category: 'Scaling'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'Getting Started', name: 'Getting Started' },
    { id: 'Support', name: 'Support' },
    { id: 'Training', name: 'Training' },
    { id: 'Security', name: 'Security' },
    { id: 'Integration', name: 'Integration' },
    { id: 'Scaling', name: 'Scaling' }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. 24/7 support available via phone, email, live chat, and video calls." />
        <meta name="keywords" content="support, help, AI support, IT support, customer service, technical support" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Support <span className="text-cyan-400">Center</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're here to help you succeed with our AI and IT solutions. 
            Get the support you need, when you need it.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How Can We Help You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option) => (
              <div key={option.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {option.availability}
                  </div>
                  <div className="text-sm text-cyan-400 font-medium">
                    {option.responseTime}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  {option.contact}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                      <span className="bg-slate-700 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    </div>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help you 
              with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
