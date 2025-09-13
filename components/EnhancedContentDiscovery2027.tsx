import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Clock, 
  TrendingUp, 
  Star, 
  ArrowRight,
  Tag,
  Calendar,
  Eye,
  Heart
} from 'lucide-react';

const EnhancedContentDiscovery2027: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid },
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: TrendingUp },
    { id: 'tech-showcases', name: 'Tech Showcases', icon: Star },
    { id: 'interactive-demos', name: 'Interactive Demos', icon: Eye },
    { id: 'future-predictions', name: 'Future Predictions', icon: Calendar }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Neural Interface Revolution 2027",
      description: "Explore the latest breakthroughs in brain-computer interfaces and their transformative impact on human-AI interaction.",
      category: "ai-breakthroughs",
      type: "Interactive Demo",
      readTime: "8 min read",
      views: "12.5k",
      likes: 892,
      trending: true,
      featured: true,
      image: "/api/placeholder/400/250",
      tags: ["Neural Networks", "BCI", "AI Revolution", "2027 Tech"]
    },
    {
      id: 2,
      title: "Quantum AI Computing Showcase",
      description: "Dive deep into quantum-enhanced artificial intelligence and discover how it's revolutionizing computational power.",
      category: "tech-showcases",
      type: "Technology Showcase",
      readTime: "12 min read",
      views: "8.9k",
      likes: 654,
      trending: true,
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["Quantum Computing", "AI Acceleration", "Future Tech"]
    },
    {
      id: 3,
      title: "Autonomous AI Systems Demo",
      description: "Experience self-evolving AI systems that can learn, adapt, and make decisions independently.",
      category: "interactive-demos",
      type: "Interactive Experience",
      readTime: "15 min demo",
      views: "15.2k",
      likes: 1203,
      trending: false,
      featured: true,
      image: "/api/placeholder/400/250",
      tags: ["Autonomous AI", "Self-Learning", "Machine Intelligence"]
    },
    {
      id: 4,
      title: "Edge AI Processing Networks",
      description: "Discover how distributed AI processing at the edge is enabling ultra-low latency applications.",
      category: "tech-showcases",
      type: "Technical Deep Dive",
      readTime: "10 min read",
      views: "6.7k",
      likes: 445,
      trending: false,
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["Edge Computing", "Real-time AI", "Network Processing"]
    },
    {
      id: 5,
      title: "Global AI Network Predictions",
      description: "Future vision of interconnected AI systems creating a worldwide intelligence network by 2030.",
      category: "future-predictions",
      type: "Future Vision",
      readTime: "6 min read",
      views: "9.8k",
      likes: 723,
      trending: true,
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["Global Networks", "AI Future", "2030 Predictions"]
    },
    {
      id: 6,
      title: "AI-Powered Security Revolution",
      description: "Advanced AI systems protecting against evolving cyber threats with predictive capabilities.",
      category: "ai-breakthroughs",
      type: "Security Innovation",
      readTime: "9 min read",
      views: "11.3k",
      likes: 856,
      trending: false,
      featured: true,
      image: "/api/placeholder/400/250",
      tags: ["AI Security", "Cybersecurity", "Threat Detection"]
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || b.views.localeCompare(a.views);
      case 'popular':
        return parseInt(b.views.replace('k', '000').replace('.', '')) - parseInt(a.views.replace('k', '000').replace('.', ''));
      case 'latest':
        return b.id - a.id;
      case 'likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge AI technologies, interactive demonstrations, and future predictions 
            that are reshaping our world.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
                <option value="latest">Latest</option>
                <option value="likes">Most Liked</option>
              </select>

              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${sortBy}-${viewMode}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }
          >
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  viewMode === 'list' ? 'flex gap-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {viewMode === 'grid' ? (
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    )}

                    {/* Trending Badge */}
                    {item.trending && (
                      <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 ml-2">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    )}

                    {/* Content Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🚀</div>
                        <div className="text-gray-300 text-sm">{item.type}</div>
                      </div>
                    </div>

                    {/* Content Info */}
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 2 && (
                        <span className="text-gray-400 text-xs">+{item.tags.length - 2} more</span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {item.likes}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                      Explore Content
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  // List View
                  <>
                    <div className="w-32 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🚀</div>
                        <div className="text-gray-300 text-xs">{item.type}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        {item.featured && (
                          <div className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                        )}
                        {item.trending && (
                          <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </div>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
                          Explore
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Load More Content
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentDiscovery2027;