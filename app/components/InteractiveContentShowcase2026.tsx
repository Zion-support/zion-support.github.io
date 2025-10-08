'use client';

import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "AI Innovation",
      content: "Cutting-edge artificial intelligence solutions for 2026 and beyond.",
      icon: "🚀"
    },
    {
      title: "Performance",
      content: "Optimized performance with sub-second response times.",
      icon: "⚡"
    },
    {
      title: "Security",
      content: "Bank-level security for your most sensitive data.",
      icon: "🔒"
    },
    {
      title: "Analytics",
      content: "Live insights and predictive analytics for better decisions.",
      icon: "📊"
    }
  ];

  return (
    <section className='bg-gray-50 py-16 rounded-2xl'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Future-Ready Solutions
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Prepare your enterprise for the next generation of AI technology
            with our advanced solutions.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-wrap justify-center gap-2 mb-8'>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className='mr-2'>{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          <div className='bg-white p-8 rounded-2xl shadow-lg'>
            <div className='text-center'>
              <div className='text-6xl mb-4'>{tabs[activeTab].icon}</div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {tabs[activeTab].title}
              </h3>
              <p className='text-gray-600 text-lg'>
                {tabs[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;
