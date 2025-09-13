import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Users, 
  TrendingUp,
  Star,
  Zap,
  Brain,
  Atom,
  Bot,
  Rocket,
  Clock,
  Eye,
  ThumbsUp,
  Share2,
  Bookmark,
  Filter,
  Search,
  X
} from 'lucide-react';

interface RecommendedContent {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video' | 'tool' | 'case-study' | 'tutorial';
  image: string;
  link: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  views: number;
  likes: number;
  isNew: boolean;
  isFeatured: boolean;
  tags: string[];
  author: string;
  publishedDate: string;
  estimatedReadTime: string;
}

const recommendedContent: RecommendedContent[] = [
  {
    id: 'quantum-ai-fundamentals',
    title: 'Quantum AI Fundamentals: A Complete Guide',
    description: 'Master the basics of quantum artificial intelligence with this comprehensive guide covering quantum algorithms, neural networks, and practical applications.',
    category: 'Quantum AI',
    type: 'article',
    image: '/images/quantum-ai-guide.jpg',
    link: '/quantum-ai-fundamentals',
    duration: '15 min read',
    difficulty: 'beginner',
    rating: 4.9,
    views: 125000,
    likes: 8900,
    isNew: true,
    isFeatured: true,
    tags: ['quantum', 'ai', 'fundamentals', 'guide'],
    author: 'Dr. Sarah Chen',
    publishedDate: '2026-01-20',
    estimatedReadTime: '15 min'
  },
  {
    id: 'ai-automation-masterclass',
    title: 'AI Automation Masterclass: From Zero to Hero',
    description: 'Learn how to build intelligent automation systems that can transform your business processes and increase efficiency by 95%.',
    category: 'Automation',
    type: 'video',
    image: '/images/ai-automation-masterclass.jpg',
    link: '/ai-automation-masterclass',
    duration: '2h 30m',
    difficulty: 'intermediate',
    rating: 4.8,
    views: 98000,
    likes: 7200,
    isNew: true,
    isFeatured: true,
    tags: ['automation', 'ai', 'business', 'efficiency'],
    author: 'Mike Rodriguez',
    publishedDate: '2026-01-18',
    estimatedReadTime: '2h 30m'
  },
  {
    id: 'neural-interface-demo',
    title: 'Neural Interface Technology Demo',
    description: 'Experience the future of human-computer interaction with our revolutionary neural interface technology demonstration.',
    category: 'Neural Interfaces',
    type: 'video',
    image: '/images/neural-interface-demo.jpg',
    link: '/neural-interface-demo',
    duration: '45m',
    difficulty: 'advanced',
    rating: 4.9,
    views: 156000,
    likes: 12000,
    isNew: false,
    isFeatured: true,
    tags: ['neural', 'interface', 'demo', 'future'],
    author: 'Dr. Alex Kim',
    publishedDate: '2026-01-15',
    estimatedReadTime: '45m'
  },
  {
    id: 'quantum-optimization-tool',
    title: 'Quantum Optimization Tool',
    description: 'Interactive tool for solving complex optimization problems using quantum algorithms. Try it with your own data sets.',
    category: 'Quantum Computing',
    type: 'tool',
    image: '/images/quantum-optimization-tool.jpg',
    link: '/quantum-optimization-tool',
    duration: 'Interactive',
    difficulty: 'intermediate',
    rating: 4.7,
    views: 87000,
    likes: 5600,
    isNew: false,
    isFeatured: false,
    tags: ['quantum', 'optimization', 'tool', 'interactive'],
    author: 'Quantum Labs',
    publishedDate: '2026-01-12',
    estimatedReadTime: 'Interactive'
  },
  {
    id: 'ai-ethics-case-study',
    title: 'AI Ethics in Practice: Real-World Case Studies',
    description: 'Explore real-world scenarios where AI ethics principles are applied in business and technology decisions.',
    category: 'AI Ethics',
    type: 'case-study',
    image: '/images/ai-ethics-case-study.jpg',
    link: '/ai-ethics-case-study',
    duration: '20 min read',
    difficulty: 'intermediate',
    rating: 4.6,
    views: 72000,
    likes: 4800,
    isNew: false,
    isFeatured: false,
    tags: ['ethics', 'ai', 'case-study', 'business'],
    author: 'Ethics Institute',
    publishedDate: '2026-01-10',
    estimatedReadTime: '20 min'
  },
  {
    id: 'predictive-analytics-tutorial',
    title: 'Predictive Analytics Tutorial: Step-by-Step Guide',
    description: 'Learn how to build predictive models that can forecast business trends with 95% accuracy using machine learning.',
    category: 'Analytics',
    type: 'tutorial',
    image: '/images/predictive-analytics-tutorial.jpg',
    link: '/predictive-analytics-tutorial',
    duration: '1h 15m',
    difficulty: 'beginner',
    rating: 4.5,
    views: 64000,
    likes: 4100,
    isNew: false,
    isFeatured: false,
    tags: ['analytics', 'prediction', 'tutorial', 'ml'],
    author: 'Data Science Team',
    publishedDate: '2026-01-08',
    estimatedReadTime: '1h 15m'
  }
];

const InteractiveContentRecommendationWidget: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState<RecommendedContent[]>(recommendedContent);
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(new Set());

  const categories = ['All', 'Quantum AI', 'Automation', 'Neural Interfaces', 'Quantum Computing', 'AI Ethics', 'Analytics'];
  const types = ['All', 'article', 'video', 'tool', 'case-study', 'tutorial'];
  const difficulties = ['All', 'beginner', 'intermediate', 'advanced'];

  useEffect(() => {
    let filtered = recommendedContent;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(content => content.category === selectedCategory);
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(content => content.type === selectedType);
    }

    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(content => content.difficulty === selectedDifficulty);
    }

    if (searchQuery) {
      filtered = filtered.filter(content => 
        content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort by featured first, then by rating
    filtered = filtered.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return b.rating - a.rating;
    });

    setFilteredContent(filtered);
  }, [selectedCategory, selectedType, selectedDifficulty, searchQuery]);

  const toggleBookmark = (id: string) => {
    setBookmarkedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return <BookOpen className="w-4 h-4" />;
      case 'video': return <Play className="w-4 h-4" />;
      case 'tool': return <Zap className="w-4 h-4" />;
      case 'case-study': return <Users className="w-4 h-4" />;
      case 'tutorial': return <Rocket className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-600/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-600/20';
      case 'advanced': return 'text-red-400 bg-red-600/20';
      default: return 'text-gray-400 bg-gray-600/20';
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Personalized Recommendations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Your Next Learning Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get personalized content recommendations based on your interests, skill level, and learning goals.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    >
                      {types.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    >
                      {difficulties.map(difficulty => (
                        <option key={difficulty} value={difficulty}>{difficulty}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {content.isNew && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                )}
                {content.isFeatured && (
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Bookmark Button */}
              <button
                onClick={() => toggleBookmark(content.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-white hover:bg-gray-700 transition-colors"
              >
                <Bookmark className={`w-4 h-4 ${bookmarkedItems.has(content.id) ? 'fill-yellow-400 text-yellow-400' : ''}`} />
              </button>

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {getTypeIcon(content.type)}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{content.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 text-sm font-medium">{content.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{content.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {content.description}
                </p>

                {/* Difficulty and Type */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(content.difficulty)}`}>
                    {content.difficulty}
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                    {content.type}
                  </span>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {content.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {content.tags.length > 3 && (
                      <span className="text-gray-400 text-xs">
                        +{content.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{formatViews(content.views)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{formatViews(content.likes)}</span>
                    </div>
                  </div>
                  <div className="text-xs">
                    by {content.author}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={content.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105 w-full justify-center"
                >
                  <span>Explore Content</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">No content found matching your criteria.</div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedType('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want More Personalized Recommendations?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Create a free account to get personalized content recommendations based on your learning history and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Create Free Account
              </Link>
              <Link
                to="/content-hub"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                <BookOpen className="w-5 h-5" />
                Browse All Content
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveContentRecommendationWidget;