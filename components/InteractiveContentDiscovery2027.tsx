import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  Users,
  ArrowRight,
  Brain,
  Atom,
  Zap,
  Shield,
  Database,
  ChevronDown,
  X,
  BookOpen,
  Video,
  FileText,
  Code,
  BarChart3
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video' | 'case-study' | 'guide' | 'demo' | 'whitepaper';
  tags: string[];
  popularity: number;
  readTime: string;
  publishedDate: string;
  thumbnail: string;
  url: string;
}

const InteractiveContentDiscovery2027: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [isVisible, setIsVisible] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    { id: 'all', label: 'All Categories', icon: BookOpen },
    { id: 'ai-2027', label: 'AI 2027', icon: Brain },
    { id: 'quantum', label: 'Quantum Computing', icon: Atom },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'data', label: 'Data Science', icon: Database }
  ];

  const contentTypes = [
    { id: 'all', label: 'All Types', icon: FileText },
    { id: 'article', label: 'Articles', icon: FileText },
    { id: 'video', label: 'Videos', icon: Video },
    { id: 'case-study', label: 'Case Studies', icon: Users },
    { id: 'guide', label: 'Guides', icon: BookOpen },
    { id: 'demo', label: 'Demos', icon: Code },
    { id: 'whitepaper', label: 'Whitepapers', icon: FileText }
  ];

  const sortOptions = [
    { id: 'popularity', label: 'Most Popular', icon: TrendingUp },
    { id: 'recent', label: 'Most Recent', icon: Clock },
    { id: 'rating', label: 'Highest Rated', icon: Star }
  ];

  const sampleContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2027: Revolutionary Breakthroughs in Neural Networks',
      description: 'Explore the latest advancements in AI technology that are reshaping industries worldwide.',
      category: 'ai-2027',
      type: 'article',
      tags: ['AI', 'Neural Networks', 'Machine Learning', '2027'],
      popularity: 95,
      readTime: '8 min',
      publishedDate: '2024-01-15',
      thumbnail: '/images/ai-2027-breakthrough.jpg',
      url: '/articles/ai-2027-revolutionary-breakthroughs'
    },
    {
      id: '2',
      title: 'Quantum Computing Implementation Guide 2027',
      description: 'Complete guide to implementing quantum computing solutions in your organization.',
      category: 'quantum',
      type: 'guide',
      tags: ['Quantum Computing', 'Implementation', 'Guide'],
      popularity: 88,
      readTime: '15 min',
      publishedDate: '2024-01-12',
      thumbnail: '/images/quantum-implementation.jpg',
      url: '/guides/quantum-computing-implementation-2027'
    },
    {
      id: '3',
      title: 'Case Study: Global Bank Quantum AI Transformation',
      description: 'How a Fortune 500 bank achieved 10,000x performance improvement with quantum AI.',
      category: 'ai-2027',
      type: 'case-study',
      tags: ['Case Study', 'Banking', 'Quantum AI', 'Transformation'],
      popularity: 92,
      readTime: '12 min',
      publishedDate: '2024-01-10',
      thumbnail: '/images/bank-transformation.jpg',
      url: '/case-studies/global-bank-quantum-ai-transformation'
    },
    {
      id: '4',
      title: 'Interactive AI Demo: Neural Network Visualization',
      description: 'Experience our AI technology through an interactive demonstration.',
      category: 'ai-2027',
      type: 'demo',
      tags: ['Demo', 'Interactive', 'Neural Networks'],
      popularity: 85,
      readTime: '5 min',
      publishedDate: '2024-01-08',
      thumbnail: '/images/ai-demo.jpg',
      url: '/demos/neural-network-visualization'
    },
    {
      id: '5',
      title: 'The Future of Automation: AI-Driven Workflows',
      description: 'Discover how AI automation is revolutionizing business processes.',
      category: 'automation',
      type: 'video',
      tags: ['Automation', 'AI', 'Workflows', 'Business'],
      popularity: 78,
      readTime: '20 min',
      publishedDate: '2024-01-05',
      thumbnail: '/images/automation-future.jpg',
      url: '/videos/future-automation-ai-workflows'
    },
    {
      id: '6',
      title: 'Quantum Security: Unbreakable Encryption Solutions',
      description: 'Learn about quantum cryptography and its applications in modern security.',
      category: 'security',
      type: 'whitepaper',
      tags: ['Security', 'Quantum', 'Encryption', 'Cryptography'],
      popularity: 82,
      readTime: '25 min',
      publishedDate: '2024-01-03',
      thumbnail: '/images/quantum-security.jpg',
      url: '/whitepapers/quantum-security-encryption'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('content-discovery');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    let filtered = sampleContent;

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

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        case 'rating':
          return b.popularity - a.popularity;
        default:
          return b.popularity - a.popularity;
      }
    });

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, selectedType, sortBy]);

  const getTypeIcon = (type: string) => {
    const typeConfig = contentTypes.find(t => t.id === type);
    return typeConfig ? typeConfig.icon : FileText;
  };

  const getCategoryIcon = (category: string) => {
    const categoryConfig = categories.find(c => c.id === category);
    return categoryConfig ? categoryConfig.icon : BookOpen;
  };

  return (
    <motion.section
      id="content-discovery"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover Revolutionary Content
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore our comprehensive library of AI, quantum computing, and technology resources
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search content, tags, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Advanced Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-700"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                              selectedCategory === category.id
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                          >
                            <category.icon className="w-4 h-4 mr-2" />
                            {category.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Type Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">Content Type</label>
                      <div className="flex flex-wrap gap-2">
                        {contentTypes.map(type => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                              selectedType === type.id
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                          >
                            <type.icon className="w-4 h-4 mr-2" />
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const CategoryIcon = getCategoryIcon(item.category);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Thumbnail */}
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-white">
                      <TypeIcon className="w-12 h-12 mx-auto mb-2" />
                      <div className="font-semibold">{item.type.replace('-', ' ').toUpperCase()}</div>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <div className="flex items-center bg-black/50 px-2 py-1 rounded-full text-white text-xs">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {item.popularity}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CategoryIcon className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-medium">{item.category.replace('-', ' ').toUpperCase()}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{item.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        {new Date(item.publishedDate).toLocaleDateString()}
                      </span>
                      <Link
                        to={item.url}
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group/link"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-4">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedType('all');
                setSortBy('popularity');
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Load More */}
        {filteredContent.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/content-library"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-purple-600 hover:to-pink-600 group"
            >
              Explore Full Library
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default InteractiveContentDiscovery2027;