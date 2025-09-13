import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "10,000% ROI with autonomous operations and quantum computing integration",
      category: "breakthrough",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      roi: "10,000% ROI",
      icon: "🚀"
    },
    {
      id: 2,
      title: "AI 2026-2030 Future Predictions",
      description: "Revolutionary predictions: quantum-neural fusion, consciousness AI, infinite ROI",
      category: "predictions",
      link: "/ai-2026-2030-future-predictions",
      badge: "REVOLUTIONARY",
      color: "from-cyan-500 to-purple-500",
      bgColor: "from-cyan-50 to-purple-50",
      borderColor: "border-cyan-200",
      roi: "∞ ROI",
      icon: "🔮"
    },
    {
      id: 3,
      title: "Quantum Computing Breakthroughs 2025",
      description: "25,000% ROI with quantum supremacy and error-corrected quantum computers",
      category: "quantum",
      link: "/quantum-computing-breakthroughs-2025",
      badge: "QUANTUM",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      roi: "25,000% ROI",
      icon: "⚛️"
    },
    {
      id: 4,
      title: "AI 2025 Revolutionary Trends Analysis",
      description: "Comprehensive analysis of AI trends and predictions for 2025",
      category: "analysis",
      link: "/blog/ai-2025-comprehensive-trends-analysis",
      badge: "ANALYSIS",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      roi: "2,500% ROI",
      icon: "📊"
    },
    {
      id: 5,
      title: "Enterprise Automation Mastery 2025",
      description: "Complete guide to enterprise automation with proven ROI strategies",
      category: "automation",
      link: "/blog/ai-2025-enterprise-automation-mastery",
      badge: "MASTERY",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      borderColor: "border-green-200",
      roi: "5,000% ROI",
      icon: "🤖"
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Breakthrough neural interface technology with 95% patient recovery success",
      category: "neural",
      link: "/blog/ai-2026-neural-interface-revolution",
      badge: "REVOLUTION",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      roi: "3,000% ROI",
      icon: "🧠"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'breakthrough', name: 'Breakthroughs', icon: '🚀' },
    { id: 'predictions', name: 'Predictions', icon: '🔮' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'analysis', name: 'Analysis', icon: '📊' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'neural', name: 'Neural', icon: '🧠' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, predictions, and revolutionary technologies.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
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
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.bgColor} p-6 rounded-2xl border ${item.borderColor} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{item.icon}</div>
                <span className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-bold rounded-full`}>
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-green-600">
                  {item.roi}
                </div>
                <Link
                  href={item.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300`}
                >
                  Explore
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
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