import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Clock, Star, TrendingUp, BookOpen, Download, Play, X, ChevronDown, ChevronUp } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'service';
  category: string;
  readTime?: string;
  featured?: boolean;
  trending?: boolean;
  icon: string;
  tags: string[];
  publishDate: string;
}

interface InteractiveContentDiscoveryProps {
  className?: string;
}

const InteractiveContentDiscovery: React.FC<InteractiveContentDiscoveryProps> = ({ className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Breakthrough Innovations: Revolutionary Technologies',
      description: 'Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
      category: 'AI Innovations',
      readTime: '25 min read',
      featured: true,
      trending: true,
      icon: '🚀',
      tags: ['AI', 'Innovation', 'Technology', 'Future'],
      publishDate: '2025-01-28'
    },
    {
      id: '2',
      title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly AI',
      description: 'Learn how to build sustainable AI systems that reduce environmental impact while maintaining performance.',
      href: '/blog/ai-sustainability-green-tech-2025',
      type: 'blog',
      category: 'Sustainability',
      readTime: '20 min read',
      featured: true,
      trending: true,
      icon: '🌱',
      tags: ['Sustainability', 'Green Tech', 'Environment', 'AI'],
      publishDate: '2025-01-28'
    },
    {
      id: '3',
      title: '$200M Manufacturing Success: Autonomous AI Systems Case Study',
      description: 'Complete case study: How a Fortune 500 manufacturing company achieved $200M savings through autonomous AI systems.',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      type: 'case-study',
      category: 'Manufacturing',
      readTime: '18 min read',
      featured: true,
      trending: true,
      icon: '💰',
      tags: ['Case Study', 'Manufacturing', 'AI Success', 'ROI'],
      publishDate: '2025-01-28'
    },
    {
      id: '4',
      title: 'AI Robotics & Automation 2025: The Future of Intelligent Machines',
      description: 'Explore the latest breakthroughs in AI-powered robotics and automation transforming industries.',
      href: '/blog/ai-robotics-automation-2025',
      type: 'blog',
      category: 'Robotics',
      readTime: '22 min read',
      featured: true,
      trending: true,
      icon: '🤖',
      tags: ['Robotics', 'Automation', 'AI', 'Future'],
      publishDate: '2025-01-28'
    },
    {
      id: '5',
      title: 'AI Implementation Master Guide 2026: Complete 200+ Page Resource',
      description: 'Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions and best practices.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      category: 'Implementation',
      readTime: '200+ pages',
      featured: true,
      trending: true,
      icon: '📚',
      tags: ['Guide', 'Implementation', 'AI', 'Free Download'],
      publishDate: '2025-01-08'
    },
    {
      id: '6',
      title: 'AI Cybersecurity Threats 2025: Complete Defense Strategy',
      description: 'Protect your organization from emerging AI cybersecurity threats with advanced defense strategies.',
      href: '/blog/ai-2025-cybersecurity-threats',
      type: 'blog',
      category: 'Cybersecurity',
      readTime: '22 min read',
      featured: false,
      trending: true,
      icon: '🛡️',
      tags: ['Cybersecurity', 'AI Security', 'Defense', 'Threats'],
      publishDate: '2025-01-12'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: content.length },
    { id: 'AI Innovations', name: 'AI Innovations', count: content.filter(item => item.category === 'AI Innovations').length },
    { id: 'Sustainability', name: 'Sustainability', count: content.filter(item => item.category === 'Sustainability').length },
    { id: 'Manufacturing', name: 'Manufacturing', count: content.filter(item => item.category === 'Manufacturing').length },
    { id: 'Robotics', name: 'Robotics', count: content.filter(item => item.category === 'Robotics').length },
    { id: 'Implementation', name: 'Implementation', count: content.filter(item => item.category === 'Implementation').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: content.filter(item => item.category === 'Cybersecurity').length }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: content.length },
    { id: 'blog', name: 'Articles', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', name: 'Resources', count: content.filter(item => item.type === 'resource').length },
    { id: 'service', name: 'Services', count: content.filter(item => item.type === 'service').length }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'oldest':
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      case 'trending':
        return b.trending ? 1 : -1;
      case 'featured':
        return b.featured ? 1 : -1;
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <TrendingUp className="w-4 h-4" />;
      case 'resource':
        return <Download className="w-4 h-4" />;
      case 'service':
        return <Play className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      case 'service':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">Discover Content</h3>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
            {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles, case studies, and resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name} ({type.count})
                  </option>
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
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="trending">Trending</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Content Grid */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">
            Showing {sortedContent.length} of {content.length} results
          </p>
          <div className="flex items-center gap-2">
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
                Clear search
              </button>
            )}
          </div>
        </div>

        {sortedContent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedContent.map(item => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-md">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex items-center gap-2">
                      {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                      {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mb-3 ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    {item.type === 'case-study' ? 'Case Study' : 
                     item.type === 'resource' ? 'Resource' : 
                     item.type === 'service' ? 'Service' : 'Article'}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      {item.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      )}
                      <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                    </div>
                    <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedType('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Discover more content in our comprehensive library
          </p>
          <Link
            href="/content-showcase"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View All Content →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;