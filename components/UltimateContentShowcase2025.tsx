'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, TrendingUp, Users, DollarSign, Clock, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  image: string;
  description: string;
  metrics: {
    roi: string;
    savings?: string;
    efficiency?: string;
    satisfaction?: string;
  };
  readingTime: string;
  tags: string[];
  featured: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 900% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      image: '📊',
      description: 'Comprehensive guide to implementing advanced analytics for maximum ROI',
      metrics: {
        roi: '900%',
        savings: '$8.2M annually',
        efficiency: '450%',
        satisfaction: '99.9%'
      },
      readingTime: '22 min read',
      tags: ['Advanced Analytics', 'AI', 'ROI', 'Fortune 500'],
      featured: true
    },
    {
      id: 'manufacturing-transformation-1200-roi',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 1,200% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-1200-roi-success',
      image: '🏭',
      description: 'Real-world case study of manufacturing AI transformation success',
      metrics: {
        roi: '1,200%',
        savings: '$450M annually',
        efficiency: '78%',
        satisfaction: '96%'
      },
      readingTime: '18 min read',
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Case Study'],
      featured: true
    },
    {
      id: 'implementation-master-roadmap-ultimate',
      title: 'AI 2025 Implementation Master Roadmap: From Strategy to 1,000% ROI in 12 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-roadmap-ultimate-guide',
      image: '🗺️',
      description: 'Step-by-step roadmap for AI implementation success',
      metrics: {
        roi: '1,000%',
        savings: '$5.2M annually',
        efficiency: '94%',
        satisfaction: '94%'
      },
      readingTime: '35 min read',
      tags: ['AI Implementation', 'Strategy', 'ROI', 'Master Guide'],
      featured: true
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      image: '🎯',
      description: 'Transform customer experience with AI-powered solutions',
      metrics: {
        roi: '750%',
        savings: '$6.8M annually',
        efficiency: '340%',
        satisfaction: '99.8%'
      },
      readingTime: '20 min read',
      tags: ['Customer Experience', 'AI', 'ROI', 'Personalization'],
      featured: true
    },
    {
      id: 'financial-services-transformation-850-roi',
      title: 'AI 2025 Financial Services Transformation: $2.1B Bank Achieves 850% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-850-roi-success',
      image: '🏦',
      description: 'Banking sector AI transformation success story',
      metrics: {
        roi: '850%',
        savings: '$180M annually',
        efficiency: '340%',
        satisfaction: '99.5%'
      },
      readingTime: '16 min read',
      tags: ['Financial Services', 'AI Transformation', 'ROI', 'Case Study'],
      featured: true
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Guide to 450% ROI',
      type: 'blog',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      image: '⚡',
      description: 'Leverage edge computing for real-time AI applications',
      metrics: {
        roi: '450%',
        savings: '$2.3M annually',
        efficiency: '67%',
        satisfaction: '99.7%'
      },
      readingTime: '18 min read',
      tags: ['Edge Computing', 'AI', 'ROI', 'Latency'],
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Content', count: contentItems.length },
    { key: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { key: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { key: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = contentItems.filter(item => 
    activeCategory === 'all' || item.type === activeCategory
  );

  const featuredContent = contentItems.filter(item => item.featured);
  const regularContent = contentItems.filter(item => !item.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Revolutionary AI Content 2025</h2>
            <Star className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI insights, case studies, and implementation guides that are delivering 
            unprecedented ROI for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">1,200%</div>
                <div className="text-sm text-gray-600">Max ROI Achieved</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">$450M</div>
                <div className="text-sm text-gray-600">Max Annual Savings</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Max Accuracy</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Months to ROI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredContent.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{item.image}</span>
                      <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-purple-700 capitalize">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-purple-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={item.url}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-center block"
                    >
                      Explore Content
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.image}</span>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700 capitalize">
                      {item.type}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-2 rounded text-center">
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Content Impact Summary</h3>
            <p className="text-lg opacity-90">Comprehensive coverage of AI transformation topics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500%+</div>
              <div className="text-sm opacity-90">Average ROI Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2.8B+</div>
              <div className="text-sm opacity-90">Total Savings Highlighted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-sm opacity-90">Content Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%+</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get personalized guidance and start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;