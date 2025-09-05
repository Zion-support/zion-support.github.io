import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '../components/Layout';

const faqs = [
  {
    id: 1,
    question: "What services does Zion Tech Group offer?",
    answer: "We offer comprehensive AI services, IT solutions, and Micro SaaS products. Our services include machine learning, cloud computing, cybersecurity, data analytics, and custom software development."
  },
  {
    id: 2,
    question: "How do I get started with your services?",
    answer: "Getting started is easy! Simply contact us through our contact form or call us at +1 302 464 0950. We'll schedule a free consultation to understand your needs and provide a customized solution."
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer: "Our pricing varies based on the service and project scope. Micro SaaS products start at $19/month, IT services range from $100-500/hour, and AI solutions start at $2,000/month. Contact us for a detailed quote."
  },
  {
    id: 4,
    question: "Do you provide ongoing support?",
    answer: "Yes! We provide 24/7 technical support for all our services. Our support includes maintenance, updates, troubleshooting, and optimization to ensure your systems run smoothly."
  },
  {
    id: 5,
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, retail, education, government, manufacturing, and more. Our solutions are tailored to meet specific industry requirements."
  },
  {
    id: 6,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Simple Micro SaaS implementations can take 2-4 weeks, while complex AI or IT projects may take 3-6 months. We provide detailed timelines during consultation."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our AI, IT, and Micro SaaS services"
      keywords="FAQ, frequently asked questions, support, help"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Find answers to common questions about our services
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}