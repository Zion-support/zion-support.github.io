'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Star,
  ArrowRight,
  Search,
  Filter,
  Clock,
  Award
} from 'lucide-react';

const EnhancedContentNavigation = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', icon: BookOpen, count: 25 },
    { id: 'blog', name: 'Blog Posts', icon: FileText, count: 12 },
    { id: 'case-studies', name: 'Case Studies', icon: Users, count: 8 },
    { id: 'resources', name: 'Resources', icon: BarChart3, count: 5 }
  ];

  const featuredContent = [
    {
      id: 'autonomous-business-revolution',
      title: 'AI 2025: The Autonomous Business Revolution - Ultimate Guide',
      description: 'Discover how Fortune 500 companies achieve 500% ROI through autonomous business systems.',
      category: 'blog',
      url: '/blog/ai-2025-autonomous-business-revolution-ultimate-guide',
      readingTime: '25 min read',
      featured: true,
      metrics: { roi: '500%', savings: '$180M' },
      tags: ['AI', 'Autonomous Systems', 'ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Transformation: 500% ROI Success Story',
      description: 'Real case study of a $2.8B company achieving 500% ROI and $180M annual savings.',
      category: 'case-studies',
      url: '/case-studies/fortune-500-autonomous-transformation-500-percent-roi',
      readingTime: '15 min read',
      featured: true,
      metrics: { roi: '500%', timeline: '12 months' },
      tags: ['Case Study', 'Fortune 500', 'ROI', 'Success Story']
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'AI Autonomous Implementation Guide 2025: From Strategy to 500% ROI',
      description: 'Complete step-by-step guide to implementing autonomous business systems.',
      category: 'resources',
      url: '/resources/ai-autonomous-implementation-guide-2025',
      readingTime: '30 min read',
      featured: true,
      metrics: { roi: '500%', timeline: '18 months' },
      tags: ['Implementation', 'Guide', 'Strategy', 'ROI']
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution',
      description: 'Explore the $100B market transformation with quantum AI technologies.',
      category: 'blog',
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      readingTime: '20 min read',
      featured: false,
      metrics: { roi: '400-600%', market: '$100B' },
      tags: ['Quantum AI', 'Business Revolution', '2026']
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: 450% ROI Success Story',
      description: 'How a healthcare system achieved 450% ROI with AI implementation.',
      category: 'case-studies',
      url: '/case-studies/ai-healthcare-transformation-2025-success-story',
      readingTime: '12 min read',
      featured: false,
      metrics: { roi: '450%', savings: '$12M' },
      tags: ['Healthcare', 'AI Transformation', 'ROI']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Roadmap: Complete Guide to Success',
      description: 'Comprehensive roadmap for AI implementation with proven strategies.',
      category: 'resources',
      url: '/resources/ai-2025-implementation-roadmap-complete-guide',
      readingTime: '20 min read',
      featured: false,
      metrics: { roi: '67%', efficiency: '45%' },
      tags: ['Roadmap', 'Implementation', 'Strategy']
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = activeCategory === 'all' || content.category === activeCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blog': return FileText;
      case 'case-studies': return Users;
      case 'resources': return BarChart3;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'blog': return 'text-blue-600 bg-blue-100';
      case 'case-studies': return 'text-green-600 bg-green-100';
      case 'resources': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive guides, success stories, and implementation resources 
            from Fortune 500 companies achieving 500% ROI with autonomous business systems.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search content, topics, or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white bg-opacity-20'
                        : 'bg-gray-200'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content, index) => {
            const CategoryIcon = getCategoryIcon(content.category);
            return (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Content Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${getCategoryColor(content.category)}`}>
                        <CategoryIcon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 capitalize">
                        {content.category.replace('-', ' ')}
                      </span>
                    </div>
                    {content.featured && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium text-yellow-600">Featured</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600">
                        {content.metrics.roi}
                      </div>
                      <div className="text-xs text-green-600">ROI</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600">
                        {content.metrics.savings || content.metrics.market || content.metrics.timeline}
                      </div>
                      <div className="text-xs text-blue-600">
                        {content.metrics.savings ? 'Savings' : 
                         content.metrics.market ? 'Market' : 'Timeline'}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{content.readingTime}</span>
                    </div>
                    <Link
                      href={content.url}
                      className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <Award className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 500+ companies achieving 500% ROI with autonomous business systems. 
              Get your free consultation and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentNavigation;