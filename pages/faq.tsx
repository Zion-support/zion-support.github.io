import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Layout from '../components/Layout';

const faqs = [
  {
    id: 1,
    question: "What services does Zion Tech Group offer?",
    answer: "We offer comprehensive AI services, IT solutions, and micro SAAS platforms including AI-powered code review, smart contract security, cloud migration, cybersecurity, data analytics, and much more."
  },
  {
    id: 2,
    question: "How do I get started with your services?",
    answer: "Getting started is easy! You can contact us at +1 302 464 0950 or email kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs."
  },
  {
    id: 3,
    question: "What are your pricing models?",
    answer: "Our pricing varies by service and ranges from $19/month for basic micro SAAS tools to $2,999+/month for enterprise solutions. Contact us for detailed pricing information."
  },
  {
    id: 4,
    question: "Do you provide support and maintenance?",
    answer: "Yes! We provide comprehensive support and maintenance for all our services including 24/7 technical support, regular updates, and ongoing optimization."
  },
  {
    id: 5,
    question: "Are your services secure and compliant?",
    answer: "Absolutely. We maintain SOC 2 Type II, ISO 27001, GDPR, HIPAA, and PCI DSS compliance with enterprise-grade security measures."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <Layout
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our services and solutions."
      keywords="FAQ, questions, help, support"
    >
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about our services.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}