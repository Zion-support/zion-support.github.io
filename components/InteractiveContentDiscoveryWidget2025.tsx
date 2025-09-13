import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowRight, 
  Star, 
  Clock, 
  TrendingUp,
  Brain,
  Zap,
  Shield,
  Globe,
  Cpu,
  Database
} from 'lucide-react';

export default function InteractiveContentDiscoveryWidget2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Content', icon: <Grid className="h-4 w-4" /> },
    { id: 'neural', name: 'Neural AI', icon: <Brain className="h-4 w-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="h-4 w-4" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="h-4 w-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="h-4 w-4" /> },
    { id: 'analytics', name: 'Analytics', icon: <Database className="h-4 w-4" /> },
    { id: 'global', name: 'Global Solutions', icon: <Globe className="h-4 w-4" /> }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Neural Interface Revolution 2025",
      description: "Breakthrough brain-computer interface technology enabling direct neural communication with AI systems.",
      category: "neural",
      rating: 4.9,
      views: 12500,
      trending: true,
      image: "🧠",
      tags: ["Neural AI", "BCI", "Consciousness", "Innovation"]
    },
    {
      id: 2,
      title: "Quantum AI Computing Solutions",
      description: "Revolutionary quantum-powered AI systems that process information at unprecedented speeds.",
      category: "quantum",
      rating: 4.8,
      views: 9800,
      trending: true,
      image: "⚛️",
      tags: ["Quantum", "Computing", "AI", "Performance"]
    },
    {
      id: 3,
      title: "Autonomous AI Agents Platform",
      description: "Self-managing AI systems that operate independently while maintaining ethical boundaries.",
      category: "automation",
      rating: 4.7,
      views: 15600,
      trending: false,
      image: "🤖",
      tags: ["Automation", "AI Agents", "Autonomous", "Ethics"]
    },
    {
      id: 4,
      title: "Advanced Cybersecurity AI",
      description: "Next-generation AI-powered security systems for comprehensive digital asset protection.",
      category: "security",
      rating: 4.9,
      views: 11200,
      trending: true,
      image: "🛡️",
      tags: ["Security", "Cybersecurity", "AI", "Protection"]
    },
    {
      id: 5,
      title: "Predictive Analytics Engine",
      description: "Advanced predictive models with 99.7% accuracy for forecasting trends and behaviors.",
      category: "analytics",
      rating: 4.8,
      views: 8900,
      trending: false,
      image: "📊",
      tags: ["Analytics", "Prediction", "Data", "Insights"]
    },
    {
      id: 6,
      title: "Global AI Network Infrastructure",
      description: "Distributed AI systems operating across global networks for seamless collaboration.",
      category: "global",
      rating: 4.6,
      views: 7400,
      trending: false,
      image: "🌐",
      tags: ["Global", "Network", "Distributed", "Collaboration"]
    }
  ];

  const [filteredContent, setFilteredContent] = useState(contentItems);

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
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 border border-white/20">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Discover AI Content
        </h2>
        <p className="text-gray-300 text-lg">
          Explore our comprehensive collection of AI technologies, solutions, and innovations
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search AI content, technologies, or solutions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-slate-800">
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="trending" className="bg-slate-800">Trending</option>
              <option value="rating" className="bg-slate-800">Highest Rated</option>
              <option value="views" className="bg-slate-800">Most Viewed</option>
              <option value="newest" className="bg-slate-800">Newest</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid/List */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{item.image}</div>
              <div className="flex items-center space-x-2">
                {item.trending && (
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium">
                    Trending
                  </span>
                )}
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white ml-1 text-sm">{item.rating}</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>

            <p className="text-gray-300 mb-4 text-sm">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {item.views.toLocaleString()} views
              </div>
              <Link
                href={`/ai-2025-ultimate-technology-showcase#${item.id}`}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
          <p className="text-gray-400">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link
          href="/ai-2025-ultimate-technology-showcase"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
        >
          View All Content
          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}