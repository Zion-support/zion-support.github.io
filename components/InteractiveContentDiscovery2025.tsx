import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai-automation', name: 'AI Automation', icon: '🤖' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'enterprise-solutions', name: 'Enterprise Solutions', icon: '🏢' },
    { id: 'case-studies', name: 'Success Stories', icon: '📈' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Automation Revolution',
      description: 'Transform your business with cutting-edge AI automation solutions achieving 50,000% ROI.',
      category: 'ai-automation',
      readTime: '8 min read',
      featured: true,
      url: '/ai-2025-ultimate-automation-revolution'
    },
    {
      id: 2,
      title: 'Quantum Computing Business Breakthrough',
      description: 'Revolutionary quantum computing applications for enterprise transformation.',
      category: 'quantum-computing',
      readTime: '12 min read',
      featured: true,
      url: '/quantum-computing-business-breakthrough'
    },
    {
      id: 3,
      title: 'Neural Interface Revolution 2025',
      description: 'Next-generation neural interfaces transforming human-computer interaction.',
      category: 'neural-interfaces',
      readTime: '10 min read',
      featured: false,
      url: '/neural-interface-revolution-2025'
    },
    {
      id: 4,
      title: 'Fortune 500 AI Transformation Success',
      description: 'How Fortune 500 companies achieved 15,000% ROI with our AI solutions.',
      category: 'case-studies',
      readTime: '6 min read',
      featured: true,
      url: '/fortune-500-ai-transformation-success'
    },
    {
      id: 5,
      title: 'Enterprise AI Integration Mastery',
      description: 'Complete guide to implementing AI solutions across enterprise systems.',
      category: 'enterprise-solutions',
      readTime: '15 min read',
      featured: false,
      url: '/enterprise-ai-integration-mastery'
    },
    {
      id: 6,
      title: 'Autonomous Business Operations',
      description: 'Revolutionary autonomous systems for complete business transformation.',
      category: 'ai-automation',
      readTime: '9 min read',
      featured: true,
      url: '/autonomous-business-operations'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI solutions, case studies, and breakthrough technologies. 
            Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for content, solutions, or case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-500 hover:text-purple-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="p-6">
                {item.featured && (
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
                    ⭐ FEATURED
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <Link
                    href={item.url}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No content found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/content"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Content →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;