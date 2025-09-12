import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Clock, Star, TrendingUp, Eye, Heart, ArrowRight, X } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  isTrending?: boolean;
  views?: number;
  likes?: number;
  rating?: number;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'blog' | 'case-study' | 'resource' | 'guide';
}

interface InteractiveContentDiscoveryProps {
  content?: ContentItem[];
  showFilters?: boolean;
  showSearch?: boolean;
  showStats?: boolean;
  className?: string;
}

const defaultContent: ContentItem[] = [
  {
    title: "AI Enterprise Automation Revolution 2025",
    description: "Transform your enterprise operations with AI automation strategies that deliver 400% ROI and revolutionize how your business operates",
    href: "/blog/ai-2025-enterprise-automation-revolution",
    icon: "⚙️",
    readTime: "22 min read",
    category: "Enterprise AI",
    tags: ["automation", "enterprise", "ROI", "transformation", "AI strategy"],
    isNew: true,
    isTrending: true,
    views: 15420,
    likes: 892,
    rating: 4.9,
    difficulty: "Advanced",
    type: "blog"
  },
  {
    title: "AI Healthcare Diagnosis Revolution 2025",
    description: "Revolutionary AI technologies achieving 95% accuracy in medical diagnosis, saving thousands of lives and transforming healthcare delivery worldwide",
    href: "/blog/ai-healthcare-diagnosis-revolution-2025",
    icon: "🏥",
    readTime: "20 min read",
    category: "Healthcare AI",
    tags: ["healthcare", "diagnosis", "medical AI", "accuracy", "life-saving"],
    isNew: true,
    isTrending: true,
    views: 22150,
    likes: 1245,
    rating: 4.8,
    difficulty: "Intermediate",
    type: "blog"
  },
  {
    title: "AI Financial Services Transformation 2025",
    description: "How a Fortune 500 financial services company achieved $2B+ revenue increase and 400% ROI through comprehensive AI transformation",
    href: "/case-studies/ai-financial-services-transformation-2025",
    icon: "💰",
    readTime: "25 min read",
    category: "Financial AI",
    tags: ["financial services", "transformation", "case study", "ROI", "Fortune 500"],
    isNew: true,
    isTrending: true,
    views: 18750,
    likes: 1103,
    rating: 4.9,
    difficulty: "Advanced",
    type: "case-study"
  },
  {
    title: "AI Breakthrough Innovations 2025",
    description: "Revolutionary technologies that are reshaping industries and creating unprecedented opportunities for businesses worldwide",
    href: "/blog/ai-2025-breakthrough-innovations",
    icon: "🚀",
    readTime: "18 min read",
    category: "AI Innovation",
    tags: ["innovation", "breakthrough", "technology", "future", "trends"],
    isNew: true,
    views: 32100,
    likes: 2156,
    rating: 4.7,
    difficulty: "Beginner",
    type: "blog"
  },
  {
    title: "AI Implementation Master Guide 2025",
    description: "Complete 200-page playbook with templates, checklists, and case studies for successful AI implementation",
    href: "/resources/ai-implementation-master-guide-2025",
    icon: "📚",
    readTime: "Free Download",
    category: "Resources",
    tags: ["implementation", "guide", "templates", "checklist", "playbook"],
    isNew: true,
    views: 45000,
    likes: 3200,
    rating: 4.9,
    difficulty: "Intermediate",
    type: "resource"
  },
  {
    title: "AI Security Best Practices 2025",
    description: "Comprehensive guide to securing AI systems and protecting against emerging threats in the AI landscape",
    href: "/blog/ai-security-best-practices-2025",
    icon: "🔒",
    readTime: "15 min read",
    category: "AI Security",
    tags: ["security", "best practices", "AI safety", "cybersecurity", "protection"],
    isNew: false,
    isTrending: false,
    views: 12800,
    likes: 756,
    rating: 4.6,
    difficulty: "Advanced",
    type: "guide"
  }
];

export default function InteractiveContentDiscovery({
  content = defaultContent,
  showFilters = true,
  showSearch = true,
  showStats = true,
  className = ''
}: InteractiveContentDiscoveryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('trending');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get unique categories, types, difficulties, and tags
  const categories = ['All', ...Array.from(new Set(content.map(item => item.category)))];
  const types = ['All', ...Array.from(new Set(content.map(item => item.type)))];
  const difficulties = ['All', ...Array.from(new Set(content.map(item => item.difficulty)))];
  const allTags = Array.from(new Set(content.flatMap(item => item.tags)));

  // Filter and sort content
  const filteredContent = content
    .filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesType = selectedType === 'All' || item.type === selectedType;
      const matchesDifficulty = selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => item.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesType && matchesDifficulty && matchesTags;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'trending':
          return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0) || (b.views || 0) - (a.views || 0);
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'popular':
          return (b.views || 0) - (a.views || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-purple-100 text-purple-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'guide': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover AI Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, case studies, and resources. 
            Use filters and search to find exactly what you need.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          {showSearch && (
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, tags, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block bg-white rounded-lg p-6 shadow-sm border border-gray-200`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="trending">Trending</option>
                    <option value="newest">Newest</option>
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="title">Title A-Z</option>
                  </select>
                </div>
              </div>

              {/* Tags Filter */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 20).map(tag => (
                    <button
                      key={tag}
                      onClick={() => {
                        if (selectedTags.includes(tag)) {
                          setSelectedTags(selectedTags.filter(t => t !== tag));
                        } else {
                          setSelectedTags([...selectedTags, tag]);
                        }
                      }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear all tags
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredContent.length} of {content.length} results
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.isNew && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {item.isTrending && (
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          TRENDING
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty || '')}`}>
                        {item.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  {showStats && (
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{formatNumber(item.views || 0)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{formatNumber(item.likes || 0)}</span>
                        </div>
                        {item.rating && (
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{item.rating}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedType('All');
                setSelectedDifficulty('All');
                setSelectedTags([]);
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}