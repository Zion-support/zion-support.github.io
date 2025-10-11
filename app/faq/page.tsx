'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
<<<<<<< HEAD
        : [...prev, index];
=======

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
    );
  };

  const faqData = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI and IT solutions including AI services, IT consulting, micro SaaS development, enterprise solutions, digital transformation, and custom software development. Our services span from AI-powered automation to cybersecurity and cloud infrastructure."
    },
    {
      question: "How can AI benefit my business?",
      answer: "AI can transform your business by automating repetitive tasks, providing data-driven insights, improving customer experience through chatbots and personalization, optimizing operations, and enabling predictive analytics. We help you identify the best AI opportunities for your specific industry and use case."
    },
    {
      question: "What is the typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple AI integrations can take 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed project plans with milestones and regular updates throughout the development process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. This includes 24/7 technical support, regular updates, security patches, performance monitoring, and feature enhancements. We ensure your solutions remain secure, up-to-date, and optimized."
    },
    {
      question: "What industries do you serve?",
<<<<<<< HEAD
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards."
=======
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, and more. Our AI and IT solutions are adaptable to any industry's specific needs and compliance requirements."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, secure data storage, compliance with GDPR and other regulations, regular security audits, and access controls. We also provide detailed data handling policies and can help you achieve various compliance certifications."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in seamless integration with existing systems and platforms. Our team works with various APIs, databases, and third-party services to ensure smooth integration without disrupting your current operations."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including project-based pricing, retainer agreements, and subscription models. Pricing depends on project scope, complexity, and ongoing support requirements. We provide detailed quotes after understanding your specific needs."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team to effectively use and maintain the solutions we implement. This includes documentation, video tutorials, hands-on workshops, and ongoing support to ensure your team is fully equipped."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Contact us through our website, schedule a consultation, or call us directly. We'll discuss your needs, provide a free consultation, and create a customized proposal for your project. No commitment required for the initial consultation."
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing" />
=======
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's AI and IT services, pricing, support, and more." />
        <meta name="keywords" content="FAQ, questions, AI services, IT support, pricing, Zion Tech Group" />
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Find answers to common questions about our AI and IT services, 
                  pricing, support, and implementation process.
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-700 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
<<<<<<< HEAD
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      </div></div><p className="text-gray-300 leading-relaxed">faq.answer}</p></p></p>)
                    </div>)
                  )}
=======
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-16 text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our expert team is here to help. 
                  Get in touch for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default FAQPage;