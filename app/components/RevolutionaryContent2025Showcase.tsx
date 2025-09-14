'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025-2026: The Ultimate Business Transformation Revolution',
      subtitle: 'Complete Guide to 5,000% ROI',
      description: 'Transform your business with next-generation AI technologies. Achieve unprecedented ROI of 5,000% or higher with our proven framework.',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        efficiency: '2,400%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-2026-ultimate-business-transformation-revolution-ultimate-guide',
      type: 'blog',
      category: 'transformation',
      readingTime: '35 min read',
      featured: true,
      image: '🤖'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $18.5B Annual Savings',
      subtitle: '6,200% ROI Success Story',
      description: 'Discover how a Fortune 500 manufacturing company achieved $18.5 billion in annual savings and 6,200% ROI in just 18 months.',
      metrics: {
        roi: '6,200%',
        savings: '$18.5B',
        timeline: '18 months',
        uptime: '99.97%'
      },
      url: '/case-studies/fortune-500-ai-transformation-2025-2026-ultimate-success-story',
      type: 'case-study',
      category: 'success-stories',
      readingTime: '22 min read',
      featured: true,
      image: '🏆'
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Framework 2025-2026',
      subtitle: 'Complete Roadmap to 6,200% ROI',
      description: 'The most comprehensive and proven methodology for achieving extraordinary ROI through strategic AI implementation.',
      metrics: {
        roi: '6,200%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      url: '/resources/ai-2025-2026-implementation-ultimate-framework-complete-roadmap',
      type: 'resource',
      category: 'implementation',
      readingTime: '45 min read',
      featured: true,
      image: '📋'
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution',
      subtitle: '$100B Market Transformation',
      description: 'Explore the quantum AI revolution that\'s transforming businesses with 1,200% processing speed improvements and 99.97% accuracy.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      type: 'blog',
      category: 'technology',
      readingTime: '28 min read',
      featured: false,
      image: '⚛️'
    },
    {
      id: 'neural-interface-breakthrough',
      title: 'AI 2025: The Neural Interface Revolution',
      subtitle: 'Enterprise Breakthrough Guide',
      description: 'Discover how neural interfaces are revolutionizing enterprise operations with 1,200% ROI and 99.9% accuracy in brain-computer integration.',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        savings: '$2.8B',
        efficiency: '400%'
      },
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      type: 'blog',
      category: 'technology',
      readingTime: '22 min read',
      featured: false,
      image: '🧠'
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2025: The Autonomous AI Agents Revolution',
      subtitle: '800% ROI Through Self-Managing Systems',
      description: 'Learn how autonomous AI agents are transforming enterprise operations with 800% ROI and 99.7% autonomous operation.',
      metrics: {
        roi: '800%',
        autonomy: '99.7%',
        savings: '$1.8B',
        uptime: '99.9%'
      },
      url: '/blog/ai-2025-autonomous-ai-agents-enterprise-revolution',
      type: 'blog',
      category: 'automation',
      readingTime: '20 min read',
      featured: false,
      image: '🤖'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'transformation', name: 'Transformation', count: content.filter(c => c.category === 'transformation').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(c => c.category === 'implementation').length },
    { id: 'technology', name: 'Technology', count: content.filter(c => c.category === 'technology').length },
    { id: 'automation', name: 'Automation', count: content.filter(c => c.category === 'automation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY AI CONTENT 2025-2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover the Ultimate AI Transformation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access the most comprehensive collection of AI transformation guides, case studies, and frameworks that have delivered extraordinary results for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content header */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.image}</span>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'blog' 
                        ? 'bg-blue-100 text-blue-800'
                        : item.type === 'case-study'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      {item.readingTime}
                    </span>
                    {item.featured && (
                      <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-purple-600 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Success metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of companies that have already achieved extraordinary results through strategic AI implementation. Our expert team is ready to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Help
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Success metrics summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">5,000%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$15.8B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">99.7%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">1,000+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Showcase;