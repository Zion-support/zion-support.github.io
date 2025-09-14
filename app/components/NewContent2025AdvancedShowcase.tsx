'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  RocketLaunchIcon, 
  DocumentTextIcon,
  BuildingOfficeIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const NewContent2025AdvancedShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentPieces = [
    {
      id: 1,
      category: 'blog',
      type: 'Blog Post',
      title: 'Advanced Neural Networks Enterprise Breakthrough',
      subtitle: '1,800% ROI Revolution',
      description: 'Discover how advanced neural networks are achieving unprecedented enterprise performance with 1,800% ROI in 18 months and $4.2M annual savings.',
      link: '/blog/ai-2025-advanced-neural-networks-breakthrough',
      icon: CpuChipIcon,
      metrics: {
        roi: '1,800%',
        savings: '$4.2M',
        accuracy: '99.7%',
        readTime: '15 min'
      },
      tags: ['Neural Networks', 'Enterprise AI', 'ROI', 'Performance'],
      featured: true,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      id: 2,
      category: 'case-study',
      type: 'Case Study',
      title: 'Fortune 500 Neural Networks Success Story',
      subtitle: '$4.2B Annual Savings Achievement',
      description: 'Comprehensive analysis of how a Fortune 500 technology company achieved $4.2B in annual savings through advanced neural network implementation.',
      link: '/case-studies/ai-2025-neural-networks-fortune-500-success',
      icon: BuildingOfficeIcon,
      metrics: {
        roi: '1,800%',
        savings: '$4.2B',
        efficiency: '90%',
        readTime: '12 min'
      },
      tags: ['Fortune 500', 'Success Story', 'Implementation', 'Savings'],
      featured: true,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      category: 'resource',
      type: 'Implementation Guide',
      title: 'Neural Networks Implementation Guide',
      subtitle: 'Complete Roadmap to 1,800% ROI',
      description: 'Proven step-by-step roadmap for deploying advanced neural networks in enterprise environments with guaranteed 1,800% ROI in 18 months.',
      link: '/resources/ai-2025-neural-networks-implementation-guide',
      icon: BookOpenIcon,
      metrics: {
        roi: '1,800%',
        payback: '7.2 mo',
        phases: '3 phases',
        readTime: '25 min'
      },
      tags: ['Implementation', 'Roadmap', 'Strategy', 'Framework'],
      featured: true,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', icon: DocumentTextIcon },
    { id: 'blog', label: 'Blog Posts', icon: DocumentTextIcon },
    { id: 'case-study', label: 'Case Studies', icon: ChartBarIcon },
    { id: 'resource', label: 'Resources', icon: BookOpenIcon }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentPieces 
    : contentPieces.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <RocketLaunchIcon className="h-8 w-8 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              NEW CONTENT 2025 • ADVANCED AI
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Advanced Neural Networks
            <span className="block text-blue-600">Content Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest collection of advanced neural networks content featuring real-world success stories, 
            implementation guides, and breakthrough achievements with <strong>1,800% ROI</strong>.
          </p>
        </div>

        {/* Success Metrics Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">1,800%</div>
              <div className="text-sm lg:text-base opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">$4.2B</div>
              <div className="text-sm lg:text-base opacity-90">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">99.7%</div>
              <div className="text-sm lg:text-base opacity-90">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">7.2</div>
              <div className="text-sm lg:text-base opacity-90">Months Payback</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => {
            const IconComponent = content.icon;
            return (
              <div
                key={content.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${content.gradient} p-6 text-white relative overflow-hidden`}>
                  {content.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                    </div>
                  )}
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="h-8 w-8" />
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                      {content.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                  <p className="text-lg font-semibold text-yellow-200">{content.subtitle}</p>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(content.metrics).map(([key, value], index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {content.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={content.link}
                    className={`block w-full bg-gradient-to-r ${content.gradient} text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200`}
                  >
                    Read {content.type}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Achieve 1,800% ROI with Advanced Neural Networks?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Get personalized consultation from our AI experts and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025AdvancedShowcase;