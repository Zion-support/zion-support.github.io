'use client';
import React, { useState } from 'react';
const InteractiveContentShowcase2026: React.FC = () =>{
  const [activeTab, setActiveTab] = useState(0)
    return (
    <section className='bg-gray-50 py-16 rounded-2xl'>
      <div>
        <div>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Future-Ready Solutions</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Prepare your enterprise for the next generation of AI technology
            with our advanced solutions.
          </p>
        </div>
        <div>
          <div>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() =>setActiveTab(index)}
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
          <div>
            <div>
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
    </section>);
}
export default InteractiveContentShowcase2026