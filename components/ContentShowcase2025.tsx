'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Clock, 
  Users, 
  Star, 
  TrendingUp, 
  BookOpen, 
  FileText, 
  BarChart3,
  Download,
  ExternalLink
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: 'blog' | 'case-study' | 'resource' | 'guide';
  readTime: string;
  publishDate: string;
  featured: boolean;
  tags: string[];
  href: string;
  views: number;
  rating: number;
  downloads?: number;
}

const allContent: ContentItem[] = [
  {
    id: '1',
    title: 'AI Automation Trends 2025: The Future of Business Intelligence',
    description: 'Explore the latest AI automation trends that are reshaping industries in 2025. From intelligent process automation to predictive analytics, discover how AI is transforming business operations.',
    category: 'blog',
    readTime: '12 min',
    publishDate: '2025-01-17',
    featured: true,
    tags: ['AI', 'Automation', 'Business Intelligence', '2025 Trends'],
    href: '/blog/ai-automation-trends-2025',
    views: 2847,
    rating: 4.9
  },
  {
    id: '2',
    title: 'Sustainability & Green Tech Solutions 2025',
    description: 'Discover revolutionary green tech solutions transforming industries and helping organizations achieve environmental goals in 2025.',
    category: 'resource',
    readTime: '15 min',
    publishDate: '2025-01-17',
    featured: true,
    tags: ['Sustainability', 'Green Technology', 'Carbon Neutrality', 'ESG'],
    href: '/blog/sustainability-green-tech-2025',
    views: 1923,
    rating: 4.8,
    downloads: 456
  },
  {
    id: '3',
    title: 'AI Transformation in Manufacturing: 40% Efficiency Gains',
    description: 'Case study of how a Fortune 500 manufacturer achieved unprecedented efficiency gains through comprehensive AI implementation.',
    category: 'case-study',
    readTime: '10 min',
    publishDate: '2025-01-17',
    featured: true,
    tags: ['Manufacturing', 'AI Transformation', 'Case Study', 'Efficiency'],
    href: '/case-studies/ai-transformation-manufacturing',
    views: 3654,
    rating: 4.9
  },
  {
    id: '4',
    title: 'Complete AI Implementation Guide 2025',
    description: 'Comprehensive guide covering everything from strategy development to full-scale deployment of AI solutions.',
    category: 'guide',
    readTime: '25 min',
    publishDate: '2025-01-17',
    featured: true,
    tags: ['AI Implementation', 'Strategy', 'Best Practices', 'Guide'],
    href: '/resources/ai-implementation-guide-2025',
    views: 4123,
    rating: 4.9,
    downloads: 892
  },
  {
    id: '5',
    title: 'Robotics & Automation in Healthcare 2025',
    description: 'Exploring how robotics and automation are revolutionizing healthcare delivery, from surgical robots to AI-powered diagnostics.',
    category: 'blog',
    readTime: '14 min',
    publishDate: '2025-01-16',
    featured: false,
    tags: ['Healthcare', 'Robotics', 'Medical AI', 'Automation'],
    href: '/blog/robotics-automation-healthcare-2025',
    views: 1834,
    rating: 4.7
  },
  {
    id: '6',
    title: 'Quantum Computing: The Next Frontier',
    description: 'Understanding the potential of quantum computing and its applications in cryptography, optimization, and scientific research.',
    category: 'resource',
    readTime: '18 min',
    publishDate: '2025-01-15',
    featured: false,
    tags: ['Quantum Computing', 'Technology', 'Research', 'Innovation'],
    href: '/resources/quantum-computing-guide-2025',
    views: 2156,
    rating: 4.8,
    downloads: 234
  },
  {
    id: '7',
    title: 'Edge Computing Success Story: Retail Chain',
    description: 'How a major retail chain implemented edge computing to improve customer experience and reduce latency.',
    category: 'case-study',
    readTime: '8 min',
    publishDate: '2025-01-14',
    featured: false,
    tags: ['Edge Computing', 'Retail', 'Case Study', 'Performance'],
    href: '/case-studies/edge-computing-retail-success',
    views: 1678,
    rating: 4.6
  },
  {
    id: '8',
    title: 'Cybersecurity Best Practices for AI Systems',
    description: 'Essential security measures and best practices for protecting AI systems from cyber threats and attacks.',
    category: 'guide',
    readTime: '20 min',
    publishDate: '2025-01-13',
    featured: false,
    tags: ['Cybersecurity', 'AI Security', 'Best Practices', 'Guide'],
    href: '/resources/ai-cybersecurity-guide-2025',
    views: 2987,
    rating: 4.8,
    downloads: 567
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'blog': return <FileText className="w-5 h-5" />;
    case 'case-study': return <BarChart3 className="w-5 h-5" />;
    case 'resource': return <BookOpen className="w-5 h-5" />;
    case 'guide': return <Download className="w-5 h-5" />;
    default: return <FileText className="w-5 h-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
    case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'guide': return 'bg-orange-100 text-orange-800 border-orange-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function ContentShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = [
    { value: 'all', label: 'All Content', count: allContent.length },
    { value: 'blog', label: 'Blog Posts', count: allContent.filter(item => item.category === 'blog').length },
    { value: 'case-study', label: 'Case Studies', count: allContent.filter(item => item.category === 'case-study').length },
    { value: 'resource', label: 'Resources', count: allContent.filter(item => item.category === 'resource').length },
    { value: 'guide', label: 'Guides', count: allContent.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = allContent
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return b.featured === a.featured ? b.views - a.views : Number(b.featured) - Number(a.featured);
        case 'views':
          return b.views - a.views;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🚀 Content Library 2025
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive collection of AI resources, case studies, guides, and insights 
          designed to accelerate your digital transformation journey.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label} ({category.count})
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="views">Most Popular</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{allContent.length}</div>
            <div className="text-sm text-gray-600">Total Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{allContent.filter(item => item.featured).length}</div>
            <div className="text-sm text-gray-600">Featured</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{allContent.reduce((sum, item) => sum + item.views, 0).toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{allContent.reduce((sum, item) => sum + (item.downloads || 0), 0)}</div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              item.featured ? 'border-yellow-400' : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            {/* Featured Badge */}
            {item.featured && (
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                ⭐ FEATURED
              </div>
            )}

            <div className="p-6">
              {/* Category and Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${getCategoryColor(item.category)}`}>
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(item.category)}`}>
                    {item.category.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{item.views.toLocaleString()} views</span>
                  </div>
                  {item.downloads && (
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{item.downloads} downloads</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={item.href}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>
                  {item.category === 'resource' || item.category === 'guide' ? 'Download' : 'Read'} Now
                </span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
        <p className="text-xl mb-6 opacity-90">
          Get personalized recommendations and expert guidance for your AI journey
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}