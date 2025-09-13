'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Grid, List, ArrowRight, Clock, Users, Star, TrendingUp, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video' | 'tool' | 'case-study';
  readTime: string;
  views: number;
  rating: number;
  trending: boolean;
  tags: string[];
  thumbnail: string;
  link: string;
}

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isVisible, setIsVisible] = useState(false);
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const categories = [
    { id: 'all', label: 'All Content', count: 156 },
    { id: 'ai-automation', label: 'AI Automation', count: 42 },
    { id: 'quantum-computing', label: 'Quantum Computing', count: 28 },
    { id: 'neural-interfaces', label: 'Neural Interfaces', count: 19 },
    { id: 'enterprise-solutions', label: 'Enterprise Solutions', count: 31 },
    { id: 'case-studies', label: 'Case Studies', count: 36 }
  ];

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Revolutionary AI Automation Framework 2025',
      description: 'Discover the next generation of AI automation that adapts and learns from your business processes.',
      category: 'ai-automation',
      type: 'article',
      readTime: '8 min',
      views: 15420,
      rating: 4.9,
      trending: true,
      tags: ['AI', 'Automation', 'Machine Learning'],
      thumbnail: '/api/placeholder/300/200',
      link: '/ai-automation-framework-2025'
    },
    {
      id: '2',
      title: 'Quantum Computing Breakthrough Analysis',
      description: 'Deep dive into the latest quantum computing advancements and their real-world applications.',
      category: 'quantum-computing',
      type: 'video',
      readTime: '15 min',
      views: 8930,
      rating: 4.8,
      trending: true,
      tags: ['Quantum', 'Computing', 'Breakthrough'],
      thumbnail: '/api/placeholder/300/200',
      link: '/quantum-computing-breakthrough'
    },
    {
      id: '3',
      title: 'Neural Interface Implementation Guide',
      description: 'Complete guide to implementing neural interface technology in your organization.',
      category: 'neural-interfaces',
      type: 'tool',
      readTime: '12 min',
      views: 6780,
      rating: 4.7,
      trending: false,
      tags: ['Neural', 'Interface', 'Implementation'],
      thumbnail: '/api/placeholder/300/200',
      link: '/neural-interface-guide'
    },
    {
      id: '4',
      title: 'Enterprise AI Transformation Case Study',
      description: 'How Fortune 500 companies achieved 300% ROI with our AI solutions.',
      category: 'case-studies',
      type: 'case-study',
      readTime: '10 min',
      views: 12450,
      rating: 4.9,
      trending: true,
      tags: ['Enterprise', 'Transformation', 'ROI'],
      thumbnail: '/api/placeholder/300/200',
      link: '/enterprise-ai-case-study'
    },
    {
      id: '5',
      title: 'Advanced AI Tools Showcase 2025',
      description: 'Explore the most powerful AI tools and platforms available today.',
      category: 'ai-automation',
      type: 'video',
      readTime: '20 min',
      views: 18760,
      rating: 4.8,
      trending: true,
      tags: ['AI Tools', 'Showcase', '2025'],
      thumbnail: '/api/placeholder/300/200',
      link: '/ai-tools-showcase-2025'
    },
    {
      id: '6',
      title: 'Quantum Neural Fusion Technology',
      description: 'The future of computing: quantum and neural technologies working together.',
      category: 'quantum-computing',
      type: 'article',
      readTime: '14 min',
      views: 9650,
      rating: 4.6,
      trending: false,
      tags: ['Quantum', 'Neural', 'Fusion'],
      thumbnail: '/api/placeholder/300/200',
      link: '/quantum-neural-fusion'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let filtered = contentItems;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <span className="text-red-500">📹</span>;
      case 'tool': return <span className="text-blue-500">🔧</span>;
      case 'case-study': return <span className="text-green-500">📊</span>;
      default: return <span className="text-purple-500">📄</span>;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI solutions, case studies, and breakthrough technologies
          </p>
        </div>

        {/* Search and Filters */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-600">
            Showing <span className="font-bold text-blue-600">{filteredContent.length}</span> results
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
          </p>
        </div>

        {/* Content Grid/List */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative">
                    {item.trending && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>Trending</span>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-sm">
                      {getTypeIcon(item.type)}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                        {categories.find(c => c.id === item.category)?.label}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{item.views.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <Link 
                        href={item.link}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredContent.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-48 lg:h-32 h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl relative flex-shrink-0">
                      {item.trending && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>Trending</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                          {categories.find(c => c.id === item.category)?.label}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{item.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{item.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{item.views.toLocaleString()} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getTypeIcon(item.type)}
                            <span className="capitalize">{item.type.replace('-', ' ')}</span>
                          </div>
                        </div>
                        
                        <Link 
                          href={item.link}
                          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredContent.length > 0 && (
          <div className={`text-center mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Load More Content
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;