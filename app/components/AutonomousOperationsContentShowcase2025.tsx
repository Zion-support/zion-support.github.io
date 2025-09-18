import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, CheckCircle, Star, Award } from 'lucide-react';

const AutonomousOperationsContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'autonomous-ops-guide',
      category: 'guide',
      type: 'Ultimate Guide',
      title: 'AI 2025-2026: Autonomous Business Operations - Ultimate Enterprise Guide',
      description: 'Transform your business with cutting-edge autonomous operations that deliver 800% ROI in 12 months',
      url: '/blog/ai-2025-2026-autonomous-business-operations-ultimate-guide',
      readingTime: '25 min read',
      featured: true,
      metrics: {
        roi: '800%',
        timeline: '12 months',
        savings: '$50M+',
        efficiency: '95%'
      },
      tags: ['AI', 'Autonomous Operations', 'ROI', 'Enterprise', 'Implementation']
    },
    {
      id: 'autonomous-ops-case-study',
      category: 'case-study',
      type: 'Success Story',
      title: 'Autonomous Business Operations Success Story: 800% ROI in 12 Months',
      description: 'How a Fortune 500 manufacturing company transformed operations with AI-driven autonomous systems',
      url: '/case-studies/autonomous-business-operations-800-roi-success-story',
      readingTime: '18 min read',
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$50M',
        uptime: '99.8%',
        efficiency: '95%'
      },
      tags: ['Case Study', 'Manufacturing', 'Fortune 500', 'Success Story']
    },
    {
      id: 'implementation-guide',
      category: 'resource',
      type: 'Implementation Guide',
      title: 'AI Implementation Master Guide 2025: From Strategy to ROI',
      description: 'Complete roadmap from strategy to 800% ROI with proven implementation methodology',
      url: '/resources/ai-implementation-master-guide-2025',
      readingTime: '28 min read',
      featured: false,
      metrics: {
        success: '98%',
        roi: '800%',
        timeline: '6-12 months',
        projects: '500+'
      },
      tags: ['Implementation', 'Strategy', 'ROI', 'Best Practices']
    },
    {
      id: 'automation-checklist',
      category: 'resource',
      type: 'Checklist',
      title: 'AI Automation Implementation Checklist 2025',
      description: 'Step-by-step checklist for successful AI automation implementation',
      url: '/resources/ai-automation-implementation-checklist-2025',
      readingTime: '15 min read',
      featured: false,
      metrics: {
        coverage: '100%',
        adoption: '< 1 day',
        success: '98%',
        audit: 'Ready'
      },
      tags: ['Checklist', 'Implementation', 'Best Practices', 'ROI']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'guide', label: 'Guides', count: contentItems.filter(item => item.category === 'guide').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">New Content Series</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Autonomous Business Operations Content Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, case studies, and resources to help you achieve 800% ROI with autonomous operations
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                    {item.featured && (
                      <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  <span>Read {item.type}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full">
                  {item.type}
                </span>
                <span className="text-sm text-gray-500">{item.readingTime}</span>
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                {item.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-indigo-600">{item.metrics.roi}</div>
                  <div className="text-xs text-gray-600">ROI</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-emerald-600">{item.metrics.savings}</div>
                  <div className="text-xs text-gray-600">Savings</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={item.url}
                className="inline-flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
            <p className="text-gray-600">
              Our autonomous operations implementations deliver consistent, measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">800%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Average ROI</div>
              <div className="text-sm text-gray-600">Within 12 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$50M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Annual Savings</div>
              <div className="text-sm text-gray-600">Per implementation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Success Rate</div>
              <div className="text-sm text-gray-600">Across all projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Projects</div>
              <div className="text-sm text-gray-600">Successfully delivered</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-xl mb-6 opacity-90">
              Get a personalized assessment and implementation roadmap for your autonomous operations journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Users className="w-5 h-5" />
                <span>Get Free Assessment</span>
              </Link>
              <Link
                href="/services/ai-automation"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                <Award className="w-5 h-5" />
                <span>View Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousOperationsContentShowcase2025;