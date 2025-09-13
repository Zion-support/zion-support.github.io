'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'case-study' | 'blog' | 'resource' | 'webinar';
  roi?: string;
  featured?: boolean;
  url: string;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough delivering 2,500-5,000% ROI with 99.9% accuracy',
    category: 'AI 2025',
    type: 'blog',
    roi: '2,500-5,000%',
    featured: true,
    url: '/ai-2025-ultimate-breakthrough-revolution',
    icon: '🚀'
  },
  {
    id: '2',
    title: 'Global Transformation Breakthrough',
    description: 'Fortune 500 company achieves 10,000% ROI in 6 months with AI implementation',
    category: 'Case Studies',
    type: 'case-study',
    roi: '10,000%',
    featured: true,
    url: '/case-studies/ai-2025-global-transformation-breakthrough',
    icon: '🏆'
  },
  {
    id: '3',
    title: 'Revolutionary Implementation Guide',
    description: 'Complete 200-page guide for implementing AI 2025 breakthrough technology',
    category: 'Resources',
    type: 'resource',
    url: '/resources/ai-2025-revolutionary-implementation-guide',
    icon: '📚'
  },
  {
    id: '4',
    title: 'AI 2026 Quantum-Neural Fusion',
    description: 'Breakthrough quantum-neural integration delivering 15,000% ROI',
    category: 'AI 2026',
    type: 'blog',
    roi: '15,000%',
    featured: true,
    url: '/ai-2026-quantum-neural-fusion-breakthrough',
    icon: '⚛️'
  },
  {
    id: '5',
    title: 'Manufacturing Revolution Success',
    description: 'Leading manufacturer increases efficiency by 2,500% with autonomous AI',
    category: 'Case Studies',
    type: 'case-study',
    roi: '2,500%',
    url: '/case-studies/ai-2025-manufacturing-breakthrough',
    icon: '🏭'
  },
  {
    id: '6',
    title: 'Revolutionary Breakthroughs Webinar',
    description: 'Live webinar showcasing the latest AI 2025 breakthrough technologies',
    category: 'Webinars',
    type: 'webinar',
    url: '/webinars/ai-2025-revolutionary-breakthroughs',
    icon: '🔥'
  },
  {
    id: '7',
    title: 'Financial Services Revolution',
    description: 'Major bank achieves 5,000% ROI through AI-powered optimization',
    category: 'Case Studies',
    type: 'case-study',
    roi: '5,000%',
    url: '/case-studies/ai-2025-financial-breakthrough',
    icon: '💰'
  },
  {
    id: '8',
    title: 'Ultimate Implementation Toolkit',
    description: 'Complete toolkit with templates, calculators, and implementation strategies',
    category: 'Resources',
    type: 'resource',
    url: '/resources/ai-2025-ultimate-implementation-toolkit',
    icon: '🛠️'
  }
];

const categories = ['All', 'AI 2025', 'AI 2026', 'Case Studies', 'Resources', 'Webinars'];
const types = ['All', 'case-study', 'blog', 'resource', 'webinar'];

export default function InteractiveContentDiscoveryWidget2025() {
<<<<<<< HEAD
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
=======
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(contentItems);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      let filtered = contentItems;

      if (selectedCategory !== 'All') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      if (selectedType !== 'All') {
        filtered = filtered.filter(item => item.type === selectedType);
      }

      if (searchTerm) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredItems(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, selectedType, searchTerm]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Discover Revolutionary Content</h2>
            <p className="text-purple-100">Explore our latest AI breakthroughs, case studies, and resources</p>
          </div>
          <div className="text-4xl">🔍</div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 pr-12 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
>>>>>>> cursor/create-and-deploy-new-content-8d9e
        </div>
      </div>

<<<<<<< HEAD
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
=======
      {/* Filters */}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-wrap gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          Showing {filteredItems.length} of {contentItems.length} content items
        </div>
      </div>

      {/* Content Grid */}
      <div className="p-6">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  {item.featured && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  {item.roi && (
                    <span className="text-sm font-bold text-green-600">
                      {item.roi} ROI
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Want to see more content?</h3>
          <p className="text-gray-600 mb-4">Explore our complete content library</p>
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
>>>>>>> cursor/create-and-deploy-new-content-8d9e
        </div>
      </div>
    </div>
  );
}