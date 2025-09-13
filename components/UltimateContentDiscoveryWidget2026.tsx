import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🤖' },
    { id: 'ai-2026', name: 'AI 2026', icon: '⚛️' },
    { id: 'quantum', name: 'Quantum Computing', icon: '🌌' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'guides', name: 'Implementation Guides', icon: '📚' },
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most significant AI advancement in history, delivering 15,000% ROI',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '15,000%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'REVOLUTIONARY',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion Breakthrough',
      description: 'World\'s first successful fusion of quantum computing with neural networks',
      category: 'ai-2026',
      type: 'breakthrough',
      roi: '25,000%',
      link: '/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
      badge: 'BREAKTHROUGH',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      id: 3,
      title: 'AI 2025 Ultimate Implementation Master Guide',
      description: 'Complete step-by-step guide to achieve 15,000% ROI with AI implementation',
      category: 'guides',
      type: 'guide',
      roi: '15,000%',
      link: '/resources/ai-2025-ultimate-implementation-master-guide',
      badge: 'ESSENTIAL',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 4,
      title: 'Fortune 500 AI Transformation Success',
      description: 'How Fortune 500 companies achieved 18,500% ROI with our AI solutions',
      category: 'case-studies',
      type: 'case-study',
      roi: '18,500%',
      link: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
      badge: 'SUCCESS',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Revolutionary quantum computing solutions delivering unprecedented performance',
      category: 'quantum',
      type: 'breakthrough',
      roi: '30,000%',
      link: '/quantum-computing-breakthroughs-2030',
      badge: 'FUTURE',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 6,
      title: 'AI 2026 Future Predictions',
      description: 'Comprehensive predictions for AI development through 2026 and beyond',
      category: 'ai-2026',
      type: 'prediction',
      roi: 'N/A',
      link: '/blog/ai-2026-future-predictions-breakthrough',
      badge: 'PREDICTION',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🔍 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, case studies, and implementation guides designed to transform your business.
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
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.color} text-white`}>
                  {content.badge}
                </span>
                {content.roi !== 'N/A' && (
                  <span className="text-green-400 font-bold text-sm">
                    {content.roi} ROI
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white hover:text-blue-400 transition-colors">
                <Link href={content.link}>
                  {content.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {content.description}
              </p>

              {/* Type Indicator */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  {content.type.replace('-', ' ')}
                </span>
                <Link
                  href={content.link}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI-powered content recommendation system can help you discover the perfect resources for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Personalized Recommendations
              </Link>
              <Link
                href="/content-library"
                className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}