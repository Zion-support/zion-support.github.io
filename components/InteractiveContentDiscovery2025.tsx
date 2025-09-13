import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star, 
  Zap, 
  Brain, 
  Cpu,
  Globe,
  Rocket,
  Target,
  Award,
  Users,
  ChevronDown,
  X
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'guide' | 'case-study' | 'tool' | 'video' | 'whitepaper' | 'webinar';
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  tags: string[];
  featured: boolean;
  trending: boolean;
  new: boolean;
  views: number;
  likes: number;
  publishedAt: string;
  author: string;
  url: string;
  estimatedROI?: string;
  rating?: number;
}

const contentData: ContentItem[] = [
  {
    id: 'ai-2025-autonomous-operations',
    title: 'AI 2025: Complete Autonomous Operations Implementation Guide',
    description: 'Master the revolutionary AI 2025 autonomous operations framework delivering 2,500-5,000% ROI with 99.9% accuracy and 10,000x faster processing speeds.',
    category: 'AI Implementation',
    type: 'guide',
    readTime: '45 min',
    difficulty: 'expert',
    tags: ['AI 2025', 'Autonomous Operations', 'ROI 2500%', '99.9% Accuracy', 'Implementation'],
    featured: true,
    trending: true,
    new: true,
    views: 15420,
    likes: 892,
    publishedAt: '2025-01-15',
    author: 'Dr. Sarah Chen',
    url: '/guides/ai-2025-autonomous-operations',
    estimatedROI: '2,500-5,000%',
    rating: 4.9
  },
  {
    id: 'quantum-neural-fusion-2026',
    title: 'Quantum Neural Fusion: The 2026 Breakthrough Revolution',
    description: 'Explore the revolutionary quantum-neural fusion technology that will transform AI capabilities by 2026, enabling unprecedented computational power and intelligence.',
    category: 'Quantum Computing',
    type: 'whitepaper',
    readTime: '60 min',
    difficulty: 'expert',
    tags: ['Quantum Computing', 'Neural Networks', '2026 Breakthrough', 'Fusion Technology', 'Revolutionary'],
    featured: true,
    trending: true,
    new: true,
    views: 12850,
    likes: 756,
    publishedAt: '2025-01-14',
    author: 'Prof. Michael Rodriguez',
    url: '/whitepapers/quantum-neural-fusion-2026',
    estimatedROI: '10,000x Performance',
    rating: 4.8
  },
  {
    id: 'ai-2027-neural-synthesis',
    title: 'AI 2027: Neural Synthesis and Consciousness Emergence',
    description: 'Discover how AI systems will achieve consciousness-like capabilities through neural synthesis by 2027, revolutionizing human-AI collaboration.',
    category: 'Future AI',
    type: 'article',
    readTime: '30 min',
    difficulty: 'advanced',
    tags: ['AI 2027', 'Neural Synthesis', 'Consciousness', 'Human-AI Collaboration', 'Future Tech'],
    featured: true,
    trending: false,
    new: true,
    views: 9870,
    likes: 634,
    publishedAt: '2025-01-13',
    author: 'Dr. Elena Volkov',
    url: '/articles/ai-2027-neural-synthesis',
    estimatedROI: 'Revolutionary Capabilities',
    rating: 4.7
  },
  {
    id: 'automotive-ai-transformation-2028',
    title: 'Automotive AI Transformation: The 2028 Revolution',
    description: 'How AI will completely transform the automotive industry by 2028, from autonomous vehicles to smart manufacturing and predictive maintenance.',
    category: 'Industry Transformation',
    type: 'case-study',
    readTime: '25 min',
    difficulty: 'intermediate',
    tags: ['Automotive', 'AI Transformation', '2028', 'Autonomous Vehicles', 'Smart Manufacturing'],
    featured: false,
    trending: true,
    new: true,
    views: 11200,
    likes: 445,
    publishedAt: '2025-01-12',
    author: 'James Mitchell',
    url: '/case-studies/automotive-ai-transformation-2028',
    estimatedROI: '300-500%',
    rating: 4.6
  },
  {
    id: 'ai-2030-transcendent-intelligence',
    title: 'AI 2030: Transcendent Intelligence and Omniversal Computing',
    description: 'Explore the future of AI in 2030 where transcendent intelligence meets omniversal computing, creating unprecedented possibilities for humanity.',
    category: 'Future Vision',
    type: 'whitepaper',
    readTime: '90 min',
    difficulty: 'expert',
    tags: ['AI 2030', 'Transcendent Intelligence', 'Omniversal Computing', 'Future Vision', 'Humanity'],
    featured: true,
    trending: false,
    new: true,
    views: 8750,
    likes: 567,
    publishedAt: '2025-01-11',
    author: 'Dr. Alexander Quantum',
    url: '/whitepapers/ai-2030-transcendent-intelligence',
    estimatedROI: 'Unlimited Potential',
    rating: 4.9
  },
  {
    id: 'enterprise-ai-mastery-2026',
    title: 'Enterprise AI Mastery: Complete Implementation Framework 2026',
    description: 'Comprehensive guide to implementing AI mastery across enterprise operations, delivering measurable ROI and competitive advantages.',
    category: 'Enterprise AI',
    type: 'guide',
    readTime: '40 min',
    difficulty: 'advanced',
    tags: ['Enterprise AI', 'Implementation', 'ROI', 'Competitive Advantage', 'Framework'],
    featured: false,
    trending: true,
    new: false,
    views: 15600,
    likes: 723,
    publishedAt: '2025-01-10',
    author: 'Maria Santos',
    url: '/guides/enterprise-ai-mastery-2026',
    estimatedROI: '400-800%',
    rating: 4.8
  }
];

