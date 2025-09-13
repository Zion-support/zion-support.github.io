'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Bookmark, 
  Share2, 
  Download, 
  Eye,
  Clock,
  User,
  Tag,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cpu,
  Database,
  Globe,
  Lock,
  CheckCircle,
  Play,
  FileText,
  Video,
  Image,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Shield,
  Award,
  Users,
  Calendar,
  MessageCircle,
  Heart,
  ThumbsUp,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Settings,
  Bell,
  Menu,
  X
} from 'lucide-react';

const UltimateContentHub2026 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid, count: 1247 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 342 },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu, count: 156 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 289 },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, count: 198 },
    { id: 'security', name: 'Security', icon: Shield, count: 134 },
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud, count: 128 }
  ];

  const contentTypes = [
    { id: 'articles', name: 'Articles', icon: FileText, count: 456 },
    { id: 'videos', name: 'Videos', icon: Video, count: 234 },
    { id: 'tutorials', name: 'Tutorials', icon: GraduationCap, count: 189 },
    { id: 'case-studies', name: 'Case Studies', icon: Briefcase, count: 156 },
    { id: 'whitepapers', name: 'Whitepapers', icon: BookOpen, count: 98 },
    { id: 'webinars', name: 'Webinars', icon: Calendar, count: 67 },
    { id: 'tools', name: 'Tools', icon: Code, count: 47 }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'Revolutionary AI Breakthroughs 2026',
      description: 'Explore the latest AI technologies that are transforming industries and creating new possibilities.',
      type: 'article',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      readTime: '8 min read',
      publishDate: '2026-01-15',
      views: 15420,
      likes: 892,
      tags: ['AI', 'Machine Learning', 'Innovation', 'Technology'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Quantum Computing: The Future is Now',
      description: 'Deep dive into quantum computing capabilities and their real-world applications.',
      type: 'video',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      readTime: '15 min watch',
      publishDate: '2026-01-12',
      views: 8934,
      likes: 567,
      tags: ['Quantum Computing', 'Physics', 'Technology', 'Future'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: 'Smart Automation Implementation Guide',
      description: 'Step-by-step guide to implementing intelligent automation in your organization.',
      type: 'tutorial',
      category: 'automation',
      author: 'Alex Thompson',
      readTime: '12 min read',
      publishDate: '2026-01-10',
      views: 6789,
      likes: 423,
      tags: ['Automation', 'Implementation', 'Guide', 'Business'],
      image: '/api/placeholder/400/250',
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: 'Advanced Analytics Dashboard Setup',
      description: 'Create powerful analytics dashboards that provide actionable insights.',
      type: 'tutorial',
      category: 'analytics',
      author: 'Emily Watson',
      readTime: '20 min read',
      publishDate: '2026-01-08',
      views: 4567,
      likes: 298,
      tags: ['Analytics', 'Dashboard', 'Data Visualization', 'Tutorial'],
      image: '/api/placeholder/400/250',
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices 2026',
      description: 'Essential security measures to protect your digital infrastructure.',
      type: 'whitepaper',
      category: 'security',
      author: 'Security Team',
      readTime: '25 min read',
      publishDate: '2026-01-05',
      views: 7890,
      likes: 512,
      tags: ['Security', 'Cybersecurity', 'Best Practices', 'Protection'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: false
    },
    {
      id: 6,
      title: 'Cloud Migration Success Story',
      description: 'How TechCorp achieved 300% efficiency improvement through cloud migration.',
      type: 'case-study',
      category: 'cloud',
      author: 'Case Study Team',
      readTime: '10 min read',
      publishDate: '2026-01-03',
      views: 3456,
      likes: 234,
      tags: ['Cloud Computing', 'Migration', 'Success Story', 'Efficiency'],
      image: '/api/placeholder/400/250',
      featured: false,
      trending: true
    }
  ];

  const filteredContent = featuredContent.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    const typeMap = {
      article: FileText,
      video: Video,
      tutorial: GraduationCap,
      'case-study': Briefcase,
      whitepaper: BookOpen,
      webinar: Calendar,
      tool: Code
    };
    return typeMap[type] || FileText;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      ai: 'from-purple-600 to-blue-600',
      quantum: 'from-cyan-600 to-teal-600',
      automation: 'from-orange-600 to-red-600',
      analytics: 'from-green-600 to-emerald-600',
      security: 'from-red-600 to-pink-600',
      cloud: 'from-blue-600 to-indigo-600'
    };
    return colorMap[category] || 'from-gray-600 to-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Ultimate Content Hub 2026</h1>
              <p className="text-gray-600">Discover, learn, and master cutting-edge technologies</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Types */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Types</h3>
              <div className="space-y-2">
                {contentTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div key={type.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{type.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{type.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Total Content</span>
                  <span className="font-bold">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">This Month</span>
                  <span className="font-bold">+89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Active Users</span>
                  <span className="font-bold">12.5K</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      viewMode === 'list' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {filteredContent.length} results
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filter</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredContent.map((item, index) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className={`relative ${
                      viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'h-48'
                    }`}>
                      <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(item.category)} flex items-center justify-center`}>
                        <TypeIcon className="w-12 h-12 text-white" />
                      </div>
                      {item.featured && (
                        <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                      {item.trending && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Trending
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <TypeIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 capitalize">{item.type}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{item.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Bookmark className="w-4 h-4" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 mx-auto">
                Load More Content
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentHub2026;