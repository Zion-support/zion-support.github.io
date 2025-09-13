import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2028 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "AI 2028 Future Predictions: Revolutionary Breakthroughs",
      description: "Discover the groundbreaking AI innovations coming in 2028 that will revolutionize industries and create unprecedented opportunities.",
      category: "predictions",
      type: "blog",
      link: "/blog/ai-2028-future-predictions-breakthrough",
      badge: "BREAKTHROUGH",
      color: "purple",
      readTime: "8 min read",
      views: "15.2K",
      rating: 4.9
    },
    {
      id: 2,
      title: "AI 2028 Automotive Transformation: 3000% ROI Success",
      description: "How a leading automotive manufacturer achieved 3000% ROI through revolutionary AI 2028 technologies.",
      category: "case-studies",
      type: "case-study",
      link: "/case-studies/ai-2028-automotive-transformation-breakthrough",
      badge: "SUCCESS STORY",
      color: "green",
      readTime: "12 min read",
      views: "8.7K",
      rating: 4.8
    },
    {
      id: 3,
      title: "AI 2028 Ultimate Implementation Master Guide",
      description: "Complete roadmap to implementing AI 2028 breakthrough technologies in your organization.",
      category: "resources",
      type: "guide",
      link: "/resources/ai-2028-ultimate-implementation-master-guide",
      badge: "MASTER GUIDE",
      color: "blue",
      readTime: "25 min read",
      views: "12.3K",
      rating: 4.9
    },
    {
      id: 4,
      title: "AI 2029 Future Predictions: The Singularity Approaches",
      description: "Explore the groundbreaking AI innovations coming in 2029 as we approach the technological singularity.",
      category: "predictions",
      type: "blog",
      link: "/blog/ai-2029-future-predictions-breakthrough",
      badge: "SINGULARITY",
      color: "indigo",
      readTime: "10 min read",
      views: "22.1K",
      rating: 4.9
    },
    {
      id: 5,
      title: "AI 2029 Space Exploration Breakthrough: 5000% ROI",
      description: "How AI-powered space exploration will open up the universe for humanity with unprecedented efficiency.",
      category: "case-studies",
      type: "case-study",
      link: "/case-studies/ai-2029-space-exploration-breakthrough",
      badge: "SPACE REVOLUTION",
      color: "orange",
      readTime: "15 min read",
      views: "6.4K",
      rating: 4.7
    },
    {
      id: 6,
      title: "AI 2029 Ultimate Implementation Master Guide",
      description: "Complete roadmap for preparing for the technological singularity and AI 2029 breakthrough technologies.",
      category: "resources",
      type: "guide",
      link: "/resources/ai-2029-ultimate-implementation-master-guide",
      badge: "SINGULARITY GUIDE",
      color: "purple",
      readTime: "30 min read",
      views: "9.8K",
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'predictions', name: 'Future Predictions', count: contentItems.filter(item => item.category === 'predictions').length },
    { id: 'case-studies', name: 'Success Stories', count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: 'resources', name: 'Implementation Guides', count: contentItems.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-500 to-blue-500',
      green: 'from-green-500 to-blue-500',
      blue: 'from-blue-500 to-indigo-500',
      indigo: 'from-indigo-500 to-purple-500',
      orange: 'from-orange-500 to-red-500'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  const getBadgeColor = (color: string) => {
    const colorMap = {
      purple: 'bg-purple-100 text-purple-800',
      green: 'bg-green-100 text-green-800',
      blue: 'bg-blue-100 text-blue-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      orange: 'bg-orange-100 text-orange-800'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-gray-600">
            Explore breakthrough AI predictions, success stories, and implementation guides
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          {isExpanded ? 'Show Less' : 'Explore All'}
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search AI content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className={`grid gap-6 transition-all duration-500 ${
        isExpanded 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1 md:grid-cols-2'
      }`}>
        {filteredContent.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(item.color)}`}>
                {item.badge}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>⭐ {item.rating}</span>
                <span>•</span>
                <span>{item.views} views</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {item.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{item.readTime}</span>
                <span className="capitalize">{item.type.replace('-', ' ')}</span>
              </div>
              <div className={`w-8 h-8 bg-gradient-to-r ${getColorClasses(item.color)} rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform`}>
                →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More Button */}
      {!isExpanded && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Show All {contentItems.length} Content Items
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{contentItems.length}</div>
            <div className="text-sm text-gray-600">Total Content Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">4.8</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">74.5K</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2028;