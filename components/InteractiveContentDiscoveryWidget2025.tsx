import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI Trends 2025 Ultimate Predictions',
      description: 'Revolutionary breakthroughs in quantum computing, neural interfaces, and autonomous systems',
      category: 'trends',
      href: '/ai-trends-2025-ultimate-predictions',
      image: '🔮',
      featured: true,
      tags: ['AI Trends', 'Predictions', 'Quantum Computing', 'Neural Interfaces']
    },
    {
      id: 2,
      title: 'AI Tutorials Mastery 2025',
      description: 'Complete learning path from fundamentals to advanced implementations with hands-on projects',
      category: 'tutorials',
      href: '/ai-tutorials-mastery-2025',
      image: '📚',
      featured: true,
      tags: ['Tutorials', 'Learning', 'Certification', 'Hands-on Projects']
    },
    {
      id: 3,
      title: 'AI Success Stories 2025',
      description: 'Real results from Fortune 500 companies achieving 2,500-5,000% ROI with our AI solutions',
      category: 'stories',
      href: '/ai-success-stories-2025',
      image: '🏆',
      featured: true,
      tags: ['Success Stories', 'Case Studies', 'ROI', 'Testimonials']
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthroughs 2025',
      description: 'Next-generation quantum computers and quantum-AI fusion technologies',
      category: 'quantum',
      href: '/quantum-computing-2025-ultimate-breakthrough',
      image: '⚛️',
      featured: false,
      tags: ['Quantum Computing', 'Breakthroughs', 'Technology', 'Innovation']
    },
    {
      id: 5,
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces and neural augmentation technologies',
      category: 'neural',
      href: '/neural-interface-revolution-2026',
      image: '🧠',
      featured: false,
      tags: ['Neural Interfaces', 'BCI', 'Augmentation', 'Future Tech']
    },
    {
      id: 6,
      title: 'Autonomous Operations Mastery',
      description: 'Fully autonomous business operations powered by AI with 99.9% accuracy',
      category: 'automation',
      href: '/autonomous-business-operations-2025',
      image: '🤖',
      featured: false,
      tags: ['Autonomous', 'Automation', 'Operations', 'AI Systems']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'trends', name: 'AI Trends', count: contentItems.filter(item => item.category === 'trends').length },
    { id: 'tutorials', name: 'Tutorials', count: contentItems.filter(item => item.category === 'tutorials').length },
    { id: 'stories', name: 'Success Stories', count: contentItems.filter(item => item.category === 'stories').length },
    { id: 'quantum', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'neural', name: 'Neural Interfaces', count: contentItems.filter(item => item.category === 'neural').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length }
  ];

  const filteredItems = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI trends, tutorials, success stories, and breakthrough technologies
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search content, trends, tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        {featuredItems.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Featured Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center mt-1">
                        <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={item.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore Content
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularItems.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">All Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularItems.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={item.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore Content
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-300 mb-6">Get personalized recommendations and implementation guidance</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Get Personalized Recommendations
            </Link>
            <Link 
              href="/ai-trends-2025-ultimate-predictions"
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}