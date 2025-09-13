import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'breakthrough', name: 'Breakthroughs', icon: '🚀' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆' },
    { id: 'blog', name: 'Blog Posts', icon: '📝' },
    { id: 'resources', name: 'Resources', icon: '📚' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI breakthrough delivering 10,000% ROI with 99.9% accuracy",
      category: "breakthrough",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      badgeColor: "from-red-500 to-pink-500",
      bgColor: "from-purple-600 to-blue-600",
      icon: "🚀",
      metrics: { roi: "10,000%", accuracy: "99.9%" }
    },
    {
      id: 2,
      title: "Global Transformation Success Story",
      description: "Fortune 500 company achieves unprecedented ROI through AI implementation",
      category: "case-studies",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS STORY",
      badgeColor: "from-green-500 to-emerald-500",
      bgColor: "from-green-600 to-emerald-600",
      icon: "🏆",
      metrics: { roi: "10,000%", efficiency: "500%" }
    },
    {
      id: 3,
      title: "Revolutionary Trends & Predictions",
      description: "Explore AI trends and predictions reshaping the future of technology",
      category: "blog",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      badge: "PREDICTIONS",
      badgeColor: "from-purple-500 to-pink-500",
      bgColor: "from-indigo-600 to-purple-600",
      icon: "🔮",
      metrics: { adoption: "85%", impact: "Revolutionary" }
    },
    {
      id: 4,
      title: "Revolutionary Implementation Guide",
      description: "Complete step-by-step guide for AI 2025 breakthrough implementation",
      category: "resources",
      link: "/resources/ai-2025-revolutionary-implementation-guide",
      badge: "IMPLEMENTATION",
      badgeColor: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600 to-cyan-600",
      icon: "📚",
      metrics: { phases: "4", success: "99%" }
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion Breakthrough",
      description: "Revolutionary integration of quantum computing with neural networks",
      category: "breakthrough",
      link: "/blog/quantum-neural-fusion-2026",
      badge: "QUANTUM",
      badgeColor: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-600 to-purple-600",
      icon: "⚛️",
      metrics: { speed: "10,000x", accuracy: "99.9%" }
    },
    {
      id: 6,
      title: "Manufacturing Revolution Success",
      description: "8,500% ROI achieved through autonomous manufacturing systems",
      category: "case-studies",
      link: "/case-studies/ai-2026-autonomous-manufacturing-revolution",
      badge: "MANUFACTURING",
      badgeColor: "from-orange-500 to-red-500",
      bgColor: "from-orange-600 to-red-600",
      icon: "🏭",
      metrics: { roi: "8,500%", efficiency: "300%" }
    },
    {
      id: 7,
      title: "Future Technology Predictions",
      description: "Comprehensive analysis of AI trends and future technology developments",
      category: "blog",
      link: "/blog/ai-2026-future-predictions-breakthrough",
      badge: "FUTURE",
      badgeColor: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-600 to-blue-600",
      icon: "🔮",
      metrics: { probability: "95%", impact: "Transformative" }
    },
    {
      id: 8,
      title: "Ultimate Implementation Toolkit",
      description: "Complete toolkit with tools, templates, and resources for AI implementation",
      category: "resources",
      link: "/resources/ai-2025-ultimate-implementation-toolkit",
      badge: "TOOLKIT",
      badgeColor: "from-teal-500 to-green-500",
      bgColor: "from-teal-600 to-green-600",
      icon: "🛠️",
      metrics: { tools: "50+", templates: "100+" }
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary AI content library. Discover breakthroughs, success stories, 
            and implementation guides that deliver unprecedented results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                hoveredItem === item.id ? 'ring-4 ring-blue-500' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${item.bgColor} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.badgeColor} text-white text-xs font-bold`}>
                      {item.badge}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(item.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={item.link}
                  className={`w-full bg-gradient-to-r ${item.bgColor} text-white py-3 px-4 rounded-lg font-semibold text-center block hover:opacity-90 transition-opacity duration-300`}
                >
                  Explore Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
}