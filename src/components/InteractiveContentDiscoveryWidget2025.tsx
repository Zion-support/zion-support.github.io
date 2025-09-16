"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const InteractiveContentDiscoveryWidget2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: '🔥', count: 156 },
    { id: 'ai-revolution', name: 'AI Revolution', icon: '🤖', count: 45 },
    { id: 'case-studies', name: 'Success Stories', icon: '📈', count: 32 },
    { id: 'automation', name: 'Automation', icon: '⚡', count: 28 },
    { id: 'quantum', name: 'Quantum AI', icon: '🔮', count: 18 },
    { id: 'neural', name: 'Neural Networks', icon: '🧠', count: 15 },
    { id: 'business', name: 'Business Intelligence', icon: '💼', count: 18 }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Ultimate Content Revolution",
      description: "The breakthrough delivering 25,000% ROI and 1500% engagement increases",
      category: "ai-revolution",
      readTime: "8 min",
      featured: true,
      href: "/content/ai-2025-ultimate-content-revolution-breakthrough",
      stats: { roi: "25,000%", engagement: "1500%" }
    },
    {
      title: "25,000% ROI Success Story",
      description: "How a Fortune 100 company achieved unprecedented results",
      category: "case-studies",
      readTime: "12 min",
      featured: true,
      href: "/case-studies/ai-2025-content-revolution-25000-roi-success-story",
      stats: { roi: "25,000%", cost: "98% reduction" }
    },
    {
      title: "Quantum AI Business Transformation",
      description: "Revolutionary quantum computing applications in business",
      category: "quantum",
      readTime: "10 min",
      featured: false,
      href: "/content/ai-2025-quantum-ai-business-transformation",
      stats: { performance: "1000x faster" }
    },
    {
      title: "Neural Interface Revolution",
      description: "The future of human-computer interaction",
      category: "neural",
      readTime: "7 min",
      featured: false,
      href: "/content/ai-2025-neural-interface-revolution",
      stats: { accuracy: "99.8%" }
    }
  ];

  const filteredContent = featuredContent.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={`py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🔍 INTERACTIVE CONTENT DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Content
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of breakthrough content, case studies, and success stories 
            that are transforming businesses worldwide.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content, case studies, guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.icon} {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  FEATURED
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.entries(item.stats).map(([key, value]) => (
                    <span key={key} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      {key}: {value}
                    </span>
                  ))}
                </div>
                
                <a
                  href={item.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Showing {filteredContent.length} of {featuredContent.length} featured content pieces
          </p>
          <a
            href="/content"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;