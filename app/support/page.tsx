'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solution for your business.',
      category: 'Getting Started'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer multiple support channels including email, phone, live chat, and a comprehensive knowledge base. Our support team is available 24/7 for critical issues.',
      category: 'Support'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation time varies depending on the complexity of your project. Simple integrations can take 1-2 weeks, while complex enterprise solutions may take 2-6 months. We provide detailed timelines during consultation.',
      category: 'Implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs for your team, including hands-on workshops, documentation, and ongoing support to ensure successful adoption of our solutions.',
      category: 'Training'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001.',
      category: 'Security'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing systems through APIs, webhooks, and custom connectors. We work with all major platforms and databases.',
      category: 'Integration'
    }
  ];

  const categories = ['all', 'Getting Started', 'Support', 'Implementation', 'Training', 'Security', 'Integration'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions, contact support, and access our knowledge base." />
        <meta name="keywords" content="support, help, FAQ, knowledge base, technical support, customer service" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Help and support center for our solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How Can We <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Help You?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Find answers to your questions, get technical support, and access our comprehensive knowledge base.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Search Our Knowledge Base</h2>
              <p className="text-gray-300">Find answers to common questions and technical issues</p>
            </div>
            
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Find answers to the most common questions about our services</p>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{faq.question}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400 mr-3">{faq.category}</span>
                    <div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-gray-300">Contact our support team directly for personalized assistance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300 mb-4">Speak directly with our support team</p>
              <div className="text-purple-400 font-medium">+1 (555) 123-4567</div>
              <div className="text-sm text-gray-400 mt-1">24/7 Available</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-300 mb-4">Send us a detailed message</p>
              <div className="text-cyan-400 font-medium">support@ziontechgroup.com</div>
              <div className="text-sm text-gray-400 mt-1">Response within 2 hours</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-4">Chat with us in real-time</p>
              <div className="text-pink-400 font-medium">Available Now</div>
              <div className="text-sm text-gray-400 mt-1">Mon-Fri 9AM-6PM EST</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-gray-300">Explore our comprehensive documentation and resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-purple-400 transition-colors">
              <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 text-sm">Comprehensive guides and API references</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-blue-400 transition-colors">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300 text-sm">Connect with other users and experts</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-green-400 transition-colors">
              <Zap className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Status Page</h3>
              <p className="text-gray-300 text-sm">Real-time system status and updates</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-cyan-400 transition-colors">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
              <p className="text-gray-300 text-sm">Video tutorials and training materials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;