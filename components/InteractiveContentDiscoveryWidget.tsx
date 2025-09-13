import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Star, Clock, TrendingUp, Brain, Atom, Bot, Zap } from 'lucide-react';

const contentCategories = [
  { id: 'all', name: 'All Content', icon: Search },
  { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
  { id: 'quantum', name: 'Quantum Computing', icon: Atom },
  { id: 'automation', name: 'Automation', icon: Bot },
  { id: 'trending', name: 'Trending', icon: TrendingUp }
];

const contentItems = [
  {
    id: 1,
    title: "AI Innovation Showcase 2026",
    description: "Revolutionary AI breakthroughs and cutting-edge innovations",
    category: "ai",
    href: "/ai-innovation-showcase-2026",
    image: "/api/placeholder/400/250",
    readTime: "8 min read",
    rating: 4.9,
    views: "12.5k",
    tags: ["AI", "Innovation", "2026", "Breakthrough"],
    featured: true
  },
  {
    id: 2,
    title: "Quantum Computing Solutions 2026",
    description: "Advanced quantum computing technologies and applications",
    category: "quantum",
    href: "/quantum-computing-solutions-2026",
    image: "/api/placeholder/400/250",
    readTime: "10 min read",
    rating: 4.8,
    views: "8.2k",
    tags: ["Quantum", "Computing", "Technology", "2026"],
    featured: true
  },
  {
    id: 3,
    title: "Advanced Automation Solutions 2026",
    description: "Intelligent business automation and process optimization",
    category: "automation",
    href: "/advanced-automation-solutions-2026",
    image: "/api/placeholder/400/250",
    readTime: "12 min read",
    rating: 4.7,
    views: "15.3k",
    tags: ["Automation", "Business", "AI", "Process"],
    featured: true
  },
  {
    id: 4,
    title: "Neural Interface Revolution 2026",
    description: "Next-generation brain-computer interfaces and neural technologies",
    category: "ai",
    href: "/neural-interface-revolution-2026",
    image: "/api/placeholder/400/250",
    readTime: "15 min read",
    rating: 4.6,
    views: "6.8k",
    tags: ["Neural", "Interface", "BCI", "Future"],
    featured: false
  },
  {
    id: 5,
    title: "Quantum Neural Fusion Breakthrough",
    description: "Revolutionary combination of quantum computing and neural networks",
    category: "quantum",
    href: "/quantum-neural-fusion-breakthrough",
    image: "/api/placeholder/400/250",
    readTime: "18 min read",
    rating: 4.9,
    views: "9.1k",
    tags: ["Quantum", "Neural", "Fusion", "Breakthrough"],
    featured: false
  },
  {
    id: 6,
    title: "Hyper-Automation Platform 2026",
    description: "Complete automation ecosystem for enterprise operations",
    category: "automation",
    href: "/hyper-automation-platform-2026",
    image: "/api/placeholder/400/250",
    readTime: "14 min read",
    rating: 4.5,
    views: "11.7k",
    tags: ["Hyper-Automation", "Platform", "Enterprise", "2026"],
    featured: false
  }
];

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return b.featured - a.featured;
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI, quantum computing, and automation content
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white px-4 py-3 pr-8 focus:outline-none focus:border-purple-400"
              >
                <option value="featured">Featured</option>
                <option value="rating">Highest Rated</option>
                <option value="views">Most Viewed</option>
                <option value="newest">Newest</option>
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {contentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:border-purple-400/50">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {item.category === 'ai' && <Brain />}
                      {item.category === 'quantum' && <Atom />}
                      {item.category === 'automation' && <Bot />}
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <span className="text-gray-600">•</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-400">{item.rating}</span>
                    </div>
                    <span className="text-gray-600">•</span>
                    <span className="text-sm text-gray-400">{item.views} views</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto">
            <Zap className="w-5 h-5" />
            Load More Content
          </button>
        </div>
      </div>
    </div>
  );
}