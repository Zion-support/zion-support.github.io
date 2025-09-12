import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025() {
  const newContent = [
    {
      title: "AI 2025: Next-Generation Breakthroughs",
      description: "Discover the revolutionary AI breakthroughs coming in 2025 that will reshape industries and deliver massive ROI",
      href: "/blog/ai-2025-next-generation-breakthroughs",
      type: "Blog Post",
      badge: "NEW",
      badgeColor: "bg-red-500",
      icon: "🚀"
    },
    {
      title: "15,000% ROI Enterprise Transformation",
      description: "How a Fortune 500 company achieved unprecedented success through strategic AI implementation",
      href: "/case-studies/ai-2025-enterprise-transformation-mega-success",
      type: "Case Study",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-green-500",
      icon: "🏆"
    },
    {
      title: "Ultimate Implementation Master Guide",
      description: "Complete 150-page blueprint for achieving 10,000%+ ROI through strategic AI deployment",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      type: "Resource",
      badge: "ULTIMATE",
      badgeColor: "bg-purple-500",
      icon: "📚"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🌟 Featured Content: AI 2025 Breakthroughs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest content showcasing the most revolutionary AI innovations, success stories, and implementation strategies for 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newContent.map((content, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{content.icon}</span>
                  <span className={`${content.badgeColor} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                    {content.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">{content.type}</span>
                  <Link 
                    href={content.href}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/content-showcase"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>View All Content</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}