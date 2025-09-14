'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const contentItems = [
    {
      id: 'advanced-automation-revolution',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Guide to 600% ROI',
      type: 'blog',
      category: 'automation',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with advanced AI automation. Complete implementation guide with real-world success stories.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '99.8%'
      },
      readingTime: '22 min read',
      featured: true,
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      tags: ['AI Automation', 'ROI', 'Enterprise Solutions', '2025']
    },
    {
      id: 'ai-transformation-600-roi',
      title: 'AI Transformation Success: $3.2B Company Achieves 600% ROI in 12 Months',
      type: 'case-study',
      category: 'transformation',
      description: 'Real implementation details, challenges overcome, and lessons learned from a Fortune 500 manufacturing company.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '99.7%'
      },
      readingTime: '18 min read',
      featured: true,
      url: '/case-studies/ai-transformation-600-roi-success-story-2025',
      tags: ['Case Study', 'ROI', 'Manufacturing', 'Success Story']
    },
    {
      id: 'implementation-ultimate-framework',
      title: 'AI Implementation Ultimate Framework 2025: From Strategy to 600% ROI',
      type: 'resource',
      category: 'framework',
      description: 'The complete, battle-tested framework for AI implementation success. Proven methodologies used by Fortune 500 companies.',
      metrics: {
        roi: '600%',
        successRate: '95%',
        timeToValue: '67% faster',
        projects: '500+'
      },
      readingTime: '35 min read',
      featured: true,
      url: '/resources/ai-implementation-ultimate-framework-2025',
      tags: ['Implementation', 'Framework', 'Best Practices', 'Fortune 500']
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'quantum',
      description: 'Explore the quantum AI revolution that\'s transforming Fortune 500 companies with unprecedented processing power.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '20 min read',
      featured: true,
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      tags: ['Quantum AI', 'Business Revolution', 'Fortune 500', '2026']
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Guide to 450% ROI',
      type: 'blog',
      category: 'edge',
      description: 'Discover how edge computing is revolutionizing AI deployment with 67% latency reduction and 89% cost savings.',
      metrics: {
        roi: '450%',
        latency: '67% reduction',
        savings: '89%',
        uptime: '99.7%'
      },
      readingTime: '18 min read',
      featured: false,
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      tags: ['Edge Computing', 'AI', 'ROI', 'Latency']
    },
    {
      id: 'sustainable-technology-revolution',
      title: 'AI 2025: The Sustainable Technology Revolution - 380% ROI Through Green AI',
      type: 'blog',
      category: 'sustainability',
      description: 'Learn how sustainable AI is delivering 380% ROI while reducing carbon footprint by 67% and improving ESG scores.',
      metrics: {
        roi: '380%',
        carbon: '67% reduction',
        efficiency: '89%',
        esg: '94% improvement'
      },
      readingTime: '16 min read',
      featured: false,
      url: '/blog/ai-2025-sustainable-technology-revolution',
      tags: ['Sustainable AI', 'Green Technology', 'ESG', 'ROI']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'automation', label: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'transformation', label: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
    { id: 'framework', label: 'Framework', count: contentItems.filter(item => item.category === 'framework').length },
    { id: 'quantum', label: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'edge', label: 'Edge Computing', count: contentItems.filter(item => item.category === 'edge').length },
    { id: 'sustainability', label: 'Sustainability', count: contentItems.filter(item => item.category === 'sustainability').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

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
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              600% ROI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge AI strategies, frameworks, and success stories that are transforming Fortune 500 companies worldwide. 
            Each piece of content is designed to deliver measurable business value.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">600%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Average ROI</h3>
            <p className="text-sm text-gray-600">Across all implementations</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">500+</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600">Fortune 500 companies</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">95%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Success Rate</h3>
            <p className="text-sm text-gray-600">Implementation success</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold text-orange-600">67%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Faster Implementation</h3>
            <p className="text-sm text-gray-600">Than traditional methods</p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                </div>
              )}

              {/* Content Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-4">
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Read Full Content
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join 500+ Fortune 500 companies that have achieved 600% ROI through strategic AI implementation. 
              Get your free assessment and implementation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/consultation"
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