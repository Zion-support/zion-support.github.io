import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚', color: 'purple' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀', color: 'red' },
    { id: 'ai-2026', name: 'AI 2026', icon: '⚛️', color: 'cyan' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', color: 'green' },
    { id: 'predictions', name: 'Predictions', icon: '🔮', color: 'purple' },
    { id: 'breakthroughs', name: 'Breakthroughs', icon: '💡', color: 'yellow' },
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough of 2025 delivering 10,000% ROI, 99.9% accuracy, and autonomous operations.',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '10,000%',
      accuracy: '99.9%',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true,
    },
    {
      id: 2,
      title: 'AI 2026 Future Predictions Breakthrough',
      description: 'Revolutionary AI predictions for 2026 featuring quantum-neural fusion, 15,000% ROI, and transcendent intelligence.',
      category: 'ai-2026',
      type: 'predictions',
      roi: '15,000%',
      accuracy: '99.7%',
      url: '/ai-2026-future-predictions-breakthrough',
      featured: true,
    },
    {
      id: 3,
      title: 'AI 2026 Quantum-Neural Fusion Success',
      description: 'Fortune 500 company achieves 15,000% ROI using our AI 2026 Quantum-Neural Fusion technology.',
      category: 'case-studies',
      type: 'success-story',
      roi: '15,000%',
      accuracy: '99.7%',
      url: '/case-studies/ai-2026-quantum-neural-fusion-success',
      featured: true,
    },
    {
      id: 4,
      title: 'AI 2025 Revolutionary Trends & Predictions',
      description: 'Comprehensive analysis of revolutionary AI trends and predictions for 2025 with industry insights.',
      category: 'predictions',
      type: 'analysis',
      roi: '10,000%',
      accuracy: '99.9%',
      url: '/blog/ai-2025-revolutionary-trends-predictions',
      featured: false,
    },
    {
      id: 5,
      title: 'Quantum Computing Solutions 2025',
      description: 'Advanced quantum computing solutions delivering unprecedented processing power and security.',
      category: 'ai-2025',
      type: 'solution',
      roi: '8,000%',
      accuracy: '99.8%',
      url: '/quantum-computing-solutions',
      featured: false,
    },
    {
      id: 6,
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces enabling seamless human-AI collaboration and enhanced cognition.',
      category: 'ai-2026',
      type: 'breakthrough',
      roi: '12,000%',
      accuracy: '99.5%',
      url: '/neural-interface-solutions',
      featured: false,
    },
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.color || 'gray';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'breakthrough': '🚀',
      'predictions': '🔮',
      'success-story': '🏆',
      'analysis': '📊',
      'solution': '⚙️',
    };
    return icons[type as keyof typeof icons] || '📄';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Interactive Content Discovery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our revolutionary AI content library and discover breakthrough technologies, 
          success stories, and future predictions that will transform your business.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for AI breakthroughs, case studies, predictions..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-6 py-4 pl-12 pr-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {isLoading && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
            </div>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-${category.color}-500 text-white shadow-lg transform scale-105`
                  : `bg-gray-100 text-gray-700 hover:bg-${category.color}-100 hover:text-${category.color}-700`
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              item.featured ? 'ring-2 ring-purple-500' : ''
            }`}
          >
            {item.featured && (
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-bold rounded-t-xl">
                ⭐ FEATURED
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{getTypeIcon(item.type)}</span>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-${getCategoryColor(item.category)}-100 text-${getCategoryColor(item.category)}-700`}>
                  {categories.find(cat => cat.id === item.category)?.name}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{item.roi}</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{item.accuracy}</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
              
              <Link
                href={item.url}
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Explore Content
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No Content Found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search terms or category filters to find the content you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-gray-600 mb-6">
          Discover how our revolutionary AI solutions can help you achieve unprecedented 
          results and competitive advantages.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
          <Link
            href="/ai-2025-ultimate-breakthrough-revolution"
            className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-500 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}