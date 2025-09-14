'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const UltimateContentDiscoveryWidget = () => {
  const [selectedCategorysetSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all'name: 'All Content'icon: '🌟' },
    { id: 'ai'name: 'AI Solutions'icon: '🤖' },
    { id: 'tech'name: 'Technology'icon: '⚡' },
    { id: 'business'name: 'Business'icon: '💼' },
    { id: 'innovation'name: 'Innovation'icon: '🚀' },
    { id: 'case-studies'name: 'Case Studies'icon: '📊' }
  ];

  const content = [
    {
      id: 1,
      title: "AI-Powered Business Transformation: A Complete Guide",
      description: "Learn how to implement AI solutions that drive real business results with our comprehensive guide.",
      category: 'ai',
      readTime: '12 min',
      featured: true,
      views: '15.2k',
      rating: 4.9
    },
    {
      id: 2,
      title: "Quantum Computing in Enterprise: Real-World Applications",
      description: "Discover how quantum computing is revolutionizing enterprise operations and decision-making.",
      category: 'tech',
      readTime: '8 min',
      featured: true,
      views: '8.7k',
      rating: 4.8
    },
    {
      id: 3,
      title: "Micro SaaS Success: From Idea to $1M ARR",
      description: "A detailed case study of how we helped a client build a successful micro SaaS business.",
      category: 'case-studies',
      readTime: '15 min',
      featured: false,
      views: '12.3k',
      rating: 4.9
    },
    {
      id: 4,
      title: "Neural Interface Technology: The Future of Human-Computer Interaction",
      description: "Explore cutting-edge neural interface developments and their business implications.",
      category: 'innovation',
      readTime: '10 min',
      featured: false,
      views: '6.1k',
      rating: 4.7
    },
    {
      id: 5,
      title: "Sustainable AI: Building Green Technology Solutions",
      description: "How to implement environmentally conscious AI systems for long-term business success.",
      category: 'business',
      readTime: '7 min',
      featured: false,
      views: '4.8k',
      rating: 4.6
    },
    {
      id: 6,
      title: "Enterprise Security in the AI Era: Best Practices",
      description: "Comprehensive security strategies for protecting your business in an AI-driven world.",
      category: 'ai',
      readTime: '11 min',
      featured: false,
      views: '9.4k',
      rating: 4.8
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? content 
    : content.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔍 CONTENT DISCOVERY</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of insightsguidesand case studies designed to accelerate your business growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-lg mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-t-xl">
                  ⭐ FEATURED
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {item.rating}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.readTime}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {item.views}
                  </div>
                </div>
                
                <Link
                  href={`/blog/${item.title.toLowerCase().replace(/\s+/g'-')}`}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscoveryWidget;