import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 15,000% ROI with quantum-neural fusion technology.',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '15,000%',
      accuracy: '99.9%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'REVOLUTIONARY',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'AI 2026-2030 Ultimate Content Revolution',
      description: 'Future predictions for quantum consciousness, neural synthesis, and transcendent intelligence.',
      category: 'ai-2026-2030',
      type: 'predictions',
      roi: '∞',
      accuracy: '95%',
      link: '/ai-2026-2030-ultimate-content-revolution',
      badge: 'FUTURE',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthroughs 2025',
      description: 'Revolutionary quantum computing with 10,000x faster processing and error-corrected quantum computers.',
      category: 'quantum',
      type: 'breakthrough',
      roi: '25,000%',
      accuracy: '99.9%',
      link: '/quantum-computing-breakthroughs-2025',
      badge: 'BREAKTHROUGH',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      id: 4,
      title: 'Enterprise Automation 15,000% ROI Success',
      description: 'Real case study showing how a Fortune 500 company achieved 15,000% ROI with automation.',
      category: 'case-studies',
      type: 'success-story',
      roi: '15,000%',
      accuracy: '95%',
      link: '/case-studies/enterprise-automation-15000-roi-success',
      badge: 'SUCCESS',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 5,
      title: 'AI 2025 Ultimate Breakthrough Success',
      description: 'Fortune 500 transformation case study with 15,000% ROI in 6 months.',
      category: 'case-studies',
      type: 'success-story',
      roi: '15,000%',
      accuracy: '99.9%',
      link: '/case-studies/ai-2025-ultimate-breakthrough-success',
      badge: 'SUCCESS',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 6,
      title: 'Quantum-Neural Fusion Technology',
      description: 'Revolutionary fusion of quantum computing and neural networks for unprecedented capabilities.',
      category: 'quantum',
      type: 'technology',
      roi: '10,000%',
      accuracy: '99.7%',
      link: '/technologies/quantum-neural-fusion',
      badge: 'TECHNOLOGY',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-2025', name: 'AI 2025', count: contentItems.filter(item => item.category === 'ai-2025').length },
    { id: 'ai-2026-2030', name: 'AI 2026-2030', count: contentItems.filter(item => item.category === 'ai-2026-2030').length },
    { id: 'quantum', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'case-studies', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our breakthrough AI content, case studies, and revolutionary technologies 
            that deliver unprecedented ROI and results.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color}`}>
                    {item.badge}
                  </span>
                  <span className="text-sm text-gray-500">{item.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{item.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{item.accuracy}</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                  </div>
                </div>
                
                <Link
                  href={item.link}
                  className={`w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                >
                  Explore Content
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Content Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of businesses already achieving unprecedented results with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/webinars"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Watch Live Webinars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}