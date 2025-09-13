import React, { useState } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2025() {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience 10,000% ROI with transcendent intelligence that transforms reality itself.",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      category: "breakthrough",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-800 to-pink-800",
      icon: "🚀",
      metrics: "10,000% ROI"
    },
    {
      id: 2,
      title: "Global Transformation Success Story",
      description: "See how a Fortune 500 company achieved 10,000% ROI in just 30 days.",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      category: "case-study",
      badge: "SUCCESS",
      color: "from-green-500 to-blue-500",
      bgColor: "from-green-800 to-blue-800",
      icon: "🏆",
      metrics: "30 Days ROI"
    },
    {
      id: 3,
      title: "AI 2025 Revolutionary Trends & Predictions",
      description: "Discover the future of AI that will transform every industry on Earth.",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      category: "blog",
      badge: "FUTURE",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-800 to-pink-800",
      icon: "🔮",
      metrics: "95% Probability"
    },
    {
      id: 4,
      title: "Quantum Computing Solutions 2025",
      description: "Revolutionary quantum-AI fusion delivering infinite computational power.",
      link: "/quantum-computing-solutions",
      category: "technology",
      badge: "REVOLUTIONARY",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-800 to-cyan-800",
      icon: "⚛️",
      metrics: "∞ Processing"
    },
    {
      id: 5,
      title: "Autonomous Operations Mastery",
      description: "Complete automation of all business processes with zero human intervention.",
      link: "/ai-services-2025",
      category: "services",
      badge: "AUTONOMOUS",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-800 to-purple-800",
      icon: "🤖",
      metrics: "100% Automated"
    },
    {
      id: 6,
      title: "Reality Manipulation Technology",
      description: "AI systems capable of manipulating reality itself and creating new dimensions.",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      category: "breakthrough",
      badge: "TRANSCENDENT",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-800 to-orange-800",
      icon: "🌌",
      metrics: "Reality Override"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthrough', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'blog', name: 'Blog Posts', count: contentItems.filter(item => item.category === 'blog').length },
    { id: 'technology', name: 'Technology', count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'services', name: 'Services', count: contentItems.filter(item => item.category === 'services').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
            AI 2025 Content Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary AI content ever created. Transform your business with breakthrough insights, 
            case studies, and technologies that deliver infinite ROI.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.bgColor} p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold`}>
                  {item.badge}
                </div>
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-1">Key Metric</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.metrics}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={item.link}
                className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                Explore Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of companies already achieving 10,000% ROI with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Revolution
              </Link>
              <Link
                href="/webinars/ai-2025-revolutionary-breakthroughs"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
              >
                Watch Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}