"use client";
import Link from 'next/link';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Search
  Filter
  Star
  Clock
  TrendingUp
  Users
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Target,
  Award
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedTypesetSelectedType] = useState('all');
  const [sortBysetSortBy] = useState('trending');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const categories = [
    { id: 'all'label: 'All Content'icon: <Sparkles className="w-4 h-4" /> },
    { id: 'ai-innovations'label: 'AI Innovations'icon: <Brain className="w-4 h-4" /> },
    { id: 'tools'label: 'AI Tools'icon: <Zap className="w-4 h-4" /> },
    { id: 'predictions'label: 'Future Predictions'icon: <Target className="w-4 h-4" /> },
    { id: 'case-studies'label: 'Case Studies'icon: <Award className="w-4 h-4" /> },
    { id: 'tutorials'label: 'Tutorials'icon: <BookOpen className="w-4 h-4" /> }
  ];

  const contentTypes = [
    { id: 'all'label: 'All Types' },
    { id: 'articles'label: 'Articles' },
    { id: 'videos'label: 'Videos' },
    { id: 'tools'label: 'Tools' },
    { id: 'guides'label: 'Guides' },
    { id: 'reports'label: 'Reports' }
  ];

  const sortOptions = [
    { id: 'trending'label: 'Trending'icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'newest'label: 'Newest'icon: <Clock className="w-4 h-4" /> },
    { id: 'popular'label: 'Most Popular'icon: <Users className="w-4 h-4" /> },
    { id: 'rating'label: 'Highest Rated'icon: <Star className="w-4 h-4" /> }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Neural Quantum Computing: The Next Revolution",
      description: "Explore how quantum computing is revolutionizing AI and what it means for the future of technology.",
      category: "ai-innovations",
      type: "articles",
      rating: 4.9,
      views: 12500,
      likes: 890,
      readTime: "12 min",
      author: "Dr. Sarah Chen",
      publishedAt: "2025-01-15",
      image: "/api/placeholder/400/250",
      tags: ["quantum computing"AI"innovation"technology"],
      trending: true,
      featured: true
    },
    {
      id: 2,
      title: "AI Content Generator Pro - Complete Demo",
      description: "Watch our comprehensive demo of the most advanced AI content generation tool available today.",
      category: "tools",
      type: "videos",
      rating: 4.8,
      views: 8900,
      likes: 650,
      readTime: "8 min",
      author: "Tech Review Team",
      publishedAt: "2025-01-14",
      image: "/api/placeholder/400/250",
      tags: ["content generation"AI tools"demo"productivity"],
      trending: true,
      featured: false
    },
    {
      id: 3,
      title: "2026 AI Predictions: What to Expect",
      description: "Our expert panel shares their predictions for AI developments in 2026 and beyond.",
      category: "predictions",
      type: "articles",
      rating: 4.7,
      views: 15600,
      likes: 1200,
      readTime: "15 min",
      author: "AI Research Institute",
      publishedAt: "2025-01-13",
      image: "/api/placeholder/400/250",
      tags: ["predictions"future"AI trends"forecasting"],
      trending: false,
      featured: true
    },
    {
      id: 4,
      title: "Fortune 500 AI Transformation Case Study",
      description: "How a Fortune 500 company achieved $50M in savings using our AI solutions.",
      category: "case-studies",
      type: "reports",
      rating: 4.9,
      views: 9800,
      likes: 750,
      readTime: "20 min",
      author: "Business Solutions Team",
      publishedAt: "2025-01-12",
      image: "/api/placeholder/400/250",
      tags: ["case study"ROI"transformation"enterprise"],
      trending: false,
      featured: false
    },
    {
      id: 5,
      title: "Getting Started with AI: Complete Tutorial",
      description: "A comprehensive beginner's guide to implementing AI in your business.",
      category: "tutorials",
      type: "guides",
      rating: 4.6,
      views: 11200,
      likes: 580,
      readTime: "25 min",
      author: "AI Education Team",
      publishedAt: "2025-01-11",
      image: "/api/placeholder/400/250",
      tags: ["tutorial"beginner"implementation"guide"],
      trending: false,
      featured: false
    },
    {
      id: 6,
      title: "Conscious AI Systems: The Future is Here",
      description: "Discover the latest developments in conscious AI and what it means for humanity.",
      category: "ai-innovations",
      type: "articles",
      rating: 4.8,
      views: 18700,
      likes: 1400,
      readTime: "18 min",
      author: "Dr. Michael Rodriguez",
      publishedAt: "2025-01-10",
      image: "/api/placeholder/400/250",
      tags: ["conscious AI"future"ethics"technology"],
      trending: true,
      featured: true
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

    switch (sortBy) {
      case 'newest':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'popular':
        return b.views - a.views;
      case 'rating':
        return b.rating - a.rating;
      case 'trending':
      default:
        return b.trending ? 1 : -1;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4 text-blue-400" />
            <span>Interactive Content Discovery</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Your Perfect
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              AI Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find exactly what you're looking for with our intelligent content discovery system. 
            Filter by categorytypeand trending topics.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for AI contentoolspredictionsor topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category.icon}
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Content Type</label>
              <div className="flex flex-wrap gap-2">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedType === type.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Sort By</label>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      sortBy === option.id
                        ? 'bg-pink-500 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {option.icon}
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedContent.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial={{ opacity: 0scale: 0.9 }}
                animate={{ opacity: 1scale: 1 }}
                exit={{ opacity: 0scale: 0.9 }}
                whileHover={{ scale: 1.02y: -5 }}
                className="group"
              >
                <Link href={`/content/${item.id}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      {item.featured && (
                        <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </div>
                      )}
                      {item.trending && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          TRENDING
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                          <span>•</span>
                          <span className="capitalize">{item.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(03).map((tagindex) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{item.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{item.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </div>

                      {/* Author and Actions */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-300">
                          by <span className="font-semibold text-white">{item.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                            <Heart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            <Sparkles className="w-5 h-5" />
            <span>Load More Content</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InteractiveContentDiscoveryWidget2025;