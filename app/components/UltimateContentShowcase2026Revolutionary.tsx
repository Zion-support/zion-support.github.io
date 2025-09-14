'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026Revolutionary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'quantum-neural-superintelligence-breakthrough',
      title: 'AI 2026: Quantum Neural Superintelligence Revolutionary Breakthrough',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 5,000% ROI through revolutionary quantum neural superintelligence systems.',
      type: 'blog',
      category: 'quantum-ai',
      metrics: { roi: '5,000%', savings: '$50B+', accuracy: '99.99%', speed: '1Mx' },
      url: '/blog/ai-2026-quantum-neural-superintelligence-revolutionary-breakthrough',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-quantum-success',
      title: 'Fortune 500 Quantum Neural Superintelligence Success: $50B Annual Savings',
      description: 'How a Fortune 100 manufacturing company achieved 5,000% ROI through quantum neural superintelligence implementation.',
      type: 'case-study',
      category: 'success-stories',
      metrics: { roi: '5,000%', savings: '$50B', timeline: '18 months', satisfaction: '99.7%' },
      url: '/case-studies/fortune-500-quantum-neural-superintelligence-5000-roi-success-story',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'quantum-implementation-guide',
      title: 'Quantum Neural Superintelligence Implementation Master Guide 2026',
      description: 'Complete roadmap to implementing quantum neural superintelligence systems that deliver 5,000% ROI.',
      type: 'resource',
      category: 'implementation',
      metrics: { roi: '5,000%', timeline: '18 months', success: '99.7%', projects: '1,000+' },
      url: '/resources/quantum-neural-superintelligence-implementation-master-guide-2026',
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'synthetic-intelligence-breakthrough',
      title: 'AI 2026: Synthetic Intelligence Revolutionary Breakthrough - 3,500% ROI',
      description: 'Next-generation synthetic intelligence systems delivering 3,500% ROI through advanced cognitive capabilities.',
      type: 'blog',
      category: 'synthetic-ai',
      metrics: { roi: '3,500%', savings: '$12.8B+', accuracy: '99.97%', efficiency: '1,800%' },
      url: '/blog/ai-2026-synthetic-intelligence-revolutionary-breakthrough',
      readingTime: '32 min read',
      featured: false
    },
    {
      id: 'autonomous-systems-revolution',
      title: 'AI 2026: Next-Generation Autonomous Systems Revolution',
      description: 'Revolutionary autonomous systems achieving 1,200% ROI through self-managing AI agents.',
      type: 'blog',
      category: 'autonomous-ai',
      metrics: { roi: '1,200%', uptime: '99.9%', efficiency: '400%', cost: '85%' },
      url: '/blog/ai-2026-next-generation-autonomous-systems-revolution',
      readingTime: '28 min read',
      featured: false
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: Quantum AI Business Revolution - $100B Market Transformation',
      description: 'Quantum AI systems transforming business operations with 400-600% ROI in the $100B market.',
      type: 'blog',
      category: 'quantum-ai',
      metrics: { roi: '400-600%', market: '$100B', speed: '1,200%', accuracy: '99.97%' },
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      readingTime: '30 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'quantum-ai', label: 'Quantum AI', count: content.filter(c => c.category === 'quantum-ai').length },
    { id: 'synthetic-ai', label: 'Synthetic Intelligence', count: content.filter(c => c.category === 'synthetic-ai').length },
    { id: 'autonomous-ai', label: 'Autonomous Systems', count: content.filter(c => c.category === 'autonomous-ai').length },
    { id: 'success-stories', label: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-indigo-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            🚀 REVOLUTIONARY 2026 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ultimate Content Showcase
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              2026 Revolutionary
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI content of 2026 - featuring quantum neural superintelligence, 
            synthetic intelligence, and autonomous systems delivering unprecedented ROI results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ FEATURED
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Type Badge */}
                <div className="flex items-center mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="ml-auto text-gray-500 text-sm">{item.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors line-clamp-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Content →
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Revolutionary Results Achieved</h3>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our content showcases the most advanced AI implementations delivering unprecedented ROI across Fortune 500 companies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">5,000%</div>
              <div className="text-white font-medium">Maximum ROI</div>
              <div className="text-gray-300 text-sm">Quantum Neural Systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">$50B+</div>
              <div className="text-white font-medium">Annual Savings</div>
              <div className="text-gray-300 text-sm">Per Enterprise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">99.99%</div>
              <div className="text-white font-medium">Accuracy Rate</div>
              <div className="text-gray-300 text-sm">Decision Making</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">18</div>
              <div className="text-white font-medium">Months</div>
              <div className="text-gray-300 text-sm">Implementation Time</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Implement Revolutionary AI?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join Fortune 500 companies already achieving unprecedented results. 
              Get started with our proven implementation frameworks and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Implementation →
              </Link>
              <Link
                href="/resources"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026Revolutionary;