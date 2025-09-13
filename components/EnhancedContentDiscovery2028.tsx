import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnhancedContentDiscovery2028 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️' },
    { id: 'neural', name: 'Neural Networks', icon: '🧠' },
    { id: 'enterprise', name: 'Enterprise AI', icon: '🏢' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'analytics', name: 'Analytics', icon: '📊' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Quantum-AI Fusion Implementation Guide",
      description: "Complete guide to implementing quantum-AI fusion in your enterprise",
      category: 'quantum',
      type: 'Guide',
      readTime: '15 min',
      difficulty: 'Advanced',
      rating: 4.9
    },
    {
      id: 2,
      title: "Neural Synthesis Case Study: Fortune 500 Success",
      description: "How a Fortune 500 company achieved 99.7% accuracy with neural synthesis",
      category: 'neural',
      type: 'Case Study',
      readTime: '12 min',
      difficulty: 'Intermediate',
      rating: 4.8
    },
    {
      id: 3,
      title: "Enterprise Automation ROI Calculator",
      description: "Calculate your potential ROI with enterprise automation solutions",
      category: 'enterprise',
      type: 'Tool',
      readTime: '5 min',
      difficulty: 'Beginner',
      rating: 4.9
    },
    {
      id: 4,
      title: "AI 2028 Technology Trends Report",
      description: "Comprehensive analysis of AI trends and predictions for 2028",
      category: 'analytics',
      type: 'Report',
      readTime: '20 min',
      difficulty: 'Advanced',
      rating: 4.7
    },
    {
      id: 5,
      title: "Automated Decision Systems Webinar",
      description: "Live webinar on implementing automated decision systems",
      category: 'automation',
      type: 'Webinar',
      readTime: '60 min',
      difficulty: 'Intermediate',
      rating: 4.8
    },
    {
      id: 6,
      title: "Quantum Computing Security Best Practices",
      description: "Essential security practices for quantum computing implementations",
      category: 'quantum',
      type: 'Guide',
      readTime: '18 min',
      difficulty: 'Advanced',
      rating: 4.9
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover AI 2028 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI 2028 resources, guides, and tools designed to accelerate your digital transformation.
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
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-700 border border-gray-200'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.type === 'Guide' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                    item.type === 'Tool' ? 'bg-purple-100 text-purple-800' :
                    item.type === 'Report' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.type}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm font-semibold mr-1">{item.rating}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.readTime}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.difficulty}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/content/${item.id}`}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Access Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            Load More Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentDiscovery2028;