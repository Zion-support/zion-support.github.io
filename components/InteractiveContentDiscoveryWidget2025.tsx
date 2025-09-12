import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '🌟', color: 'from-blue-500 to-purple-500' },
    { id: 'breakthrough', label: 'Breakthroughs', icon: '🚀', color: 'from-red-500 to-pink-500' },
    { id: 'revolutionary', label: 'Revolutionary', icon: '⚡', color: 'from-purple-500 to-indigo-500' },
    { id: 'future', label: 'Future Predictions', icon: '🔮', color: 'from-indigo-500 to-purple-500' },
    { id: 'case-studies', label: 'Case Studies', icon: '📊', color: 'from-green-500 to-teal-500' },
    { id: 'tools', label: 'Tools & Calculators', icon: '🛠️', color: 'from-orange-500 to-red-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Breakthrough Revolution",
      description: "Discover the most revolutionary AI breakthroughs of 2025 that are transforming industries worldwide.",
      category: "breakthrough",
      link: "/ai-2025-breakthrough-revolution",
      badge: "🚀 BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      stats: { roi: "2,500%", accuracy: "99.7%", enterprises: "500+" }
    },
    {
      id: 2,
      title: "AI 2026 Revolutionary Showcase",
      description: "Explore cutting-edge AI technologies and breakthrough innovations of 2026.",
      category: "revolutionary",
      link: "/ai-2026-revolutionary-showcase",
      badge: "🌟 REVOLUTIONARY",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      stats: { roi: "15,000%", accuracy: "99.9%", enterprises: "1,200+" }
    },
    {
      id: 3,
      title: "AI 2027-2030 Future Predictions",
      description: "Peer into the future of AI with comprehensive predictions for 2027-2030.",
      category: "future",
      link: "/ai-2027-2030-future-predictions",
      badge: "🔮 FUTURE",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      stats: { roi: "Infinite", accuracy: "99.99%", enterprises: "Global" }
    },
    {
      id: 4,
      title: "Quantum Neural Fusion Case Study",
      description: "How Fortune 500 companies achieved 3,000% ROI with quantum neural fusion technology.",
      category: "case-studies",
      link: "/case-studies/quantum-neural-fusion-breakthrough",
      badge: "📊 CASE STUDY",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      borderColor: "border-green-200",
      stats: { roi: "3,000%", accuracy: "99.7%", enterprises: "50+" }
    },
    {
      id: 5,
      title: "AI 2025 ROI Calculator",
      description: "Calculate the potential ROI of implementing AI 2025 breakthroughs in your organization.",
      category: "tools",
      link: "/tools/ai-2025-roi-calculator",
      badge: "🛠️ TOOL",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      stats: { roi: "Calculate", accuracy: "Real-time", enterprises: "Any" }
    },
    {
      id: 6,
      title: "Autonomous Manufacturing Revolution",
      description: "Revolutionary autonomous manufacturing systems achieving 8,500% ROI across global enterprises.",
      category: "revolutionary",
      link: "/case-studies/autonomous-manufacturing-2026",
      badge: "🏭 REVOLUTIONARY",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      stats: { roi: "8,500%", accuracy: "99.8%", enterprises: "200+" }
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Interactive Content Discovery
          </h3>
          <p className="text-gray-600">
            Discover revolutionary AI content tailored to your interests
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `text-white bg-gradient-to-r ${category.color} shadow-lg`
                  : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.bgColor} rounded-xl p-6 border-2 ${item.borderColor} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${item.color}`}>
                  {item.badge}
                </div>
                <div className="text-2xl">{item.category === 'breakthrough' ? '🚀' : item.category === 'revolutionary' ? '⚡' : item.category === 'future' ? '🔮' : item.category === 'case-studies' ? '📊' : '🛠️'}</div>
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h4>

              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <div className="text-xs text-gray-600">ROI</div>
                  <div className="text-sm font-bold text-green-600">{item.stats.roi}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-600">Accuracy</div>
                  <div className="text-sm font-bold text-blue-600">{item.stats.accuracy}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-600">Enterprises</div>
                  <div className="text-sm font-bold text-purple-600">{item.stats.enterprises}</div>
                </div>
              </div>

              <Link
                href={item.link}
                className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${item.color} hover:opacity-90 transition-all duration-300`}
              >
                Explore
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{contentItems.length}</div>
            <div className="text-sm text-gray-600">Total Content</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">99.9%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">15,000%</div>
            <div className="text-sm text-gray-600">Max ROI</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">1,200+</div>
            <div className="text-sm text-gray-600">Enterprises</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <Link
          href="/content-showcase"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
        >
          View All Revolutionary Content
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;