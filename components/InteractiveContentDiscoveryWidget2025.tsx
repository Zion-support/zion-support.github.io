import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthroughs transforming industries with 10,000% ROI success stories',
      category: 'breakthroughs',
      tags: ['AI 2025', 'Breakthrough', '10,000% ROI', 'Revolutionary'],
      href: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '🚀',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions Showcase',
      description: 'Explore revolutionary AI predictions for 2026-2030 with quantum neural fusion and consciousness AI',
      category: 'predictions',
      tags: ['Future', 'Predictions', 'Quantum Neural', 'Consciousness AI'],
      href: '/ai-2026-2030-future-predictions-showcase',
      icon: '🔮',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing solutions with 10,000x faster processing and quantum supremacy',
      category: 'quantum',
      tags: ['Quantum', 'Computing', '10,000x Faster', 'Supremacy'],
      href: '/quantum-computing-solutions',
      icon: '⚛️',
      featured: true
    },
    {
      id: 4,
      title: 'AI 2026 Breakthrough Revolutionary Content',
      description: 'Next-generation AI breakthroughs with quantum neural fusion and autonomous systems',
      category: 'breakthroughs',
      tags: ['AI 2026', 'Quantum Neural', 'Autonomous', 'Revolutionary'],
      href: '/ai-2026-breakthrough-revolutionary-content',
      icon: '🌌',
      featured: false
    },
    {
      id: 5,
      title: 'Enterprise Automation Mastery 2025',
      description: 'Complete guide to enterprise automation with AI-powered solutions and 2,500% ROI',
      category: 'automation',
      tags: ['Enterprise', 'Automation', '2,500% ROI', 'Mastery'],
      href: '/enterprise-automation-mastery-2025',
      icon: '🤖',
      featured: false
    },
    {
      id: 6,
      title: 'Neural Interface Solutions 2026',
      description: 'Revolutionary neural interface technology with 95% patient recovery rates in healthcare',
      category: 'neural',
      tags: ['Neural Interface', 'Healthcare', '95% Recovery', 'Revolutionary'],
      href: '/neural-interface-solutions-2026',
      icon: '🧠',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'breakthroughs', name: 'Breakthroughs', icon: '🚀' },
    { id: 'predictions', name: 'Future Predictions', icon: '🔮' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6">
            🔍 INTERACTIVE DISCOVERY
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Discover Revolutionary Content
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, future predictions, and revolutionary technologies. Use our interactive discovery tool to find exactly what you need.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search for AI breakthroughs, quantum computing, future predictions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
  const [activeTab, setActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: 'Revolutionary Breakthroughs',
      icon: '🚀',
      color: 'from-red-500 to-pink-500',
      content: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: '10,000% ROI guaranteed with quantum-neural fusion technology',
          link: '/ai-2025-ultimate-breakthrough-revolution',
          badge: 'BREAKTHROUGH',
          badgeColor: 'bg-red-500'
        },
        {
          title: 'Quantum Computing Breakthroughs 2030',
          description: 'Error-corrected quantum computers with infinite processing power',
          link: '/quantum-computing-breakthroughs-2030',
          badge: 'REVOLUTIONARY',
          badgeColor: 'bg-purple-500'
        },
        {
          title: 'AI 2026 Ultimate Innovation Showcase',
          description: 'Future predictions and breakthrough innovations for 2026',
          link: '/ai-2026-ultimate-innovation-showcase',
          badge: 'FUTURE',
          badgeColor: 'bg-blue-500'
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      icon: '🏆',
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'Global Transformation Breakthrough',
          description: 'Fortune 500 company achieves 10,000% ROI in 6 months',
          link: '/case-studies/ai-2025-global-transformation-breakthrough',
          badge: '10,000% ROI',
          badgeColor: 'bg-green-500'
        },
        {
          title: 'Quantum Manufacturing Revolution',
          description: 'Manufacturing company achieves 15,000% ROI with quantum AI',
          link: '/case-studies/quantum-manufacturing-revolution-2026',
          badge: '15,000% ROI',
          badgeColor: 'bg-cyan-500'
        },
        {
          title: 'Enterprise AI Transformation',
          description: 'Tech company achieves 5,000% ROI with autonomous systems',
          link: '/case-studies/enterprise-ai-transformation-2025',
          badge: '5,000% ROI',
          badgeColor: 'bg-blue-500'
        }
      ]
    },
    resources: {
      title: 'Implementation Guides',
      icon: '📚',
      color: 'from-purple-500 to-indigo-500',
      content: [
        {
          title: 'AI 2025 Ultimate Implementation Guide',
          description: 'Complete guide to implementing AI breakthrough technology',
          link: '/resources/ai-2025-ultimate-implementation-guide',
          badge: 'ESSENTIAL',
          badgeColor: 'bg-purple-500'
        },
        {
          title: 'Quantum Computing Implementation',
          description: 'Step-by-step quantum computing integration guide',
          link: '/resources/quantum-computing-implementation-guide',
          badge: 'REVOLUTIONARY',
          badgeColor: 'bg-indigo-500'
        },
        {
          title: 'ROI Optimization Toolkit',
          description: 'Tools and strategies for maximizing AI ROI',
          link: '/resources/roi-optimization-toolkit-2025',
          badge: 'PROVEN',
          badgeColor: 'bg-green-500'
        }
      ]
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wide">
              🔍 INTERACTIVE CONTENT DISCOVERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Discover Revolutionary Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, success stories, and implementation guides
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                item.featured 
                  ? 'border-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}>
                {item.featured && (
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full mb-4">
                    ⭐ FEATURED
                  </div>
                )}
                
                <div className="text-4xl mb-4">{item.icon}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Explore Content
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter to find the content you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-xl mb-6 opacity-90">
              Our expert team can help you discover the perfect AI solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/resources"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
          {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {activeTab === 'breakthrough' ? '🚀' : activeTab === 'caseStudies' ? '🏆' : '📚'}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor} text-white`}>
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <Link
                href={item.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Explore Now
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our AI assistant can help you discover the perfect content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-assistant"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              🤖 Ask AI Assistant
            </Link>
            <Link
              href="/content-library"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              📚 Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}