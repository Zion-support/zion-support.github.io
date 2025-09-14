'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, TrendingUp, Users, DollarSign, Clock, ArrowRight, Filter } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    efficiency?: string;
  };
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-advanced-automation-revolution',
    title: 'AI 2025: The Advanced Automation Revolution - Ultimate Enterprise Guide',
    type: 'blog',
    url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
    description: 'Comprehensive guide to advanced AI automation in 2025, featuring 500% ROI strategies and real-world implementation frameworks.',
    readingTime: '25 min read',
    tags: ['AI Automation', 'Enterprise', 'ROI', 'Digital Transformation'],
    featured: true,
    metrics: {
      roi: '500%',
      savings: '$2.8B',
      accuracy: '99.8%',
      efficiency: '340%'
    }
  },
  {
    id: 'ai-transformation-2025-ultimate-success',
    title: 'AI Transformation 2025: $3.2B Company Achieves 750% ROI - Ultimate Success Story',
    type: 'case-study',
    url: '/case-studies/ai-transformation-2025-ultimate-success-story',
    description: 'Real-world case study of a Fortune 500 company achieving 750% ROI through comprehensive AI transformation.',
    readingTime: '22 min read',
    tags: ['Case Study', 'AI Transformation', 'ROI', 'Fortune 500'],
    featured: true,
    metrics: {
      roi: '750%',
      savings: '$2.8B',
      accuracy: '99.8%',
      efficiency: '340%'
    }
  },
  {
    id: 'ai-implementation-ultimate-guide-2025',
    title: 'AI Implementation Ultimate Guide 2025: Complete Roadmap to 500% ROI',
    type: 'resource',
    url: '/resources/ai-implementation-ultimate-guide-2025-complete',
    description: 'Complete implementation roadmap for AI transformation, featuring proven strategies and best practices.',
    readingTime: '35 min read',
    tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
    featured: true,
    metrics: {
      roi: '500%',
      success: '94%',
      timeline: '18 months',
      projects: '500+'
    }
  }
];

const categories = [
  { id: 'all', label: 'All Content', count: contentItems.length },
  { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
  { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
  { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
];

export default function UltimateContentShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most powerful AI content pieces, featuring real-world success stories, 
            proven implementation strategies, and breakthrough insights that drive measurable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Type Badge */}
              <div className="p-6 pb-0">
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                  <Filter className="w-3 h-3 mr-1" />
                  {item.type === 'blog' ? 'Blog Post' : item.type === 'case-study' ? 'Case Study' : 'Resource'}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {item.metrics.roi && (
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-green-700">ROI</div>
                    </div>
                  )}
                  {item.metrics.savings && (
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-blue-700">Savings</div>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.readingTime}
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-0">
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving breakthrough results with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}