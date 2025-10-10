'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: 'What AI solutions do you offer?',
      answer: 'We offer a comprehensive range of AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, chatbots, and custom AI development tailored to your specific business needs.'
    },
    {
      id: 2,
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while complex enterprise implementations may take 3-6 months. We provide detailed project timelines during our consultation process.'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide comprehensive ongoing support including 24/7 technical assistance, regular updates, maintenance, performance monitoring, and continuous optimization of your AI solutions to ensure optimal performance.'
    },
    {
      id: 4,
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, and more. Our AI solutions are adaptable to various business sectors and requirements.'
    },
    {
      id: 5,
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including encryption, secure data transmission, compliance with industry standards (GDPR, HIPAA, etc.), regular security audits, and strict access controls to protect your sensitive data.'
    },
    {
      id: 6,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems and platforms. Our team works closely with your IT department to ensure smooth integration without disrupting your current operations.'
    },
    {
      id: 7,
      question: 'What is your pricing model?',
      answer: 'Our pricing is flexible and based on project scope, complexity, and requirements. We offer both one-time implementation fees and ongoing subscription models. Contact us for a customized quote based on your specific needs.'
    },
    {
      id: 8,
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions we implement. Training includes hands-on sessions, documentation, and ongoing support resources.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Frequently Asked
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our AI and IT solutions. Can't find what you're looking for? Contact us!
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openItems.includes(faq.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
              <p className="text-gray-400">Try adjusting your search terms or contact us for more help.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
