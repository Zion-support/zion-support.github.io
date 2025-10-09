import {ChevronDown, ChevronUp, Search, Phone, Mail, MessageSquare} from 'lucide-react';
'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: questions, [
          question: answer, 'Zion Tech Group is a leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. We help businesses transform their operations with cutting-edge technology.'
        },
          question: answer, 'We offer comprehensive AI services, IT infrastructure solutions, micro SAAS applications, cloud migration, cybersecurity, quantum computing, and digital transformation consulting. Our services span from AI automation to complete enterprise solutions.'
          question: answer, 'Getting started is easy! Contact us for a free consultation at (302) 464-0950 or email kleber@ziontechgroup.com. We\'ll assess your needs and recommend the best solutions for your business.'
          question: answer, 'Yes, we specialize in custom AI and IT solutions tailored to your specific business needs. Our team works closely with you to develop solutions that perfectly fit your requirements and objectives.'
        }
      ]
      category: "What AI services do you provide?",
          answer: "How much do AI services cost?",
          answer: "Do you provide AI training for our team?",
          answer: "Can you integrate AI with our existing systems?",
          answer: "IT Services",
          question: answer, 'We offer comprehensive IT services including cloud migration, cybersecurity, DevOps & CI/CD, database management, network solutions, system administration, IT consulting, and 24/7 support.'
          question: answer, 'Yes, we offer 24/7 IT support and monitoring services to ensure your systems are always running smoothly. Our support team is available around the clock to address any issues.'
          question: answer, 'Absolutely! We specialize in cloud migration services for AWS, Azure, and GCP. We ensure seamless migration with 99.9% uptime guarantee and minimal business disruption.'
          question: answer, 'We provide comprehensive cybersecurity services including threat detection, vulnerability assessment, security monitoring, compliance management, and incident response.'
      category: "What are Micro SAAS solutions?",
          answer: "How quickly can I deploy a Micro SAAS solution?",
          answer: "Do I need technical expertise to use Micro SAAS?",
          answer: "Can Micro SAAS solutions be customized?",
          answer: "Pricing & Billing",
          question: answer, 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and enterprise contracts. Pricing depends on the scope and complexity of services required.'
          question: answer, 'Yes, we offer free initial consultations to assess your needs and recommend the best solutions. Contact us to schedule your free consultation.'
          question: answer, 'Setup fees vary by service type. Some services include setup in the monthly fee, while others may have one-time setup charges. We\'ll provide clear pricing details during consultation.'
          question: answer, 'Yes, we offer attractive discounts for annual contracts and long-term partnerships. Contact us to discuss the best pricing options for your needs.'
      category: "How can I contact support?",
          answer: "What are your business hours?",
          answer: "Do you offer remote support?",
          answer: "How quickly do you respond to support requests?",
          answer: 'We respond to support requests within 1 hour during business hours and within 4 hours for non-critical issues outside business hours. Critical issues receive immediate attention.'
  ];

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our AI and IT services, pricing, and support.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            {filteredData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 neon-text">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                      <div key={itemIndex} className="bg-slate-800/50 rounded-lg border border-gray-700/50">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                        >
                          <span className="text-white font-medium pr-4">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  })}
            ))}

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us
                href="/contact"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Form
      <Footer />
    </>

export default FAQPage;
