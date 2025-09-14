'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  readingTime: string;
  featured: boolean;
  tags: string[];
}

const NeuralInterfaceContentShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const neuralInterfaceContent: ContentItem[] = [
    {
      id: 'neural-interfaces-business-revolution',
      title: 'AI 2025: The Neural Interfaces Business Revolution - Ultimate Enterprise Guide',
      type: 'blog',
      url: '/blog/ai-2025-neural-interfaces-business-revolution-ultimate-guide',
      description: 'Transform your business with brain-computer interface technology achieving 800% ROI in 12 months. Learn how Fortune 500 companies are revolutionizing operations with neural interfaces.',
      metrics: {
        roi: '800%',
        savings: '$50M+',
        efficiency: '95%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Neural Interfaces', 'Business Revolution', 'ROI', 'Enterprise', 'AI 2025']
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: 800% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-800-roi-success',
      description: 'How a Global Manufacturing Giant achieved $75M annual savings with neural interface technology. Real-world implementation with detailed metrics and lessons learned.',
      metrics: {
        roi: '800%',
        savings: '$75M',
        efficiency: '98%'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'ROI', 'Success Story']
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 800% ROI',
      type: 'resource',
      url: '/resources/neural-interface-implementation-guide-2025',
      description: 'Complete framework for enterprise neural interface deployment with proven 800% ROI results. Step-by-step implementation guide with checklists and best practices.',
      metrics: {
        roi: '800%',
        savings: '$50M+',
        efficiency: '95%'
      },
      readingTime: '30 min read',
      featured: true,
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Framework', 'Best Practices']
    }
  ];

  const filteredContent = neuralInterfaceContent.filter(item => 
    activeFilter === 'all' || item.type === activeFilter
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📖';
      case 'case-study': return '📊';
      case 'resource': return '📋';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'case-study': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'resource': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-600">NEURAL INTERFACE REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🧠 Neural Interface Content Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 800% ROI with brain-computer interface technology. 
            Comprehensive guides, real-world case studies, and implementation frameworks.
          </p>
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">800%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
            <div className="text-sm text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Efficiency Gain</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'All Content', count: neuralInterfaceContent.length },
            { key: 'blog', label: 'Guides', count: neuralInterfaceContent.filter(item => item.type === 'blog').length },
            { key: 'case-study', label: 'Case Studies', count: neuralInterfaceContent.filter(item => item.type === 'case-study').length },
            { key: 'resource', label: 'Resources', count: neuralInterfaceContent.filter(item => item.type === 'resource').length }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Type badge and reading time */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type === 'blog' ? 'GUIDE' : item.type === 'case-study' ? 'CASE STUDY' : 'RESOURCE'}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 block"
                >
                  Read {item.type === 'blog' ? 'Guide' : item.type === 'case-study' ? 'Case Study' : 'Resource'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Implement Neural Interfaces in Your Business?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join Fortune 500 companies achieving 800% ROI with neural interface technology. 
            Get your personalized assessment and implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Assessment
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Related Neural Interface Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl mb-4">🔬</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Research & Development</h4>
              <p className="text-gray-600 text-sm mb-4">
                Latest research on neural interface technology and its business applications.
              </p>
              <Link href="/research" className="text-purple-600 font-semibold text-sm hover:underline">
                Explore Research →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl mb-4">🛠️</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Implementation Tools</h4>
              <p className="text-gray-600 text-sm mb-4">
                Tools and frameworks to help you implement neural interfaces successfully.
              </p>
              <Link href="/tools" className="text-purple-600 font-semibold text-sm hover:underline">
                Browse Tools →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Community</h4>
              <p className="text-gray-600 text-sm mb-4">
                Connect with neural interface experts and implementation specialists.
              </p>
              <Link href="/community" className="text-purple-600 font-semibold text-sm hover:underline">
                Join Community →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceContentShowcase2025;