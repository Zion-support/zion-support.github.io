import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function FAQ(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          id: 1,
          question: 'What is Zion App?',
          answer: 'Zion App is a leading technology solutions provider specializing in AI, Cloud Infrastructure, and Digital Transformation. We help businesses innovate, optimize, and grow through cutting-edge technology.'
        },
        {
          id: 2,
          question: 'How long has Zion App been in business?',
          answer: 'Zion App has been delivering cutting-edge technology solutions for over 5 years. Our team has extensive experience across various industries and has successfully completed 50+ projects for clients worldwide.'
        },
        {
          id: 3,
          question: 'What makes Zion App different from competitors?',
          answer: 'Our unique blend of deep technical expertise, a client-centric approach, and a commitment to continuous innovation sets us apart. We focus on delivering measurable business outcomes and building long-term partnerships.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          id: 4,
          question: 'What AI services do you offer?',
          answer: 'We offer a wide range of AI services including Natural Language Processing (NLP), Computer Vision, Predictive Analytics, AI-powered automation, and custom AI model development.'
        },
        {
          id: 5,
          question: 'Can you help with cloud migration?',
          answer: 'Absolutely. We provide end-to-end cloud migration services, including strategy, planning, execution, and post-migration support for major cloud providers like AWS, Azure, and Google Cloud.'
        },
        {
          id: 6,
          question: 'What is Digital Transformation?',
          answer: 'Digital Transformation involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. Our services cover process automation, legacy system modernization, and digital strategy.'
        }
      ]
    },
    {
      category: 'Support',
      questions: [
        {
          id: 7,
          question: 'What kind of support do you offer?',
          answer: 'We offer 24/7 technical support, dedicated account management, and ongoing maintenance services to ensure your systems run smoothly and efficiently.'
        },
        {
          id: 8,
          question: 'How can I contact support?',
          answer: 'You can reach our support team via email at support@zionapp.com, through our website\'s contact form, or by calling our dedicated support line during business hours.'
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
      <SEO />
      <Head>
        <title>FAQ - Zion App</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion App's services, development process, pricing, and technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, process, and technology solutions.
            </p>
          </header>

          <main>
            {/* Search Bar */}
            <section className={`mb-12 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 bg-white rounded-2xl shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </section>

            {/* FAQ Items */}
            <section className="space-y-8">
              {filteredData.length > 0 ? (
                filteredData.map((category, catIndex) => (
                  <div key={catIndex} className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((item, index) => (
                        <div key={item.id} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                          <button
                            className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors py-2"
                            onClick={() => toggleItem(item.id)}
                          >
                            {item.question}
                            <span className="text-blue-600 text-xl">
                              {openItems.has(item.id) ? '−' : '+'}
                            </span>
                          </button>
                          {openItems.has(item.id) && (
                            <p className="mt-3 text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
                </div>
              )}
            </section>

            {/* CTA Section */}
            <section className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our team is here to help. Reach out to us for personalized assistance.
                </p>
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Support
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}