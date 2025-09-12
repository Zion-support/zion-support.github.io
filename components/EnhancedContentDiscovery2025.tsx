"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  BookOpen,
  ArrowRight,
  X,
  Grid,
  List,
  Zap,
  Brain,
  Building2,
  Users,
  Shield
} from 'lucide-react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'innovation' | 'solution' | 'case-study' | 'blog' | 'whitepaper';
  category: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  readTime: string;
  rating: number;
  featured?: boolean;
  trending?: boolean;
  new?: boolean;
}

const EnhancedContentDiscovery2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Technology',
      description: 'Revolutionary integration of quantum computing with artificial intelligence, delivering unprecedented processing power.',
      type: 'innovation',
      category: 'AI Technology',
      href: '/innovations/quantum-ai-fusion',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      readTime: '12 min',
      rating: 4.9,
      featured: true,
      trending: true
    },
    {
      id: 'enterprise-automation-suite',
      title: 'Enterprise Automation Suite',
      description: 'Complete automation platform that streamlines operations and increases productivity by 300%.',
      type: 'solution',
      category: 'Business Solutions',
      href: '/solutions/enterprise-automation',
      icon: Building2,
      color: 'from-blue-500 to-indigo-600',
      readTime: '15 min',
      rating: 4.8,
      featured: true
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation',
      description: 'How a Fortune 500 company achieved 300% efficiency increase and $50M+ savings with our AI solutions.',
      type: 'case-study',
      category: 'Success Stories',
      href: '/case-studies/fortune-500-ai-transformation',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      readTime: '8 min',
      rating: 4.9,
      trending: true
    },
    {
      id: 'neural-interface-platform',
      title: 'Advanced Neural Interface Platform',
      description: 'Direct brain-computer interface technology enabling seamless human-AI collaboration.',
      type: 'innovation',
      category: 'AI Technology',
      href: '/innovations/neural-interface-platform',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      readTime: '18 min',
      rating: 4.7,
      new: true
    },
    {
      id: 'ai-analytics-platform',
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics platform providing real-time insights and predictive modeling.',
      type: 'solution',
      category: 'Business Solutions',
      href: '/solutions/ai-analytics-platform',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      readTime: '14 min',
      rating: 4.8
    },
    {
      id: 'quantum-security-framework',
      title: 'Quantum-Secure AI Framework',
      description: 'Next-generation security framework protecting AI systems against quantum computing threats.',
      type: 'innovation',
      category: 'Security',
      href: '/innovations/quantum-security-framework',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      readTime: '10 min',
      rating: 4.9,
      new: true
    },
    {
      id: 'ai-implementation-guide',
      title: 'Complete AI Implementation Guide',
      description: 'Comprehensive guide to implementing AI solutions in enterprise environments.',
      type: 'whitepaper',
      category: 'Resources',
      href: '/resources/ai-implementation-guide',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-600',
      readTime: '25 min',
      rating: 4.6
    },
    {
      id: 'customer-intelligence-hub',
      title: 'Customer Intelligence Hub',
      description: 'Comprehensive customer data platform that personalizes experiences and increases conversion rates.',
      type: 'solution',
      category: 'Business Solutions',
      href: '/solutions/customer-intelligence',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      readTime: '16 min',
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'AI Technology', label: 'AI Technology', count: contentItems.filter(item => item.category === 'AI Technology').length },
    { id: 'Business Solutions', label: 'Business Solutions', count: contentItems.filter(item => item.category === 'Business Solutions').length },
    { id: 'Success Stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'Success Stories').length },
    { id: 'Security', label: 'Security', count: contentItems.filter(item => item.category === 'Security').length },
    { id: 'Resources', label: 'Resources', count: contentItems.filter(item => item.category === 'Resources').length }
  ];

  useEffect(() => {
    let filtered = contentItems;

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'innovation': return '🚀';
      case 'solution': return '💼';
      case 'case-study': return '📊';
      case 'blog': return '📝';
      case 'whitepaper': return '📄';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'innovation': return 'text-purple-600 bg-purple-100';
      case 'solution': return 'text-blue-600 bg-blue-100';
      case 'case-study': return 'text-green-600 bg-green-100';
      case 'blog': return 'text-orange-600 bg-orange-100';
      case 'whitepaper': return 'text-indigo-600 bg-indigo-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI innovations, business solutions, 
            case studies, and expert insights. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, solutions, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Category</span>
                <span className="text-sm text-gray-500">({selectedCategory === 'all' ? 'All' : selectedCategory})</span>
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-10"
                  >
                    <div className="p-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${
                            selectedCategory === category.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{category.label}</span>
                            <span className="text-sm text-gray-500">({category.count})</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">
            Showing {filteredContent.length} of {contentItems.length} results
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>Trending</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>Featured</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Latest</span>
            </div>
          </div>
        </div>

        {/* Content Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
        }>
          {filteredContent.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={item.href}>
                  <article className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group-hover:scale-105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}>
                    {/* Image/Icon Section */}
                    <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-video'} bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                      <IconComponent className="w-12 h-12 text-white" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.featured && (
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            ⭐ FEATURED
                          </span>
                        )}
                        {item.trending && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            🔥 TRENDING
                          </span>
                        )}
                        {item.new && (
                          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTypeColor(item.type)}`}>
                          {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-500">{item.category}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{item.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No content found</h3>
            <p className="text-gray-600 mb-8">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedContentDiscovery2025;