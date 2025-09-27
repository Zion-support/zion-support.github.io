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
          answer: 'We offer comprehensive technology solutions including AI development cloud infrastructure digital transformation cybersecurity and more.'
        },
        {
          question: 'How can I get started?',
          answer: 'Contact us through our contact page or call us directly. We will schedule a consultation to discuss your needs.'
        },
        {
          question: 'Do you provide ongoing support?',
          answer: 'Yes we provide comprehensive ongoing support and maintenance for all our solutions.'
        }
      ]
    }
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
    trackClick(`faq-toggle-${id}`, 'interaction');
  };

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <Head>
        <title>FAQ - Zion App</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion App's services development process pricing and technology solutions." />
        <meta name="viewport" content="width=device-width initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services development process and technology solutions.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-6">
              {filteredData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h2>
                    <div className="space-y-4">
                      {category.questions.map((faq, index) => {
                        const id = categoryIndex * 100 + index;
                        const isOpen = openItems.has(id);
                        return (
                          <div key={index} className="border border-gray-200 rounded-lg">
                            <button
                              onClick={() => toggleItem(id)}
                              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-medium text-gray-900">{faq.question}</span>
                              <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                                ▼
                              </span>
                            </button>
                            {isOpen && (
                              <div className="px-4 pb-3">
                                <p className="text-gray-600">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        )})}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )}