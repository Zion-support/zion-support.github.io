'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What AI solutions do you offer?',
      answer: 'We offer a comprehensive range of AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, and custom AI applications tailored to your business needs.'
    },
    {
      question: 'How long does it take to implement your solutions?',
      answer: 'Implementation timelines vary depending on the complexity of the project. Simple integrations can take 2-4 weeks, while complex AI solutions may require 3-6 months. We provide detailed project timelines during our initial consultation.'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes, we provide comprehensive training programs including documentation, video tutorials, live training sessions, and ongoing support to ensure your team can effectively use and maintain our solutions.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including subscription-based plans, project-based pricing, and custom enterprise solutions. Contact our sales team for a personalized quote based on your specific requirements.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 technical support for all our clients. Our support team is available around the clock to help with any issues or questions you may have.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with your existing systems through APIs, webhooks, and custom integration services. We work with all major platforms and can create custom connectors if needed.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including end-to-end encryption, access controls, regular security audits, compliance with industry standards (SOC 2, GDPR, HIPAA), and secure data handling practices.'
    },
    {
      question: 'Do you offer custom development?',
      answer: 'Yes, we specialize in custom development solutions. Our team can build tailored AI applications, web platforms, mobile apps, and integrations specifically designed for your business requirements.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied with our solution, we\'ll provide a full refund within 30 days of implementation.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply contact our sales team through our website, email, or phone. We\'ll schedule a consultation to understand your needs and provide a customized solution proposal.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's AI and IT solutions, pricing, support, and more." />
        <meta name="keywords" content="FAQ, frequently asked questions, help, support, AI solutions, IT services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT solutions, services, and support.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <HelpCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    </div>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;