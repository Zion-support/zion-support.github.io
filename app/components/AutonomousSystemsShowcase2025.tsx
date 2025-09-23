'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AutonomousSystemsShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'autonomous-enterprise-systems',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution',
      type: 'blog',
      category: 'autonomous',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 3,000% ROI through autonomous enterprise systems that self-manage, self-optimize, and self-heal.',
      metrics: {
        roi: '3,000%',
        savings: '$25.6M',
        efficiency: '800%',
        autonomy: '95%'
      },
      badge: 'Revolution',
      color: 'from-emerald-600 to-teal-600',
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'enterprise-ai-transformation',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Guide',
      type: 'blog',
      category: 'guides',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1,000% ROI through comprehensive AI transformation strategies.',
      metrics: {
        roi: '1,000%',
        savings: '$4.2M',
        timeframe: '18 months',
        companies: '500+'
      },
      badge: 'Ultimate Guide',
      color: 'from-purple-600 to-indigo-600',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'quantum-computing-breakthrough',
      title: 'AI 2025: The Quantum Computing Business Breakthrough',
      type: 'blog',
      category: 'breakthroughs',
      url: '/blog/ai-2025-quantum-computing-business-breakthrough',
      description: 'Discover how quantum computing is revolutionizing business operations with unprecedented 2,000% ROI.',
      metrics: {
        roi: '2,000%',
        savings: '$12.8M',
        speed: '1,000x faster',
        market: '$65B'
      },
      badge: 'Breakthrough',
      color: 'from-blue-600 to-cyan-600',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success Story',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ai-transformation-2000-roi-success',
      description: 'Discover how a Fortune 500 manufacturing company achieved unprecedented 2,000% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '2,000%',
        savings: '$1.2B',
        efficiency: '450%',
        satisfaction: '95%'
      },
      badge: 'Success Story',
      color: 'from-green-600 to-emerald-600',
      readingTime: '18 min read',
      featured: false
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution',
      type: 'blog',
      category: 'guides',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      description: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      badge: 'Revolution',
      color: 'from-orange-600 to-red-600',
      readingTime: '20 min read',
      featured: false
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability',
      type: 'blog',
      category: 'breakthroughs',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      description: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      metrics: {
        reliability: '99.9%',
        deployment_speed: '67%',
        savings: '$2.1B',
        efficiency: '89%'
      },
      badge: 'Breakthrough',
      color: 'from-teal-600 to-blue-600',
      readingTime: '18 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'autonomous', label: 'Autonomous Systems', count: content.filter(c => c.category === 'autonomous').length },
    { id: 'guides', label: 'Implementation Guides', count: content.filter(c => c.category === 'guides').length },
    { id: 'breakthroughs', label: 'AI Breakthroughs', count: content.filter(c => c.category === 'breakthroughs').length },
    { id: 'success-stories', label: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(c => c.category === activeCategory);

  const featuredContent = content.filter(c => c.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AUTONOMOUS SYSTEMS 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Autonomous AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the ultimate guides, breakthrough technologies, and success stories that are reshaping enterprise operations with unprecedented ROI through autonomous systems.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Autonomous Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Header */}
                  <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                  
                  <div className="p-8">
                    {/* Badge and Type */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                        {item.badge}
                      </span>
                      <span className="text-sm text-gray-500 uppercase tracking-wide">{item.type}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-emerald-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Reading Time */}
                    <div className="text-sm text-gray-500 mb-6">
                      {item.readingTime}
                    </div>

                    {/* CTA */}
                    <Link
                      href={item.url}
                      className={`w-full bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center block`}
                    >
                      Read Full Content
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Header */}
                <div className={`h-1 bg-gradient-to-r ${item.color}`}></div>
                
                <div className="p-6">
                  {/* Badge and Type */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{item.type}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-emerald-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Reading Time */}
                  <div className="text-xs text-gray-500 mb-4">
                    {item.readingTime}
                  </div>

                  {/* CTA */}
                  <Link
                    href={item.url}
                    className={`w-full bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center block text-sm`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with Autonomous AI?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Discover how your organization can achieve similar results with our comprehensive autonomous systems transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousSystemsShowcase2025;