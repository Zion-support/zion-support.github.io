'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'support', name: 'Support' }
  ];

  const faqs: FAQ[] = [
    {
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI solutions, cloud services, cybersecurity, custom development, data analytics, and IT consulting services.',
      category: 'general'
    },
    {
      question: 'How do I get started with your services?',
      answer: 'Contact us through our website or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.',
      category: 'general'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 technical support for all our clients. Our support team is always available to help with any issues.',
      category: 'support'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity. Simple projects can take 2-4 weeks, while complex enterprise solutions may take 3-6 months.',
      category: 'technical'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. We have solutions tailored for every budget.',
      category: 'general'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment terms including monthly subscriptions, project-based pricing, and custom enterprise agreements.',
      category: 'billing'
    }
  ];

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
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, contact support, and access resources." />
        <meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed with our AI and IT solutions
              </p>
            </div>
          </section>

          {/* Contact Options */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                  <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
                  <p className="text-blue-400 font-medium">+1 (555) 123-4567</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                  <p className="text-gray-300 mb-4">Send us a detailed message</p>
                  <p className="text-blue-400 font-medium">support@ziontechgroup.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 mb-4">Chat with our support team</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-white/5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              {/* Search and Filter */}
              <div className="mb-8">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
                    >
                      <span className="text-white font-medium">{faq.question}</span>
                      <div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Additional Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
                  <p className="text-gray-300 mb-4">Comprehensive guides and API documentation</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">View Docs</button>
                </div>
                <div className="text-center">
                  <HelpCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Tutorials</h3>
                  <p className="text-gray-300 mb-4">Step-by-step tutorials and guides</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">Watch Tutorials</button>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
                  <p className="text-gray-300 mb-4">Join our community forum</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">Join Community</button>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Status Page</h3>
                  <p className="text-gray-300 mb-4">Check system status and uptime</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">Check Status</button>
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