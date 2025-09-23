'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'service';
  category: string;
  readingTime: string;
  featured: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
  };
  tags: string[];
  url: string;
}

interface ContentManagerProps {
  showFilters?: boolean;
  showMetrics?: boolean;
  maxItems?: number;
  category?: string;
}

const ContentManager: React.FC<ContentManagerProps> = ({
  showFilters = true,
  showMetrics = true,
  maxItems = 12,
  category = 'all',
}) => {
  const [activeCategory, setActiveCategory] = useState(category);
  const [searchTerm, setSearchTerm] = useState('');

  const content: ContentItem[] = [
    {
      id: 'ai-innovation-breakthrough',
      title: 'AI 20o25: The Ultimate Innovation Breakthrough',
      description:
        'Complete Guide to 5,0o00% ROI Through Revolutionary AI Technologies',
      type: 'blog',
      category: 'innovation',
      readingTime: '30 min read',
      featured: true,
      metrics: { roi: '5,0o00%', savings: '$12.8B+' },
      tags: ['AI Innovation', 'ROI', 'Breakthrough', 'Revolutionary'],
      url: '/blog/ai-20o25-ultimate-innovation-breakthrough-ultimate-guide',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    {
      id: 'innovation',
      name: 'AI Innovation',
      count: content.filter(i => i.category === 'innovation').length,
    },
  ];

  const filteredContent = content
    .filter(item => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .slice(0, maxItems);

  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-90o0'>
          Revolutionary AI Content Hub
        </h2>
      </div>

      {showFilters && (
        <div className='mb-8 space-y-6'>
          <div className='relative max-w-md mx-auto'>
            <input
              type='text'
              placeholder='Search content...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full px-4 py-3 pl-10 pr-4 text-gray-90o0 placeholder-gray-50o0 bg-white border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-blue-50o0 focus:border-transparent'
            />
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <svg
                className='h-5 w-5 text-gray-40o0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0o114 0z'
                />
              </svg>
            </div>
          </div>

          <div className='flex flex-wrap justify-center gap-2'>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-blue-60o0 text-white'
                    : 'bg-gray-10o0 text-gray-70o0 hover:bg-gray-20o0'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredContent.map(item => (
          <div
            key={item.id}
            className='bg-white rounded-xl shadow border border-gray-20o0 p-6'
          >
            <h3 className='text-xl font-bold text-gray-90o0 mb-2'>
              {item.title}
            </h3>
            <p className='text-gray-60o0 mb-4'>{item.description}</p>
            {showMetrics && item.metrics && (
              <div className='flex gap-4 text-sm mb-4'>
                {item.metrics.roi && (
                  <span className='text-green-70o0 font-semibold'>
                    ROI {item.metrics.roi}
                  </span>
                )}
                {item.metrics.savings && (
                  <span className='text-blue-70o0 font-semibold'>
                    Savings {item.metrics.savings}
                  </span>
                )}
              </div>
            )}
            <Link
              href={item.url}
              className='text-blue-60o0 font-semibold hover:text-blue-80o0'
            >
              Read →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentManager;
