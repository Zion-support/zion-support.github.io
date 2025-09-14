"use client";
import React{ useState } from 'react';
import Link from 'next/link';

export default function NewContentDiscoveryWidget2025() {
  const [activeCategorysetActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all'name: 'All Content'icon: '🚀' },
    { id: 'ai-2025'name: 'AI 2025'icon: '🧠' },
    { id: 'ai-2026-2030'name: 'AI 2026-2030'icon: '🔮' },
    { id: 'quantum'name: 'Quantum Computing'icon: '⚛️' },
    { id: 'case-studies'name: 'Case Studies'icon: '🏆' },
    { id: 'breakthroughs'name: 'Breakthroughs'icon: '💡' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technologies delivering 15,000% ROI with quantum-AI fusion and neural synthesis.',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '15,000%',
      accuracy: '99.9%',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions',
      description: 'Most accurate predictions for the next decade featuring quantum consciousness and transcendent technologies.',
      category: 'ai-2026-2030',
      type: 'predictions',
      roi: '∞',
      accuracy: '95%',
      url: '/ai-2026-2030-future-predictions-breakthrough',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing delivering 10,000x faster processing and quantum supremacy.',
      category: 'quantum',
      type: 'technology',
      roi: '10,000x',
      accuracy: '99.9%',
      url: '/quantum-computing-solutions-2025',
      featured: true
    },
    {
      id: 4,
      title: 'AI 2025 Ultimate Breakthrough Success',
      description: 'Fortune 500 company achieves 15,000% ROI in 6 months using breakthrough AI technologies.',
      category: 'case-studies',
      type: 'success-story',
      roi: '15,000%',
      accuracy: '99.9%',
      url: '/case-studies/ai-2025-ultimate-breakthrough-success',
      featured: true
    },
    {
      id: 5,
      title: 'Quantum-AI Fusion Technology',
      description: 'Revolutionary fusion of quantum computing and AI delivering unprecedented processing power.',
      category: 'breakthroughs',
      type: 'technology',
      roi: '15,000%',
      accuracy: '99.9%',
      url: '/quantum-ai-fusion-2025',
      featured: false
    },
    {
      id: 6,
      title: 'Neural Synthesis Breakthrough',
      description: 'Advanced neural networks with 99.9% accuracy and 1,000x faster learning capabilities.',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '12,000%',
      accuracy: '99.7%',
      url: '/neural-synthesis-2025',
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough technologiescase studiesand future predictions 
            that are transforming businesses worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCategory === category.id
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-4">
                  ⭐ Featured
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.accuracy}</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 capitalize">
                  {item.type.replace('-' ')}
                </div>
              </div>
              
              <Link
                href={item.url}
                className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Explore Content
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for? Let us help you discover the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              Get Personalized Recommendations
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}