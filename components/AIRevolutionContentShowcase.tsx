'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AIRevolutionContentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-revolution-breakthrough',
      title: 'AI 2025-2026: The Ultimate AI Revolution Breakthrough',
      description: 'Discover the revolutionary AI breakthroughs that are transforming Fortune 500 companies with unprecedented 10,000% ROI through next-generation artificial intelligence systems.',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-2026-ultimate-ai-revolution-breakthrough-ultimate-guide',
      metrics: {
        roi: '10,000%',
        savings: '$50B+',
        efficiency: '3,000%',
        accuracy: '99.99%'
      },
      readingTime: '45 min read',
      featured: true,
      tags: ['AI Revolution'2025-2026'ROI'Fortune 500'Breakthrough']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Revolution Success: $50B Annual Savings',
      description: 'How a Fortune 500 manufacturing conglomerate achieved unprecedented success through comprehensive AI revolution implementationdelivering 10,000% ROI and $50B in annual savings.',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ai-revolution-10000-roi-success-story',
      metrics: {
        roi: '10,000%',
        savings: '$50B',
        timeline: '18 months',
        efficiency: '3,000%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Case Study'Fortune 500'AI Revolution'Success Story']
    },
    {
      id: 'implementation-guide',
      title: 'AI Revolution Implementation Ultimate Guide 2025-2026',
      description: 'The definitive guide to implementing AI revolution technologies in your organizationwith step-by-step instructionsbest practicesand proven strategies for achieving 10,000% ROI.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-revolution-implementation-ultimate-guide-2025-2026',
      metrics: {
        roi: '10,000%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '60 min read',
      featured: true,
      tags: ['Implementation Guide'AI Revolution'ROI'Strategy']
    },
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI 2026: The Next Frontier of Business Intelligence',
      description: 'Explore how quantum-enhanced AI is revolutionizing business operations with 1,000x faster processing and 99.97% accuracy in complex decision-making.',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/quantum-ai-2026-business-revolution',
      metrics: {
        roi: '400-600%',
        speed: '1,000x',
        accuracy: '99.97%',
        market: '$100B'
      },
      readingTime: '22 min read',
      featured: false,
      tags: ['Quantum AI'Business Revolution'ROI'Fortune 500']
    },
    {
      id: 'autonomous-enterprise',
      title: 'Autonomous Enterprise Systems: The Future of Business Operations',
      description: 'Learn how self-managing AI systems are creating fully autonomous business operations with 99.7% autonomy and 800% efficiency improvements.',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      metrics: {
        roi: '3,000%',
        autonomy: '99.7%',
        efficiency: '800%',
        savings: '$25.6M'
      },
      readingTime: '28 min read',
      featured: false,
      tags: ['Autonomous Systems'Enterprise AI'ROI'Revolution']
    },
    {
      id: 'multimodal-intelligence',
      title: 'Multimodal AI: The Complete Business Intelligence Solution',
      description: 'Discover how multimodal AI systems process textimagesaudioand sensor data simultaneously to provide comprehensive business insights.',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-multimodal-intelligence-revolution-ultimate-guide',
      metrics: {
        roi: '750%',
        accuracy: '99.7%',
        savings: '$3.2B',
        efficiency: '450%'
      },
      readingTime: '25 min read',
      featured: false,
      tags: ['Multimodal AI'Enterprise AI'ROI'Cross-Modal Intelligence']
    }
  ];

  const categories = [
    { id: 'all'name: 'All Content'count: contentItems.length },
    { id: 'ai-revolution'name: 'AI Revolution'count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-stories'name: 'Success Stories'count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'implementation'name: 'Implementation'count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 AI REVOLUTION 2025-2026 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> 10,000% ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough AI technologies and implementation strategies that are transforming Fortune 500 companies with unprecedented results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold z-10">
                  FEATURED
                </div>
              )}

              <div className="p-6">
                {/* Type and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">{item.readingTime}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {Object.entries(item.metrics).map(([keyvalue]) => (
                    <div key={key} className="bg-gradient-to-r from-purple-50 to-blue-50 p-2 rounded-lg text-center">
                      <div className="text-sm font-semibold text-gray-700 capitalize">{key.replace(/([A-Z])/g' $1').trim()}</div>
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className={`w-full bg-gradient-to-r ${getTypeColor(item.type)} text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 block`}
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve 10,000% ROI?</h3>
            <p className="text-xl mb-6 opacity-90">
              Get started with our comprehensive AI Revolution implementation guide and transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-revolution-implementation-ultimate-guide-2025-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRevolutionContentShowcase;