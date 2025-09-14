'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '950% ROI Breakthrough - $4.2B Market Transformation',
      description: 'Discover how Fortune 500 companies achieve 750% average ROI through strategic AI transformation with 99.8% client satisfaction.',
      metrics: {
        roi: '950%',
        savings: '$4.2B',
        satisfaction: '99.8%',
        success: '98%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      type: 'blog',
      category: 'ai-transformation',
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Revolution', 'ROI', 'Enterprise', 'Transformation', '2025']
    },
    {
      id: 'enterprise-success',
      title: 'AI 2025 Ultimate Enterprise Transformation Success',
      subtitle: '$2.8B Company Achieves 950% ROI in 18 Months',
      description: 'Real-world case study: Fortune 100 manufacturing conglomerate generates $1.2 billion in annual savings with 99.9% operational efficiency.',
      metrics: {
        roi: '950%',
        savings: '$1.2B',
        efficiency: '99.9%',
        timeline: '18 months'
      },
      url: '/case-studies/ai-2025-ultimate-enterprise-transformation-success-story',
      type: 'case-study',
      category: 'success-stories',
      readingTime: '20 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 100', 'Manufacturing', 'ROI', 'Success']
    },
    {
      id: 'implementation-guide',
      title: 'AI 2025 Ultimate Implementation Master Guide',
      subtitle: 'From Strategy to 950% ROI in 18 Months',
      description: 'Comprehensive framework for achieving 950% ROI through AI transformation, based on 500+ successful enterprise implementations.',
      metrics: {
        roi: '950%',
        success: '98%',
        savings: '$4.2B',
        timeline: '18 months'
      },
      url: '/resources/ai-2025-ultimate-implementation-master-guide',
      type: 'resource',
      category: 'implementation',
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation', 'Framework', 'ROI', 'Strategy', 'Guide']
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution',
      subtitle: '$100B Market Transformation - 1,200% Speed Increase',
      description: 'Explore how quantum-enhanced AI is revolutionizing business operations with 1,200% faster processing and 99.97% accuracy.',
      metrics: {
        roi: '1,200%',
        speed: '1,200%',
        accuracy: '99.97%',
        market: '$100B'
      },
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      type: 'blog',
      category: 'quantum-ai',
      readingTime: '22 min read',
      featured: true,
      tags: ['Quantum AI', 'Revolution', 'Speed', 'Accuracy', '2025']
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2025 Autonomous Systems Revolution',
      subtitle: '$1.8B Company Achieves 900% ROI with Self-Managing Operations',
      description: 'Case study: How autonomous AI systems delivered 900% ROI and 95% process automation for a major enterprise.',
      metrics: {
        roi: '900%',
        automation: '95%',
        savings: '$750M',
        satisfaction: '99.8%'
      },
      url: '/case-studies/ai-2025-autonomous-systems-revolution-success-story',
      type: 'case-study',
      category: 'autonomous-systems',
      readingTime: '16 min read',
      featured: true,
      tags: ['Autonomous', 'Systems', 'ROI', 'Automation', 'Success']
    },
    {
      id: 'edge-computing',
      title: 'AI 2025: The Edge Computing Revolution',
      subtitle: 'Ultimate Guide to 450% ROI with 67% Latency Reduction',
      description: 'Discover how edge AI computing delivers 450% ROI through 67% latency reduction and 99.7% uptime.',
      metrics: {
        roi: '450%',
        latency: '67%',
        uptime: '99.7%',
        savings: '$2.3M'
      },
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'blog',
      category: 'edge-computing',
      readingTime: '18 min read',
      featured: true,
      tags: ['Edge Computing', 'Latency', 'ROI', 'Performance', '2025']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-transformation', name: 'AI Transformation', count: content.filter(c => c.category === 'ai-transformation').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(c => c.category === 'implementation').length },
    { id: 'quantum-ai', name: 'Quantum AI', count: content.filter(c => c.category === 'quantum-ai').length },
    { id: 'autonomous-systems', name: 'Autonomous Systems', count: content.filter(c => c.category === 'autonomous-systems').length },
    { id: 'edge-computing', name: 'Edge Computing', count: content.filter(c => c.category === 'edge-computing').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

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
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🚀 ULTIMATE AI CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              950% ROI Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI transformation content, 
            featuring real-world success stories, implementation guides, and breakthrough technologies 
            that have delivered over $4.2 billion in enterprise savings.
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
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  {item.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-yellow-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="text-sm text-gray-500 mb-4">
                  📖 {item.readingTime}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={item.url}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 950% ROI with AI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ companies already transforming their business with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your AI Transformation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;