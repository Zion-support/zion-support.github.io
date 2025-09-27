import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function FAQ(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive technology solutions including AI development, cloud infrastructure, digital transformation, cybersecurity, and more.'
    },
    {
      question: 'How can I get started?',
      answer: 'Contact us through our contact page or call us directly. We will schedule a consultation to discuss your needs.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance for all our solutions.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO 
        title='Frequently Asked Questions - Zion Tech Group'
        description='Find answers to common questions about our technology solutions and services.'
        keywords='FAQ, questions, support, help'
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='min-h-screen bg-gray-50 py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-center mb-8'>Frequently Asked Questions</h1>
          <div className='max-w-2xl mx-auto mb-8'>
            <input
              type='text'
              placeholder='Search FAQs...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          <div className='max-w-4xl mx-auto space-y-6'>
            {filteredFaqs.map((faq, index) => (
              <div key={index} className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-semibold mb-3'>{faq.question}</h3>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
