"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: '1',
      title: 'AI 2025 Enterprise Transformation Guide',
      type: 'blog' as const,
      url: '/blog/ai-2025-enterprise-transformation-complete-guide',
      category: 'enterprise',
      readTime: '15 min',
      views: '2.3k',
      rating: 4.9
    },
    {
      id: '2',
      title: 'Fortune 500 AI Success Story',
      type: 'case-study' as const,
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      category: 'case-study',
      readTime: '12 min',
      views: '1.8k',
      rating: 4.8
    },
    {
      id: '3',
      title: 'AI Implementation Checklist 2025',
      type: 'resource' as const,
      url: '/resources/ai-implementation-checklist-2025',
      category: 'resources',
      readTime: '8 min',
      views: '3.1k',
      rating: 4.9
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content' },
    { id: 'enterprise', label: 'Enterprise AI' },
    { id: 'case-study', label: 'Success Stories' },
    { id: 'resources', label: 'Resources' }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most comprehensive and impactful content covering AI transformation, enterprise success stories, and implementation guides.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">
                    {item.type === 'blog' ? '📖' : item.type === 'case-study' ? '📊' : '📋'}
                  </div>
                  <div className="text-sm font-medium opacity-90">
                    {item.type.toUpperCase().replace('-', ' ')}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.readTime} read</span>
                  <span>{item.views} views</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{item.rating}</span>
                  </div>
                </div>
                <Link 
                  href={item.url}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Get personalized AI transformation guidance and implementation support from our expert consultants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Support
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;