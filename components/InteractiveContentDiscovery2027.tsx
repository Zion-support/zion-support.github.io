"use client";
import React{ useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery2027() {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [searchQuerysetSearchQuery] = useState('');

  const contentCategories = [
    { id: 'all'label: 'All Content'icon: '📚' },
    { id: 'ai-2026'label: 'AI 2026'icon: '🚀' },
    { id: 'ai-2027'label: 'AI 2027'icon: '🔮' },
    { id: 'quantum'label: 'Quantum Computing'icon: '⚛️' },
    { id: 'neural'label: 'Neural Interfaces'icon: '🧠' },
    { id: 'automation'label: 'Automation'icon: '🤖' },
    { id: 'case-studies'label: 'Case Studies'icon: '📊' },
    { id: 'predictions'label: 'Predictions'icon: '🔮' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2026 Quantum Neural Fusion Breakthrough',
      description: 'Revolutionary breakthrough combining quantum computing with neural networksachieving 15,000% ROI.',
      category: 'ai-2026',
      tags: ['quantum'neural'breakthrough'],
      roi: '15,000%',
      accuracy: '99.7%',
      type: 'blog',
      url: '/blog/ai-2026-quantum-neural-fusion-breakthrough',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2027 Neural Synthesis Predictions',
      description: 'Comprehensive analysis of neural synthesis technology predictions for 2027.',
      category: 'ai-2027',
      tags: ['neural'predictions'synthesis'],
      roi: '8,000%',
      accuracy: '99.7%',
      type: 'blog',
      url: '/blog/ai-2027-neural-synthesis-breakthrough',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions 2026',
      description: 'Advanced quantum computing solutions achieving 10,000x faster processing speeds.',
      category: 'quantum',
      tags: ['quantum'computing'breakthrough'],
      roi: '12,000%',
      accuracy: '99.9%',
      type: 'services',
      url: '/quantum-computing-solutions',
      featured: false
    },
    {
      id: 4,
      title: 'Neural Interface Healthcare Success',
      description: '95% patient recovery rates achieved through neural interface technology.',
      category: 'neural',
      tags: ['neural'healthcare'success'],
      roi: '3,000%',
      accuracy: '95%',
      type: 'case-study',
      url: '/case-studies/ai-2026-neural-interface-healthcare-breakthrough',
      featured: true
    },
    {
      id: 5,
      title: 'Autonomous Manufacturing Revolution',
      description: 'Fully autonomous manufacturing systems achieving 8,500% ROI and 99.9% efficiency.',
      category: 'automation',
      tags: ['automation'manufacturing'autonomous'],
      roi: '8,500%',
      accuracy: '99.9%',
      type: 'case-study',
      url: '/case-studies/ai-2026-autonomous-manufacturing-revolution',
      featured: false
    },
    {
      id: 6,
      title: 'AI 2027 Future Predictions Analysis',
      description: 'Comprehensive analysis of AI trends and breakthrough predictions for 2027.',
      category: 'predictions',
      tags: ['predictions'future'analysis'],
      roi: 'N/A',
      accuracy: '95%',
      type: 'blog',
      url: '/ai-2027-future-predictions-revolutionary',
      featured: true
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContent = filteredContent.filter(item => item.featured);
  const regularContent = filteredContent.filter(item => !item.featured);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most relevant AI content tailored to your interests. 
            Filter by categorysearch by keywordsand explore breakthrough technologies.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {featuredContent.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">⭐</span>
              Featured Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{item.tags[0] === 'quantum' ? '⚛️' : item.tags[0] === 'neural' ? '🧠' : '🚀'}</div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        {item.roi} ROI
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-semibold">
                        {item.accuracy} Accuracy
                      </span>
                    </div>
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularContent.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">📚</span>
              All Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularContent.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-4">{item.tags[0] === 'quantum' ? '⚛️' : item.tags[0] === 'neural' ? '🧠' : '🤖'}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        {item.roi} ROI
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-semibold">
                        {item.accuracy} Accuracy
                      </span>
                    </div>
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Want More Content?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Subscribe to our newsletter for the latest AI breakthroughs and content updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe Now
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}