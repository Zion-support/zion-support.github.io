import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight, 
  Sparkles,
  Brain,
  Cpu,
  Zap,
  Eye,
  Heart,
  Share2,
  BookOpen,
  Play,
  Download
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Sparkles, count: 1247 },
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: Brain, count: 312 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Cpu, count: 189 },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Zap, count: 156 },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: Brain, count: 134 },
    { id: 'future-predictions', name: 'Future Predictions', icon: TrendingUp, count: 358 },
    { id: 'case-studies', name: 'Case Studies', icon: BookOpen, count: 98 }
  ];

  const timeframes = [
    { id: 'all', name: 'All Time' },
    { id: 'today', name: 'Today' },
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'year', name: 'This Year' }
  ];

  const sortOptions = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'newest', name: 'Newest', icon: Clock },
    { id: 'popular', name: 'Most Popular', icon: Star },
    { id: 'relevance', name: 'Most Relevant', icon: Search }
  ];

  const trendingContent = [
    {
      id: 1,
      title: "AI 2025: The Complete Neural Network Revolution",
      description: "Comprehensive analysis of next-generation neural networks and their impact on industries worldwide.",
      category: 'ai-breakthroughs',
      readTime: '12 min',
      views: 45000,
      likes: 3200,
      rating: 4.9,
      trending: true,
      publishedAt: '2025-01-15',
      tags: ['AI', 'Neural Networks', 'Revolution', '2025'],
      image: '/api/placeholder/300/200',
      author: 'Dr. Sarah Chen'
    },
    {
      id: 2,
      title: "Quantum Supremacy 2026: Error-Corrected Quantum Computers",
      description: "Deep dive into quantum computing breakthroughs and the development of error-corrected quantum systems.",
      category: 'quantum-computing',
      readTime: '18 min',
      views: 38000,
      likes: 2800,
      rating: 4.8,
      trending: true,
      publishedAt: '2025-01-14',
      tags: ['Quantum Computing', 'Error Correction', '2026'],
      image: '/api/placeholder/300/200',
      author: 'Prof. Michael Rodriguez'
    },
    {
      id: 3,
      title: "Autonomous AI Systems: Self-Managing Networks of the Future",
      description: "Explore how AI systems will become fully autonomous and self-optimizing by 2027.",
      category: 'autonomous-systems',
      readTime: '15 min',
      views: 32000,
      likes: 2400,
      rating: 4.7,
      trending: true,
      publishedAt: '2025-01-13',
      tags: ['Autonomous Systems', 'Self-Managing', 'AI'],
      image: '/api/placeholder/300/200',
      author: 'Dr. Alex Thompson'
    },
    {
      id: 4,
      title: "Neural Interface Breakthrough: Brain-Computer Integration 2028",
      description: "Revolutionary insights into neural interfaces and direct brain-computer communication.",
      category: 'neural-interfaces',
      readTime: '22 min',
      views: 28000,
      likes: 2100,
      rating: 4.6,
      trending: false,
      publishedAt: '2025-01-12',
      tags: ['Neural Interfaces', 'Brain-Computer', '2028'],
      image: '/api/placeholder/300/200',
      author: 'Dr. Elena Volkov'
    },
    {
      id: 5,
      title: "The Singularity Horizon: AGI Predictions for 2030",
      description: "Comprehensive analysis of artificial general intelligence development and singularity predictions.",
      category: 'future-predictions',
      readTime: '35 min',
      views: 55000,
      likes: 4200,
      rating: 4.9,
      trending: true,
      publishedAt: '2025-01-11',
      tags: ['AGI', 'Singularity', 'Predictions', '2030'],
      image: '/api/placeholder/300/200',
      author: 'Dr. James Wilson'
    },
    {
      id: 6,
      title: "Quantum-AI Fusion: The Next Computing Paradigm",
      description: "Exploring the revolutionary fusion of quantum computing and artificial intelligence.",
      category: 'quantum-computing',
      readTime: '20 min',
      views: 25000,
      likes: 1800,
      rating: 4.5,
      trending: false,
      publishedAt: '2025-01-10',
      tags: ['Quantum-AI', 'Fusion', 'Computing'],
      image: '/api/placeholder/300/200',
      author: 'Dr. Maria Santos'
    }
  ];

  const [filteredContent, setFilteredContent] = useState(trendingContent);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let filtered = trendingContent;
      
      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(content => content.category === selectedCategory);
      }
      
      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter(content => 
          content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }
      
      // Sort content
      switch (sortBy) {
        case 'newest':
          filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
          break;
        case 'popular':
          filtered.sort((a, b) => b.views - a.views);
          break;
        case 'relevance':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        default: // trending
          filtered.sort((a, b) => {
            if (a.trending && !b.trending) return -1;
            if (!a.trending && b.trending) return 1;
            return b.views - a.views;
          });
      }
      
      setFilteredContent(filtered);
      setIsLoading(false);
    }, 500);
  }, [searchQuery, selectedCategory, selectedTimeframe, sortBy]);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 mb-6">
            <Search className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-white">INTERACTIVE CONTENT DISCOVERY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Your Next
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Breakthrough Insight
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Use our intelligent content discovery system to find the most relevant AI breakthroughs, 
            quantum computing insights, and future technology predictions tailored to your interests.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Search Content</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for AI breakthroughs, quantum computing, predictions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-gray-800">
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id} className="bg-gray-800">
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="text-gray-400 mt-4">Discovering amazing content...</p>
          </div>
        )}

        {/* Content Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((content) => (
              <div
                key={content.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {content.trending && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      TRENDING
                    </span>
                  </div>
                )}
                
                <div className="relative">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Download className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded">
                      {categories.find(cat => cat.id === content.category)?.name}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{content.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {content.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {content.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{content.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{content.likes.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{content.rating}</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {content.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-gray-300 text-sm">{content.author}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/content/${content.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Read Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredContent.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No content found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse different categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSortBy('trending');
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {!isLoading && filteredContent.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Discover More Content
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;