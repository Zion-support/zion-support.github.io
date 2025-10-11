'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, MessageSquare, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Users } from 'lucide-react'

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our consultation form or call us directly. We\'ll schedule a free consultation to understand your needs and provide a customized solution.',
      category: 'Getting Started'
    },
    {
      id: 2,
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity and scope. Simple projects can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase.',
      category: 'Project Management'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive support packages including maintenance, updates, and technical support. Our support plans are tailored to your specific needs and can be adjusted as your business grows.',
      category: 'Support'
    },
    {
      id: 4,
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, Google Cloud, AI/ML frameworks, and many more. We stay current with the latest technologies to provide the best solutions.',
      category: 'Technology'
    },
    {
      id: 5,
      question: 'How do you ensure data security and privacy?',
      answer: 'We follow industry best practices for data security including encryption, secure coding practices, regular security audits, and compliance with relevant regulations like GDPR and HIPAA.',
      category: 'Security'
    },
    {
      id: 6,
      question: 'Can you help with existing systems integration?',
      answer: 'Absolutely! We specialize in integrating new solutions with existing systems. We conduct thorough assessments to ensure seamless integration and minimal disruption to your operations.',
      category: 'Integration'
    }
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Under 5 minutes'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      availability: '24/7',
      responseTime: 'Immediate'
    }
  ];

  const categories = ['all', 'Getting Started', 'Project Management', 'Support', 'Technology', 'Security', 'Integration'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
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
              Support <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How Can We Help You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <channel.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>{channel.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/20 text-gray-300 hover:bg-white/30'
                }`}
              >
                {category === 'all' ? 'All Questions' : category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                  <span className="ml-4 bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full">
                    {faq.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No questions found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you succeed. Contact us through any of the channels below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Live Chat
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SupportPage