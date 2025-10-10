'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI-powered solutions including enterprise AI, quantum computing, autonomous systems, digital transformation, cloud services, cybersecurity, and custom micro SaaS applications."
    },
    {
      id: 2,
      question: "How can AI solutions benefit my business?",
      answer: "Our AI solutions can increase efficiency by up to 90%, reduce costs by 70%, and deliver ROI of 300% or more. We provide automation, data analytics, customer service enhancement, and process optimization."
    },
    {
      id: 3,
      question: "Do you offer custom development?",
      answer: "Yes, we specialize in custom AI and IT solutions tailored to your specific business needs. Our team works closely with you to understand requirements and deliver bespoke solutions."
    },
    {
      id: 4,
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular check-ins, iterative development, and continuous testing to ensure quality and meet your expectations."
    },
    {
      id: 5,
      question: "How long does implementation take?",
      answer: "Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during consultation."
    },
    {
      id: 6,
      question: "What support do you provide after implementation?",
      answer: "We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly and continue to deliver value."
    },
    {
      id: 7,
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the implemented solutions. Training includes documentation, video tutorials, and hands-on sessions."
    },
    {
      id: 8,
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like HIPAA, GDPR, and SOC 2."
    },
    {
      id: 9,
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in seamless integration with existing systems and can work with most popular platforms, databases, and third-party services to ensure smooth data flow and functionality."
    },
    {
      id: 10,
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including project-based, monthly subscriptions, and custom enterprise agreements. Contact us for a detailed quote tailored to your specific needs and requirements."
    },
    {
      id: 11,
      question: "Do you provide documentation and resources?",
      answer: "Yes, we provide comprehensive documentation, API references, user guides, video tutorials, and ongoing support resources to help you get the most out of our solutions."
    },
    {
      id: 12,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, government, and more. Our solutions are adaptable to various business requirements and compliance needs."
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT solutions, services, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI solutions, IT services, support, help" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT solutions, 
              services, and support.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find the answer you're looking for? Contact our support team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;