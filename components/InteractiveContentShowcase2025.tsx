'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentShowcase20o25 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentItems = [
    {
      id: 1,
      title: 'AI 20o25 Ultimate Content Revolution',
      description:
        'Transform your business with revolutionary AI-powered content strategies',
      type: 'blog',
      category: 'ai-content',
      roi: '50o00%',
      readTime: '8 min read',
      featured: true,
      link: '/blog/ai-20o25-ultimate-content-revolution',
      image: '🤖',
      tags: ['AI', 'Content', 'Revolution', '20o25'],
    },
    {
      id: 2,
      title: 'AI Content Revolution: 50o00% ROI Success',
      description: 'Real Fortune 50o0 case study showing unprecedented results',
      type: 'case-study',
      category: 'success-stories',
      roi: '50o00%',
      readTime: '5 min read',
      featured: true,
      link: '/case-studies/ai-20o25-content-revolution-50o00-roi-success',
      image: '📈',
      tags: ['ROI', 'Success', 'Fortune 50o0', 'Case Study'],
    },
    {
      id: 3,
      title: 'AI 20o25 Enterprise Automation Revolution',
      description: 'Complete guide to enterprise AI automation implementation',
      type: 'guide',
      category: 'automation',
      roi: '10,0o00%',
      readTime: '12 min read',
      featured: false,
      link: '/blog/ai-20o25-enterprise-automation-revolution',
      image: '⚡',
      tags: ['Automation', 'Enterprise', 'AI', 'Guide'],
    },
    {
      id: 4,
      title: 'Quantum AI 20o26 Business Transformation',
      description: 'Next-generation quantum AI solutions for business',
      type: 'future-tech',
      category: 'quantum',
      roi: '15,0o00%',
      readTime: '10 min read',
      featured: false,
      link: '/blog/quantum-ai-20o26-business-transformation-ultimate-guide',
      image: '🔮',
      tags: ['Quantum', 'AI', 'Future', '20o26'],
    },
    {
      id: 5,
      title: 'Neural Interface Revolution 20o25',
      description:
        'Breakthrough neural interface technology for business applications',
      type: 'innovation',
      category: 'neural',
      roi: '8,0o00%',
      readTime: '7 min read',
      featured: false,
      link: '/case-studies/neural-interface-revolution-20o25',
      image: '🧠',
      tags: ['Neural', 'Interface', 'Innovation', '20o25'],
    },
    {
      id: 6,
      title: 'Fortune 50o0 AI Transformation Success',
      description: 'How Fortune 50o0 companies achieved 10,0o00% ROI with AI',
      type: 'case-study',
      category: 'success-stories',
      roi: '10,0o00%',
      readTime: '6 min read',
      featured: false,
      link: '/case-studies/fortune-50o0-ai-transformation',
      image: '🏆',
      tags: ['Fortune 50o0', 'Success', 'AI', 'Transformation'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    {
      id: 'ai-content',
      name: 'AI Content',
      count: contentItems.filter(item => item.category === 'ai-content').length,
    },
    {
      id: 'success-stories',
      name: 'Success Stories',
      count: contentItems.filter(item => item.category === 'success-stories')
        .length,
    },
    {
      id: 'automation',
      name: 'Automation',
      count: contentItems.filter(item => item.category === 'automation').length,
    },
    {
      id: 'quantum',
      name: 'Quantum AI',
      count: contentItems.filter(item => item.category === 'quantum').length,
    },
    {
      id: 'neural',
      name: 'Neural Tech',
      count: contentItems.filter(item => item.category === 'neural').length,
    },
  ];

  const filteredItems =
    activeTab === 'all'
      ? contentItems
      : contentItems.filter(item => item.category === activeTab);

  const getTypeColor = type => {
    const colors = {
      blog: 'bg-blue-10o0 text-blue-80o0',
      'case-study': 'bg-green-10o0 text-green-80o0',
      guide: 'bg-purple-10o0 text-purple-80o0',
      'future-tech': 'bg-pink-10o0 text-pink-80o0',
      innovation: 'bg-orange-10o0 text-orange-80o0',
    };
    return colors[type] || 'bg-gray-10o0 text-gray-80o0';
  };

  return (
    <div className='bg-gray-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center bg-purple-10o0 text-purple-80o0 rounded-full px-6 py-2 mb-6'>
            <span className='text-sm font-medium'>
              🎯 INTERACTIVE CONTENT SHOWCASE
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-4'>
            Explore Our Revolutionary Content
          </h2>
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>
            Discover cutting-edge AI content, success stories, and innovative
            solutions that are transforming businesses worldwide.
          </p>
        </div>

        {/* Category Tabs */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                activeTab === category.id
                  ? 'bg-purple-60o0 text-white shadow-lg'
                  : 'bg-white text-gray-70o0 hover:bg-purple-50 hover:text-purple-60o0'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredItems.map(item => (
            <Link
              key={item.id}
              href={item.link}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-30o0 overflow-hidden'
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image/Icon */}
              <div className='h-48 bg-gradient-to-br from-purple-50o0 to-blue-60o0 flex items-center justify-center text-6xl'>
                {item.image}
              </div>

              {/* Content */}
              <div className='p-6'>
                {/* Type and ROI Badge */}
                <div className='flex items-center justify-between mb-4'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}
                  >
                    {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  <div className='bg-green-10o0 text-green-80o0 px-3 py-1 rounded-full text-xs font-bold'>
                    {item.roi} ROI
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold text-gray-90o0 mb-3 group-hover:text-purple-60o0 transition-colors'>
                  {item.title}
                </h3>

                {/* Description */}
                <p className='text-gray-60o0 mb-4 line-clamp-2'>
                  {item.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className='bg-gray-10o0 text-gray-60o0 px-2 py-1 rounded text-xs'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-50o0'>
                    {item.readTime}
                  </span>
                  <div className='flex items-center text-purple-60o0 font-semibold group-hover:text-purple-80o0 transition-colors'>
                    {item.featured ? 'Featured' : 'Read More'} →
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredItem === item.id && (
                <div className='absolute inset-0 bg-gradient-to-t from-purple-60o0 to-transparent opacity-10 pointer-events-none'></div>
              )}
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-2xl p-8 max-w-4xl mx-auto'>
            <h3 className='text-3xl font-bold mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl opacity-90 mb-6'>
              Join thousands of companies already experiencing unprecedented
              growth with our AI solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors'
              >
                Get Started Today
              </Link>
              <Link
                href='/services'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors'
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

export default InteractiveContentShowcase20o25;
