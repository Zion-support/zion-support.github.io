import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdvancedContentDiscoveryWidget() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(true);

  const contentCategories = {
    all: 'All Content',
    breakthrough: 'Breakthroughs',
    caseStudies: 'Case Studies',
    quantum: 'Quantum Computing',
    ai2025: 'AI 2025',
    ai2026: 'AI 2026',
    resources: 'Resources'
  };

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI technologies delivering 10,000% ROI with 99.9% accuracy",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      category: "breakthrough",
      tags: ["AI 2025", "Revolutionary", "10,000% ROI", "Breakthrough"],
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-900/20 to-pink-900/20",
      icon: "🚀",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Solutions 2025",
      description: "Experience 15,000% ROI with quantum-enhanced AI and error-corrected quantum computers",
      link: "/quantum-computing-solutions",
      category: "quantum",
      tags: ["Quantum Computing", "15,000% ROI", "Revolutionary", "Quantum AI"],
      badge: "REVOLUTIONARY",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-900/20 to-blue-900/20",
      icon: "⚛️",
      featured: true
    },
    {
      id: 3,
      title: "Global Transformation Success Story",
      description: "Fortune 500 company achieved 10,000% ROI in just 6 months",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      category: "caseStudies",
      tags: ["Case Study", "10,000% ROI", "Fortune 500", "Success"],
      badge: "SUCCESS",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20",
      icon: "🏆",
      featured: true
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces with 99.7% accuracy and zero latency",
      link: "/ai-2026-neural-interface-revolution",
      category: "ai2026",
      tags: ["Neural Interface", "99.7% Accuracy", "AI 2026", "Revolution"],
      badge: "FUTURE",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-900/20 to-indigo-900/20",
      icon: "🧠",
      featured: false
    },
    {
      id: 5,
      title: "AI 2025 Implementation Guide",
      description: "Complete roadmap for implementing AI 2025 technologies in your business",
      link: "/resources/ai-2025-revolutionary-implementation-guide",
      category: "resources",
      tags: ["Implementation", "Guide", "AI 2025", "Roadmap"],
      badge: "ESSENTIAL",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900/20 to-red-900/20",
      icon: "📚",
      featured: false
    },
    {
      id: 6,
      title: "Quantum AI Fusion Breakthrough",
      description: "Revolutionary fusion of quantum computing and AI achieving 15,000% ROI",
      link: "/blog/quantum-ai-fusion-breakthrough-2026",
      category: "quantum",
      tags: ["Quantum AI", "Fusion", "15,000% ROI", "Breakthrough"],
      badge: "BREAKTHROUGH",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-900/20 to-purple-900/20",
      icon: "⚛️",
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest breakthrough technologies, success stories, and implementation guides 
            that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center">
            ⭐ Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group block bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold`}>
                    {item.badge}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Browse by Category</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(contentCategories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group block bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl">{item.icon}</div>
                <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold`}>
                  {item.badge}
                </div>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}