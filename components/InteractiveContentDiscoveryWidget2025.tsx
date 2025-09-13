import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight } from 'lucide-react';

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', name: 'All Content', count: 156 },
    { id: 'neural-networks', name: 'Neural Networks', count: 32 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 28 },
    { id: 'automation', name: 'Automation', count: 45 },
    { id: 'content-creation', name: 'Content Creation', count: 23 },
    { id: 'business-strategy', name: 'Business Strategy', count: 18 },
    { id: 'future-tech', name: 'Future Tech', count: 10 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Neural Architecture Revolution",
      description: "Complete guide to implementing next-generation neural networks with 10,000x performance improvements.",
      category: "neural-networks",
      readTime: "15 min",
      views: 12500,
      rating: 4.9,
      trending: true,
      featured: true,
      tags: ["AI", "Neural Networks", "Performance", "Architecture"]
    },
    {
      id: 2,
      title: "Quantum-AI Fusion Implementation",
      description: "Breakthrough techniques for combining quantum computing with AI for unprecedented processing power.",
      category: "quantum-computing",
      readTime: "20 min",
      views: 8700,
      rating: 4.8,
      trending: true,
      featured: true,
      tags: ["Quantum", "AI", "Fusion", "Computing"]
    },
    {
      id: 3,
      title: "Autonomous Business Systems 2025",
      description: "Complete blueprint for building self-managing business systems with 99.9% accuracy.",
      category: "automation",
      readTime: "25 min",
      views: 15200,
      rating: 4.9,
      trending: false,
      featured: true,
      tags: ["Automation", "Business", "Systems", "AI"]
    },
    {
      id: 4,
      title: "AI-Powered Content Generation Mastery",
      description: "Advanced techniques for creating high-quality content at scale with AI assistance.",
      category: "content-creation",
      readTime: "18 min",
      views: 9300,
      rating: 4.7,
      trending: false,
      featured: false,
      tags: ["Content", "AI", "Generation", "Mastery"]
    },
    {
      id: 5,
      title: "Machine Learning ROI Optimization",
      description: "Proven strategies for maximizing return on investment in ML implementations.",
      category: "business-strategy",
      readTime: "12 min",
      views: 6800,
      rating: 4.8,
      trending: false,
      featured: false,
      tags: ["ML", "ROI", "Optimization", "Business"]
    },
    {
      id: 6,
      title: "Future of AI: 2030 Predictions",
      description: "Exclusive insights into AI development trends and future technological breakthroughs.",
      category: "future-tech",
      readTime: "22 min",
      views: 11400,
      rating: 4.9,
      trending: true,
      featured: false,
      tags: ["Future", "AI", "Predictions", "2030"]
    }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Sort content
    switch (sortBy) {
      case 'trending':
        filtered = filtered.sort((a, b) => b.trending - a.trending || b.views - a.views);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'views':
        filtered = filtered.sort((a, b) => b.views - a.views);
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => b.id - a.id);
        break;
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Use our advanced discovery engine to find the perfect AI content for your needs.
          </p>
        </div>

        {/* Search and filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-gray-800">
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="trending" className="bg-gray-800">Trending</option>
                <option value="rating" className="bg-gray-800">Highest Rated</option>
                <option value="views" className="bg-gray-800">Most Viewed</option>
                <option value="newest" className="bg-gray-800">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div 
              key={content.id} 
              className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {content.trending && (
                      <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </span>
                    )}
                    {content.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    {content.rating}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">👁</span>
                      {content.views.toLocaleString()}
                    </div>
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No content found matching your criteria</div>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('trending');
              }}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 text-center text-gray-400">
          Showing {filteredContent.length} of {contentItems.length} content pieces
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;