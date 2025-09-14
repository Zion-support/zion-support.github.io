'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp,  Zap, Clock, Users, Award } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'advanced-ai-automation-mastery',
      title: 'Advanced AI Automation Enterprise Mastery',
      subtitle: 'Ultimate Guide to 1,500% ROI',
      type: 'blog',
      category: 'automation',
      metrics: { roi: '1,500%', savings: '$2.8B', efficiency: '89%', accuracy: '99.7%' },
      url: '/blog/ai-2025-advanced-ai-automation-enterprise-mastery-ultimate-guide',
      readingTime: '25 min read',
      featured: true,
      description: 'Transform your enterprise with cutting-edge AI automation that delivers unprecedented results and competitive advantage.'
    },
    {
      id: 'enterprise-transformation-success',
      title: 'Enterprise Transformation Success Story',
      subtitle: '$4.2B Company Achieves 1,500% ROI',
      type: 'case-study',
      category: 'transformation',
      metrics: { roi: '1,500%', savings: '$405M', satisfaction: '94%', timeline: '18 months' },
      url: '/case-studies/ai-2025-enterprise-transformation-ultimate-success-story-1500-roi',
      readingTime: '20 min read',
      featured: true,
      description: 'How a Fortune 100 manufacturing giant transformed its operations with advanced AI automation.'
    },
    {
      id: 'quantum-ai-revolution',
      title: 'Quantum AI Revolution Ultimate Guide',
      subtitle: '2,000% ROI with Quantum Computing',
      type: 'blog',
      category: 'quantum',
      metrics: { roi: '2,000%', savings: '$8.2B', speed: '1,200%', accuracy: '99.97%' },
      url: '/blog/ai-2025-quantum-ai-revolution-ultimate-guide',
      readingTime: '15 min read',
      featured: true,
      description: 'How quantum computing is transforming business operations and delivering unprecedented competitive advantage.'
    },
    {
      id: 'autonomous-systems-success',
      title: 'Autonomous Systems Revolution',
      subtitle: '$1.8B Company Achieves 900% ROI',
      type: 'case-study',
      category: 'autonomous',
      metrics: { roi: '900%', savings: '$162M', automation: '95%', satisfaction: '94%' },
      url: '/case-studies/ai-2025-autonomous-systems-revolution-success-story',
      readingTime: '18 min read',
      featured: true,
      description: 'How a Fortune 500 company transformed its operations with autonomous AI systems and self-managing operations.'
    },
    {
      id: 'implementation-framework',
      title: 'Implementation Ultimate Success Framework',
      subtitle: 'Complete Roadmap to 1,500% ROI',
      type: 'resource',
      category: 'framework',
      metrics: { roi: '1,500%', success: '94%', projects: '500+', timeline: '18 months' },
      url: '/resources/ai-2025-implementation-ultimate-success-framework-1500-roi',
      readingTime: '30 min read',
      featured: true,
      description: 'The definitive guide to implementing AI automation that delivers unprecedented returns and competitive advantage.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'automation', label: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'transformation', label: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
    { id: 'quantum', label: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'autonomous', label: 'Autonomous', count: contentItems.filter(item => item.category === 'autonomous').length },
    { id: 'framework', label: 'Frameworks', count: contentItems.filter(item => item.category === 'framework').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <TrendingUp className="w-4 h-4" />;
      case 'case-study': return <Award className="w-4 h-4" />;
      case 'resource': return <Award className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">NEW 2025 CONTENT REVOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI content that's delivering unprecedented ROI and transforming enterprises worldwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Content Type Badge */}
              <div className="p-4 pb-0">
                <div className={`inline-flex items-center space-x-1 ${getTypeColor(item.type)} rounded-full px-3 py-1 text-xs font-medium`}>
                  {getTypeIcon(item.type)}
                  <span className="capitalize">{item.type.replace('-', ' ')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {Object.entries(item.metrics).slice(2, 4).map(([key, value]) => (
                    <span key={key} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {key}: {value}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{item.readingTime}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  <span>Read {item.type === 'blog' ? 'Guide' : item.type === 'case-study' ? 'Case Study' : 'Framework'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Proven Results Across 500+ Implementations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1,500%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$2.8B+</div>
              <div className="text-gray-600">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
              <div className="text-gray-600">Months Implementation</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join 500+ companies that have achieved extraordinary results with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;