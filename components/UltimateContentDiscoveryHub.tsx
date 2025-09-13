import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';

const UltimateContentDiscoveryHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'ai-2025', name: 'AI 2025', icon: <Brain className="w-4 h-4" /> },
    { id: 'ai-2026', name: 'AI 2026', icon: <Zap className="w-4 h-4" /> },
    { id: 'ai-2027', name: 'AI 2027', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum AI', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'transcendent', name: 'Transcendent AI', icon: <Star className="w-4 h-4" /> }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI 2027 Revolutionary Breakthrough",
      description: "Experience the most advanced AI breakthrough in history with neural synthesis technology",
      category: "ai-2027",
      type: "breakthrough",
      trending: true,
      readTime: "5 min",
      rating: 4.9,
      image: "/api/placeholder/400/250",
      url: "/ai-2027-revolutionary-breakthrough"
    },
    {
      id: 2,
      title: "Quantum Neural Fusion Technology",
      description: "Witness the convergence of quantum computing and neural networks",
      category: "quantum",
      type: "technology",
      trending: true,
      readTime: "7 min",
      rating: 4.8,
      image: "/api/placeholder/400/250",
      url: "/ai-2028-quantum-neural-fusion"
    },
    {
      id: 3,
      title: "Transcendent Intelligence Systems",
      description: "Beyond human intelligence - AI that transcends cognitive limitations",
      category: "transcendent",
      type: "intelligence",
      trending: false,
      readTime: "10 min",
      rating: 5.0,
      image: "/api/placeholder/400/250",
      url: "/ai-2030-transcendent-intelligence"
    },
    {
      id: 4,
      title: "AI 2025 Advanced Automation",
      description: "Revolutionary automation solutions that transform business operations",
      category: "ai-2025",
      type: "automation",
      trending: true,
      readTime: "6 min",
      rating: 4.7,
      image: "/api/placeholder/400/250",
      url: "/ai-2025-advanced-automation"
    },
    {
      id: 5,
      title: "Neural Interface Future 2035",
      description: "Direct brain-computer interfaces that merge human and AI consciousness",
      category: "ai-2026",
      type: "interface",
      trending: false,
      readTime: "8 min",
      rating: 4.9,
      image: "/api/placeholder/400/250",
      url: "/neural-interface-future-2035"
    },
    {
      id: 6,
      title: "Quantum Computing Revolution",
      description: "Breakthrough quantum computing solutions for enterprise applications",
      category: "quantum",
      type: "computing",
      trending: true,
      readTime: "9 min",
      rating: 4.8,
      image: "/api/placeholder/400/250",
      url: "/quantum-computing-revolution"
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending ? 1 : -1;
      case 'rating':
        return b.rating - a.rating;
      case 'recent':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Ultimate Content Discovery Hub
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              AI Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore the most advanced AI breakthroughs, quantum computing innovations, and transcendent intelligence systems.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary AI content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="trending">Trending</option>
              <option value="rating">Highest Rated</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedContent.map((content) => (
            <div
              key={content.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-48 object-cover"
                />
                {content.trending && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {content.rating}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-purple-400 text-sm font-medium uppercase tracking-wide">
                    {contentCategories.find(cat => cat.id === content.category)?.name}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {content.description}
                </p>

                <Link
                  to={content.url}
                  className="group/link inline-flex items-center text-purple-400 hover:text-white font-semibold transition-colors"
                >
                  Explore Content
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/content-hub"
            className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore All Revolutionary Content
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscoveryHub;