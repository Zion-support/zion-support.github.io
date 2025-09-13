import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  TrendingUp,
  Users,
  Award,
  Target
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'guide' | 'case-study' | 'tool' | 'video' | 'whitepaper';
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
  image: string;
  url: string;
  estimatedROI?: string;
  industry?: string;
  useCase?: string;
}

const advancedContent: ContentItem[] = [
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
    image: '/images/ai-2025-autonomous-operations.jpg',
    url: '/guides/ai-2025-autonomous-operations',
    estimatedROI: '2,500-5,000%',
    industry: 'Enterprise',
    useCase: 'Full Business Automation'
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
    image: '/images/quantum-neural-fusion-2026.jpg',
    url: '/whitepapers/quantum-neural-fusion-2026',
    estimatedROI: '10,000x Performance',
    industry: 'Research & Development',
    useCase: 'Advanced AI Systems'
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
    image: '/images/ai-2027-neural-synthesis.jpg',
    url: '/articles/ai-2027-neural-synthesis',
    estimatedROI: 'Revolutionary Capabilities',
    industry: 'Technology',
    useCase: 'Conscious AI Development'
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
    image: '/images/automotive-ai-2028.jpg',
    url: '/case-studies/automotive-ai-transformation-2028',
    estimatedROI: '300-500%',
    industry: 'Automotive',
    useCase: 'Industry Transformation'
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
    image: '/images/ai-2030-transcendent.jpg',
    url: '/whitepapers/ai-2030-transcendent-intelligence',
    estimatedROI: 'Unlimited Potential',
    industry: 'All Industries',
    useCase: 'Transcendent Capabilities'
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
    image: '/images/enterprise-ai-mastery-2026.jpg',
    url: '/guides/enterprise-ai-mastery-2026',
    estimatedROI: '400-800%',
    industry: 'Enterprise',
    useCase: 'Complete AI Transformation'
  }
];

const categoryIcons = {
  'AI Implementation': Brain,
  'Quantum Computing': Cpu,
  'Future AI': Zap,
  'Industry Transformation': Globe,
  'Future Vision': Rocket,
  'Enterprise AI': Database
};

const typeColors = {
  'article': 'bg-blue-100 text-blue-800',
  'guide': 'bg-green-100 text-green-800',
  'case-study': 'bg-purple-100 text-purple-800',
  'tool': 'bg-orange-100 text-orange-800',
  'video': 'bg-red-100 text-red-800',
  'whitepaper': 'bg-indigo-100 text-indigo-800'
};

const difficultyColors = {
  'beginner': 'bg-green-100 text-green-800',
  'intermediate': 'bg-yellow-100 text-yellow-800',
  'advanced': 'bg-orange-100 text-orange-800',
  'expert': 'bg-red-100 text-red-800'
};

const AdvancedContentShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('trending');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['all', ...Array.from(new Set(advancedContent.map(item => item.category)))];
  const types = ['all', ...Array.from(new Set(advancedContent.map(item => item.type)))];

  const filteredContent = advancedContent.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
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
            Advanced Content Showcase 2025-2030
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover revolutionary AI content, breakthrough technologies, and future predictions that will transform your business and understanding of artificial intelligence.
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {/* Search */}
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Category Filter */}
              <div>
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
            </div>
            
            {/* Sort Options */}
            <div className="flex flex-wrap gap-2">
              {['trending', 'newest', 'popular', 'featured'].map(sort => (
                <button
                  key={sort}
                  onClick={() => setSortBy(sort)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === sort
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {sort.charAt(0).toUpperCase() + sort.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Content */}
        {featuredContent.length > 0 && (
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-400" />
              Featured Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(categoryIcons[item.category as keyof typeof categoryIcons] || Brain, {
                        className: "w-5 h-5 text-blue-400"
                      })}
                      <span className="text-sm text-gray-300">{item.category}</span>
                    </div>
                    <div className="flex space-x-2">
                      {item.featured && <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">Featured</span>}
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
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{item.views.toLocaleString()} views</span>
                    <span>{item.likes} likes</span>
                    <span>{item.publishedAt}</span>
                  </div>
                  
                  {item.estimatedROI && (
                    <div className="mb-4 p-3 bg-green-500/20 rounded-lg">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-green-400 font-semibold text-sm">
                          Estimated ROI: {item.estimatedROI}
                        </span>
                      </div>
                    </div>
                  )}
                  
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
          </motion.section>
        )}

        {/* Trending Content */}
        {trendingContent.length > 0 && (
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-orange-400" />
              Trending Now
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingContent.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded">
                      Trending
                    </span>
                    <span className="text-xs text-gray-400">{item.views.toLocaleString()}</span>
                  </div>
                  
                  <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-300 text-xs mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{item.readTime}</span>
                    <span>{item.likes} likes</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* All Content Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Database className="w-6 h-6 mr-2 text-purple-400" />
            All Content ({sortedContent.length} items)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.05 }}
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
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{item.views.toLocaleString()} views</span>
                  <span>{item.likes} likes</span>
                  <span>{item.publishedAt}</span>
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
        </motion.section>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already implementing our revolutionary AI solutions and achieving unprecedented ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedContentShowcase2025;