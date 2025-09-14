import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentDiscoveryWidget2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', count: 150 },
    { id: 'ai-transformation', name: 'AI Transformation', count: 45 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 25 },
    { id: 'case-studies', name: 'Case Studies', count: 30 },
    { id: 'automation', name: 'Automation', count: 35 },
    { id: 'neural-interfaces', name: 'Neural Interfaces', count: 15 }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Ultimate Business Transformation",
      category: "ai-transformation",
      readTime: "15 min",
      featured: true,
      new: true,
      description: "Complete implementation guide for enterprise AI transformation",
      link: "/blog/ai-2025-ultimate-business-transformation-complete-guide"
    },
    {
      title: "Quantum AI 2025 Revolutionary Breakthrough",
      category: "quantum-computing",
      readTime: "12 min",
      featured: true,
      new: true,
      description: "Discover quantum computing and AI integration",
      link: "/blog/quantum-ai-2025-revolutionary-breakthrough-enterprise-guide"
    },
    {
      title: "Fortune 500 AI Transformation Success",
      category: "case-studies",
      readTime: "10 min",
      featured: true,
      new: true,
      description: "Real case study showing 500% ROI achievement",
      link: "/case-studies/fortune-500-ai-transformation-success-story"
    }
  ];

  const filteredContent = featuredContent.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🔍 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the most relevant AI content for your business needs with our intelligent content discovery system.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for AI content, guides, case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Content Results */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {selectedCategory === 'all' ? 'All Featured Content' : `Featured ${categories.find(c => c.id === selectedCategory)?.name}`}
            </h3>
            
            {filteredContent.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                      {item.new && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      )}
                      {item.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.readTime} read</span>
                      <Link
                        href={item.link}
                        className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                      >
                        Read Full Article →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">ROI Calculator</h3>
            <p className="text-gray-600 mb-4">
              Calculate your potential ROI from AI implementation
            </p>
            <Link
              href="/tools/roi-calculator"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Try Calculator
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Readiness Assessment</h3>
            <p className="text-gray-600 mb-4">
              Evaluate your organization's AI readiness
            </p>
            <Link
              href="/tools/readiness-assessment"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Assessment
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Content Library</h3>
            <p className="text-gray-600 mb-4">
              Access our complete AI content collection
            </p>
            <Link
              href="/content"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Browse Library
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscoveryWidget2025;