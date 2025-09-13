import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'implementation', name: 'Implementation', icon: '🛠️' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'resources', name: 'Resources', icon: '📚' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI and 99.9% accuracy',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '10,000%',
      accuracy: '99.9%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing with 15,000% ROI and quantum supremacy',
      category: 'quantum',
      type: 'solution',
      roi: '15,000%',
      accuracy: '99.99%',
      link: '/quantum-computing-solutions-2025',
      featured: true
    },
    {
      id: 3,
      title: 'AI 2025 Ultimate Implementation Toolkit',
      description: 'Complete implementation guide with 99.9% success rate',
      category: 'implementation',
      type: 'toolkit',
      roi: '10,000%',
      accuracy: '99.9%',
      link: '/resources/ai-2025-ultimate-implementation-toolkit',
      featured: true
    },
    {
      id: 4,
      title: 'Global Enterprise Transformation',
      description: 'Fortune 500 company achieved 10,000% ROI in 6 months',
      category: 'case-studies',
      type: 'case-study',
      roi: '10,000%',
      accuracy: '99.9%',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      featured: false
    },
    {
      id: 5,
      title: 'Quantum Manufacturing Revolution',
      description: 'Manufacturing company increased efficiency by 10,000x',
      category: 'case-studies',
      type: 'case-study',
      roi: '10,000%',
      accuracy: '99.9%',
      link: '/case-studies/ai-2025-quantum-manufacturing-transformation',
      featured: false
    },
    {
      id: 6,
      title: 'AI 2025 ROI Calculator',
      description: 'Calculate your potential ROI with our advanced calculator',
      category: 'resources',
      type: 'tool',
      roi: 'Variable',
      accuracy: '99.9%',
      link: '/tools/ai-2025-roi-calculator',
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI 2025 breakthrough content, case studies, 
            and implementation guides. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
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
              className={`bg-gradient-to-br from-slate-800/50 to-blue-900/50 p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                item.featured 
                  ? 'border-yellow-500/50 shadow-lg shadow-yellow-500/20' 
                  : 'border-gray-700/50 hover:border-blue-500/50'
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{item.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{item.accuracy}</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                </div>
                <div className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                  {item.type.replace('-', ' ').toUpperCase()}
                </div>
              </div>
              
              <Link
                href={item.link}
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Explore Content
              </Link>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our AI-powered content discovery can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Personalized Recommendations
            </Link>
            <Link
              href="/content-showcase"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}