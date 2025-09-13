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
      metrics: "10,000% ROI"
    },
    {
      id: 3,
      title: "Revolutionary AI Trends & Predictions",
      description: "Discover the 2025 AI trends that will reshape the future of business.",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      category: "insights",
      badge: "TRENDS",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-800 to-indigo-800",
      icon: "📈",
      metrics: "Future-Ready"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'breakthrough', label: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'insights', label: 'Insights', count: contentItems.filter(item => item.category === 'insights').length }
  ];

  const filteredItems = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our groundbreaking AI content that's transforming industries and delivering unprecedented results
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Badge */}
              <div className={`absolute -top-3 -right-3 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                {item.badge}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.bgColor} text-white text-sm font-semibold`}>
                  {item.metrics}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={item.link}
                className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-gradient-to-r ${item.color} text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:from-white group-hover:to-gray-100 group-hover:text-gray-900`}
              >
                Explore Now
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already experiencing the AI 2025 revolution. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-purple-500 text-purple-300 font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}