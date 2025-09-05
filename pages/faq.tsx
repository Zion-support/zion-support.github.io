import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus,
  HelpCircle
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive technology solutions including AI services, IT services, micro SaaS applications, cloud infrastructure, cybersecurity, and custom development solutions."
      },
      {
        question: "How can I get started with your services?",
        answer: "You can get started by contacting us through our contact page, scheduling a consultation, or calling us directly at +1 302 464 0950. We'll discuss your needs and provide a customized solution."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we provide 24/7 support for all our enterprise clients and critical systems. Our support team is always available to help with any issues or questions you may have."
      }
    ]
  },
  {
    category: "AI Services",
    questions: [
      {
        question: "What AI technologies do you work with?",
        answer: "We work with a wide range of AI technologies including machine learning, natural language processing, computer vision, predictive analytics, and custom AI model development."
      },
      {
        question: "How long does it take to implement an AI solution?",
        answer: "Implementation time varies depending on the complexity of the solution. Simple AI integrations can take 2-4 weeks, while complex custom AI systems may take 3-6 months."
      },
      {
        question: "Do you provide AI training and consultation?",
        answer: "Yes, we offer comprehensive AI training programs and consultation services to help your team understand and effectively use AI technologies in your business."
      }
    ]
  },
  {
    category: "Pricing & Billing",
    questions: [
      {
        question: "How do you price your services?",
        answer: "Our pricing is based on the scope and complexity of the project. We offer flexible pricing models including fixed-price projects, hourly rates, and subscription-based services for ongoing support."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create a tailored proposal for your specific requirements."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including bank transfers, credit cards, and digital payments. Payment terms are typically net 30 days for established clients."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What programming languages and technologies do you use?",
        answer: "We use a wide range of technologies including JavaScript, Python, Java, C#, React, Node.js, AWS, Azure, Docker, Kubernetes, and many other modern technologies."
      },
      {
        question: "Do you work with existing systems and integrations?",
        answer: "Yes, we specialize in integrating with existing systems and can work with legacy applications, APIs, databases, and third-party services to ensure seamless integration."
      },
      {
        question: "What security measures do you implement?",
        answer: "We implement comprehensive security measures including encryption, secure authentication, regular security audits, compliance with industry standards, and ongoing security monitoring."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (itemKey: string) => {
    setOpenItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our services, pricing, implementation, and support. Find answers to common questions about Zion Tech Group."
      keywords="FAQ, frequently asked questions, help, support, services, pricing, technical questions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, 
                pricing, implementation, and support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <HelpCircle className="w-6 h-6 mr-3 text-rose-600" />
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemKey = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems[itemKey];
                    
                    return (
                      <div
                        key={faqIndex}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                        >
                          <span className="font-semibold text-gray-900">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-rose-600" />
                          ) : (
                            <Plus className="w-5 h-5 text-rose-600" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 py-4 bg-white border-t border-gray-200">
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Can't find the answer you're looking for? Our team is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="/support" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}