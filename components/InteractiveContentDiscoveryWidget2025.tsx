import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, BookOpen, Video, FileText, Users } from 'lucide-react';

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Content', icon: BookOpen },
    { id: 'ai-2025', name: 'AI 2025', icon: TrendingUp },
    { id: 'quantum', name: 'Quantum Computing', icon: Star },
    { id: 'automation', name: 'Automation', icon: Clock },
    { id: 'case-studies', name: 'Case Studies', icon: FileText },
    { id: 'tutorials', name: 'Tutorials', icon: Video },
    { id: 'community', name: 'Community', icon: Users }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025: The Ultimate Breakthrough Guide",
      description: "Comprehensive guide to AI technologies that will revolutionize your business in 2025",
      category: 'ai-2025',
      type: 'guide',
      rating: 4.9,
      views: 12500,
      readTime: '15 min',
      trending: true,
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: "Quantum Computing Solutions for Enterprise",
      description: "How quantum computing can solve complex business problems with exponential speed",
      category: 'quantum',
      type: 'article',
      rating: 4.8,
      views: 8900,
      readTime: '12 min',
      trending: true,
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: "Automation Success Stories: 300% ROI Case Study",
      description: "Real-world examples of companies achieving massive ROI through intelligent automation",
      category: 'case-studies',
      type: 'case-study',
      rating: 4.9,
      views: 15600,
      readTime: '8 min',
      trending: false,
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: "Neural Network Implementation Tutorial",
      description: "Step-by-step guide to implementing neural networks for business applications",
      category: 'tutorials',
      type: 'tutorial',
      rating: 4.7,
      views: 6700,
      readTime: '25 min',
      trending: false,
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: "Community Discussion: AI Ethics in Business",
      description: "Join the conversation about ethical AI implementation in modern businesses",
      category: 'community',
      type: 'discussion',
      rating: 4.6,
      views: 3200,
      readTime: '5 min',
      trending: false,
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: "Advanced Automation Workflows",
      description: "Complex automation patterns that can transform your business processes",
      category: 'automation',
      type: 'guide',
      rating: 4.8,
      views: 9800,
      readTime: '18 min',
      trending: true,
      featured: false,
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return b.views - a.views;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return BookOpen;
      case 'article': return FileText;
      case 'case-study': return TrendingUp;
      case 'tutorial': return Video;
      case 'discussion': return Users;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'from-blue-500 to-cyan-500';
      case 'article': return 'from-green-500 to-emerald-500';
      case 'case-study': return 'from-purple-500 to-pink-500';
      case 'tutorial': return 'from-orange-500 to-red-500';
      case 'discussion': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI guides, case studies, tutorials, 
            and community discussions to accelerate your business transformation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, guides, tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="trending">Trending</option>
              <option value="rating">Highest Rated</option>
              <option value="views">Most Viewed</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sortedContent.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            const typeColor = getTypeColor(item.type);
            
            return (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                {/* Content Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${typeColor} flex items-center justify-center`}>
                    <TypeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.trending && (
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs font-semibold rounded-full">
                        Trending
                      </span>
                    )}
                    {item.featured && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Info */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Content Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {item.rating}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div>{item.views.toLocaleString()} views</div>
                </div>

                {/* Action Button */}
                <Link
                  to={`/content/${item.id}`}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/30">
            Load More Content
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;