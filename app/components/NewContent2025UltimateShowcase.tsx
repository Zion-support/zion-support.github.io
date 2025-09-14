'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, Clock, CheckCircle } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentPieces = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'AI Strategy',
      description: 'Discover how Fortune 500 companies are achieving 500%+ ROI with revolutionary AI implementations.',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%',
        readingTime: '18 min'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      category: 'Success Story',
      description: 'How a $50B manufacturing giant achieved 567% ROI through revolutionary AI implementation.',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        readingTime: '22 min'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 500% ROI',
      type: 'resource',
      category: 'Implementation',
      description: 'Complete roadmap for AI implementation success with proven strategies and frameworks.',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        success: '98%',
        roi: '500%+',
        timeline: '18 months',
        readingTime: '25 min'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'Quantum AI',
      description: 'Explore the quantum AI revolution transforming business operations with 1,200% processing improvements.',
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        readingTime: '15 min'
      },
      featured: false,
      isNew: true
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2026: Next-Generation Autonomous Systems Revolution',
      type: 'blog',
      category: 'Autonomous Systems',
      description: 'Discover how autonomous systems are revolutionizing business operations with 99.9% uptime.',
      url: '/blog/ai-2026-next-generation-autonomous-systems-revolution',
      metrics: {
        uptime: '99.9%',
        costReduction: '85%',
        productivity: '400%',
        readingTime: '12 min'
      },
      featured: false,
      isNew: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: 450% ROI Success Story',
      type: 'case-study',
      category: 'Healthcare',
      description: 'How a $200M health system achieved 300% ROI through strategic AI implementation.',
      url: '/case-studies/ai-healthcare-transformation-2025-success-story',
      metrics: {
        roi: '450%',
        savings: '$12M',
        satisfaction: '94%',
        readingTime: '15 min'
      },
      featured: false,
      isNew: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'blog', label: 'Blog Posts', count: contentPieces.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentPieces.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.type === activeTab);

  const featuredContent = contentPieces.filter(content => content.featured);
  const newContent = contentPieces.filter(content => content.isNew);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">🚀 NEW 2025 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI content featuring proven strategies, 
            success stories, and implementation guides for achieving 500%+ ROI.
          </p>
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">500%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600">Months to ROI</div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {content.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 capitalize">{content.type}</span>
                </div>

                <div className="mb-2">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Reading time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {content.metrics.readingTime || '15 min read'}
                </div>

                {/* CTA */}
                <Link
                  href={content.url}
                  className="inline-flex items-center justify-center w-full bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional resources */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have achieved 500%+ ROI through strategic AI implementation. 
              Get your free AI readiness assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/tools/ai-roi-calculator"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcase;