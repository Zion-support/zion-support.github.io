'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, DollarSign, CheckCircle, Star, ExternalLink } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    timeline: string;
    efficiency?: string;
  };
  readingTime: string;
  tags: string[];
  featured: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-enterprise-automation-ultimate-breakthrough-2025',
      title: 'AI 2025: Enterprise Automation Ultimate Breakthrough - 1,500% ROI in 8 Months',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1,500% ROI through revolutionary AI automation. Complete implementation guide with real-world success metrics.',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '8 months',
        efficiency: '95%'
      },
      readingTime: '22 min read',
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Fortune 500', 'Breakthrough'],
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      description: 'How a Fortune 100 manufacturing company achieved 1,200% ROI and $2.8B annual savings through comprehensive AI transformation.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '99.7%'
      },
      readingTime: '18 min read',
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Manufacturing', 'Success Story'],
      featured: true
    },
    {
      id: 'ai-2025-implementation-ultimate-roadmap-1500-roi',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 1,500% ROI in 8 Months',
      description: 'Complete step-by-step roadmap for achieving 1,500% ROI with AI implementation. Proven framework used by Fortune 500 companies worldwide.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-1500-roi',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '8 months',
        efficiency: '98%'
      },
      readingTime: '25 min read',
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Roadmap', 'Best Practices'],
      featured: true
    },
    {
      id: 'ai-2025-autonomous-enterprise-systems-revolution',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - 3,000% ROI Through Self-Managing AI',
      description: 'Explore how autonomous AI systems are delivering 3,000% ROI through self-managing operations that require minimal human intervention.',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      metrics: {
        roi: '3,000%',
        savings: '$25.6M',
        timeline: '12 months',
        efficiency: '800%'
      },
      readingTime: '28 min read',
      tags: ['Autonomous Systems', 'Enterprise AI', 'ROI', 'Self-Managing AI', 'Revolution'],
      featured: true
    },
    {
      id: 'ai-transformation-fortune-100-ultimate-success-story',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI in 24 Months',
      description: 'Complete case study of how a Fortune 100 company achieved 1,200% ROI and $5.2B in savings through strategic AI implementation.',
      type: 'case-study',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$5.2B',
        timeline: '24 months',
        efficiency: '98%'
      },
      readingTime: '12 min read',
      tags: ['Fortune 100', 'AI Transformation', 'ROI', 'Case Study', 'Success Story'],
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      description: 'Comprehensive framework for achieving 1,000%+ ROI with AI implementation. Includes templates, checklists, and proven methodologies.',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '94%'
      },
      readingTime: '25 min read',
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy', 'Enterprise AI'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.replace(/[^\d]/g, ''));
    if (roiValue >= 1000) return 'text-green-600';
    if (roiValue >= 500) return 'text-blue-600';
    if (roiValue >= 200) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-semibold">ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content with Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, technologies, and implementation frameworks that are delivering unprecedented ROI for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
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
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-semibold">FEATURED</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>

                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{item.readingTime}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getROIColor(item.metrics.roi)}`}>
                      {item.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {item.metrics.savings}
                    </div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {item.metrics.timeline}
                    </div>
                    <div className="text-xs text-gray-600">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {item.metrics.efficiency}
                    </div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white text-gray-700 text-xs rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 1,500% ROI with AI?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join 500+ Fortune 500 companies that have already transformed their operations with our proven AI implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-2025-implementation-ultimate-roadmap-1500-roi"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Complete Implementation Guide</span>
                <ExternalLink className="w-4 h-4" />
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
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;