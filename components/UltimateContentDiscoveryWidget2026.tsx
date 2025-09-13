import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "5,000% ROI guaranteed with quantum computing and neural interfaces",
      category: "breakthroughs",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      priority: "high"
    },
    {
      id: 2,
      title: "AI 2026 Ultimate Breakthrough Predictions",
      description: "Quantum-neural fusion, consciousness AI, and transcendent intelligence",
      category: "predictions",
      href: "/ai-2026-ultimate-breakthrough-predictions",
      badge: "FUTURE",
      badgeColor: "bg-cyan-500",
      priority: "high"
    },
    {
      id: 3,
      title: "AI 2026 Quantum-Neural Fusion",
      description: "Revolutionary quantum-neural fusion breakthrough technology",
      category: "breakthroughs",
      href: "/ai-2026-quantum-neural-fusion-breakthrough",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-indigo-500",
      priority: "high"
    },
    {
      id: 4,
      title: "Fortune 500 Success Story",
      description: "1,500% ROI achieved by Fortune 500 company",
      category: "case-studies",
      href: "/case-studies/ai-2025-fortune-500-transformation-breakthrough",
      badge: "SUCCESS",
      badgeColor: "bg-orange-500",
      priority: "medium"
    },
    {
      id: 5,
      title: "AI 2025 Implementation Guide",
      description: "Complete guide to implementing AI 2025 breakthroughs",
      category: "guides",
      href: "/resources/ai-2025-ultimate-implementation-guide",
      badge: "GUIDE",
      badgeColor: "bg-green-500",
      priority: "medium"
    },
    {
      id: 6,
      title: "AI 2026 ROI Calculator",
      description: "Calculate your potential ROI with AI 2026 solutions",
      category: "tools",
      href: "/tools/ai-2026-roi-calculator",
      badge: "CALCULATOR",
      badgeColor: "bg-yellow-500",
      priority: "medium"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content', count: contentItems.length },
    { value: 'breakthroughs', label: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthroughs').length },
    { value: 'predictions', label: 'Predictions', count: contentItems.filter(item => item.category === 'predictions').length },
    { value: 'case-studies', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length },
    { value: 'guides', label: 'Implementation Guides', count: contentItems.filter(item => item.category === 'guides').length },
    { value: 'tools', label: 'Tools & Calculators', count: contentItems.filter(item => item.category === 'tools').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI breakthroughs, predictions, 
            case studies, and implementation guides.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search Input */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for AI breakthroughs, predictions, case studies..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                item.priority === 'high' ? 'ring-2 ring-blue-200' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${item.badgeColor}`}>
                  {item.badge}
                </div>
                {item.priority === 'high' && (
                  <div className="text-yellow-500 text-lg">⭐</div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                {item.description}
              </p>
              
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                Read More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/ultimate-content-showcase-2026"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}