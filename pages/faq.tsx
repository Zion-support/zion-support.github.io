import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function FAQ(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { trackClick } = useAnalytics();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer comprehensive technology solutions including AI development, cloud infrastructure, web development, and digital transformation services."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity, but most projects range from 2-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      id: 3,
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support and maintenance services for all our solutions to ensure optimal performance and reliability."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
    trackClick(`faq-toggle-${id}`, 'interaction');
  };

  return (
    <>
      <Head>
        <title>FAQ - Zion App</title>
        <meta name="description" content="Frequently asked questions about our services and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions.
            </p>
          </header>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className={`text-2xl transition-transform ${openItems.includes(faq.id) ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}