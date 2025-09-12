import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Clock, Star, TrendingUp, Zap, Globe, Leaf, Users } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'resource' | 'case-study' | 'guide';
  category: string;
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  metrics?: string;
  badge?: string;
  badgeColor?: string;
  icon?: React.ReactNode;
  featured?: boolean;
  trending?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI Automation Enterprise Guide 2025',
    description: 'Complete implementation strategy for enterprise-scale AI automation with proven 300% ROI frameworks',
    href: '/resources/ai-automation-enterprise-guide-2025',
    type: 'guide',
    category: 'Enterprise AI',
    readTime: '45 min read',
    difficulty: 'advanced',
    tags: ['automation', 'enterprise', 'roi', 'implementation'],
    metrics: '300% ROI',
    badge: 'NEW',
    badgeColor: 'bg-blue-100 text-blue-800',
    icon: <Zap className="w-5 h-5" />,
    featured: true
  },
  {
    id: '2',
    title: 'AI Sustainability Transformation Guide 2025',
    description: 'Transform your business with sustainable AI practices and reduce carbon footprint by 75%',
    href: '/resources/ai-sustainability-transformation-guide-2025',
    type: 'guide',
    category: 'Sustainable AI',
    readTime: '38 min read',
    difficulty: 'intermediate',
    tags: ['sustainability', 'green-ai', 'carbon-footprint', 'esg'],
    metrics: '75% Carbon Reduction',
    badge: 'GREEN',
    badgeColor: 'bg-green-100 text-green-800',
    icon: <Leaf className="w-5 h-5" />,
    featured: true
  },
  {
    id: '3',
    title: 'AI Automation: Global Logistics Success',
    description: 'How a Fortune 500 logistics company achieved 450% ROI and $85M annual savings',
    href: '/case-studies/ai-automation-global-logistics-2025',
    type: 'case-study',
    category: 'Case Study',
    readTime: '12 min read',
    difficulty: 'beginner',
    tags: ['logistics', 'automation', 'success-story', 'fortune-500'],
    metrics: '450% ROI',
    badge: 'SUCCESS',
    badgeColor: 'bg-green-100 text-green-800',
    icon: <TrendingUp className="w-5 h-5" />,
    trending: true
  },
  {
    id: '4',
    title: 'AI Implementation Master Guide 2026',
    description: 'Complete 200-page playbook with templates, checklists, and case studies',
    href: '/resources/ai-implementation-master-guide-2026',
    type: 'guide',
    category: 'Implementation',
    readTime: 'Free Download',
    difficulty: 'intermediate',
    tags: ['implementation', 'playbook', 'templates', 'checklists'],
    badge: 'POPULAR',
    badgeColor: 'bg-purple-100 text-purple-800',
    icon: <Users className="w-5 h-5" />
  },
  {
    id: '5',
    title: 'AI Healthcare Diagnosis Breakthrough',
    description: '95% accuracy case study: How AI saved 2,500+ lives and delivered $50M+ in savings',
    href: '/case-studies/ai-healthcare-diagnosis-breakthrough-2026',
    type: 'case-study',
    category: 'Healthcare AI',
    readTime: '18 min read',
    difficulty: 'intermediate',
    tags: ['healthcare', 'diagnosis', 'accuracy', 'lives-saved'],
    metrics: '95% Accuracy',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-red-100 text-red-800',
    icon: <Globe className="w-5 h-5" />
  }
];

const categories = ['All', 'Enterprise AI', 'Sustainable AI', 'Case Study', 'Healthcare AI', 'Implementation'];
const difficulties = ['All', 'beginner', 'intermediate', 'advanced'];

export default function InteractiveContentDiscovery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = contentItems;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return '📚';
      case 'case-study': return '📊';
      case 'resource': return '📖';
      default: return '📄';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover AI Content</h2>
        <p className="text-gray-600 mb-6">
          Find the perfect AI resources, guides, and case studies tailored to your needs.
        </p>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content, tags, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="grid md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredContent.length} of {contentItems.length} resources
          </p>
          {(searchQuery || selectedCategory !== 'All' || selectedDifficulty !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
              }}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <Link key={item.id} href={item.href} className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  {item.icon}
                </div>
                <div className="flex gap-2">
                  {item.badge && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                  {item.featured && (
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  )}
                  {item.trending && (
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {item.readTime}
                </div>
                {item.metrics && (
                  <div className="text-sm font-medium text-green-600">
                    {item.metrics}
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedDifficulty('All');
            }}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}