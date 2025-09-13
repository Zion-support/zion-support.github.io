import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'ai2025', name: 'AI 2025', icon: '🤖' },
    { id: 'ai2026', name: 'AI 2026', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆' },
    { id: 'predictions', name: 'Future Predictions', icon: '🔮' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI with autonomous operations and quantum-AI fusion.',
      category: 'ai2025',
      roi: '10,000%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026 Future Predictions Breakthrough',
      description: 'Revolutionary predictions for AI 2026 including quantum-neural fusion and consciousness AI.',
      category: 'ai2026',
      roi: '15,000%',
      link: '/ai-2026-future-predictions-breakthrough',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Revolutionary quantum computing breakthroughs including error-corrected quantum computers.',
      category: 'quantum',
      roi: '50,000%',
      link: '/quantum-computing-breakthroughs-2030',
      featured: true
    },
    {
      id: 4,
      title: 'Global Transformation Success Story',
      description: 'Fortune 500 company achieves 10,000% ROI in just 6 months using AI 2025 technology.',
      category: 'case-studies',
      roi: '10,000%',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      featured: true
    },
    {
      id: 5,
      title: 'Quantum-Neural Fusion Case Study',
      description: 'Enterprise achieves 15,000% ROI through quantum-neural fusion technology.',
      category: 'case-studies',
      roi: '15,000%',
      link: '/case-studies/ai-2026-quantum-neural-fusion-enterprise-transformation-breakthrough',
      featured: false
    },
    {
      id: 6,
      title: 'AI 2030 Future Predictions',
      description: 'Revolutionary predictions for AI 2030 including transcendent intelligence and space exploration.',
      category: 'predictions',
      roi: '∞',
      link: '/ai-2030-future-predictions',
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            🚀 INTERACTIVE CONTENT DISCOVERY 2026
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Discover revolutionary AI content that will transform your business. Filter by category and explore breakthrough technologies delivering unprecedented ROI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                item.featured 
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'border-gray-600 hover:border-cyan-400'
              }`}
            >
              {item.featured && (
                <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-cyan-400">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {item.roi} ROI
                </div>
                <div className="text-xs text-gray-400">
                  {item.category.toUpperCase()}
                </div>
              </div>
              
              <Link
                href={item.link}
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your business with revolutionary AI technology?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-8 py-4 rounded-lg font-bold text-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}