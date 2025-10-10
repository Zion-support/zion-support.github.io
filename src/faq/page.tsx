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
      category: 'General Questions',
      questions: [
          question: 'What is Zion Tech Group?',
          answer:         ,
$4},
          question: 'What services do you offer?',
          answer:           ,
questionquestion: 'How can I get started?',
          answer: 'Getting started is easy! Contact us for a free consultation at (302) 464-0950 or email kleber@ziontechgroup.com. We\'ll assess your needs and recommend the best solutions for your business.'
          question: 'Do you offer custom solutions?',
          answer:         ,
$4}
      ]
      category: 'AI Services',
          question: 'What AI services do you provide?',
          answer:           ,
questionquestion: 'How much do AI services cost?',
          answer:           ,
questionquestion: 'Do you provide AI training for our team?',
          answer:           ,
questionquestion: 'Can you integrate AI with our existing systems?',
          answer:       ,
categorycategory: 'IT Services',
          question: 'What IT services do you offer?',
          answer:           ,
questionquestion: 'Do you provide 24/7 support?',
          answer:           ,
questionquestion: 'Can you help with cloud migration?',
          answer:           ,
questionquestion: 'What cybersecurity services do you provide?',
          answer:       ,
categorycategory: 'Micro SAAS Solutions',
          question: 'What are Micro SAAS solutions?',
          answer:           ,
questionquestion: 'How quickly can I deploy a Micro SAAS solution?',
          answer:           ,
questionquestion: 'Do I need technical expertise to use Micro SAAS?',
          answer:           ,
questionquestion: 'Can Micro SAAS solutions be customized?',
          answer:       ,
categorycategory: 'Pricing & Billing',
          question: 'What are your pricing models?',
          answer:           ,
questionquestion: 'Do you offer free consultations?',
          answer:           ,
questionquestion: 'Are there any setup fees?',
          answer: 'Setup fees vary by service type. Some services include setup in the monthly fee, while others may have one-time setup charges. We\'ll provide clear pricing details during consultation.'
          question: 'Do you offer discounts for long-term contracts?',
          answer:       ,
categorycategory: 'Support & Contact',
          question: 'How can I contact support?',
          answer:           ,
questionquestion: 'What are your business hours?',
          answer:           ,
questionquestion: 'Do you offer remote support?',
          answer:           ,
questionquestion: 'How quickly do you respond to support requests?',
          answer:   ,
$4];

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
