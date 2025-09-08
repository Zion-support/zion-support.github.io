import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
<<<<<<< HEAD
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, data analytics, and digital transformation services. Our team specializes in cutting-edge technologies to help businesses modernize and scale."
=======
      question: "What services does Zion Tech offer?",
      answer: "We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, data analytics, and digital transformation services. Our team specializes in machine learning, cloud migration, system administration, and business process optimization."
>>>>>>> origin/main
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer 24/7 support and maintenance services. Our support packages include monitoring, updates, troubleshooting, and optimization to ensure your systems run smoothly and efficiently."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, and government. Our solutions are tailored to meet the specific needs and compliance requirements of each industry."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance with industry standards like SOC 2, HIPAA, and GDPR. Security is our top priority in every solution we deliver."
    },
    {
      question: "What makes Zion Tech Group different from competitors?",
      answer: "Our combination of cutting-edge technology expertise, proven methodology, 24/7 support, and commitment to client success sets us apart. We focus on delivering measurable ROI and long-term partnerships rather than just technical implementations."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
<<<<<<< HEAD
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
=======
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
>>>>>>> origin/main
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
<<<<<<< HEAD
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
=======
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
>>>>>>> origin/main
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
<<<<<<< HEAD
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Still Have Questions?
            </h3>
            <p className="text-zion-slate-light">
              We offer comprehensive AI solutions, cybersecurity services, cloud infrastructure, 
              data analytics, blockchain development, and innovative technology consulting.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              How can I get started with your services?
            </h3>
            <p className="text-zion-slate-light">
              Contact us through our website or call us directly. We'll schedule a consultation 
              to understand your needs and provide a customized solution.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              What is your typical project timeline?
            </h3>
            <p className="text-zion-slate-light">
              Project timelines vary based on complexity. Simple projects may take 2-4 weeks, 
              while complex enterprise solutions can take 3-6 months or more.
            </p>
          </div>
=======
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
>>>>>>> origin/main
        </div>
      </div>
    </div>);
}
