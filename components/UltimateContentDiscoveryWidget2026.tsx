import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    {
      id: 'all',
      name: 'All Content',
      icon: '🌟',
      count: '2000+'
    },
    {
      id: 'ai-2025',
      name: 'AI 2025',
      icon: '🚀',
      count: '500+'
    },
    {
      id: 'ai-2026',
      name: 'AI 2026',
      icon: '⚡',
      count: '600+'
    },
    {
      id: 'ai-2030',
      name: 'AI 2030+',
      icon: '🌌',
      count: '400+'
    },
    {
      id: 'quantum',
      name: 'Quantum AI',
      icon: '⚛️',
      count: '300+'
    },
    {
      id: 'neural',
      name: 'Neural Interfaces',
      icon: '🧠',
      count: '200+'
    }
  ];

  const featuredContent = [
    {
      title: 'AI 2026 Ultimate Innovation Showcase',
      description: 'Discover the most advanced AI innovations and breakthrough technologies',
      category: 'ai-2026',
      href: '/ai-2026-ultimate-innovation-showcase',
      icon: '⚡',
      featured: true
    },
    {
      title: 'AI 2030 Future Vision Showcase',
      description: 'Explore transcendent intelligence and omniversal consciousness',
      category: 'ai-2030',
      href: '/ai-2030-future-vision-showcase',
      icon: '🌌',
      featured: true
    },
    {
      title: 'Quantum AI Fusion 2026',
      description: 'Revolutionary quantum computing integration with AI',
      category: 'quantum',
      href: '/quantum-ai-fusion-2026',
      icon: '⚛️',
      featured: false
    },
    {
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces for enhanced cognition',
      category: 'neural',
      href: '/neural-interface-revolution-2026',
      icon: '🧠',
      featured: false
    },
    {
      title: 'AI 2025 Ultimate Content Hub',
      description: 'Comprehensive collection of AI 2025 content and resources',
      category: 'ai-2025',
      href: '/ai-2025-ultimate-content-hub',
      icon: '🚀',
      featured: false
    },
    {
      title: 'Revolutionary Content Showcase 2025',
      description: 'Showcase of revolutionary AI content and implementations',
      category: 'ai-2025',
      href: '/revolutionary-content-showcase-2025',
      icon: '🎯',
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🌟 Ultimate Content Discovery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive library of AI content, innovations, and breakthrough technologies across all categories
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {contentCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
            <span className="ml-2 text-xs opacity-75">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((content, index) => (
          <Link
            key={index}
            href={content.href}
            className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
              content.featured 
                ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50' 
                : 'border-gray-100 hover:border-blue-200'
            }`}
          >
            {content.featured && (
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  FEATURED
                </span>
                <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                  NEW
                </span>
              </div>
            )}
            
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:scale-110 transition-transform">
                {content.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {content.description}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700">
                  Explore Content →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">2000+</div>
            <div className="text-sm text-gray-600">Total Articles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">500+</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">100+</div>
            <div className="text-sm text-gray-600">Tools & Calculators</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-gray-600">Implementation Guides</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">🚀</span>
          Get Started with AI
        </Link>
      </div>
    </div>
  );
}