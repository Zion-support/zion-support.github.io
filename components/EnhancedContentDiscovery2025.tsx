import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EnhancedContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '📚', count: 47 },
    { id: 'breakthroughs', label: 'Breakthroughs', icon: '🚀', count: 12 },
    { id: 'case-studies', label: 'Case Studies', icon: '🏆', count: 15 },
    { id: 'resources', label: 'Resources', icon: '📖', count: 10 },
    { id: 'tools', label: 'Tools', icon: '🛠️', count: 8 },
    { id: 'webinars', label: 'Webinars', icon: '🎥', count: 2 }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Next-Generation Breakthroughs",
      description: "Revolutionary AI technologies delivering 5,000-15,000% ROI",
      category: "breakthroughs",
      href: "/blog/ai-2025-next-generation-breakthroughs",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      readTime: "15 min",
      publishDate: "2025-01-15",
      featured: true
    },
    {
      id: 2,
      title: "Global Tech Giant: 900% ROI Success",
      description: "Fortune 500 company achieves unprecedented AI transformation",
      category: "case-studies",
      href: "/case-studies/ai-2025-global-tech-giant-transformation",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      readTime: "12 min",
      publishDate: "2025-01-14",
      featured: true
    },
    {
      id: 3,
      title: "Ultimate Implementation Master Guide",
      description: "Complete guide to implementing AI solutions with proven methodologies",
      category: "resources",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      badge: "MASTER GUIDE",
      badgeColor: "bg-purple-500",
      readTime: "45 min",
      publishDate: "2025-01-13",
      featured: true
    },
    {
      id: 4,
      title: "Quantum AI Integration Breakthrough",
      description: "Revolutionary quantum-neural fusion delivering 15,000% ROI",
      category: "breakthroughs",
      href: "/blog/ai-2025-quantum-ai-breakthrough",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-indigo-500",
      readTime: "18 min",
      publishDate: "2025-01-12",
      featured: false
    },
    {
      id: 5,
      title: "Autonomous Systems Revolution",
      description: "Self-evolving AI systems achieving 2,000-5,000% ROI",
      category: "breakthroughs",
      href: "/blog/ai-2025-autonomous-systems-revolution",
      badge: "NEW",
      badgeColor: "bg-orange-500",
      readTime: "20 min",
      publishDate: "2025-01-11",
      featured: false
    },
    {
      id: 6,
      title: "AI ROI Calculator 2025",
      description: "Calculate potential ROI for your AI implementation",
      category: "tools",
      href: "/tools/ai-2025-roi-calculator",
      badge: "TOOL",
      badgeColor: "bg-blue-500",
      readTime: "5 min",
      publishDate: "2025-01-10",
      featured: false
    },
    {
      id: 7,
      title: "Manufacturing AI Success: 8,500% ROI",
      description: "How a Fortune 500 manufacturer achieved breakthrough results",
      category: "case-studies",
      href: "/case-studies/ai-2025-manufacturing-success",
      badge: "CASE STUDY",
      badgeColor: "bg-green-500",
      readTime: "10 min",
      publishDate: "2025-01-09",
      featured: false
    },
    {
      id: 8,
      title: "AI Implementation Toolkit",
      description: "Complete toolkit for successful AI implementation",
      category: "resources",
      href: "/resources/ai-2025-implementation-toolkit",
      badge: "TOOLKIT",
      badgeColor: "bg-purple-500",
      readTime: "30 min",
      publishDate: "2025-01-08",
      featured: false
    }
  ];

  const filteredContent = contentCategories.find(cat => cat.id === selectedCategory)?.count || 0;

  const getFilteredContent = () => {
    let filtered = contentCategories.find(cat => cat.id === selectedCategory)?.count || 0;
    
    if (selectedCategory === 'all') {
      filtered = featuredContent.length;
    } else {
      filtered = featuredContent.filter(item => item.category === selectedCategory).length;
    }
    
    return filtered;
  };

  const getDisplayContent = () => {
    let content = featuredContent;
    
    if (selectedCategory !== 'all') {
      content = content.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery) {
      content = content.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return content.slice(0, isExpanded ? content.length : 6);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">🔍 Enhanced Content Discovery</h2>
            <p className="text-blue-100">Discover the latest AI breakthroughs, case studies, and resources</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{getFilteredContent()}</div>
            <div className="text-sm text-blue-100">Content Items</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {contentCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.label} ({category.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDisplayContent().map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${item.badgeColor} text-white`}>
                  {item.badge}
                </span>
                {item.featured && (
                  <span className="text-yellow-500 text-sm font-semibold">⭐ Featured</span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                <Link 
                  href={item.href}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{item.readTime} read</span>
                <span>{new Date(item.publishDate).toLocaleDateString()}</span>
              </div>
              
              <div className="mt-4">
                <Link
                  href={item.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {getDisplayContent().length < featuredContent.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {isExpanded ? 'Show Less' : `Show More (${featuredContent.length - getDisplayContent().length} more)`}
            </button>
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">47</div>
            <div className="text-sm text-gray-600">Total Content</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">15</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Breakthroughs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">8</div>
            <div className="text-sm text-gray-600">Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentDiscovery2025;