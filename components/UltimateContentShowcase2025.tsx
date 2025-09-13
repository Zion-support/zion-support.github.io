import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025 Advanced Automation Mastery",
      description: "Master the most advanced AI automation techniques of 2025. Learn from Fortune 500 implementations and achieve unprecedented efficiency gains.",
      href: "/blog/ai-2025-advanced-automation-mastery",
      category: "Mastery Guide",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      stats: "2000%+ ROI",
      icon: "🤖"
    },
    {
      title: "Fortune 500 Achieves 800% ROI Success",
      description: "Discover how a global manufacturing company transformed their operations, saving $120M annually with AI automation.",
      href: "/case-studies/ai-2025-global-enterprise-automation-success",
      category: "Case Study",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      stats: "$120M Savings",
      icon: "🏆"
    },
    {
      title: "AI 2025 Revolutionary Breakthrough Guide",
      description: "Comprehensive guide to the latest AI breakthroughs and how to implement them in your organization.",
      href: "/blog/ai-2025-revolutionary-breakthrough-guide",
      category: "Implementation",
      badge: "NEW",
      badgeColor: "bg-blue-500",
      stats: "15+ Strategies",
      icon: "🚀"
    },
    {
      title: "Quantum Computing Solutions 2025",
      description: "Explore cutting-edge quantum computing applications and their real-world business implementations.",
      href: "/quantum-computing-solutions-2025",
      category: "Technology",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-purple-500",
      stats: "10x Performance",
      icon: "⚛️"
    },
    {
      title: "Enterprise AI Transformation Blueprint",
      description: "Step-by-step blueprint for transforming your enterprise with AI, based on 100+ successful implementations.",
      href: "/resources/enterprise-ai-transformation-blueprint",
      category: "Blueprint",
      badge: "ESSENTIAL",
      badgeColor: "bg-orange-500",
      stats: "100+ Companies",
      icon: "📋"
    },
    {
      title: "AI ROI Calculator & Assessment Tool",
      description: "Calculate your potential AI ROI and assess your organization's readiness for AI implementation.",
      href: "/tools/ai-roi-calculator-2025",
      category: "Tool",
      badge: "FREE",
      badgeColor: "bg-teal-500",
      stats: "Instant Results",
      icon: "🧮"
    }
  ];

  const categories = [
    { name: "All Content", count: "50+", active: true },
    { name: "Mastery Guides", count: "12", active: false },
    { name: "Case Studies", count: "18", active: false },
    { name: "Tools & Calculators", count: "8", active: false },
    { name: "Implementation", count: "15", active: false }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-blue-800">🎯 FEATURED CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most valuable AI resources, case studies, and implementation guides. 
            Everything you need to master AI in 2025 and beyond.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content, guides, case studies..."
                className="w-full px-6 py-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category.active
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="p-8">
                {/* Badge and Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">{content.category}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${content.badgeColor}`}>
                    {content.badge}
                  </span>
                </div>

                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-4xl">{content.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-semibold text-green-600">
                    {content.stats}
                  </div>
                  <div className="text-sm text-gray-500">
                    Read more →
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={content.href}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105"
                >
                  Explore Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl"
          >
            <span>View All Content</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Impact Statistics</h3>
            <p className="text-gray-600">Real results from our content library</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Premium Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}