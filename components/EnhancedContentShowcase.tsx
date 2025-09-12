'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Calendar, Clock, User, TrendingUp, Star, Download, 
  BookOpen, Play, ArrowRight, Sparkles, Zap, Rocket, Brain, Globe,
  CheckCircle, ExternalLink
} from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  readTime: string;
  publishDate: string;
  author: string;
  featured: boolean;
  trending: boolean;
  icon: string;
  href: string;
  tags: string[];
  views?: number;
  downloads?: number;
}

const EnhancedContentShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Content', count: 75, icon: Globe },
    { id: 'ai-automation', name: 'AI Automation', count: 18, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12, icon: Zap },
    { id: 'case-studies', name: 'Case Studies', count: 25, icon: TrendingUp },
    { id: 'resources', name: 'Resources', count: 15, icon: Download },
    { id: 'trends', name: 'Trends & Insights', count: 5, icon: Sparkles }
  ];

  const content: ContentItem[] = [
    {
      id: 0,
      title: "AI 2025 Revolutionary Breakthroughs: The Future is Here",
      description: "Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions that are revolutionizing industries worldwide.",
      category: "ai-automation",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-30",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🚀",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      tags: ["AI Breakthroughs", "Innovation", "Future Tech", "Revolutionary"],
      views: 15420,
      downloads: 0
    },
    {
      id: 1,
      title: "AI Space Exploration Breakthrough 2025: $2B Mission Success",
      description: "Discover how AI-powered space exploration achieved unprecedented success with $2.1B in mission value, 99.9% autonomous operation, and revolutionary discoveries in deep space exploration.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-30",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🌌",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      tags: ["Space AI", "Mission Success", "Autonomous Systems", "Breakthrough"],
      views: 12850,
      downloads: 0
    },
    {
      id: 2,
      title: "Edge AI Agents 2025: Running Autonomous Agents in Production",
      description: "Architectures, safety, and observability for deploying autonomous agents at the edge with real-world production examples and implementation guides.",
      category: "ai-automation",
      type: "Article",
      readTime: "21 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🤖",
      href: "/blog/ai-2025-edge-agents-in-production",
      tags: ["Edge AI", "Agents", "Observability", "Safety"],
      views: 12300,
      downloads: 0
    },
    {
      id: 3,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices for successful AI implementation.",
      category: "resources",
      type: "Free Download",
      readTime: "200+ pages",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"],
      views: 25600,
      downloads: 15420
    },
    {
      id: 4,
      title: "Advanced AI Architecture Patterns for 2025: Building Scalable, Resilient Systems",
      description: "Master advanced AI architecture patterns for 2025. Learn microservices, event-driven design, and distributed AI systems with real-world examples and implementation guides.",
      category: "ai-automation",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🏗️",
      href: "/blog/ai-2025-advanced-ai-architecture",
      tags: ["AI Architecture", "Microservices", "Scalability", "Implementation"],
      views: 18900,
      downloads: 0
    },
    {
      id: 5,
      title: "AI Cybersecurity Revolution 2025: Protecting Against Next-Gen Threats",
      description: "Discover the AI cybersecurity revolution transforming enterprise security in 2025. Learn about advanced threat detection, automated response, and zero-trust AI architectures.",
      category: "cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🛡️",
      href: "/blog/ai-2025-cybersecurity-revolution",
      tags: ["AI Cybersecurity", "Threat Detection", "Zero Trust", "Security"],
      views: 16700,
      downloads: 0
    },
    {
      id: 6,
      title: "Quantum Computing Breakthrough 2025: The AI Revolution Accelerates",
      description: "Discover the quantum computing breakthroughs revolutionizing AI in 2025. Learn about quantum machine learning, quantum advantage, and the future of computational intelligence.",
      category: "trends",
      type: "Article",
      readTime: "28 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "⚛️",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      tags: ["Quantum Computing", "Quantum AI", "Machine Learning", "Innovation"],
      views: 14200,
      downloads: 0
    },
    {
      id: 7,
      title: "AI Healthcare Diagnosis Success 2025: 95% Accuracy Case Study",
      description: "Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging and diagnostic systems.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-10",
      author: "Zion Tech Group",
      featured: true,
      trending: false,
      icon: "🏥",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      tags: ["Healthcare", "AI Success", "Case Study", "Medical AI"],
      views: 11200,
      downloads: 0
    },
    {
      id: 8,
      title: "$200M Manufacturing Success: AI Autonomous Systems Case Study 2025",
      description: "Discover how a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems. Complete case study with implementation details, ROI analysis, and lessons learned.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"],
      views: 19800,
      downloads: 0
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
      case 'popular':
        return (b.views || 0) - (a.views || 0);
      default:
        return 0;
    }
  });

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">🚀 FRESH CONTENT JUST DROPPED</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Enhanced Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest AI insights, breakthrough case studies, and revolutionary resources. 
            Expert analysis to accelerate your success in 2025 and beyond.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">75</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">25</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
        </div>

        {/* Featured Content Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                  <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 30, 2025</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 Revolutionary AI Content Just Dropped</h2>
                <p className="text-lg opacity-90 max-w-3xl mx-auto">
                  New this week: AI Revolutionary Breakthroughs, Space Exploration Success, Advanced Architecture Patterns, 
                  and comprehensive implementation guides. Expert insights to accelerate your growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredContent.slice(0, 3).map((item, index) => (
                  <Link key={index} href={item.href} className="group">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between text-xs opacity-75">
                        <span>{item.readTime}</span>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
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
                {categories.map(category => (
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
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="trending">Trending</option>
                <option value="featured">Featured</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
          {sortedContent.map(item => (
            <Link key={item.id} href={item.href} className="group">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 ${
                  viewMode === 'list' ? 'flex p-6' : 'p-6'
                }`}
              >
                {viewMode === 'list' && (
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <div className="text-4xl">{item.icon}</div>
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    {viewMode === 'grid' && (
                      <div className="text-4xl mb-4">{item.icon}</div>
                    )}
                    <div className="flex items-center gap-2">
                      {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                      {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                    </div>
                  </div>
                  
                  <h3 className={`font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors ${
                    viewMode === 'list' ? 'text-xl' : 'text-lg'
                  } line-clamp-2`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 ${
                    viewMode === 'list' ? 'text-base' : 'text-sm'
                  } line-clamp-3`}>
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex items-center justify-between text-sm text-gray-500 ${
                    viewMode === 'list' ? 'text-base' : 'text-sm'
                  }`}>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.publishDate).toLocaleDateString()}
                      </span>
                      {item.views && (
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                        item.type === 'Free Download' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.type}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our team creates custom content tailored to your specific needs. Let us know what topics you'd like to explore, and we'll create comprehensive resources just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;