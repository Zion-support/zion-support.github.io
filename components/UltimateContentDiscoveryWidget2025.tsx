'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentDiscoveryWidget2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState([]);

  const contentItems = [
    {
      id: 1,
      title: "AI Automation Mastery Guide 2025",
      description: "Complete guide to implementing AI automation in your business with proven strategies and real-world case studies.",
      category: "AI Automation",
      type: "Guide",
      readTime: "15 min",
      difficulty: "Intermediate",
      rating: 4.9,
      views: 12500,
      featured: true,
      tags: ["AI", "Automation", "Business", "Strategy"],
      image: "/images/ai-automation-guide.jpg",
      url: "/guides/ai-automation-mastery-2025"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs 2025",
      description: "Explore the latest quantum computing innovations and their potential impact on business operations.",
      category: "Quantum Computing",
      type: "Article",
      readTime: "12 min",
      difficulty: "Advanced",
      rating: 4.8,
      views: 8900,
      featured: true,
      tags: ["Quantum", "Computing", "Innovation", "Technology"],
      image: "/images/quantum-computing.jpg",
      url: "/articles/quantum-computing-breakthroughs-2025"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Discover how neural interfaces are transforming human-computer interaction and business applications.",
      category: "Neural Interfaces",
      type: "Case Study",
      readTime: "20 min",
      difficulty: "Expert",
      rating: 4.9,
      views: 15600,
      featured: true,
      tags: ["Neural", "Interface", "Revolution", "Future"],
      image: "/images/neural-interface.jpg",
      url: "/case-studies/neural-interface-revolution"
    },
    {
      id: 4,
      title: "Micro SaaS Development Framework",
      description: "Step-by-step framework for building and scaling micro SaaS applications with modern technologies.",
      category: "Micro SaaS",
      type: "Framework",
      readTime: "25 min",
      difficulty: "Intermediate",
      rating: 4.7,
      views: 10200,
      featured: false,
      tags: ["SaaS", "Development", "Framework", "Scaling"],
      image: "/images/micro-saas.jpg",
      url: "/frameworks/micro-saas-development"
    },
    {
      id: 5,
      title: "Cloud Infrastructure Optimization",
      description: "Best practices for optimizing cloud infrastructure for performance, cost, and scalability.",
      category: "Cloud Computing",
      type: "Tutorial",
      readTime: "18 min",
      difficulty: "Intermediate",
      rating: 4.6,
      views: 7800,
      featured: false,
      tags: ["Cloud", "Infrastructure", "Optimization", "Performance"],
      image: "/images/cloud-infrastructure.jpg",
      url: "/tutorials/cloud-infrastructure-optimization"
    },
    {
      id: 6,
      title: "AI Ethics and Governance Framework",
      description: "Comprehensive framework for implementing ethical AI practices and governance in enterprise environments.",
      category: "AI Ethics",
      type: "Framework",
      readTime: "22 min",
      difficulty: "Advanced",
      rating: 4.8,
      views: 9200,
      featured: true,
      tags: ["AI Ethics", "Governance", "Enterprise", "Compliance"],
      image: "/images/ai-ethics.jpg",
      url: "/frameworks/ai-ethics-governance"
    },
    {
      id: 7,
      title: "Edge Computing Revolution 2025",
      description: "How edge computing is transforming data processing and enabling real-time business applications.",
      category: "Edge Computing",
      type: "Article",
      readTime: "14 min",
      difficulty: "Intermediate",
      rating: 4.5,
      views: 6500,
      featured: false,
      tags: ["Edge Computing", "Data Processing", "Real-time", "Innovation"],
      image: "/images/edge-computing.jpg",
      url: "/articles/edge-computing-revolution-2025"
    },
    {
      id: 8,
      title: "Synthetic Intelligence Applications",
      description: "Exploring synthetic intelligence and its applications in business automation and decision-making.",
      category: "Synthetic Intelligence",
      type: "Research",
      readTime: "30 min",
      difficulty: "Expert",
      rating: 4.9,
      views: 11800,
      featured: true,
      tags: ["Synthetic Intelligence", "AI", "Business", "Decision Making"],
      image: "/images/synthetic-intelligence.jpg",
      url: "/research/synthetic-intelligence-applications"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'AI Automation', name: 'AI Automation', count: contentItems.filter(item => item.category === 'AI Automation').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'Quantum Computing').length },
    { id: 'Neural Interfaces', name: 'Neural Interfaces', count: contentItems.filter(item => item.category === 'Neural Interfaces').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', count: contentItems.filter(item => item.category === 'Micro SaaS').length },
    { id: 'Cloud Computing', name: 'Cloud Computing', count: contentItems.filter(item => item.category === 'Cloud Computing').length },
    { id: 'AI Ethics', name: 'AI Ethics', count: contentItems.filter(item => item.category === 'AI Ethics').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: contentItems.filter(item => item.category === 'Edge Computing').length },
    { id: 'Synthetic Intelligence', name: 'Synthetic Intelligence', count: contentItems.filter(item => item.category === 'Synthetic Intelligence').length }
  ];

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, searchQuery]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Guide': return 'bg-blue-100 text-blue-800';
      case 'Article': return 'bg-purple-100 text-purple-800';
      case 'Case Study': return 'bg-green-100 text-green-800';
      case 'Framework': return 'bg-indigo-100 text-indigo-800';
      case 'Tutorial': return 'bg-pink-100 text-pink-800';
      case 'Research': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔍 CONTENT DISCOVERY 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of guides, case studies, frameworks, and research papers. 
            Find the perfect content to accelerate your AI and technology journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
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
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime} read</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.views.toLocaleString()} views</span>
                  <span>{item.category}</span>
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We're constantly adding new content. Let us know what topics you'd like us to cover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Content
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscoveryWidget2025;