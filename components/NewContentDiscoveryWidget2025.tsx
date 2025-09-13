import React from 'react';
import Link from 'next/link';

export default function NewContentDiscoveryWidget2025() {
  const newContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI technologies delivering 2,500-5,000% ROI with quantum computing and neural interfaces.",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "Breakthrough Technology",
      icon: "⚛️",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500"
    },
    {
      title: "10,000% ROI Success Story",
      description: "Fortune 500 company achieves complete digital transformation with our AI breakthrough technologies.",
      href: "/case-studies/ai-2025-global-transformation-breakthrough",
      category: "Case Study",
      icon: "🏆",
      badge: "10,000% ROI",
      badgeColor: "bg-green-500"
    },
    {
      title: "AI 2025 Revolutionary Trends & Predictions",
      description: "Discover the breakthrough AI trends and technologies that will transform 2025 and beyond.",
      href: "/blog/ai-2025-revolutionary-trends-predictions",
      category: "Blog Post",
      icon: "🔮",
      badge: "NEW",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete step-by-step guide with templates, checklists, and expert support for maximum ROI.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource Guide",
      icon: "🛠️",
      badge: "ESSENTIAL",
      badgeColor: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover New AI 2025 Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest revolutionary content showcasing the most significant AI breakthrough in history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newContent.map((content, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{content.icon}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${content.badgeColor}`}>
                  {content.badge}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {content.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {content.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">
                  {content.category}
                </span>
                <Link 
                  href={content.href}
                  className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Content
          </Link>
        </div>
      </div>
    </section>
  );
}