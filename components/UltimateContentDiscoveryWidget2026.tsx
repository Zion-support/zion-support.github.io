import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough delivering 10,000% ROI',
      category: 'breakthrough',
      type: 'page',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      roi: '10,000%',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'AI 2026 Future Predictions Breakthrough',
      description: 'Exclusive insights into revolutionary AI breakthroughs coming in 2026',
      category: 'predictions',
      type: 'page',
      url: '/ai-2026-future-predictions-breakthrough',
      roi: '15,000%',
      badge: 'REVOLUTIONARY',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      id: 3,
      title: 'AI 2026 Quantum Neural Fusion Success',
      description: 'Revolutionary case study: 15,000% ROI in manufacturing',
      category: 'case-study',
      type: 'case-study',
      url: '/case-studies/ai-2026-quantum-neural-fusion-success',
      roi: '15,000%',
      badge: 'SUCCESS',
      color: 'from-green-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'AI 2026 Quantum Neural Fusion Technology',
      description: 'Revolutionary quantum-enhanced neural networks',
      category: 'technology',
      type: 'technology',
      url: '/ai-2026-quantum-neural-fusion-technology',
      roi: '∞',
      badge: 'TECHNOLOGY',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 5,
      title: 'AI 2025 Revolutionary Trends Analysis',
      description: 'Comprehensive analysis of AI trends and predictions',
      category: 'analysis',
      type: 'blog',
      url: '/blog/ai-2025-revolutionary-trends-predictions',
      roi: '2,500%',
      badge: 'ANALYSIS',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 6,
      title: 'AI 2026 Implementation Master Guide',
      description: 'Complete guide to implementing AI 2026 technologies',
      category: 'guide',
      type: 'resource',
      url: '/resources/ai-2026-ultimate-implementation-master-guide',
      roi: '5,000%',
      badge: 'GUIDE',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthrough', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'predictions', name: 'Predictions', count: contentItems.filter(item => item.category === 'predictions').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'technology', name: 'Technology', count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'analysis', name: 'Analysis', count: contentItems.filter(item => item.category === 'analysis').length },
    { id: 'guide', name: 'Guides', count: contentItems.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6 animate-pulse">
            🔍 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, predictions, case studies, 
            and implementation guides. Find the content that will transform your organization.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-slate-800/30 to-purple-800/30 rounded-2xl p-6 border border-slate-500/30 hover:border-purple-500/50 transition-all transform hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-white text-xs font-semibold`}>
                  {item.badge}
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  {item.roi}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400 uppercase tracking-wide">
                  {item.type}
                </div>
                <Link
                  href={item.url}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-800/30 to-purple-800/30 rounded-2xl p-8 border border-slate-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI-powered content recommendation system can help you discover the perfect content 
              for your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
              >
                Get Personalized Recommendations
              </Link>
              <Link
                href="/content-showcase"
                className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}