'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI and IT solutions including machine learning, cloud infrastructure, cybersecurity, custom software development, data analytics, and IT consulting services.'
    },
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Contact us through our contact form or call us directly at (302) 464-0950. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on project complexity and requirements. We offer flexible pricing plans starting from $2,999/month for basic services, with custom enterprise solutions available. Contact us for a detailed quote tailored to your needs.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes! We provide comprehensive ongoing support including 24/7 monitoring, regular updates, technical assistance, and optimization services. Our support team is always available to help ensure your systems perform at their best.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple implementations can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to meet the specific needs and budget of any organization.'
    },
    {
      question: 'What security measures do you implement?',
      answer: 'We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA. Security is our top priority.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing infrastructure. We work with all major platforms and can create custom integrations to ensure smooth operation with your current systems.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Absolutely! We provide comprehensive training sessions for your team to ensure they can effectively use and maintain the solutions we implement. Training is included in all our service packages.'
    },
    {
      question: 'What makes Zion Tech Group different?',
      answer: 'We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value. Our team of experienced professionals is dedicated to your success and provides personalized service throughout the entire process.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our AI and IT services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-700/50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/70 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-slate-700/50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help! Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;