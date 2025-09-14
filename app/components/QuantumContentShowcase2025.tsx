'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Clock, CheckCircle, Star, BookOpen, FileText, Users, ArrowRight } from 'lucide-react';

const QuantumContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const quantumContent = [
    {
      id: 'quantum-breakthrough',
      title: 'AI 2025: The Quantum Computing Breakthrough That\'s Revolutionizing Enterprise',
      description: 'Discover how quantum computing is transforming enterprise AI, delivering 600% ROI and $500M+ in savings across Fortune 500 companies.',
      url: '/blog/ai-2025-quantum-computing-breakthrough-enterprise',
      type: 'blog',
      category: 'AI Innovation',
      metrics: {
        roi: '600%',
        savings: '$500M+',
        accuracy: '99.7%',
        speed: '67% faster'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Enterprise', 'ROI', 'Breakthrough']
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 Quantum Transformation: How a $50B Company Achieved 800% ROI',
      description: 'Discover how a Fortune 500 manufacturing company achieved 800% ROI and $2.8B in savings through strategic quantum computing implementation.',
      url: '/case-studies/fortune-500-quantum-transformation-2025',
      type: 'case-study',
      category: 'Success Story',
      metrics: {
        roi: '800%',
        savings: '$2.8B',
        accuracy: '99.9%',
        speed: '67% reduction'
      },
      readingTime: '22 min read',
      featured: true,
      tags: ['Case Study', 'Quantum Computing', 'Fortune 500', 'ROI', 'Manufacturing']
    },
    {
      id: 'quantum-implementation-guide',
      title: 'Quantum Computing Implementation Guide 2025: From Strategy to 800% ROI',
      description: 'Complete guide to implementing quantum computing in your enterprise, with proven strategies for achieving 800% ROI and $500M+ in savings.',
      url: '/resources/quantum-computing-implementation-guide-2025',
      type: 'resource',
      category: 'Implementation Guide',
      metrics: {
        roi: '800%',
        savings: '$500M+',
        accuracy: '99.9%',
        speed: '340% improvement'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['Implementation Guide', 'Quantum Computing', 'ROI', 'Strategy', 'Enterprise']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: quantumContent.length },
    { id: 'blog', label: 'Blog Posts', count: quantumContent.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: quantumContent.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: quantumContent.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? quantumContent 
    : quantumContent.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <Users className="w-5 h-5" />;
      case 'resource':
        return <FileText className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">QUANTUM COMPUTING BREAKTHROUGH 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Quantum Computing Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how quantum computing is transforming enterprise operations with proven 800% ROI and $500M+ in savings across Fortune 500 companies.
          </p>
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">800%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500M+</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">340%</div>
            <div className="text-gray-600 font-medium">Speed Improvement</div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Content type badge */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Savings</span>
                    </div>
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                  </div>
                </div>

                {/* Reading time and category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.readingTime}</span>
                  </div>
                  <span className="text-sm text-gray-500">{item.category}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action button */}
              <div className="p-6 pt-0">
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Enterprise with Quantum Computing?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies achieving 800% ROI with our quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quantum-computing-solutions"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Explore Quantum Solutions</span>
                <Zap className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumContentShowcase2025;