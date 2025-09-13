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
=======
  const [activeTab, setActiveTab] = useState('ai-2025');

  const contentCategories = {
    'ai-2025': {
      title: 'AI 2025 Breakthroughs',
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: 'Experience the most revolutionary AI technologies of 2025 delivering unprecedented 10,000% ROI',
          link: '/ai-2025-ultimate-breakthrough-revolution',
          roi: '10,000% ROI',
          icon: '🚀'
        },
        {
          title: 'Quantum Computing Breakthroughs 2030',
          description: 'Revolutionary quantum computing with error-corrected quantum computers and 15,000% ROI',
          link: '/quantum-computing-breakthroughs-2030',
          roi: '15,000% ROI',
          icon: '⚛️'
        },
        {
          title: 'Neural Interface Solutions',
          description: 'Direct brain-computer communication with 99.7% accuracy and 3,000% ROI',
          link: '/neural-interface-solutions',
          roi: '3,000% ROI',
          icon: '🧠'
        }
      ]
    },
    'ai-2026': {
      title: 'AI 2026 Revolutionary Content',
      color: 'from-cyan-500 to-purple-500',
      content: [
        {
          title: 'AI 2026 Breakthrough Revolutionary Content',
          description: 'Quantum-neural fusion, consciousness AI, and transcendent intelligence with infinite ROI',
          link: '/ai-2026-breakthrough-revolutionary-content',
          roi: '∞ ROI',
          icon: '🌌'
        },
        {
          title: 'AI 2027 Future Predictions Revolutionary',
          description: 'Neural synthesis, quantum-AI fusion, and transcendent intelligence delivering 8,000% ROI',
          link: '/ai-2027-future-predictions-revolutionary',
          roi: '8,000% ROI',
          icon: '🔮'
        },
        {
          title: 'AI 2028 Future Predictions Breakthrough',
          description: 'Automotive transformation, quantum neural fusion, and advanced AI systems with 3,000% ROI',
          link: '/ai-2028-future-predictions-breakthrough',
          roi: '3,000% ROI',
          icon: '🚗'
        }
      ]
    },
    'quantum': {
      title: 'Quantum Computing Solutions',
      color: 'from-indigo-500 to-pink-500',
      content: [
        {
          title: 'Quantum Computing Breakthroughs 2030',
          description: 'Error-corrected quantum computers, quantum internet, and quantum-AI fusion',
          link: '/quantum-computing-breakthroughs-2030',
          roi: '15,000% ROI',
          icon: '⚛️'
        },
        {
          title: 'Quantum Internet Implementation',
          description: 'Ultra-secure quantum internet with 100% security and instant communication',
          link: '/quantum-internet-implementation',
          roi: '100% Secure',
          icon: '🌐'
        },
        {
          title: 'Quantum-AI Fusion Technology',
          description: 'Revolutionary fusion of quantum computing and AI with infinite capabilities',
          link: '/quantum-ai-fusion-technology',
          roi: '∞ Potential',
          icon: '⚛️🧠'
        }
      ]
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-blue-400/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🎯 Interactive Content Discovery
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Explore our revolutionary AI content library and discover breakthrough technologies delivering unprecedented ROI across all industries.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              {category.title}
            </button>
          ))}
>>>>>>> cursor/create-and-deploy-new-content-bcb9
        </div>
      </div>

<<<<<<< HEAD
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
=======
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="text-green-400 font-bold text-lg">{item.roi}</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already achieving unprecedented ROI with our revolutionary AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                View All Resources
              </Link>
            </div>
>>>>>>> cursor/create-and-deploy-new-content-bcb9
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
        </div>
      </div>
    </div>
  );
}