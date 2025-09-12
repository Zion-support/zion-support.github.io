import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  BookOpen, 
  CaseStudy, 
  FileText,
  ArrowRight,
  X,
  ChevronDown,
  Sparkles
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'guide';
  category: string;
  readTime: string;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  tags: string[];
  icon: string;
  stats?: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-governance-2025',
    title: 'AI Governance in Enterprise 2025: Complete Framework for Ethical AI Implementation',
    description: 'Master AI governance with our comprehensive 2025 framework. Learn ethical AI implementation, compliance strategies, and risk management for enterprise success.',
    href: '/blog/ai-2025-enterprise-ai-governance',
    type: 'blog',
    category: 'AI Governance',
    readTime: '12 min read',
    isNew: true,
    isTrending: true,
    isFeatured: true,
    tags: ['AI Governance', 'Enterprise AI', 'Ethical AI', 'Compliance'],
    icon: '🛡️',
    stats: '300% productivity gain'
  },
  {
    id: 'multimodal-revolution',
    title: 'AI Multimodal Revolution 2025: The Future of Human-AI Interaction',
    description: 'Explore the groundbreaking multimodal AI revolution transforming how humans interact with artificial intelligence. Discover the technologies, applications, and opportunities shaping 2025.',
    href: '/blog/ai-2025-multimodal-revolution',
    type: 'blog',
    category: 'AI Innovation',
    readTime: '15 min read',
    isNew: true,
    isTrending: true,
    isFeatured: true,
    tags: ['Multimodal AI', 'Human-AI Interaction', 'AI Trends 2025', 'Technology Innovation'],
    icon: '🧠',
    stats: 'Revolutionary breakthroughs'
  },
  {
    id: 'autonomous-vehicles-success',
    title: 'AI Autonomous Vehicles Success 2025: $500M Revenue Transformation',
    description: 'Discover how a leading automotive manufacturer achieved $500M revenue increase through AI-powered autonomous vehicle technology. Complete implementation strategy and ROI analysis.',
    href: '/case-studies/ai-2025-autonomous-vehicles-success',
    type: 'case-study',
    category: 'Case Study',
    readTime: '12 min read',
    isNew: true,
    isTrending: true,
    isFeatured: true,
    tags: ['Autonomous Vehicles', 'AI Automotive', 'Revenue Growth', 'Case Study'],
    icon: '🚗',
    stats: '$500M revenue increase'
  },
  {
    id: 'ai-enterprise-automation',
    title: 'AI Enterprise Automation Success Stories 2025: Real-World Transformations',
    description: 'Discover how Fortune 500 companies achieved 300% productivity gains and $50M+ cost savings through AI automation. Real case studies, implementation strategies, and ROI metrics.',
    href: '/blog/ai-2025-enterprise-automation-success',
    type: 'blog',
    category: 'AI & Automation',
    readTime: '15 min read',
    isTrending: true,
    tags: ['AI Automation', 'Enterprise', 'Productivity', 'ROI'],
    icon: '🏢',
    stats: '300% productivity gain'
  },
  {
    id: 'ai-retail-transformation',
    title: 'AI Retail Transformation Success: $200M Revenue Boost Case Study 2025',
    description: 'Discover how a global retail giant achieved unprecedented success through comprehensive AI transformation, resulting in $200M revenue increase and 150% customer satisfaction improvement.',
    href: '/case-studies/ai-retail-transformation-success-2025',
    type: 'case-study',
    category: 'Case Study',
    readTime: '20 min read',
    isTrending: true,
    tags: ['Retail AI', 'Revenue Growth', 'Customer Experience', 'Transformation'],
    icon: '🛍️',
    stats: '$200M revenue boost'
  },
  {
    id: 'ai-implementation-guide',
    title: 'AI Implementation Master Guide 2025: Complete 200-Page Playbook',
    description: 'Master AI implementation with our comprehensive 200-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation in any organization.',
    href: '/resources/ai-implementation-master-guide-2025',
    type: 'guide',
    category: 'Implementation',
    readTime: '45 min read',
    isFeatured: true,
    tags: ['AI Implementation', 'Guide', 'Framework', 'Best Practices'],
    icon: '📚',
    stats: '200-page playbook'
  }
];

const categories = ['All', 'AI Governance', 'AI Innovation', 'Case Study', 'AI & Automation', 'Implementation'];
const types = ['All', 'blog', 'case-study', 'resource', 'guide'];

const InteractiveContentDiscovery: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState(contentItems);

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

    // Filter by type
    if (selectedType !== 'All') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Sort content
    switch (sortBy) {
      case 'trending':
        filtered = filtered.sort((a, b) => {
          if (a.isTrending && !b.isTrending) return -1;
          if (!a.isTrending && b.isTrending) return 1;
          return 0;
        });
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      case 'featured':
        filtered = filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
        break;
      default:
        break;
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, selectedType, sortBy]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-4 h-4" />;
      case 'case-study': return <CaseStudy className="w-4 h-4" />;
      case 'resource': return <FileText className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      case 'guide': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Discover AI Content That Transforms Your Business
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive library of AI insights, case studies, and implementation guides. 
          Find exactly what you need to accelerate your AI journey.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="trending">Trending</option>
                  <option value="newest">Newest</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing {filteredContent.length} of {contentItems.length} content pieces
        </p>
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-600">AI-powered recommendations</span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{item.icon}</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-1 capitalize">{item.type}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {item.isNew && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {item.isTrending && (
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      Trending
                    </span>
                  )}
                  {item.isFeatured && (
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 inline mr-1" />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Stats */}
              {item.stats && (
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    {item.stats}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="text-gray-500 text-xs px-2 py-1">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
              <Link
                href={item.href}
                className="flex items-center justify-between text-blue-600 hover:text-blue-700 font-semibold group"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedType('All');
            }}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            Our AI experts can help you find the perfect content for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Personalized Recommendations
            </Link>
            <Link
              href="/resources"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;