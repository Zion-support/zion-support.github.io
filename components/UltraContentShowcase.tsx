'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Calendar, Clock, User, TrendingUp, Star, Download, BookOpen, Play, SparklesIcon } from 'lucide-react';

export default function UltraContentShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Content', count: 60 },
    { id: 'ai-automation', name: 'AI Automation', count: 15 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 10 },
    { id: 'case-studies', name: 'Case Studies', count: 20 },
    { id: 'resources', name: 'Resources', count: 10 },
    { id: 'trends', name: 'Trends & Insights', count: 5 }
  ];

  const content = [
    {
      id: 0,
      title: "Advanced RAG Systems 2025: Production-Ready Implementation Guide",
      description: "Master advanced RAG (Retrieval-Augmented Generation) systems with our comprehensive 2025 guide. Learn production patterns, optimization techniques, and real-world implementations.",
      category: "ai-automation",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🔍",
      href: "/blog/ai-2025-advanced-rag-systems",
      tags: ["RAG Systems", "Advanced AI", "Production", "Implementation"]
    },
    {
      id: 1,
      title: "AI Multimodal Revolution 2025: Vision, Voice, and Text Integration",
      description: "Explore how multimodal AI is revolutionizing human-computer interaction by seamlessly combining vision, voice, and text processing. Learn about the latest breakthroughs and real-world applications.",
      category: "ai-automation",
      type: "Article",
      readTime: "28 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🎭",
      href: "/blog/ai-2025-multimodal-revolution",
      tags: ["Multimodal AI", "Vision", "Voice", "Text Processing"]
    },
    {
      id: 2,
      title: "Quantum Machine Learning 2025: The Next Frontier of AI",
      description: "Discover how quantum computing is revolutionizing machine learning, enabling exponential speedups in optimization, pattern recognition, and complex problem solving.",
      category: "trends",
      type: "Article",
      readTime: "32 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "⚛️",
      href: "/blog/ai-2025-quantum-machine-learning",
      tags: ["Quantum AI", "Machine Learning", "Quantum Computing", "Innovation"]
    },
    {
      id: 3,
      title: "AI Autonomous Manufacturing Revolution: $200M Success Story",
      description: "Complete case study: How a Fortune 500 manufacturer achieved $200M in cost savings and 300% productivity gains through AI-powered autonomous manufacturing systems.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🏭",
      href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 4,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.",
      category: "resources",
      type: "Free Download",
      readTime: "200+ pages",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"]
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
      tags: ["AI Cybersecurity", "Threat Detection", "Zero Trust", "Security"]
    },
    {
      id: 6,
      title: "Edge AI Agents 2025: Running Autonomous Agents in Production",
      description: "Architectures, safety, and observability for deploying autonomous agents at the edge.",
      category: "ai-automation",
      type: "Article",
      readTime: "21 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🤖",
      href: "/blog/ai-2025-edge-agents-in-production",
      tags: ["Edge AI", "Agents", "Observability", "Safety"]
    },
    {
      id: 7,
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
      tags: ["AI Architecture", "Microservices", "Scalability", "Implementation"]
    },
    {
      id: 8,
      title: "Real-Time Voice Agents in 2025: Architectures, Safety, and ROI",
      description: "Low-latency, reliable voice agents with guardrails and observability for production.",
      category: "ai-automation",
      type: "Article",
      readTime: "17 min read",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🎙️",
      href: "/blog/ai-2025-realtime-voice-agents",
      tags: ["Voice", "Agents", "Latency", "Guardrails"]
    },
    {
      id: 9,
      title: "AI Evaluation Checklist 2025 (Free)",
      description: "Operational evals for safety, reliability, latency, and cost with ready templates.",
      category: "resources",
      type: "Free Download",
      readTime: "Checklist",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: true,
      trending: false,
      icon: "✅",
      href: "/resources/ai-evaluation-checklist-2025",
      tags: ["Evals", "Templates", "Checklist", "Reliability"]
    },
    {
      id: 10,
      title: "Insurance Claims Automation: 55% OPEX Reduction",
      description: "Automating FNOL, triage, and fraud checks with agentic workflows in insurance.",
      category: "case-studies",
      type: "Case Study",
      readTime: "14 min read",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "📄",
      href: "/case-studies/ai-insurance-claims-automation-success-2025",
      tags: ["Insurance", "Claims", "Agents", "OPEX"]
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
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <SparklesIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">🚀 ULTRA CONTENT SHOWCASE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🎉 Revolutionary AI Content Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most comprehensive collection of AI insights, case studies, and resources. 
            From cutting-edge research to proven implementation strategies, find everything you need to succeed in 2025.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">60+</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">20</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
            <div className="text-gray-600">Downloads</div>
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="trending">Trending</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ Featured Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.filter(item => item.featured).map(item => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div className="flex items-center gap-2">
                        {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                        {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                        item.type === 'Free Download' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-gray-500 font-normal ml-2">({sortedContent.length})</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedContent.map(item => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div className="flex items-center gap-2">
                      {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                      {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                      item.type === 'Free Download' ? 'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {sortedContent.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources. Join 15,000+ 
            professionals who trust our content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}