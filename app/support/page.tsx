'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight, Search, FileText, Video, Headphones } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics', icon: FileText },
    { id: 'technical', name: 'Technical Support', icon: Headphones },
    { id: 'billing', name: 'Billing & Pricing', icon: FileText },
    { id: 'account', name: 'Account Management', icon: MessageSquare },
    { id: 'integration', name: 'Integration Help', icon: Video }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team at +1 302 464 0950 or email kleber@ziontechgroup.com for a free consultation. We\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'technical'
    },
    {
      id: 2,
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on the services you need. We offer flexible plans starting from $99/month for micro SAAS solutions to custom enterprise packages. Contact us for a detailed quote tailored to your requirements.',
      category: 'billing'
    },
    {
      id: 3,
      question: 'Do you provide 24/7 support?',
      answer: 'Yes! We offer 24/7 technical support for all our enterprise clients. Our support team is available around the clock to ensure your systems run smoothly.',
      category: 'technical'
    },
    {
      id: 4,
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary depending on the complexity of your project. Simple micro SAAS solutions can be deployed in 1-2 weeks, while complex enterprise AI systems may take 2-6 months.',
      category: 'technical'
    },
    {
      id: 5,
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems. Our team will work with you to ensure smooth integration with your current infrastructure.',
      category: 'integration'
    },
    {
      id: 6,
      question: 'What security measures do you have in place?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, secure data handling, compliance with industry standards, and regular security audits.',
      category: 'technical'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 302 464 0950',
      availability: '24/7 for Enterprise clients',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and we\'ll respond quickly',
      contact: 'kleber@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-blue-400'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. 24/7 technical support, documentation, and contact information." />
        <meta name="keywords" content="support, help, technical support, customer service, AI support, IT support" />
      </Helmet>

      <Navigation />

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the help you need with our comprehensive support resources and expert assistance.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Our Support Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the best way to get in touch with our expert support team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="text-cyan-400 font-semibold mb-2">{method.contact}</div>
                <div className="text-sm text-gray-400">{method.availability}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our services and solutions.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;