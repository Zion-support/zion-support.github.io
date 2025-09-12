'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const contentCategories = [
  {
    id: 'breakthrough',
    name: 'Breakthrough Technology',
    icon: '🚀',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: '🏢',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    id: 'healthcare',
    name: 'Healthcare AI',
    icon: '🧠',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing AI',
    icon: '🏭',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    id: 'future',
    name: 'Future Technology',
    icon: '🔮',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50'
  }
];

const recommendedContent = [
  {
    id: 1,
    title: "AI 2026 Breakthrough Showcase",
    description: "Revolutionary quantum-neural fusion with 15,000% ROI",
    category: "breakthrough",
    link: "/ai-2026-breakthrough-showcase",
    roi: "15,000% ROI",
    readTime: "8 min read",
    trending: true
  },
  {
    id: 2,
    title: "Quantum Computing Solutions 2026",
    description: "Breakthrough quantum technologies with enterprise-grade performance",
    category: "quantum",
    link: "/quantum-computing-solutions-breakthrough-2026",
    roi: "25,000% ROI",
    readTime: "12 min read",
    trending: true
  },
  {
    id: 3,
    title: "AI 2027 Future Predictions",
    description: "Neural synthesis and quantum AI fusion shaping the future",
    category: "future",
    link: "/ai-2027-future-predictions",
    roi: "8,000% ROI",
    readTime: "10 min read",
    trending: false
  },
  {
    id: 4,
    title: "Enterprise AI Transformation",
    description: "Complete enterprise solutions with proven success stories",
    category: "enterprise",
    link: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
    roi: "5,000% ROI",
    readTime: "15 min read",
    trending: true
  },
  {
    id: 5,
    title: "Neural Interface Revolution",
    description: "Healthcare AI breakthroughs with 95% patient recovery success",
    category: "healthcare",
    link: "/case-studies/ai-2026-neural-interface-healthcare-breakthrough",
    roi: "95% Success",
    readTime: "7 min read",
    trending: false
  },
  {
    id: 6,
    title: "Autonomous Manufacturing",
    description: "Self-optimizing manufacturing systems with 8,500% ROI",
    category: "manufacturing",
    link: "/case-studies/ai-2026-autonomous-manufacturing-revolution",
    roi: "8,500% ROI",
    readTime: "9 min read",
    trending: true
  }
];

export default function ContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredContent, setFilteredContent] = useState(recommendedContent);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredContent(recommendedContent);
    } else {
      setFilteredContent(recommendedContent.filter(content => content.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getCategoryInfo = (categoryId: string) => {
    return contentCategories.find(cat => cat.id === categoryId) || contentCategories[0];
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Discover Revolutionary Content</h3>
        <p className="text-gray-600">Explore breakthrough AI technologies and success stories</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Content
          </button>
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((content) => {
          const categoryInfo = getCategoryInfo(content.category);
          return (
            <Link
              key={content.id}
              href={content.link}
              className="group block bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${categoryInfo.color} text-white rounded-full text-xs font-semibold`}>
                  <span className="mr-1">{categoryInfo.icon}</span>
                  {categoryInfo.name}
                </div>
                {content.trending && (
                  <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold animate-pulse">
                    🔥 Trending
                  </span>
                )}
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {content.title}
              </h4>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-green-600">
                    {content.roi}
                  </span>
                  <span className="text-xs text-gray-500">
                    {content.readTime}
                  </span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link
          href="/content-showcase"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <span>View All Content</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-gray-600">Breakthrough Articles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">25,000%</div>
            <div className="text-sm text-gray-600">Max ROI Achieved</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">100+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">99.9%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}