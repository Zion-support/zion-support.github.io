"use client";
import React{ useState } from 'react';
import Link from 'next/link';
SearchFilterBookOpenTargetUsersTrendingUpArrowRightStarZapClock

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource' | 'webinar';
  category: string;
  readTime: string;
  featured: boolean;
  url: string;
  excerpt: string;
  tags: string[];
}

const ContentDiscoveryWidget2025: React.FC = () => {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedTypesetSelectedType] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Generative AI 2025: Business Transformation Revolution',
      type: 'blog',
      category: 'AI Innovation',
      readTime: '12 min read',
      featured: true,
      url: '/blog/ai-2025-generative-ai-business-transformation',
      excerpt: 'Explore how generative AI is revolutionizing business operations in 2025from content creation to customer service automation.',
      tags: ['Generative AI'Business Transformation'AI 2025']
    },
    {
      id: '2',
      title: 'Quantum Computing 2025: Revolutionary Business Applications',
      type: 'blog',
      category: 'Quantum Technology',
      readTime: '15 min read',
      featured: true,
      url: '/blog/quantum-computing-2025-business-applications',
      excerpt: 'Discover how quantum computing is revolutionizing business operations in 2025from optimization problems to advanced cryptography.',
      tags: ['Quantum Computing'Business Applications'Optimization']
    },
    {
      id: '3',
      title: 'AI Automation in Manufacturing: 500% Productivity Increase',
      type: 'case-study',
      category: 'Manufacturing',
      readTime: '20 min read',
      featured: true,
      url: '/case-studies/ai-automation-manufacturing-success-2025',
      excerpt: 'How a leading manufacturing company achieved 500% productivity increase through comprehensive AI automation.',
      tags: ['AI Automation'Manufacturing'Productivity']
    },
    {
      id: '4',
      title: 'AI Implementation Checklist 2025: Complete Guide',
      type: 'resource',
      category: 'Implementation Guide',
      readTime: '25 min read',
      featured: true,
      url: '/resources/ai-implementation-checklist-2025',
      excerpt: 'Comprehensive checklist for successful AI implementation in 2025covering strategytechnologyand change management.',
      tags: ['AI Implementation'Checklist'Strategy']
    },
    {
      id: '5',
      title: 'Enterprise AI Transformation: A $50M Success Story',
      type: 'case-study',
      category: 'Enterprise',
      readTime: '18 min read',
      featured: true,
      url: '/case-studies/enterprise-ai-transformation-success-story',
      excerpt: 'Discover how a Fortune 500 company achieved unprecedented success through comprehensive AI transformation.',
      tags: ['AI Transformation'Enterprise Success'ROI']
    },
    {
      id: '6',
      title: 'AI 2025: Autonomous Business Operations Revolution',
      type: 'blog',
      category: 'AI Innovation',
      readTime: '8 min read',
      featured: false,
      url: '/blog/ai-2025-autonomous-business-operations',
      excerpt: 'Discover how AI-powered autonomous operations are transforming businesses in 2025.',
      tags: ['AI 2025'Autonomous Operations'Business Automation']
    }
  ];

  const categories = ['all'AI Innovation'Quantum Technology'Manufacturing'Enterprise'Implementation Guide'];
  const types = ['all'blog'case-study'resource'webinar'];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-4 h-4" />;
      case 'case-study': return <Target className="w-4 h-4" />;
      case 'resource': return <Users className="w-4 h-4" />;
      case 'webinar': return <TrendingUp className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'webinar': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Discover Latest Content</h3>
          <p className="text-gray-600">Explore our comprehensive library of AI insightscase studiesand implementation guides</p>
        </div>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold">NEW 2025</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search contentagsor categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1).replace('-' ')}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="group bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-medium ${getTypeColor(item.type)}`}>
                {getTypeIcon(item.type)}
                <span>{item.type.replace('-' ')}</span>
              </div>
              {item.featured && (
                <div className="flex items-center space-x-1 text-yellow-600">
                  <Star className="w-4 h-4 fill-current" />
                </div>
              )}
            </div>

            {/* Title */}
            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {item.title}
            </h4>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {item.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{item.readTime}</span>
              </span>
              <span>{item.category}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {item.tags.slice(03).map((tagindex) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{item.tags.length - 3} more
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                Read More
              </span>
              <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">No content found</h4>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* View All CTA */}
      {filteredContent.length > 0 && (
        <div className="mt-8 text-center">
          <Link
            href="/content-library"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Content</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContentDiscoveryWidget2025;