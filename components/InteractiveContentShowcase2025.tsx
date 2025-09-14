"use client";
import React{ useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  href: string;
  featured: boolean;
  image: string;
  tags: string[];
}

export default function InteractiveContentShowcase2025() {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [hoveredItemsetHoveredItem] = useState<string | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Enterprise Success Stories',
      description: 'Real companiesreal results. See how leading enterprises achieved 300%+ ROI through AI transformation.',
      category: 'case-studies',
      readTime: '8 min read',
      href: '/blog/ai-2025-enterprise-success-stories',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['AI'Success Stories'ROI'Enterprise']
    },
    {
      id: '2',
      title: 'AI 2025 Quantum Computing Breakthrough',
      description: 'Explore the revolutionary quantum computing breakthroughs of 2025 and how they\'re transforming AI capabilities.',
      category: 'technology',
      readTime: '12 min read',
      href: '/blog/ai-2025-quantum-computing-breakthrough',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Quantum Computing'AI'Breakthrough'Technology']
    },
    {
      id: '3',
      title: 'AI Transformation in Manufacturing',
      description: 'Complete case study: How TechCorp Global achieved 95% defect reduction and $2.3M annual savings.',
      category: 'case-studies',
      readTime: '15 min read',
      href: '/case-studies/ai-transformation-manufacturing',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Manufacturing'AI'Case Study'Quality Control']
    },
    {
      id: '4',
      title: 'Neural Interface Revolution 2035',
      description: 'The future of human-computer interaction through direct neural interfaces and brain-computer integration.',
      category: 'future-tech',
      readTime: '10 min read',
      href: '/blog/neural-interface-revolution-2035',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Neural Interface'Future Tech'BCI'Innovation']
    },
    {
      id: '5',
      title: 'AI Cybersecurity Threats 2025',
      description: 'Comprehensive analysis of emerging AI-powered cybersecurity threats and defense strategies.',
      category: 'security',
      readTime: '9 min read',
      href: '/blog/ai-cybersecurity-threats-2025',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Cybersecurity'AI'Threats'Security']
    },
    {
      id: '6',
      title: 'Startup Pricing Strategy 2025',
      description: 'Master the art of AI-powered pricing strategies for startups and scale-ups in 2025.',
      category: 'business',
      readTime: '7 min read',
      href: '/blog/startup-pricing-strategy-2025',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Pricing'Startup'Strategy'Business']
    }
  ];

  const categories = [
    { id: 'all'name: 'All Content'count: contentItems.length },
    { id: 'case-studies'name: 'Case Studies'count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: 'technology'name: 'Technology'count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'future-tech'name: 'Future Tech'count: contentItems.filter(item => item.category === 'future-tech').length },
    { id: 'security'name: 'Security'count: contentItems.filter(item => item.category === 'security').length },
    { id: 'business'name: 'Business'count: contentItems.filter(item => item.category === 'business').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredItems = contentItems.filter(item => item.featured);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Latest Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge insightsreal-world case studiesand breakthrough 
            technologies that are shaping the future of AI and business.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl">🚀</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <div className="flex space-x-2">
                      {item.tags.slice(02).map((tagindex) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h3>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative">
                <div className="h-40 bg-gradient-to-br from-indigo-500 to-pink-600 flex items-center justify-center">
                  <div className="text-white text-4xl">
                    {item.category === 'case-studies' ? '📊' : 
                     item.category === 'technology' ? '🔬' :
                     item.category === 'future-tech' ? '🚀' :
                     item.category === 'security' ? '🔒' : '💼'}
                  </div>
                </div>
                {item.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <span className="text-sm text-blue-600 font-semibold capitalize">
                    {item.category.replace('-' ')}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tagindex) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want More Content Like This?
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest insightscase studiesand breakthrough 
              technologies. Join thousands of professionals who trust our content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Custom Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}