import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2026 Future Predictions',
      description: 'Revolutionary AI breakthroughs predicted for 2026',
      category: 'ai-2026',
      roi: '15000',
      link: '/ai-2026-future-predictions-breakthrough',
      featured: true,
      tags: ['BREAKTHROUGH', 'REVOLUTIONARY']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Error-corrected quantum computers and quantum internet',
      category: 'quantum',
      roi: 'infinite',
      link: '/quantum-computing-breakthrough-2030',
      featured: true,
      tags: ['REVOLUTIONARY', 'QUANTUM']
    },
    {
      id: 3,
      title: 'Ultimate Content Showcase 2026',
      description: 'Complete collection of revolutionary AI content',
      category: 'showcase',
      roi: '15000',
      link: '/ultimate-content-showcase-2026',
      featured: true,
      tags: ['ULTIMATE', 'SHOWCASE']
    },
    {
      id: 4,
      title: 'AI 2025 Ultimate Breakthrough',
      description: 'Revolutionary AI breakthrough announcement',
      category: 'ai-2025',
      roi: '5000',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: false,
      tags: ['NEW', 'BREAKTHROUGH']
    },
    {
      id: 5,
      title: 'Neural Interface Revolution',
      description: 'Brain-computer interfaces with 3000% productivity gains',
      category: 'neural',
      roi: '3000',
      link: '/neural-interface-revolution-2026',
      featured: false,
      tags: ['BREAKTHROUGH', 'NEURAL']
    },
    {
      id: 6,
      title: 'Transcendent Intelligence',
      description: 'AI systems that transcend human-level intelligence',
      category: 'ai-2030',
      roi: 'infinite',
      link: '/ai-2030-transcendent-intelligence',
      featured: false,
      tags: ['FUTURE', 'TRANSCENDENT']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content' },
    { value: 'ai-2025', label: 'AI 2025' },
    { value: 'ai-2026', label: 'AI 2026' },
    { value: 'ai-2030', label: 'AI 2030' },
    { value: 'quantum', label: 'Quantum Computing' },
    { value: 'neural', label: 'Neural Interfaces' },
    { value: 'showcase', label: 'Content Showcase' }
  ];

  const roiRanges = [
    { value: 'all', label: 'All ROI Levels' },
    { value: '3000', label: '3000%+' },
    { value: '5000', label: '5000%+' },
    { value: '15000', label: '15000%+' },
    { value: 'infinite', label: 'Infinite ROI' }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const roiMatch = selectedROI === 'all' || item.roi === selectedROI || 
                    (selectedROI === 'infinite' && item.roi === 'infinite') ||
                    (selectedROI !== 'infinite' && selectedROI !== 'all' && 
                     item.roi !== 'infinite' && parseInt(item.roi) >= parseInt(selectedROI));
    return categoryMatch && roiMatch;
  });

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Use our AI-powered discovery system to find the perfect revolutionary content 
            for your specific needs and interests.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Category
              </label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by ROI Level
              </label>
              <select 
                value={selectedROI} 
                onChange={(e) => setSelectedROI(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {roiRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.link} className="group">
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 ${
                item.featured ? 'border-l-4 border-blue-500' : ''
              }`}>
                {item.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                    ⭐ Featured
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-700 mb-6">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">
                    {item.roi === 'infinite' ? '∞' : `${item.roi}%`}
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700">
                    Explore →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Content Found</h3>
            <p className="text-gray-700 mb-6">
              Try adjusting your filters to discover more revolutionary content.
            </p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedROI('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our AI experts can help you discover the perfect revolutionary content 
              for your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Help
              </Link>
              <Link 
                href="/ultimate-content-showcase-2026" 
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}