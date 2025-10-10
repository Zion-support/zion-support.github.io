'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Phone, Mail, MessageCircle, Clock, Search } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      category: 'Getting Started'
    },
    {
      id: 2,
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 technical support, regular system monitoring, proactive maintenance, and dedicated account management. Our support team is available via phone, email, and live chat to help resolve any issues quickly.',
      category: 'Support'
    },
    {
      id: 3,
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary depending on the complexity of your project. Simple AI integrations can take 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We\'ll provide a detailed timeline during our consultation.',
      category: 'Implementation'
    },
    {
      id: 4,
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'Training'
    },
    {
      id: 5,
      question: 'What security measures do you have in place?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'Security'
    },
    {
      id: 6,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in integrating our solutions with existing systems and workflows. Our team will work closely with your IT department to ensure seamless integration without disrupting your current operations.',
      category: 'Integration'
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="support, help, FAQ, contact, technical support, customer service" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions, get help with our solutions, 
              and contact our support team when you need assistance.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300 mb-4">24/7 technical support</p>
              <p className="text-cyan-400 font-semibold">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-gray-300 mb-4">Get help via email</p>
              <p className="text-cyan-400 font-semibold">support@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-4">Chat with our team</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Chat
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            {/* Search */}
            <div className="relative mb-8 max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-lg">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
                  >
                    <div>
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm mr-3">
                        {faq.category}
                      </span>
                      <span className="text-white font-semibold">{faq.question}</span>
                    </div>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400" />
                    )}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Support */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help. 
              Contact us and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;