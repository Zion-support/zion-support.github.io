import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🧠' },
    { id: 'ai-2026', name: 'AI 2026', icon: '⚛️' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆' },
    { id: 'predictions', name: 'Predictions', icon: '🔮' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough of 2025 delivering 10,000% ROI with autonomous operations.',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '10,000%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true,
    },
    {
      id: 2,
      title: 'AI 2026 Breakthrough Revolutionary Content',
      description: 'Quantum-neural fusion and consciousness-level intelligence delivering 15,000% ROI.',
      category: 'ai-2026',
      type: 'breakthrough',
      roi: '15,000%',
      link: '/ai-2026-breakthrough-revolutionary-content',
      featured: true,
    },
    {
      id: 3,
      title: 'Global Transformation Breakthrough Case Study',
      description: 'How a Fortune 500 company achieved 10,000% ROI with our AI 2025 breakthrough.',
      category: 'case-studies',
      type: 'case-study',
      roi: '10,000%',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      featured: true,
    },
    {
      id: 4,
      title: 'AI 2027 Future Predictions',
      description: 'Revolutionary predictions for AI 2027 with neural synthesis and quantum-AI fusion.',
      category: 'predictions',
      type: 'prediction',
      roi: '8,000%',
      link: '/blog/ai-2027-future-predictions',
      featured: false,
    },
    {
      id: 5,
      title: 'AI 2028 Quantum Neural Breakthroughs',
      description: 'Advanced quantum-neural fusion breakthroughs for 2028 with 20,000% ROI potential.',
      category: 'ai-2026',
      type: 'breakthrough',
      roi: '20,000%',
      link: '/ai-2028-2030-quantum-neural-breakthroughs',
      featured: false,
    },
    {
      id: 6,
      title: 'Ultimate Implementation Toolkit 2026',
      description: 'Complete toolkit for implementing AI 2026 breakthrough in your organization.',
      category: 'tools',
      type: 'toolkit',
      roi: '5,000%',
      link: '/resources/ai-2026-ultimate-implementation-master-guide',
      featured: false,
    },
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🌌 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, case studies, predictions, and tools 
            delivering unprecedented ROI and transformative results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-600/30 p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 ${
                content.featured ? 'ring-2 ring-cyan-500/30' : ''
              }`}
            >
              {/* Featured Badge */}
              {content.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              )}

              {/* Type Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {content.type.toUpperCase()}
                </span>
              </div>

              {/* ROI Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  {content.roi} ROI
                </span>
              </div>

              {/* Content */}
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>
                
                {/* Action Button */}
                <Link
                  href={content.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Explore Content
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}