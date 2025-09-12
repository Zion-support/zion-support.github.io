<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, SparklesIcon, ChartBarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Clock, TrendingUp, BookOpen, FileText, Award } from 'lucide-react';
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
>>>>>>> cursor/create-and-deploy-new-content-3130
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  tags: string[];
  isNew?: boolean;
  isTrending?: boolean;
  views?: number;
  rating?: number;
}

const InteractiveContentDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-advanced-automation',
      title: 'AI Advanced Automation 2025: Complete Implementation Guide',
      description: 'Master advanced AI automation with our comprehensive guide. Learn strategies that deliver 300%+ ROI and 60% cost reduction.',
      href: '/blog/ai-2025-advanced-automation',
      icon: '🤖',
      category: 'AI Automation',
      readTime: '22 min read',
      tags: ['automation', 'AI', 'implementation', 'ROI', 'productivity'],
      isNew: true,
      views: 3200,
      rating: 4.9
    },
    {
      id: 'generative-agents-production',
      title: 'Generative AI Agents in Production 2025',
      description: 'Deploy and manage AI agents in production environments. Achieve 99.9% uptime and 400%+ ROI with proven strategies.',
      href: '/blog/ai-2025-generative-agents-in-production',
      icon: '🧠',
      category: 'AI Agents',
      readTime: '28 min read',
      tags: ['AI agents', 'production', 'deployment', 'automation', 'scalability'],
      isTrending: true,
      views: 4100,
      rating: 4.8
    },
    {
      id: 'cybersecurity-breakthrough',
      title: '$50M Cybersecurity Transformation Success',
      description: 'How a Fortune 500 company achieved 99.8% threat detection accuracy and $50M in security cost savings.',
      href: '/case-studies/ai-cybersecurity-transformation-breakthrough-2025',
      icon: '🛡️',
      category: 'Case Study',
      type: 'Success Story',
      tags: ['cybersecurity', 'AI security', 'threat detection', 'cost savings', 'Fortune 500'],
      isNew: true,
      views: 2800,
      rating: 4.9
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our 200+ page comprehensive guide with templates, checklists, and proven strategies for AI success.',
      href: '/resources/ai-implementation-master-guide-2026',
      icon: '📚',
      category: 'Free Resource',
      type: '200+ Pages',
      tags: ['implementation', 'guide', 'templates', 'checklists', 'best practices'],
      isNew: true,
      views: 15000,
      rating: 4.9
    },
    {
      id: 'ai-breakthrough-innovations',
      title: 'AI 2025 Breakthrough Innovations: Revolutionary Technologies',
      description: 'Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence.',
      href: '/blog/ai-2025-breakthrough-innovations',
      icon: '🚀',
      category: 'AI Innovations',
      readTime: '25 min read',
      tags: ['innovations', 'AI trends', 'technology', 'future', 'breakthrough'],
      isTrending: true,
      views: 5200,
      rating: 4.7
    },
    {
      id: 'ai-sustainability-green-tech',
      title: 'AI Sustainability & Green Tech 2025',
      description: 'Building eco-friendly AI systems for the future. Learn about smart energy management and climate solutions.',
      href: '/blog/ai-sustainability-green-tech-2025',
      icon: '🌱',
      category: 'Sustainability',
      readTime: '20 min read',
      tags: ['sustainability', 'green tech', 'environment', 'energy', 'climate'],
      isNew: true,
      views: 1900,
      rating: 4.6
    },
    {
      id: 'ai-workforce-transformation',
      title: 'AI Workforce Transformation 2025',
      description: 'Complete guide to reskilling strategies and workforce adaptation for the AI era.',
      href: '/blog/ai-workforce-transformation-2025',
      icon: '👥',
      category: 'Workforce',
      readTime: '18 min read',
      tags: ['workforce', 'transformation', 'reskilling', 'human resources', 'future of work'],
      views: 2400,
      rating: 4.5
    },
    {
      id: 'ai-robotics-automation',
      title: 'AI Robotics & Automation 2025',
      description: 'The future of intelligent machines. Explore advances in AI-powered robotics and automation.',
      href: '/blog/ai-robotics-automation-2025',
      icon: '🤖',
      category: 'Robotics',
      readTime: '22 min read',
      tags: ['robotics', 'automation', 'manufacturing', 'intelligent machines', 'AI'],
      isTrending: true,
      views: 3100,
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'AI Automation', label: 'AI Automation', count: contentItems.filter(item => item.category === 'AI Automation').length },
    { id: 'AI Agents', label: 'AI Agents', count: contentItems.filter(item => item.category === 'AI Agents').length },
    { id: 'Case Study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'Case Study').length },
    { id: 'Free Resource', label: 'Resources', count: contentItems.filter(item => item.category === 'Free Resource').length },
    { id: 'AI Innovations', label: 'Innovations', count: contentItems.filter(item => item.category === 'AI Innovations').length },
    { id: 'Sustainability', label: 'Sustainability', count: contentItems.filter(item => item.category === 'Sustainability').length },
    { id: 'Workforce', label: 'Workforce', count: contentItems.filter(item => item.category === 'Workforce').length },
    { id: 'Robotics', label: 'Robotics', count: contentItems.filter(item => item.category === 'Robotics').length }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort content
    switch (sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'trending':
        filtered = filtered.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
    }

    setFilteredContent(filtered);
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover AI & Tech Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive library of AI articles, case studies, and resources. 
            Find exactly what you need with our intelligent discovery tools.
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
  type: 'blog' | 'case-study' | 'webinar' | 'whitepaper';
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  featured: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const InteractiveContentDiscovery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Advanced RAG Systems 2025: Production-Ready Implementation Guide',
      description: 'Master advanced RAG (Retrieval-Augmented Generation) systems with our comprehensive 2025 guide. Learn production patterns, optimization techniques, and real-world implementations.',
      href: '/blog/ai-2025-advanced-rag-systems',
      type: 'blog',
      category: 'Advanced AI',
      readTime: '25 min read',
      date: 'Jan 28, 2025',
      tags: ['RAG', 'AI Implementation', 'Production Systems', 'Vector Databases'],
      featured: true,
      difficulty: 'advanced'
    },
    {
      id: '2',
      title: 'AI Multimodal Revolution 2025: Vision, Voice, and Text Integration',
      description: 'Explore how multimodal AI is revolutionizing human-computer interaction by seamlessly combining vision, voice, and text processing.',
      href: '/blog/ai-2025-multimodal-revolution',
      type: 'blog',
      category: 'Multimodal AI',
      readTime: '28 min read',
      date: 'Jan 28, 2025',
      tags: ['Multimodal AI', 'Computer Vision', 'Speech Recognition', 'NLP'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025: The Next Frontier of AI',
      description: 'Discover how quantum computing is revolutionizing machine learning, enabling exponential speedups in optimization, pattern recognition, and complex problem solving.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      category: 'Quantum AI',
      readTime: '32 min read',
      date: 'Jan 28, 2025',
      tags: ['Quantum Computing', 'Machine Learning', 'Optimization', 'Quantum Algorithms'],
      featured: true,
      difficulty: 'advanced'
    },
    {
      id: '4',
      title: 'AI Autonomous Manufacturing Revolution: $200M Success Story',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved $200M in cost savings and 300% productivity gains through AI-powered autonomous manufacturing systems.',
      href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
      type: 'case-study',
      category: 'Case Study',
      readTime: '15 min read',
      date: 'Jan 28, 2025',
      tags: ['Manufacturing', 'Automation', 'Cost Savings', 'Productivity'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '5',
      title: 'Building Scalable AI Infrastructure: A Complete Guide',
      description: 'Learn how to design and implement AI infrastructure that scales with your business needs, from data pipelines to model deployment.',
      href: '/blog/scalable-ai-infrastructure',
      type: 'blog',
      category: 'AI Infrastructure',
      readTime: '20 min read',
      date: 'Jan 25, 2025',
      tags: ['Infrastructure', 'Scalability', 'DevOps', 'Cloud Computing'],
      featured: false,
      difficulty: 'intermediate'
    },
    {
      id: '6',
      title: 'Enterprise AI Security: Best Practices and Implementation',
      description: 'Comprehensive guide to securing AI systems in enterprise environments, covering data protection, model security, and compliance.',
      href: '/blog/enterprise-ai-security',
      type: 'blog',
      category: 'AI Security',
      readTime: '18 min read',
      date: 'Jan 22, 2025',
      tags: ['Security', 'Enterprise', 'Compliance', 'Data Protection'],
      featured: false,
      difficulty: 'advanced'
    },
    {
      id: '7',
      title: 'AI-Powered Customer Service: 90% Satisfaction Case Study',
      description: 'How a leading e-commerce company transformed customer service with AI, achieving 90% customer satisfaction and 60% cost reduction.',
      href: '/case-studies/ai-customer-service-transformation',
      type: 'case-study',
      category: 'Case Study',
      readTime: '12 min read',
      date: 'Jan 20, 2025',
      tags: ['Customer Service', 'E-commerce', 'Satisfaction', 'Cost Reduction'],
      featured: false,
      difficulty: 'beginner'
    },
    {
      id: '8',
      title: 'The Future of AI in Healthcare: Trends and Opportunities',
      description: 'Explore the latest trends in AI healthcare applications, from diagnostic tools to personalized medicine and drug discovery.',
      href: '/blog/ai-healthcare-trends-2025',
      type: 'blog',
      category: 'AI Healthcare',
      readTime: '22 min read',
      date: 'Jan 18, 2025',
      tags: ['Healthcare', 'Medical AI', 'Diagnostics', 'Personalized Medicine'],
      featured: false,
      difficulty: 'intermediate'
    }
  ];

  const categories = ['all', 'Advanced AI', 'Multimodal AI', 'Quantum AI', 'AI Infrastructure', 'AI Security', 'AI Healthcare', 'Case Study'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const types = ['all', 'blog', 'case-study', 'webinar', 'whitepaper'];

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      let filtered = contentItems;

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      // Filter by difficulty
      if (selectedDifficulty !== 'all') {
        filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
      }

      // Filter by type
      if (selectedType !== 'all') {
        filtered = filtered.filter(item => item.type === selectedType);
      }

      setFilteredContent(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedType]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'webinar': return '🎥';
      case 'whitepaper': return '📄';
      default: return '📄';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Perfect Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our intelligent content discovery tool to find exactly what you're looking for. Filter by topic, difficulty, content type, and more.
>>>>>>> cursor/create-and-deploy-new-content-3130
          </p>
        </div>

        {/* Search and Filters */}
<<<<<<< HEAD
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, case studies, and resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    {item.readTime && (
                      <span className="text-gray-500 text-xs">{item.readTime}</span>
                    )}
                    {item.type && (
                      <span className="text-gray-500 text-xs">{item.type}</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      {item.views && (
                        <span>👁️ {item.views.toLocaleString()}</span>
                      )}
                      {item.rating && (
                        <span>⭐ {item.rating}</span>
                      )}
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      {item.type ? 'Download' : 'Read'} →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-8">
            <Link
              href="/content-showcase"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              View All Content
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
=======
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search content, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedDifficulty('all');
                    setSelectedType('all');
                  }}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {isSearching ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching content...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
                </h3>
                {filteredContent.length > 0 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    Powered by AI Discovery
                  </div>
                )}
              </div>

              {filteredContent.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                  <MagnifyingGlassIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedDifficulty('all');
                      setSelectedType('all');
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{getTypeIcon(item.type)}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                              {item.difficulty}
                            </span>
                          </div>
                          {item.featured && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {item.title}
                        </h4>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {item.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{item.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <ClockIcon className="h-4 w-4 mr-1" />
                              {item.readTime}
                            </div>
                            <div className="flex items-center">
                              <ChartBarIcon className="h-4 w-4 mr-1" />
                              {item.category}
                            </div>
                          </div>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
<<<<<<< HEAD
=======
  icon: string;
  category: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool';
  readTime?: string;
  isNew?: boolean;
  isTrending?: boolean;
  isPopular?: boolean;
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI Advanced Automation 2025: Complete Enterprise Implementation Guide',
    description: 'Master advanced AI automation with our comprehensive guide. Learn enterprise strategies, implementation frameworks, and real-world case studies for maximum ROI.',
    href: '/blog/ai-2025-advanced-automation',
    icon: '🤖',
    category: 'AI Automation',
    type: 'blog',
    readTime: '25 min read',
    isNew: true,
    tags: ['automation', 'enterprise', 'implementation', 'ROI']
  },
  {
    id: '2',
    title: 'AI Cybersecurity Threats 2025: Complete Defense Strategy',
    description: 'Protect your organization from emerging AI cybersecurity threats. Learn about advanced attack vectors, defense strategies, and security best practices.',
    href: '/blog/ai-2025-cybersecurity-threats',
    icon: '🛡️',
    category: 'Cybersecurity',
    type: 'blog',
    readTime: '22 min read',
    isNew: true,
    tags: ['security', 'threats', 'defense', 'cybersecurity']
  },
  {
    id: '3',
    title: '$200M Manufacturing Success: Autonomous AI Systems Case Study',
    description: 'Discover how a Fortune 500 manufacturing company achieved $200M savings and 40% cost reduction with autonomous AI systems.',
    href: '/case-studies/ai-autonomous-manufacturing-success-2025',
    icon: '💰',
    category: 'Case Study',
    type: 'case-study',
    readTime: '15 min read',
    isTrending: true,
    tags: ['manufacturing', 'success', 'case-study', 'ROI']
  },
  {
    id: '4',
    title: 'AI Implementation Master Guide 2026: Complete 200+ Page Resource',
    description: 'Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.',
    href: '/resources/ai-implementation-master-guide-2026',
    icon: '📚',
    category: 'Master Guide',
    type: 'resource',
    readTime: '200+ pages',
    isNew: true,
    tags: ['guide', 'implementation', 'templates', 'checklist']
  },
  {
    id: '5',
    title: 'AI 2025 Breakthrough Innovations: Revolutionary Technologies',
    description: 'Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.',
    href: '/blog/ai-2025-breakthrough-innovations',
    icon: '🚀',
    category: 'AI Innovations',
    type: 'blog',
    readTime: '25 min read',
    isTrending: true,
    tags: ['innovations', 'technology', 'future', 'breakthrough']
  },
  {
    id: '6',
    title: 'AI Workforce Transformation 2025: Complete Reskilling Guide',
    description: 'Learn how to transform your workforce for the AI era with comprehensive reskilling strategies, training programs, and change management approaches.',
    href: '/blog/ai-workforce-transformation-2025',
    icon: '👥',
    category: 'Workforce',
    type: 'blog',
    readTime: '18 min read',
    isNew: true,
    tags: ['workforce', 'transformation', 'reskilling', 'training']
  },
  {
    id: '7',
    title: 'AI Data Privacy & Compliance 2025: Complete Guide',
    description: 'Navigate the complex landscape of AI data privacy regulations with our comprehensive compliance guide and best practices.',
    href: '/blog/ai-data-privacy-compliance-2025',
    icon: '🔒',
    category: 'Privacy',
    type: 'blog',
    readTime: '22 min read',
    isTrending: true,
    tags: ['privacy', 'compliance', 'data', 'regulations']
  },
  {
    id: '8',
    title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly AI',
    description: 'Learn how to build sustainable AI systems that reduce environmental impact while maintaining high performance.',
    href: '/blog/ai-sustainability-green-tech-2025',
    icon: '🌱',
    category: 'Sustainability',
    type: 'blog',
    readTime: '20 min read',
    isNew: true,
    tags: ['sustainability', 'green-tech', 'environment', 'eco-friendly']
  }
];

const categories = [
  'All',
  'AI Automation',
  'Cybersecurity',
  'Case Study',
  'Master Guide',
  'AI Innovations',
  'Workforce',
  'Privacy',
  'Sustainability'
];

const types = [
  'All',
  'Blog',
  'Case Study',
  'Resource',
  'Tool'
];

export default function InteractiveContentDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = contentItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== 'All') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory, selectedType]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      case 'tool':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Automation': 'bg-blue-100 text-blue-800',
      'Cybersecurity': 'bg-red-100 text-red-800',
      'Case Study': 'bg-green-100 text-green-800',
      'Master Guide': 'bg-purple-100 text-purple-800',
      'AI Innovations': 'bg-yellow-100 text-yellow-800',
      'Workforce': 'bg-indigo-100 text-indigo-800',
      'Privacy': 'bg-gray-100 text-gray-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusBadge = (item: ContentItem) => {
    if (item.isNew) return { text: 'NEW', color: 'bg-green-500 text-white' };
    if (item.isTrending) return { text: 'TRENDING', color: 'bg-orange-500 text-white' };
    if (item.isPopular) return { text: 'POPULAR', color: 'bg-blue-500 text-white' };
    return null;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🔍 Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our interactive discovery tool to find exactly the AI resources, guides, and insights you need. 
            Filter by category, type, or search for specific topics.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for AI content, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200 pt-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === category
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Type</label>
                    <div className="flex flex-wrap gap-2">
                      {types.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedType === type
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
            </h3>
            {(selectedCategory !== 'All' || selectedType !== 'All' || searchTerm) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedType('All');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedType}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredContent.map((item, index) => {
                const statusBadge = getStatusBadge(item);
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Link href={item.href} className="group block">
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full">
                        {statusBadge && (
                          <div className="flex justify-end mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge.color}`}>
                              {statusBadge.text}
                            </span>
                          </div>
                        )}
                        
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          {item.readTime && (
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.readTime}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            {item.type === 'blog' && <BookOpen className="w-3 h-3" />}
                            {item.type === 'case-study' && <Award className="w-3 h-3" />}
                            {item.type === 'resource' && <FileText className="w-3 h-3" />}
                            {item.type === 'tool' && <TrendingUp className="w-3 h-3" />}
                            <span className="capitalize">{item.type.replace('-', ' ')}</span>
                          </div>
                          <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
                            <span className="text-sm font-medium">Read More</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredContent.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedType('All');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </motion.div>
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
          )}
        </div>

        {/* Call to Action */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team creates custom content tailored to your specific needs. Let us know what topics you'd like to explore, and we'll create comprehensive resources just for you.
<<<<<<< HEAD
=======
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-lg opacity-90 mb-6">
              Our content library is constantly growing. Let us know what specific AI topics or resources you need.
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
<<<<<<< HEAD
<<<<<<< HEAD
                Request Custom Content
=======
                Request Content
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
                Request Custom Content
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
        </div>
>>>>>>> cursor/create-and-deploy-new-content-3130
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default InteractiveContentDiscovery;
=======
        </motion.div>
      </div>
    </section>
  );
}
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
export default InteractiveContentDiscovery;
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
