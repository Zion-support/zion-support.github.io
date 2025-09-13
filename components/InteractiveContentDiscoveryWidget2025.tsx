import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🔍' },
    { id: 'ai-innovations', name: 'AI Innovations', icon: '🤖' },
    { id: 'services', name: 'Services', icon: '⚙️' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'tutorials', name: 'Tutorials', icon: '📚' },
    { id: 'tools', name: 'AI Tools', icon: '🛠️' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI Innovation Showcase 2025',
      description: 'Revolutionary AI breakthroughs and cutting-edge technologies',
      category: 'ai-innovations',
      image: '/api/placeholder/300/200',
      link: '/ai-innovation-showcase-2025',
      featured: true
    },
    {
      id: 2,
      title: 'Comprehensive Services Showcase',
      description: 'Complete suite of AI-powered business solutions',
      category: 'services',
      image: '/api/placeholder/300/200',
      link: '/comprehensive-services-showcase',
      featured: true
    },
    {
      id: 3,
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces for seamless AI collaboration',
      category: 'ai-innovations',
      image: '/api/placeholder/300/200',
      link: '/neural-interface-revolution',
      featured: false
    },
    {
      id: 4,
      title: 'Quantum AI Fusion Solutions',
      description: 'Revolutionary quantum computing integration with AI systems',
      category: 'ai-innovations',
      image: '/api/placeholder/300/200',
      link: '/quantum-ai-fusion',
      featured: false
    },
    {
      id: 5,
      title: 'Enterprise Success Stories',
      description: 'Real-world case studies of AI transformation',
      category: 'case-studies',
      image: '/api/placeholder/300/200',
      link: '/case-studies',
      featured: false
    },
    {
      id: 6,
      title: 'AI Tools & Utilities',
      description: 'Comprehensive collection of AI-powered business tools',
      category: 'tools',
      image: '/api/placeholder/300/200',
      link: '/ai-tools',
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Discover Amazing Content
        </h2>
        <p className="text-gray-600">
          Explore our comprehensive collection of AI innovations, services, and resources
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {contentCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
              item.featured ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-6xl opacity-50">
                  {contentCategories.find(cat => cat.id === item.category)?.icon}
                </div>
              </div>
              {item.featured && (
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href="/content-hub"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Content
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}