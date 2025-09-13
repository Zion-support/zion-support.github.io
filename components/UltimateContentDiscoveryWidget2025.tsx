import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Brain, Zap, Target, Users, Globe, TrendingUp, Clock } from 'lucide-react';

export default function UltimateContentDiscoveryWidget2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: Globe, count: 500 },
    { id: 'predictions', name: 'AI Predictions', icon: TrendingUp, count: 120 },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap, count: 85 },
    { id: 'neural', name: 'Neural Interfaces', icon: Brain, count: 75 },
    { id: 'automation', name: 'Automation', icon: Target, count: 90 },
    { id: 'ethics', name: 'AI Ethics', icon: Users, count: 60 },
    { id: 'implementation', name: 'Implementation', icon: Clock, count: 70 }
  ];

  const featuredContent = [
    {
      title: "AI 2025-2030 Ultimate Predictions",
      description: "Comprehensive predictions covering quantum computing, neural interfaces, and AI consciousness evolution.",
      category: "predictions",
      readTime: "15 min read",
      views: "1.2M",
      href: "/ai-trends-2025-ultimate-predictions",
      featured: true
    },
    {
      title: "Quantum-AI Fusion Breakthrough Guide",
      description: "Complete guide to understanding and implementing quantum-AI hybrid systems for maximum ROI.",
      category: "quantum",
      readTime: "12 min read",
      views: "850K",
      href: "/quantum-computing-2025",
      featured: true
    },
    {
      title: "Neural Interface Revolution 2026",
      description: "Revolutionary developments in brain-computer interfaces and cognitive enhancement technologies.",
      category: "neural",
      readTime: "18 min read",
      views: "650K",
      href: "/neural-interface-revolution-2026",
      featured: true
    },
    {
      title: "Autonomous Business Systems Implementation",
      description: "Step-by-step guide to implementing autonomous decision systems in your business.",
      category: "automation",
      readTime: "20 min read",
      views: "420K",
      href: "/autonomous-business-systems-2025",
      featured: false
    },
    {
      title: "AI Ethics and Governance Framework",
      description: "Comprehensive framework for ethical AI deployment and governance in enterprise environments.",
      category: "ethics",
      readTime: "14 min read",
      views: "380K",
      href: "/ai-security-ethics",
      featured: false
    },
    {
      title: "AI Implementation Mastery Guide 2025",
      description: "Complete implementation guide with proven ROI strategies and best practices.",
      category: "implementation",
      readTime: "25 min read",
      views: "520K",
      href: "/ai-implementation-guide-2025",
      featured: false
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-2xl p-8 mx-4 my-8 border border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ultimate Content Discovery
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our comprehensive library of AI content, predictions, and revolutionary insights
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI content, predictions, guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter Dropdown */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none min-w-[200px]"
              >
                {categories.map(category => {
                  const IconComponent = category.icon;
                  return (
                    <option key={category.id} value={category.id} className="bg-gray-800">
                      {category.name} ({category.count})
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border ${
                content.featured ? 'border-purple-500/50' : 'border-gray-700'
              }`}
            >
              {content.featured && (
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {content.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                {content.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readTime}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {content.views} views
                </div>
              </div>
              
              <Link
                href={content.href}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Content */}
        <div className="text-center mt-12">
          <Link
            href="/ai-2025-ultimate-content-revolution"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}