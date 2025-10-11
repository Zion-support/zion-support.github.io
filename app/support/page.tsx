'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react'

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply contact us through our consultation form, and we\'ll schedule a free assessment to understand your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started'
    },
    {
      id: '2',
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours during business days. For urgent issues, we have a priority support system that ensures faster response times.',
      category: 'Support'
    },
    {
      id: '3',
      question: 'Do you offer custom AI solutions?',
      answer: 'Yes! We specialize in creating custom AI solutions tailored to your specific business requirements. Our team will work with you to develop solutions that perfectly fit your needs.',
      category: 'Services'
    },
    {
      id: '4',
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including data encryption, secure cloud infrastructure, regular security audits, and compliance with industry standards like SOC 2 and GDPR.',
      category: 'Security'
    },
    {
      id: '5',
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Absolutely! Our solutions are designed with integration in mind. We provide APIs, webhooks, and custom integration services to ensure seamless connectivity with your existing systems.',
      category: 'Integration'
    },
    {
      id: '6',
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and enterprise agreements. Contact us for a personalized quote based on your specific requirements.',
      category: 'Pricing'
    }
  ];

  const categories = ['All', 'Getting Started', 'Support', 'Services', 'Security', 'Integration', 'Pricing'];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help when you need it. Find answers to common questions, contact our support team, or explore our resources.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Live Chat</h3>
              <p className="text-gray-300 mb-6">Get instant help from our support team</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Start Chat
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Phone Support</h3>
              <p className="text-gray-300 mb-6">Call us for immediate assistance</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Call Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Email Support</h3>
              <p className="text-gray-300 mb-6">Send us a detailed message</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Categories */}
            <div className="md:w-1/4">
              <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {filteredFAQs.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {item.question}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-gray-300 mb-2">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-gray-300 mb-2">support@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">24/7 email support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Response Time</h3>
              <p className="text-gray-300 mb-2">Within 24 hours</p>
              <p className="text-gray-400 text-sm">For urgent issues, faster response</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SupportPage