const categoryIcons = {
  'AI Implementation': Brain,
  'Quantum Computing': Cpu,
  'Future AI': Zap,
  'Industry Transformation': Globe,
  'Future Vision': Rocket,
  'Enterprise AI': Target
};

const typeColors = {
  'article': 'bg-blue-100 text-blue-800',
  'guide': 'bg-green-100 text-green-800',
  'case-study': 'bg-purple-100 text-purple-800',
  'tool': 'bg-orange-100 text-orange-800',
  'video': 'bg-red-100 text-red-800',
  'whitepaper': 'bg-indigo-100 text-indigo-800',
  'webinar': 'bg-pink-100 text-pink-800'
};

const difficultyColors = {
  'beginner': 'bg-green-100 text-green-800',
  'intermediate': 'bg-yellow-100 text-yellow-800',
  'advanced': 'bg-orange-100 text-orange-800',
  'expert': 'bg-red-100 text-red-800'
};

const InteractiveContentDiscovery2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('trending');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const categories = ['all', ...Array.from(new Set(contentData.map(item => item.category)))];
  const types = ['all', ...Array.from(new Set(contentData.map(item => item.type)))];

  const filteredContent = contentData.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.views - a.views;
      case 'newest':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'popular':
        return b.likes - a.likes;
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  const featuredContent = sortedContent.filter(item => item.featured);
  const trendingContent = sortedContent.filter(item => item.trending);
  const newContent = sortedContent.filter(item => item.new);

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Interactive Content Discovery
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover, explore, and find the perfect AI content tailored to your needs with our advanced discovery engine.
          </motion.p>
        </div>

        {/* Search and Controls */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, authors, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Controls Row */}
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {types.map(type => (
                      <option key={type} value={type} className="bg-gray-800">
                        {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="trending" className="bg-gray-800">Trending</option>
                    <option value="newest" className="bg-gray-800">Newest</option>
                    <option value="popular" className="bg-gray-800">Most Popular</option>
                    <option value="featured" className="bg-gray-800">Featured</option>
                    <option value="rating" className="bg-gray-800">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="text-sm text-gray-400 mb-2 sm:mb-0">
                  Showing {sortedContent.length} of {contentData.length} content items
                  {searchQuery && ` for "${searchQuery}"`}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {featuredContent.length} Featured
                  </span>
                  <span className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1 text-orange-400" />
                    {trendingContent.length} Trending
                  </span>
                  <span className="flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-green-400" />
                    {newContent.length} New
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {sortedContent.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(categoryIcons[item.category as keyof typeof categoryIcons] || Brain, {
                        className: "w-5 h-5 text-blue-400"
                      })}
                      <span className="text-sm text-gray-300">{item.category}</span>
                    </div>
                    <div className="flex space-x-1">
                      {item.featured && <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">Featured</span>}
                      {item.trending && <span className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded">Trending</span>}
                      {item.new && <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded">New</span>}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-1 text-xs rounded ${typeColors[item.type]}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded ${difficultyColors[item.difficulty]}`}>
                      {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-600 text-gray-300 rounded">
                      {item.readTime}
                    </span>
                    {item.rating && (
                      <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded">
                        ⭐ {item.rating}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>By {item.author}</span>
                    <span>{item.views.toLocaleString()} views</span>
                    <span>{item.likes} likes</span>
                  </div>
                  
                  {item.estimatedROI && (
                    <div className="mb-4 p-3 bg-green-500/20 rounded-lg">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-green-400 font-semibold text-sm">
                          ROI: {item.estimatedROI}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600 text-gray-400 text-xs rounded">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link
                    to={item.url}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:underline"
                  >
                    Read More
                    <Rocket className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our content library is constantly growing. Request specific content or let us know what topics you'd like to see covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Content
              </Link>
              <Link
                to="/newsletter"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Notified of New Content
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2025;