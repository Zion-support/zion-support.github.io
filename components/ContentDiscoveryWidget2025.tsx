import React, { useState } from 'react';
import Link from 'next/link';

export default function ContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Breakthrough Content Showcase",
      description: "Interactive demos, case studies, and revolutionary technologies",
      category: "showcase",
      type: "Interactive Demo",
      link: "/ai-2025-breakthrough-content-showcase",
      badge: "NEW",
      color: "from-red-500 to-pink-500",
      icon: "🚀",
      rating: 5,
      views: "12.5K"
    },
    {
      id: 2,
      title: "15,000% ROI Finance Transformation",
      description: "Revolutionary success story with detailed metrics and implementation",
      category: "case-study",
      type: "Case Study",
      link: "/case-studies/ai-2025-global-finance-transformation-breakthrough",
      badge: "BREAKTHROUGH",
      color: "from-green-500 to-blue-500",
      icon: "💰",
      rating: 5,
      views: "8.7K"
    },
    {
      id: 3,
      title: "AI 2026 Future Predictions Interactive",
      description: "Explore revolutionary AI breakthroughs with interactive timeline",
      category: "predictions",
      type: "Interactive Timeline",
      link: "/ai-2026-future-predictions-interactive",
      badge: "FUTURE",
      color: "from-purple-500 to-cyan-500",
      icon: "🔮",
      rating: 5,
      views: "15.2K"
    },
    {
      id: 4,
      title: "Quantum Computing Solutions Showcase",
      description: "Interactive demos and revolutionary quantum AI technologies",
      category: "quantum",
      type: "Technology Showcase",
      link: "/quantum-computing-solutions-showcase",
      badge: "REVOLUTIONARY",
      color: "from-indigo-500 to-purple-500",
      icon: "⚛️",
      rating: 5,
      views: "9.8K"
    },
    {
      id: 5,
      title: "AI 2025 Neural Interface Revolution",
      description: "Breakthrough neural interface technology achieving 99.7% accuracy",
      category: "technology",
      type: "Technology Guide",
      link: "/blog/ai-2025-neural-interface-revolution",
      badge: "BREAKTHROUGH",
      color: "from-orange-500 to-red-500",
      icon: "🧠",
      rating: 4,
      views: "6.3K"
    },
    {
      id: 6,
      title: "Enterprise Automation Mastery 2025",
      description: "Complete guide to implementing AI automation in enterprise environments",
      category: "guide",
      type: "Implementation Guide",
      link: "/resources/enterprise-automation-mastery-2025",
      badge: "ESSENTIAL",
      color: "from-teal-500 to-green-500",
      icon: "🤖",
      rating: 5,
      views: "11.4K"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'showcase', name: 'Showcases', count: contentItems.filter(item => item.category === 'showcase').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'predictions', name: 'Predictions', count: contentItems.filter(item => item.category === 'predictions').length },
    { id: 'quantum', name: 'Quantum', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'technology', name: 'Technology', count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'guide', name: 'Guides', count: contentItems.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover New Content</h2>
        <p className="text-gray-600 mb-6">Explore our latest AI breakthroughs, case studies, and revolutionary technologies</p>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{item.icon}</div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                {item.badge}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {item.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                {item.type}
              </span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500">{item.views} views</span>
              </div>
            </div>
            
            <Link
              href={item.link}
              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Explore Content
            </Link>
          </div>
        ))}
      </div>
      
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}