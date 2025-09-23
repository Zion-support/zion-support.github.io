"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentDiscoveryWidget2025 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTrend, setSelectedTrend] = useState('all');
  const [filteredContent, setFilteredContent] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "Neural Superintelligence Breakthrough 2025",
      description: "Revolutionary AI systems achieving human-level consciousness and beyond",
      category: "ai-trends",
      trend: "neural-ai",
      type: "article",
      readTime: "15 min",
      difficulty: "Advanced",
      roi: "2,400%",
      image: "🧠",
      tags: ["AI", "Neural Networks", "Consciousness", "Breakthrough"],
      featured: true
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion Implementation Guide",
      description: "Complete guide to implementing quantum computing with neural networks",
      category: "implementation",
      trend: "quantum-ai",
      type: "guide",
      readTime: "25 min",
      difficulty: "Expert",
      roi: "5,000%",
      image: "⚛️",
      tags: ["Quantum Computing", "Neural Networks", "Implementation", "Guide"],
      featured: true
    },
    {
      id: 3,
      title: "Autonomous Business Ecosystems Case Study",
      description: "How Fortune 500 companies achieved 8,000% ROI with autonomous systems",
      category: "case-studies",
      trend: "autonomous-systems",
      type: "case-study",
      readTime: "12 min",
      difficulty: "Intermediate",
      roi: "8,000%",
      image: "🤖",
      tags: ["Case Study", "Autonomous Systems", "ROI", "Fortune 500"],
      featured: false
    },
    {
      id: 4,
      title: "Synthetic Intelligence Revolution Framework",
      description: "Framework for building self-improving AI systems",
      category: "frameworks",
      trend: "synthetic-ai",
      type: "framework",
      readTime: "30 min",
      difficulty: "Expert",
      roi: "10,000%",
      image: "🔬",
      tags: ["Synthetic Intelligence", "Framework", "Self-Improving AI", "Revolution"],
      featured: true
    },
    {
      id: 5,
      title: "AI ROI Calculator: Ultimate Guide",
      description: "Calculate your potential ROI with our comprehensive AI solutions",
      category: "tools",
      trend: "roi-optimization",
      type: "tool",
      readTime: "8 min",
      difficulty: "Beginner",
      roi: "Variable",
      image: "💰",
      tags: ["ROI Calculator", "Tools", "Business", "Optimization"],
      featured: false
    },
    {
      id: 6,
      title: "Edge Computing Revolution 2025",
      description: "How edge computing is transforming AI deployment and performance",
      category: "ai-trends",
      trend: "edge-computing",
      type: "article",
      readTime: "18 min",
      difficulty: "Advanced",
      roi: "1,500%",
      image: "🌐",
      tags: ["Edge Computing", "AI Deployment", "Performance", "Revolution"],
      featured: false
    },
    {
      id: 7,
      title: "AI Ethics and Governance Framework",
      description: "Comprehensive framework for ethical AI development and deployment",
      category: "frameworks",
      trend: "ai-ethics",
      type: "framework",
      readTime: "20 min",
      difficulty: "Intermediate",
      roi: "Risk Mitigation",
      image: "⚖️",
      tags: ["AI Ethics", "Governance", "Framework", "Responsible AI"],
      featured: false
    },
    {
      id: 8,
      title: "Multimodal AI Applications Guide",
      description: "Complete guide to implementing multimodal AI across industries",
      category: "implementation",
      trend: "multimodal-ai",
      type: "guide",
      readTime: "22 min",
      difficulty: "Advanced",
      roi: "3,200%",
      image: "🎯",
      tags: ["Multimodal AI", "Implementation", "Guide", "Applications"],
      featured: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content', count: contentItems.length },
    { value: 'ai-trends', label: 'AI Trends', count: contentItems.filter(item => item.category === 'ai-trends').length },
    { value: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length },
    { value: 'case-studies', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length },
    { value: 'frameworks', label: 'Frameworks', count: contentItems.filter(item => item.category === 'frameworks').length },
    { value: 'tools', label: 'Tools', count: contentItems.filter(item => item.category === 'tools').length }
  ];

  const trends = [
    { value: 'all', label: 'All Trends' },
    { value: 'neural-ai', label: 'Neural AI' },
    { value: 'quantum-ai', label: 'Quantum AI' },
    { value: 'autonomous-systems', label: 'Autonomous Systems' },
    { value: 'synthetic-ai', label: 'Synthetic AI' },
    { value: 'edge-computing', label: 'Edge Computing' },
    { value: 'multimodal-ai', label: 'Multimodal AI' },
    { value: 'ai-ethics', label: 'AI Ethics' }
  ];

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      let filtered = contentItems;

      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      if (selectedTrend !== 'all') {
        filtered = filtered.filter(item => item.trend === selectedTrend);
      }

      setFilteredContent(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, selectedTrend]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Expert': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article': return '📄';
      case 'guide': return '📚';
      case 'case-study': return '📊';
      case 'framework': return '🏗️';
      case 'tool': return '🛠️';
      default: return '📄';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔍 CONTENT DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ultimate Content Discovery Widget
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI content, trends, and resources tailored to your interests and expertise level.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content, trends, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Trend Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">AI Trend</label>
              <select
                value={selectedTrend}
                onChange={(e) => setSelectedTrend(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {trends.map((trend) => (
                  <option key={trend.value} value={trend.value}>
                    {trend.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {isSearching ? 'Searching...' : `Found ${filteredContent.length} content items`}
            </h3>
            <div className="text-gray-600">
              {searchTerm && `Results for "${searchTerm}"`}
            </div>
          </div>

          {isSearching ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                    item.featured ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                      ⭐ FEATURED
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-4xl">{item.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-2xl">{getTypeIcon(item.type)}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        {item.readTime} read
                      </div>
                      <div className="text-sm font-semibold text-green-600">
                        {item.roi} ROI
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/content/${item.id}`}
                      className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* No Results */}
        {!isSearching && filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm(', ');
                setSelectedCategory('all');
                setSelectedTrend('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Want More Content?</h3>
            <p className="text-xl mb-6 text-white/90">
              Subscribe to get the latest AI content, trends, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Request Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentDiscoveryWidget2025;