import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, TrendingUp, BookOpen, FileText, Users, Zap, Brain, Target, BarChart3, Clock, Star, ArrowRight } from 'lucide-react';

export default function UltimateContentDiscoveryWidget2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Content', icon: TrendingUp },
    { id: 'blog', label: 'Blog Posts', icon: BookOpen },
    { id: 'case-studies', label: 'Case Studies', icon: BarChart3 },
    { id: 'resources', label: 'Resources', icon: FileText },
    { id: 'guides', label: 'Guides', icon: Target },
    { id: 'tutorials', label: 'Tutorials', icon: Zap }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI Trends 2025: Ultimate Guide',
      description: 'Complete guide to revolutionary AI trends: quantum computing, neural interfaces, and autonomous systems.',
      category: 'blog',
      type: 'Guide',
      readTime: '45 min',
      rating: 4.9,
      views: '12.5K',
      tags: ['AI Trends', 'Quantum Computing', 'Neural Interfaces'],
      href: '/blog/ai-2025-trends-ultimate-guide',
      featured: true
    },
    {
      id: 2,
      title: '100,000% ROI Case Study',
      description: 'How a Fortune 500 company achieved unprecedented ROI through comprehensive AI transformation.',
      category: 'case-studies',
      type: 'Case Study',
      readTime: '30 min',
      rating: 4.8,
      views: '8.2K',
      tags: ['ROI', 'Fortune 500', 'Transformation'],
      href: '/case-studies/ai-2025-global-enterprise-transformation-100000-roi',
      featured: true
    },
    {
      id: 3,
      title: 'AI Implementation Toolkit',
      description: 'Complete toolkit with 50+ templates, 100+ code samples, and 25+ video tutorials.',
      category: 'resources',
      type: 'Toolkit',
      readTime: '2 hours',
      rating: 4.9,
      views: '15.3K',
      tags: ['Implementation', 'Templates', 'Code Samples'],
      href: '/resources/ai-2025-ultimate-implementation-toolkit',
      featured: true
    },
    {
      id: 4,
      title: 'Quantum Computing Implementation Guide',
      description: 'Step-by-step guide for implementing quantum computing solutions in enterprise environments.',
      category: 'guides',
      type: 'Guide',
      readTime: '60 min',
      rating: 4.7,
      views: '6.8K',
      tags: ['Quantum Computing', 'Implementation', 'Enterprise'],
      href: '/guides/quantum-computing-implementation-2025',
      featured: false
    },
    {
      id: 5,
      title: 'Neural Interface Development Tutorial',
      description: 'Learn how to build neural interface applications with our comprehensive tutorial series.',
      category: 'tutorials',
      type: 'Tutorial',
      readTime: '90 min',
      rating: 4.8,
      views: '9.1K',
      tags: ['Neural Interfaces', 'Development', 'Tutorial'],
      href: '/tutorials/neural-interface-development-2025',
      featured: false
    },
    {
      id: 6,
      title: 'Autonomous Systems Architecture',
      description: 'Complete architecture guide for building autonomous systems across different industries.',
      category: 'guides',
      type: 'Guide',
      readTime: '75 min',
      rating: 4.6,
      views: '7.4K',
      tags: ['Autonomous Systems', 'Architecture', 'Industry'],
      href: '/guides/autonomous-systems-architecture-2025',
      featured: false
    }
  ];

  const filteredContent = featuredContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}Discovery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the perfect content for your AI transformation journey. Search through our comprehensive 
            library of guides, case studies, and resources.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((item) => {
            const CategoryIcon = categories.find(cat => cat.id === item.category)?.icon || BookOpen;
            return (
              <div
                key={item.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group ${
                  item.featured ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.category === 'blog' ? 'bg-gradient-to-r from-purple-600 to-blue-600' :
                    item.category === 'case-studies' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                    item.category === 'resources' ? 'bg-gradient-to-r from-orange-600 to-red-600' :
                    item.category === 'guides' ? 'bg-gradient-to-r from-cyan-600 to-teal-600' :
                    'bg-gradient-to-r from-pink-600 to-rose-600'
                  }`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-purple-400 bg-purple-400/20 px-2 py-1 rounded-full">
                        {item.type}
                      </span>
                      {item.featured && (
                        <span className="text-xs font-medium text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          {item.rating}
                        </span>
                        <span>{item.views} views</span>
                      </div>
                      
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Content */}
        <div className="text-center">
          <Link
            href="/content-library"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            View All Content
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}