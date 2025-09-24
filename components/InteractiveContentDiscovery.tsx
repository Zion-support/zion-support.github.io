'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Clock, TrendingUp, Star, ArrowRight, Eye, BookOpen, Users } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  icon: string;
  stats?: string;
  tags: string[];
  views?: number;
  rating?: number;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI Enterprise Integration Success: 2025 Complete Guide',
    description: 'Master AI enterprise integration with proven strategies, real-world case studies, and step-by-step implementation frameworks for 2025 success.',
    href: '/blog/ai-2025-enterprise-integration-success',
    category: 'Enterprise AI',
    readTime: '25 min read',
    isNew: true,
    isFeatured: true,
    icon: '🏢',
    stats: '300% ROI potential',
    tags: ['enterprise', 'integration', 'strategy', 'roi'],
    views: 12500,
    rating: 4.9
  },
  {
    id: '2',
    title: 'AI Multimodal Revolution 2025: The Future of Human-Computer Interaction',
    description: 'Explore the groundbreaking multimodal AI revolution transforming how humans interact with technology through text, voice, images, and video in 2025.',
    href: '/blog/ai-2025-multimodal-revolution',
    category: 'AI Innovation',
    readTime: '18 min read',
    isNew: true,
    isTrending: true,
    icon: '🧠',
    stats: 'Revolutionary technology',
    tags: ['multimodal', 'innovation', 'future', 'interaction'],
    views: 8900,
    rating: 4.8
  },
  {
    id: '3',
    title: 'AI Manufacturing Transformation: $75M Cost Savings Success Story',
    description: 'Discover how a global manufacturing company achieved $75M in annual savings and 85% efficiency gains through comprehensive AI transformation.',
    href: '/case-studies/ai-manufacturing-transformation-2025',
    category: 'Case Study',
    readTime: '22 min read',
    isNew: true,
    isFeatured: true,
    icon: '🏭',
    stats: '$75M savings achieved',
    tags: ['manufacturing', 'transformation', 'case-study', 'savings'],
    views: 15600,
    rating: 4.9
  },
  {
    id: '4',
    title: 'AI Business Automation 2025: Complete Implementation Guide',
    description: 'Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% and reduce costs by 60% in 2025.',
    href: '/blog/ai-business-automation-2025',
    category: 'AI & Automation',
    readTime: '12 min read',
    isNew: true,
    icon: '🤖',
    stats: '40% productivity boost',
    tags: ['automation', 'productivity', 'business', 'implementation'],
    views: 22300,
    rating: 4.7
  },
  {
    id: '5',
    title: 'AI Startup Funding Playbook 2025: From Seed to Series A',
    description: 'Master AI startup funding with our comprehensive playbook. Learn proven strategies to secure $47B+ in AI funding, with real examples and pitch templates.',
    href: '/blog/ai-startup-funding-playbook-2025',
    category: 'Startup Strategy',
    readTime: '22 min read',
    isTrending: true,
    icon: '💰',
    stats: '$47B+ funding insights',
    tags: ['startup', 'funding', 'investment', 'strategy'],
    views: 18900,
    rating: 4.8
  },
  {
    id: '6',
    title: 'AI Financial Services Transformation: $50M Cost Savings Case Study',
    description: 'Discover how a leading financial services company achieved $50M cost savings and 300% efficiency gains through comprehensive AI transformation.',
    href: '/case-studies/ai-financial-services-transformation-2025',
    category: 'Case Study',
    readTime: '18 min read',
    isFeatured: true,
    icon: '🏦',
    stats: '$50M savings achieved',
    tags: ['financial', 'transformation', 'case-study', 'banking'],
    views: 14200,
    rating: 4.9
  }
];

const categories = ['All', 'Enterprise AI', 'AI Innovation', 'Case Study', 'AI & Automation', 'Startup Strategy'];
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'trending', label: 'Trending' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' }
];

const InteractiveContentDiscovery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredContent = contentItems
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'trending':
          return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
        case 'popular':
          return (b.views || 0) - (a.views || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0; // newest first (already in order)
      }
    });

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover AI Content That Transforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, case studies, and implementation guides 
            designed to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{item.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-600">{item.category}</span>
                        {item.isNew && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {item.isTrending && (
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                            TRENDING
                          </span>
                        )}
                        {item.isFeatured && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {item.views?.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {item.rating}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats Badge */}
                {item.stats && (
                  <div className="text-sm font-medium text-blue-600 mb-4">
                    {item.stats}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <Link
                  href={item.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:translate-x-1 transition-transform"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI experts can create custom content tailored to your specific needs and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request Custom Content
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services/ai-consulting"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get AI Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;