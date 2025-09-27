import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function FAQ(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive technology solutions including AI development, cloud infrastructure, digital transformation, cybersecurity, and more.'
        },
        {
          question: 'How can I get started?',
          answer: 'Simply contact us through our contact form or give us a call. We\'ll schedule a consultation to discuss your needs and create a customized solution.'
        },
        {
          question: 'Do you provide ongoing support?',
          answer: 'Yes, we offer 24/7 technical support and monitoring to ensure your systems run smoothly and efficiently.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and many others.'
        },
        {
          question: 'Do you handle cloud migrations?',
          answer: 'Absolutely! We specialize in cloud migrations and can help you move your infrastructure to AWS, Azure, or Google Cloud Platform.'
        },
        {
          question: 'What is your development process?',
          answer: 'We follow agile development methodologies with regular check-ins, testing, and iterative improvements to ensure the best results.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
    trackClick('faq-toggle');
  };

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <Head>
        <title>FAQ - Zion Tech Solutions</title>
        <meta name="description" content="Frequently asked questions about our technology services and solutions." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Find answers to common questions about our services and solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((item, index) => {
                      const globalIndex = categoryIndex * 100 + index;
                      const isOpen = openItems.has(globalIndex);
                      
                      return (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900">{item.question}</span>
                            <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl mb-8 opacity-90">
                Can't find what you're looking for? Contact our team for personalized assistance.
              </p>
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => trackClick('faq-contact-cta')}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}