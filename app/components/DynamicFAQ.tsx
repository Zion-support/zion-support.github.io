'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  helpful?: boolean;
}

const DynamicFAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<number, boolean>>({});

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'What is AI automation and how can it benefit my business?',
      answer: 'AI automation uses artificial intelligence to automate repetitive tasks and processes in your business. It can reduce manual work by up to 80%, improve accuracy, and free up your team to focus on strategic initiatives. Our AI solutions are designed to learn and adapt to your specific business needs.',
      category: 'general'
    },
    {
      id: '2',
      question: 'How quickly can I see results from AI implementation?',
      answer: 'Most of our clients see initial results within 2-4 weeks of implementation. The exact timeline depends on the complexity of your processes and the scope of automation. We provide detailed ROI projections during our consultation process.',
      category: 'implementation'
    },
    {
      id: '3',
      question: 'What is the difference between micro SaaS and enterprise solutions?',
      answer: 'Micro SaaS solutions are focused, single-purpose applications that can be deployed quickly (2-4 weeks) for specific business needs. Enterprise solutions are comprehensive platforms that integrate multiple systems and require longer implementation timelines (2-6 months) but provide end-to-end business transformation.',
      category: 'services'
    },
    {
      id: '4',
      question: 'Do you offer custom AI model development?',
      answer: 'Yes, we specialize in custom AI model development for businesses with unique requirements. Our team of AI engineers can build models specifically trained on your data and tailored to your industry needs. This is included in our Professional and Enterprise plans.',
      category: 'technical'
    },
    {
      id: '5',
      question: 'What kind of support do you provide?',
      answer: 'We offer tiered support based on your plan: Starter includes email support, Professional includes priority email and chat support, and Enterprise includes 24/7 dedicated support with a dedicated account manager. All plans include comprehensive documentation and training resources.',
      category: 'support'
    },
    {
      id: '6',
      question: 'How secure is my data with your AI solutions?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, comply with SOC 2 Type II standards, and offer on-premise deployment options for sensitive data. All data processing follows GDPR and other privacy regulations.',
      category: 'security'
    },
    {
      id: '7',
      question: 'Can I integrate your AI solutions with my existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with popular business tools and systems. We support 100+ integrations including CRM, ERP, marketing automation, and productivity tools. Custom integrations are available for enterprise clients.',
      category: 'integration'
    },
    {
      id: '8',
      question: 'What happens if I need to scale up or down?',
      answer: 'Our pricing is designed to scale with your business. You can upgrade or downgrade your plan at any time, and we offer flexible licensing options for seasonal businesses or those with varying usage patterns.',
      category: 'pricing'
    },
    {
      id: '9',
      question: 'Do you provide training for my team?',
      answer: 'Yes, we include comprehensive training as part of all our plans. This includes initial setup training, ongoing support sessions, and access to our knowledge base. Enterprise clients receive dedicated training sessions and custom documentation.',
      category: 'training'
    },
    {
      id: '10',
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day free trial for all plans with no commitment. If you\'re not satisfied within the first 30 days, we provide a full refund. For annual plans, we offer prorated refunds if you decide to cancel.',
      category: 'pricing'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqData.length },
    { id: 'general', name: 'General', count: faqData.filter(item => item.category === 'general').length },
    { id: 'implementation', name: 'Implementation', count: faqData.filter(item => item.category === 'implementation').length },
    { id: 'services', name: 'Services', count: faqData.filter(item => item.category === 'services').length },
    { id: 'technical', name: 'Technical', count: faqData.filter(item => item.category === 'technical').length },
    { id: 'support', name: 'Support', count: faqData.filter(item => item.category === 'support').length },
    { id: 'security', name: 'Security', count: faqData.filter(item => item.category === 'security').length },
    { id: 'integration', name: 'Integration', count: faqData.filter(item => item.category === 'integration').length },
    { id: 'pricing', name: 'Pricing', count: faqData.filter(item => item.category === 'pricing').length },
    { id: 'training', name: 'Training', count: faqData.filter(item => item.category === 'training').length }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleHelpfulFeedback = (index: number, helpful: boolean) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [index]: helpful
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'general': return '💡';
      case 'implementation': return '⚡';
      case 'services': return '🚀';
      case 'technical': return '🔧';
      case 'support': return '🎧';
      case 'security': return '🔒';
      case 'integration': return '🔗';
      case 'pricing': return '💰';
      case 'training': return '🎓';
      default: return '❓';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our AI solutions, implementation process, and support options.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Filter */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-700 border-2 border-blue-200'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.question}
                        </h4>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {item.answer}
                        </p>
                        
                        {/* Feedback Section */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">Was this helpful?</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleHelpfulFeedback(index, true)}
                              className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-colors ${
                                helpfulFeedback[index] === true
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                              }`}
                            >
                              <span>👍</span>
                              <span>Yes</span>
                            </button>
                            <button
                              onClick={() => handleHelpfulFeedback(index, false)}
                              className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-colors ${
                                helpfulFeedback[index] === false
                                  ? 'bg-red-100 text-red-700'
                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                              }`}
                            >
                              <span>👎</span>
                              <span>No</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team of AI experts is here to help. Get personalized answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Support
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicFAQ;