import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';

const InteractiveContentDiscovery2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTrend, setSelectedTrend] = useState('all');
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'quantum', name: 'Quantum Computing', icon: TrendingUp },
    { id: 'case-studies', name: 'Case Studies', icon: Star },
    { id: 'tutorials', name: 'Tutorials', icon: Clock }
  ];

  const trends = [
    { id: 'all', name: 'All Trends' },
    { id: 'trending', name: 'Trending Now' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'new', name: 'Just Released' },
    { id: 'featured', name: 'Featured' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough 2025",
      description: "Revolutionary advances in artificial consciousness and self-aware AI systems",
      category: "ai",
      trend: "trending",
      readTime: "8 min read",
      rating: 4.9,
      views: "12.5K",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Consciousness", "Breakthrough", "2025"],
      publishedAt: "2025-01-15"
    },
    {
      id: 2,
      title: "Quantum Neural Networks: The Future",
      description: "How quantum computing is revolutionizing neural network architectures",
      category: "quantum",
      trend: "new",
      readTime: "12 min read",
      rating: 4.8,
      views: "8.7K",
      image: "/api/placeholder/400/250",
      tags: ["Quantum", "Neural Networks", "Future Tech"],
      publishedAt: "2025-01-14"
    },
    {
      id: 3,
      title: "Enterprise Automation Success Stories",
      description: "Real-world case studies of companies achieving 300% efficiency gains",
      category: "case-studies",
      trend: "popular",
      readTime: "15 min read",
      rating: 4.9,
      views: "25.3K",
      image: "/api/placeholder/400/250",
      tags: ["Automation", "Enterprise", "Success Stories"],
      publishedAt: "2025-01-12"
    },
    {
      id: 4,
      title: "Building AI-Powered Applications",
      description: "Complete tutorial on creating intelligent applications from scratch",
      category: "tutorials",
      trend: "featured",
      readTime: "20 min read",
      rating: 4.7,
      views: "18.9K",
      image: "/api/placeholder/400/250",
      tags: ["Tutorial", "AI Development", "Applications"],
      publishedAt: "2025-01-10"
    },
    {
      id: 5,
      title: "The Future of Work: AI Integration",
      description: "How AI is transforming workplace productivity and collaboration",
      category: "ai",
      trend: "trending",
      readTime: "10 min read",
      rating: 4.6,
      views: "15.2K",
      image: "/api/placeholder/400/250",
      tags: ["Future of Work", "Productivity", "AI Integration"],
      publishedAt: "2025-01-08"
    },
    {
      id: 6,
      title: "Advanced Automation Strategies",
      description: "Proven strategies for implementing enterprise-wide automation",
      category: "automation",
      trend: "popular",
      readTime: "14 min read",
      rating: 4.8,
      views: "22.1K",
      image: "/api/placeholder/400/250",
      tags: ["Automation", "Strategy", "Enterprise"],
      publishedAt: "2025-01-05"
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesTrend = selectedTrend === 'all' || item.trend === selectedTrend;
    
    return matchesSearch && matchesCategory && matchesTrend;
  });

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsSearching(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        handleSearch(searchQuery);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Interactive Content Discovery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Amazing
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Content</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our vast library of AI insights, tutorials, case studies, and breakthrough technologies
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for content, topics, or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {isSearching && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
              </div>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-300" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-slate-800">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Trend Filter */}
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-gray-300" />
              <select
                value={selectedTrend}
                onChange={(e) => setSelectedTrend(e.target.value)}
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {trends.map((trend) => (
                  <option key={trend.id} value={trend.id} className="bg-slate-800">
                    {trend.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-gray-300 text-sm">
            Showing {filteredContent.length} of {contentItems.length} results
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold rounded-full">
                    {item.trend}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center text-white text-sm">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400" />
                  {item.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {item.views} views
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/content/${item.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Load More Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No content found</h3>
            <p className="text-gray-300 mb-8">Try adjusting your search terms or filters</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTrend('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2025;