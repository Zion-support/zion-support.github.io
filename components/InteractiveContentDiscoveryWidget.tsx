import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = {
    all: [
      { title: 'AI 2025 Ultimate Breakthrough Revolution', href: '/ai-2025-ultimate-breakthrough-revolution', category: 'AI 2025', icon: '🚀', description: 'Revolutionary AI technologies delivering 2,500-5,000% ROI' },
      { title: 'Quantum Computing Solutions 2025', href: '/quantum-computing-solutions-2025', category: 'Quantum', icon: '⚛️', description: 'Error-corrected quantum computers and quantum supremacy' },
      { title: 'Neural Interface Revolution', href: '/ai-2026-neural-interface-revolution', category: 'AI 2026', icon: '🧠', description: 'Direct brain-computer interfaces with 99.7% accuracy' },
      { title: 'Autonomous Operations Mastery', href: '/ai-2025-autonomous-operations', category: 'Automation', icon: '🤖', description: 'Fully autonomous business operations with 10,000x speed' },
      { title: 'Quantum-AI Fusion Breakthrough', href: '/ai-2026-quantum-neural-fusion', category: 'Quantum', icon: '⚛️', description: 'Revolutionary fusion delivering 15,000% ROI' },
      { title: 'Predictive Analytics Engine', href: '/ai-2025-predictive-analytics', category: 'AI 2025', icon: '📊', description: 'Advanced analytics with 95% accuracy in forecasting' }
    ],
    'AI 2025': [
      { title: 'AI 2025 Ultimate Breakthrough Revolution', href: '/ai-2025-ultimate-breakthrough-revolution', category: 'AI 2025', icon: '🚀', description: 'Revolutionary AI technologies delivering 2,500-5,000% ROI' },
      { title: 'Predictive Analytics Engine', href: '/ai-2025-predictive-analytics', category: 'AI 2025', icon: '📊', description: 'Advanced analytics with 95% accuracy in forecasting' },
      { title: 'Autonomous Operations Mastery', href: '/ai-2025-autonomous-operations', category: 'Automation', icon: '🤖', description: 'Fully autonomous business operations with 10,000x speed' }
    ],
    'Quantum': [
      { title: 'Quantum Computing Solutions 2025', href: '/quantum-computing-solutions-2025', category: 'Quantum', icon: '⚛️', description: 'Error-corrected quantum computers and quantum supremacy' },
      { title: 'Quantum-AI Fusion Breakthrough', href: '/ai-2026-quantum-neural-fusion', category: 'Quantum', icon: '⚛️', description: 'Revolutionary fusion delivering 15,000% ROI' }
    ],
    'AI 2026': [
      { title: 'Neural Interface Revolution', href: '/ai-2026-neural-interface-revolution', category: 'AI 2026', icon: '🧠', description: 'Direct brain-computer interfaces with 99.7% accuracy' },
      { title: 'Quantum-AI Fusion Breakthrough', href: '/ai-2026-quantum-neural-fusion', category: 'Quantum', icon: '⚛️', description: 'Revolutionary fusion delivering 15,000% ROI' }
    ],
    'Automation': [
      { title: 'Autonomous Operations Mastery', href: '/ai-2025-autonomous-operations', category: 'Automation', icon: '🤖', description: 'Fully autonomous business operations with 10,000x speed' }
    ]
  };

  const categories = [
    { key: 'all', label: 'All Content', icon: '🌟' },
    { key: 'AI 2025', label: 'AI 2025', icon: '🚀' },
    { key: 'Quantum', label: 'Quantum', icon: '⚛️' },
    { key: 'AI 2026', label: 'AI 2026', icon: '🧠' },
    { key: 'Automation', label: 'Automation', icon: '🤖' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border-2 border-blue-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🔍 Interactive Content Discovery
        </h2>
        <p className="text-lg text-gray-700">
          Explore our revolutionary AI and quantum computing content
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === category.key
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentItems[selectedCategory as keyof typeof contentItems].map((item, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                {item.category}
              </span>
              <Link 
                href={item.href}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for? Our AI experts can help!
        </p>
        <Link 
          href="/contact"
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
        >
          💬 Get Expert Help
        </Link>
      </div>
    </div>
  );
}