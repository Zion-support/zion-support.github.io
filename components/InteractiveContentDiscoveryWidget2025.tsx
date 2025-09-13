import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, Users, TrendingUp, Brain, Zap, Atom, Bot, ChevronRight, X } from 'lucide-react';

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', label: 'All Content', icon: Brain },
    { id: 'ai', label: 'AI Breakthroughs', icon: Brain },
    { id: 'quantum', label: 'Quantum Computing', icon: Atom },
    { id: 'automation', label: 'Automation', icon: Bot },
    { id: 'predictions', label: 'Predictions', icon: TrendingUp },
    { id: 'technologies', label: 'Technologies', icon: Zap }
  ];

  const years = [
    { id: 'all', label: 'All Years' },
    { id: '2025', label: '2025' },
    { id: '2026', label: '2026' },
    { id: '2027', label: '2027' },
    { id: '2028', label: '2028' },
    { id: '2029', label: '2029' },
    { id: '2030', label: '2030' }
  ];

  const contentData = [
    {
      id: 1,
      title: "AI 2025: Neural Synthesis Breakthrough",
      description: "Revolutionary neural synthesis technologies that will enable AI systems to think and reason like humans.",
      category: "ai",
      year: "2025",
      readTime: "15 min",
      views: "2.5M",
      trending: true,
      tags: ["Neural Networks", "AI 2025", "Breakthrough"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions 2025",
      description: "Comprehensive quantum computing solutions including error-corrected quantum computers and quantum machine learning.",
      category: "quantum",
      year: "2025",
      readTime: "18 min",
      views: "3.2M",
      trending: true,
      tags: ["Quantum Computing", "Solutions", "2025"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Advanced Automation Systems 2025",
      description: "Intelligent process automation and autonomous decision systems that will transform business operations.",
      category: "automation",
      year: "2025",
      readTime: "20 min",
      views: "4.1M",
      trending: false,
      tags: ["Automation", "Systems", "2025"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "AI 2026: Quantum-AI Fusion",
      description: "Breakthrough quantum-AI fusion technologies that will enable unprecedented computational power.",
      category: "ai",
      year: "2026",
      readTime: "22 min",
      views: "5.7M",
      trending: true,
      tags: ["Quantum AI", "Fusion", "2026"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Future Technology Predictions 2027-2030",
      description: "Comprehensive predictions for technology development from 2027 to 2030, including AI, quantum, and space tech.",
      category: "predictions",
      year: "2027",
      readTime: "25 min",
      views: "6.8M",
      trending: true,
      tags: ["Predictions", "Future", "Technology"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "Neural Interface Technologies 2028",
      description: "Revolutionary neural interface technologies that will enable direct brain-computer communication.",
      category: "technologies",
      year: "2028",
      readTime: "19 min",
      views: "3.9M",
      trending: false,
      tags: ["Neural Interface", "Technology", "2028"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 7,
      title: "AI 2029: Transcendent Intelligence",
      description: "The emergence of transcendent AI intelligence that surpasses human cognitive abilities in every domain.",
      category: "ai",
      year: "2029",
      readTime: "28 min",
      views: "7.2M",
      trending: true,
      tags: ["Transcendent", "Intelligence", "2029"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 8,
      title: "Quantum Internet Infrastructure 2030",
      description: "Next-generation quantum internet infrastructure enabling secure quantum communication globally.",
      category: "quantum",
      year: "2030",
      readTime: "24 min",
      views: "4.5M",
      trending: true,
      tags: ["Quantum Internet", "Infrastructure", "2030"],
      image: "/api/placeholder/300/200"
    }
  ];

  useEffect(() => {
    let filtered = contentData;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by year
    if (selectedYear !== 'all') {
      filtered = filtered.filter(item => item.year === selectedYear);
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, selectedYear]);

  const getCategoryIcon = (category: string) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.icon : Brain;
  };

  const getCategoryLabel = (category: string) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.label : 'AI Breakthroughs';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most relevant content for your interests. Use our intelligent search and filtering 
            system to find exactly what you're looking for.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            selectedCategory === category.id
                              ? 'bg-purple-600 text-white'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {category.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Year</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {years.map((year) => (
                      <button
                        key={year.id}
                        onClick={() => setSelectedYear(year.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedYear === year.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        {year.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-300">
            Showing {filteredContent.length} result{filteredContent.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== 'all' && ` in ${getCategoryLabel(selectedCategory)}`}
            {selectedYear !== 'all' && ` from ${selectedYear}`}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => {
            const CategoryIcon = getCategoryIcon(item.category);
            return (
              <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  {item.trending && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Trending
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <CategoryIcon className="w-4 h-4 mr-1" />
                    {item.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.views} views
                    </div>
                  </div>
                  
                  <Link 
                    to={`/content/${item.id}`}
                    className="group/link inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">No content found</h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedYear('all');
              }}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our content library is constantly expanding. Request specific content or topics 
            you'd like to see covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/content-request"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Brain className="w-6 h-6 mr-2" />
              Request Content
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/newsletter"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <TrendingUp className="w-6 h-6 mr-2" />
              Get Updates
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;