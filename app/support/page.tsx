'use client';
import React, { useState } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
    { id: 'implementation', name: 'Implementation' }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation. We\'ll assess your needs and recommend the best solution for your business.',
      category: 'general'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical assistance, implementation guidance, training sessions, and ongoing maintenance.',
      category: 'general'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on the complexity of your project. Simple integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions.',
      category: 'training'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements.',
      category: 'customization'
    },
    {
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans including Starter ($2,999/month), Professional ($7,999/month), and custom Enterprise solutions. Contact us for a detailed quote.',
      category: 'billing'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all our solutions. No credit card required to get started.',
      category: 'billing'
    },
    {
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, follow industry best practices, and are compliant with major security standards including SOC 2 and ISO 27001.',
      category: 'technical'
    },
    {
      question: 'Do you provide custom development?',
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.',
      category: 'development'
      question: 'Can your solutions integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with most popular business systems including CRM, ERP, and cloud platforms.',
      category: 'technical'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '(302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
      contact: '+1 (555) 123-4567',
      availability: '24/7 Available'
    },
    {
      icon: <Mail className="w-8 h-8 text-green-500" />,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      icon: Mail,
      contact: 'support@ziontech.com',
      availability: 'Response within 2 hours',
      color: 'text-green-400'
    },
    {
      name: 'Live Chat',
      description: 'Instant help when you need it most',
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Business hours'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: 'Live Chat',
      description: 'Instant support through our website',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      contact: 'docs.ziontechgroup.com',
      availability: 'Always available'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="support, help, FAQ, customer service, technical support, AI solutions" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support for our AI and IT solutions. We're here to help you succeed.
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get the help you need, when you need it. Our expert support team is available 24/7 to assist with all your AI and IT solutions.
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Find answers, get support, and access resources to make the most of your Zion Tech Group solutions
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Search Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to get in touch with our support team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <channel.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{channel.title}</h3>
                  </div>
        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you. All channels are monitored by our expert team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${channel.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <channel.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.name}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className={`${channel.color} font-medium mb-2`}>{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
              ))}
            </div>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services.
              </p>
            </div>
            
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter</p>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                      <div className={`transform transition-transform duration-200 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Schedule Call
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Contact Support
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;