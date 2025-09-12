import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions, IT services, cloud computing, cybersecurity, data analytics, and digital transformation services. Our team specializes in helping businesses leverage cutting-edge technology to achieve their goals."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex enterprise solutions may require 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable and tailored to meet the specific needs and budget of each client."
    },
    {
      question: "What's your pricing model?",
      answer: "We offer flexible pricing models including project-based, hourly, and retainer options. Pricing depends on the scope and complexity of your project. Contact us for a customized quote based on your specific requirements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after deployment. Our support includes monitoring, updates, and 24/7 technical assistance."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security measures including encryption, secure data transmission, regular security audits, and compliance with relevant regulations. Your data security and privacy are our top priorities."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;