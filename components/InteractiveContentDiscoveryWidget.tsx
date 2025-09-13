import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InteractiveContentDiscoveryWidget: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025: Advanced Content Strategy",
      category: "strategy",
      type: "blog",
      description: "Revolutionary AI content strategies delivering 300% higher engagement and 500% ROI improvements",
      tags: ["AI", "Content Strategy", "Automation", "ROI"],
      link: "/blog/ai-2025-advanced-content-strategy",
      featured: true,
      engagement: "300% boost"
    },
    {
      id: 2,
      title: "Content Personalization Breakthrough",
      category: "personalization",
      type: "blog",
      description: "Revolutionary AI technology delivering 400% higher engagement through real-time content personalization",
      tags: ["Personalization", "AI", "Machine Learning", "Engagement"],
      link: "/blog/ai-2025-content-personalization-breakthrough",
      featured: true,
      engagement: "400% boost"
    },
    {
      id: 3,
      title: "AI Content Automation Master Guide",
      category: "automation",
      type: "resource",
      description: "Complete blueprint for implementing AI-powered content automation with 300% higher ROI",
      tags: ["Automation", "AI", "Implementation", "Guide"],
      link: "/resources/ai-content-automation-master-guide-2025",
      featured: true,
      engagement: "500% ROI"
    },
    {
      id: 4,
      title: "Enterprise Content Strategy Success",
      category: "case-study",
      type: "case-study",
      description: "How a Fortune 500 company achieved 300% higher engagement rates using AI content strategies",
      tags: ["Enterprise", "Case Study", "Success", "ROI"],
      link: "/case-studies/ai-content-strategy-enterprise-success-2025",
      featured: false,
      engagement: "300% boost"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', icon: '📚' },
    { id: 'strategy', label: 'Strategy', icon: '🎯' },
    { id: 'personalization', label: 'Personalization', icon: '🎨' },
    { id: 'automation', label: 'Automation', icon: '⚡' },
    { id: 'case-study', label: 'Case Studies', icon: '📊' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🔍 Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our latest AI content breakthroughs and find exactly what you need
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search content, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/20 text-gray-300 hover:bg-white/30'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(item => (
            <div key={item.id} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
              {/* Featured Badge */}
              {item.featured && (
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ Featured
                  </span>
                  <span className="ml-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.engagement}
                  </span>
                </div>
              )}

              {/* Content Type Icon */}
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">
                  {item.type === 'blog' ? '📝' : item.type === 'resource' ? '📚' : '📊'}
                </span>
                <span className="text-sm text-gray-400 uppercase tracking-wide">
                  {item.type === 'case-study' ? 'Case Study' : item.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, index) => (
                  <span key={index} className="bg-white/20 text-gray-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Link
                to={item.link}
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                {item.type === 'case-study' ? 'View Case Study' : item.type === 'resource' ? 'Get Guide' : 'Read More'}
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Content Performance Highlights</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">300-400%</div>
              <div className="text-gray-300">Engagement Boost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">500%</div>
              <div className="text-gray-300">ROI Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget;