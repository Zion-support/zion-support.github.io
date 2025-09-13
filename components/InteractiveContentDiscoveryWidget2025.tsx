import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  BookOpen, 
  FileText, 
  Award,
  Zap,
  Brain,
  Target,
  ArrowRight,
  X,
  ChevronDown
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool' | 'showcase';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  roi: number;
  isNew: boolean;
  isFeatured: boolean;
  tags: string[];
  href: string;
  icon: React.ComponentType<any>;
  gradient: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'enterprise-implementation-mastery',
    title: 'AI 2025 Enterprise Implementation Mastery',
    description: 'Complete guide to successfully implementing AI solutions in enterprise environments with proven methodologies and frameworks.',
    type: 'resource',
    category: 'Implementation',
    difficulty: 'advanced',
    duration: '4-6 weeks',
    roi: 400,
    isNew: true,
    isFeatured: true,
    tags: ['Enterprise', 'Implementation', 'ROI', 'Methodology'],
    href: '/resources/ai-2025-enterprise-implementation-mastery',
    icon: Brain,
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'automation-toolkit-2025',
    title: 'AI Automation Implementation Toolkit 2025',
    description: 'Everything you need to implement AI automation successfully. Complete toolkit with frameworks, templates, and checklists.',
    type: 'resource',
    category: 'Automation',
    difficulty: 'intermediate',
    duration: '2-4 weeks',
    roi: 300,
    isNew: true,
    isFeatured: true,
    tags: ['Automation', 'Toolkit', 'Templates', 'Frameworks'],
    href: '/resources/ai-automation-implementation-toolkit-2025',
    icon: Zap,
    gradient: 'from-green-600 to-blue-600'
  },
  {
    id: 'quantum-ai-breakthrough',
    title: 'Quantum-AI Breakthrough Case Study',
    description: 'Fortune 500 company achieves $2.3B in savings through quantum-AI fusion implementation.',
    type: 'case-study',
    category: 'Success Stories',
    difficulty: 'advanced',
    duration: '6 months',
    roi: 1500,
    isNew: true,
    isFeatured: true,
    tags: ['Quantum AI', 'Case Study', 'Fortune 500', 'Breakthrough'],
    href: '/case-studies/quantum-ai-breakthrough-enterprise-transformation',
    icon: Award,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'ai-ultimate-automation-platform',
    title: 'AI 2025 Ultimate Automation Platform',
    description: 'Revolutionary platform for autonomous business operations with 95% efficiency improvement.',
    type: 'showcase',
    category: 'Platform',
    difficulty: 'advanced',
    duration: '8-12 weeks',
    roi: 500,
    isNew: true,
    isFeatured: true,
    tags: ['Platform', 'Automation', 'Efficiency', 'Revolutionary'],
    href: '/ai-2025-ultimate-automation-platform',
    icon: Target,
    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'ai-roi-calculator-2026',
    title: 'AI ROI Calculator 2026',
    description: 'Advanced tool to calculate your AI investment returns with precision and accuracy.',
    type: 'tool',
    category: 'Tools',
    difficulty: 'beginner',
    duration: '5 minutes',
    roi: 0,
    isNew: true,
    isFeatured: false,
    tags: ['Calculator', 'ROI', 'Tool', 'Investment'],
    href: '/tools/ai-roi-calculator-2026',
    icon: TrendingUp,
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'neural-architecture-revolution',
    title: 'Neural Architecture Revolution',
    description: 'Discover how neural architecture is revolutionizing AI capabilities and performance.',
    type: 'blog',
    category: 'Technology',
    difficulty: 'intermediate',
    duration: '15 minutes',
    roi: 0,
    isNew: true,
    isFeatured: false,
    tags: ['Neural Networks', 'Architecture', 'Revolution', 'Technology'],
    href: '/blog/ai-2025-neural-architecture-revolution',
    icon: BookOpen,
    gradient: 'from-indigo-600 to-purple-600'
  }
];

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState<ContentItem[]>(contentItems);

  const categories = ['All', 'Implementation', 'Automation', 'Success Stories', 'Platform', 'Tools', 'Technology'];
  const difficulties = ['All', 'beginner', 'intermediate', 'advanced'];
  const types = ['All', 'blog', 'case-study', 'resource', 'tool', 'showcase'];
  const sortOptions = [
    { value: 'featured', label: 'Featured First' },
    { value: 'newest', label: 'Newest First' },
    { value: 'roi', label: 'Highest ROI' },
    { value: 'title', label: 'Alphabetical' }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
    }

    // Filter by type
    if (selectedType !== 'All') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Sort items
    switch (sortBy) {
      case 'featured':
        filtered = filtered.filter(item => item.isFeatured).concat(filtered.filter(item => !item.isFeatured));
        break;
      case 'newest':
        filtered = filtered.filter(item => item.isNew).concat(filtered.filter(item => !item.isNew));
        break;
      case 'roi':
        filtered = filtered.sort((a, b) => b.roi - a.roi);
        break;
      case 'title':
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedType, sortBy]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getDifficultyBg = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Search className="w-4 h-4" />
            Interactive Content Discovery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the exact AI content you need with our intelligent discovery widget. 
            Filter by category, difficulty, type, and more to find your perfect match.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    >
                      {difficulties.map(difficulty => (
                        <option key={difficulty} value={difficulty}>
                          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
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
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    >
                      {types.map(type => (
                        <option key={type} value={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-300">
            Showing {filteredItems.length} of {contentItems.length} content items
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedDifficulty('All');
              setSelectedType('All');
              setSortBy('featured');
            }}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear all filters
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  {item.isNew && (
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  {item.isFeatured && (
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* ROI Badge */}
                {item.roi > 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-green-600/20 backdrop-blur-sm text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.roi}% ROI
                    </div>
                  </div>
                )}

                {/* Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center backdrop-blur-sm`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 text-sm font-medium">{item.category}</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{item.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Difficulty */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">Difficulty</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getDifficultyBg(item.difficulty)}`}
                            style={{ width: item.difficulty === 'beginner' ? '33%' : item.difficulty === 'intermediate' ? '66%' : '100%' }}
                          />
                        </div>
                        <span className={`text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                          {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-gray-400 text-xs">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={item.href}>
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105">
                      <span>Explore Content</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSelectedType('All');
                setSortBy('featured');
              }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;