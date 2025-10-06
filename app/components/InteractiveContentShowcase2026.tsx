import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All', count: 12 },
    { id: 'ai', name: 'AI Solutions', count: 4 },
    { id: 'automation', name: 'Automation', count: 3 },
    { id: 'analytics', name: 'Analytics', count: 3 },
    { id: 'consulting', name: 'Consulting', count: 2 }
  ];

  const contentItems = [
    { id: 1, title: "AI-Powered Customer Service", category: "ai", featured: true },
    { id: 2, title: "Process Automation Suite", category: "automation", featured: false },
    { id: 3, title: "Real-time Analytics Dashboard", category: "analytics", featured: true },
    { id: 4, title: "Digital Transformation Strategy", category: "consulting", featured: false },
    { id: 5, title: "Machine Learning Models", category: "ai", featured: false },
    { id: 6, title: "Workflow Optimization", category: "automation", featured: true },
    { id: 7, title: "Business Intelligence Tools", category: "analytics", featured: false },
    { id: 8, title: "Change Management Consulting", category: "consulting", featured: true }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Interactive Content Showcase 2026
      </h2>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 ${
              item.featured ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {item.featured && (
              <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                Featured
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Discover how this solution can transform your business operations and drive growth.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No content found for the selected category.</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveContentShowcase2026;