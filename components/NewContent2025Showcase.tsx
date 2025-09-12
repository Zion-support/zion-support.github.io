import React from 'react';
import Link from 'next/link';

export default function NewContent2025Showcase() {
  const newContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most transformative AI innovations delivering 2000%+ ROI",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      category: "Blog",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🚀"
    },
    {
      title: "Global Enterprise Transformation: 2000% ROI",
      description: "How a Fortune 500 company achieved unprecedented growth through AI",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      icon: "🏆"
    },
    {
      title: "AI 2026 Future Predictions",
      description: "Exclusive predictions for AI breakthroughs that will transform industries",
      href: "/blog/ai-2026-future-predictions-breakthrough",
      category: "Predictions",
      badge: "NEW",
      badgeColor: "bg-purple-500",
      icon: "🔮"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete guide with proven strategies to achieve breakthrough results",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-500",
      icon: "🛠️"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 New AI 2025 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest revolutionary AI content, featuring breakthrough technologies, 
            success stories, and implementation guides that are transforming industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newContent.map((content, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{content.icon}</span>
                  <span className={`${content.badgeColor} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                    {content.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">
                    {content.category}
                  </span>
                  <Link 
                    href={content.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
}