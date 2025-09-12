import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { Download, Search, Filter, Clock, Star, TrendingUp, FileText, BookOpen, Play, Zap, ArrowRight, Calendar, User } from 'lucide-react';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Resources', count: 25 },
    { id: 'guides', name: 'Implementation Guides', count: 8 },
    { id: 'templates', name: 'Templates & Checklists', count: 6 },
    { id: 'tools', name: 'Tools & Calculators', count: 4 },
    { id: 'case-studies', name: 'Case Studies', count: 7 }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'pdf', name: 'PDF Guides' },
    { id: 'template', name: 'Templates' },
    { id: 'tool', name: 'Interactive Tools' },
    { id: 'video', name: 'Video Tutorials' }
  ];

  const resources = [
    {
      id: 1,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices for successful AI deployment.",
      category: "guides",
      type: "pdf",
      fileSize: "15.2 MB",
      pages: "200+ pages",
      downloads: "15.2K",
      rating: 4.9,
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"]
    },
    {
      id: 2,
      title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
      description: "Download our comprehensive AI cybersecurity checklist with 150+ security items to ensure your AI systems are protected against emerging threats and vulnerabilities.",
      category: "templates",
      type: "template",
      fileSize: "2.1 MB",
      pages: "25 pages",
      downloads: "8.7K",
      rating: 4.8,
      featured: true,
      trending: true,
      icon: "🛡️",
      href: "/resources/ai-cybersecurity-checklist-2025",
      tags: ["Checklist", "Security", "AI Safety", "Free Download"]
    },
    {
      id: 3,
      title: "AI Workforce Transformation Playbook 2025",
      description: "Complete reskilling strategies and implementation guides for transforming your workforce for the AI era. Includes training programs, change management, and success metrics.",
      category: "guides",
      type: "pdf",
      fileSize: "8.5 MB",
      pages: "150+ pages",
      downloads: "6.3K",
      rating: 4.7,
      featured: false,
      trending: true,
      icon: "👥",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      tags: ["Workforce", "Transformation", "Training", "Free Download"]
    },
    {
      id: 4,
      title: "AI ROI Calculator Tool",
      description: "Interactive tool to calculate potential return on investment for AI implementations. Includes cost analysis, benefit projections, and payback period calculations.",
      category: "tools",
      type: "tool",
      fileSize: "Interactive",
      pages: "Web Tool",
      downloads: "12.1K",
      rating: 4.8,
      featured: true,
      trending: false,
      icon: "💰",
      href: "/tools/ai-roi-calculator",
      tags: ["Calculator", "ROI", "Interactive", "Free Tool"]
    },
    {
      id: 5,
      title: "AI Project Planning Template Suite",
      description: "Complete set of project planning templates for AI implementations. Includes timeline templates, budget estimators, risk assessment matrices, and stakeholder management tools.",
      category: "templates",
      type: "template",
      fileSize: "5.2 MB",
      pages: "12 templates",
      downloads: "9.4K",
      rating: 4.6,
      featured: false,
      trending: true,
      icon: "📋",
      href: "/resources/ai-project-planning-templates",
      tags: ["Templates", "Planning", "Project Management", "Free Download"]
    },
    {
      id: 6,
      title: "AI Ethics & Governance Framework",
      description: "Comprehensive framework for implementing ethical AI practices and governance structures. Includes policy templates, compliance checklists, and audit procedures.",
      category: "guides",
      type: "pdf",
      fileSize: "6.8 MB",
      pages: "80 pages",
      downloads: "4.2K",
      rating: 4.9,
      featured: true,
      trending: false,
      icon: "⚖️",
      href: "/resources/ai-ethics-governance-framework",
      tags: ["Ethics", "Governance", "Compliance", "Free Download"]
    },
    {
      id: 7,
      title: "AI Data Privacy Compliance Guide",
      description: "Complete guide to AI data privacy regulations including GDPR, CCPA, and emerging AI-specific requirements. Includes compliance checklists and implementation strategies.",
      category: "guides",
      type: "pdf",
      fileSize: "4.3 MB",
      pages: "60 pages",
      downloads: "7.8K",
      rating: 4.7,
      featured: false,
      trending: true,
      icon: "🔒",
      href: "/resources/ai-data-privacy-compliance-guide",
      tags: ["Privacy", "Compliance", "GDPR", "Free Download"]
    },
    {
      id: 8,
      title: "AI Model Performance Monitoring Dashboard",
      description: "Interactive dashboard template for monitoring AI model performance, accuracy, and drift. Includes real-time metrics, alerts, and reporting capabilities.",
      category: "tools",
      type: "tool",
      fileSize: "Interactive",
      pages: "Dashboard",
      downloads: "5.6K",
      rating: 4.5,
      featured: false,
      trending: false,
      icon: "📊",
      href: "/tools/ai-model-monitoring-dashboard",
      tags: ["Dashboard", "Monitoring", "Analytics", "Free Tool"]
    },
    {
      id: 9,
      title: "AI Vendor Evaluation Matrix",
      description: "Comprehensive evaluation framework for selecting AI vendors and solutions. Includes scoring criteria, comparison templates, and decision-making frameworks.",
      category: "templates",
      type: "template",
      fileSize: "1.8 MB",
      pages: "8 templates",
      downloads: "3.9K",
      rating: 4.6,
      featured: false,
      trending: false,
      icon: "🏢",
      href: "/resources/ai-vendor-evaluation-matrix",
      tags: ["Vendor Selection", "Evaluation", "Templates", "Free Download"]
    },
    {
      id: 10,
      title: "AI Implementation Video Series",
      description: "10-part video series covering the complete AI implementation process. Includes expert interviews, case studies, and step-by-step tutorials.",
      category: "guides",
      type: "video",
      fileSize: "2.5 GB",
      pages: "10 videos",
      downloads: "11.2K",
      rating: 4.8,
      featured: true,
      trending: true,
      icon: "🎥",
      href: "/resources/ai-implementation-video-series",
      tags: ["Video Series", "Tutorials", "Implementation", "Free Access"]
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return parseInt(b.downloads.replace('K', '')) - parseInt(a.downloads.replace('K', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'featured':
        return b.featured ? 1 : -1;
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      case 'template':
        return <BookOpen className="w-4 h-4" />;
      case 'tool':
        return <Zap className="w-4 h-4" />;
      case 'video':
        return <Play className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Free AI Resources & Tools - Implementation Guides, Templates & Calculators"
        description="Download our comprehensive library of free AI resources including implementation guides, templates, checklists, and interactive tools. Everything you need to succeed with AI."
        keywords="AI resources, free AI guides, AI templates, AI tools, implementation guides, AI checklists, AI calculators, free downloads"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            📚 Free AI Resources & Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive library of free AI resources including implementation guides, 
            templates, checklists, and interactive tools. Everything you need to succeed with AI.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">85K+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">Free Access</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, guides, and tools..."
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

            {/* Type Filter */}
            <div className="lg:w-48">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
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
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ Featured Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.filter(resource => resource.featured).map(resource => (
                <Link key={resource.id} href={resource.href} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{resource.icon}</div>
                      <div className="flex items-center gap-2">
                        {resource.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                        {resource.featured && <Star className="w-4 h-4 text-yellow-500" />}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          {getTypeIcon(resource.type)}
                          {resource.type.toUpperCase()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {resource.downloads}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {resource.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-gray-500 font-normal ml-2">({sortedResources.length})</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedResources.map(resource => (
              <Link key={resource.id} href={resource.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{resource.icon}</div>
                    <div className="flex items-center gap-2">
                      {resource.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                      {resource.featured && <Star className="w-4 h-4 text-yellow-500" />}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        {getTypeIcon(resource.type)}
                        {resource.type.toUpperCase()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {resource.downloads}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {resource.rating}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {sortedResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with New Resources</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get notified when we release new AI resources, guides, and tools. Join 10,000+ 
            professionals who trust our content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}