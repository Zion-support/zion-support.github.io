import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, Mail, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const _toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What AI services do you offer?",
      answer: "We offer a comprehensive range of AI services including machine learning solutions, natural language processing, computer vision, predictive analytics, and custom AI development tailored to your business needs."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary depending on the complexity of the project. Simple AI integrations can take 2-4 weeks, while complex custom solutions may require 3-6 months. We provide detailed project timelines during our consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your AI solutions continue to perform optimally. This includes monitoring, updates, troubleshooting, and performance optimization."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, and more. Our AI solutions are adaptable to various business sectors and requirements."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, secure data handling protocols, and compliance with industry standards like GDPR, HIPAA, and SOC 2. Your data security is our top priority."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our AI services and solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <button
                  onClick={() => _toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cyan-400" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-8">Our team is here to help you find the answers you need.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Support
              </a>
              <a 
                href="tel:+15551234567" 
                className="bg-transparent text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQPage;