import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology solutions provider specializing in AI development, cloud architecture, micro SaaS solutions, and comprehensive IT services. We help businesses transform their digital presence with cutting-edge technology.'
        },
        {
          question: 'Where is Zion Tech Group located?',
          answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709, United States. We serve clients globally with remote and on-site support capabilities.'
        },
        {
          question: 'How can I contact Zion Tech Group?',
          answer: 'You can contact us by phone at +1-302-464-0950, email at kleber@ziontechgroup.com, or through our contact form on the website. We also offer live chat support during business hours.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, government, and technology. Our solutions are adaptable to various business needs and requirements.'
        }
      ]
    },
    {
      title: 'Services & Solutions',
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer three main service categories: Micro SaaS Solutions (focused software applications), IT Services (cloud migration, cybersecurity, infrastructure), and AI Services (custom AI models, machine learning, automation).'
        },
        {
          question: 'Do you provide custom development?',
          answer: 'Yes, we specialize in custom development solutions tailored to your specific business needs. Our team can build custom applications, integrate existing systems, and develop unique solutions from scratch.'
        },
        {
          question: 'What is your development process?',
          answer: 'Our development process follows agile methodologies with regular client communication, iterative development, testing, and deployment. We ensure transparency and collaboration throughout the entire project lifecycle.'
        },
        {
          question: 'Do you offer ongoing support and maintenance?',
          answer: 'Yes, we provide comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, and technical support to ensure your solutions remain optimal.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'Our pricing varies based on project scope, complexity, and requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a customized quote.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer free initial consultations to understand your needs and provide recommendations. This helps us create accurate project estimates and ensures we\'re the right fit for your requirements.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including bank transfers, credit cards, and digital payment platforms. Payment terms are typically discussed during the project planning phase.'
        },
        {
          question: 'Do you offer discounts for long-term projects?',
          answer: 'Yes, we offer competitive pricing for long-term partnerships and extended projects. We value long-term relationships and provide special rates for ongoing collaborations.'
        }
      ]
    },
    {
      title: 'Technical Support',
      questions: [
        {
          question: 'What are your support hours?',
          answer: 'We provide 24/7 support for critical issues and standard business hours support (9 AM - 6 PM EST) for general inquiries. Emergency support is available for mission-critical systems.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We aim to respond to all support requests within 2 hours during business hours and within 4 hours for after-hours requests. Critical issues receive immediate attention.'
        },
        {
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we provide comprehensive training for all our solutions including user training, administrator training, and technical documentation. We also offer ongoing training as systems evolve.'
        },
        {
          question: 'What security measures do you implement?',
          answer: 'We implement industry-standard security measures including encryption, secure coding practices, regular security audits, compliance with regulations, and comprehensive backup strategies.'
        }
      ]
    }
  ];

  return (
    <MainLayout
      title="FAQ - Frequently Asked Questions | Zion Tech Group"
      description="Find answers to common questions about Zion Tech Group's services, pricing, support, and more."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers to common questions about our services, processes, and how we can help transform your business.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="text-lg font-semibold text-gray-900">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help with any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Us
            </a>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;