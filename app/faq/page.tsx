import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer AI solutions, cloud architecture, web development, mobile applications, and comprehensive technology consulting services.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex AI implementations can take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes! We work with businesses of all sizes, from startups to enterprise companies. We have flexible solutions and pricing options to fit different budgets.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies including React, Node.js, Python, AWS, Azure, machine learning frameworks, and cloud-native architectures.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after launch.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply contact us through our contact form or schedule a consultation. We\'ll discuss your needs and provide a customized proposal.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI solutions, cloud architecture, and development services." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;