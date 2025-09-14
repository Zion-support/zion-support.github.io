'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025_2026Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ai-2025-2026-ultimate-breakthrough',
      type: 'blog',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution',
      subtitle: '2,500% ROI Through Next-Generation Intelligence',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 2,500% ROI through revolutionary AI breakthroughs including quantum AI, neural interfaces, and autonomous systems.',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        efficiency: '1,200%',
        success: '99.7%'
      },
      link: '/blog/ai-2025-2026-ultimate-breakthrough-revolution',
      category: 'breakthrough',
      featured: true,
      readingTime: '35 min read'
    },
    {
      id: 'fortune-100-2500-roi-success',
      type: 'case-study',
      title: 'Fortune 100 AI Transformation Success',
      subtitle: '$8.2B Company Achieves 2,500% ROI in 18 Months',
      description: 'Complete case study revealing how a Fortune 100 technology company achieved unprecedented success through revolutionary AI transformation, saving $8.2B annually.',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      link: '/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success',
      category: 'success-story',
      featured: true,
      readingTime: '22 min read'
    },
    {
      id: 'ai-implementation-ultimate-framework',
      type: 'resource',
      title: 'AI Implementation Ultimate Framework',
      subtitle: 'Complete Roadmap to 2,500% ROI',
      description: 'The definitive guide to implementing revolutionary AI technologies in 2025-2026. Complete framework covering quantum AI, neural interfaces, and autonomous systems.',
      metrics: {
        roi: '2,500%',
        timeline: '18-24 months',
        success: '99.7%',
        projects: '1,000+'
      },
      link: '/resources/ai-2025-2026-implementation-ultimate-framework',
      category: 'implementation',
      featured: true,
      readingTime: '45 min read'
    },
    {
      id: 'quantum-ai-business-revolution',
      type: 'blog',
      title: 'Quantum AI Business Revolution',
      subtitle: '$100B Market Transformation',
      description: 'Explore how quantum AI is revolutionizing business operations with 1,200% faster processing, 99.97% accuracy, and 85% energy efficiency improvements.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      link: '/blog/ai-2026-quantum-ai-business-revolution',
      category: 'breakthrough',
      featured: false,
      readingTime: '28 min read'
    },
    {
      id: 'neural-interface-enterprise-breakthrough',
      type: 'blog',
      title: 'Neural Interface Enterprise Breakthrough',
      subtitle: '1,200% ROI Through Brain-Computer Integration',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through neural interface technology, enabling 99.9% accuracy in thought-to-action translation.',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        savings: '$2.8B',
        efficiency: '400%'
      },
      link: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      category: 'breakthrough',
      featured: false,
      readingTime: '22 min read'
    },
    {
      id: 'autonomous-systems-revolution',
      type: 'blog',
      title: 'Autonomous Business Systems Revolution',
      subtitle: '3,000% ROI Through Self-Managing AI',
      description: 'Learn how autonomous business systems are delivering 3,000% ROI through 99.7% self-management, 95% downtime reduction, and continuous optimization.',
      metrics: {
        roi: '3,000%',
        autonomy: '99.7%',
        savings: '$25.6M',
        efficiency: '800%'
      },
      link: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      category: 'breakthrough',
      featured: false,
      readingTime: '28 min read'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'breakthrough', label: 'Breakthroughs', count: content.filter(c => c.category === 'breakthrough').length },
    { id: 'success-story', label: 'Success Stories', count: content.filter(c => c.category === 'success-story').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(c => c.category === activeCategory);

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
      case 'resource': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            🚀 REVOLUTIONARY AI CONTENT 2025-2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Ultimate AI Breakthrough Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI breakthrough content, featuring Fortune 500 success stories, 
            implementation frameworks, and revolutionary technologies delivering up to 2,500% ROI.
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
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                item.featured ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Content Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {getTypeIcon(item.type)} {item.type.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-purple-600 mb-4">
                  {item.subtitle}
                </h4>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-yellow-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings || item.metrics.market}</div>
                    <div className="text-xs text-gray-600">Savings/Market</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.efficiency || item.metrics.accuracy || item.metrics.timeline}</div>
                    <div className="text-xs text-gray-600">{item.metrics.efficiency ? 'Efficiency' : item.metrics.accuracy ? 'Accuracy' : 'Timeline'}</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.success || item.metrics.autonomy}</div>
                    <div className="text-xs text-gray-600">{item.metrics.success ? 'Success' : 'Autonomy'}</div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">⏱️ {item.readingTime}</span>
                  <span className="text-sm text-gray-500">📖 {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.link}
                  className={`w-full bg-gradient-to-r ${getTypeColor(item.type)} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center block`}
                >
                  {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'View Case Study' : 'Download Guide'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 2,500% ROI?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join Fortune 500 companies achieving unprecedented success through revolutionary AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Personalized Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025_2026Showcase;