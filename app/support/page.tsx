'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
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
    { name: 'technical', label: 'Technical Issues', count: 7 },
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
      question: 'Can I integrate your AI services with my existing systems?',
      answer: 'Yes! We provide comprehensive APIs and SDKs for all major programming languages. Our integration team can help you connect with your existing CRM, ERP, or custom systems.',
      category: 'api',
      helpful: 90
    },
    {
      id: 5,
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 support via chat, email, and phone. Enterprise clients get dedicated account managers and priority support. We also provide extensive documentation and video tutorials.',
      category: 'getting-started',
      helpful: 87
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support Center - Zion Tech Group | Help & Documentation</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team." />
        <meta name="keywords" content="support, help, documentation, FAQ, contact support, technical assistance" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  How Can We Help You?
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Find answers to common questions, access our documentation, or get in touch with our support team.
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for help..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                  <MessageCircle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Start Chat
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                  <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Call us at (302) 464-0950</p>
                  <a href="tel:+13024640950" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block">
                    Call Now
                  </a>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                  <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us a detailed message</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-block">
                    Send Email
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category.name
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                      }`}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <div key={faq.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-600 mb-4">{faq.answer}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              {faq.helpful}% helpful
                            </span>
                            <span className="capitalize">{faq.category.replace('-', ' ')}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
                      </div>
                    </div>
                  ))}
                </div>

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Still Need Help?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our support team is here to help you succeed. Get in touch with us through any of these channels.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-indigo-600 mr-3" />
                        <span>(302) 464-0950</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-indigo-600 mr-3" />
                        <span>kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-indigo-600 mr-3" />
                        <span>Mon-Fri 9AM-6PM EST</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Times</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Live Chat</span>
                        <span className="text-green-600 font-semibold">Instant</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Email</span>
                        <span className="text-blue-600 font-semibold">Within 2 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Phone</span>
                        <span className="text-purple-600 font-semibold">Immediate</span>
                      </div>
                    </div>
                  </div>
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