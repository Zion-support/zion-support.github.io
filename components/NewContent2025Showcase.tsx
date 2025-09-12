import React from 'react';
import Link from 'next/link';

export default function NewContent2025Showcase() {
  const newContent = [
    {
      title: "AI 2025: Ultimate Trends & Predictions",
      description: "Discover the most revolutionary AI trends and predictions for 2025. From quantum AI to autonomous systems, explore the future of artificial intelligence.",
      href: "/blog/ai-2025-ultimate-trends-predictions",
      category: "Blog",
      readTime: "15 min read",
      badge: "NEW",
      badgeColor: "bg-red-500",
      icon: "🔮"
    },
    {
      title: "AI 2025 Global Enterprise Transformation: 1200% ROI Success Story",
      description: "Discover how a Fortune 500 company achieved 1200% ROI through strategic AI implementation. Real results, proven strategies, and actionable insights.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      readTime: "12 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-green-500",
      icon: "🏆"
    },
    {
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "Complete implementation guide for AI 2025 trends. Templates, checklists, frameworks, and step-by-step instructions for successful AI deployment.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      readTime: "Comprehensive Guide",
      badge: "TOOLKIT",
      badgeColor: "bg-purple-500",
      icon: "🛠️"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 New AI 2025 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest high-value content covering the most important AI trends, 
            success stories, and implementation guides for 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  <span className={`text-xs font-bold text-white px-2 py-1 rounded-full ${content.badgeColor}`}>
                    {content.badge}
                  </span>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{content.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                    {content.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {content.readTime}
                  </span>
                  <Link 
                    href={content.href}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}