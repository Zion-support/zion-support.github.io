import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentDiscovery2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️' },
    { id: 'neural', name: 'Neural Tech', icon: '🧠' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Advanced Automation Mastery',
      description: 'Master intelligent automation with cutting-edge AI technologies and proven strategies.',
      category: 'automation',
      href: '/ai-2025-advanced-automation-mastery',
      image: '🤖',
      gradient: 'from-emerald-500 to-cyan-600',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2025 Enterprise Transformation',
      description: 'Transform your enterprise with comprehensive AI strategies and implementation frameworks.',
      category: 'enterprise',
      href: '/ai-2025-enterprise-transformation',
      image: '🏢',
      gradient: 'from-purple-500 to-pink-600',
      featured: true
    },
    {
      id: 3,
      title: 'AI 2025 Quantum AI Fusion',
      description: 'Experience the revolutionary fusion of quantum computing and artificial intelligence.',
      category: 'quantum',
      href: '/ai-2025-quantum-ai-fusion',
      image: '⚛️',
      gradient: 'from-cyan-500 to-purple-600',
      featured: true
    },
    {
      id: 4,
      title: 'AI 2025 Neural Interface Revolution',
      description: 'Control technology with your mind using breakthrough neural interface technology.',
      category: 'neural',
      href: '/ai-2025-neural-interface-revolution',
      image: '🧠',
      gradient: 'from-violet-500 to-purple-600',
      featured: true
    },
    {
      id: 5,
      title: 'Quantum Computing 2025',
      description: 'Explore breakthrough quantum computing technologies and quantum algorithms.',
      category: 'quantum',
      href: '/quantum-computing-2025',
      image: '⚡',
      gradient: 'from-indigo-500 to-blue-600',
      featured: false
    },
    {
      id: 6,
      title: 'AI 2025 Ultimate Breakthrough',
      description: 'Discover the most advanced AI breakthroughs transforming industries worldwide.',
      category: 'automation',
      href: '/ai-2025-ultimate-breakthrough',
      image: '🚀',
      gradient: 'from-yellow-500 to-orange-600',
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ultimate Content Discovery 2025
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our comprehensive collection of cutting-edge AI content, 
          breakthrough technologies, and revolutionary solutions.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {contentCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((content) => (
          <div
            key={content.id}
            className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 ${
              content.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${content.gradient} rounded-xl flex items-center justify-center`}>
                <span className="text-2xl">{content.image}</span>
              </div>
              {content.featured && (
                <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                  FEATURED
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              {content.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
              {content.description}
            </p>
            
            <Link
              href={content.href}
              className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${content.gradient} text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
            >
              Explore Content
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-8">
        <Link
          href="/content-showcase-2025"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View All Content
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default UltimateContentDiscovery2025;