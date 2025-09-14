'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 45 },
    { id: 'blog', label: 'Blog Posts', count: 18 },
    { id: 'case-study', label: 'Case Studies', count: 15 },
    { id: 'resource', label: 'Resources', count: 12 }
  ];

  const featuredContent = [
    {
      id: 'ai-2025-ultimate-autonomous-enterprise-revolution',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution',
      type: 'blog',
      category: 'blog',
      roi: '7,500%',
      savings: '$25.8B+',
      readingTime: '35 min read',
      description: 'Complete guide to achieving 7,500% ROI through autonomous enterprise systems',
      url: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      featured: true,
      tags: ['AI Revolution', 'Autonomous Enterprise', 'ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-autonomous-enterprise-success',
      title: 'Fortune 500 Autonomous Enterprise Success Story',
      type: 'case-study',
      category: 'case-study',
      roi: '7,500%',
      savings: '$25.8B',
      readingTime: '22 min read',
      description: 'Real-world implementation achieving $25.8B annual savings in 18 months',
      url: '/case-studies/fortune-500-autonomous-enterprise-transformation-7500-roi-success-story',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'ROI']
    },
    {
      id: 'autonomous-enterprise-implementation-guide',
      title: 'Autonomous Enterprise Implementation Ultimate Guide',
      type: 'resource',
      category: 'resource',
      roi: '7,500%',
      savings: '$25.8B+',
      readingTime: '45 min read',
      description: 'Complete roadmap to implementing autonomous enterprise systems for maximum ROI',
      url: '/resources/autonomous-enterprise-implementation-ultimate-guide-2025-2026',
      featured: true,
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework']
    },
    {
      id: 'ai-2025-advanced-neural-architectures',
      title: 'AI 2025: Advanced Neural Architectures Revolution',
      type: 'blog',
      category: 'blog',
      roi: '2,800%',
      savings: '$4.2B+',
      readingTime: '25 min read',
      description: 'Next-generation neural architectures delivering unprecedented business results',
      url: '/blog/ai-2025-advanced-neural-architectures-revolution',
      featured: false,
      tags: ['Neural Architectures', 'AI Revolution', 'ROI', 'Breakthrough']
    },
    {
      id: 'fortune-500-neural-architectures-success',
      title: 'Fortune 500 Neural Architectures Success Story',
      type: 'case-study',
      category: 'case-study',
      roi: '2,800%',
      savings: '$4.2B',
      readingTime: '18 min read',
      description: 'Manufacturing giant achieves $4.2B savings with advanced neural architectures',
      url: '/case-studies/fortune-500-advanced-neural-architectures-2800-roi-success',
      featured: false,
      tags: ['Case Study', 'Neural Architectures', 'Manufacturing', 'ROI']
    },
    {
      id: 'quantum-neural-fusion-revolution',
      title: 'AI 2025: Quantum-Neural Fusion Revolution',
      type: 'blog',
      category: 'blog',
      roi: '25,000%',
      savings: '$500B+',
      readingTime: '35 min read',
      description: 'Revolutionary quantum-neural fusion technology transforming business operations',
      url: '/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough',
      featured: true,
      tags: ['Quantum Computing', 'Neural Networks', 'AI Revolution', 'ROI']
    },
    {
      id: 'ai-2025-ultimate-digital-transformation',
      title: 'AI 2025: Ultimate Digital Transformation Revolution',
      type: 'blog',
      category: 'blog',
      roi: '35,000%',
      savings: '$500B+',
      readingTime: '40 min read',
      description: 'Complete digital transformation guide achieving unprecedented ROI results',
      url: '/blog/ai-2025-ultimate-digital-transformation-revolution-ultimate-breakthrough',
      featured: true,
      tags: ['Digital Transformation', 'AI Revolution', 'ROI', 'Breakthrough']
    },
    {
      id: 'ai-business-intelligence-revolution',
      title: 'AI 2025: Ultimate Business Intelligence Revolution',
      type: 'blog',
      category: 'blog',
      roi: '18,000%',
      savings: '$89.2B+',
      readingTime: '35 min read',
      description: 'Revolutionary business intelligence solutions delivering massive ROI improvements',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      featured: false,
      tags: ['Business Intelligence', 'AI Revolution', 'ROI', 'Data Analytics']
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.category === activeCategory);

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
        return 'bg-blue-500';
      case 'case-study':
        return 'bg-green-500';
      case 'resource':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ultimate Content Collection 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI content featuring breakthrough technologies, 
            real-world case studies, and implementation guides with proven ROI results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {content.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-center font-semibold">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(content.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getTypeColor(content.type)}`}>
                      {content.type.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{content.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{content.savings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                  </div>
                </div>

                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Join thousands of companies already achieving massive ROI with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;