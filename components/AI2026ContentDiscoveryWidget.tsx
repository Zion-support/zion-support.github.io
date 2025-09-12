import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  featured: boolean;
  roi?: string;
  badge?: string;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'quantum-neural-revolution',
    title: 'AI 2026 Quantum Neural Revolution',
    description: 'The world\'s first successful fusion of quantum computing and neural networks, delivering 15,000% ROI',
    category: 'Breakthrough Technology',
    url: '/ai-2026-quantum-neural-revolution',
    featured: true,
    roi: '15,000%',
    badge: 'BREAKTHROUGH',
    icon: '⚛️'
  },
  {
    id: 'ultimate-content-revolution',
    title: 'AI 2025 Ultimate Content Revolution',
    description: 'Comprehensive collection of AI breakthroughs, case studies, and revolutionary content',
    category: 'Content Hub',
    url: '/ai-2025-ultimate-content-revolution',
    featured: true,
    roi: '500+',
    badge: 'ULTIMATE',
    icon: '🚀'
  },
  {
    id: 'neural-interface-breakthrough',
    title: 'Neural Interface Revolution',
    description: '95% accuracy in healthcare applications with advanced neural interface technology',
    category: 'Healthcare AI',
    url: '/blog/ai-2026-neural-interface-revolution',
    featured: false,
    roi: '95%',
    badge: 'NEW',
    icon: '🧠'
  },
  {
    id: 'manufacturing-automation',
    title: 'Autonomous Manufacturing Revolution',
    description: '8,500% ROI achieved through complete manufacturing automation with AI',
    category: 'Manufacturing',
    url: '/case-studies/ai-2026-autonomous-manufacturing-revolution',
    featured: false,
    roi: '8,500%',
    badge: 'SUCCESS',
    icon: '🏭'
  },
  {
    id: 'financial-optimization',
    title: 'Quantum AI Financial Optimization',
    description: '4,000% ROI in financial trading with quantum-enhanced AI algorithms',
    category: 'Financial Services',
    url: '/case-studies/quantum-ai-financial-optimization-breakthrough-2026',
    featured: false,
    roi: '4,000%',
    badge: 'BREAKTHROUGH',
    icon: '💰'
  },
  {
    id: 'future-predictions-2026',
    title: 'AI 2026 Future Predictions',
    description: 'Expert insights and predictions about the future of AI technology',
    category: 'Future Predictions',
    url: '/blog/ai-2026-future-predictions-breakthrough',
    featured: false,
    roi: '99.8%',
    badge: 'PREDICTIONS',
    icon: '🔮'
  }
];

export default function AI2026ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', 'Breakthrough Technology', 'Content Hub', 'Healthcare AI', 'Manufacturing', 'Financial Services', 'Future Predictions'];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredContent(contentItems);
    } else {
      setFilteredContent(contentItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    // Show widget after page load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold mb-4">
            <span className="animate-pulse mr-2">🔍</span>
            CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Revolutionary AI Content</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI breakthroughs, case studies, and implementation guides
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex flex-col items-end gap-2">
                    {item.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.badge === 'BREAKTHROUGH' ? 'bg-red-100 text-red-600' :
                        item.badge === 'ULTIMATE' ? 'bg-purple-100 text-purple-600' :
                        item.badge === 'NEW' ? 'bg-green-100 text-green-600' :
                        item.badge === 'SUCCESS' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {item.roi && (
                      <span className="text-2xl font-bold text-green-600">{item.roi}</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Explore Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
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