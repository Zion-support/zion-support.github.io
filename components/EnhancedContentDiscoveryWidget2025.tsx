import React, { useState } from 'react';
import Link from 'next/link';

export default function EnhancedContentDiscoveryWidget2025() {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: {
      name: 'All Content',
      icon: '🌟',
      color: 'from-purple-500 to-pink-500'
    },
    strategy: {
      name: 'Strategy Guides',
      icon: '📊',
      color: 'from-blue-500 to-indigo-500'
    },
    caseStudies: {
      name: 'Case Studies',
      icon: '🏆',
      color: 'from-green-500 to-emerald-500'
    },
    toolkits: {
      name: 'Toolkits',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500'
    },
    automation: {
      name: 'Automation',
      icon: '🤖',
      color: 'from-teal-500 to-cyan-500'
    }
  };

  const contentItems = [
    {
      title: "AI 2025 Ultimate Content Strategy",
      description: "Master revolutionary content marketing with quantum intelligence and autonomous generation.",
      href: "/blog/ai-2025-ultimate-content-strategy",
      category: "strategy",
      type: "Strategy Guide",
      roi: "5,000%",
      icon: "📊",
      featured: true
    },
    {
      title: "Content Revolution Success Story",
      description: "Fortune 500 companies achieve 5,000% ROI with AI content revolution strategies.",
      href: "/case-studies/ai-2025-content-revolution-success",
      category: "caseStudies",
      type: "Case Study",
      roi: "5,000%",
      icon: "🏆",
      featured: true
    },
    {
      title: "Content Mastery Toolkit",
      description: "Complete implementation guide with templates, frameworks, and optimization tools.",
      href: "/resources/ai-2025-content-mastery-toolkit",
      category: "toolkits",
      type: "Toolkit",
      roi: "5,000%",
      icon: "🛠️",
      featured: true
    },
    {
      title: "Quantum Content Optimization",
      description: "Revolutionary performance enhancement with quantum intelligence achieving 10x improvements.",
      href: "/blog/ai-2025-quantum-content-optimization",
      category: "strategy",
      type: "Strategy Guide",
      roi: "1,000%",
      icon: "⚡",
      featured: false
    },
    {
      title: "Content Automation Guide",
      description: "Complete implementation mastery for autonomous content generation and workflow optimization.",
      href: "/guides/ai-2025-content-automation-guide",
      category: "automation",
      type: "Implementation Guide",
      roi: "5,000%",
      icon: "🤖",
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          Enhanced Content Discovery
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our comprehensive library of AI 2025 content strategies, case studies, and implementation guides
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(contentCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === key
                ? `bg-gradient-to-r ${category.color} text-white transform scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredContent.map((item, index) => (
          <div 
            key={index}
            className={`group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
              item.featured ? 'ring-2 ring-purple-500/50' : ''
            }`}
          >
            {item.featured && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                FEATURED
              </div>
            )}
            
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{item.icon}</div>
              <div className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-xs font-semibold">
                {item.type}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {item.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-green-400 font-bold text-lg">
                {item.roi} ROI
              </div>
              
              <Link 
                href={item.href}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
              >
                Explore
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Content Pieces</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400 mb-2">5,000%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Available</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <Link 
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-bold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Get Custom Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
}