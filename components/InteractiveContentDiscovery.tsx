'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Clock, TrendingUp, BookOpen, FileText, Download } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  readTime: string;
  featured: boolean;
  trending: boolean;
  icon: string;
  gradient: string;
}

const InteractiveContentDiscovery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Revolutionary Breakthroughs',
      description: 'Discover groundbreaking AI innovations transforming industries worldwide',
      href: '/blog/ai-2025-revolutionary-breakthroughs',
      type: 'blog',
      category: 'AI Innovation',
      readTime: '25 min read',
      featured: true,
      trending: true,
      icon: '🌟',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: '2',
      title: 'AI Space Exploration Breakthrough',
      description: '$2.1B mission success with 99.9% autonomous operation',
      href: '/case-studies/ai-space-exploration-breakthrough-2025',
      type: 'case-study',
      category: 'Space Technology',
      readTime: '18 min read',
      featured: true,
      trending: true,
      icon: '🚀',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: '3',
      title: 'AI Implementation Master Guide 2026',
      description: 'Complete 200+ page resource with proven strategies and templates',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      category: 'Implementation',
      readTime: '200+ pages',
      featured: true,
      trending: false,
      icon: '📚',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: '4',
      title: 'AI Enterprise Implementation Masterclass',
      description: 'Complete guide to successful AI transformation with 300% ROI',
      href: '/blog/ai-2025-enterprise-implementation-masterclass',
      type: 'blog',
      category: 'Enterprise',
      readTime: '45 min read',
      featured: false,
      trending: true,
      icon: '🎯',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: '5',
      title: 'Fortune 500 AI Breakthrough',
      description: '$50M savings and 300% ROI in 18 months - complete case study',
      href: '/case-studies/ai-2025-fortune-500-breakthrough',
      type: 'case-study',
      category: 'Success Stories',
      readTime: 'Case Study',
      featured: false,
      trending: true,
      icon: '🏆',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: '6',
      title: 'AI Security Comprehensive Guide',
      description: 'Complete framework for protecting AI systems',
      href: '/blog/ai-security-2025-comprehensive-guide',
      type: 'blog',
      category: 'Security',
      readTime: '45 min read',
      featured: false,
      trending: false,
      icon: '🛡️',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: '7',
      title: 'AI Implementation Master Checklist',
      description: '200+ actionable items for successful AI implementation',
      href: '/resources/ai-2025-implementation-master-checklist',
      type: 'resource',
      category: 'Implementation',
      readTime: 'Checklist',
      featured: false,
      trending: false,
      icon: '📋',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      id: '8',
      title: 'AI Manufacturing Success Story',
      description: '40% cost reduction and 60% faster processing through intelligent automation',
      href: '/case-studies/ai-manufacturing-transformation-success-2025',
      type: 'case-study',
      category: 'Manufacturing',
      readTime: 'Case Study',
      featured: false,
      trending: true,
      icon: '🏭',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'AI Innovation', name: 'AI Innovation', count: contentItems.filter(item => item.category === 'AI Innovation').length },
    { id: 'Enterprise', name: 'Enterprise', count: contentItems.filter(item => item.category === 'Enterprise').length },
    { id: 'Success Stories', name: 'Success Stories', count: contentItems.filter(item => item.category === 'Success Stories').length },
    { id: 'Implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'Implementation').length },
    { id: 'Security', name: 'Security', count: contentItems.filter(item => item.category === 'Security').length },
    { id: 'Space Technology', name: 'Space Technology', count: contentItems.filter(item => item.category === 'Space Technology').length },
    { id: 'Manufacturing', name: 'Manufacturing', count: contentItems.filter(item => item.category === 'Manufacturing').length }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Sort content
    switch (sortBy) {
      case 'trending':
        filtered = filtered.sort((a, b) => {
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return 0;
        });
        break;
      case 'featured':
        filtered = filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
      case 'newest':
        filtered = filtered.reverse();
        break;
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <FileText className="w-4 h-4" />;
      case 'resource':
        return <Download className="w-4 h-4" />;
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🔍 Discover Amazing Content
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive library of AI insights, case studies, and resources. 
          Use filters to find exactly what you're looking for.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search */}
          <div className="flex-1">
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
          </div>

          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="lg:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="trending">Trending</option>
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-gray-600">
          Showing {filteredContent.length} of {contentItems.length} results
        </p>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500">
            {filteredContent.filter(item => item.trending).length} trending
          </span>
        </div>
      </div>

      {/* Content Grid */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={item.href} className="group block">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="flex items-center space-x-2">
                          {item.featured && (
                            <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          )}
                          {item.trending && (
                            <span className="bg-red-400 text-red-900 px-2 py-1 rounded-full text-xs font-semibold">
                              Trending
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:underline">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        <span className="flex items-center space-x-1">
                          {getTypeIcon(item.type)}
                          <span className="capitalize">{item.type.replace('-', ' ')}</span>
                        </span>
                      </span>
                      <span className="text-sm text-gray-500 flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.readTime}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-blue-600 font-medium group-hover:underline text-sm">
                        {item.type === 'resource' ? 'Download' : 'Read More'} →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSortBy('trending');
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/content-showcase"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg"
        >
          <span>View All Content</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;