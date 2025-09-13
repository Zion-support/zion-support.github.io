import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Star, Clock, TrendingUp, Brain, Atom, Bot, Zap, Shield, Globe } from 'lucide-react';

const InteractiveContentDiscoveryWidget = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025-2026 Ultimate Innovation Showcase",
      description: "Discover revolutionary AI breakthroughs and cutting-edge technologies that will shape the future",
      category: "AI Innovation",
      type: "Showcase",
      readTime: "15 min",
      trending: true,
      icon: Brain,
      href: "/ai-2025-2026-ultimate-innovation-showcase",
      tags: ["AI", "Innovation", "2025", "2026", "Breakthrough"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quantum Computing 2026 Ultimate Breakthrough",
      description: "Experience quantum supremacy and next-generation quantum technologies that will revolutionize computing",
      category: "Quantum Computing",
      type: "Breakthrough",
      readTime: "20 min",
      trending: true,
      icon: Atom,
      href: "/quantum-computing-2026-ultimate-breakthrough",
      tags: ["Quantum", "Computing", "2026", "Breakthrough", "Technology"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Advanced Automation Solutions 2026 Ultimate",
      description: "Transform your business with intelligent automation and AI-powered workflows for maximum efficiency",
      category: "Automation",
      type: "Solution",
      readTime: "18 min",
      trending: false,
      icon: Bot,
      href: "/advanced-automation-solutions-2026-ultimate",
      tags: ["Automation", "AI", "Business", "Efficiency", "2026"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2026",
      description: "Explore the future of human-computer interaction with advanced neural interface technologies",
      category: "Neural Tech",
      type: "Revolution",
      readTime: "12 min",
      trending: true,
      icon: Zap,
      href: "/neural-interface-revolution-2026",
      tags: ["Neural", "Interface", "Human-Computer", "Revolution"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      title: "Quantum Security Solutions 2026",
      description: "Unbreakable quantum encryption and next-generation security systems for the digital age",
      category: "Security",
      type: "Solution",
      readTime: "14 min",
      trending: false,
      icon: Shield,
      href: "/quantum-security-solutions-2026",
      tags: ["Security", "Quantum", "Encryption", "Protection"],
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      title: "Global AI Consciousness Network",
      description: "Distributed AI consciousness spanning multiple data centers worldwide for collective intelligence",
      category: "AI Innovation",
      type: "Network",
      readTime: "25 min",
      trending: true,
      icon: Globe,
      href: "/global-ai-consciousness-network",
      tags: ["AI", "Consciousness", "Global", "Network", "Intelligence"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'AI Innovation', label: 'AI Innovation' },
    { value: 'Quantum Computing', label: 'Quantum Computing' },
    { value: 'Automation', label: 'Automation' },
    { value: 'Neural Tech', label: 'Neural Tech' },
    { value: 'Security', label: 'Security' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'trending', label: 'Trending' },
    { value: 'alphabetical', label: 'A-Z' },
    { value: 'readTime', label: 'Read Time' }
  ];

  const filteredContent = contentItems
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'trending':
          return b.trending - a.trending;
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return b.id - a.id;
      }
    });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of cutting-edge technology content, research, and innovations
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value} className="bg-slate-800 text-white">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-slate-800 text-white">
                    {option.label}
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
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-r ${item.color} rounded-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  {item.trending && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  )}
                  <span className="px-2 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-300 mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.readTime}
                </div>
                <div className="text-sm text-purple-400 font-medium">
                  {item.category}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    +{item.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No content found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('newest');
              }}
              className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Content
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified about new revolutionary content, breakthrough technologies, and industry insights
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center mx-auto">
              Subscribe to Updates
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget;