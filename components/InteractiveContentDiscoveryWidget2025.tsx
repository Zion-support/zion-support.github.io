import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  Users, 
  Brain, 
  Atom,
  Cog,
  Globe,
  Zap,
  ArrowRight,
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-predictions', label: 'AI Predictions', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum-computing', label: 'Quantum Computing', icon: Atom, color: 'from-cyan-500 to-blue-500' },
    { id: 'automation', label: 'Automation', icon: Cog, color: 'from-green-500 to-emerald-500' },
    { id: 'case-studies', label: 'Case Studies', icon: BookOpen, color: 'from-orange-500 to-red-500' },
    { id: 'tutorials', label: 'Tutorials', icon: Play, color: 'from-yellow-500 to-orange-500' },
    { id: 'insights', label: 'Insights', icon: TrendingUp, color: 'from-indigo-500 to-purple-500' }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025-2030: Comprehensive Future Predictions",
      description: "Revolutionary predictions shaping the next decade of artificial intelligence, including breakthrough technologies and industry transformations.",
      category: "ai-predictions",
      type: "Interactive Report",
      duration: "45 min read",
      views: "12.5K",
      likes: "2.3K",
      trending: true,
      featured: true,
      tags: ["AI", "Future", "Predictions", "Technology"],
      image: "/images/ai-predictions-2025.jpg",
      url: "/ai-2025-2030-predictions",
      published: "2025-01-15"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs 2025",
      description: "Revolutionary quantum technologies reshaping computation and cryptography with real-world applications achieving quantum advantage.",
      category: "quantum-computing",
      type: "Technical Guide",
      duration: "30 min read",
      views: "8.7K",
      likes: "1.8K",
      trending: true,
      featured: true,
      tags: ["Quantum", "Computing", "Breakthroughs", "Technology"],
      image: "/images/quantum-computing-2025.jpg",
      url: "/quantum-computing-breakthroughs-2025",
      published: "2025-01-12"
    },
    {
      id: 3,
      title: "Advanced Automation Solutions 2025",
      description: "Revolutionary automation technologies transforming business operations with unprecedented efficiency and ROI through intelligent process automation.",
      category: "automation",
      type: "Implementation Guide",
      duration: "35 min read",
      views: "15.2K",
      likes: "3.1K",
      trending: true,
      featured: true,
      tags: ["Automation", "Business", "Efficiency", "ROI"],
      image: "/images/automation-solutions-2025.jpg",
      url: "/advanced-automation-solutions-2025",
      published: "2025-01-10"
    },
    {
      id: 4,
      title: "AI Implementation Success Stories",
      description: "Real-world case studies showcasing 2,500% ROI improvements through strategic AI implementation across various industries.",
      category: "case-studies",
      type: "Case Study",
      duration: "25 min read",
      views: "6.8K",
      likes: "1.4K",
      trending: false,
      featured: false,
      tags: ["AI", "Case Study", "ROI", "Success"],
      image: "/images/ai-success-stories.jpg",
      url: "/ai-implementation-success-stories",
      published: "2025-01-08"
    },
    {
      id: 5,
      title: "Quantum Machine Learning Tutorial",
      description: "Step-by-step guide to implementing quantum machine learning algorithms for exponential speedup in AI training.",
      category: "tutorials",
      type: "Tutorial",
      duration: "60 min read",
      views: "4.2K",
      likes: "890",
      trending: false,
      featured: false,
      tags: ["Quantum", "Machine Learning", "Tutorial", "AI"],
      image: "/images/quantum-ml-tutorial.jpg",
      url: "/quantum-machine-learning-tutorial",
      published: "2025-01-05"
    },
    {
      id: 6,
      title: "Future of Work: AI-Human Collaboration",
      description: "Insights into how AI will transform the workplace and create new opportunities for human-AI collaboration.",
      category: "insights",
      type: "Insight Report",
      duration: "20 min read",
      views: "9.1K",
      likes: "2.1K",
      trending: true,
      featured: false,
      tags: ["Future", "Work", "AI", "Collaboration"],
      image: "/images/future-work-ai.jpg",
      url: "/future-work-ai-collaboration",
      published: "2025-01-03"
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending - a.trending || b.views - a.views;
      case 'popular':
        return b.views - a.views;
      case 'recent':
        return new Date(b.published).getTime() - new Date(a.published).getTime();
      case 'likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = contentCategories.find(cat => cat.id === categoryId);
    return category?.icon || Globe;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = contentCategories.find(cat => cat.id === categoryId);
    return category?.color || 'from-gray-500 to-gray-600';
  };

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-6"
          >
            <Search className="w-4 h-4 mr-2" />
            Interactive Content Discovery
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our comprehensive library of AI insights, quantum computing breakthroughs, 
            automation solutions, and cutting-edge technology content.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {contentCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sort Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-semibold">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
                <option value="recent">Most Recent</option>
                <option value="likes">Most Liked</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-300">
                {filteredContent.length} content {filteredContent.length === 1 ? 'item' : 'items'} found
              </span>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                {isExpanded ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sortedContent.slice(0, isExpanded ? sortedContent.length : 6).map((content, index) => {
              const CategoryIcon = getCategoryIcon(content.category);
              const categoryColor = getCategoryColor(content.category);
              
              return (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Content Image */}
                  <div className="relative h-48 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${categoryColor} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CategoryIcon className="w-16 h-16 text-white/60" />
                    </div>
                    
                    {/* Featured Badge */}
                    {content.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Trending Badge */}
                    {content.trending && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                        <Heart className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                        <Share2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex items-center px-3 py-1 bg-gradient-to-r ${categoryColor} text-white text-xs font-semibold rounded-full`}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {contentCategories.find(cat => cat.id === content.category)?.label}
                      </div>
                      <span className="text-gray-400 text-sm">{content.type}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {content.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {content.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {content.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {content.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {content.likes}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {content.duration}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        to={content.url}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read More
                      </Link>
                      <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our content library is constantly growing. Request specific content or get personalized recommendations from our AI-powered discovery engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/content-request"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Request Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/personalized-recommendations"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Get Recommendations
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InteractiveContentDiscoveryWidget2025;