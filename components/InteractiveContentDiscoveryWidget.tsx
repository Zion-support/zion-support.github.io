import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI technology delivering 10,000% ROI with autonomous operations",
      category: "breakthrough",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      roi: "10,000%",
      icon: "🚀",
      featured: true
    },
    {
      id: 2,
      title: "AI 2026 Quantum-Neural Fusion Breakthrough",
      description: "Transcendent intelligence with quantum computing integration",
      category: "quantum",
      link: "/ai-2026-quantum-neural-fusion-revolutionary-breakthrough",
      roi: "15,000%",
      icon: "⚛️",
      featured: true
    },
    {
      id: 3,
      title: "Global Transformation Success Story",
      description: "Real case study showing 10,000% ROI achievement",
      category: "case-study",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      roi: "10,000%",
      icon: "🏆",
      featured: true
    },
    {
      id: 4,
      title: "AI 2027 Future Predictions",
      description: "Revolutionary predictions for the future of AI technology",
      category: "predictions",
      link: "/ai-2027-future-predictions",
      roi: "8,000%",
      icon: "🔮",
      featured: false
    },
    {
      id: 5,
      title: "Quantum Computing Solutions 2030",
      description: "Breakthrough quantum computing implementations",
      category: "quantum",
      link: "/quantum-computing-solutions-2030",
      roi: "12,000%",
      icon: "⚛️",
      featured: false
    },
    {
      id: 6,
      title: "Enterprise Automation Mastery",
      description: "Complete guide to enterprise AI automation",
      category: "automation",
      link: "/enterprise-automation-mastery",
      roi: "5,000%",
      icon: "🤖",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'breakthrough', name: 'Breakthroughs', icon: '🚀' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'case-study', name: 'Success Stories', icon: '🏆' },
    { id: 'predictions', name: 'Future Predictions', icon: '🔮' },
    { id: 'automation', name: 'Automation', icon: '🤖' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Discover Revolutionary Content</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search revolutionary content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  {item.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs px-2 py-1 rounded-full font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.roi} ROI
                  </span>
                  <span className="text-purple-600 text-sm font-medium group-hover:text-purple-700">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">No content found</h4>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}