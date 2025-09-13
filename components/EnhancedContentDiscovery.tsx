'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Calendar, Clock, User, TrendingUp, Star, Download, BookOpen, Play, SparklesIcon, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'webinar' | 'whitepaper' | 'resource';
  category: string;
  readTime: string;
  date: string;
  author: string;
  featured: boolean;
  trending: boolean;
  icon: string;
  tags: string[];
}

export default function EnhancedContentDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const categories = [
    { id: 'all', name: 'All Content', count: 120 },
    { id: 'ai-automation', name: 'AI Automation', count: 35 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 25 },
    { id: 'case-studies', name: 'Case Studies', count: 30 },
    { id: 'resources', name: 'Resources', count: 20 },
    { id: 'trends', name: 'Trends & Insights', count: 10 }
  ];

  const content: ContentItem[] = [
    {
      id: '1',
      title: "AI Agent Cost Optimization 2025: Ship Faster, Spend Less",
      description: "Practical patterns to reduce LLM and agent runtime costs without sacrificing product velocity or reliability. Budgets, caching, batching, model routing, eval-driven guardrails.",
      href: "/blog/ai-2025-agent-cost-optimization",
      type: "blog",
      category: "ai-automation",
      readTime: "25 min read",
      date: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "💸",
      tags: ["Cost Optimization", "AI Agents", "LLM", "Production"]
    },
    {
      id: '2',
      title: "Insurance Underwriting Agents: 42% Cycle Time Reduction",
      description: "How an insurer automated evidence gathering, risk scoring, and policy recommendations using agentic workflows with auditable guardrails.",
      href: "/case-studies/ai-2025-insurance-underwriting-agents",
      type: "case-study",
      category: "case-studies",
      readTime: "18 min read",
      date: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: false,
      icon: "🛡️",
      tags: ["Insurance", "Automation", "Agents", "ROI"]
    },
    {
      id: '3',
      title: "Customer Journey Orchestration 2025: Playbooks and Templates",
      description: "Free resource: event models, prompt templates, evaluators, and measurement plans to operationalize AI-powered customer journey orchestration.",
      href: "/resources/ai-2025-customer-journey-orchestration",
      type: "resource",
      category: "resources",
      readTime: "12 min read",
      date: "2025-01-28",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "🎯",
      tags: ["Customer Journey", "Templates", "Orchestration", "Free"]
    },
    {
      id: '4',
      title: "Advanced RAG Systems 2025: Production-Ready Implementation",
      description: "Master advanced RAG (Retrieval-Augmented Generation) systems with our comprehensive 2025 guide. Learn production patterns, optimization techniques, and real-world implementations.",
      href: "/blog/ai-2025-advanced-rag-systems",
      type: "blog",
      category: "ai-automation",
      readTime: "30 min read",
      date: "2025-01-27",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🔍",
      tags: ["RAG Systems", "Advanced AI", "Production", "Implementation"]
    },
    {
      id: '5',
      title: "AI Multimodal Revolution 2025: Vision, Voice, and Text Integration",
      description: "Explore how multimodal AI is revolutionizing human-computer interaction by seamlessly combining vision, voice, and text processing.",
      href: "/blog/ai-2025-multimodal-revolution",
      type: "blog",
      category: "ai-automation",
      readTime: "28 min read",
      date: "2025-01-27",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🎭",
      tags: ["Multimodal AI", "Vision", "Voice", "Text Processing"]
    },
    {
      id: '6',
      title: "Quantum AI Healthcare Transformation: Breakthrough Applications",
      description: "Discover how quantum computing is revolutionizing healthcare AI, from drug discovery to personalized medicine and diagnostic imaging.",
      href: "/case-studies/quantum-ai-healthcare-transformation",
      type: "case-study",
      category: "case-studies",
      readTime: "22 min read",
      date: "2025-01-26",
      author: "Zion Tech Group",
      featured: true,
      trending: false,
      icon: "⚕️",
      tags: ["Quantum AI", "Healthcare", "Drug Discovery", "Innovation"]
    }
  ];

  useEffect(() => {
    let filtered = content;

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

    // Sort content
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'trending':
          return b.trending ? 1 : -1;
        case 'featured':
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Revolutionary AI Content
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive library of AI insights, case studies, and resources. 
              From cutting-edge research to proven implementation strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search content, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="trending">Trending</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredContent.length} of {content.length} content items
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex space-x-1">
                      {item.featured && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      {item.trending && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                          Trending
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {item.type.replace('-', ' ')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
              Our team creates custom content tailored to your specific needs. 
              Let us know what topics you&apos;d like to explore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Request Custom Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}