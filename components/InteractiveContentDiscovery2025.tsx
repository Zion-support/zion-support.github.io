import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Star, TrendingUp, Clock, Users, Target } from 'lucide-react';

export default function InteractiveContentDiscovery2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most revolutionary AI breakthroughs of 2025 that are transforming industries worldwide.",
      category: "breakthroughs",
      type: "blog",
      rating: 5,
      views: 12500,
      readTime: "8 min",
      featured: true,
      tags: ["AI 2025", "Breakthroughs", "Revolutionary", "Technology"],
      url: "/ai-2025-revolutionary-breakthroughs"
    },
    {
      id: 2,
      title: "Global Enterprise Transformation - 2000% ROI",
      description: "How a Fortune 500 company achieved 2000% ROI through revolutionary AI transformation in just 6 months.",
      category: "case-studies",
      type: "case-study",
      rating: 5,
      views: 8900,
      readTime: "12 min",
      featured: true,
      tags: ["ROI", "Enterprise", "Transformation", "Success Story"],
      url: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
    },
    {
      id: 3,
      title: "AI 2025 Comprehensive Trends Analysis",
      description: "Comprehensive analysis of AI trends for 2025. Discover the latest predictions and breakthrough technologies.",
      category: "analysis",
      type: "blog",
      rating: 4.8,
      views: 15600,
      readTime: "15 min",
      featured: false,
      tags: ["Trends", "Analysis", "Predictions", "Future"],
      url: "/blog/ai-2025-comprehensive-trends-analysis"
    },
    {
      id: 4,
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "The most comprehensive AI implementation toolkit for 2025. Get step-by-step guides and resources.",
      category: "resources",
      type: "toolkit",
      rating: 4.9,
      views: 10200,
      readTime: "25 min",
      featured: true,
      tags: ["Toolkit", "Implementation", "Guide", "Resources"],
      url: "/resources/ai-2025-ultimate-implementation-toolkit"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion Architecture",
      description: "Revolutionary hybrid system combining quantum computing with neural networks, achieving 99.7% accuracy.",
      category: "breakthroughs",
      type: "technical",
      rating: 4.7,
      views: 6800,
      readTime: "10 min",
      featured: false,
      tags: ["Quantum", "Neural Networks", "Architecture", "AI"],
      url: "/ai-2025-revolutionary-breakthroughs#quantum-neural"
    },
    {
      id: 6,
      title: "Autonomous Decision Systems Guide",
      description: "Self-evolving AI systems that make complex business decisions without human intervention.",
      category: "resources",
      type: "guide",
      rating: 4.6,
      views: 7200,
      readTime: "18 min",
      featured: false,
      tags: ["Autonomous", "Decision Making", "AI Systems", "Guide"],
      url: "/resources/ai-2025-ultimate-implementation-toolkit#autonomous"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthroughs', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthroughs').length },
    { id: 'case-studies', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: 'analysis', name: 'Analysis', count: contentItems.filter(item => item.category === 'analysis').length },
    { id: 'resources', name: 'Resources', count: contentItems.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.views - a.views;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'readTime':
        return parseInt(a.readTime) - parseInt(b.readTime);
      default:
        return 0;
    }
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover AI 2025 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI 2025 content. Find exactly what you need with our intelligent discovery system.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="trending">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="readTime">Quickest Read</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Category and Type */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {item.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedContent.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No content found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* View All Content CTA */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Target className="w-5 h-5 mr-2" />
            View All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}