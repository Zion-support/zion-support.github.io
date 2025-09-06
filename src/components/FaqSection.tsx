import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Zion Tech offer?",
      answer: "We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, data analytics, and digital transformation services. Our team specializes in machine learning, cloud migration, system administration, and business process optimization."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple implementations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during the discovery phase and keep you updated throughout the project."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support for all our clients. Our support includes monitoring, maintenance, troubleshooting, and continuous optimization. We also provide dedicated account managers for enterprise clients."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government. Our solutions are tailored to meet the specific compliance and security requirements of each industry."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including SOC 2 compliance, end-to-end encryption, regular security audits, and advanced threat detection. All our team members are security-certified and we follow industry best practices."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and can work with virtually any technology stack. Our team will assess your current infrastructure and create a seamless integration plan."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including project-based, retainer, and subscription options. Pricing depends on the scope of work, timeline, and specific requirements. We provide detailed quotes after understanding your needs."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement. Training includes documentation, hands-on sessions, and ongoing support."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
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

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;