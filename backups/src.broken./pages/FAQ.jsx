import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (itemId) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const faqData = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI and technology solutions including custom software development, AI implementation, cybersecurity services, cloud migration, and digital transformation consulting."
    },
    {
      question: "How do I get started with your services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and more. Our AI and technology solutions are designed to be industry-agnostic and can be customized for any sector."
    },
    {
      question: "Do you offer remote support?",
      answer: "Yes, we provide comprehensive remote support for all our services. Our team can assist you from anywhere in the world, ensuring you get the help you need regardless of your location."
    },
    {
      question: "What AI technologies do you use?",
      answer: "We utilize cutting-edge AI technologies including machine learning, natural language processing, computer vision, and autonomous systems. Our solutions are built on the latest frameworks and are continuously updated with the newest advancements."
    },
    {
      question: "How secure are your solutions?",
      answer: "Security is our top priority. All our solutions include enterprise-grade security features, SOC2 compliance, and regular security audits. We follow industry best practices and maintain multiple security certifications."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! We specialize in seamless integration with existing systems. Our team will assess your current infrastructure and ensure our solutions work perfectly with your existing technology stack."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our payment partners."
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about Zion Tech Group's AI and tech marketplace platform."
        keywords="FAQ, Zion Tech Group, AI marketplace, tech platform, questions, support"
        canonical="https://ziontechgroup.com/faq"
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="mt-4 text-gray-300 text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group
              and our marketplace platform
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="w-full space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openItems.has(index);
                return (
                  <div
                    key={index}
                    className="border border-blue-300/30 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full text-left text-white hover:text-blue-300 px-6 py-4 bg-blue-800/20 hover:bg-blue-800/30 transition-colors flex items-center justify-between"
                    >
                      <span className="text-lg font-medium">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-400" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 bg-blue-800/10">
                        <p className="text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-medium rounded-lg transition-colors"
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
