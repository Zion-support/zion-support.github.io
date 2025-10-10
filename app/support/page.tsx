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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'account', name: 'Account' }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply contact our sales team to schedule a consultation. We\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'general'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including email support, phone support, live chat, and dedicated account managers for enterprise clients. Our support team is available 24/7.',
      category: 'general'
    },
    {
      question: 'How secure are your AI solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and regular security audits to protect your data.',
      category: 'technical'
    },
    {
      question: 'Can I integrate your AI solutions with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing systems through APIs and custom connectors. Our technical team will help you with the integration process.',
      category: 'technical'
    },
    {
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans including Starter, Professional, and Enterprise tiers. Custom pricing is available for large organizations. Contact our sales team for detailed pricing information.',
      category: 'billing'
    },
    {
      question: 'How do I update my account information?',
      answer: 'You can update your account information by logging into your dashboard and navigating to the account settings section. For enterprise accounts, contact your account manager.',
      category: 'account'
    },
    {
      question: 'Do you offer training for your AI solutions?',
      answer: 'Yes! We provide comprehensive training programs including online tutorials, webinars, and on-site training sessions. Training is included with all our plans.',
      category: 'general'
    },
    {
      question: 'What happens if I need to cancel my subscription?',
      answer: 'You can cancel your subscription at any time through your account dashboard. We offer a 30-day notice period for most plans, and you\'ll continue to have access until the end of your billing period.',
      category: 'billing'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers to common questions, contact support, and access resources." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service, AI support, IT support" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            How Can We <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Help You?</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to your questions, get technical support, and access resources to make the most of our AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-6">Get instant help from our support team</p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Start Chat
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-6">Call us for immediate assistance</p>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Call Now
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-6">Send us a detailed message</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Send Email
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300">Contact our support team directly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">support@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">24/7 Response</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300">Available Now</p>
              <p className="text-sm text-gray-400">Instant Support</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300">Knowledge Base</p>
              <p className="text-sm text-gray-400">Self-Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you succeed with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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