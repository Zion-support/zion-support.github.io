import React, { useState } from 'react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      question: "What is your typical ROI for technology implementations?",
      answer: "We consistently deliver 1000% ROI on our technology implementations. Our proven architectures and optimization strategies ensure maximum value from your investment. We measure success through quantifiable metrics like cost savings, efficiency gains, and revenue increases."
    },
    {
      question: "How do you ensure 24/7 support availability?",
      answer: "Our support team operates in multiple time zones with redundant coverage. We use advanced monitoring systems that proactively detect issues before they impact your business. Our response time SLA is under 15 minutes for critical issues."
    },
    {
      question: "What makes your AI solutions different from competitors?",
      answer: "Our AI solutions are built on proprietary algorithms combined with industry best practices. We focus on practical, business-ready implementations rather than experimental technology. Each solution is tailored to your specific industry requirements and business goals."
    },
    {
      question: "Can you help with legacy system modernization?",
      answer: "Absolutely. We specialize in modernizing legacy systems while maintaining business continuity. Our approach includes comprehensive assessment, phased migration strategies, and zero-downtime deployment techniques to minimize disruption to your operations."
    },
    {
      question: "What is your approach to cybersecurity?",
      answer: "We implement defense-in-depth strategies with multiple layers of security. This includes endpoint protection, network security, data encryption, access controls, and continuous monitoring. We also provide security training for your team and regular penetration testing."
    },
    {
      question: "How do you handle project scaling and growth?",
      answer: "Our solutions are designed with scalability in mind from day one. We use cloud-native architectures, microservices, and containerization to ensure your systems can grow with your business. We also provide ongoing optimization and scaling support."
    },
    {
      question: "What is your development process for micro SaaS products?",
      answer: "We follow an agile development methodology with rapid prototyping, user feedback integration, and iterative improvements. Our process includes market research, MVP development, user testing, and continuous feature enhancement based on real user needs."
    },
    {
      question: "Do you provide training and knowledge transfer?",
      answer: "Yes, we believe in empowering your team. We provide comprehensive training programs, documentation, and knowledge transfer sessions. Our goal is to make you self-sufficient while maintaining our ongoing support relationship."
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our services and approach.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-200 flex-shrink-0 ${
                    openItems.has(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 px-6 py-3 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;