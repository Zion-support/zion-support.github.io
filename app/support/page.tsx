'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, MessageSquare, Phone, Mail, Clock, CheckCircle, ArrowRight, Zap, Headphones, FileText, Video, Users } from 'lucide-react'

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'general',
      title: 'General Support',
      description: 'General questions and account support',
      icon: <Headphones className="w-8 h-8 text-cyan-400" />,
      articles: 25
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Technical issues and troubleshooting',
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      articles: 40
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      description: 'Billing questions and payment support',
      icon: <FileText className="w-8 h-8 text-green-400" />,
      articles: 15
    },
    {
      id: 'api',
      title: 'API Documentation',
      description: 'API integration and development',
      icon: <Code className="w-8 h-8 text-orange-400" />,
      articles: 30
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply contact our sales team for a free consultation, and we\'ll help you choose the right AI solutions for your business needs.',
      category: 'general'
    },
    {
      question: 'What is your response time for support tickets?',
      answer: 'We typically respond to support tickets within 2-4 hours during business hours (9 AM - 6 PM EST). For urgent issues, please call our support hotline.',
      category: 'technical'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we offer 24/7 support for our Enterprise clients. Standard support is available during business hours with emergency support available.',
      category: 'general'
    },
    {
      question: 'How can I integrate your API into my application?',
      answer: 'We provide comprehensive API documentation and SDKs for popular programming languages. Our technical team can also assist with integration.',
      category: 'api'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise clients.',
      category: 'billing'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee for all new customers.',
      category: 'billing'
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-cyan-400" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (302) 464-0950',
      availability: '24/7 for Enterprise clients'
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond quickly',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2-4 hours'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on our website',
      availability: '9 AM - 6 PM EST'
    },
    {
      icon: <Video className="w-8 h-8 text-orange-400" />,
      title: 'Video Call',
      description: 'Schedule a video call for complex issues',
      contact: 'Schedule through our portal',
      availability: 'By appointment'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-advanced" data-text="Center">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help when you need it. Our comprehensive support center is here to assist you with any questions or issues.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input text-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-300">
              Choose a category to find the help you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category) => (
              <div key={category.id} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-6 text-center hover-quantum">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {category.description}
                </p>
                <div className="text-cyan-400 text-sm font-medium mb-4">
                  {category.articles} articles
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 quantum-button">
                  Browse Articles
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Contact Our Support Team
            </h2>
            <p className="text-xl text-gray-300">
              Multiple ways to get in touch with our expert support team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-6 text-center hover-quantum">
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {method.description}
                </p>
                <div className="text-cyan-400 font-medium mb-2">
                  {method.contact}
                </div>
                <div className="text-gray-400 text-sm">
                  {method.availability}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                All Categories
              </button>
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-6 hover-quantum">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Live Chat
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <Phone className="w-5 h-5 mr-2 inline" />
              Call Support
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SupportPage