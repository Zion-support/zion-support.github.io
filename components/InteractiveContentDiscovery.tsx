import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: '15,000% ROI Revolutionary Technology',
      category: 'ai-2025',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '⚡',
      color: 'from-red-500 to-pink-500',
      badge: 'BREAKTHROUGH',
      metrics: '15,000% ROI'
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions',
      description: 'Revolutionary Future Technology Forecasts',
      category: 'ai-2026-2030',
      url: '/ai-2026-2030-future-predictions-breakthrough',
      icon: '🔮',
      color: 'from-cyan-500 to-blue-500',
      badge: 'REVOLUTIONARY',
      metrics: '∞ ROI by 2030'
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthrough 2025',
      description: 'Quantum Supremacy Achieved',
      category: 'quantum',
      url: '/quantum-computing-breakthrough-2025',
      icon: '⚛️',
      color: 'from-purple-500 to-indigo-500',
      badge: 'BREAKTHROUGH',
      metrics: '1,000+ Qubits'
    },
    {
      id: 4,
      title: 'Neural Interface Revolution 2026',
      description: 'Direct Brain-Computer Interface',
      category: 'ai-2026-2030',
      url: '/neural-interface-revolution-2026',
      icon: '🧠',
      color: 'from-green-500 to-teal-500',
      badge: 'REVOLUTIONARY',
      metrics: '95% Accuracy'
    },
    {
      id: 5,
      title: 'Autonomous Systems Mastery 2025',
      description: 'Fully Autonomous Business Operations',
      category: 'ai-2025',
      url: '/autonomous-systems-mastery-2025',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      badge: 'MASTERY',
      metrics: '24/7 Operation'
    },
    {
      id: 6,
      title: 'Quantum-AI Fusion 2029',
      description: 'Consciousness-Level AI Systems',
      category: 'quantum',
      url: '/quantum-ai-fusion-2029',
      icon: '🌌',
      color: 'from-indigo-500 to-purple-500',
      badge: 'TRANSCENDENT',
      metrics: '∞ Processing Power'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai-2025', name: 'AI 2025', icon: '⚡' },
    { id: 'ai-2026-2030', name: 'AI 2026-2030', icon: '🔮' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary content library. Use the interactive filters to discover 
            the most relevant AI breakthroughs and technologies for your business.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`bg-gradient-to-br ${item.color} p-6 rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-lg ${
                hoveredItem === item.id ? 'shadow-2xl' : ''
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-bold">
                    {item.badge}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm opacity-90 mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    {item.metrics}
                  </div>
                  <div className="text-white group-hover:text-yellow-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for? Our AI recommendation engine can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Get Personalized Recommendations
            </Link>
            <Link 
              href="/revolutionary-content-showcase-2025" 
              className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-colors"
            >
              View All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}